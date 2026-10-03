"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BrandMark } from "@/components/ui/Logo";

/** Branded error boundary for unexpected runtime errors. */
export default function ErrorBoundary({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="bg-cream">
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <BrandMark className="h-14 w-14 text-brand" />
        <p className="mt-8 text-xs font-bold tracking-[0.22em] uppercase text-gold">
          Something went wrong
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          An unexpected error occurred
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          Sorry about that. You can try again, or head back to the homepage.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-button bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-button border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
