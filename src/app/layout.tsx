import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/config/company";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: company.seo.defaultTitle,
    template: company.seo.titleTemplate,
  },
  description: company.seo.defaultDescription,
  applicationName: company.legalName,
  ...(company.googleSiteVerification
    ? { verification: { google: company.googleSiteVerification } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = [organizationJsonLd(), webSiteJsonLd()];

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
