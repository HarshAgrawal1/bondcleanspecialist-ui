import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { QuoteButton } from "./QuoteModal";

const wrap = "mx-auto w-[min(1180px,calc(100%-32px))]";
const eyebrow = "mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy";

function BadgeIcon({ children }: { children: ReactNode }) {
  return (
    <span className="mx-auto mb-3 grid h-[52px] w-[52px] place-items-center rounded-full bg-gold text-navy shadow-[0_6px_14px_rgba(196,134,18,0.28)]">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {children}
      </svg>
    </span>
  );
}

const TRUSTED_ITEMS = [
  {
    title: "Experienced local cleaners",
    text: "A Brisbane and Gold Coast team used to rental handovers, busy households and commercial spaces — not a one-size rush job.",
    icon: (
      <>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </>
    ),
  },
  {
    title: "Careful with your property",
    text: "We treat keys, access and furnishings carefully. Tell us about alarms, pets or fragile items before the visit and we plan around them.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: "Detail that shows",
    text: "Skirtings, tracks, wet areas and appliances get proper attention — the places agents and owners actually check.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: "One less thing to manage",
    text: "A clear quote, a booked time and a finished clean so you can focus on the move, the roster or the next booking.",
    icon: <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />,
  },
];

export function TrustedSection() {
  return (
    <section className="bg-sky py-[76px]">
      <div className={wrap}>
        <p className={eyebrow}>Why trust Bond Clean Specialist</p>
        <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.4rem)] text-navy">Your trusted bond cleaners in Brisbane and the Gold Coast</h2>
        <p className="mt-3 max-w-[64ch] text-slate-600">
          Local cleaning for tenants, homeowners and property teams who need a reliable result — not a rushed wipe-over.
        </p>
        <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {TRUSTED_ITEMS.map((item) => (
            <article key={item.title} className="rounded-[10px] border border-line bg-white p-[22px_18px] text-center">
              <BadgeIcon>{item.icon}</BadgeIcon>
              <h3 className="mb-1.5 font-sans text-[1.15rem] text-navy">{item.title}</h3>
              <p className="text-[0.92rem] text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const HOW_WE_WORK = [
  {
    step: "01",
    title: "Request a quote",
    text: "Tell us the suburb, property type, service and preferred date — call 0422 555 984 or use the quote form. We come back with a clear price for that property.",
    image: "/images/scene-move.png",
    alt: "Property ready for a cleaning visit",
  },
  {
    step: "02",
    title: "We complete the clean",
    text: "On the day, the team works through the agreed list — kitchens, wet areas, floors and the detail points that matter at inspection.",
    image: "/images/scene-kitchen.png",
    alt: "Professional cleaner working in a kitchen",
  },
  {
    step: "03",
    title: "You check the result",
    text: "If something we cleaned is flagged and the miss is ours, we arrange a reclean so the job finishes properly.",
    image: "/images/scene-bathroom.png",
    alt: "A freshly cleaned bathroom",
  },
];

export function HowWeWorkSection() {
  return (
    <section className="bg-white py-[76px]">
      <div className={wrap}>
        <p className={eyebrow}>How we work</p>
        <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.4rem)] text-navy">A simple process from quote to finished clean.</h2>
        <p className="mt-3 max-w-[64ch] text-slate-600">
          No complicated booking flow — just a clear quote, a booked visit and a property that looks ready.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {HOW_WE_WORK.map((item) => (
            <article key={item.step} className="overflow-hidden rounded-[10px] border border-line bg-white">
              <Image
                src={item.image}
                alt={item.alt}
                width={640}
                height={400}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-6">
                <span className="font-serif text-[1.6rem] text-gold-deep">{item.step}</span>
                <h3 className="mt-1 font-sans text-[1.15rem] text-navy">{item.title}</h3>
                <p className="mt-2 text-[0.95rem] text-slate-600">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <QuoteButton className="mt-7 inline-block rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">
          Get a free quote
        </QuoteButton>
      </div>
    </section>
  );
}

export { default as TestimonialsSection } from "./TestimonialsSection";

const BEFORE_AFTER = [
  {
    title: "Kitchen",
    before: "/images/ba-kitchen-before-v2.jpg",
    after: "/images/ba-kitchen-after-v2.jpg",
  },
  {
    title: "Bathroom",
    before: "/images/ba-bathroom-before-v2.jpg",
    after: "/images/ba-bathroom-after-v2.jpg",
  },
] as const;

export function BeforeAfterSection() {
  return (
    <section className="bg-white py-[76px]">
      <div className={wrap}>
        <p className={eyebrow}>Results</p>
        <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.4rem)] text-navy">Before and after the clean</h2>
        <p className="mt-3 max-w-[64ch] text-slate-600">
          A clear look at the difference a detailed clean makes in the rooms agents and owners check first.
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {BEFORE_AFTER.map((pair) => (
            <div key={pair.title}>
              <h3 className="mb-3 font-sans text-[1.15rem] font-bold text-navy">{pair.title}</h3>
              <div className="grid grid-cols-2 gap-2.5">
                <figure className="overflow-hidden rounded-xl border border-line">
                  <Image src={pair.before} alt={`${pair.title} before cleaning`} width={640} height={640} className="aspect-square w-full object-cover" />
                  <figcaption className="bg-navy px-3 py-2 text-center text-[0.82rem] font-bold text-white">Before</figcaption>
                </figure>
                <figure className="overflow-hidden rounded-xl border border-line">
                  <Image src={pair.after} alt={`${pair.title} after cleaning`} width={640} height={640} className="aspect-square w-full object-cover" />
                  <figcaption className="bg-gold px-3 py-2 text-center text-[0.82rem] font-bold text-navy">After</figcaption>
                </figure>
              </div>
            </div>
          ))}
        </div>
        <QuoteButton className="mt-7 inline-block rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">
          Get a free quote
        </QuoteButton>
      </div>
    </section>
  );
}

const STATS_ITEMS = [
  {
    title: "Happy clients",
    text: "Tenants, homeowners and property teams across Brisbane and the Gold Coast.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </>
    ),
  },
  {
    title: "Guaranteed reclean",
    text: "If something we cleaned is flagged and the miss is ours, we arrange a reclean.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: "Local team",
    text: "Brisbane and Gold Coast properties — quoted to the suburb and the layout.",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    title: "Clear quotes",
    text: "You know what is included before we start. No guesswork on the day.",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </>
    ),
  },
];

export function StatsSection({ image = "/images/stats-city.jpg" }: { image?: string }) {
  return (
    <section className="bg-white py-[76px]">
      <div className={wrap}>
        <p className={eyebrow}>Why locals book us</p>
        <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.4rem)] text-navy">Happy clients. Reclean support. Local service.</h2>
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <Image
            src={image}
            alt=""
            width={880}
            height={660}
            sizes="(max-width: 1024px) 100vw, 560px"
            quality={95}
            className="aspect-square w-full rounded-xl object-cover object-center shadow-lg"
          />
          <div className="grid gap-3.5 sm:grid-cols-2">
            {STATS_ITEMS.map((item) => (
              <article key={item.title} className="rounded-[10px] border border-line bg-sky p-[22px_18px] text-center">
                <BadgeIcon>{item.icon}</BadgeIcon>
                <h3 className="mb-1.5 font-sans text-[1.15rem] text-navy">{item.title}</h3>
                <p className="text-[0.92rem] text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const BOOK_STEPS = [
  {
    step: "01",
    title: "Request a quote",
    text: "Tell us the suburb, property type and preferred date. Call 0422 555 984 or use the quote form.",
    image: "/images/scene-move.png",
    alt: "Property ready for a cleaning quote",
  },
  {
    step: "02",
    title: "Confirm the visit",
    text: "We send a clear quote. Once you accept, we lock in the time that works for the property.",
    image: "/images/scene-kitchen.png",
    alt: "Kitchen ready for a professional clean",
  },
  {
    step: "03",
    title: "We handle the clean",
    text: "The team works through the agreed list. If a miss on our side is flagged, we arrange a reclean.",
    image: "/images/scene-bathroom.png",
    alt: "A finished bathroom after cleaning",
  },
];

export function BookSection({ serviceName }: { serviceName: string }) {
  return (
    <section className="bg-sky py-[76px]">
      <div className={wrap}>
        <p className={eyebrow}>How to book us</p>
        <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.4rem)] text-navy">Three steps to book {serviceName.toLowerCase()}.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {BOOK_STEPS.map((item) => (
            <article key={item.step} className="overflow-hidden rounded-[10px] border border-line bg-white">
              <Image
                src={item.image}
                alt={item.alt}
                width={640}
                height={400}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-6">
                <span className="font-serif text-[1.6rem] text-gold-deep">{item.step}</span>
                <h3 className="mt-1 font-sans text-[1.1rem] text-navy">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.text}</p>
              </div>
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
    <section className="relative flex min-h-[340px] items-center overflow-hidden bg-navy-deep text-white md:min-h-[420px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#081e40]/90 via-[#081e40]/60 to-[#081e40]/20" />
      <div className="relative mx-auto w-[min(1180px,calc(100%-32px))] py-20 md:py-28">
        <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-gold">{kicker}</p>
        <h1 className="max-w-[22ch] font-sans text-[clamp(1.9rem,4.6vw,3rem)] font-bold leading-[1.2] text-white">{title}</h1>
        <p className="mt-4 max-w-[64ch] text-[1.05rem] text-slate-200">{lede}</p>
        {children}
      </div>
    </section>
  );
}
