import { education } from "@/data/content";
import { Reveal } from "../motion/primitives";
import Section from "./Section";
import SpotlightCard from "../SpotlightCard";
import Tag from "../Tag";

export default function Education() {
  return (
    <Section id="education" number="04" title="Education">
      <div className="flex flex-col gap-5">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.12}>
            <SpotlightCard tiltStrength={1}>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">
                    {e.school}
                  </h3>
                  <span className="font-mono text-xs text-mute">{e.dates}</span>
                </div>
                {e.affiliation && (
                  <p className="mt-1 text-xs text-mute">{e.affiliation}</p>
                )}
                <p className="mt-2 text-sm font-medium text-acc2">{e.degree}</p>

                <div className="mt-5">
                  <p className="font-mono text-[11px] tracking-[0.15em] text-mute/70">
                    KEY COURSEWORK
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {e.coursework.map((c) => (
                      <Tag key={c} className="px-3 py-1 text-[11px]">
                        {c}
                      </Tag>
                    ))}
                  </div>
                </div>

                {e.activities.length > 0 && (
                  <div className="mt-5">
                    <p className="font-mono text-[11px] tracking-[0.15em] text-mute/70">
                      PROGRAMS &amp; ACTIVITIES
                    </p>
                    <ul className="mt-2.5 flex flex-col gap-1.5">
                      {e.activities.map((a) => (
                        <li key={a} className="flex gap-2.5 text-sm text-mute">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-acc2/60" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
