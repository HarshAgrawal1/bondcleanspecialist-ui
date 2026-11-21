import type { ReactNode } from "react";
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
  { href: "/about/blog", label: "Cleaning tips" },
  { href: "/contact", label: "Contact" },
];

function ContactIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[1.05rem] w-[1.05rem] shrink-0 text-navy"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export default function Footer() {
  const mid = Math.ceil(SERVICES.length / 2);
  const serviceCols = [SERVICES.slice(0, mid), SERVICES.slice(mid)];

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
          <h3 className="mb-3 font-serif text-[1.15rem] text-navy">Useful links</h3>
          <div className="flex flex-col gap-2">
            {USEFUL.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-navy">{l.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-serif text-[1.15rem] text-navy">Services</h3>
          <div className="grid grid-cols-2 gap-x-3.5">
            {serviceCols.map((col, i) => (
              <div key={i} className="flex flex-col gap-2">
                {col.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="text-[0.92rem] leading-snug hover:text-navy">{s.name}</Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-serif text-[1.15rem] text-navy">Contact info</h3>
          <div className="flex flex-col gap-2.5">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2.5 font-semibold text-navy underline underline-offset-2 hover:text-navy-deep">
              <ContactIcon>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0 1 22 16.92z" />
              </ContactIcon>
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2.5 whitespace-nowrap text-[0.95rem] font-semibold text-navy underline underline-offset-2 hover:text-navy-deep">
              <ContactIcon>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </ContactIcon>
              {EMAIL}
            </a>
            <Link href="/areas" className="inline-flex items-center gap-2.5 hover:text-navy">
              <ContactIcon>
                <path d="M20 10c0 4.99-8 12-8 12S4 14.99 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </ContactIcon>
              Brisbane &amp; Gold Coast
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-navy-deep text-[0.82rem] text-slate-300">
        <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p>© 2026 Bond Clean Specialist. ABN {ABN}</p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <span aria-hidden className="text-slate-500">|</span>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <span aria-hidden className="text-slate-500">|</span>
            <span>Servicing Brisbane &amp; Gold Coast · Quality controlled &amp; insured</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
