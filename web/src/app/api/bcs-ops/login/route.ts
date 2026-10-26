import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import {
  createSessionToken,
  DASH_COOKIE,
  DASH_PATH,
  emailsMatch,
  getDashboardEmail,
  isDashboardAuthConfigured,
  passwordsMatch,
  sessionCookieOptions,
} from "@/lib/dashboard-auth";

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const rl = rateLimit(`bcs-ops-login:${ip}`, 8, 15 * 60 * 1000);
  if (!rl.ok) {
    return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  }

  if (!isDashboardAuthConfigured()) {
    console.error("[bcs-ops] DASHBOARD_EMAIL / DASHBOARD_PASSWORD not set");
    return NextResponse.json({ error: "Owner login is not configured." }, { status: 503 });
  }

  let body: { email?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = String(body.email || "");
  const password = String(body.password || "");
  const expectedEmail = getDashboardEmail();
  const expectedPassword = process.env.DASHBOARD_PASSWORD || "";

  const okEmail = emailsMatch(email, expectedEmail);
  const okPass = passwordsMatch(password, expectedPassword);
  if (!okEmail || !okPass) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  const token = await createSessionToken(expectedEmail);
  const res = NextResponse.json({ success: true, redirect: DASH_PATH });
  res.cookies.set(DASH_COOKIE, token, sessionCookieOptions());
  return res;
}
