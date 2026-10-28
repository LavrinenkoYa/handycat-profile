// Shared helpers: service-role DB client, hashing, tickets, rate limits, CORS, audit.
import { createClient, type SupabaseClient } from "npm:@supabase/supabase-js@2";

export const db: SupabaseClient = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  { auth: { persistSession: false, autoRefreshToken: false } },
);

const enc = new TextEncoder();
const dec = new TextDecoder();

// ── keyed hashing ────────────────────────────────────────────────────────────
// HASH_PEPPER (optional secret) is the HMAC key. If it is not set we derive one from
// the project's service-role key, so the function works out of the box. Rotating either
// invalidates outstanding codes/tickets/sessions (all short-lived), nothing else.
let keyPromise: Promise<CryptoKey> | null = null;
function hmacKey(): Promise<CryptoKey> {
  if (!keyPromise) {
    keyPromise = (async () => {
      const raw = Deno.env.get("HASH_PEPPER") ||
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
      if (raw.length < 16) throw new Error("no usable HMAC secret");
      return await crypto.subtle.importKey(
        "raw",
        enc.encode("hc-v1:" + raw),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"],
      );
    })();
  }
  return keyPromise;
}

function toHex(buf: ArrayBuffer): string {
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

/** HMAC-SHA256 hex. Callers always prefix `data` with a purpose ("otp:", "ticket:", "link:"). */
export async function hmacHex(data: string): Promise<string> {
  return toHex(await crypto.subtle.sign("HMAC", await hmacKey(), enc.encode(data)));
}

export async function hmacShort(data: string): Promise<string> {
  return (await hmacHex("short:" + data)).slice(0, 20);
}

export function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

// ── randomness / encoding ────────────────────────────────────────────────────
export function b64url(bytes: Uint8Array): string {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function b64urlToStr(s: string): string {
  const pad = "=".repeat((4 - (s.length % 4)) % 4);
  const bin = atob(s.replace(/-/g, "+").replace(/_/g, "/") + pad);
  return dec.decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)));
}
export function randomToken(nBytes = 32): string {
  return b64url(crypto.getRandomValues(new Uint8Array(nBytes)));
}
/** Uniform n-digit numeric code (rejection sampling, no modulo bias). */
export function randomDigits(n = 6): string {
  const mod = 10 ** n;
  const limit = Math.floor(0x100000000 / mod) * mod;
  const buf = new Uint32Array(1);
  while (true) {
    crypto.getRandomValues(buf);
    if (buf[0] < limit) return String(buf[0] % mod).padStart(n, "0");
  }
}
export function randomId(len: number, alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"): string {
  const bytes = crypto.getRandomValues(new Uint8Array(len));
  return [...bytes].map((b) => alphabet[b % alphabet.length]).join("");
}

// ── stateless ticket proving "this email was just verified" ─────────────────
export async function signTicket(email: string, ttlSec = 1800): Promise<string> {
  const payload = b64url(enc.encode(JSON.stringify({
    v: 1,
    e: email,
    x: Math.floor(Date.now() / 1000) + ttlSec,
  })));
  return payload + "." + await hmacHex("ticket:" + payload);
}
/** Returns the verified email, or null if the ticket is forged, malformed or expired. */
export async function readTicket(t: unknown): Promise<string | null> {
  if (typeof t !== "string" || t.length > 600) return null;
  const parts = t.split(".");
  if (parts.length !== 2 || !parts[0] || !parts[1]) return null;
  const expect = await hmacHex("ticket:" + parts[0]);
  if (!timingSafeEqual(parts[1], expect)) return null;
  try {
    const o = JSON.parse(b64urlToStr(parts[0]));
    if (o.v !== 1 || typeof o.e !== "string" || typeof o.x !== "number") return null;
    if (o.x < Math.floor(Date.now() / 1000)) return null;
    return o.e;
  } catch {
    return null;
  }
}

// ── rate limiting (atomic, in Postgres) ──────────────────────────────────────
/** true = allowed. Fails closed if the limiter itself errors. */
export async function allow(key: string, windowSec: number, max: number): Promise<boolean> {
  const { data, error } = await db.rpc("rate_limit_hit", {
    p_key: key,
    p_window_seconds: windowSec,
    p_max: max,
  });
  if (error) {
    console.error("rate_limit_hit failed", error.message);
    return false;
  }
  return data === true;
}

// ── request helpers ──────────────────────────────────────────────────────────
export function clientIp(req: Request): string {
  const cf = req.headers.get("cf-connecting-ip");
  if (cf) return cf.trim();
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return "unknown";
}

const DEFAULT_ORIGINS = ["https://app.handycat.us"];
const PREVIEW_RE = /^https:\/\/project-2i6ok-[a-z0-9-]+-handycat\.vercel\.app$/;

export function originAllowed(origin: string): boolean {
  const list = (Deno.env.get("ALLOWED_ORIGINS") || "")
    .split(",").map((s) => s.trim()).filter(Boolean);
  const origins = list.length ? list : DEFAULT_ORIGINS;
  return origins.includes(origin) || PREVIEW_RE.test(origin);
}

function corsHeaders(origin: string | null): Record<string, string> {
  const h: Record<string, string> = {
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Max-Age": "600",
    "Vary": "Origin",
  };
  if (origin && originAllowed(origin)) h["Access-Control-Allow-Origin"] = origin;
  return h;
}

export function preflight(origin: string | null): Response {
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}

export function json(status: number, body: unknown, origin: string | null): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(origin), "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

// ── audit (best effort, never blocks a request) ──────────────────────────────
export async function audit(
  actor: string,
  action: string,
  target: string | null,
  ip: string,
  meta?: Record<string, unknown>,
): Promise<void> {
  try {
    await db.from("audit_log").insert({ actor, action, target, ip, meta: meta ?? null });
  } catch (e) {
    console.error("audit failed", String(e));
  }
}
