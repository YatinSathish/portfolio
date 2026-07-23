import type { CSSProperties, ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  hue?: string;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
};

export default function Tag({
  children,
  hue = "var(--acc2)",
  className = "",
  href,
  target,
  rel,
}: TagProps) {
  const style = { "--tag-hue": hue } as CSSProperties;
  const cls = `tag rounded-full font-mono ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cls} style={style}>
        {children}
      </a>
    );
  }

  return (
    <span className={cls} style={style}>
      {children}
    </span>
  );
}
