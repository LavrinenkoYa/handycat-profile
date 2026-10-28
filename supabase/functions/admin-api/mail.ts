// Mail transport for admin-api. The admin page builds its own (trusted) templates; this module only
// sends, and admin-api restricts WHO may receive (addresses already known to the system).
export type Mail = { subject: string; html: string };
export type SendResult = { ok: boolean; dryRun?: boolean; error?: string };

export function mailMode(): "live" | "dry-run" {
  return Deno.env.get("RESEND_API_KEY") ? "live" : "dry-run";
}

export async function sendMail(to: string, m: Mail): Promise<SendResult> {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) {
    console.log("[mail dry-run]", JSON.stringify({ to, subject: m.subject, html: m.html }));
    return { ok: true, dryRun: true };
  }
  const from = Deno.env.get("FROM_EMAIL") || "HandyCat <noreply@handycat.us>";
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: "Bearer " + apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, subject: m.subject, html: m.html }),
    });
    if (!r.ok) {
      console.error("resend error", r.status, await r.text().catch(() => ""));
      return { ok: false, error: "resend_" + r.status };
    }
    return { ok: true };
  } catch (e) {
    console.error("resend network error", String(e));
    return { ok: false, error: "network" };
  }
}
