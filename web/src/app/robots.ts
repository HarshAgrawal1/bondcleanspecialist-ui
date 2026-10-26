import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/bcs-ops", "/bcs-ops/", "/api/bcs-ops"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
