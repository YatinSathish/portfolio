import { Reveal } from "../motion/primitives";

export default function Section({
  id,
  number,
  title,
  children,
  className,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32 ${className ?? ""}`}>
      <Reveal>
        <div className="mb-12 flex items-baseline gap-4 sm:mb-16">
          <span className="font-mono text-sm text-acc2/70">{number}</span>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <span className="hidden h-px flex-1 bg-gradient-to-r from-line to-transparent sm:block" />
        </div>
      </Reveal>
      {children}
    </section>
  );
}
