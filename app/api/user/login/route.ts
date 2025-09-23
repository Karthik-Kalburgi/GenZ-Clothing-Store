import { NextRequest, NextResponse } from "next/server";
import { readUsers, appendLogin } from "@/lib/fsdb";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: "Email and password required" }, { status: 400 });
  }
  const normalized = String(email).trim().toLowerCase();
  const users = readUsers();
  const user = users.find((u) => u.email === normalized && u.password === String(password));
  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
  appendLogin({ email: normalized, timestamp: new Date().toISOString(), event: "login", name: user.name, surname: user.surname, age: user.age, phone: user.phone, gender: user.gender });
  const res = NextResponse.json({ ok: true, role: "user" });
  res.cookies.set("user", normalized, { httpOnly: true, path: "/", sameSite: "lax" });
  return res;
}


