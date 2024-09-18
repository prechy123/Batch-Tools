import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: ""
    },
    // sitemap: ""
  };
}
