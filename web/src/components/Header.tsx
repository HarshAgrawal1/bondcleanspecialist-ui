"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SERVICES, GC_AREAS, BNE_AREAS, PHONE, PHONE_HREF, slugify } from "@/lib/data";
import { QuoteButton } from "./QuoteModal";

const AREA_NAMES = [...GC_AREAS, ...BNE_AREAS];

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/prices", label: "Prices" },
  { href: "/how-to-prepare", label: "How to prepare" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const activeFor = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };
  const linkCls = (href: string) =>
    `border-b-2 py-1 text-[1.05rem] font-semibold hover:border-navy hover:text-navy ${activeFor(href) ? "border-navy text-navy" : "border-transparent text-slate-900"}`;
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex min-h-[88px] w-full max-w-[1180px] items-center justify-between gap-3 px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <Image src="/logo.png" alt="Bond Clean Specialist" width={220} height={72} className="h-[62px] w-auto object-contain" priority />
        </Link>
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-3 xl:gap-[18px] lg:flex" aria-label="Main">
          {NAV.map((item) =>
            item.label === "Services" ? (
              <div key={item.label} className="group relative">
                <Link href={item.href} className={`inline-flex items-center ${linkCls(item.href)}`}>
                  Services <span className="ml-1.5 inline-block h-0 w-0 border-x-[5px] border-t-[6px] border-x-transparent border-t-current" />
                </Link>
                <div className="invisible absolute left-0 top-full z-20 grid min-w-[460px] grid-cols-2 gap-1 rounded-lg border border-line bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                  {SERVICES.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="rounded px-2.5 py-2 text-[0.95rem] font-semibold text-navy hover:bg-sky">{s.name}</Link>
                  ))}
                </div>
              </div>
            ) : item.label === "Areas" ? (
              <div key={item.label} className="group relative">
                <Link href={item.href} className={`inline-flex items-center ${linkCls(item.href)}`}>
                  Areas <span className="ml-1.5 inline-block h-0 w-0 border-x-[5px] border-t-[6px] border-x-transparent border-t-current" />
                </Link>
                <div className="invisible absolute left-0 top-full z-20 grid max-h-[min(70vh,520px)] min-w-[min(460px,86vw)] grid-cols-2 gap-1 overflow-y-auto rounded-lg border border-line bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                  {AREA_NAMES.map((n) => (
                    <Link key={n} href={`/areas/${slugify(n)}`} className="rounded px-2.5 py-2 text-[0.95rem] font-semibold text-navy hover:bg-sky">{n}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className={linkCls(item.href)}>{item.label}</Link>
            )
          )}
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-2.5">
          <QuoteButton className="order-1 inline-flex h-9 items-center whitespace-nowrap rounded-full bg-gold px-3 text-[0.8rem] font-bold text-navy hover:bg-gold-deep lg:order-none lg:h-10 lg:px-4 lg:text-sm">Get a quote</QuoteButton>
          <a href={PHONE_HREF} className="hidden h-10 items-center rounded-full border-2 border-navy px-3.5 text-sm font-bold text-navy min-[900px]:inline-flex">{PHONE}</a>
          <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)} className="order-2 grid h-9 w-9 place-items-center gap-1 rounded border border-line bg-sky lg:hidden">
            <span className="block h-[1.5px] w-4 bg-slate-900" /><span className="block h-[1.5px] w-4 bg-slate-900" /><span className="block h-[1.5px] w-4 bg-slate-900" />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="mx-auto grid w-full max-w-[1180px] gap-1 px-5 py-3 sm:px-8">
            {NAV.map((item) =>
              item.label === "Services" || item.label === "Areas" ? (
                <div key={item.label} className="grid gap-1">
                  <div className="flex items-center justify-between gap-2">
                    <Link href={item.href} onClick={() => setOpen(false)} className={`flex-1 py-1 font-bold ${activeFor(item.href) ? "text-navy" : "text-slate-900"}`}>{item.label}</Link>
                    <button type="button" aria-label={`Open ${item.label.toLowerCase()} list`} onClick={() => setExpanded((e) => (e === item.label ? null : item.label))} className="px-2 py-1">
                      <span className="inline-block h-0 w-0 border-x-[5px] border-t-[6px] border-x-transparent border-t-current" />
                    </button>
                  </div>
                  {expanded === item.label && (
                    <div className={`grid gap-1 pb-2 pl-3 ${item.label === "Areas" ? "max-h-[50vh] overflow-y-auto" : ""}`}>
                      {item.label === "Services"
                        ? SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpen(false)} className="py-0.5 text-[0.95rem] text-navy">{s.name}</Link>)
                        : AREA_NAMES.map((n) => <Link key={n} href={`/areas/${slugify(n)}`} onClick={() => setOpen(false)} className="py-0.5 text-[0.95rem] text-navy">{n}</Link>)}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className={`py-1 font-bold ${activeFor(item.href) ? "text-navy" : "text-slate-900"}`}>{item.label}</Link>
              )
            )}
          </div>
        </div>
      )}
      <div className="fixed inset-x-0 bottom-0 z-50 flex lg:hidden">
        <a href={PHONE_HREF} className="flex-1 bg-navy py-3.5 text-center text-[0.92rem] font-bold text-white">Call us</a>
        <QuoteButton className="flex-1 bg-gold py-3.5 text-center text-[0.92rem] font-bold text-navy">Request a free quote</QuoteButton>
      </div>
    </header>
  );
}
