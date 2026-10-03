import { cn } from "@/lib/utils";

/**
 * SHARMA GLOBAL brand mark: a hand-drawn "S" monogram wrapped by a
 * golden orbit — commerce moving around the world. Original artwork,
 * scalable from favicon size up to print.
 */
export function BrandMark({
  className,
  title = "SHARMA GLOBAL LLC logo",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label={title}
      className={className}
      fill="none"
    >
      <rect width="48" height="48" rx="14" fill="currentColor" />
      {/* Golden orbit */}
      <ellipse
        cx="24"
        cy="24"
        rx="17"
        ry="7.2"
        transform="rotate(-28 24 24)"
        stroke="#C99A56"
        strokeWidth="1.7"
      />
      {/* The S */}
      <path
        d="M30.8 15.6c-2.2-2.6-6.8-3.2-9.8-1.2-3 2-3.2 5.8-.4 7.9 1 .8 2.3 1.3 3.7 1.7 1.4.4 2.7.9 3.7 1.7 2.8 2.1 2.6 5.9-.4 7.9-3 2-7.6 1.4-9.8-1.2"
        stroke="#F5F4EF"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      {/* Satellite on the orbit */}
      <circle cx="38.6" cy="16.4" r="2.5" fill="#C99A56" />
    </svg>
  );
}

/** Single-line word-mark lockup used in the header and footer. */
export function LogoLockup({
  variant = "dark",
  className,
}: {
  /** "dark" = dark text on light bg, "light" = light text on dark bg */
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <BrandMark
        className={cn(
          "h-10 w-10 shrink-0",
          variant === "dark" ? "text-brand" : "text-brand-light"
        )}
      />
      <span
        className={cn(
          "font-display text-[16px] leading-none font-extrabold tracking-[0.06em] whitespace-nowrap",
          variant === "dark" ? "text-ink" : "text-footer-text"
        )}
      >
        SHARMA GLOBAL{" "}
        <span className={variant === "dark" ? "text-brand" : undefined}>
          LLC
        </span>
      </span>
    </span>
  );
}
