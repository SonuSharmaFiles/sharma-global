import { cn } from "@/lib/utils";

/**
 * SHARMA GLOBAL brand mark: an original geometric monogram built from
 * two interlocking arcs (an abstract "S" and "G") suggesting connection
 * and global commerce, with a small gold node marking a point of exchange.
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
      <rect width="48" height="48" rx="12" fill="currentColor" />
      {/* Upper arc — abstract S curve */}
      <path
        d="M33 15c-2.4-2.5-6-3.6-9.6-2.7C18 13.6 15 18.4 16.3 23.1c.9 3.2 3.5 5.5 6.7 6.1"
        stroke="#F5F4EF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Lower arc — abstract G curve */}
      <path
        d="M15 33c2.4 2.5 6 3.6 9.6 2.7 5.4-1.3 8.4-6.1 7.1-10.8-.4-1.3-1-2.5-1.9-3.4"
        stroke="#F5F4EF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Gold node — the point of exchange */}
      <circle cx="24" cy="24" r="2.6" fill="#C99A56" />
    </svg>
  );
}

/** Full word-mark lockup used in the header and footer. */
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
          "h-9 w-9 shrink-0",
          variant === "dark" ? "text-brand" : "text-brand-light"
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[15px] font-extrabold tracking-[0.08em]",
            variant === "dark" ? "text-ink" : "text-footer-text"
          )}
        >
          SHARMA GLOBAL
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-semibold tracking-[0.32em]",
            variant === "dark" ? "text-muted" : "text-footer-text/60"
          )}
        >
          LLC
        </span>
      </span>
    </span>
  );
}
