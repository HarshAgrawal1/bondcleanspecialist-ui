import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteButton } from "@/components/QuoteModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SERVICES } from "@/lib/data";

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
        <section className="bg-white pb-5 pt-10">
          <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
            <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy">Our professional cleaning services</p>
            <h1 className="max-w-[24ch] font-serif text-[clamp(1.9rem,4.6vw,3rem)] leading-[1.2] text-navy">Residential and commercial cleaning, tailored to the property.</h1>
            <p className="mt-4 max-w-[64ch] text-[1.05rem] text-slate-600">
              At Bond Clean Specialist, we provide professional residential and commercial cleaning services for tenants, homeowners, property managers, real estate agencies, builders and businesses. Our focus is on reliable service, attention to detail and high-quality cleaning tailored to each property’s requirements.
            </p>
          </div>
        </section>

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
                <p className="text-slate-700">{s.body[0]}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <QuoteButton className="rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">Get a {s.name.toLowerCase()} quote</QuoteButton>
                  <Link href={`/services/${s.slug}`} className="rounded-lg border border-line px-5 py-3 font-bold text-navy hover:bg-sky">View service</Link>
                </div>
              </div>
              <Image src={`/images/${s.img}`} alt={s.name} width={880} height={620} className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg" />
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
