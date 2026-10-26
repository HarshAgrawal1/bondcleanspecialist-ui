import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const DASH_COOKIE = "bcs_ops_session";
const DASH_LOGIN_PATH = "/bcs-ops/login";

async function sessionSecretKey(password: string) {
  const data = new TextEncoder().encode(`bcs-ops-session:v1:${password}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return new Uint8Array(hash);
}

async function sessionOk(token: string) {
  const expectedEmail = process.env.DASHBOARD_EMAIL?.trim().toLowerCase();
  const password = process.env.DASHBOARD_PASSWORD;
  if (!expectedEmail || !password) return false;
  try {
    const { payload } = await jwtVerify(token, await sessionSecretKey(password));
    const email = String(payload.email || "").toLowerCase();
    return email === expectedEmail;
  } catch {
    return false;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === DASH_LOGIN_PATH || pathname === "/api/bcs-ops/login") {
    return NextResponse.next();
  }

  const token = req.cookies.get(DASH_COOKIE)?.value;
  if (!token || !(await sessionOk(token))) {
    if (pathname.startsWith("/api/bcs-ops")) {
      const res = NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      if (token) res.cookies.set(DASH_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
      return res;
    }
    const res = NextResponse.redirect(new URL(DASH_LOGIN_PATH, req.url));
    if (token) res.cookies.set(DASH_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/bcs-ops", "/bcs-ops/:path*", "/api/bcs-ops/:path*"],
};
