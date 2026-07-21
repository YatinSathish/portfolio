"use client";

import Link from "next/link";
import { Magnetic } from "./motion/primitives";

export default function BackOrb() {
  return (
    <div className="no-print pointer-events-auto">
      <Magnetic strength={0.25}>
        <Link
          href="/"
          aria-label="Back to home"
          className="glass-nav group flex h-11 w-11 items-center justify-center rounded-full text-mute shadow-[var(--navglass-shadow)] transition-colors duration-300 hover:text-acc1 sm:h-12 sm:w-12"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="relative transition-transform duration-300 group-hover:-translate-x-0.5"
          >
            <path d="M19 12H5m6-6l-6 6 6 6" />
          </svg>
        </Link>
      </Magnetic>
    </div>
  );
}
