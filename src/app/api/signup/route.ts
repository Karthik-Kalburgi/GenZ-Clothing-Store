import { NextRequest, NextResponse } from "next/server";
import { readUsers, writeUsers } from "@/lib/fsdb";

export async function POST(req: NextRequest) {
  const { email, password, name, surname, age, phone, gender } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: "Email and password required" }, { status: 400 });
  }
  const normalized = String(email).trim().toLowerCase();
  const users = readUsers();
  if (users.find((u) => u.email === normalized)) {
    return NextResponse.json({ error: "Email already registered" }, { status: 409 });
  }
  users.push({
    email: normalized,
    password: String(password),
    createdAt: new Date().toISOString(),
    name: name ? String(name) : undefined,
    surname: surname ? String(surname) : undefined,
    age: typeof age === "number" ? age : undefined,
    phone: phone ? String(phone) : undefined,
    gender: gender ? String(gender) : undefined,
  });
  writeUsers(users);
  return NextResponse.json({ ok: true });
}


