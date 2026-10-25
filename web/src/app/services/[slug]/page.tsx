import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteButton } from "@/components/QuoteModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero, WhySection, BookSection, StatsSection, FaqSection } from "@/components/Sections";
import { SERVICES } from "@/lib/data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: `${s.name} | Bond Clean Specialist`, description: s.intro };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <>
      <Header />
      <main>
        <PageHero image={`/images/${s.img}`} kicker={s.name} title={s.h1} lede={s.intro}>
          <QuoteButton className="mt-6 inline-block rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">Get a free quote</QuoteButton>
        </PageHero>

        <section className="bg-white py-[76px]">
          <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-8 lg:grid-cols-2">
            <div>
              {s.body.map((p) => (
                <p key={p.slice(0, 32)} className="text-slate-700">{p}</p>
              ))}
              <QuoteButton className="mt-4 inline-block rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">Get a {s.name.toLowerCase()} quote</QuoteButton>
            </div>
            <Image src={`/images/${s.img}`} alt={s.name} width={880} height={620} className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg" />
          </div>
        </section>

        <WhySection items={s.why} variant={0} />
        <BookSection serviceName={s.name} />
        <StatsSection />
        <FaqSection faqs={s.faqs} />
      </main>
      <Footer />
    </>
  );
}
