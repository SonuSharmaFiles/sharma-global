import type { LucideIcon } from "lucide-react";

/** Icon + heading + description card used for "What We Do" style grids. */
export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-card border border-line bg-card p-7 transition-all duration-200 hover:border-brand/30 hover:shadow-soft">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/5 transition-colors group-hover:bg-brand/10">
        <Icon className="h-5.5 w-5.5 text-brand" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
