import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QuoteButton } from "@/components/QuoteModal";
import { PageHero } from "@/components/Sections";
import { PHONE, PHONE_HREF } from "@/lib/data";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "About | Bond Clean Specialist",
  description: "Bond Clean Specialist is a Brisbane and Gold Coast cleaning team built around a clear quote, detailed work and clear communication.",
};

const VALUES = [
  ["Detail", "The job is the tracks, skirtings and wet areas — not only the surfaces you see from the doorway."],
  ["Clarity", "A quote you can read, a time you can plan around, and a person to call if something needs a follow-up."],
  ["Accountability", "If something we cleaned is missed and the miss is ours, we arrange a reclean."],
] as const;

const WHY_CHOOSE = [
  ["Careful products", "We choose products suited to the surfaces in the property — effective on grease and grime without unnecessary harshness."],
  ["The right tools", "From wet areas to carpets and ovens, we bring the equipment needed to finish the agreed list properly."],
  ["Reclean support", "If something we cleaned is flagged and the miss is ours, we arrange a reclean so the job is finished right."],
  ["Consistent quality", "The same methodical approach on every visit — quote first, clear inclusions, and detail where it counts."],
] as const;

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/about-living.png"
          kicker="About us"
          title="Cleaning handled properly, without adding stress to a busy day."
          lede="Bond Clean Specialist is a Brisbane and Gold Coast cleaning team built around a clear quote, detailed work and communication you can follow from the first message to the finished job."
        />
        <section className="bg-white py-[76px]">
          <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-8 lg:grid-cols-2">
            <Image src="/images/scene-bathroom.png" alt="A professionally cleaned modern bathroom" width={880} height={620} className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg" />
            <div>
              <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy">Who we are</p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-navy">A local team for homes, rentals and commercial spaces.</h2>
              <p className="mt-3 text-slate-700">Bond Clean Specialist was built around a straightforward idea: cleaning should be handled properly, without cutting corners, and without adding stress to an already busy day.</p>
              <p className="text-slate-700">We cover fourteen services — from bond cleans and carpets through to offices, gyms and hospitality floors — and quote each job on the property in front of us.</p>
              <p className="text-slate-700">Our approach is methodical. We work through a property the same way each time, so the details that are easy to miss — skirting boards, window tracks, the inside of an oven — get proper attention rather than a quick pass.</p>
              <p className="text-slate-700">We know that inviting someone into your home or rental requires trust, which is why we keep communication clear from the first enquiry through to the completed job.</p>
            </div>
          </div>
        </section>
        <section className="bg-sky py-[76px]">
          <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy">Our mission</p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-navy">Take the clean off your list so you can get on with the move, the roster or the open.</h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                We exist to deliver a detailed, honestly quoted clean for tenants, homeowners, landlords and businesses across Brisbane and the Gold Coast — and to come back if a miss on our side is flagged.
              </p>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Quality comes first. We work through each property methodically so the finish matches what was quoted, without cutting corners to save a few minutes.
              </p>
            </div>
            <Image
              src="/images/scene-kitchen.png"
              alt="Professional cleaner working in a kitchen"
              width={880}
              height={620}
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
            />
          </div>
        </section>

        <section className="bg-white py-[76px]">
          <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-8 lg:grid-cols-2">
            <Image
              src="/images/scene-window.png"
              alt="Cleaner wiping a bright living-room window"
              width={880}
              height={620}
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
            />
            <div>
              <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy">Our values</p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-navy">What we hold to on every job.</h2>
              <div className="mt-6 grid gap-3.5">
                {VALUES.map(([t, d]) => (
                  <article key={t} className="rounded-[10px] border border-line bg-sky p-6">
                    <h3 className="mb-2 font-sans text-[1.1rem] font-bold text-navy">{t}</h3>
                    <p className="text-slate-600">{d}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-sky py-[76px]">
          <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
            <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy">Why choose us</p>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-navy">Why choose Bond Clean Specialist?</h2>
            <p className="mt-3 max-w-[64ch] text-slate-700 leading-relaxed">
              We focus on resolving cleaning stress with clear quotes and careful work across Brisbane and the Gold Coast — for bond cleans, spring cleans and the rest of our service list.
            </p>
            <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_CHOOSE.map(([t, d]) => (
                <article key={t} className="rounded-[10px] border border-line bg-white p-6">
                  <h3 className="mb-2 font-sans text-[1.1rem] font-bold text-navy">{t}</h3>
                  <p className="text-[0.95rem] text-slate-600">{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-[76px]">
          <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
            <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy">From our blog</p>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-navy">Cleaning tips and moving-out guides</h2>
            <p className="mt-3 max-w-[64ch] text-slate-700">
              Checklists and plain-language guides to help with bond cleans, preparation and choosing the right service.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/about/blog/${post.slug}`}
                  className="rounded-[10px] border border-line bg-sky p-5 transition hover:border-navy/25"
                >
                  <p className="text-[0.78rem] font-bold uppercase tracking-wide text-slate-500">{post.date}</p>
                  <h3 className="mt-2 font-sans text-[1.05rem] font-bold text-navy">{post.title}</h3>
                  <p className="mt-2 text-[0.92rem] text-slate-600">{post.excerpt}</p>
                  <span className="mt-3 inline-block text-[0.86rem] font-bold text-navy">Read more →</span>
                </Link>
              ))}
            </div>
            <Link href="/about/blog" className="mt-6 inline-block rounded-lg border-2 border-navy px-5 py-3 font-bold text-navy hover:bg-navy hover:text-white">
              View all tips
            </Link>
          </div>
        </section>

        <section className="bg-navy-deep py-[76px] text-white">
          <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-gold">Ready when you are</p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.25] text-white">
                Make your cleaning process easy by hiring our bond cleaners
              </h2>
              <p className="mt-3 max-w-[52ch] text-slate-300 leading-relaxed">
                Tell us about the property and the service you need. We will come back with a clear quote and a time that works for your handover, spring clean or commercial visit.
              </p>
              <ul className="mt-4">
                {["Clear quote before we start", "Brisbane and the Gold Coast", "Reclean if the miss is ours"].map((t) => (
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
            <Image
              src="/images/scene-vacuum.png"
              alt="Cleaner vacuuming a bright hallway"
              width={880}
              height={620}
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
