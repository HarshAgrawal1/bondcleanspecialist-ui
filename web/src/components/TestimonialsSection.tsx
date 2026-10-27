"use client";

import { useEffect, useRef, useState } from "react";

const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/9qL63rapkmpHU6pN6";

const TESTIMONIALS = [
  {
    name: "Angus Erskine",
    text: "Very easy to deal with. Arrived on time and did a great job.",
  },
  {
    name: "Larry Whitfield",
    text: "Fantastic service from start to finish! The team was professional, friendly, and paid great attention to detail. They did an excellent job with the bond clean and made sure everything was spotless and ready for the next tenants. I highly recommend this business to anyone looking for a reliable and thorough bond cleaning service.",
  },
  {
    name: "Lee-anne Bray",
    text: "Did a great job. Very thorough. Reasonable price.",
  },
  {
    name: "Grace Yousif",
    text: "Exceptional service! I recommend them highly.",
  },
];

const wrap = "mx-auto w-[min(1180px,calc(100%-32px))]";
const eyebrow = "mb-2.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-navy";
const VISIBLE = 2;
const MAX_INDEX = TESTIMONIALS.length - VISIBLE;

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      setIndex((i) => (i >= MAX_INDEX ? 0 : i + 1));
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="bg-sky py-[76px]">
      <div className={wrap}>
        <p className={eyebrow}>Google reviews</p>
        <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.4rem)] text-navy">What our clients are saying</h2>
        <p className="mt-3 max-w-[64ch] text-slate-600">
          Real feedback from customers who booked Bond Clean Specialist across Brisbane and the Gold Coast.
        </p>

        <div
          className="mt-8"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: `${(TESTIMONIALS.length / VISIBLE) * 100}%`,
                transform: `translateX(-${(index / TESTIMONIALS.length) * 100}%)`,
              }}
            >
              {TESTIMONIALS.map((t) => (
                <article
                  key={t.name}
                  className="box-border shrink-0 px-1.5"
                  style={{ width: `${100 / TESTIMONIALS.length}%` }}
                >
                  <div className="h-full rounded-[10px] border border-line bg-white p-6">
                    <p className="mb-3 text-[1.05rem] tracking-wide text-gold" aria-label="5 out of 5 stars">
                      ★★★★★
                    </p>
                    <p className="line-clamp-2 min-h-[3.1em] text-[1.05rem] leading-relaxed text-slate-700">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <p className="mt-4 font-bold text-navy">{t.name}</p>
                    <p className="text-[0.82rem] text-slate-500">Google review</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Review slides">
            {Array.from({ length: MAX_INDEX + 1 }, (_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show reviews starting at ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${i === index ? "bg-navy" : "bg-navy/25 hover:bg-navy/50"}`}
              />
            ))}
          </div>
        </div>

        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-lg border-2 border-navy px-5 py-3 font-bold text-navy hover:bg-navy hover:text-white"
        >
          Show more reviews on Google
        </a>
      </div>
    </section>
  );
}
