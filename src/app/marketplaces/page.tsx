import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { MarketplaceCard } from "@/components/cards/MarketplaceCard";
import { marketplaces, marketplaceDisclaimer } from "@/config/marketplaces";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Marketplaces",
  description:
    "Discover SHARMA GLOBAL LLC's e-commerce presence through established online shopping platforms, including Amazon marketplace operations.",
  path: "/marketplaces",
});

export default function MarketplacesPage() {
  return (
    <>
      <PageHero
        eyebrow="Marketplaces"
        title="Find Us on Online Marketplaces"
        lede="Discover our e-commerce presence through established online shopping platforms."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Sales Channels"
            title="Where Our Products Are Sold"
            lede="SHARMA GLOBAL LLC sells through established marketplaces rather than its own checkout. Each platform below becomes an active store link once our verified seller profile is live."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {marketplaces.map((m) => (
              <MarketplaceCard key={m.id} marketplace={m} />
            ))}
          </div>
        </Container>
      </section>

      {/* Why marketplaces */}
      <section className="border-y border-line bg-cream py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Why This Model"
              title="Shopping Where Customers Already Are"
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted lg:col-span-3 lg:pt-10">
            <p>
              Established marketplaces give customers things a small company
              cannot easily build alone: familiar checkout, buyer protection,
              reliable delivery networks and straightforward returns. By
              selling through these platforms, we let customers shop with the
              confidence they already have.
            </p>
            <p>
              It also keeps our responsibilities clear. We manage product
              selection and listings; the marketplace manages the transaction.
              Pricing, availability, shipping, returns and refunds for every
              product are governed by the marketplace and the specific product
              listing.
            </p>
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="py-14 sm:py-16">
        <Container>
          <div className="rounded-card border border-line bg-card p-6 sm:p-8">
            <h2 className="text-xs font-bold tracking-[0.22em] uppercase text-gold">
              Independence Notice
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
              {marketplaceDisclaimer} Product availability may vary by
              marketplace and by country; we do not claim that all products
              are available in every region.
            </p>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Marketplace Questions?"
        text="For marketplace-related inquiries — listings, partnerships or seller information — our team is happy to help."
        buttonLabel="Get in Touch"
      />
    </>
  );
}
