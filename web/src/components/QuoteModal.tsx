"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import QuoteForm from "./QuoteForm";

const QuoteCtx = createContext<() => void>(() => {});
export const useOpenQuote = () => useContext(QuoteCtx);

export function QuoteButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const open = useOpenQuote();
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        open();
      }}
    >
      {children}
    </button>
  );
}

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const scrollY = useRef(0);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    scrollY.current = window.scrollY || 0;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY.current}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    const stopScroll = (e: Event) => {
      const t = e.target as HTMLElement;
      if (!t.closest("[data-quote-panel]")) e.preventDefault();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("wheel", stopScroll, { passive: false });
    document.addEventListener("touchmove", stopScroll, { passive: false });
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.scrollTo(0, scrollY.current);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("wheel", stopScroll);
      document.removeEventListener("touchmove", stopScroll);
    };
  }, [open, closeModal]);

  return (
    <QuoteCtx.Provider value={openModal}>
      {children}
      {open && (
        <div className="fixed inset-0 z-[100] overflow-hidden" role="dialog" aria-modal="true" aria-label="Request a free quote">
          <div className="absolute inset-0 bg-[#071d40]/55" onClick={closeModal} />
          <div className="relative flex h-full items-center justify-center p-4">
            <aside data-quote-panel className="max-h-[90vh] w-[min(460px,100%)] overflow-y-auto rounded-2xl bg-white shadow-[0_28px_60px_rgba(12,41,88,0.28)] outline outline-[3px] outline-gold/40">
              <div className="relative flex items-center justify-between gap-3 bg-gradient-to-b from-[#123a78] to-navy px-4 py-4 text-white after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-gold">
                <h2 className="font-sans text-[1.28rem] font-bold uppercase tracking-wide text-white">Request a free quote</h2>
                <button ref={closeBtn} type="button" onClick={closeModal} aria-label="Close" className="h-9 w-9 shrink-0 rounded bg-white/15 text-xl leading-none text-white hover:bg-white/25">×</button>
              </div>
              <div className="px-5 py-5">
                <QuoteForm key={String(open)} />
              </div>
            </aside>
          </div>
        </div>
      )}
    </QuoteCtx.Provider>
  );
}
