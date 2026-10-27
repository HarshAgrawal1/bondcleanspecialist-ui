import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteButton } from "@/components/QuoteModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero, TrustedSection, StatsSection } from "@/components/Sections";
import { GC_AREAS, BNE_AREAS, slugify, PHONE, PHONE_HREF } from "@/lib/data";

export const metadata: Metadata = {
  title: "Service areas | Bond Clean Specialist",
  description: "Cleaning services across Brisbane and the Gold Coast suburbs.",
};

function AreaGrid({ names }: { names: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-4">
      {names.map((n) => (
        <Link key={n} href={`/areas/${slugify(n)}`} className="border-b border-line py-2.5 font-semibold text-navy transition hover:pl-1.5">{n}</Link>
      ))}
    </div>
  );
}

export default function AreasPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/areas-brisbane.png"
          kicker="Service areas"
          title="Serving Brisbane and the Gold Coast"
          lede="Each suburb has its own page. If your street sits just outside the list, call 0422 555 984 and ask."
        />
        <section className="bg-sky py-[76px]">
          <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
            <h2 className="mb-6 font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-navy">Gold Coast</h2>
            <AreaGrid names={GC_AREAS} />
          </div>
        </section>
        <section className="bg-white py-[76px]">
          <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
            <h2 className="mb-6 font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-navy">Brisbane</h2>
            <AreaGrid names={BNE_AREAS} />
            <QuoteButton className="mt-8 inline-block rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">Request a quote for your suburb</QuoteButton>
          </div>
        </section>

        <section className="bg-sky py-[76px]">
          <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy">Local coverage</p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-navy">
                Bond cleaning and more, quoted to your suburb
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                We work across Brisbane and Gold Coast suburbs with the same approach every time: a clear quote based on the property, a booked visit, and careful attention to the areas agents and owners check.
              </p>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Pick your suburb from the lists above for local details, or call us if you are just outside the mapped areas — we will tell you straight away whether we can book it.
              </p>
            </div>
            <Image
              src="/images/areas-goldcoast.png"
              alt="Gold Coast skyline and coastline"
              width={880}
              height={620}
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
            />
          </div>
        </section>

        <TrustedSection />
        <StatsSection />

        <section className="bg-navy-deep py-[76px] text-white">
          <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-8 lg:grid-cols-2">
            <Image
              src="/images/scene-move.png"
              alt="Property ready for a bond clean"
              width={880}
              height={620}
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
            />
            <div>
              <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-gold">End of lease</p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.25] text-white">
                Achieve bond satisfaction — call us today
              </h2>
              <p className="mt-3 max-w-[52ch] text-slate-300 leading-relaxed">
                A detailed bond clean helps your rental present well at inspection. We quote before we start, work through the agreed list, and arrange a reclean if something we cleaned is flagged and the miss is ours.
              </p>
              <ul className="mt-4">
                {["Clear quote for your suburb", "Detail where inspections look closely", "Reclean if the miss is ours"].map((t) => (
                  <li key={t} className="relative border-b border-white/15 py-2 pl-[22px] text-slate-200">
                    <span className="absolute left-0 top-[1em] h-2 w-2 rounded-full bg-gold" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={PHONE_HREF} className="rounded-lg border border-white/40 px-5 py-3 font-bold text-white hover:bg-white/10">
                  Call {PHONE}
                </a>
                <QuoteButton className="rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">
                  Get a free quote
                </QuoteButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
