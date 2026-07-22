import { whatIDo } from "@/data/content";
import { Reveal } from "../motion/primitives";
import Section from "./Section";
import SpotlightCard from "../SpotlightCard";
import Tag from "../Tag";

const icons = [
  // Mobile & full stack — smartphone
  <svg key="mobile" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="7" y="2" width="10" height="20" rx="2.5" />
    <path d="M11 18h2" />
  </svg>,
  // AI & RAG — sparkle
  <svg key="ai" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
    <path d="M19 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
  </svg>,
  // Cloud & CI/CD — cloud
  <svg key="cloud" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>,
  // Data — bar chart
  <svg key="data" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 20v-8M12 20V5M18 20v-5" />
  </svg>,
];

const ICON_HUE = "var(--acc2)";

export default function Skills() {
  return (
    <Section id="skills" number="03" title="What I do">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {whatIDo.map((cap, i) => {
          return (
            <Reveal key={cap.title} delay={(i % 2) * 0.1} className="h-full">
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col p-6 sm:p-8">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-line"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, ${ICON_HUE} 20%, transparent), color-mix(in srgb, ${ICON_HUE} 11%, transparent))`,
                      color: ICON_HUE,
                      boxShadow: `inset 0 0 10px color-mix(in srgb, ${ICON_HUE} 10%, transparent)`,
                    }}
                    aria-hidden="true"
                  >
                    {icons[i % icons.length]}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug sm:text-xl">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">
                    {cap.body}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {cap.tech.map((t) => (
                      <Tag key={t} className="px-3 py-1 text-[11px]">
                        {t}
                      </Tag>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
