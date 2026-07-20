"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Magnetic } from "./motion/primitives";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(y > window.innerHeight * 0.9);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Magnetic strength={0.25}>
            <button
              onClick={toTop}
              aria-label="Back to top"
              className="glass-nav flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-mute shadow-[var(--navglass-shadow)] transition-colors duration-300 hover:text-acc1"
            >
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="stt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--acc1)" />
                    <stop offset="100%" stopColor="var(--acc3)" />
                  </linearGradient>
                </defs>
                <circle
                  cx="24"
                  cy="24"
                  r="22.5"
                  fill="none"
                  stroke="url(#stt-grad)"
                  strokeWidth="2"
                  pathLength={100}
                  strokeDasharray="100"
                  strokeDashoffset={100 - progress * 100}
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="relative"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 19V5m-6 6l6-6 6 6" />
              </svg>
            </button>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
