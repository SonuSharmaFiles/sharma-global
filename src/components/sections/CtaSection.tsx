import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

/** Reusable dark call-to-action band used near page ends. */
export function CtaSection({
  title = "Let's Connect",
  text = "For business inquiries, marketplace-related questions, or general communication, get in touch with SHARMA GLOBAL LLC.",
  buttonLabel = "Contact Our Team",
  buttonHref = "/contact",
}: {
  title?: string;
  text?: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <section className="bg-brand">
      <Container className="flex flex-col items-start gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-footer-text/80 sm:text-lg">
            {text}
          </p>
        </div>
        <ButtonLink href={buttonHref} variant="gold" className="shrink-0">
          {buttonLabel}
        </ButtonLink>
      </Container>
    </section>
  );
}
