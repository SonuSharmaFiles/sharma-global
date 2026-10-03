/**
 * Central company configuration for SHARMA GLOBAL LLC.
 *
 * ─────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH
 *  Every page reads company details from this file. To update an
 *  email address, marketplace link, or legal detail, edit it here —
 *  never inside individual page components.
 *
 *  Fields set to `null` are NOT yet verified by the owner and are
 *  automatically hidden from the public website until filled in.
 * ─────────────────────────────────────────────────────────────────
 */

export const company = {
  /* ── Identity (verified) ─────────────────────────────────────── */
  legalName: "SHARMA GLOBAL LLC",
  brandName: "Sharma Global",
  businessType: "Limited Liability Company (LLC)",
  industry: "E-commerce / Online Retail",
  primaryCategory: "Home & Kitchen",

  /* ── Founder (verified) ──────────────────────────────────────── */
  founder: {
    name: "Dipak Sharma",
    title: "Founder & Chief Executive Officer",
    location: "Nepal",
    /**
     * Founder photo. Place the real photograph at this path inside
     * /public and the site will use it automatically. Until the file
     * exists, set `photoAvailable` to false and an elegant initials
     * placeholder is shown instead. NEVER use an AI-generated face.
     */
    photoPath: "/images/founder/dipak-sharma-founder.jpg",
    photoAvailable: true,
    photoAlt: "Portrait of Dipak Sharma, Founder and CEO of SHARMA GLOBAL LLC",
  },

  /* ── Verified business details (null = hidden from the site) ── */
  registrationJurisdiction: "Wyoming, United States" as string | null,
  registeredAddress:
    "30 N Gould St, Ste R, Sheridan, WY 82801, USA" as string | null,
  businessEmail: "business.dipaksharma@gmail.com" as string | null,
  /** Official phone numbers, shown on the Contact page and footer. */
  businessPhones: [
    { label: "Nepal", number: "+977 9829951058" },
    { label: "USA", number: "+1 (307) 200-2803" },
  ] as Array<{ label: string; number: string }>,
  businessHours: null as string | null, // e.g. "Mon–Fri, 9:00–17:00 NPT"

  /* ── Web presence ────────────────────────────────────────────── */
  /**
   * Set to the final production domain before launch. Used for
   * canonical URLs, Open Graph tags, sitemap.xml and robots.txt.
   */
  siteUrl: "https://example.com", // TODO(owner): replace with real domain

  /** Google Search Console verification token (optional). */
  googleSiteVerification: null as string | null,

  /* ── Social profiles (null = hidden until verified) ─────────── */
  social: {
    linkedin: null as string | null,
    facebook: null as string | null,
    instagram: null as string | null,
  },

  /* ── Legal document dates ────────────────────────────────────── */
  policyEffectiveDate: "2026-10-03", // TODO(owner): confirm before launch
  policyLastUpdated: "2026-10-03",

  /* ── SEO defaults ────────────────────────────────────────────── */
  seo: {
    titleTemplate: "%s | SHARMA GLOBAL LLC",
    defaultTitle: "SHARMA GLOBAL LLC | E-commerce & Home Essentials",
    defaultDescription:
      "Discover SHARMA GLOBAL LLC, an e-commerce company focused on Home & Kitchen products, online retail, and marketplace-based business operations.",
  },
} as const;

/** Convenience helper: formatted date like "October 3, 2026". */
export function formatPolicyDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
