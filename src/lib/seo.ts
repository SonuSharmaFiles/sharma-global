import type { Metadata } from "next";
import { company } from "@/config/company";

interface PageSeo {
  title: string;
  description: string;
  /** Path beginning with "/" — used for the canonical URL. */
  path: string;
  /** Set true for pages that should not be indexed. */
  noIndex?: boolean;
}

/** Build consistent per-page metadata (title, description, canonical, OG, Twitter). */
export function buildMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageSeo): Metadata {
  const url = `${company.siteUrl}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: company.legalName,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}

/** Organization JSON-LD built only from verified configuration values. */
export function organizationJsonLd() {
  const sameAs = Object.values(company.social).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    url: company.siteUrl,
    founder: {
      "@type": "Person",
      name: company.founder.name,
      jobTitle: company.founder.title,
    },
    ...(company.businessEmail ? { email: company.businessEmail } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

/** WebSite JSON-LD. */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.legalName,
    url: company.siteUrl,
  };
}

/** Person JSON-LD for the founder — verified fields only. */
export function founderJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: company.founder.name,
    jobTitle: company.founder.title,
    worksFor: { "@type": "Organization", name: company.legalName },
    ...(company.founder.location
      ? { address: { "@type": "PostalAddress", addressCountry: "NP" } }
      : {}),
  };
}
