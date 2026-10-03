import { cn } from "@/lib/utils";

/** Editorial section heading with an optional eyebrow label and lede. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-bold tracking-[0.22em] uppercase",
            tone === "dark" ? "text-gold" : "text-gold-soft"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl",
          tone === "dark" ? "text-ink" : "text-footer-text"
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-muted" : "text-footer-text/75"
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
