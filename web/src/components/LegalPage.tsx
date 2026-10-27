import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export type LegalSection = { heading?: string; paras: string[] };

export default function LegalPage({ title, sections }: { title: string; sections: LegalSection[] }) {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white pb-5 pt-10">
          <div className="mx-auto w-[min(720px,calc(100%-32px))] text-center">
            <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy">Legal</p>
            <h1 className="font-serif text-[clamp(1.9rem,4.6vw,3rem)] leading-[1.2] text-navy">{title}</h1>
          </div>
        </section>
        <section className="bg-white py-[76px]">
          <div className="mx-auto w-[min(720px,calc(100%-32px))]">
            {sections.map((s, i) => (
              <div key={s.heading ?? i} className={i === 0 ? "" : "mt-10"}>
                {s.heading && (
                  <h2 className="mb-3 font-serif text-[1.35rem] font-semibold leading-snug text-navy">
                    {s.heading}
                  </h2>
                )}
                {s.paras.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-3 text-[1.05rem] leading-relaxed text-slate-700 first:mt-0">
                    {p}
                  </p>
                ))}
              </div>
            ))}
            <p className="mt-10 text-[1.05rem] leading-relaxed text-slate-700">
              Questions? Use the <Link className="font-bold text-navy underline" href="/contact">contact page</Link>, call 0422 555 984, or email info@bondcleanspecialist.com.au.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
