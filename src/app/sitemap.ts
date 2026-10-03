import type { MetadataRoute } from "next";
import { company } from "@/config/company";

export const dynamic = "force-static";

/** XML sitemap for search engines — public pages only. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: Array<{ path: string; priority: number }> = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.9 },
    { path: "/our-business", priority: 0.8 },
    { path: "/marketplaces", priority: 0.8 },
    { path: "/founder", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms-of-service", priority: 0.3 },
    { path: "/disclaimer", priority: 0.3 },
    { path: "/sitemap", priority: 0.2 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${company.siteUrl}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
