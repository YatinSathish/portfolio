"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EASE } from "./motion/primitives";

export default function PhoneMock({ image }: { image?: string | null }) {
  return (
    <motion.div
      initial={{ clipPath: "inset(12% 12% 12% 12% round 2.4rem)", opacity: 0, scale: 1.06 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 2.4rem)", opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, ease: EASE }}
      className="relative mx-auto w-[230px] overflow-hidden rounded-[2.4rem] border border-linestrong bg-bg2 shadow-[0_24px_80px_-24px_var(--glow)]"
    >
      {image ? (
        <div className="relative aspect-[9/19]">
          <Image
            src={image}
            alt="VouchPay app screenshot"
            fill
            sizes="230px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex aspect-[9/19] flex-col p-4" aria-label="VouchPay app preview placeholder">
          <div className="mx-auto mb-4 mt-1 h-1.5 w-16 rounded-full bg-line" />
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-acc1 to-acc3 font-display text-xs font-bold text-bg">
              V
            </div>
            <span className="font-display text-sm font-semibold">VouchPay</span>
          </div>
          <div className="mt-5 rounded-2xl border border-line bg-card p-4">
            <p className="font-mono text-[9px] tracking-widest text-mute">TRUST SCORE</p>
            <p className="mt-1 font-display text-3xl font-bold text-grad">94</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line">
              <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-acc1 to-acc3" />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2.5">
            {["Invoice approved", "New vouch received", "ABR verified"].map((label, i) => (
              <div key={label} className="flex items-center gap-2.5 rounded-xl border border-line bg-card p-3">
                <div className={`h-6 w-6 rounded-lg ${i === 0 ? "bg-acc1/25" : i === 1 ? "bg-acc2/25" : "bg-acc3/25"}`} />
                <div className="flex-1">
                  <p className="text-[10px] font-medium text-ink">{label}</p>
                  <div className="mt-1 h-1 w-3/4 rounded-full bg-line" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-auto flex justify-around border-t border-line pt-3">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`h-5 w-5 rounded-md ${i === 0 ? "bg-acc2/40" : "bg-line"}`} />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
