"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/content";
import { EASE, Magnetic, Reveal } from "../motion/primitives";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 pb-16 pt-24 sm:px-8 sm:pt-32">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <p className="font-mono text-sm text-acc2/70">05 · Contact</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
            Let&apos;s build <span className="text-grad">something</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-md text-sm text-mute sm:text-base">
            {site.seeking}. If that sounds like your team, my inbox is open.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <button
                onClick={copyEmail}
                className="relative flex cursor-pointer items-center gap-3 rounded-full bg-gradient-to-r from-acc1 to-acc3 px-7 py-3.5 text-sm font-medium text-bg transition-shadow duration-300 hover:shadow-[0_0_32px_var(--glow)]"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="flex items-center gap-2"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Copied
                    </motion.span>
                  ) : (
                    <motion.span
                      key="email"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: EASE }}
                    >
                      {site.email}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </Magnetic>
            <Magnetic>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-linestrong text-mute transition-colors duration-300 hover:border-acc2 hover:text-acc2"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-linestrong text-mute transition-colors duration-300 hover:border-acc2 hover:text-acc2"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.69-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>

      <footer className="mt-24 border-t border-line pt-8">
        <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
          <p className="text-xs text-mute">
            © 2026 {site.name} · Sydney, Australia
          </p>
          <a
            href={site.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-mute transition-colors duration-300 hover:text-acc2"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.69-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
            Source
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 font-mono text-[10px] text-mute/80">
            <span>Built with</span>
            {["Next.js", "TypeScript", "Tailwind", "Framer Motion"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-2.5 py-0.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-acc1/50 hover:text-acc1"
              >
                {t}
              </span>
            ))}
            <span>and</span>
            <span className="group inline-flex items-center gap-1.5 rounded-full border border-acc1/30 bg-acc1/5 px-2.5 py-0.5 text-acc2 transition-all duration-300 hover:-translate-y-0.5 hover:border-acc1/60">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="origin-bottom group-hover:animate-[robot-wiggle_0.5s_ease-in-out]"
              >
                <circle cx="12" cy="3.5" r="1.3" />
                <path d="M12 4.8V7" />
                <rect x="5.5" y="7" width="13" height="10" rx="2.5" />
                <circle cx="9.5" cy="11" r="0.6" fill="currentColor" />
                <circle cx="14.5" cy="11" r="0.6" fill="currentColor" />
                <path d="M9.5 14.2h5" />
                <path d="M3.5 10.5v3M20.5 10.5v3" />
              </svg>
              Claude Code
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}
