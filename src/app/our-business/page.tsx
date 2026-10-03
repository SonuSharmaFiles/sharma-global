import {
  Search,
  CheckSquare,
  Handshake,
  ClipboardList,
  Store,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Business",
  description:
    "How SHARMA GLOBAL LLC operates: product research, selection, supplier coordination, marketplace listings, and customer-focused online retail.",
  path: "/our-business",
});

const workflow = [
  {
    icon: Search,
    title: "Product Research",
    description:
      "Studying the Home & Kitchen market to understand what shoppers actually need and where existing options fall short.",
  },
  {
    icon: CheckSquare,
    title: "Product Selection",
    description:
      "Choosing products deliberately — for usefulness, build quality, pricing and fit with everyday living.",
  },
  {
    icon: Handshake,
    title: "Supplier Coordination",
    description:
      "Identifying suitable suppliers and coordinating product requirements, quantities and timelines.",
  },
  {
    icon: ClipboardList,
    title: "Product Listing",
    description:
      "Preparing clear, accurate marketplace listings: honest descriptions, useful images and correct details.",
  },
  {
    icon: Store,
    title: "Marketplace Sales",
    description:
      "Selling through established marketplaces, where customers order with the checkout, payment and delivery they already trust.",
  },
  {
    icon: MessageSquare,
    title: "Customer Communication",
    description:
      "Responding to questions and feedback through marketplace channels, promptly and respectfully.",
  },
  {
    icon: TrendingUp,
    title: "Business Improvement",
    description:
      "Reviewing what works, refining listings and selection, and improving the operation step by step.",
  },
];

export default function OurBusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Business"
        title="Our E-commerce Business"
        lede="Focused on everyday products and the opportunities of digital commerce."
      />

      {/* Overview */}
      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Overview"
              title="Designed Around Online Retail"
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted lg:col-span-3 lg:pt-10">
            <p>
              SHARMA GLOBAL LLC is built for one purpose: selling practical
              Home &amp; Kitchen products through online marketplaces. The
              company does not run physical shops or its own checkout —
              instead, it concentrates on the parts of retail that happen
              before a customer ever clicks &ldquo;buy&rdquo;: finding the
              right products, sourcing them responsibly, and presenting them
              clearly.
            </p>
            <p>
              This model keeps the business focused and efficient, and it
              means customers always purchase through platforms with
              established buyer protections, payment systems and delivery
              networks.
            </p>
          </div>
        </Container>
      </section>

      {/* Business model workflow */}
      <section className="border-y border-line bg-cream py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Business Model"
            title="How the Work Flows"
            lede="The main activities in our business model, from first research to ongoing improvement. As a growing company, some of these stages are active today while others are still being developed."
          />
          <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {workflow.map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-card border border-line bg-white p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/5">
                    <step.icon className="h-5 w-5 text-brand" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="font-display text-3xl font-extrabold text-line" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Sourcing */}
      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Product Sourcing"
              title="Finding Products Worth Selling"
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted lg:col-span-3 lg:pt-10">
            <p>
              Our sourcing approach is straightforward: identify suitable
              suppliers, and select products based on relevance, functionality,
              pricing and the product requirements that apply to the
              marketplaces we sell on.
            </p>
            <p>
              We do not manufacture products ourselves, and we do not claim
              exclusive supplier relationships. What we offer is judgment —
              the time spent comparing options so that what we list is worth a
              customer&apos;s consideration.
            </p>
          </div>
        </Container>
      </section>

      {/* Marketplace operations */}
      <section className="border-y border-line bg-card py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Marketplace Operations"
              title="Where the Selling Happens"
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted lg:col-span-3 lg:pt-10">
            <p>
              Online marketplaces play three roles in our business: they make
              products discoverable to shoppers, they host and manage our
              product listings, and they process orders through their own
              retail infrastructure.
            </p>
            <p>
              Because of this, purchasing, payment, shipping, returns and
              refunds for any product are governed by the relevant marketplace
              and the terms shown on the specific product listing — not by
              this website.
            </p>
          </div>
        </Container>
      </section>

      {/* Development + transparency */}
      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-card border border-line bg-card p-8 sm:p-10">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-gold">
              Business Development
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold text-ink">
              Growing Deliberately
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Our long-term plan is built on responsible product expansion,
              steady operational improvement, and customer-focused digital
              commerce. We would rather add one well-chosen product than ten
              rushed ones — growth should strengthen trust, not strain it.
            </p>
          </div>
          <div className="rounded-card border border-line bg-card p-8 sm:p-10">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-gold">
              Business Transparency
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold text-ink">
              Where to Check the Details
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              For specific order details — pricing, availability, shipping,
              returns and refunds — please consult the relevant product
              listing and the policies of the marketplace where the product is
              sold. Those terms govern each purchase.
            </p>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
