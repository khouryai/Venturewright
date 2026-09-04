import type { MetadataRoute } from "next";
import { NOINDEX, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Preview deployments are disallowed outright so they never compete with
  // the production domain in search results.
  if (NOINDEX) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
