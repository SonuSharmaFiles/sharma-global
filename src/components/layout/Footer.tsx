import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LogoLockup } from "@/components/ui/Logo";
import { company } from "@/config/company";
import { footerCompanyNav, footerInfoNav } from "@/config/navigation";
import { marketplaces } from "@/config/marketplaces";

/** Global multi-column footer shared across every page. */
export function Footer() {
  const year = new Date().getFullYear();
  const verifiedMarketplaces = marketplaces.filter((m) => m.url);
  const socialEntries = [
    { label: "LinkedIn", url: company.social.linkedin },
    { label: "Facebook", url: company.social.facebook },
    { label: "Instagram", url: company.social.instagram },
  ].filter((s) => s.url);

  return (
    <footer className="bg-footer text-footer-text">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — brand */}
          <div>
            <Link
              href="/"
              className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-footer-text"
              aria-label="SHARMA GLOBAL LLC — Home"
            >
              <LogoLockup variant="light" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-footer-text/70">
              An e-commerce company focused on practical Home &amp; Kitchen
              products, sold through established online marketplaces.
            </p>
          </div>

          {/* Column 2 — company */}
          <nav aria-label="Company links">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gold-soft">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerCompanyNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-footer-text/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — information */}
          <nav aria-label="Information links">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gold-soft">
              Information
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerInfoNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-footer-text/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4 — connect (verified details only) */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gold-soft">
              Connect
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-footer-text/80">
              {company.businessEmail ? (
                <li>
                  <a
                    href={`mailto:${company.businessEmail}`}
                    className="transition-colors hover:text-white"
                  >
                    {company.businessEmail}
                  </a>
                </li>
              ) : (
                <li className="text-footer-text/50">
                  Official contact details coming soon
                </li>
              )}
              {company.businessPhones.map((p) => (
                <li key={p.number}>
                  <a
                    href={`tel:${p.number.replace(/[^+\d]/g, "")}`}
                    className="transition-colors hover:text-white"
                  >
                    {p.number} ({p.label})
                  </a>
                </li>
              ))}
              {socialEntries.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              {verifiedMarketplaces.map((m) => (
                <li key={m.id}>
                  <a
                    href={m.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {m.name} Store
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-footer-text/15 pt-7 text-xs text-footer-text/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {company.legalName}. All rights reserved.
          </p>
          <Link href="/sitemap" className="transition-colors hover:text-white">
            Sitemap
          </Link>
        </div>
      </Container>
    </footer>
  );
}
