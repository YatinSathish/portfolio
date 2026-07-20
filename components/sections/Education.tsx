import { education } from "@/data/content";
import { Reveal } from "../motion/primitives";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" number="04" title="Education">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.12}>
            <div className="glass h-full rounded-2xl p-6 transition-all duration-500 hover:border-acc2/40 sm:p-8">
              <p className="font-mono text-xs text-mute">{e.dates}</p>
              <h3 className="mt-3 font-display text-xl font-semibold">{e.school}</h3>
              <p className="mt-1.5 text-sm text-mute">{e.degree}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
