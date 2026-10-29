import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QuoteButton } from "@/components/QuoteModal";
import { PageHero } from "@/components/Sections";
import { PHONE, PHONE_HREF, EMAIL } from "@/lib/data";

export type LegalSection = { heading?: string; paras: string[] };

export default function LegalPage({
  title,
  sections,
  lede = "How Bond Clean Specialist handles quotes, bookings and your information.",
}: {
  title: string;
  sections: LegalSection[];
  lede?: string;
}) {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/brand-hero-v2.jpg"
          kicker="Legal"
          title={title}
          lede={lede}
        />
        <section className="bg-sky py-[76px]">
          <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-start gap-8 lg:grid-cols-[1fr_340px]">
            <div className="rounded-[10px] border border-line bg-white p-6 md:p-8">
              {sections.map((s, i) => (
                <div key={s.heading ?? i} className={i === 0 ? "" : "mt-10"}>
                  {s.heading && (
                    <h2 className="mb-3 font-serif text-[1.35rem] font-semibold leading-snug text-navy">
                      {s.heading}
                    </h2>
                  )}
                  {s.paras.map((p) => (
                    <p key={p.slice(0, 40)} className="mt-3 text-[1.05rem] leading-relaxed text-slate-700 first:mt-0">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
              <p className="mt-10 text-[1.05rem] leading-relaxed text-slate-700">
                Questions? Use the <Link className="font-bold text-navy underline" href="/contact">contact page</Link>, call {PHONE}, or email {EMAIL}.
              </p>
            </div>
            <aside className="rounded-[10px] border border-line bg-white p-6 lg:sticky lg:top-6">
              <h2 className="font-sans text-[1.2rem] font-bold text-navy">Need a clean?</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">
                Request a quote or call us — we cover Brisbane and the Gold Coast.
              </p>
              <a
                href={PHONE_HREF}
                className="mt-5 block rounded-lg bg-navy px-5 py-3 text-center font-bold text-white hover:bg-navy-deep"
              >
                Call {PHONE}
              </a>
              <QuoteButton className="mt-3 block w-full rounded-lg bg-gold px-5 py-3 text-center font-bold text-navy hover:bg-gold-deep">
                Get a free quote
              </QuoteButton>
              <p className="mt-4 text-center text-sm font-semibold text-slate-500">
                Available 24/7 · Brisbane &amp; Gold Coast
              </p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
