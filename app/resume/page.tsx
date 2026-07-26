import type { Metadata } from "next";
import { site } from "@/data/content";
import { Reveal } from "@/components/motion/primitives";
import BackOrb from "@/components/BackOrb";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-8">
      <Reveal>
        <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <BackOrb />
            <h1 className="font-display text-3xl font-semibold tracking-tight">
              <span className="text-grad">{site.resumeLabel}</span>
            </h1>
          </div>
          <a
            href={site.resumePdf}
            download="Yatindran_Sathishkumar_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-acc1 to-acc3 px-5 py-2.5 text-sm font-medium text-bg transition-shadow duration-300 hover:shadow-[0_0_28px_var(--glow)]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
            </svg>
            Download PDF
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="print-doc mx-auto aspect-[8.5/11] w-full max-w-2xl overflow-hidden rounded-2xl border border-line bg-white shadow-2xl">
          <object
            data={site.resumePdf}
            type="application/pdf"
            className="h-full w-full"
            aria-label={`${site.name} resume PDF`}
          >
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
              <p className="max-w-xs text-sm text-slate-500">
                Your browser can&apos;t preview this PDF inline. Download it
                instead to view it.
              </p>
              <a
                href={site.resumePdf}
                download="Yatindran_Sathishkumar_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-acc1 to-acc3 px-5 py-2.5 text-sm font-medium text-bg"
              >
                Download PDF
              </a>
            </div>
          </object>
        </div>
      </Reveal>
    </main>
  );
}
