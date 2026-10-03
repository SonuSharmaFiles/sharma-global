import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { company, formatPolicyDate } from "@/config/company";

/**
 * Shared layout for legal pages: hero, effective dates, and a
 * readable single-column prose area.
 */
export function LegalLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="border-b border-line bg-cream">
        <Container className="py-14 sm:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold tracking-[0.22em] uppercase text-gold">
              Legal
            </p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              {title}
            </h1>
            {intro && (
              <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>
            )}
            <p className="mt-6 text-sm text-muted">
              Effective date: {formatPolicyDate(company.policyEffectiveDate)}
              {" · "}
              Last updated: {formatPolicyDate(company.policyLastUpdated)}
            </p>
          </div>
        </Container>
      </section>
      <Container className="py-12 sm:py-16">
        <div className="legal-prose max-w-3xl">{children}</div>
      </Container>
    </>
  );
}

/** Numbered legal section with a consistent heading style. */
export function LegalSection({
  number,
  title,
  children,
}: {
  number?: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
        {number !== undefined && (
          <span className="mr-2 text-gold">{number}.</span>
        )}
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink/80 [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-ink">
        {children}
      </div>
    </section>
  );
}

/** Highlighted note for details the owner must verify before launch. */
export function VerifyNote({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-card border border-gold/40 bg-gold/5 px-4 py-3 text-sm text-ink/80">
      <strong className="font-semibold text-gold">
        To be confirmed before publication:{" "}
      </strong>
      {children}
    </p>
  );
}
