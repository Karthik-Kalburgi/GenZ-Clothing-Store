import { NextRequest, NextResponse } from "next/server";
import { appendLogin } from "@/lib/fsdb";

type Body = {
  email?: string;
  password?: string;
};

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@example.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Body;
  const email = body.email?.trim().toLowerCase();
  const password = body.password ?? "";

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password required" }, { status: 400 });
  }

  const isAdmin = email === ADMIN_EMAIL && password === ADMIN_PASSWORD;

  const res = NextResponse.json({ ok: true, role: isAdmin ? "admin" : "user" });
  if (isAdmin) {
    res.cookies.set("admin", "1", { httpOnly: true, path: "/", sameSite: "lax" });
  } else {
    // record user login and ensure admin cookie is cleared
    appendLogin({ email, timestamp: new Date().toISOString() });
    res.cookies.delete("admin");
  }
  return res;
}


