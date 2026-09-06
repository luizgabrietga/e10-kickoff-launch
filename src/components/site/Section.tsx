import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  dark = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24", dark && "surface-field", className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <header className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
      ) : null}
      <h2 className={cn("text-3xl uppercase sm:text-4xl", dark && "text-ink-foreground")}>
        {title}
      </h2>
      {subtitle ? (
        <p className={cn("mt-4 text-base sm:text-lg", dark ? "text-ink-foreground/80" : "text-muted-foreground")}>
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
