"use client";

import { useEffect, useState } from "react";

type LoginRecord = {
  email: string;
  timestamp: string;
  event: "login" | "logout";
  name?: string;
  surname?: string;
  age?: number;
  phone?: string;
  gender?: string;
};

export default function AdminPage() {
  const [logins, setLogins] = useState<LoginRecord[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/admin/logins?mode=all");
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to fetch logins");
        setLogins(data.logins || []);
      } catch (e: any) {
        setError(e.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600 text-sm">{error}</p>}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-black/10 dark:border-white/10 rounded-md">
            <thead className="bg-black/5 dark:bg-white/5">
              <tr>
                <th className="text-left p-2 border-b">Email</th>
                <th className="text-left p-2 border-b">Name</th>
                <th className="text-left p-2 border-b">Surname</th>
                <th className="text-left p-2 border-b">Age</th>
                <th className="text-left p-2 border-b">Phone</th>
                <th className="text-left p-2 border-b">Gender</th>
                <th className="text-left p-2 border-b">Event</th>
                <th className="text-left p-2 border-b">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {logins.length === 0 && (
                <tr>
                  <td className="p-3" colSpan={8}>No user activity yet.</td>
                </tr>
              )}
              {logins.map((l, idx) => (
                <tr key={idx} className="odd:bg-black/0 even:bg-black/5 dark:even:bg-white/5">
                  <td className="p-2">{l.email}</td>
                  <td className="p-2">{l.name || "-"}</td>
                  <td className="p-2">{l.surname || "-"}</td>
                  <td className="p-2">{l.age ?? "-"}</td>
                  <td className="p-2">{l.phone || "-"}</td>
                  <td className="p-2">{l.gender || "-"}</td>
                  <td className="p-2">{l.event}</td>
                  <td className="p-2">{new Date(l.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}


