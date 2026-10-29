import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "How to prepare | Bond Clean Specialist",
  description: "A few things that help the clean go smoothly.",
};

const TIPS = [
  "For a bond clean, have belongings out of the property where you can, including cupboards, fridge and oven.",
  "Arrange keys or vacant access and tell us if an agent will meet the team.",
  "Power and water on for the visit.",
  "Flag pets, parking and any extra rooms when you quote.",
  "Spring cleaning: list the rooms you want done first so the hours are used on your priorities.",
];

export default function HowToPreparePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/scene-move.png"
          kicker="How to prepare"
          title="A few things that help the clean go smoothly."
          lede="You do not need to pre-clean. These notes just make it easier for the team to reach every surface included in your quote."
        />
        <section className="bg-sky py-[76px]">
          <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-start gap-8 lg:grid-cols-2">
            <div className="rounded-[10px] border border-line bg-white p-6">
              <h2 className="mb-4 font-serif text-[1.5rem] text-navy">Before we arrive</h2>
              <ul className="space-y-0">
                {TIPS.map((t) => (
                  <li key={t.slice(0, 24)} className="relative border-b border-line py-3.5 pl-[22px] text-[1.05rem] leading-relaxed text-slate-700 last:border-b-0">
                    <span className="absolute left-0 top-[1.05em] h-2 w-2 rounded-full bg-gold" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_50px_rgba(12,41,88,0.22)] outline outline-[3px] outline-gold/40 lg:sticky lg:top-6">
              <div className="relative bg-gradient-to-b from-[#123a78] to-navy px-[18px] py-[18px] text-center text-white after:absolute after:inset-x-0 after:bottom-0 after:h-[5px] after:bg-gold">
                <h2 className="font-sans text-[1.42rem] font-bold uppercase tracking-wide text-white">Request a free quote</h2>
              </div>
              <div className="px-[18px] py-5">
                <QuoteForm />
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
