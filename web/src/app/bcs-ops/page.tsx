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
  source: string | null;
  created_at: string;
  updated_at: string;
  contacted_at: string | null;
};

const STATUSES = ["new", "contacted", "quoted", "booked", "completed", "declined", "spam"] as const;
const PRIORITIES = ["normal", "urgent"] as const;

type Draft = {
  status: string;
  priority: string;
  quoted_amount: string;
  assigned_to: string;
  internal_notes: string;
};

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

function draftFromLead(l: Lead): Draft {
  return {
    status: l.status || "new",
    priority: l.priority || "normal",
    quoted_amount: l.quoted_amount == null ? "" : String(l.quoted_amount),
    assigned_to: l.assigned_to || "",
    internal_notes: l.internal_notes || "",
  };
}

function statusClass(status: string) {
  if (status === "new") return "bg-navy text-white";
  if (status === "spam") return "bg-red-700 text-white";
  if (status === "booked" || status === "completed") return "bg-emerald-700 text-white";
  if (status === "declined") return "bg-slate-500 text-white";
  return "bg-navy/10 text-navy";
}

export default function BcsOpsHomePage() {
  const router = useRouter();
  const [statusFilter, setStatusFilter] = useState("all");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [openId, setOpenId] = useState<number | null>(null);
  const [actionId, setActionId] = useState<number | null>(null);
  const [drafts, setDrafts] = useState<Record<number, Draft>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [savingId, setSavingId] = useState<number | null>(null);
  const [logoutBusy, setLogoutBusy] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/bcs-ops/leads?status=${encodeURIComponent(statusFilter)}`);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Could not load leads");
      const next = (data.leads || []) as Lead[];
      setLeads(next);
      setDrafts((prev) => {
        const merged: Record<number, Draft> = {};
        for (const l of next) {
          // Keep in-progress edits for the open Actions panel
          merged[l.id] = prev[l.id] && actionId === l.id ? prev[l.id] : draftFromLead(l);
        }
        return merged;
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load leads");
      setLeads([]);
    } finally {
      setLoading(false);
    }
  }, [statusFilter]); // actionId read from closure only when refreshing after save

  useEffect(() => {
    void load();
  }, [load]);

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

  function setDraft(id: number, patch: Partial<Draft>) {
    setDrafts((d) => ({ ...d, [id]: { ...d[id], ...patch } }));
  }

  async function saveLead(lead: Lead) {
    const draft = drafts[lead.id] || draftFromLead(lead);
    setSavingId(lead.id);
    setError("");
    try {
      const res = await fetch(`/api/bcs-ops/leads/${lead.id}`, {
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
      setActionId(null);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not save");
    } finally {
      setSavingId(null);
    }
  }

  function openActions(lead: Lead) {
    setDrafts((d) => ({ ...d, [lead.id]: draftFromLead(lead) }));
    setActionId(lead.id);
    setOpenId(lead.id);
  }

  return (
    <main className="min-h-screen bg-sky">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-3 px-4 py-4 sm:px-6">
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
              className="rounded-lg border-2 border-navy px-3 py-2 text-sm font-bold text-navy hover:bg-sky disabled:opacity-60 sm:px-4"
            >
              {logoutBusy ? "…" : "Sign out"}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1100px] px-4 py-5 sm:px-6 sm:py-6">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-serif text-2xl text-navy">Quote leads</h2>
          <label className="flex items-center gap-2 text-sm font-semibold text-navy">
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

        <div className="overflow-hidden rounded-2xl border border-line bg-white">
          {loading ? (
            <p className="p-5 text-slate-600">Loading leads…</p>
          ) : leads.length === 0 ? (
            <p className="p-5 text-slate-600">No leads yet for this filter.</p>
          ) : (
            <ul className="divide-y divide-line">
              {leads.map((l) => {
                const expanded = openId === l.id;
                const acting = actionId === l.id;
                const draft = drafts[l.id] || draftFromLead(l);
                return (
                  <li key={l.id} className="px-4 py-4 sm:px-5">
                    {/* Summary row */}
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-navy">{l.name}</span>
                          <span className={`rounded px-2 py-0.5 text-[0.7rem] font-bold uppercase tracking-wide ${statusClass(l.status)}`}>
                            {l.status}
                          </span>
                          {l.priority === "urgent" ? (
                            <span className="rounded bg-gold px-2 py-0.5 text-[0.7rem] font-bold uppercase tracking-wide text-navy">urgent</span>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm text-slate-600">
                          <span className="font-semibold text-navy/80">{l.reference}</span>
                          {" · "}{l.service}
                          {" · "}{l.location}
                          {" · "}job {l.job_date}
                        </p>
                        <p className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                          <a className="font-semibold text-navy underline" href={`tel:${l.phone.replace(/\s+/g, "")}`}>{l.phone}</a>
                          <a className="font-semibold text-navy underline break-all" href={`mailto:${l.email}`}>{l.email}</a>
                          <span className="text-slate-500">{fmtWhen(l.created_at)}</span>
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 lg:shrink-0">
                        <button
                          type="button"
                          onClick={() => setOpenId(expanded ? null : l.id)}
                          className="rounded-lg border border-line px-3 py-2 text-sm font-semibold text-navy hover:bg-sky"
                        >
                          {expanded ? "Show less" : "Show more"}
                        </button>
                        <button
                          type="button"
                          onClick={() => (acting ? setActionId(null) : openActions(l))}
                          className="rounded-lg bg-gold px-3 py-2 text-sm font-bold text-navy hover:bg-gold-deep"
                        >
                          {acting ? "Close actions" : "Actions"}
                        </button>
                      </div>
                    </div>

                    {/* Details */}
                    {expanded ? (
                      <div className="mt-4 rounded-xl bg-sky p-4 text-sm text-slate-700">
                        {l.service === "bond" ? (
                          <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
                            <li>Bed+Study: <strong>{l.bed_study || "—"}</strong></li>
                            <li>Bathroom: <strong>{l.bathroom || "—"}</strong></li>
                            <li>Living: <strong>{l.living_area || "—"}</strong></li>
                            <li>Furnished: <strong>{l.furnished || "—"}</strong></li>
                            <li>House type: <strong>{l.house_type || "—"}</strong></li>
                            <li>Blinds: <strong>{l.blinds || "—"}</strong></li>
                            <li className="sm:col-span-2">Extras: <strong>{extrasText(l.extras)}</strong></li>
                          </ul>
                        ) : (
                          <p>Hours: <strong>{l.hours || "—"}</strong></p>
                        )}
                        {l.message ? (
                          <p className="mt-3"><span className="font-semibold text-navy">Message:</span> {l.message}</p>
                        ) : null}
                        <p className="mt-3 text-xs text-slate-500">
                          Source {l.source || "website"} · Updated {fmtWhen(l.updated_at)}
                          {l.contacted_at ? ` · Contacted ${fmtWhen(l.contacted_at)}` : ""}
                          {l.assigned_to ? ` · Assigned ${l.assigned_to}` : ""}
                          {l.quoted_amount != null && l.quoted_amount !== "" ? ` · Quote $${l.quoted_amount}` : ""}
                        </p>
                        {l.internal_notes ? (
                          <p className="mt-2 rounded-lg bg-white/70 px-3 py-2 text-slate-700">
                            <span className="font-semibold text-navy">Notes:</span> {l.internal_notes}
                          </p>
                        ) : null}
                      </div>
                    ) : null}

                    {/* Actions panel */}
                    {acting ? (
                      <div className="mt-4 rounded-xl border border-line bg-white p-4 shadow-sm">
                        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-navy/70">Update lead</p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          <label className="block text-sm font-semibold text-navy">
                            Status
                            <select
                              value={draft.status}
                              onChange={(e) => setDraft(l.id, { status: e.target.value })}
                              className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-semibold"
                            >
                              {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                            </select>
                          </label>
                          <label className="block text-sm font-semibold text-navy">
                            Priority
                            <select
                              value={draft.priority}
                              onChange={(e) => setDraft(l.id, { priority: e.target.value })}
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
                              onChange={(e) => setDraft(l.id, { quoted_amount: e.target.value })}
                              className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-semibold"
                              placeholder="e.g. 285"
                            />
                          </label>
                          <label className="block text-sm font-semibold text-navy">
                            Assigned to
                            <input
                              type="text"
                              value={draft.assigned_to}
                              onChange={(e) => setDraft(l.id, { assigned_to: e.target.value })}
                              className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-semibold"
                              placeholder="Staff name"
                            />
                          </label>
                          <label className="block text-sm font-semibold text-navy sm:col-span-2">
                            Internal notes
                            <textarea
                              rows={3}
                              value={draft.internal_notes}
                              onChange={(e) => setDraft(l.id, { internal_notes: e.target.value })}
                              className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-normal text-slate-800"
                              placeholder="Staff-only notes"
                            />
                          </label>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => void saveLead(l)}
                            disabled={savingId === l.id}
                            className="rounded-lg bg-navy px-5 py-2.5 text-sm font-bold text-white hover:bg-navy-deep disabled:opacity-60"
                          >
                            {savingId === l.id ? "Saving…" : "Save changes"}
                          </button>
                          <button
                            type="button"
                            onClick={() => setActionId(null)}
                            className="rounded-lg border border-line px-4 py-2.5 text-sm font-semibold text-navy hover:bg-sky"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
