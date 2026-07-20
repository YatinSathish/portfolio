"use client";

import { useEffect, useRef } from "react";

type Mote = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  ph: number;
  tw: number;
};

export default function DustMotes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let motes: Mote[] = [];
    let raf = 0;
    let w = 0;
    let h = 0;
    let t = 0;
    let rgb = "190, 235, 220";

    const readColor = () => {
      rgb = document.documentElement.classList.contains("light")
        ? "10, 90, 70"
        : "190, 235, 220";
    };

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((w * h) / 45000);
      motes = [];
      for (let i = 0; i < count; i++) {
        motes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.5 + Math.random() * 1.3,
          vx: (Math.random() - 0.5) * 0.1,
          vy: -0.03 - Math.random() * 0.09,
          ph: Math.random() * Math.PI * 2,
          tw: 3 + Math.random() * 4,
        });
      }
    };

    const tick = () => {
      t += 0.016;
      ctx.clearRect(0, 0, w, h);
      for (const m of motes) {
        m.x += m.vx + Math.sin(t * 0.4 + m.ph) * 0.05;
        m.y += m.vy;
        if (m.y < -4) {
          m.y = h + 4;
          m.x = Math.random() * w;
        }
        if (m.x < -4) m.x = w + 4;
        if (m.x > w + 4) m.x = -4;
        const a = 0.05 + 0.17 * (0.5 + 0.5 * Math.sin((t / m.tw) * 3 + m.ph));
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, 7);
        ctx.fillStyle = `rgba(${rgb}, ${a.toFixed(3)})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    readColor();
    build();

    const observer = new MutationObserver(readColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    const onResize = () => build();
    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10"
    />
  );
}
