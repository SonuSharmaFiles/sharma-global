import { BrandMark } from "@/components/ui/Logo";

/** Branded loading state shown during route transitions. */
export default function Loading() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-label="Loading page"
    >
      <BrandMark className="h-12 w-12 animate-pulse text-brand" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
