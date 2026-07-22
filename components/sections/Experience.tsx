import Link from "next/link";
import { experience } from "@/data/content";
import { Reveal } from "../motion/primitives";
import Section from "./Section";
import Tag from "../Tag";
import SpotlightCard from "../SpotlightCard";

function Bullet({ text }: { text: string }) {
  const parts = text.split("VouchPay");
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts[0]}
      <Link
        href="/#vouchpay"
        className="font-medium text-acc1 underline decoration-acc1/40 underline-offset-4 transition-colors hover:decoration-acc1"
      >
        VouchPay
      </Link>
      {parts.slice(1).join("VouchPay")}
    </>
  );
}

export default function Experience() {
  return (
    <Section id="experience" number="01" title="Experience">
      <div className="relative ml-2 border-l border-transparent pl-8 sm:ml-4 sm:pl-12">
        <span
          aria-hidden="true"
          className="absolute left-0 top-2 bottom-8 w-px bg-gradient-to-b from-acc1 via-acc2/50 to-transparent"
        />
        <div className="flex flex-col gap-14">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1}>
              <div className="group relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full border-2 border-acc1 bg-bg transition-shadow duration-300 group-hover:shadow-[0_0_14px_var(--glow)] sm:-left-[3.45rem]"
                />
                <SpotlightCard tiltStrength={1}>
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl font-semibold sm:text-2xl">
                        {job.company}
                      </h3>
                      <span className="font-mono text-xs text-mute">{job.dates}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-acc2">{job.role}</p>
                    <ul className="mt-5 flex flex-col gap-2.5">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm leading-relaxed text-mute">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-acc2/60" />
                          <span>
                            <Bullet text={b} />
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <Tag key={t} hue="var(--acc2)" className="px-3 py-1 text-[11px]">
                          {t}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
