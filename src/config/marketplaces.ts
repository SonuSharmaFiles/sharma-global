/**
 * Marketplace configuration.
 *
 * A marketplace card only shows an active "View Store" button when
 * `url` is a verified seller-profile link supplied by the owner.
 * Leave `url` as null until the real link is confirmed — the card
 * then renders in an informational (no-link) state.
 */

export interface Marketplace {
  id: string;
  name: string;
  description: string;
  /** Verified seller profile URL. null = not yet provided. */
  url: string | null;
  /** Current status shown to visitors when no link exists yet. */
  statusNote: string;
}

export const marketplaces: Marketplace[] = [
  {
    id: "amazon",
    name: "Amazon",
    description:
      "Amazon is the primary sales channel planned for SHARMA GLOBAL LLC's Home & Kitchen products. Product listings, pricing, shipping and returns on Amazon are governed by Amazon's own marketplace policies.",
    url: null, // TODO(owner): add verified Amazon storefront URL
    statusNote: "Storefront link coming soon",
  },
  {
    id: "other",
    name: "Additional Marketplaces",
    description:
      "As the business grows, SHARMA GLOBAL LLC may expand to other established online marketplaces. Verified store links will be added here when they become available.",
    url: null,
    statusNote: "To be announced",
  },
];

/** The legally careful disclaimer shown wherever marketplace names appear. */
export const marketplaceDisclaimer =
  "SHARMA GLOBAL LLC operates independently. The appearance of third-party marketplace names or logos is intended solely to identify sales channels and does not imply sponsorship, endorsement, or affiliation beyond any relationship that has been independently verified.";
