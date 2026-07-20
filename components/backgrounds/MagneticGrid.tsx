"use client";

import { useEffect, useRef } from "react";

type Dot = {
  hx: number;
  hy: number;
  px: number;
  py: number;
  vx: number;
  vy: number;
};

const SPACING = 32;
const RADIUS = 110;
const FORCE = 1.5;
const SPRING = 0.055;
const DAMP = 0.86;

export default function MagneticGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    let dots: Dot[] = [];
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let rgb = "45, 212, 191";
    const mouse = { x: -9999, y: -9999 };

    const readColor = () => {
      rgb =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--grid-rgb")
          .trim() || rgb;
    };

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let x = SPACING / 2; x < w; x += SPACING) {
        for (let y = SPACING / 2; y < h; y += SPACING) {
          dots.push({ hx: x, hy: y, px: x, py: y, vx: 0, vy: 0 });
        }
      }
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.hx, d.hy, 1.1, 0, 7);
        ctx.fillStyle = `rgba(${rgb}, 0.12)`;
        ctx.fill();
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        const dx = d.px - mouse.x;
        const dy = d.py - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < RADIUS && dist > 0.1) {
          const f = ((RADIUS - dist) / RADIUS) * FORCE;
          d.vx += (dx / dist) * f;
          d.vy += (dy / dist) * f;
        }
        d.vx += (d.hx - d.px) * SPRING;
        d.vy += (d.hy - d.py) * SPRING;
        d.vx *= DAMP;
        d.vy *= DAMP;
        d.px += d.vx;
        d.py += d.vy;
        const off = Math.hypot(d.px - d.hx, d.py - d.hy);
        ctx.beginPath();
        ctx.arc(d.px, d.py, 1.1, 0, 7);
        ctx.fillStyle = `rgba(${rgb}, ${Math.min(0.12 + off * 0.045, 0.7)})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    readColor();
    build();

    const observer = new MutationObserver(() => {
      readColor();
      if (reduced || !finePointer) drawStatic();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const onResize = () => {
      build();
      if (reduced || !finePointer) drawStatic();
    };
    window.addEventListener("resize", onResize);

    if (reduced || !finePointer) {
      drawStatic();
    } else {
      const onMove = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };
      const onLeave = () => {
        mouse.x = -9999;
        mouse.y = -9999;
      };
      window.addEventListener("mousemove", onMove);
      document.documentElement.addEventListener("mouseleave", onLeave);
      raf = requestAnimationFrame(tick);
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("mousemove", onMove);
        document.documentElement.removeEventListener("mouseleave", onLeave);
        window.removeEventListener("resize", onResize);
        observer.disconnect();
      };
    }

    return () => {
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-20"
    />
  );
}
