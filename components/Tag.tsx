import type { CSSProperties, ReactNode } from "react";

export default function Tag({
  children,
  hue = "var(--acc2)",
  className = "",
}: {
  children: ReactNode;
  hue?: string;
  className?: string;
}) {
  return (
    <span
      className={`tag rounded-full font-mono ${className}`}
      style={{ "--tag-hue": hue } as CSSProperties}
    >
      {children}
    </span>
  );
}
