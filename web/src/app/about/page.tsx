import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "About | Bond Clean Specialist",
  description: "Bond Clean Specialist is a Brisbane and Gold Coast cleaning team built around a clear quote, detailed work and clear communication.",
};

const VALUES = [
  ["Detail", "The job is the tracks, skirtings and wet areas — not only the surfaces you see from the doorway."],
  ["Clarity", "A quote you can read, a time you can plan around, and a person to call if something needs a follow-up."],
  ["Accountability", "If something we cleaned is missed and the miss is ours, we arrange a reclean."],
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
          <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 lg:grid-cols-2">
            <div className="rounded-xl bg-white p-7">
              <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy">Our mission</p>
              <h2 className="font-serif text-[clamp(1.5rem,2.8vw,2rem)] text-navy">Take the clean off your list so you can get on with the move, the roster or the open.</h2>
              <p className="mt-3 text-slate-700">We exist to deliver a detailed, honestly quoted clean for tenants, homeowners, landlords and businesses across Brisbane and the Gold Coast — and to come back if a miss on our side is flagged.</p>
            </div>
            <div>
              <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy">Our values</p>
              <div className="grid gap-3.5">
                {VALUES.map(([t, d]) => (
                  <article key={t} className="rounded-[10px] border border-line bg-white p-6">
                    <h3 className="mb-2 font-sans text-[1.1rem] text-navy">{t}</h3>
                    <p className="text-slate-600">{d}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
