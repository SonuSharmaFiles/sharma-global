import { Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { productCategories, products } from "@/data/product-categories";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "Explore the Home & Kitchen product categories that form the focus of SHARMA GLOBAL LLC's e-commerce business — from kitchen essentials to home organization.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Everyday Products for Modern Living"
        lede="Explore the Home & Kitchen product categories that form the focus of SHARMA GLOBAL LLC's e-commerce business."
      />

      {/* Category showcase */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Product Categories"
            title="Our Areas of Focus"
            lede="These categories guide our product research and selection. They represent where we are building our range — actual product availability varies by marketplace."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          <div className="mt-12 flex items-start gap-3 rounded-card border border-line bg-card p-5 text-sm leading-relaxed text-muted">
            <Info className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand" aria-hidden="true" />
            <p>
              This website is a corporate overview, not an online store.
              Purchases are made through our marketplace listings, where each
              listing shows current pricing, availability, shipping and return
              terms. Verified store links will be published on the{" "}
              <a href="/marketplaces" className="font-semibold text-brand underline underline-offset-2">
                Marketplaces page
              </a>{" "}
              as they become available.
            </p>
          </div>

          {/* Live product listings appear automatically once records with
              verified marketplace URLs are added to src/data/product-categories.ts */}
          {products.length > 0 && (
            <div className="mt-16">
              <SectionHeading
                eyebrow="Available Now"
                title="Current Products"
              />
              <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((p) => (
                  <li
                    key={p.listingUrl}
                    className="rounded-card border border-line bg-white p-6"
                  >
                    <h3 className="font-display text-lg font-bold text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {p.description}
                    </p>
                    <a
                      href={p.listingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm font-semibold text-brand underline underline-offset-2"
                    >
                      View on {p.marketplaceName}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </section>

      <CtaSection
        title="Looking for Something Specific?"
        text="If you have a question about our products or categories, we would be glad to help."
        buttonLabel="Ask a Product Question"
      />
    </>
  );
}
