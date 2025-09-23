import { NextRequest, NextResponse } from "next/server";
import { readLogins } from "@/lib/fsdb";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@example.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export async function GET(req: NextRequest) {
	const auth = req.headers.get("authorization") || "";
	// Basic auth: "Basic base64(email:password)"
	if (!auth.startsWith("Basic ")) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: { "WWW-Authenticate": "Basic realm=admin" } });
	}
	try {
		const decoded = Buffer.from(auth.replace("Basic ", ""), "base64").toString();
		const [email, password] = decoded.split(":");
		if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
			return NextResponse.json({ error: "Forbidden" }, { status: 403 });
		}
	} catch {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const mode = req.nextUrl.searchParams.get("mode");
	const sorted = readLogins().sort((a, b) => b.timestamp.localeCompare(a.timestamp));
	if (mode === "all") {
		return NextResponse.json({ logins: sorted });
	}
	// default: unique emails only (latest record per email)
	const seen = new Set<string>();
	const unique = sorted.filter((rec) => {
		if (seen.has(rec.email)) return false;
		seen.add(rec.email);
		return true;
	});
	return NextResponse.json({ logins: unique });
}
