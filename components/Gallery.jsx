"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GALLERY } from "@/lib/site";
import Figure from "./Figure";
import Reveal from "./Reveal";
import { Close, ArrowRight } from "./Icons";

export default function Gallery() {
  const [index, setIndex] = useState(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i + 1) % GALLERY.length),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length),
    []
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  return (
    <section id="work" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="text-sm font-600 uppercase tracking-[0.18em] text-blue-accent">
              Our work
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.25rem)] font-700 leading-[1.02] tracking-tightest text-ink text-balance">
              Real paving, on real Cape Town properties.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-ink-soft text-pretty">
              A few recent jobs — from driveways and garden paths to pool
              surrounds and large home entrances across the Cape.
            </p>
          </Reveal>
        </div>

        {/* Masonry — keeps portrait & landscape shots uncropped and compact */}
        <div className="mt-14 [column-fill:_balance] gap-4 sm:gap-5 [columns:1] sm:[columns:2] lg:[columns:3]">
          {GALLERY.map((g, i) => (
            <Reveal
              key={g.img}
              delay={(i % 3) * 0.06}
              className="mb-4 break-inside-avoid sm:mb-5"
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`View larger: ${g.label}`}
                className="group block w-full cursor-pointer"
              >
                <figure
                  className="relative overflow-hidden rounded-2xl ring-1 ring-ink/10 transition-shadow duration-300 group-hover:shadow-lift"
                  style={{ aspectRatio: g.ratio }}
                >
                  <Figure
                    fill
                    src={g.img}
                    alt={g.label}
                    imgClassName="group-hover:scale-[1.04]"
                  />
                </figure>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={GALLERY[index].label}
          >
            <div
              className="absolute inset-0 bg-navy-900/90 backdrop-blur-sm"
              onClick={close}
            />

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-paper/25 bg-paper/10 text-paper backdrop-blur-sm transition-colors hover:bg-paper/20 sm:right-6 sm:top-6"
            >
              <Close width={22} height={22} />
            </button>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 rotate-180 place-items-center rounded-full border border-paper/25 bg-paper/10 text-paper backdrop-blur-sm transition-colors hover:bg-paper/20 sm:left-6"
            >
              <ArrowRight width={22} height={22} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-paper/25 bg-paper/10 text-paper backdrop-blur-sm transition-colors hover:bg-paper/20 sm:right-6"
            >
              <ArrowRight width={22} height={22} />
            </button>

            <motion.figure
              key={GALLERY[index].img}
              className="relative z-[5] flex max-h-full max-w-5xl flex-col items-center"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY[index].img}
                alt={GALLERY[index].label}
                className="max-h-[80vh] w-auto rounded-xl object-contain shadow-lift"
              />
              <figcaption className="mt-4 text-center text-sm font-500 text-paper/80">
                {GALLERY[index].label}
                <span className="text-paper/40">
                  {" "}
                  · {index + 1} / {GALLERY.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
