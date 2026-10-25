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
          <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
            <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy">Legal</p>
            <h1 className="font-serif text-[clamp(1.9rem,4.6vw,3rem)] leading-[1.2] text-navy">{title}</h1>
          </div>
        </section>
        <section className="bg-white py-[76px]">
          <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
            <div className="max-w-[72ch]">
              {sections.map((s, i) => (
                <div key={s.heading ?? i}>
                  {s.heading && <h2 className="mt-[1.6em] font-serif text-[1.2rem] text-navy first:mt-0">{s.heading}</h2>}
                  {s.paras.map((p) => (
                    <p key={p.slice(0, 40)} className="text-slate-700">{p}</p>
                  ))}
                </div>
              ))}
              <p className="text-slate-700">
                Questions? Use the <Link className="font-bold text-navy underline" href="/contact">contact page</Link>, call 0422 555 984, or email info@bondcleanspecialist.com.au.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
