import type { Metadata } from "next";
import Link from "next/link";
import { QuoteButton } from "@/components/QuoteModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <section className="bg-white pb-5 pt-10">
          <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
            <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy">How to prepare</p>
            <h1 className="max-w-[24ch] font-serif text-[clamp(1.9rem,4.6vw,3rem)] leading-[1.2] text-navy">A few things that help the clean go smoothly.</h1>
            <p className="mt-4 max-w-[64ch] text-[1.05rem] text-slate-600">You do not need to pre-clean. These notes just make it easier for the team to reach every surface included in your quote.</p>
          </div>
        </section>
        <section className="bg-white py-[76px]">
          <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
            <ul className="max-w-[72ch] space-y-0">
              {TIPS.map((t) => (
                <li key={t.slice(0, 24)} className="relative border-b border-line py-3.5 pl-[22px] text-slate-700">
                  <span className="absolute left-0 top-[1.05em] h-2 w-2 rounded-full bg-gold" />{t}
                </li>
              ))}
            </ul>
            <QuoteButton className="mt-7 inline-block rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">Get a free quote</QuoteButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
