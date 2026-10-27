import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteButton } from "@/components/QuoteModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero, TrustedSection, StatsSection } from "@/components/Sections";
import { SERVICES, PHONE, PHONE_HREF } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | Bond Clean Specialist",
  description:
    "Residential and commercial cleaning services across Brisbane and the Gold Coast — bond, carpet, spring, oven, commercial and more, quoted to the property.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/about-living.png"
          kicker="Our professional cleaning services"
          title="Residential and commercial cleaning, tailored to the property."
          lede="At Bond Clean Specialist, we provide professional residential and commercial cleaning services for tenants, homeowners, property managers, real estate agencies, builders and businesses across Brisbane and the Gold Coast."
        />

        <section className="bg-white py-8">
          <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
            <nav aria-label="Service list" className="flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <a key={s.slug} href={`#${s.slug}`} className="rounded-full border border-line bg-white px-3 py-[7px] text-[0.86rem] font-bold text-navy hover:bg-sky">{s.name}</a>
              ))}
            </nav>
          </div>
        </section>

        {SERVICES.map((s, i) => (
          <section key={s.slug} id={s.slug} className={`${i % 2 === 0 ? "bg-sky" : "bg-white"} scroll-mt-[108px] py-[76px]`}>
            <div className={`mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy">{String(i + 1).padStart(2, "0")} · {s.name}</p>
                <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-navy">{s.short}</h2>
                <p className="mt-3 text-slate-700">{s.intro}</p>
                <p className="mt-3 text-slate-700">{s.body[0]}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <QuoteButton className="rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">Get a {s.name.toLowerCase()} quote</QuoteButton>
                  <Link href={`/services/${s.slug}`} className="rounded-lg border border-line px-5 py-3 font-bold text-navy hover:bg-sky">View service</Link>
                </div>
              </div>
              <Image src={`/images/${s.img}`} alt={s.name} width={880} height={620} className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg" />
            </div>
          </section>
        ))}

        <section className="bg-white py-[76px]">
          <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy">Your cleaning partner</p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-navy">
                Your trusted cleaning partner across Brisbane and the Gold Coast
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                From end-of-lease bond cleans to spring cleans, carpets, ovens and commercial spaces, we quote each job on the property in front of us — so the price and the inclusions stay clear before we start.
              </p>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Whether you are a tenant, homeowner, agent or business manager, the process is the same: tell us what you need, confirm the quote, and we handle the detail on the day.
              </p>
              <QuoteButton className="mt-6 inline-block rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">
                Get a free quote
              </QuoteButton>
            </div>
            <Image
              src="/images/scene-bathroom.png"
              alt="A professionally cleaned bathroom"
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
              src="/images/scene-vacuum.png"
              alt="Cleaner vacuuming a bright hallway"
              width={880}
              height={620}
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
            />
            <div>
              <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-gold">Ready to book</p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.25] text-white">
                Tell us the service and the suburb — we will quote from there.
              </h2>
              <p className="mt-3 max-w-[52ch] text-slate-300 leading-relaxed">
                Bond, spring, carpet, oven or commercial cleaning across Brisbane and the Gold Coast. Call or request a quote and we will help you organise the right visit.
              </p>
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
