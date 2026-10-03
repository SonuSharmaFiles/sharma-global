"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { mainNav, contactLink } from "@/config/navigation";

/**
 * Accessible mobile navigation:
 * - toggle button with aria-expanded/aria-controls
 * - closes on Escape, on route change, and after selecting a link
 * - focus returns to the toggle button when closed with Escape
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close when the route changes (link was followed) — state is
  // adjusted during render, per React's recommended pattern.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (open) setOpen(false);
  }

  // Close on Escape and lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-button border border-line text-ink transition-colors hover:border-brand hover:text-brand"
      >
        {open ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-[72px] max-h-[calc(100dvh-72px)] overflow-y-auto border-b border-line bg-white shadow-lifted"
      >
        <nav aria-label="Mobile navigation" className="px-5 py-6">
          <ul className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-button px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-cream hover:text-brand"
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={contactLink.href}
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center rounded-button bg-brand px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
          >
            {contactLink.label}
          </Link>
        </nav>
      </div>
    </div>
  );
}
