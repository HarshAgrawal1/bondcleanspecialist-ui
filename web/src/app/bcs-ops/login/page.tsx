"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BcsOpsLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const res = await fetch("/api/bcs-ops/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Login failed");
      router.replace(data.redirect || "/bcs-ops");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-sky px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-2xl border border-line bg-white p-8 shadow-[0_20px_50px_rgba(8,30,64,0.12)]"
      >
        <p className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-navy/60">Owner access</p>
        <h1 className="mt-2 font-serif text-2xl text-navy">Sign in</h1>
        <p className="mt-2 text-sm text-slate-600">Use the email and password from your server environment.</p>

        <label className="mt-6 block">
          <span className="mb-1.5 block text-sm font-semibold text-navy">Email</span>
          <input
            type="email"
            autoComplete="username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-slate-200 bg-slate-50 px-3.5 py-3 text-[15px] outline-none focus:border-navy focus:ring-2 focus:ring-navy/20"
          />
        </label>

        <label className="mt-4 block">
          <span className="mb-1.5 block text-sm font-semibold text-navy">Password</span>
          <input
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-slate-200 bg-slate-50 px-3.5 py-3 text-[15px] outline-none focus:border-navy focus:ring-2 focus:ring-navy/20"
          />
        </label>

        {error ? <p className="mt-4 text-sm font-semibold text-red-700">{error}</p> : null}

        <button
          type="submit"
          disabled={busy}
          className="mt-6 w-full rounded-lg bg-navy py-3 font-bold text-white hover:bg-navy-deep disabled:opacity-60"
        >
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}
