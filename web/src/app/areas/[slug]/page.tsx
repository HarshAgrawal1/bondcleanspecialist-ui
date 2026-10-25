import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteButton } from "@/components/QuoteModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero, WhySection, BookSection, StatsSection } from "@/components/Sections";
import { AREAS } from "@/lib/data";

const WHY_SETS: [string, string][][] = [
  [
    ["Local knowledge of the streets", "We quote {name} jobs based on the property type we see across this suburb — units, houses and townhouses."],
    ["Inspection-ready detail", "Skirtings, tracks and wet areas are cleaned with handover in mind, not a once-over tidy."],
    ["Easy to book from {name}", "Send the address, bedrooms and date. We confirm whether we can attend and send a clear quote."],
  ],
  [
    ["Quoted before we start", "No {name} job starts without a price you have seen. The scope sits with the quote."],
    ["Reclean if the miss is ours", "If inspection notes flag something we cleaned, we come back where the miss is ours."],
    ["One team for the full list", "Bond, spring, carpets, ovens and commercial work can be organised from the same enquiry."],
  ],
  [
    ["Access that suits handover", "Vacant rentals and occupied homes in {name} are booked around keys, agents and your moving day."],
    ["Clear communication", "You will know what is included, when we arrive, and who to call if something needs a follow-up."],
    ["Brisbane and Gold Coast cover", "{name} sits in our {region} list. Nearby suburbs can usually be quoted on the same call."],
  ],
];

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = AREAS.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: `Cleaning in ${a.name} | Bond Clean Specialist`,
    description: `Bond Clean Specialist provides professional cleaning in ${a.name}, ${a.region}. Bond cleans, spring cleans, ovens, carpets and commercial work, quoted to the property.`,
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = AREAS.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const a = AREAS[idx];
  const variant = idx % 3;
  const img = a.region === "Brisbane" ? "areas-brisbane.png" : "areas-goldcoast.png";
  const intros = [
    `Bond Clean Specialist provides professional cleaning in ${a.name}, ${a.region}. Bond cleans, spring cleans, ovens, carpets and commercial work are quoted to the property — not a generic suburb average.`,
    `If you are moving out of a rental in ${a.name} or need a deeper home clean, we organise the visit around your date and the rooms that actually need the work.`,
    `From end-of-lease cleaning to hourly spring cleaning, ${a.name} properties are booked the same way as the rest of our ${a.region} list: tell us the layout, get a quote, we take the clean off your list.`,
  ];
  const fill = (t: string) => t.replaceAll("{name}", a.name).replaceAll("{region}", a.region);
  const why = WHY_SETS[variant].map(([t, d]) => [fill(t), fill(d)] as [string, string]);

  return (
    <>
      <Header />
      <main>
        <PageHero image={`/images/${img}`} kicker={a.region} title={`Cleaning services in ${a.name}`} lede={intros[variant]}>
          <QuoteButton className="mt-6 inline-block rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">Get a {a.name} quote</QuoteButton>
        </PageHero>

        <section className="bg-white py-[76px]">
          <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-navy">Professional cleaning for {a.name} homes and rentals.</h2>
              <p className="mt-3 text-slate-700">We cover bond cleaning, spring cleaning, carpet steam cleaning, oven and BBQ cleaning, and the rest of our residential and commercial list when the property is in {a.name}.</p>
              <p className="text-slate-700">Call 0422 555 984 or request a quote with your street, bedrooms and preferred date.</p>
              <Link href="/services/bond-cleaning" className="mt-4 inline-block rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">Bond cleaning in {a.name}</Link>
            </div>
            <Image src="/images/svc-bond.png" alt="Bond cleaning" width={880} height={620} className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg" />
          </div>
        </section>

        <WhySection items={why} variant={variant} />
        <BookSection serviceName={`cleaning in ${a.name}`} />
        <StatsSection />
      </main>
      <Footer />
    </>
  );
}
