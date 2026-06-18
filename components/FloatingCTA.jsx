"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { WhatsApp } from "./Icons";

// Persistent quick-contact button that appears after the hero. Mobile-first.
export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#quote"
          aria-label="Get a free paving quote"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-lg bg-navy-900 px-5 py-3.5 font-600 text-paper shadow-lift ring-1 ring-paper/10 transition-colors hover:bg-navy-800"
        >
          <WhatsApp width={20} height={20} className="text-blue-bright" />
          <span className="hidden sm:inline">Get a free quote</span>
          <span className="sm:hidden">Quote</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
