import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { QuoteButton } from "@/components/QuoteModal";
import { StatsSection, FaqSection, TrustedSection, HowWeWorkSection, BeforeAfterSection } from "@/components/Sections";
import TestimonialsSection from "@/components/TestimonialsSection";
import { SERVICES, slugify } from "@/lib/data";

const FAQS: [string, string][] = [
  ["What is bond cleaning?", "Bond cleaning, also known as end of lease cleaning, is a detailed clean of a rental property carried out when a tenant moves out. It is designed to cover the areas typically checked during a property inspection."],
  ["What does bond cleaning include?", "A bond clean generally covers the kitchen, bathrooms, bedrooms, living areas and floors, including detailed work like skirting boards, window tracks and oven cleaning. Exact inclusions can vary depending on the property."],
  ["Do you provide spring cleaning?", "Yes. Spring cleaning is charged at an hourly rate, so you can choose how much time you need and which rooms to prioritise. Specialised extras such as ovens or carpets can be quoted separately."],
  ["Can you clean ovens and barbecues?", "Yes. Oven and BBQ cleaning can sit with a bond clean or run as its own visit. We break down built-up grease on racks, trays, glass and hotplates."],
  ["Do you steam-clean carpets?", "Yes. Carpet steam cleaning is a listed service. Tell us the rooms and any stains when you enquire so the quote matches the work."],
  ["How can I request a quote?", "Get in touch with a few details about your property and the service you need, and we will provide a quote based on your specific requirements. Use the form on this page or call 0422 555 984."],
  ["How should I prepare for a bond clean?", "It helps to have the property empty of your belongings before we arrive, giving us clear access to every area that needs to be cleaned."],
  ["What areas do you service?", "Bond Clean Specialist works across the Gold Coast and Brisbane. If your suburb is not listed, call us and we will tell you whether we can book it."],
];

const HOME_SUBURBS = ["Annerley", "Ashgrove", "Chermside", "Clayfield", "Coorparoo", "Greenslopes", "Kangaroo Point", "Kedron", "Lutwyche", "Moorooka", "Mount Gravatt", "Nundah", "Spring Hill", "Sunnybank", "West End", "Woolloongabba"];

const FEATURES = [
  ["Thorough, not rushed", "We work through each property methodically rather than cutting corners to save time."],
  ["Attention to the details that count", "Skirting boards, tracks, and corners get the same care as benchtops and floors."],
  ["Convenient to book", "Tell us what you need, and we will organise a time that works for you."],
  ["Clear communication", "You will know what is included in your clean before we start."],
  ["Focused on the result", "A property that looks and feels properly clean, not just tidied."],
  ["Quote before we start", "We talk through your property first, then put together a clear quote."],
] as const;

const wrap = "mx-auto w-[min(1180px,calc(100%-32px))]";
const eyebrow = "mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy";
const h2 = "font-serif text-[clamp(1.7rem,3.4vw,2.4rem)] leading-[1.25] text-navy";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy-deep text-white">
          <video className="absolute inset-0 h-full w-full object-cover brightness-110 contrast-105" autoPlay muted loop playsInline poster="/images/hero-cleaner.png">
            <source src="/videos/hero-clean.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#081e40]/70 via-[#081e40]/35 to-[#081e40]/10" />
          <div className={`relative mx-auto grid gap-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start ${wrap}`}>
            <div>
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-gold px-3.5 py-1.5 text-[0.82rem] font-extrabold tracking-wide text-navy">
                <span className="h-2 w-2 rounded-full bg-navy" /> REAL ESTATE STANDARD CLEANING
              </p>
              <h1 className="font-sans text-[clamp(2.15rem,6vw,3.6rem)] font-bold leading-[1.15] text-white">Professional cleaning for a brighter space.</h1>
              <p className="mt-4 max-w-[60ch] text-[1.05rem] text-slate-200">Residential and commercial cleaning across Brisbane and the Gold Coast.</p>
              <p className="max-w-[60ch] text-slate-200">Moving is stressful enough. Let our team take care of the detailed cleaning so you can focus on moving forward — or keep the office, gym or shop looking ready for customers.</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {["Clear pricing and quotes", "Detailed cleaning", "Brisbane and Gold Coast", "Easy booking"].map((t) => (
                  <li key={t} className="relative pl-[22px]"><span className="absolute left-0 top-[0.55em] h-2 w-2 rounded-full bg-gold" />{t}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="#quote" className="rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">Get a free quote</a>
                <a href="tel:0422555984" className="rounded-lg border border-white/40 px-5 py-3 font-bold text-white">Call 0422 555 984</a>
              </div>
            </div>
            <aside id="quote" className="overflow-hidden rounded-2xl bg-white text-slate-900 shadow-[0_24px_50px_rgba(8,30,64,0.35)] outline outline-[3px] outline-gold/40">
              <div className="relative bg-gradient-to-b from-[#123a78] to-navy px-[18px] py-[18px] text-center text-white after:absolute after:inset-x-0 after:bottom-0 after:h-[5px] after:bg-gold">
                <h2 className="font-sans text-[1.42rem] font-bold uppercase tracking-wide text-white">Request a free quote</h2>
              </div>
              <div className="px-[18px] py-5"><QuoteForm /></div>
            </aside>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white py-[76px]">
          <div className={wrap}>
            <p className={eyebrow}>Our professional cleaning services</p>
            <h2 className={h2}>Residential and commercial cleaning, quoted to the property.</h2>
            <p className="mt-3 max-w-[72ch] text-slate-600">At Bond Clean Specialist, we provide professional residential and commercial cleaning services for tenants, homeowners, property managers, real estate agencies, builders and businesses. Our focus is on reliable service, attention to detail and high-quality cleaning tailored to each property’s requirements.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {SERVICES.map((s) => {
                const thumb = s.img === "svc-carpet.png" ? "scene-vacuum.png" : s.img;
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition hover:border-navy/20 hover:shadow-md"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={`/images/${thumb}`}
                        alt={s.name}
                        width={480}
                        height={360}
                        className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-3.5">
                      <h3 className="font-sans text-[1rem] font-bold leading-snug text-navy">{s.name}</h3>
                      <p className="mt-1.5 line-clamp-2 flex-1 text-[0.86rem] leading-snug text-slate-600">{s.short}</p>
                      <span className="mt-3 text-[0.82rem] font-bold text-navy group-hover:underline">View service →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <Link href="/services" className="mt-7 inline-block rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">View all services</Link>
          </div>
        </section>

        {/* About banner */}
        <section className="relative overflow-hidden py-[76px] text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about-living.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[#081e40]/72" />
          <div className={`relative ${wrap}`}>
            <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-gold">About Bond Clean Specialist</p>
            <h2 className="max-w-[26ch] font-serif text-[clamp(1.7rem,3.4vw,2.4rem)] leading-[1.25] text-white">Cleaning that takes one more thing off your list.</h2>
            <p className="mt-3 max-w-[64ch] text-slate-200">At Bond Clean Specialist, we take pride in delivering high-quality cleaning services for homes, rental properties and businesses across Brisbane and the Gold Coast.</p>
            <p className="max-w-[64ch] text-slate-200">Moving house comes with enough to organise. Packing, utilities, paperwork and inspections can quickly become overwhelming. We take care of the cleaning — with detailed bond cleaning, spring cleaning, carpets, ovens and commercial work — so the process stays clear from booking to completion.</p>
            <Link href="/about" className="mt-5 inline-block rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">Learn more about us</Link>
          </div>
        </section>

        <TrustedSection />

        <HowWeWorkSection />

        <BeforeAfterSection />

        <TestimonialsSection />

        <StatsSection />

        {/* Areas */}
        <section className="bg-sky py-[76px]">
          <div className={wrap}>
            <p className={eyebrow}>Service areas</p>
            <h2 className={h2}>We cover suburbs across Brisbane and the Gold Coast</h2>
            <p className="mt-3 text-slate-600">Bond cleaning, spring cleaning and the rest of our list across Brisbane and the Gold Coast. See the areas page for the full suburb list.</p>
            <div className="mt-6 grid grid-cols-2 gap-x-5 sm:grid-cols-4">
              {HOME_SUBURBS.map((n) => (
                <Link key={n} href={`/areas/${slugify(n)}`} className="border-b border-line py-2.5 font-semibold text-navy hover:pl-1">{n}</Link>
              ))}
            </div>
            <Link href="/areas" className="mt-7 inline-block rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">View all service areas</Link>
          </div>
        </section>

        {/* Why choose */}
        <section className="bg-sky py-[76px]">
          <div className={wrap}>
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <p className={eyebrow}>Why choose Bond Clean Specialist</p>
                <h2 className={h2}>The detail that actually matters when a property needs to be spotless.</h2>
                <p className="mt-3 max-w-[62ch] text-[1.05rem] leading-[1.7] text-slate-600">Bond Clean Specialist is a local team for Brisbane and Gold Coast properties that need a proper clean, not a rush job. We quote before we start, work through the rooms that matter at inspection, and come back if a miss on our side is flagged. Whether it is a bond clean, a spring clean or a commercial visit, the process stays the same: a clear quote, a booked time, and a property that looks finished.</p>
                <ul className="mt-4">
                  {["Quote before we start, based on the property", "Skirtings, tracks and wet areas included in the detail", "Reclean where a miss on our side is flagged", "Brisbane and Gold Coast, seven days"].map((t) => (
                    <li key={t} className="relative border-b border-navy/10 py-2 pl-[22px] text-slate-700"><span className="absolute left-0 top-[1em] h-2 w-2 rounded-full bg-gold" />{t}</li>
                  ))}
                </ul>
                <QuoteButton className="mt-6 inline-block rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">Get a free quote</QuoteButton>
              </div>
              <Image src="/images/scene-window.png" alt="Cleaner wiping a bright living-room window" width={880} height={620} className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg" />
            </div>
            <div className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(([t, d]) => (
                <article key={t} className="rounded-[10px] border border-line bg-white p-6">
                  <h3 className="mb-2 font-sans text-[1.1rem] text-navy">{t}</h3>
                  <p className="text-slate-600">{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FaqSection faqs={FAQS} />

        {/* CTA */}
        <section className="bg-navy-deep py-[76px] text-white">
          <div className={`grid items-center gap-8 lg:grid-cols-2 ${wrap}`}>
            <Image src="/images/scene-vacuum.png" alt="Cleaner vacuuming a bright hallway" width={880} height={620} className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg" />
            <div>
              <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-gold">Ready to take cleaning off your list?</p>
              <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.4rem)] leading-[1.25] text-white">Tell us about your property and we will help you organise the right service.</h2>
              <p className="mt-3 max-w-[52ch] text-slate-300">Bond, spring, carpets, ovens or a commercial clean — send a few details and we will come back with a quote that matches the property and your date.</p>
              <ul className="mt-4">
                {["Clear quote before we start", "Brisbane and the Gold Coast", "Reclean if the miss is ours"].map((t) => (
                  <li key={t} className="relative border-b border-white/15 py-2 pl-[22px] text-slate-200"><span className="absolute left-0 top-[1em] h-2 w-2 rounded-full bg-gold" />{t}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="tel:0422555984" className="rounded-lg border border-white/40 px-5 py-3 font-bold text-white">0422 555 984</a>
                <QuoteButton className="rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">Get a free quote</QuoteButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
