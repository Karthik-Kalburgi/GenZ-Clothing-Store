import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), ".data");
const LOGINS_FILE = path.join(DATA_DIR, "logins.json");
const USERS_FILE = path.join(DATA_DIR, "users.json");

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export type LoginRecord = {
  email: string;
  timestamp: string; // ISO
  event: "login" | "logout";
  name?: string;
  surname?: string;
  age?: number;
  phone?: string;
  gender?: string;
};

export function appendLogin(record: LoginRecord) {
  ensureDataDir();
  try {
    const existing = fs.existsSync(LOGINS_FILE)
      ? JSON.parse(fs.readFileSync(LOGINS_FILE, "utf-8"))
      : [];
    existing.push(record);
    fs.writeFileSync(LOGINS_FILE, JSON.stringify(existing, null, 2), "utf-8");
  } catch (e) {
    // noop for demo
  }
}

export function readLogins(): LoginRecord[] {
  try {
    if (!fs.existsSync(LOGINS_FILE)) return [];
    return JSON.parse(fs.readFileSync(LOGINS_FILE, "utf-8"));
  } catch {
    return [];
  }
}

export type UserRecord = {
  email: string;
  password: string; // plain for demo only
  createdAt: string;
  name?: string;
  surname?: string;
  age?: number;
  phone?: string;
  gender?: string;
};

export function readUsers(): UserRecord[] {
  try {
    if (!fs.existsSync(USERS_FILE)) return [];
    return JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
  } catch {
    return [];
  }
}

export function writeUsers(users: UserRecord[]) {
  ensureDataDir();
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
}


