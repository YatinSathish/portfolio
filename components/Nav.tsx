"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/data/content";
import ThemeToggle from "./ThemeToggle";
import { EASE } from "./motion/primitives";

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 140 && y > lastY.current && !menuOpen);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    const ids = ["experience", "projects", "skills", "education", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      animate={{ y: hidden ? "-110%" : "0%" }}
      transition={{ duration: 0.45, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-line bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight"
        >
          <span className="text-grad">YS</span>
          <span className="text-mute">.</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => {
            const id = l.href.split("#")[1];
            const isActive = active === id;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`group relative rounded-full px-3.5 py-2 text-sm transition-colors duration-300 ${
                  isActive ? "text-acc1" : "text-mute hover:text-ink"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-gradient-to-r from-acc1 to-acc3 transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/resume"
            className="hidden rounded-full border border-line px-4 py-2 text-sm text-ink transition-all duration-300 hover:border-acc2 hover:text-acc2 sm:block"
          >
            Resume
          </Link>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-mute md:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-t border-line bg-bg/90 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col px-5 py-3">
              {[...navLinks, { label: "Resume", href: "/resume" }].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-line/50 py-3 text-sm text-mute last:border-0 hover:text-acc1"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="py-3 font-mono text-xs text-mute"
              >
                {site.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
