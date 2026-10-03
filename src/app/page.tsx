import Link from "next/link";
import {
  ShoppingBag,
  CookingPot,
  HeartHandshake,
  ArrowRight,
  Compass,
  Scale,
  Sprout,
  Store,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  HeroIllustration,
  MarketplaceIllustration,
  Flourish,
} from "@/components/illustrations/Illustrations";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { FounderPortrait } from "@/components/sections/FounderPortrait";
import { CtaSection } from "@/components/sections/CtaSection";
import { marketplaceDisclaimer } from "@/config/marketplaces";
import { company } from "@/config/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: company.seo.defaultTitle,
  description: company.seo.defaultDescription,
  path: "/",
});

const whatWeDo = [
  {
    icon: ShoppingBag,
    title: "Online Retail",
    description:
      "We focus on selling useful everyday products through established online marketplaces.",
  },
  {
    icon: CookingPot,
    title: "Home & Kitchen",
    description:
      "Our primary product category includes practical items designed to support everyday household activities.",
  },
  {
    icon: Store,
    title: "Marketplace Operations",
    description:
      "We use digital marketplaces to present products, manage online listings, and connect with customers.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Focus",
    description:
      "We aim to provide clear product information, a straightforward shopping experience, and responsive customer support.",
  },
];

const principles = [
  {
    icon: Compass,
    title: "Thoughtful Product Selection",
    description:
      "We aim to choose products deliberately — for their usefulness, practicality and fit with everyday living, not simply for what is trending.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Oriented Approach",
    description:
      "Our goal is to make shopping straightforward: honest product information, clear communication, and respect for the customer's time.",
  },
  {
    icon: Scale,
    title: "Transparent Business Practices",
    description:
      "We believe in saying only what we can stand behind — about our products, our policies, and the way our business operates.",
  },
  {
    icon: Sprout,
    title: "Long-Term Global Vision",
    description:
      "We are building patiently, with the aim of growing a sustainable e-commerce business that serves customers across online marketplaces.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b border-line bg-cream">
        <Container className="grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              Home &amp; Kitchen · E-commerce
            </p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
              Everyday Essentials.
              <br />
              <span className="text-brand">Thoughtfully Chosen.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              SHARMA GLOBAL LLC is an e-commerce company focused on bringing
              practical Home &amp; Kitchen products to online shoppers through
              trusted digital marketplaces.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href="/about">
                Discover Our Company
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Get in Touch
              </ButtonLink>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-card border border-line bg-white shadow-lifted">
            <HeroIllustration className="h-auto w-full" />
          </div>
        </Container>
      </section>

      {/* ── Company introduction ────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Who We Are"
              title="A Modern Approach to Everyday E-commerce"
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted lg:col-span-3 lg:pt-10">
            <p>
              SHARMA GLOBAL LLC was established around a simple idea: useful
              products for the home should be easy to find and easy to buy.
              Rather than operating physical stores, the company works through
              established online marketplaces — where millions of shoppers
              already browse, compare and purchase every day.
            </p>
            <p>
              Our focus is the Home &amp; Kitchen category: the practical
              items people reach for daily. We select products with intention,
              present them clearly, and rely on trusted marketplace
              infrastructure for ordering and delivery.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-light"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── What we do ──────────────────────────────────────────── */}
      <section className="border-y border-line bg-card py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Focused on Practical Living"
            lede="Four pillars shape how SHARMA GLOBAL LLC operates as an online retail business."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why Sharma Global ───────────────────────────────────── */}
      <section className="border-b border-line bg-cream py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Principles"
            title="Why SHARMA GLOBAL LLC"
            lede="The principles we hold ourselves to as we build this business — commitments we work toward every day."
          />
          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-soft">
                  <p.icon className="h-5.5 w-5.5 text-brand" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Marketplace presence ────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Where to Find Us"
              title="Connecting Products with Online Shoppers"
              lede="We use established online marketplaces to make our products discoverable and accessible to customers. Our marketplace presence is an important part of how we operate and grow our e-commerce business."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/marketplaces" variant="secondary">
                About Our Marketplaces
              </ButtonLink>
            </div>
            <p className="mt-6 max-w-xl text-xs leading-relaxed text-muted/80">
              Verified marketplace store links will appear here once our seller
              profiles are live. {marketplaceDisclaimer}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-card bg-brand shadow-lifted">
            <MarketplaceIllustration className="h-auto w-full" />
          </div>
        </Container>
      </section>

      {/* ── Founder spotlight ───────────────────────────────────── */}
      <section className="border-y border-line bg-card py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          <FounderPortrait className="aspect-[4/5] w-full max-w-sm lg:col-span-2" />
          <div className="lg:col-span-3">
            <SectionHeading eyebrow="Leadership" title="Meet Our Founder" />
            <p className="mt-6 text-lg leading-relaxed text-muted">
              SHARMA GLOBAL LLC was founded by Dipak Sharma, whose vision is to
              build a customer-focused e-commerce business with an emphasis on
              practical products, thoughtful selection, and long-term growth.
            </p>
            <dl className="mt-8 grid max-w-md grid-cols-2 gap-6">
              <div>
                <dt className="text-xs font-bold tracking-[0.18em] uppercase text-gold">
                  Founder &amp; CEO
                </dt>
                <dd className="mt-1 font-display text-lg font-bold text-ink">
                  {company.founder.name}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-[0.18em] uppercase text-gold">
                  Based In
                </dt>
                <dd className="mt-1 font-display text-lg font-bold text-ink">
                  {company.founder.location}
                </dd>
              </div>
            </dl>
            <ButtonLink href="/founder" variant="secondary" className="mt-8">
              Read the Founder&apos;s Story
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* ── Vision ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl text-center">
          <Flourish className="mx-auto mb-8 h-6 w-40" />
          <SectionHeading
            eyebrow="Looking Ahead"
            title="Building a Business for Everyday Living"
            align="center"
            lede="Our aim is to develop a sustainable e-commerce operation: expanding our product selection responsibly, improving the online shopping experience step by step, and earning lasting customer trust through how we work — not just what we sell."
          />
        </Container>
      </section>

      {/* ── Contact CTA ─────────────────────────────────────────── */}
      <CtaSection />
    </>
  );
}
