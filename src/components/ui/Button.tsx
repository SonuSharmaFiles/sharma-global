import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-button px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-light focus-visible:outline-brand",
  secondary:
    "border border-line bg-white text-ink hover:border-brand hover:text-brand focus-visible:outline-brand",
  gold: "bg-gold text-white hover:bg-gold/90 focus-visible:outline-gold",
  ghostLight:
    "border border-footer-text/30 text-footer-text hover:bg-footer-text/10 focus-visible:outline-footer-text",
} as const;

type Variant = keyof typeof variants;

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  external = false,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  external?: boolean;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], className)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  type = "button",
  disabled,
}: {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        base,
        variants[variant],
        disabled && "cursor-not-allowed opacity-60",
        className
      )}
    >
      {children}
    </button>
  );
}
