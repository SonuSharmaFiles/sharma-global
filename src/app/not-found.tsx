import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/Logo";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-cream">
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <BrandMark className="h-14 w-14 text-brand" />
        <p className="mt-8 text-xs font-bold tracking-[0.22em] uppercase text-gold">
          Error 404
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          The page you&apos;re looking for may have been moved or never
          existed. Let&apos;s get you back somewhere useful.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <ButtonLink href="/sitemap" variant="secondary">
            View Sitemap
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
