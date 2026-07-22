"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

export default function SpotlightCard({
  children,
  className,
  beamDelay,
  tilt = true,
  tiltStrength = 3.5,
}: {
  children: ReactNode;
  className?: string;
  beamDelay?: number;
  tilt?: boolean;
  tiltStrength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: -400, y: -400 });

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [tiltStrength, -tiltStrength]), {
    stiffness: 140,
    damping: 16,
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-tiltStrength, tiltStrength]), {
    stiffness: 140,
    damping: 16,
  });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setSpot({ x: e.clientX - r.left, y: e.clientY - r.top });
    if (tilt) {
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    }
  };

  const onLeave = () => {
    setSpot({ x: -400, y: -400 });
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={tilt ? { rotateX: rx, rotateY: ry, transformPerspective: 1100 } : undefined}
      className={`glass group relative overflow-hidden rounded-2xl transition-colors duration-500 hover:border-acc2/40 ${className ?? ""}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${spot.x}px ${spot.y}px, color-mix(in srgb, var(--acc1) 9%, transparent), transparent 65%)`,
        }}
      />
      {beamDelay !== undefined && (
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <rect
            x="1"
            y="1"
            rx="15"
            pathLength={100}
            className="beam-rect"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              animationDelay: `${beamDelay}s`,
            }}
            fill="none"
            stroke="var(--acc1)"
            strokeWidth="1.5"
          />
        </svg>
      )}
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
