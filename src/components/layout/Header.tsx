import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LogoLockup } from "@/components/ui/Logo";
import { mainNav, contactLink } from "@/config/navigation";
import { MobileNav } from "./MobileNav";

/** Global sticky header with desktop nav and accessible mobile menu. */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <Container className="flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          aria-label="SHARMA GLOBAL LLC — Home"
        >
          <LogoLockup />
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-ink transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link
            href={contactLink.href}
            className="inline-flex items-center rounded-button bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
          >
            {contactLink.label}
          </Link>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
