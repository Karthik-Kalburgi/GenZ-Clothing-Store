import { NextRequest, NextResponse } from "next/server";
import { appendLogin } from "@/lib/fsdb";

export async function POST(req: NextRequest) {
  const userEmail = req.cookies.get("user")?.value;
  if (userEmail) {
    appendLogin({ email: userEmail, timestamp: new Date().toISOString(), event: "logout" });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.delete("admin");
  res.cookies.delete("user");
  return res;
}


