import Link from "next/link";
import { QuoteButton } from "./QuoteModal";

const wrap = "mx-auto w-[min(1180px,calc(100%-32px))]";
const eyebrow = "mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy";

export function StatsSection() {
  const stats = [
    ["01", "Happy clients", "Tenants, homeowners and property teams across Brisbane and the Gold Coast."],
    ["02", "Guaranteed reclean", "If something we cleaned is flagged and the miss is ours, we arrange a reclean."],
    ["03", "Local team", "Brisbane and Gold Coast properties — quoted to the suburb and the layout."],
    ["04", "Clear quotes", "You know what is included before we start. No guesswork on the day."],
  ] as const;
  return (
    <section className="bg-white py-[76px]">
      <div className={wrap}>
        <p className={eyebrow}>Why locals book us</p>
        <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.4rem)] text-navy">Happy clients. Reclean support. Local service.</h2>
        <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([num, title, text]) => (
            <article key={num} className="rounded-[10px] border border-line bg-white p-[22px_18px] text-center">
              <span className="mx-auto mb-3 grid h-[52px] w-[52px] place-items-center rounded-full bg-gold font-extrabold text-navy shadow-[0_6px_14px_rgba(196,134,18,0.28)]">{num}</span>
              <h3 className="mb-1.5 font-sans text-[1.15rem] text-navy">{title}</h3>
              <p className="text-[0.92rem] text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BookSection({ serviceName }: { serviceName: string }) {
  const steps = [
    ["01", "Request a quote", "Tell us the suburb, property type and preferred date. Call 0422 555 984 or use the quote form."],
    ["02", "Confirm the visit", "We send a clear quote. Once you accept, we lock in the time that works for the property."],
    ["03", "We handle the clean", "The team works through the agreed list. If a miss on our side is flagged, we arrange a reclean."],
  ] as const;
  return (
    <section className="bg-sky py-[76px]">
      <div className={wrap}>
        <p className={eyebrow}>How to book us</p>
        <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.4rem)] text-navy">Three steps to book {serviceName.toLowerCase()}.</h2>
        <div className="mt-8 grid gap-3.5 md:grid-cols-3">
          {steps.map(([num, title, text]) => (
            <article key={num} className="rounded-[10px] border border-line bg-white p-6">
              <span className="font-serif text-[1.6rem] text-gold-deep">{num}</span>
              <h3 className="my-2 font-sans text-[1.1rem] text-navy">{title}</h3>
              <p className="text-slate-600">{text}</p>
            </article>
          ))}
        </div>
        <QuoteButton className="mt-7 inline-block rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">Get a free quote</QuoteButton>
      </div>
    </section>
  );
}

const WHY_HEADINGS = [
  ["Why choose us", "A straightforward clean, quoted before we start."],
  ["Why book Bond Clean Specialist", "Detail first, then a clear price."],
  ["What you can expect", "Local cleaning organised around your handover."],
] as const;

export function WhySection({ items, variant = 0 }: { items: readonly (readonly [string, string])[]; variant?: number }) {
  const [kicker, heading] = WHY_HEADINGS[variant % 3];
  return (
    <section className={`${variant % 3 === 2 ? "bg-sky" : "bg-white"} py-[76px]`}>
      <div className={wrap}>
        <p className={eyebrow}>{kicker}</p>
        <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.4rem)] text-navy">{heading}</h2>
        <div className="mt-8 grid gap-3.5 md:grid-cols-3">
          {items.map(([title, text]) => (
            <article key={title} className="rounded-[10px] border border-line bg-white p-6">
              <h3 className="mb-2 font-sans text-[1.1rem] text-navy">{title}</h3>
              <p className="text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ faqs }: { faqs: readonly (readonly [string, string])[] }) {
  const mid = Math.ceil(faqs.length / 2);
  const col = (items: readonly (readonly [string, string])[]) => (
    <div>
      {items.map(([q, a]) => (
        <details key={q} className="group border-b border-line py-[13px]">
          <summary className="cursor-pointer font-bold text-navy">{q}</summary>
          <p className="mt-2.5 text-slate-700">{a}</p>
        </details>
      ))}
    </div>
  );
  return (
    <section className="bg-sky py-[76px]">
      <div className={wrap}>
        <p className={eyebrow}>Questions</p>
        <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.4rem)] text-navy">Straight answers before you book.</h2>
        <div className="mt-6 grid gap-x-10 lg:grid-cols-2">
          {col(faqs.slice(0, mid))}
          {col(faqs.slice(mid))}
        </div>
      </div>
    </section>
  );
}

export function PageHero({ image, kicker, title, lede, children }: { image: string; kicker: string; title: string; lede: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#081e40]/90 via-[#081e40]/60 to-[#081e40]/20" />
      <div className={`relative mx-auto w-[min(1180px,calc(100%-32px))] py-16`}>
        <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-gold">{kicker}</p>
        <h1 className="max-w-[22ch] font-sans text-[clamp(1.9rem,4.6vw,3rem)] font-bold leading-[1.2] text-white">{title}</h1>
        <p className="mt-4 max-w-[64ch] text-[1.05rem] text-slate-200">{lede}</p>
        {children}
      </div>
    </section>
  );
}
