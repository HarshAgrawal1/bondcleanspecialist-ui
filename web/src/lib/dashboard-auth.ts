import { createHash, timingSafeEqual } from "crypto";
import { SignJWT, jwtVerify } from "jose";

export const DASH_PATH = "/bcs-ops";
export const DASH_LOGIN_PATH = "/bcs-ops/login";
export const DASH_COOKIE = "bcs_ops_session";
/** Owner session lifetime */
export const DASH_SESSION_SECONDS = 30 * 60;

/** Email + password from env only — no code defaults. */
export function isDashboardAuthConfigured() {
  const email = process.env.DASHBOARD_EMAIL?.trim();
  const password = process.env.DASHBOARD_PASSWORD;
  return Boolean(email && password);
}

export function getDashboardEmail() {
  return process.env.DASHBOARD_EMAIL?.trim().toLowerCase() || "";
}

/** Cookie signing key derived from the login password (no extra env var). */
export function sessionSecretKeyFromPassword(password = process.env.DASHBOARD_PASSWORD || "") {
  if (!password) throw new Error("DASHBOARD_PASSWORD missing");
  const digest = createHash("sha256")
    .update(`bcs-ops-session:v1:${password}`)
    .digest();
  return new Uint8Array(digest);
}

/** Edge-safe: same derivation without Node crypto (Web Crypto SHA-256). */
export async function sessionSecretKeyFromPasswordEdge(password: string) {
  const data = new TextEncoder().encode(`bcs-ops-session:v1:${password}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return new Uint8Array(hash);
}

/** Constant-time string compare (length-safe). */
export function passwordsMatch(provided: string, expected: string) {
  const a = createHash("sha256").update(provided).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}

export function emailsMatch(provided: string, expected: string) {
  return passwordsMatch(provided.trim().toLowerCase(), expected.trim().toLowerCase());
}

export async function createSessionToken(email: string) {
  return new SignJWT({ email: email.toLowerCase(), role: "owner" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${DASH_SESSION_SECONDS}s`)
    .sign(sessionSecretKeyFromPassword());
}

export async function verifySessionToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, sessionSecretKeyFromPassword());
    const email = String(payload.email || "").toLowerCase();
    const expected = getDashboardEmail();
    if (!email || !expected || email !== expected) return null;
    return { email };
  } catch {
    return null;
  }
}

export function sessionCookieOptions(maxAgeSec = DASH_SESSION_SECONDS) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: maxAgeSec,
  };
}
