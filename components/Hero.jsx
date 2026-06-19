"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/site";
import Figure from "./Figure";
import { ArrowRight, Phone, Check } from "./Icons";

// HERO IMAGE: lives at public/hero.jpg. If it ever fails to load,
// a navy gradient (on-brand) shows instead — the layout never breaks.
const HERO_IMG = "/hero.jpg";

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden md:items-center"
    >
      {/* Full-bleed image */}
      <Figure
        src={HERO_IMG}
        alt="An elegantly paved driveway leading to a modern Cape Town home at golden hour"
        priority
        fill
        sizes="100vw"
        imgClassName={reduce ? "" : "animate-kenburns"}
      />

      {/* Scrims — left-biased on desktop, bottom-up on mobile — for text contrast */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(8,20,32,0.92) 0%, rgba(8,20,32,0.55) 30%, rgba(8,20,32,0.15) 60%, rgba(8,20,32,0.05) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(105deg, rgba(8,20,32,0.92) 0%, rgba(8,20,32,0.72) 32%, rgba(8,20,32,0.25) 55%, rgba(8,20,32,0) 78%)",
        }}
      />
      {/* top fade so the fixed header stays legible */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,20,32,0.55), rgba(8,20,32,0))",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-28 sm:px-8 md:pb-20 md:pt-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl text-paper"
        >
          <motion.div
            variants={item}
            className="flex items-center gap-2.5 text-xs font-600 uppercase tracking-[0.2em] text-paper/80"
          >
            <span className="h-px w-7 bg-blue-bright" />
            {SITE.area} · {SITE.yearsExperience} years
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[clamp(2.9rem,8vw,5.8rem)] font-700 leading-[0.95] tracking-tightest text-balance"
          >
            Arrive home to
            <br />
            something{" "}
            <span className="relative whitespace-nowrap text-paper">
              beautiful.
              <svg
                className="absolute bottom-1 left-0 h-3 w-full text-blue-bright sm:bottom-2"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 9C60 3 120 3 150 5C190 7 250 7 298 3"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-paper/80 text-pretty sm:text-xl"
          >
            Premium driveways, patios and walkways — laid level, finished neatly and
            built to last. Crafted across Cape Town for over{" "}
            {SITE.yearsExperience} years by Vmax Paving.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-paper px-7 py-4 text-base font-600 text-navy-900 shadow-lift transition-transform duration-200 ease-smooth hover:-translate-y-0.5 hover:bg-white"
            >
              Get a free quote
              <ArrowRight
                width={19}
                height={19}
                className="transition-transform duration-200 ease-smooth group-hover:translate-x-1"
              />
            </a>
            <a
              href={`tel:${SITE.phones[0].tel}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-paper/35 bg-paper/5 px-7 py-4 text-base font-600 text-paper backdrop-blur-sm transition-colors hover:border-paper/60 hover:bg-paper/15"
            >
              <Phone width={18} height={18} />
              {SITE.phones[0].label}
            </a>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-500 text-paper/75"
          >
            {[
              `${SITE.yearsExperience} years' experience`,
              "Residential & commercial",
              "Free, no-obligation quotes",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check width={16} height={16} className="text-blue-bright" />
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-paper/60 md:flex"
      >
        <span className="text-[11px] font-600 uppercase tracking-[0.22em]">
          Scroll
        </span>
        <motion.span
          aria-hidden
          animate={reduce ? {} : { y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-7 w-px bg-paper/40"
        />
      </motion.div>
    </section>
  );
}
