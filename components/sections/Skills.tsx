import { skills } from "@/data/content";
import { Stagger, StaggerItem } from "../motion/primitives";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" number="03" title="Skills">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skills.map((group, gi) => (
          <Stagger
            key={group.group}
            delay={gi * 0.08}
            className="rounded-2xl border border-line bg-card p-6 backdrop-blur-sm transition-colors duration-500 hover:border-acc2/30 sm:p-7"
          >
            <StaggerItem>
              <p className="font-mono text-xs tracking-[0.2em] text-acc2/80">
                {group.group.toUpperCase()}
              </p>
            </StaggerItem>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <StaggerItem key={item} y={10}>
                  <span className="block cursor-default rounded-full border border-line bg-card px-3.5 py-1.5 text-[13px] text-ink/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-acc1/50 hover:text-acc1">
                    {item}
                  </span>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        ))}
      </div>
    </Section>
  );
}
