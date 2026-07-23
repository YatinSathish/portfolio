import Image from "next/image";
import { projects, site } from "@/data/content";
import { Reveal } from "../motion/primitives";
import Section from "./Section";
import SpotlightCard from "../SpotlightCard";
import PhoneMock from "../PhoneMock";
import Tag from "../Tag";

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.69-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8.5 7.5V6a2.5 2.5 0 0 1 2.5-2.5h2A2.5 2.5 0 0 1 15.5 6v1.5" />
      <path d="M3 12.5h18" />
    </svg>
  );
}

const flagship = projects.find((p) => p.flagship)!;
const rest = projects.filter((p) => !p.flagship);

export default function Projects() {
  return (
    <Section id="projects" number="02" title="Projects">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <Reveal className="md:col-span-3" y={36}>
          <div id="vouchpay" className="scroll-mt-24">
            <SpotlightCard tiltStrength={0.6} beamDelay={0}>
              <div className="grid grid-cols-1 gap-8 p-7 sm:p-10 lg:grid-cols-[1.4fr_1fr]">
                <div className="flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                      <span className="text-grad">{flagship.title}</span>
                    </h3>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-ink/80">
                      <BriefcaseIcon />
                      {flagship.attribution}
                    </span>
                  </div>
                  <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-acc1/25 bg-acc1/10 px-3.5 py-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--acc1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01z" />
                    </svg>
                    <span className="text-xs font-medium text-acc1">{flagship.grant}</span>
                  </div>
                  {flagship.hook && flagship.features ? (
                    <>
                      <p className="mt-5 max-w-xl text-sm leading-relaxed text-mute sm:text-base">
                        {flagship.hook}
                      </p>
                      <div className="mt-4 flex max-w-xl flex-col gap-3">
                        {flagship.features.map((f) => (
                          <p key={f.label} className="text-sm leading-relaxed text-mute sm:text-base">
                            <span className="font-display font-semibold text-ink">
                              {f.label}
                              {" — "}
                            </span>
                            {f.text}
                          </p>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="mt-5 max-w-xl text-sm leading-relaxed text-mute sm:text-base">
                      {flagship.description}
                    </p>
                  )}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {flagship.tech.map((t) => (
                      <Tag key={t} hue="var(--acc2)" className="px-3 py-1 text-[11px]">
                        {t}
                      </Tag>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                      href={flagship.link!.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-acc1 to-acc3 px-5 py-2.5 text-sm font-medium text-bg transition-shadow duration-300 hover:shadow-[0_0_28px_var(--glow)]"
                    >
                      {flagship.link!.label} <ExternalIcon />
                    </a>
                    <a
                      href={flagship.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transition-transform duration-300 hover:scale-105"
                    >
                      <Image
                        src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.png"
                        alt="Download on the App Store"
                        width={374}
                        height={125}
                        className="h-11 w-auto"
                      />
                    </a>
                    <a
                      href={flagship.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transition-transform duration-300 hover:scale-105"
                    >
                      <Image
                        src="/GetItOnGooglePlay_Badge_Web_color_English.png"
                        alt="Get it on Google Play"
                        width={747}
                        height={221}
                        className="h-11 w-auto"
                      />
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center py-2">
                  <PhoneMock image={flagship.image} />
                </div>
              </div>
            </SpotlightCard>
          </div>
        </Reveal>

        {rest.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.1} y={36}>
            <SpotlightCard beamDelay={(i + 1) * 4.5} className="h-full">
              <div className="flex h-full flex-col p-6 sm:p-7">
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Tag key={t} className="px-2.5 py-0.5 text-[10px]">
                      {t}
                    </Tag>
                  ))}
                </div>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-acc2 transition-colors hover:text-acc1"
                  >
                    <GithubIcon /> View on GitHub <ExternalIcon />
                  </a>
                )}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}

        <Reveal delay={0.3} y={36}>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full min-h-44 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-line bg-transparent p-6 text-mute transition-all duration-500 hover:border-acc2/50 hover:text-acc2"
          >
            <GithubIcon />
            <span className="text-sm font-medium">More on GitHub</span>
            <span className="font-mono text-[10px] tracking-wider opacity-60 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
