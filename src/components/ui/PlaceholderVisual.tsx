import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

/**
 * Elegant placeholder used wherever a real lifestyle photograph has not
 * yet been supplied. Renders a warm, premium abstract composition so the
 * site looks finished while remaining honest — no fake stock imagery.
 *
 * Replace by setting the `image` path in the relevant data/config file;
 * components automatically switch to <Image> when a path exists.
 */
export function PlaceholderVisual({
  icon: Icon,
  label,
  className,
  tone = "cream",
}: {
  icon?: LucideIcon;
  label?: string;
  className?: string;
  tone?: "cream" | "brand";
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        tone === "cream" ? "bg-cream" : "bg-brand",
        className
      )}
    >
      {/* Subtle concentric-arc motif echoing the brand mark */}
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <circle
          cx="320"
          cy="60"
          r="160"
          stroke={tone === "cream" ? "#E7E9E5" : "#31594B"}
          strokeWidth="1.5"
        />
        <circle
          cx="320"
          cy="60"
          r="110"
          stroke={tone === "cream" ? "#E7E9E5" : "#31594B"}
          strokeWidth="1.5"
        />
        <circle
          cx="60"
          cy="260"
          r="120"
          stroke={tone === "cream" ? "#E7E9E5" : "#31594B"}
          strokeWidth="1.5"
        />
        <circle cx="320" cy="60" r="4" fill="#C99A56" />
        <circle cx="60" cy="260" r="4" fill="#C99A56" />
      </svg>
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        {Icon && (
          <span
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-full",
              tone === "cream" ? "bg-white shadow-soft" : "bg-brand-light"
            )}
          >
            <Icon
              className={cn(
                "h-6 w-6",
                tone === "cream" ? "text-brand" : "text-gold-soft"
              )}
              strokeWidth={1.75}
            />
          </span>
        )}
        {label && (
          <span
            className={cn(
              "text-xs font-semibold tracking-[0.18em] uppercase",
              tone === "cream" ? "text-muted" : "text-footer-text/70"
            )}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
