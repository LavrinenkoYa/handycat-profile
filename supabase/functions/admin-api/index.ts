// admin-api — the only way admin.html reaches data. Every call carries the admin's Supabase Auth access
// token, validated here with Supabase Auth; the user must be on the admin allow-list and have passed
// two-factor authentication for this session (aal2).
// Data access is a narrow port of the page's old helpers (get/list/upsert/merge/delete) restricted to
// whitelisted tables, columns and operations; plus a few purpose-built actions.
//
// POST { action, access_token, ... }
//   whoami
//   db                 { op: get|list|upsert|merge|delete, table, id?, row?, filters?, from?, to? }
//   issue-company-link { company_id }            → one-time sign-in link for a company (7 days)
//   send-mail          { to, subject, html }     → only to addresses already known to the system
//   admins-list                                  → owner only: who has access to the admin panel
//   admins-invite      { email }                 → owner only: e-mails a link to set a password
//   admins-remove      { user_id }               → owner only: revokes access (not for owners)
import { allow, audit, clientIp, db, hmacHex, hmacShort, json, originAllowed, preflight, randomToken } from "./lib.ts";
import { adminRole, mfaSatisfied, verifyAccessToken, type AdminRole, type AdminUser } from "./auth.ts";
import { mailMode, sendMail } from "./mail.ts";

type Body = Record<string, unknown>;
// deno-lint-ignore no-explicit-any
type Row = Record<string, any>;
type Op = "get" | "list" | "upsert" | "merge" | "delete";

const APP_BASE_URL = (Deno.env.get("APP_BASE_URL") || "https://app.handycat.us").replace(/\/+$/, "");
const LINK_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const BUCKET = "order-photos";

// ── what the admin page may touch ────────────────────────────────────────────
const ALL: Op[] = ["get", "list", "upsert", "merge", "delete"];
const SCHEMA: Record<string, { cols: string[]; ops: Op[] }> = {
  company_applications: { ops: ["get", "list", "merge"], cols: ["id", "company_name", "contact_person", "email", "phone", "address", "region", "business_type", "team_size", "services", "website", "license_number", "years_in_business", "insurance_provider", "notes", "licensing_skipped", "requested_cards", "card_package", "price_per_card", "total_price", "status", "admin_message", "created_at", "updated_at"] },
  companies: { ops: ALL, cols: ["id", "name", "location", "email", "phone", "description", "status", "bonus_leads", "requested_cards", "application_id", "created_at"] },
  card_requests: { ops: ALL, cols: ["id", "company_id", "company_name", "email", "count", "notes", "status", "fulfilled_count", "created_at", "approved_at", "started_at", "rejected_at", "generated_count"] },
  lead_requests: { ops: ["get", "list", "merge", "delete"], cols: ["id", "company_id", "company_name", "email", "count", "notes", "status", "created_at"] },
  nfc_batches: { ops: ALL, cols: ["id", "number", "label", "count", "status", "created_at"] },
  nfc_cards: { ops: ALL, cols: ["id", "print_id", "status", "company_id", "handyman_id", "client_id", "batch_id", "request_id", "source", "created_at", "assigned_at", "activated_at"] },
  clients: { ops: ["get", "list", "delete"], cols: ["id", "name", "phone", "email", "address", "orders_count", "created_at", "rating_avg", "review_count"] },
  handymen: { ops: ALL, cols: ["id", "name", "phone", "email", "experience_years", "skills", "company_id", "rating_avg", "review_count", "status", "created_at", "orders_completed", "assigned_card_token"] },
  orders: { ops: ["get", "list", "merge"], cols: ["id", "client_id", "handyman_id", "company_id", "card_token", "category", "description", "status", "is_public", "is_onboarding", "photos", "price", "client_rating", "client_review", "reviewed_at", "created_at", "completed_at"] },
  archive: { ops: ALL, cols: ["id", "type", "name", "company", "cards", "handymen", "deleted_cards", "deleted_handymen", "deleted_at", "expires_at"] },
  // legacy sign-in tokens: only read (to show / back up) and delete (before deleting a company)
  company_tokens: { ops: ["get", "list", "delete"], cols: ["id", "company_id", "email", "expires_at", "used", "created_at"] },
};
/** Derived fields the API itself adds to rows; silently dropped if a page sends them back. */
const DERIVED = new Set(["photo_urls"]);

const fail = (status: number, error: string, origin: string | null, extra: Body = {}) =>
  json(status, { ok: false, error, ...extra }, origin);

const isId = (v: unknown): v is string => typeof v === "string" && v.length >= 1 && v.length <= 200 && !/[\u0000-\u001f]/.test(v);
function cleanValue(v: unknown, depth = 0): unknown {
  if (v === null || typeof v === "string" || typeof v === "boolean") return v;
  if (typeof v === "number") return Number.isFinite(v) ? v : null;
  if (Array.isArray(v) && depth < 4) return v.map((x) => cleanValue(x, depth + 1));
  if (typeof v === "object" && depth < 4) {
    const o: Row = {};
    for (const [k, x] of Object.entries(v as Row)) if (k !== "__proto__" && k !== "constructor" && k !== "prototype") o[k] = cleanValue(x, depth + 1);
    return o;
  }
  throw new Error("bad value");
}
/** Validates keys against the table's columns; returns the clean row or the first bad column. */
function cleanRow(table: string, row: unknown): { row?: Row; bad?: string } {
  if (!row || typeof row !== "object" || Array.isArray(row)) return { bad: "(row)" };
  const cols = SCHEMA[table].cols;
  const out: Row = {};
  const src = { ...(row as Row) };
  // Old pages write handymen.companyIds (→ company_ids, a column that never existed). Map it.
  if (table === "handymen" && Array.isArray(src.company_ids)) {
    if (src.company_id == null || src.company_id === "") src.company_id = src.company_ids[0] ?? "";
    delete src.company_ids;
  }
  for (const [k, v] of Object.entries(src)) {
    if (DERIVED.has(k)) continue;
    if (!cols.includes(k)) return { bad: k };
    try { out[k] = cleanValue(v); } catch { return { bad: k }; }
  }
  return { row: out };
}

/** Orders keep raw photo references in `photos`; the page displays `photo_urls` (signed for private files). */
async function withPhotoUrls(rows: Row[]): Promise<Row[]> {
  const paths = new Set<string>();
  for (const o of rows) for (const p of o.photos ?? []) if (typeof p === "string" && p.startsWith("sb:")) paths.add(p.slice(3));
  const urls: Record<string, string> = {};
  if (paths.size) {
    const { data } = await db.storage.from(BUCKET).createSignedUrls([...paths], 3600);
    for (const d of data ?? []) if (d.signedUrl && d.path) urls[d.path] = d.signedUrl;
  }
  return rows.map((o) => ({
    ...o,
    photo_urls: (o.photos ?? []).map((p: string) => (typeof p !== "string" ? null : p.startsWith("sb:") ? urls[p.slice(3)] : /^https:\/\//.test(p) ? p : null)).filter(Boolean),
  }));
}

// ── db ─────────────────────────────────────────────────────────────────────
async function dbOp(b: Body, admin: AdminUser, ip: string, origin: string | null): Promise<Response> {
  const table = typeof b.table === "string" ? b.table : "";
  const op = b.op as Op;
  const spec = SCHEMA[table];
  if (!spec) return fail(400, "bad_table", origin);
  if (!spec.ops.includes(op)) return fail(403, "op_not_allowed", origin);
  const actor = `admin:${admin.uid}`;

  if (op === "get") {
    if (!isId(b.id)) return fail(400, "bad_id", origin);
    const { data, error } = await db.from(table).select("*").eq("id", b.id).maybeSingle();
    if (error) { console.error("get", table, error.message); return fail(500, "server_error", origin); }
    const row = data && table === "orders" ? (await withPhotoUrls([data]))[0] : data;
    return json(200, { ok: true, row: row ?? null }, origin);
  }

  if (op === "list") {
    const from = Number.isInteger(b.from) ? (b.from as number) : 0;
    const to = Number.isInteger(b.to) ? (b.to as number) : from + 999;
    if (from < 0 || to < from || to - from > 999) return fail(400, "bad_range", origin);
    const filters = Array.isArray(b.filters) ? b.filters : [];
    if (filters.length > 5) return fail(400, "bad_filter", origin);
    let q = db.from(table).select("*");
    for (const f of filters) {
      const col = (f as Row)?.col, val = (f as Row)?.value;
      if (typeof col !== "string" || !spec.cols.includes(col)) return fail(400, "bad_filter", origin);
      if (!(val === null || ["string", "number", "boolean"].includes(typeof val))) return fail(400, "bad_filter", origin);
      q = val === null ? q.is(col, null) : q.eq(col, val);
    }
    const { data, error } = await q.order("id").range(from, to);
    if (error) { console.error("list", table, error.message); return fail(500, "server_error", origin); }
    const rows = table === "orders" ? await withPhotoUrls(data ?? []) : (data ?? []);
    return json(200, { ok: true, rows }, origin);
  }

  if (op === "delete") {
    if (!isId(b.id)) return fail(400, "bad_id", origin);
    const { error } = await db.from(table).delete().eq("id", b.id);
    if (error) { console.error("delete", table, error.message); return fail(409, "db_error", origin, { detail: error.message }); }
    await audit(actor, `db:delete`, `${table}:${b.id}`, ip);
    return json(200, { ok: true }, origin);
  }

  // writes
  const { row, bad } = cleanRow(table, b.row);
  if (!row) return fail(400, "bad_column", origin, { column: bad });

  if (op === "upsert") {
    if (!isId(row.id)) return fail(400, "bad_id", origin);
    const { error } = await db.from(table).upsert(row);
    if (error) { console.error("upsert", table, error.message); return fail(409, "db_error", origin, { detail: error.message }); }
    await audit(actor, "db:upsert", `${table}:${row.id}`, ip);
    return json(200, { ok: true }, origin);
  }

  // merge = partial update; creates the row if it does not exist (same as the page's old helper)
  if (!isId(b.id)) return fail(400, "bad_id", origin);
  delete row.id;
  const upd = await db.from(table).update(row).eq("id", b.id).select("id");
  if (!upd.error && upd.data && upd.data.length > 0) {
    await audit(actor, "db:merge", `${table}:${b.id}`, ip);
    return json(200, { ok: true, created: false }, origin);
  }
  const ins = await db.from(table).upsert({ ...row, id: b.id });
  if (ins.error) { console.error("merge", table, ins.error.message); return fail(409, "db_error", origin, { detail: ins.error.message }); }
  await audit(actor, "db:merge", `${table}:${b.id}`, ip, { created: true });
  return json(200, { ok: true, created: true }, origin);
}

// ── purpose-built actions ────────────────────────────────────────────────────
async function issueCompanyLink(b: Body, admin: AdminUser, ip: string, origin: string | null): Promise<Response> {
  if (!isId(b.company_id)) return fail(400, "bad_id", origin);
  const { data: co } = await db.from("companies").select("id,email,status").eq("id", b.company_id).maybeSingle();
  if (!co) return fail(404, "not_found", origin);
  if (co.status === "inactive") return fail(409, "company_inactive", origin);
  const token = randomToken(32);
  const ins = await db.from("login_links").insert({
    token_hash: await hmacHex("link:" + token),
    company_id: co.id,
    email: String(co.email || "").trim().toLowerCase(),
    expires_at: new Date(Date.now() + LINK_TTL_MS).toISOString(),
  });
  if (ins.error) { console.error("login_links insert", ins.error.message); return fail(500, "server_error", origin); }
  await audit(`admin:${admin.uid}`, "company_link_issued", co.id, ip);
  const base = origin && originAllowed(origin) ? origin : APP_BASE_URL;
  return json(200, { ok: true, url: `${base}/company?token=${token}`, expires_in_days: 7 }, origin);
}

const likeEscape = (s: string) => s.replace(/[\\%_]/g, "\\$&");
async function knownAddress(email: string): Promise<boolean> {
  for (const table of ["company_applications", "companies", "card_requests", "lead_requests"]) {
    const { data } = await db.from(table).select("id").ilike("email", likeEscape(email)).limit(1);
    if (data && data.length) return true;
  }
  return false;
}

async function sendMailAction(b: Body, admin: AdminUser, ip: string, origin: string | null): Promise<Response> {
  const to = typeof b.to === "string" ? b.to.trim() : "";
  const subject = typeof b.subject === "string" ? b.subject.replace(/[\u0000-\u001f\u007f]+/g, " ").trim() : "";
  const html = typeof b.html === "string" ? b.html : "";
  if (!/^[^\s@<>"',;]+@[^\s@<>"',;]+\.[^\s@<>"',;]+$/.test(to) || to.length > 254) return fail(400, "bad_recipient", origin);
  if (!subject || subject.length > 250 || !html || html.length > 100_000) return fail(400, "bad_message", origin);
  // The admin session must not become an open relay: only people who applied / have a company / sent a request.
  if (!(await knownAddress(to))) return fail(403, "unknown_recipient", origin);
  if (!(await allow(`admin-mail:${admin.uid}`, 86400, 300))) return fail(429, "rate_limited", origin);
  const r = await sendMail(to, { subject, html });
  await audit(`admin:${admin.uid}`, "mail_sent", await hmacShort(to.toLowerCase()), ip, { ok: r.ok });
  return r.ok ? json(200, { ok: true }, origin) : fail(502, "mail_failed", origin);
}

// ── admins (owner only) ──────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[^\s@<>"',;]+$/;
const escHtml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");

async function adminsList(origin: string | null): Promise<Response> {
  const { data, error } = await db.from("admin_users").select("user_id,email,role,created_at").order("created_at");
  if (error) { console.error("admins-list", error.message); return fail(500, "server_error", origin); }
  // "pending" = invited, has not set a password and signed in yet
  const { data: users } = await db.auth.admin.listUsers({ page: 1, perPage: 1000 });
  const seen = new Map<string, string | null>();
  for (const u of users?.users ?? []) seen.set(u.id, u.last_sign_in_at ?? null);
  const admins = (data ?? []).map((a: Row) => ({ ...a, last_sign_in_at: seen.get(a.user_id) ?? null, pending: !seen.get(a.user_id) }));
  return json(200, { ok: true, admins }, origin);
}

async function adminsInvite(b: Body, admin: AdminUser, ip: string, origin: string | null): Promise<Response> {
  const email = typeof b.email === "string" ? b.email.trim().toLowerCase() : "";
  if (!EMAIL_RE.test(email) || email.length > 254) return fail(400, "bad_email", origin);
  if (!(await allow(`admin-invite:${admin.uid}`, 86400, 20))) return fail(429, "rate_limited", origin);

  const { data: existing } = await db.from("admin_users").select("user_id").ilike("email", email.replace(/[\\%_]/g, "\\$&")).maybeSingle();
  if (existing) return fail(409, "already_admin", origin);

  // The link opens admin.html, which lets the person choose a password; 2FA is set up at their first sign-in.
  const redirectTo = `${origin && originAllowed(origin) ? origin : APP_BASE_URL}/admin.html`;
  let link = await db.auth.admin.generateLink({ type: "invite", email, options: { redirectTo } });
  if (link.error) {
    // Already has an account (e.g. signed up before): send a "set password" link for it instead.
    link = await db.auth.admin.generateLink({ type: "recovery", email, options: { redirectTo } });
  }
  const userId = link.data?.user?.id;
  const actionLink = link.data?.properties?.action_link;
  if (link.error || !userId || !actionLink) { console.error("generateLink", link.error?.message); return fail(500, "invite_failed", origin); }

  const ins = await db.from("admin_users").insert({ user_id: userId, email, role: "admin", created_by: admin.uid });
  if (ins.error) { console.error("admin_users insert", ins.error.message); return fail(500, "server_error", origin); }

  const mail = await sendMail(email, {
    subject: "You've been invited to the HandyCat admin panel",
    html: "<div style='font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px'>" +
      "<h2 style='color:#185FA5'>HandyCat</h2>" +
      `<p>${escHtml(admin.email)} invited you to the HandyCat admin panel.</p>` +
      "<p>Click the button to choose your password. At your first sign-in you will also set up two-factor authentication with an authenticator app.</p>" +
      `<div style='margin:24px 0'><a href='${escHtml(actionLink)}' style='display:inline-block;background:#185FA5;color:#fff;text-decoration:none;padding:14px 28px;border-radius:12px;font-weight:600;font-size:15px'>Set my password</a></div>` +
      "<p style='font-size:13px;color:#888'>The link can be used once and expires in 24 hours. If you did not expect this e-mail, ignore it.</p></div>",
  });
  await audit(`admin:${admin.uid}`, "admin_invited", userId, ip, { mail: mail.ok });
  return json(200, { ok: true, user_id: userId, mail_sent: mail.ok }, origin);
}

async function adminsRemove(b: Body, admin: AdminUser, ip: string, origin: string | null): Promise<Response> {
  const userId = typeof b.user_id === "string" ? b.user_id : "";
  if (!/^[0-9a-f-]{36}$/i.test(userId)) return fail(400, "bad_id", origin);
  if (userId === admin.uid) return fail(409, "cannot_remove_self", origin);
  const { data: row } = await db.from("admin_users").select("role").eq("user_id", userId).maybeSingle();
  if (!row) return fail(404, "not_found", origin);
  if (row.role === "owner") return fail(409, "cannot_remove_owner", origin);
  const del = await db.from("admin_users").delete().eq("user_id", userId);
  if (del.error) { console.error("admins-remove", del.error.message); return fail(500, "server_error", origin); }
  // Their account exists only for the admin panel: delete it, so the password and 2FA are gone too.
  const du = await db.auth.admin.deleteUser(userId);
  if (du.error) console.error("deleteUser", du.error.message);
  await audit(`admin:${admin.uid}`, "admin_removed", userId, ip);
  return json(200, { ok: true }, origin);
}

// ── router ───────────────────────────────────────────────────────────────────
Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  if (req.method === "OPTIONS") return preflight(origin);
  if (origin && !originAllowed(origin)) return json(403, { ok: false, error: "forbidden_origin" }, null);
  if (req.method !== "POST") return fail(405, "method_not_allowed", origin);

  let body: Body;
  try {
    const raw = await req.text();
    if (raw.length > 2_000_000) return fail(413, "too_large", origin);
    const parsed = JSON.parse(raw);
    if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) return fail(400, "bad_request", origin);
    body = parsed as Body;
  } catch {
    return fail(400, "bad_request", origin);
  }

  const ip = clientIp(req);
  try {
    if (body.action === "health") return json(200, { ok: true, mail: mailMode() }, origin);
    const ipKey = await hmacShort(ip);
    const user = await verifyAccessToken(body.access_token);
    if (!user) {
      if (!(await allow(`admin-badtoken:ip:${ipKey}`, 3600, 60))) return fail(429, "rate_limited", origin);
      return fail(401, "token_invalid", origin);
    }
    const role: AdminRole | null = await adminRole(user);
    if (!role) {
      await audit(`user:${user.uid}`, "admin_denied", null, ip);
      return fail(403, "not_authorized", origin);
    }
    if (!mfaSatisfied(user)) return fail(403, "mfa_required", origin);
    if (!(await allow(`admin:${user.uid}`, 3600, 20000))) return fail(429, "rate_limited", origin);

    if (typeof body.action === "string" && body.action.startsWith("admins-") && role !== "owner") {
      await audit(`admin:${user.uid}`, "owner_action_denied", body.action, ip);
      return fail(403, "owner_only", origin);
    }
    switch (body.action) {
      case "whoami": return json(200, { ok: true, uid: user.uid, email: user.email, aal: user.aal, role }, origin);
      case "admins-list": return await adminsList(origin);
      case "admins-invite": return await adminsInvite(body, user, ip, origin);
      case "admins-remove": return await adminsRemove(body, user, ip, origin);
      case "db": return await dbOp(body, user, ip, origin);
      case "issue-company-link": return await issueCompanyLink(body, user, ip, origin);
      case "send-mail": return await sendMailAction(body, user, ip, origin);
      default: return fail(400, "unknown_action", origin);
    }
  } catch (e) {
    console.error("unhandled", String(e));
    return fail(500, "server_error", origin);
  }
});
