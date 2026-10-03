import {
  HeartHandshake,
  ShieldCheck,
  Lightbulb,
  BadgeCheck,
  Eye,
  Sprout,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { company } from "@/config/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about SHARMA GLOBAL LLC — an e-commerce company focused on practical Home & Kitchen products, thoughtful selection, and marketplace-based online retail.",
  path: "/about",
});

const values = [
  {
    icon: HeartHandshake,
    title: "Customer Focus",
    description:
      "Decisions start with the customer: clear information, fair treatment, and products that genuinely help.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We say what we can stand behind, and we follow through on what we say.",
  },
  {
    icon: Lightbulb,
    title: "Practical Innovation",
    description:
      "We look for better ways to work — not novelty for its own sake, but improvements that matter.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Awareness",
    description:
      "We pay attention to how products are made, how they perform, and whether they earn their place in a home.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "From company policies to product details, we aim to be open about how we operate.",
  },
  {
    icon: Sprout,
    title: "Responsible Growth",
    description:
      "We grow step by step, building capabilities properly rather than overpromising.",
  },
];

export default function AboutPage() {
  const infoRows: Array<{ label: string; value: string | null; note?: string }> = [
    { label: "Legal name", value: company.legalName },
    { label: "Business type", value: company.businessType },
    { label: "Founder & CEO", value: company.founder.name },
    { label: "Founder location", value: company.founder.location },
    { label: "Industry", value: company.industry },
    { label: "Primary category", value: company.primaryCategory },
    {
      label: "Registration jurisdiction",
      value: company.registrationJurisdiction,
      note: "To be published after verification",
    },
    {
      label: "Registered address",
      value: company.registeredAddress,
      note: "To be published after verification",
    },
    {
      label: "Official contact email",
      value: company.businessEmail,
      note: "To be published after verification",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About SHARMA GLOBAL LLC"
        lede="An e-commerce company focused on practical products, thoughtful selection, and the possibilities of online retail."
      />

      {/* Our story */}
      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Our Story" title="Why This Company Exists" />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted lg:col-span-3 lg:pt-10">
            <p>
              SHARMA GLOBAL LLC was established to take part in one of the most
              meaningful shifts in modern commerce: the move of everyday
              shopping onto online marketplaces. The company&apos;s founder,
              Dipak Sharma, saw an opportunity to build a business that
              connects practical, well-chosen products with the people who
              need them — without the overhead of traditional retail.
            </p>
            <p>
              The company&apos;s focus is deliberately narrow: Home &amp;
              Kitchen. These are the products people use every day — the tools,
              organizers and essentials that quietly make a household run. By
              concentrating on one category, we can select with care instead of
              listing everything.
            </p>
            <p>
              Rather than building its own store infrastructure, SHARMA GLOBAL
              LLC operates through established online marketplaces such as
              Amazon. This lets the company focus on what it can do well —
              product research, selection and presentation — while customers
              shop through platforms they already know and trust.
            </p>
            <p>
              The business is young and growing deliberately. We would rather
              build a durable, customer-oriented operation over time than make
              claims we have not yet earned.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission + vision */}
      <section className="border-y border-line bg-cream py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-card border border-line bg-white p-8 sm:p-10">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-gold">
              Our Mission
            </p>
            <p className="mt-4 font-display text-xl leading-relaxed font-semibold text-ink sm:text-2xl">
              To offer thoughtfully selected everyday products through
              accessible online shopping channels while maintaining a
              commitment to transparency, practicality, and customer-focused
              business practices.
            </p>
          </div>
          <div className="rounded-card bg-brand p-8 sm:p-10">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-gold-soft">
              Our Vision
            </p>
            <p className="mt-4 font-display text-xl leading-relaxed font-semibold text-white sm:text-2xl">
              To build a sustainable e-commerce business with a growing
              selection of useful products, a strong digital presence, and
              lasting relationships with customers and business partners.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            title="What Guides the Way We Work"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-card border border-line bg-card p-7"
              >
                <v.icon className="h-6 w-6 text-brand" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section className="border-y border-line bg-card py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="What We Do" title="Our Day-to-Day Business" />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted lg:col-span-3 lg:pt-10">
            <p>
              In practice, SHARMA GLOBAL LLC works as an online retail
              operation. We research the Home &amp; Kitchen market, identify
              products worth offering, and prepare clear, honest product
              listings for online marketplaces.
            </p>
            <p>
              Once products are listed, the marketplace handles the shopping
              experience customers already know — ordering, payment and
              delivery — under its own policies, while we manage the listings
              and respond to customer communication.
            </p>
            <p>
              For a fuller picture of how the business model works, see{" "}
              <a href="/our-business" className="font-semibold text-brand underline underline-offset-2">
                Our Business
              </a>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* Company information card */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Company Information"
            title="At a Glance"
            lede="Key company details. Items awaiting verification are published only after the owner confirms them."
          />
          <dl className="mt-10 grid max-w-3xl grid-cols-1 overflow-hidden rounded-card border border-line sm:grid-cols-2">
            {infoRows.map((row, i) => (
              <div
                key={row.label}
                className={`border-line bg-white px-6 py-5 ${i % 2 === 0 ? "sm:border-r" : ""} ${i < infoRows.length - (infoRows.length % 2 === 0 ? 2 : 1) ? "border-b" : ""}`}
              >
                <dt className="text-xs font-bold tracking-[0.16em] uppercase text-muted">
                  {row.label}
                </dt>
                <dd className="mt-1.5 text-[15px] font-semibold text-ink">
                  {row.value ?? (
                    <span className="font-medium text-muted italic">
                      {row.note ?? "To be confirmed"}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
