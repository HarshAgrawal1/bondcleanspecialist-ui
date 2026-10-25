import type { Metadata } from "next";
import Link from "next/link";
import { QuoteButton } from "@/components/QuoteModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Bond cleaning prices | Bond Clean Specialist",
  description: "Starting prices for end of lease cleaning across Brisbane and the Gold Coast.",
};

const ROWS = [
  ["Studio", "from $265"],
  ["1 bedroom", "from $285"],
  ["2 bedroom", "from $335"],
  ["3 bedroom", "from $409"],
  ["4 bedroom", "Call for a quote"],
] as const;

export default function PricesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/svc-bond.png"
          kicker="Prices"
          title="Bond cleaning prices"
          lede="Starting prices for end of lease cleaning across Brisbane and the Gold Coast. Your quote is confirmed once we know the property."
        />
        <section className="bg-white py-[76px]">
          <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-navy">End of lease (bond) cleaning</h2>
            <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border border-line">
              <thead>
                <tr className="bg-navy text-left text-white"><th className="px-4 py-3">Property</th><th className="px-4 py-3">From</th></tr>
              </thead>
              <tbody>
                {ROWS.map(([a, b]) => (
                  <tr key={a} className="border-t border-line odd:bg-sky"><td className="px-4 py-3">{a}</td><td className="px-4 py-3 font-semibold text-navy">{b}</td></tr>
                ))}
              </tbody>
            </table>
            <p className="mt-5 max-w-[72ch] text-slate-600">Please note: prices are indicative and subject to location, property condition and availability. A minimum call-out may apply. Larger or heavily soiled properties may need a quote after we understand the layout. Other services are quoted on request.</p>
            <QuoteButton className="mt-4 inline-block rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">Get my free quote</QuoteButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
