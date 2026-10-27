import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { PageHero } from "@/components/Sections";
import { PHONE, PHONE_HREF, EMAIL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | Bond Clean Specialist",
  description: "Contact Bond Clean Specialist for cleaning across Brisbane and the Gold Coast.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/stats-city.jpg"
          kicker="Contact us"
          title="Let’s get your property cleaned"
          lede="Bond clean, carpet, office, gym or hospitality — tell us the property and the service. We will get back to you with a quote."
        />
        <section className="bg-sky py-[76px]">
          <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-start gap-8 lg:grid-cols-2">
            <div className="rounded-[10px] border border-line bg-white p-6">
              <h3 className="mb-3 font-sans text-[1.2rem] text-navy">Bond Clean Specialist</h3>
              <p className="text-slate-700">Phone: <a className="font-semibold text-navy underline underline-offset-2 hover:text-navy-deep" href={PHONE_HREF}>{PHONE}</a> — call us for a quick chat or to book a service.</p>
              <p className="text-slate-700">Email: <a className="font-semibold text-navy underline underline-offset-2 hover:text-navy-deep" href={`mailto:${EMAIL}`}>{EMAIL}</a> — send us the details of your property and cleaning needs.</p>
              <p className="text-slate-700">Service areas: Gold Coast and Brisbane. See the full suburb list on the <Link className="font-semibold text-navy underline" href="/areas">areas page</Link>.</p>
              <p className="text-slate-700">Hours: seven days. Have the property type, service required, and preferred date ready.</p>
              <a href={PHONE_HREF} className="mt-4 inline-block rounded-lg bg-navy px-5 py-3 font-bold text-white hover:bg-navy-deep">Call {PHONE}</a>
            </div>
            <aside className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_50px_rgba(12,41,88,0.22)] outline outline-[3px] outline-gold/40">
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
