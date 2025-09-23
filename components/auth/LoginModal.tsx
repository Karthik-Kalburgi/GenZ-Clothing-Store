"use client";

import { useState } from "react";
import { useAuthUI } from "@/context/AuthUIContext";
import { useRouter } from "next/navigation";

export default function LoginModal() {
  const router = useRouter();
  const { isOpen, close, view, setView } = useAuthUI();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  async function onUserLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError(null);
    try {
      const res = await fetch("/api/user/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      close();
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally { setLoading(false); }
  }

  async function onSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError(null);
    try {
      const res = await fetch("/api/signup", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password, name, surname, age: age ? Number(age) : undefined, phone, gender }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Signup failed");
      setView("login");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally { setLoading(false); }
  }

  async function onAdminLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError(null);
    try {
      const res = await fetch("/api/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Admin login failed");
      if (data.role !== "admin") throw new Error("Not admin credentials");
      close();
      router.push("/admin");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally { setLoading(false); }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg bg-white dark:bg-black border border-black/10 dark:border-white/10 p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">{view === "login" ? "Login" : "Sign up"}</h2>
          <button onClick={close} className="text-sm underline">Close</button>
        </div>
        <form onSubmit={view === "login" ? onUserLogin : onSignup} className="space-y-3">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input className="w-full border rounded-md px-3 py-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input className="w-full border rounded-md px-3 py-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {view === "signup" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input className="w-full border rounded-md px-3 py-2" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm mb-1">Surname</label>
                <input className="w-full border rounded-md px-3 py-2" value={surname} onChange={(e) => setSurname(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm mb-1">Age</label>
                <input className="w-full border rounded-md px-3 py-2" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input className="w-full border rounded-md px-3 py-2" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm mb-1">Gender</label>
                <input className="w-full border rounded-md px-3 py-2" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Male/Female/Other" />
              </div>
            </div>
          )}
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div className="flex items-center gap-2">
            <button disabled={loading} className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black text-sm font-medium">
              {loading ? "Please wait..." : view === "login" ? "Login" : "Sign up"}
            </button>
            {view === "login" && (
              <button onClick={onAdminLogin} className="px-4 py-2 rounded-md bg-black/80 text-white dark:bg-white/80 dark:text-black text-sm font-medium">
                Admin login
              </button>
            )}
          </div>
        </form>
        <div className="mt-3 text-sm">
          {view === "login" ? (
            <button className="underline" onClick={() => setView("signup")}>Create an account</button>
          ) : (
            <button className="underline" onClick={() => setView("login")}>Already have an account? Login</button>
          )}
        </div>
      </div>
    </div>
  );
}


