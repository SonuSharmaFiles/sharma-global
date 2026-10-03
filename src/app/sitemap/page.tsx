import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { legalNav } from "@/config/navigation";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sitemap",
  description:
    "A complete overview of all pages on the SHARMA GLOBAL LLC website.",
  path: "/sitemap",
});

const groups: Array<{ heading: string; links: Array<{ label: string; href: string }> }> = [
  {
    heading: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Founder & CEO", href: "/founder" },
    ],
  },
  {
    heading: "Business",
    links: [
      { label: "Our Business", href: "/our-business" },
      { label: "Our Marketplaces", href: "/marketplaces" },
    ],
  },
  {
    heading: "Products",
    links: [{ label: "Products", href: "/products" }],
  },
  {
    heading: "Contact",
    links: [{ label: "Contact Us", href: "/contact" }],
  },
  {
    heading: "Legal",
    links: legalNav,
  },
];

export default function SitemapPage() {
  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        title="Everything on This Website"
        lede="A complete overview of all public pages, organized by section."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
              <nav key={group.heading} aria-labelledby={`sitemap-${group.heading}`}>
                <h2
                  id={`sitemap-${group.heading}`}
                  className="text-xs font-bold tracking-[0.22em] uppercase text-gold"
                >
                  {group.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[15px] font-medium text-ink transition-colors hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
