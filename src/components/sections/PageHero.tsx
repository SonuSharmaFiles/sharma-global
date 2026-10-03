import { Container } from "@/components/ui/Container";
import { CornerOrnament } from "@/components/illustrations/Illustrations";

/** Shared editorial hero for interior pages, with a decorative corner motif. */
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
    <section className="relative overflow-hidden border-b border-line bg-cream">
      <CornerOrnament className="pointer-events-none absolute top-0 right-0 h-full w-72 sm:w-96" />
      <Container className="relative py-16 sm:py-24">
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
