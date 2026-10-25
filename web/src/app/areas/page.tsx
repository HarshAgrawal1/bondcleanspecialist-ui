import type { Metadata } from "next";
import Link from "next/link";
import { QuoteButton } from "@/components/QuoteModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/Sections";
import { GC_AREAS, BNE_AREAS, slugify } from "@/lib/data";

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
      </main>
      <Footer />
    </>
  );
}
