"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Lead = {
  id: number;
  reference: string;
  service: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  job_date: string;
  message: string | null;
  bed_study: string | null;
  bathroom: string | null;
  living_area: string | null;
  furnished: string | null;
  house_type: string | null;
  blinds: string | null;
  extras: unknown;
  hours: string | null;
  status: string;
  priority: string;
  quoted_amount: string | number | null;
  assigned_to: string | null;
  internal_notes: string | null;
  created_at: string;
  updated_at: string;
  contacted_at: string | null;
};

const STATUSES = ["new", "contacted", "quoted", "booked", "completed", "declined", "spam"] as const;
const PRIORITIES = ["normal", "urgent"] as const;

function fmtWhen(v: string | null | undefined) {
  if (!v) return "—";
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return String(v);
  return d.toLocaleString("en-AU", { dateStyle: "medium", timeStyle: "short" });
}

function extrasText(extras: unknown) {
  if (Array.isArray(extras)) return extras.join(", ") || "None";
  if (typeof extras === "string") {
    try {
      const parsed = JSON.parse(extras);
      if (Array.isArray(parsed)) return parsed.join(", ") || "None";
    } catch {
      return extras || "None";
    }
  }
  return "None";
}

export default function BcsOpsHomePage() {
  const router = useRouter();
  const [statusFilter, setStatusFilter] = useState("all");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [logoutBusy, setLogoutBusy] = useState(false);
  const [draft, setDraft] = useState({
    status: "new",
    priority: "normal",
    quoted_amount: "",
    assigned_to: "",
    internal_notes: "",
  });

  const selected = leads.find((l) => l.id === selectedId) || null;

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/bcs-ops/leads?status=${encodeURIComponent(statusFilter)}`);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Could not load leads");
      const next = (data.leads || []) as Lead[];
      setLeads(next);
      setSelectedId((cur) => {
        if (cur && next.some((l) => l.id === cur)) return cur;
        return next[0]?.id ?? null;
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load leads");
      setLeads([]);
    } finally {
      setLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    if (!selected) return;
    setDraft({
      status: selected.status || "new",
      priority: selected.priority || "normal",
      quoted_amount: selected.quoted_amount == null ? "" : String(selected.quoted_amount),
      assigned_to: selected.assigned_to || "",
      internal_notes: selected.internal_notes || "",
    });
  }, [selected]);

  async function logout() {
    setLogoutBusy(true);
    try {
      await fetch("/api/bcs-ops/logout", { method: "POST" });
      router.replace("/bcs-ops/login");
      router.refresh();
    } finally {
      setLogoutBusy(false);
    }
  }

  async function saveLead() {
    if (!selected) return;
    setSaving(true);
    setError("");
    try {
      const res = await fetch(`/api/bcs-ops/leads/${selected.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: draft.status,
          priority: draft.priority,
          quoted_amount: draft.quoted_amount.trim() === "" ? null : Number(draft.quoted_amount),
          assigned_to: draft.assigned_to.trim() || null,
          internal_notes: draft.internal_notes,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Could not save");
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not save");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-sky">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-5 py-4 sm:px-8">
          <div>
            <p className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-navy/60">Bond Clean Specialist</p>
            <h1 className="font-serif text-xl text-navy">Owner panel</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => void load()}
              className="rounded-lg border border-line px-3 py-2 text-sm font-semibold text-navy hover:bg-sky"
            >
              Refresh
            </button>
            <button
              type="button"
              onClick={logout}
              disabled={logoutBusy}
              className="rounded-lg border-2 border-navy px-4 py-2 text-sm font-bold text-navy hover:bg-sky disabled:opacity-60"
            >
              {logoutBusy ? "Signing out…" : "Sign out"}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1200px] px-5 py-6 sm:px-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <h2 className="font-serif text-2xl text-navy">Quote leads</h2>
          <label className="ml-auto flex items-center gap-2 text-sm font-semibold text-navy">
            Status
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-md border border-line bg-white px-3 py-2 font-semibold text-navy"
            >
              <option value="all">All</option>
              {STATUSES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
        </div>

        {error ? <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">{error}</p> : null}

        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="overflow-hidden rounded-2xl border border-line bg-white">
            {loading ? (
              <p className="p-6 text-slate-600">Loading leads…</p>
            ) : leads.length === 0 ? (
              <p className="p-6 text-slate-600">No leads yet for this filter.</p>
            ) : (
              <ul className="divide-y divide-line">
                {leads.map((l) => (
                  <li key={l.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(l.id)}
                      className={`w-full px-4 py-3 text-left hover:bg-sky ${selectedId === l.id ? "bg-sky" : ""}`}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-navy">{l.name}</span>
                        <span className="rounded bg-navy/10 px-2 py-0.5 text-[0.72rem] font-bold uppercase tracking-wide text-navy">{l.status}</span>
                        {l.priority === "urgent" ? (
                          <span className="rounded bg-gold/30 px-2 py-0.5 text-[0.72rem] font-bold uppercase tracking-wide text-navy">urgent</span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm text-slate-600">
                        {l.reference} · {l.service} · {l.location}
                      </p>
                      <p className="text-xs text-slate-500">{fmtWhen(l.created_at)}</p>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="rounded-2xl border border-line bg-white p-5">
            {!selected ? (
              <p className="text-slate-600">Select a lead to view and update it.</p>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-navy/60">{selected.reference}</p>
                  <h3 className="font-serif text-xl text-navy">{selected.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    <a className="font-semibold text-navy underline" href={`mailto:${selected.email}`}>{selected.email}</a>
                    {" · "}
                    <a className="font-semibold text-navy underline" href={`tel:${selected.phone.replace(/\s+/g, "")}`}>{selected.phone}</a>
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {selected.location} · job {selected.job_date} · {selected.service}
                  </p>
                </div>

                <div className="rounded-lg bg-sky p-3 text-sm text-slate-700">
                  {selected.service === "bond" ? (
                    <ul className="grid gap-1 sm:grid-cols-2">
                      <li>Bed+Study: {selected.bed_study || "—"}</li>
                      <li>Bathroom: {selected.bathroom || "—"}</li>
                      <li>Living: {selected.living_area || "—"}</li>
                      <li>Furnished: {selected.furnished || "—"}</li>
                      <li>House: {selected.house_type || "—"}</li>
                      <li>Blinds: {selected.blinds || "—"}</li>
                      <li className="sm:col-span-2">Extras: {extrasText(selected.extras)}</li>
                    </ul>
                  ) : (
                    <p>Hours: {selected.hours || "—"}</p>
                  )}
                  {selected.message ? <p className="mt-2"><span className="font-semibold">Message:</span> {selected.message}</p> : null}
                  <p className="mt-2 text-xs text-slate-500">Created {fmtWhen(selected.created_at)}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-navy">
                    Status
                    <select
                      value={draft.status}
                      onChange={(e) => setDraft((d) => ({ ...d, status: e.target.value }))}
                      className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-semibold"
                    >
                      {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </label>
                  <label className="block text-sm font-semibold text-navy">
                    Priority
                    <select
                      value={draft.priority}
                      onChange={(e) => setDraft((d) => ({ ...d, priority: e.target.value }))}
                      className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-semibold"
                    >
                      {PRIORITIES.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </label>
                  <label className="block text-sm font-semibold text-navy">
                    Quoted amount
                    <input
                      type="number"
                      step="0.01"
                      value={draft.quoted_amount}
                      onChange={(e) => setDraft((d) => ({ ...d, quoted_amount: e.target.value }))}
                      className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-semibold"
                      placeholder="e.g. 285"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-navy">
                    Assigned to
                    <input
                      type="text"
                      value={draft.assigned_to}
                      onChange={(e) => setDraft((d) => ({ ...d, assigned_to: e.target.value }))}
                      className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-semibold"
                      placeholder="Staff name"
                    />
                  </label>
                </div>

                <label className="block text-sm font-semibold text-navy">
                  Internal notes
                  <textarea
                    rows={4}
                    value={draft.internal_notes}
                    onChange={(e) => setDraft((d) => ({ ...d, internal_notes: e.target.value }))}
                    className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-normal text-slate-800"
                    placeholder="Staff-only notes"
                  />
                </label>

                <button
                  type="button"
                  onClick={() => void saveLead()}
                  disabled={saving}
                  className="rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep disabled:opacity-60"
                >
                  {saving ? "Saving…" : "Save changes"}
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
