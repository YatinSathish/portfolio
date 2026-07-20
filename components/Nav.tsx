"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/data/content";
import ThemeToggle from "./ThemeToggle";
import { EASE } from "./motion/primitives";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const ids = ["experience", "projects", "skills", "education", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 24;
      if (atBottom) {
        setActive("contact");
        return;
      }
      const line = window.innerHeight * 0.4;
      let current = "";
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= line) current = s.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex flex-col items-center px-4">
      <nav
        className={`glass-nav pointer-events-auto flex items-center rounded-full transition-all duration-500 ${
          scrolled
            ? "gap-0.5 py-1.5 pl-4 pr-1.5 shadow-[var(--navglass-shadow)]"
            : "gap-1.5 py-2.5 pl-5 pr-2.5 shadow-[var(--navglass-inner)]"
        }`}
      >
        <Link
          href="/"
          className="mr-2 font-display text-lg font-semibold tracking-tight"
        >
          <span className="text-grad">YS</span>
          <span className="text-mute">.</span>
        </Link>

        <div className="hidden items-center md:flex">
          {navLinks.map((l) => {
            const isActive = pathname === "/" && l.sections.includes(active);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ${
                  isActive ? "text-acc1" : "text-mute hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-chip"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full border border-acc1/25"
                    style={{
                      background:
                        "color-mix(in srgb, var(--acc1) 12%, transparent)",
                    }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="ml-1 flex items-center gap-1.5">
          <ThemeToggle />
          <Link
            href="/resume"
            className="jewel hidden rounded-full px-4 py-1.5 text-sm font-medium sm:block"
          >
            <span className="jewel-label">Resume</span>
          </Link>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
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
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="glass-nav pointer-events-auto mt-2 w-full max-w-sm rounded-3xl shadow-[var(--navglass-shadow)] md:hidden"
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
    </div>
  );
}
