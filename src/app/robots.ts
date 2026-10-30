import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  // While this is an unapproved prototype, avoid search indexing.
  return { rules: [{ userAgent: "*", disallow: "/" }] };
}
