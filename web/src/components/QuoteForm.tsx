"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Script from "next/script";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type Service = "bond" | "spring";

const inputCls =
  "w-full rounded-md border border-slate-200 bg-slate-100 px-3.5 py-3 text-[15px] text-slate-900 placeholder:text-slate-500 outline-none focus:border-navy focus:ring-2 focus:ring-navy/20 min-h-12";
const labelSr = "sr-only";

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<Service>("bond");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sentRef, setSentRef] = useState<string | null>(null);
  const [website, setWebsite] = useState(""); // honeypot — humans never see/fill this
  const turnstileToken = useRef("");
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    const w = window as unknown as { onTurnstile?: (t: string) => void; turnstile?: { render: (el: HTMLElement, o: object) => void } };
    w.onTurnstile = (t: string) => { turnstileToken.current = t; };
    const tryRender = () => {
      if (w.turnstile && turnstileRef.current && !turnstileRef.current.hasChildNodes()) {
        w.turnstile.render(turnstileRef.current, { sitekey: TURNSTILE_SITE_KEY, callback: (t: string) => { turnstileToken.current = t; } });
      }
    };
    const id = setInterval(tryRender, 400);
    const stop = setTimeout(() => clearInterval(id), 6000);
    return () => { clearInterval(id); clearTimeout(stop); };
  }, []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    jobDate: "",
    bedStudy: "",
    bathroom: "",
    livingArea: "",
    furnished: "",
    houseType: "",
    blinds: "",
    hours: "",
    message: "",
    extras: [] as string[],
  });

  const set = (k: keyof typeof form, v: string | string[]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const toggleExtra = (x: string, on: boolean) =>
    set("extras", on ? [...form.extras, x] : form.extras.filter((e) => e !== x));

  function next() {
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.location.trim()) {
      setError("Please complete your name, email, phone and location before continuing.");
      return;
    }
    setError("");
    setStep(2);
  }

  async function submit() {
    if (!form.jobDate) {
      setError("Please complete the job date and cleaning details so we can quote.");
      return;
    }
    if (service === "bond" && (!form.bedStudy || !form.bathroom || !form.livingArea || !form.furnished || !form.houseType || !form.blinds)) {
      setError("Please complete the job date and cleaning details so we can quote.");
      return;
    }
    if (service === "spring" && !form.hours) {
      setError("Please complete the job date and cleaning details so we can quote.");
      return;
    }
    setError("");
    setSending(true);
    try {
      const payload =
        service === "bond"
          ? { name: form.name, email: form.email, phone: form.phone, location: form.location, jobDate: form.jobDate, message: form.message, service, bedStudy: form.bedStudy, bathroom: form.bathroom, livingArea: form.livingArea, furnished: form.furnished, houseType: form.houseType, blinds: form.blinds, extras: form.extras, website, turnstileToken: turnstileToken.current }
          : { name: form.name, email: form.email, phone: form.phone, location: form.location, jobDate: form.jobDate, message: form.message, service, hours: form.hours, website, turnstileToken: turnstileToken.current };
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Could not send your request. Please call us.");
      setSentRef(data.reference || "");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not send your request. Please call us.");
    } finally {
      setSending(false);
    }
  }

  if (sentRef !== null) {
    return (
      <div className="py-10 text-center">
        <h3 className="font-serif text-xl text-navy">Quote request sent</h3>
        <p className="mt-2 text-slate-600">
          Thank you. Bond Clean Specialist will get back to you with a quote.
          {sentRef ? <> Reference: <strong>{sentRef}</strong></> : null}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="relative mb-5 flex" aria-hidden="true">
        <div className="absolute left-1/4 right-1/4 top-[22px] h-0.5 bg-slate-200" />
        {[{ n: 1, label: "Step 1" }, { n: 2, label: "Step 2" }].map(({ n, label }) => (
          <div key={n} className="relative z-[1] grid flex-1 justify-items-center gap-1.5">
            <span className={`grid h-11 w-11 place-items-center rounded-full border-[3px] border-white font-bold text-white shadow-[0_0_0_1px_var(--color-line)] ${step >= n ? "bg-navy shadow-[0_0_0_2px_var(--color-gold)]" : "bg-slate-300"}`}>
              {step > n ? "✓" : n}
            </span>
            <span className={`text-sm font-bold ${step >= n ? "text-navy" : "text-slate-400"}`}>{label}</span>
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-3">
          <label className="block"><span className={labelSr}>Your Name</span><input className={inputCls} placeholder="Your Name" autoComplete="name" value={form.name} onChange={(e) => set("name", e.target.value)} /></label>
          <label className="block"><span className={labelSr}>Your Email</span><input className={inputCls} type="email" placeholder="Your Email" autoComplete="email" value={form.email} onChange={(e) => set("email", e.target.value)} /></label>
          <label className="block"><span className={labelSr}>Phone Number</span><input className={inputCls} type="tel" placeholder="Phone Number" autoComplete="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} /></label>
          <label className="block"><span className={labelSr}>Enter a location</span><input className={inputCls} placeholder="Enter a location" value={form.location} onChange={(e) => set("location", e.target.value)} /></label>
        </div>
      )}

      {step === 2 && (
        <div>
          <JobDateField value={form.jobDate} onChange={(v) => set("jobDate", v)} />
          <div className="mt-3 flex flex-wrap gap-x-7 gap-y-2" role="radiogroup" aria-label="Service">
            <label className="inline-flex cursor-pointer items-center gap-2 font-semibold"><input type="radio" className="h-[18px] w-[18px] accent-navy" checked={service === "bond"} onChange={() => setService("bond")} /> Bond cleaning</label>
            <label className="inline-flex cursor-pointer items-center gap-2 font-semibold"><input type="radio" className="h-[18px] w-[18px] accent-navy" checked={service === "spring"} onChange={() => setService("spring")} /> Spring cleaning</label>
          </div>

          {service === "bond" ? (
            <div>
              <h3 className="my-3.5 text-center text-[1.3rem] font-bold text-navy">Bond Cleaning Details</h3>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                <Select label="Bed+Study" value={form.bedStudy} onChange={(v) => set("bedStudy", v)} options={["Studio", "1", "2", "3", "4", "5+"]} />
                <Select label="Bathroom" value={form.bathroom} onChange={(v) => set("bathroom", v)} options={["1", "2", "3", "4+"]} />
                <Select label="Living area" value={form.livingArea} onChange={(v) => set("livingArea", v)} options={["1", "2", "3+"]} />
                <Select label="Furnished" value={form.furnished} onChange={(v) => set("furnished", v)} options={["Yes", "No"]} />
                <Select label="House type" value={form.houseType} onChange={(v) => set("houseType", v)} options={["Unit", "House", "Two Story", "Multi Story"]} />
                <Select label="Blinds" value={form.blinds} onChange={(v) => set("blinds", v)} options={["No Blinds", "Vertical", "Venetians", "Rollers", "Shutters"]} />
              </div>
              <div className="my-3.5 flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="text-[1.15rem] font-extrabold text-gold-deep">Extras:</span>
                {["Carpet", "Pest"].map((x) => (
                  <label key={x} className="inline-flex cursor-pointer items-center gap-2 font-semibold">
                    <input type="checkbox" className="h-[18px] w-[18px] accent-navy" checked={form.extras.includes(x)} onChange={(e) => toggleExtra(x, e.target.checked)} /> {x}
                  </label>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h3 className="my-3.5 text-center text-[1.3rem] font-bold text-navy">Spring Cleaning Details</h3>
              <Select label="Number of hours" value={form.hours} onChange={(v) => set("hours", v)} options={["2 hours", "3 hours", "4 hours", "5 hours", "6 hours", "7 hours", "8+ hours"]} />
            </div>
          )}

          <label className="mt-3 block"><span className={labelSr}>Message</span><textarea className={`${inputCls} resize-y`} placeholder="Message" rows={3} value={form.message} onChange={(e) => set("message", e.target.value)} /></label>
        </div>
      )}

      {error && <p className="mt-2 min-h-[1.1em] text-sm text-red-700">{error}</p>}

      {/* Honeypot — hidden from humans, bots fill it */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label>Website<input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} /></label>
      </div>

      {TURNSTILE_SITE_KEY && (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
          <div ref={turnstileRef} className="mt-3 flex justify-center" />
        </>
      )}

      <div className="mt-2 flex items-center gap-2">
        {step === 2 && (
          <button type="button" onClick={() => setStep(1)} className="min-h-12 min-w-32 rounded-full border border-slate-300 bg-slate-500 px-5 font-bold text-white hover:bg-slate-600">Back</button>
        )}
        {step === 1 ? (
          <button type="button" onClick={next} className="ml-auto min-h-12 min-w-36 rounded-full bg-gold px-5 font-bold text-navy hover:bg-gold-deep">Next</button>
        ) : (
          <button type="button" onClick={submit} disabled={sending} className="ml-auto min-h-12 min-w-36 rounded-full bg-gold px-5 font-bold text-navy hover:bg-gold-deep disabled:opacity-60">{sending ? "Sending..." : "Get a Quote"}</button>
        )}
      </div>
    </div>
  );
}

function parseIso(iso: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return null;
  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

function toIso(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function formatAu(iso: string) {
  const date = parseIso(iso);
  if (!date) return "";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}/${month}/${date.getFullYear()}`;
}

function monthDays(year: number, month: number) {
  const first = new Date(year, month, 1);
  const lead = (first.getDay() + 6) % 7;
  const start = new Date(year, month, 1 - lead);
  return Array.from({ length: 42 }, (_, i) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + i));
}

function JobDateField({ value, onChange }: { value: string; onChange: (iso: string) => void }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(() => {
    const base = parseIso(value) ?? new Date();
    return { year: base.getFullYear(), month: base.getMonth() };
  });
  const [pos, setPos] = useState({ top: 0, left: 0, width: 280 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (!open) return;
    function place() {
      const el = buttonRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const width = Math.min(Math.max(rect.width, 280), window.innerWidth - 16);
      const left = Math.min(Math.max(8, rect.left), window.innerWidth - width - 8);
      const calendarHeight = 340;
      const spaceBelow = window.innerHeight - rect.bottom;
      const top = spaceBelow < calendarHeight && rect.top > calendarHeight ? rect.top - calendarHeight - 6 : rect.bottom + 6;
      setPos({ top, left, width });
    }
    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function openCalendar() {
    const base = parseIso(value) ?? new Date();
    setView({ year: base.getFullYear(), month: base.getMonth() });
    setOpen(true);
  }

  const days = monthDays(view.year, view.month);
  const todayIso = toIso(new Date());
  const monthLabel = new Date(view.year, view.month, 1).toLocaleDateString("en-AU", { month: "long", year: "numeric" });

  return (
    <label className="block">
      <span className={labelSr}>Job Date</span>
      <button
        ref={buttonRef}
        type="button"
        className={`${inputCls} flex items-center justify-between text-left`}
        aria-label="Job Date"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={openCalendar}
      >
        <span className={value ? "text-slate-900" : "text-slate-500"}>{value ? formatAu(value) : "DD/MM/YYYY"}</span>
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-navy" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
          <path d="M8 3.5v3M16 3.5v3M3.5 10h17" />
        </svg>
      </button>
      {open && createPortal(
        <div className="fixed inset-0 z-[200]" onMouseDown={() => setOpen(false)}>
          <div
            role="dialog"
            aria-label="Choose job date"
            style={{ top: pos.top, left: pos.left, width: pos.width }}
            className="absolute rounded-lg border border-slate-200 bg-white p-3 shadow-xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mb-2 flex items-center justify-between">
              <button type="button" className="grid h-9 w-9 place-items-center rounded-md text-lg font-bold text-navy hover:bg-slate-100" aria-label="Previous month" onClick={() => setView((v) => v.month === 0 ? { year: v.year - 1, month: 11 } : { year: v.year, month: v.month - 1 })}>‹</button>
              <p className="text-sm font-bold text-navy">{monthLabel}</p>
              <button type="button" className="grid h-9 w-9 place-items-center rounded-md text-lg font-bold text-navy hover:bg-slate-100" aria-label="Next month" onClick={() => setView((v) => v.month === 11 ? { year: v.year + 1, month: 0 } : { year: v.year, month: v.month + 1 })}>›</button>
            </div>
            <div className="grid grid-cols-7 text-center text-xs font-bold text-slate-500">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => <span key={day} className="py-1">{day}</span>)}
            </div>
            <div className="grid grid-cols-7">
              {days.map((day) => {
                const iso = toIso(day);
                const inMonth = day.getMonth() === view.month;
                const selected = iso === value;
                return (
                  <button
                    key={iso}
                    type="button"
                    className={`mx-auto grid h-9 w-9 place-items-center rounded-full text-sm ${selected ? "bg-navy font-bold text-white" : inMonth ? "text-slate-800 hover:bg-slate-100" : "text-slate-300 hover:bg-slate-50"} ${iso === todayIso && !selected ? "ring-1 ring-navy" : ""}`}
                    onClick={() => { onChange(iso); setOpen(false); }}
                  >
                    {day.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        </div>,
        document.body,
      )}
    </label>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select className={inputCls} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">{label}</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
