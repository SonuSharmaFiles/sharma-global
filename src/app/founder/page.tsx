import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FounderPortrait } from "@/components/sections/FounderPortrait";
import { CtaSection } from "@/components/sections/CtaSection";
import { company } from "@/config/company";
import { buildMetadata, founderJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Founder & CEO — Dipak Sharma",
  description:
    "Meet Dipak Sharma, Founder and CEO of SHARMA GLOBAL LLC — leading the company's vision for a customer-focused Home & Kitchen e-commerce business.",
  path: "/founder",
});

const leadershipPrinciples = [
  "Building with a long-term perspective",
  "Learning and adapting to digital commerce",
  "Maintaining transparent business practices",
  "Prioritizing useful products and customer needs",
  "Developing a responsible and sustainable business",
];

export default function FounderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJsonLd()) }}
      />

      {/* Hero */}
      <section className="border-b border-line bg-cream">
        <Container className="grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-5 lg:py-28">
          <FounderPortrait className="aspect-[4/5] w-full max-w-md lg:col-span-2" />
          <div className="lg:col-span-3">
            <p className="mb-4 text-xs font-bold tracking-[0.22em] uppercase text-gold">
              Leadership
            </p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              {company.founder.name}
            </h1>
            <p className="mt-3 font-display text-xl font-semibold text-brand">
              {company.founder.title}
            </p>
            <dl className="mt-8 grid max-w-md grid-cols-2 gap-6">
              <div>
                <dt className="text-xs font-bold tracking-[0.18em] uppercase text-muted">
                  Company
                </dt>
                <dd className="mt-1 text-[15px] font-semibold text-ink">
                  {company.legalName}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-[0.18em] uppercase text-muted">
                  Based In
                </dt>
                <dd className="mt-1 text-[15px] font-semibold text-ink">
                  {company.founder.location}
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      {/* Biography */}
      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Biography" title="About Dipak" />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted lg:col-span-3 lg:pt-10">
            <p>
              Dipak Sharma is the Founder and Chief Executive Officer of
              SHARMA GLOBAL LLC. Based in Nepal, he leads the company&apos;s
              vision to build an e-commerce business focused on practical Home
              &amp; Kitchen products and digital marketplace operations.
            </p>
            <p>
              Through SHARMA GLOBAL LLC, Dipak aims to develop a sustainable
              business, strengthen its digital commerce capabilities, and
              create long-term value through thoughtful product selection and
              customer-focused practices.
            </p>
          </div>
        </Container>
      </section>

      {/* Leadership philosophy */}
      <section className="border-y border-line bg-cream py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Leadership Philosophy"
            title="The Principles Behind the Business"
            lede="Five commitments that shape how the company is led."
          />
          <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipPrinciples.map((principle, i) => (
              <li
                key={principle}
                className="flex items-start gap-4 rounded-card border border-line bg-white p-6"
              >
                <span
                  className="font-display text-2xl font-extrabold text-gold"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 text-[15px] leading-relaxed font-semibold text-ink">
                  {principle}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Founder's message */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <div className="relative rounded-card bg-brand p-8 sm:p-12">
            <Quote
              className="absolute top-8 right-8 h-10 w-10 text-brand-light"
              aria-hidden="true"
            />
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-gold-soft">
              A Message from the Founder
            </p>
            <blockquote className="mt-6 font-display text-xl leading-relaxed font-medium text-white sm:text-2xl">
              &ldquo;At SHARMA GLOBAL LLC, our goal is to build a business
              grounded in thoughtful decisions, practical products, and
              customer trust. We see e-commerce as an opportunity to connect
              useful everyday products with people through accessible digital
              marketplaces. As we grow, we aim to stay focused on
              transparency, continuous learning, and long-term value.&rdquo;
            </blockquote>
            <p className="mt-8 font-semibold text-footer-text">
              {company.founder.name}
            </p>
            <p className="text-sm text-footer-text/70">
              {company.founder.title}, {company.legalName}
            </p>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Connect with Our Team"
        text="Business partners, suppliers and marketplace contacts are welcome to reach out directly."
      />
    </>
  );
}
