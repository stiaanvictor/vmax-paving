"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, SITE } from "@/lib/site";
import { Menu, Close, Phone } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth ${
        scrolled
          ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label={`${SITE.name} — back to top`}
        >
          <span className="relative grid h-10 w-10 place-items-center">
            {/* white logo over the dark hero, colour logo once scrolled — crossfade */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon.png"
              alt="Vmax Paving logo"
              width={40}
              height={40}
              className={`absolute inset-0 h-10 w-10 object-contain transition-opacity duration-300 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon-white.png"
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              className={`absolute inset-0 h-10 w-10 object-contain transition-opacity duration-300 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-lg font-700 tracking-tightest transition-colors duration-300 ${
                scrolled ? "text-ink" : "text-paper"
              }`}
            >
              max Paving
            </span>
            <span
              className={`text-[11px] font-500 uppercase tracking-[0.18em] transition-colors duration-300 ${
                scrolled ? "text-ink-muted" : "text-paper/70"
              }`}
            >
              Cape Town
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.slice(0, 3).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-500 transition-colors ${
                scrolled
                  ? "text-ink-soft hover:text-navy-900"
                  : "text-paper/85 hover:text-paper"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#quote"
            className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-600 shadow-soft transition-all duration-200 ease-smooth hover:-translate-y-0.5 ${
              scrolled
                ? "bg-navy-900 text-paper hover:bg-navy-800"
                : "bg-paper text-navy-900 hover:bg-white"
            }`}
          >
            Get a Quote
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${SITE.phones[0].tel}`}
            aria-label="Call Vmax Paving"
            className={`grid h-10 w-10 place-items-center rounded-full border transition-colors duration-300 ${
              scrolled
                ? "border-ink/15 text-navy-900"
                : "border-paper/30 bg-paper/10 text-paper backdrop-blur-sm"
            }`}
          >
            <Phone width={18} height={18} />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`grid h-10 w-10 place-items-center rounded-full border transition-colors duration-300 ${
              scrolled
                ? "border-ink/15 text-navy-900"
                : "border-paper/30 bg-paper/10 text-paper backdrop-blur-sm"
            }`}
          >
            <Menu width={20} height={20} />
          </button>
        </div>
      </div>
    </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-navy-900/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-paper p-6 shadow-lift"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-700 text-ink">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-navy-900"
                >
                  <Close width={20} height={20} />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-1">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-ink/8 py-4 font-display text-2xl font-600 tracking-tightest text-ink"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto space-y-3">
                {SITE.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="flex items-center gap-3 text-ink-soft"
                  >
                    <Phone width={18} height={18} className="text-navy-700" />
                    <span className="font-500">{p.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
