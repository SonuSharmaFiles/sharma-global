import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=1 builds a fully static site (for GitHub Pages).
 * BASE_PATH is the sub-path the site is served from, e.g. "/sharma-global"
 * on https://<user>.github.io/sharma-global. Both are set by the deploy
 * workflow in .github/workflows/deploy.yml; local dev needs neither.
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.BASE_PATH ?? "";

/** Security headers (server/Vercel deployments only — static hosts ignore them). */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Static hosts have no image optimizer; serve images as-is everywhere
  // so dev, Vercel and GitHub Pages all behave the same.
  images: { unoptimized: true },
  ...(isStaticExport
    ? {
        output: "export" as const,
        // folder/index.html URLs so page refreshes work on static hosts
        trailingSlash: true,
        ...(basePath ? { basePath } : {}),
      }
    : {
        async headers() {
          return [{ source: "/(.*)", headers: securityHeaders }];
        },
      }),
};

export default nextConfig;
