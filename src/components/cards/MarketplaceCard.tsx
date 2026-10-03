import { Store, ArrowUpRight, Clock } from "lucide-react";
import type { Marketplace } from "@/config/marketplaces";

/**
 * Marketplace card. Shows an active "View Store" link ONLY when a
 * verified seller URL exists in config; otherwise an informational
 * state with no fake buttons.
 */
export function MarketplaceCard({ marketplace }: { marketplace: Marketplace }) {
  return (
    <article className="flex flex-col rounded-card border border-line bg-card p-7">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/5">
        <Store className="h-5.5 w-5.5 text-brand" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-xl font-bold text-ink">
        {marketplace.name}
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
        {marketplace.description}
      </p>
      {marketplace.url ? (
        <a
          href={marketplace.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 self-start rounded-button bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
        >
          View Store
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      ) : (
        <p className="mt-6 inline-flex items-center gap-2 self-start rounded-button border border-dashed border-line bg-white px-4 py-2.5 text-xs font-semibold tracking-wide text-muted uppercase">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {marketplace.statusNote}
        </p>
      )}
    </article>
  );
}
