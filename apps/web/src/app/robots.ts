import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/dashboard", "/settings", "/api"],
    },
    sitemap: "https://utkarshtripathi.com/sitemap.xml",
    host: "utkarshtripathi.com",
  };
}
