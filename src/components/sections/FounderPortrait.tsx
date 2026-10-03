import Image from "next/image";
import { company } from "@/config/company";
import { cn } from "@/lib/utils";

/**
 * Founder portrait. Uses the real photo at company.founder.photoPath when
 * company.founder.photoAvailable is true; otherwise an elegant initials
 * placeholder (never an AI-generated face).
 *
 * DEV NOTE: to activate the real photo, add the file to
 * /public/images/founder/dipak-sharma-founder.jpg and flip
 * `photoAvailable` to true in src/config/company.ts.
 */
export function FounderPortrait({ className }: { className?: string }) {
  const { founder } = company;

  if (founder.photoAvailable) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-card bg-cream",
          className
        )}
      >
        <Image
          src={founder.photoPath}
          alt={founder.photoAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover"
        />
      </div>
    );
  }

  const initials = founder.name
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <div
      role="img"
      aria-label={`Placeholder portrait for ${founder.name} — photograph coming soon`}
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-card bg-brand",
        className
      )}
    >
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="340" cy="80" r="180" stroke="#31594B" strokeWidth="1.5" />
        <circle cx="340" cy="80" r="120" stroke="#31594B" strokeWidth="1.5" />
        <circle cx="40" cy="440" r="140" stroke="#31594B" strokeWidth="1.5" />
        <circle cx="340" cy="80" r="4" fill="#C99A56" />
      </svg>
      <div className="relative flex flex-col items-center gap-4">
        <span className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-gold/60 bg-brand-light font-display text-4xl font-extrabold text-footer-text">
          {initials}
        </span>
        <span className="text-[11px] font-semibold tracking-[0.24em] text-footer-text/60 uppercase">
          Photograph coming soon
        </span>
      </div>
    </div>
  );
}
