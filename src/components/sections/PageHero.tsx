import { Container } from "@/components/ui/Container";

/** Shared editorial hero for interior pages. */
export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="border-b border-line bg-cream">
      <Container className="py-16 sm:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-4 text-xs font-bold tracking-[0.22em] uppercase text-gold">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-balance text-ink sm:text-5xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {lede}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
