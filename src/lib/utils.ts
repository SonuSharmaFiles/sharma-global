/** Tiny class-name combiner — keeps component markup readable. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
