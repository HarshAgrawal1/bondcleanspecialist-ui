import { NextResponse } from "next/server";
import { DASH_COOKIE, DASH_LOGIN_PATH } from "@/lib/dashboard-auth";

export async function POST() {
  const res = NextResponse.json({ success: true, redirect: DASH_LOGIN_PATH });
  res.cookies.set(DASH_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return res;
}
