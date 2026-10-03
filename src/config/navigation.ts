/** Site navigation structure — shared by header, footer and sitemap. */

export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Business", href: "/our-business" },
  { label: "Products", href: "/products" },
  { label: "Marketplaces", href: "/marketplaces" },
  { label: "Founder", href: "/founder" },
];

export const contactLink: NavLink = { label: "Contact Us", href: "/contact" };

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Accessibility Statement", href: "/accessibility" },
];

export const footerCompanyNav: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Business", href: "/our-business" },
  { label: "Products", href: "/products" },
  { label: "Marketplaces", href: "/marketplaces" },
  { label: "Founder", href: "/founder" },
];

export const footerInfoNav: NavLink[] = [contactLink, ...legalNav];
