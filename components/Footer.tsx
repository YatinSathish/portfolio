"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/content";
import Tag from "./Tag";

export default function Footer() {
  const pathname = usePathname();

  const onLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    }
  };

  return (
    <footer className="no-print relative mx-auto max-w-6xl border-t border-line px-5 py-10 sm:px-8">
      <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            onClick={onLogoClick}
            aria-label="Back to top"
            className="transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_var(--glow)]"
          >
            <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true">
              <defs>
                <linearGradient id="fy-g" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="55%" stopColor="#2dd4bf" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <rect width="64" height="64" rx="14" fill="#0a0f0d" />
              <text
                x="26"
                y="47"
                textAnchor="middle"
                fontFamily="var(--font-space), 'Segoe UI', system-ui, sans-serif"
                fontWeight="600"
                fontSize="46"
                fill="#e9f2ee"
              >
                y
              </text>
              <circle cx="46.5" cy="43" r="5.5" fill="url(#fy-g)" />
            </svg>
          </Link>
          <p className="text-xs text-mute">
            © 2026 {site.name} · Sydney, Australia
          </p>
          <span className="hidden h-3 w-px bg-line sm:block" aria-hidden="true" />
          <a
            href={site.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-mute transition-colors duration-300 hover:text-acc2"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.69-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
            Source
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 font-mono text-[10px] text-mute/80">
          <span>Built with</span>
          {["Next.js", "TypeScript", "Tailwind", "Framer Motion"].map((t) => (
            <Tag key={t} hue="var(--acc2)" className="px-2.5 py-0.5">
              {t}
            </Tag>
          ))}
          <span>and</span>
          <Tag hue="var(--acc2)" className="group inline-flex items-center gap-1.5 px-2.5 py-0.5">
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
          </Tag>
        </div>
      </div>
    </footer>
  );
}
