"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/content";
import { EASE, Magnetic } from "../motion/primitives";

function RoleCycler() {
  const roles = site.roles;
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState<number | null>(null);
  const rulerRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (reduced) return;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (!document.hidden) setIndex((v) => (v + 1) % roles.length);
      }, 2800);
    }, 3000);
    return () => {
      clearTimeout(startId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [reduced, roles.length]);

  useEffect(() => {
    const measure = () => {
      const el = rulerRefs.current[index];
      if (el) setWidth(el.offsetWidth);
    };
    measure();
    document.fonts?.ready.then(measure).catch(() => {});
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [index]);

  if (reduced) {
    return (
      <span className="font-mono text-sm font-medium tracking-[0.25em] text-ink/90 sm:text-base">
        <span aria-hidden="true" className="mr-2 text-acc2">
          {"//"}
        </span>
        {roles[0]}
      </span>
    );
  }

  return (
    <span className="flex items-end font-mono text-sm font-medium tracking-[0.25em] text-ink/90 sm:text-base">
      <span aria-hidden="true" className="mr-2 text-acc2">
        {"//"}
      </span>
      <span aria-hidden="true" className="invisible absolute -z-50 whitespace-nowrap">
        {roles.map((r, i) => (
          <span
            key={r}
            ref={(el) => {
              rulerRefs.current[i] = el;
            }}
            className="inline-block whitespace-nowrap"
          >
            {r}
          </span>
        ))}
      </span>
      <motion.span
        animate={width !== null ? { width } : undefined}
        transition={{ duration: 0.5, ease: EASE }}
        className="relative block h-[1.5em] overflow-hidden"
        style={width === null ? { width: "auto" } : undefined}
      >
        <AnimatePresence initial={false}>
          <motion.span
            key={roles[index]}
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-115%" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="absolute inset-x-0 bottom-0 whitespace-nowrap"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </span>
  );
}

function MaskedLine({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden ${className ?? ""}`}>
      <motion.span
        className="block"
        initial={{ y: "115%", rotate: 4 }}
        animate={{ y: "0%", rotate: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -180]);

  const nameWords = site.name.split(" ");

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: glowY }}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute left-1/2 top-[18%] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle, var(--aurora-a), transparent 60%)",
            filter: "blur(70px)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
        className="relative z-10 flex max-w-5xl flex-col items-center text-center"
      >
        <MaskedLine delay={0.15}>
          <RoleCycler />
        </MaskedLine>

        <h1
          aria-label={site.name}
          className="mt-6 font-display font-semibold leading-[1.04] tracking-tight text-[clamp(2.6rem,8vw,5.8rem)]"
        >
          {nameWords.map((word, i) => (
            <MaskedLine key={word} delay={0.3 + i * 0.14}>
              <span className="text-grad">{word}</span>
            </MaskedLine>
          ))}
        </h1>

        <MaskedLine delay={0.65} className="mt-7">
          <span className="max-w-2xl text-base text-ink/90 sm:text-lg">
            {site.pitch}
          </span>
        </MaskedLine>

        <MaskedLine delay={0.78} className="mt-3">
          <span className="text-sm text-mute sm:text-base">{site.location}</span>
        </MaskedLine>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95, ease: EASE }}
          className="glass mt-6 flex items-center gap-2.5 rounded-full px-4 py-2"
        >
          <span className="pulse-dot h-2 w-2 rounded-full bg-acc1" />
          <span className="text-xs text-ink/85 sm:text-sm">{site.seeking}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.12, ease: EASE }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic>
            <Link
              href="/#projects"
              className="block rounded-full bg-gradient-to-r from-acc1 to-acc3 px-7 py-3.5 text-sm font-medium text-bg transition-shadow duration-300 hover:shadow-[0_0_32px_var(--glow)]"
            >
              View projects
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/resume"
              className="block rounded-full border border-linestrong px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-acc2 hover:text-acc2"
            >
              {site.resumeLabel}
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-mute">
          SCROLL
        </span>
        <svg
          className="bob text-mute"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.div>
    </section>
  );
}
