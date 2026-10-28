// Admin authentication with Supabase Auth (no Firebase).
// The page signs in with e-mail + password and a TOTP code (two-factor); the resulting access token is
// validated here with Supabase Auth itself (auth.getUser), then we require: an allow-listed user,
// a confirmed e-mail, and assurance level aal2 (the second factor was actually used for this session).
import { db, hmacShort } from "./lib.ts";

export type AdminUser = { uid: string; email: string; confirmed: boolean; aal: string };

const cache = new Map<string, { user: AdminUser | null; exp: number }>();

function claims(token: string): Record<string, unknown> {
  try {
    const p = token.split(".")[1];
    const pad = "=".repeat((4 - (p.length % 4)) % 4);
    return JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(p.replace(/-/g, "+").replace(/_/g, "/") + pad), (c) => c.charCodeAt(0))));
  } catch {
    return {};
  }
}

/** Returns the user for a valid, unexpired Supabase access token; null otherwise. */
export async function verifyAccessToken(token: unknown): Promise<AdminUser | null> {
  if (typeof token !== "string" || token.length > 8192 || token.split(".").length !== 3) return null;
  const key = await hmacShort("tok:" + token);
  const hit = cache.get(key);
  if (hit && hit.exp > Date.now()) return hit.user;

  const { data, error } = await db.auth.getUser(token);
  const c = claims(token);
  let user: AdminUser | null = null;
  if (!error && data?.user && c.sub === data.user.id) {
    // auth.getUser has verified the token with Supabase Auth, so its claims (aal) can be trusted.
    user = {
      uid: data.user.id,
      email: String(data.user.email || "").trim().toLowerCase(),
      confirmed: !!data.user.email_confirmed_at,
      aal: typeof c.aal === "string" ? c.aal : "aal1",
    };
  } else if (error && !(error.status === 401 || error.status === 403)) {
    return null;                                   // transient failure: do not cache, just refuse
  }
  const exp = Math.min(Date.now() + 60_000, typeof c.exp === "number" ? c.exp * 1000 : 0);
  if (cache.size > 500) cache.clear();
  cache.set(key, { user, exp });
  return user;
}

/** Admin = user id on ADMIN_USER_IDS (if set), otherwise a confirmed e-mail on ADMIN_EMAILS. */
export function isAdmin(u: AdminUser): boolean {
  const ids = (Deno.env.get("ADMIN_USER_IDS") || "").split(",").map((s) => s.trim()).filter(Boolean);
  if (ids.length) return ids.includes(u.uid);
  const emails = (Deno.env.get("ADMIN_EMAILS") || "designlavrinenko@gmail.com")
    .split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
  return u.confirmed && !!u.email && emails.includes(u.email);
}

/** Two-factor is required unless explicitly switched off (ADMIN_REQUIRE_MFA=false). */
export function mfaSatisfied(u: AdminUser): boolean {
  return (Deno.env.get("ADMIN_REQUIRE_MFA") || "true").toLowerCase() === "false" || u.aal === "aal2";
}

export function _resetAuthCache() { cache.clear(); }
