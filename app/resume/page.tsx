import type { Metadata } from "next";
import { education, experience, projects, site, skills } from "@/data/content";
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
        <article className="print-doc rounded-2xl border border-line bg-white p-8 text-slate-800 shadow-2xl sm:p-12">
          <header className="border-b border-slate-200 pb-6">
            <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              {site.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-emerald-700">
              {site.role} · {site.location}
            </p>
            <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
              <span>{site.email}</span>
              <a className="text-emerald-700 underline-offset-2 hover:underline" href={site.linkedin}>LinkedIn</a>
              <a className="text-emerald-700 underline-offset-2 hover:underline" href={site.github}>GitHub</a>
            </p>
            <p className="mt-3 text-sm text-slate-600">{site.seeking}.</p>
          </header>

          <section className="mt-7">
            <h3 className="font-mono text-[11px] font-medium tracking-[0.25em] text-slate-400">
              EXPERIENCE
            </h3>
            <div className="mt-4 flex flex-col gap-6">
              {experience.map((job) => (
                <div key={job.company}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-semibold text-slate-900">
                      {job.company}
                      <span className="font-normal text-slate-500">
                        {" "}
                        — {job.role}
                        {job.location && `, ${job.location}`}
                      </span>
                    </p>
                    <span className="font-mono text-[11px] text-slate-400">{job.dates}</span>
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-7">
            <h3 className="font-mono text-[11px] font-medium tracking-[0.25em] text-slate-400">
              PROJECTS
            </h3>
            <div className="mt-4 flex flex-col gap-4">
              {projects.map((p) => (
                <div key={p.id}>
                  <p className="font-semibold text-slate-900">
                    {p.title}
                    {p.attribution && (
                      <span className="font-normal text-slate-500"> · {p.attribution}</span>
                    )}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{p.description}</p>
                  <p className="mt-1 font-mono text-[11px] text-slate-400">
                    {p.tech.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-7">
            <h3 className="font-mono text-[11px] font-medium tracking-[0.25em] text-slate-400">
              SKILLS
            </h3>
            <div className="mt-3 flex flex-col gap-1.5">
              {skills.map((g) => (
                <p key={g.group} className="text-sm text-slate-600">
                  <span className="font-medium text-slate-900">{g.group}: </span>
                  {g.items.join(", ")}
                </p>
              ))}
            </div>
          </section>

          <section className="mt-7">
            <h3 className="font-mono text-[11px] font-medium tracking-[0.25em] text-slate-400">
              EDUCATION
            </h3>
            <div className="mt-3 flex flex-col gap-3">
              {education.map((e) => (
                <div key={e.school} className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm">
                    <span className="font-semibold text-slate-900">{e.school}</span>
                    <span className="text-slate-600"> — {e.degree}</span>
                  </p>
                  <span className="font-mono text-[11px] text-slate-400">{e.dates}</span>
                </div>
              ))}
            </div>
          </section>
        </article>
      </Reveal>

      <p className="no-print mt-6 text-center font-mono text-[11px] text-mute">
        Tip: Ctrl+P prints a clean copy of this page.
      </p>
    </main>
  );
}
