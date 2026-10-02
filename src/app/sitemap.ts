import type { MetadataRoute } from "next";
import { CASE_STUDIES, TESTIMONIALS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thehumaneaze.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/learning`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sessions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const testimonialRoutes: MetadataRoute.Sitemap = TESTIMONIALS.map((t) => ({
    url: `${baseUrl}/testimonials/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...testimonialRoutes];
}
