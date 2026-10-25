import Image from "next/image";
import Link from "next/link";
import { SERVICES, PHONE, PHONE_HREF, EMAIL, ABN } from "@/lib/data";

const USEFUL = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/prices", label: "Prices" },
  { href: "/how-to-prepare", label: "How to prepare" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white pb-24 pt-12 text-slate-900 lg:pb-8">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 min-[900px]:grid-cols-[1.2fr_0.9fr_1.2fr_0.85fr]">
        <div>
          <Link href="/" className="mb-3 inline-block">
            <Image src="/logo.png" alt="Bond Clean Specialist" width={220} height={58} className="h-[58px] w-auto object-contain" />
          </Link>
          <p>Professional bond, spring and oven cleaning across Brisbane and the Gold Coast.</p>
          <p className="mt-3.5 inline-flex items-center gap-2.5 rounded-lg border border-[#ead7a8] bg-[#fff8ea] py-2 pl-2 pr-3.5 font-extrabold text-navy">
            <span className="rounded bg-gold px-2 py-1 text-[0.72rem] tracking-[0.14em] text-navy">ABN</span> {ABN}
          </p>
        </div>
        <div>
          <h3 className="mb-2 font-serif text-[1.15rem] text-navy">Useful links</h3>
          {USEFUL.map((l) => (
            <Link key={l.label} href={l.href} className="mb-2 block hover:text-navy">{l.label}</Link>
          ))}
        </div>
        <div>
          <h3 className="mb-2 font-serif text-[1.15rem] text-navy">Services</h3>
          <div className="grid grid-cols-2 gap-x-3.5">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="mb-1.5 block text-[0.92rem] hover:text-navy">{s.name}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-2 font-serif text-[1.15rem] text-navy">Contact info</h3>
          <a href={PHONE_HREF} className="mb-2 block hover:text-navy">{PHONE}</a>
          <a href={`mailto:${EMAIL}`} className="mb-2 block break-all hover:text-navy">{EMAIL}</a>
          <Link href="/areas" className="mb-2 block hover:text-navy">Brisbane and Gold Coast</Link>
          <Link href="/privacy" className="mb-2 block hover:text-navy">Privacy policy</Link>
          <Link href="/terms" className="mb-2 block hover:text-navy">Terms and conditions</Link>
        </div>
      </div>
      <div className="mx-auto mt-6 w-[min(1180px,calc(100%-32px))] text-[0.82rem] text-slate-400">© 2026 Bond Clean Specialist. All rights reserved.</div>
    </footer>
  );
}
