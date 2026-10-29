import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { QuoteButton } from "@/components/QuoteModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero, WhySection, BookSection, StatsSection, FaqSection } from "@/components/Sections";
import { SERVICES } from "@/lib/data";

/** Section-2 image — finished space (no people); never reuse the hero (`s.img`). */
const BODY_IMAGE: Record<string, string> = {
  "bond-cleaning": "sec2-bond-v3.jpg",
  "carpet-steam-cleaning": "sec2-carpet-v3.jpg",
  "spring-cleaning": "sec2-spring-v3.jpg",
  "oven-bbq-cleaning": "sec2-oven-v3.jpg",
  "airbnb-cleaning": "sec2-airbnb-v3.jpg",
  "deep-cleaning": "sec2-deep-v3.jpg",
  "builder-cleaning": "sec2-builder-v3.jpg",
  "upholstery-cleaning": "sec2-upholstery-v3.jpg",
  "pressure-washing": "sec2-pressure-v3.jpg",
  "gym-cleaning": "sec2-gym-v3.jpg",
  "office-cleaning": "sec2-office-v3.jpg",
  "hospitality-cleaning": "sec2-hospitality-v3.jpg",
  "retail-store-cleaning": "sec2-retail-v3.jpg",
  "pest-control": "sec2-pest-v3.jpg",
};

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
  const bodyImg = BODY_IMAGE[s.slug] ?? "scene-bathroom.png";

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
              <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy">{s.name}</p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-navy">
                Affordable {s.name.toLowerCase()} across Brisbane and the Gold Coast
              </h2>
              {s.body.map((p) => (
                <p key={p.slice(0, 32)} className="mt-3 text-slate-700 leading-relaxed">{p}</p>
              ))}
              <QuoteButton className="mt-5 inline-block rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">
                Get a {s.name.toLowerCase()} quote
              </QuoteButton>
            </div>
            <Image src={`/images/${bodyImg}`} alt={s.name} width={880} height={620} className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg" />
          </div>
        </section>

        <WhySection items={s.why} variant={0} />
        <BookSection serviceName={s.name} serviceSlug={s.slug} />
        <StatsSection image="/images/stats-city.jpg" />
        <FaqSection faqs={s.faqs} />
      </main>
      <Footer />
    </>
  );
}
