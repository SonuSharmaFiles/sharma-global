/**
 * Product category data.
 *
 * These are PLANNED areas of product interest, not confirmed live
 * inventory. Each category renders as a showcase card. When real
 * products exist, add them to the `products` array below and link
 * verified marketplace listing URLs.
 */

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  /**
   * Optional lifestyle image. Place a file in /public/images/products/
   * and set its path here; until then an elegant placeholder renders.
   */
  image: string | null;
  imageAlt: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: "kitchen-essentials",
    name: "Kitchen Essentials",
    description:
      "Practical tools and everyday helpers that make cooking and food preparation simpler and more enjoyable.",
    image: null,
    imageAlt: "Kitchen essentials arranged on a counter",
  },
  {
    id: "home-organization",
    name: "Home Organization",
    description:
      "Storage and organization products designed to keep living spaces tidy, calm and easy to manage.",
    image: null,
    imageAlt: "Neatly organized home storage",
  },
  {
    id: "dining-tableware",
    name: "Dining & Tableware",
    description:
      "Functional pieces for everyday meals and shared moments at the table.",
    image: null,
    imageAlt: "An elegantly set dining table",
  },
  {
    id: "home-accessories",
    name: "Home Accessories",
    description:
      "Useful accents and accessories that quietly improve comfort around the home.",
    image: null,
    imageAlt: "Contemporary home accessories in a living space",
  },
  {
    id: "household-utility",
    name: "Household Utility Products",
    description:
      "Dependable utility items that support cleaning, maintenance and daily routines.",
    image: null,
    imageAlt: "Household utility products",
  },
  {
    id: "everyday-living",
    name: "Everyday Living Essentials",
    description:
      "Simple, well-chosen items for the small tasks that make up everyday life.",
    image: null,
    imageAlt: "Everyday living essentials in a minimal home",
  },
];

/* ── Future product records ──────────────────────────────────────
 * Scalable, typed structure for real inventory. The Products page
 * will automatically list items added here with a verified URL.
 * ──────────────────────────────────────────────────────────────── */

export interface ProductRecord {
  name: string;
  categoryId: string;
  description: string;
  image: string | null;
  marketplaceName: string;
  /** Verified marketplace listing URL — required to display the product. */
  listingUrl: string;
  availability: "available" | "coming-soon" | "unavailable";
  lastUpdated: string; // ISO date
}

/** Empty until the company confirms live listings. Do not add fictitious SKUs. */
export const products: ProductRecord[] = [];
