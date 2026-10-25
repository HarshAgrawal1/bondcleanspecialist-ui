import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/quote-schema";
import { rateLimit, verifyTurnstile } from "@/lib/rate-limit";
import { isDbConfigured, saveQuoteLead } from "@/lib/db";
import { isSmtpConfigured, sendQuoteNotification } from "@/lib/mail";

const isProd = process.env.NODE_ENV === "production";

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const rl = rateLimit(`quote:${ip}`);
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a few minutes or call 0422 555 984." },
      { status: 429, headers: { "Retry-After": String(Math.ceil(rl.retryAfterMs / 1000)) } }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const raw = (body ?? {}) as Record<string, unknown>;

  // Honeypot: bots fill the hidden "website" field. Pretend success, drop it.
  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return NextResponse.json({ success: true, reference: `BCS-${crypto.randomUUID().slice(0, 8).toUpperCase()}` });
  }

  // Turnstile is optional — only enforced when TURNSTILE_SECRET_KEY is set.
  const ts = await verifyTurnstile(
    typeof raw.turnstileToken === "string" ? raw.turnstileToken : undefined,
    ip
  );
  if (!ts.ok) {
    return NextResponse.json({ error: "Verification failed. Please try again." }, { status: 403 });
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please complete the required details so we can quote.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // Production must persist + email. Local/dev can run without env for UI testing.
  if (isProd && (!isDbConfigured() || !isSmtpConfigured())) {
    console.error("[quote] production missing DB_* and/or SMTP_* env");
    return NextResponse.json(
      { error: "Quote service is temporarily unavailable. Please call 0422 555 984." },
      { status: 503 }
    );
  }

  const reference = `BCS-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  const data = parsed.data;

  if (isDbConfigured()) {
    try {
      await saveQuoteLead(reference, data, ip);
    } catch (err) {
      console.error("[quote] database save failed", reference, err);
      return NextResponse.json(
        { error: "We could not save your request. Please call 0422 555 984 or try again." },
        { status: 500 }
      );
    }
  } else {
    console.warn("[quote] DB_* env not set — lead not persisted", reference);
  }

  if (isSmtpConfigured()) {
    try {
      await sendQuoteNotification(reference, data);
    } catch (err) {
      console.error("[quote] email notification failed", reference, err);
      // Lead is already in DB when configured — still tell the customer it failed so they call.
      if (isProd) {
        return NextResponse.json(
          { error: "We saved your details but could not send the alert email. Please call 0422 555 984." },
          { status: 500 }
        );
      }
    }
  } else {
    console.warn("[quote] SMTP_* env not set — no email sent", reference);
  }

  if (!isDbConfigured() && !isSmtpConfigured()) {
    console.log("[quote] new lead (no DB/SMTP)", reference, data.service, data.location);
  }

  return NextResponse.json({ success: true, reference });
}
