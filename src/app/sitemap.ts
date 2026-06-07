import type { MetadataRoute } from "next";
import { practiceAreaDetails } from "@/data/practiceAreaDetails";
import { articles } from "@/data/articles";

const BASE = "https://dr-sandeep-chhatwal.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${BASE}/`, changeFrequency: "weekly" as const, priority: 1.0 },
    {
      url: `${BASE}/about`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE}/practice-areas`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE}/testimonials`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE}/health-articles`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE}/contact`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  const practiceAreaPages = practiceAreaDetails.map((p) => ({
    url: `${BASE}/practice-areas/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articlePages = articles.map((a) => ({
    url: `${BASE}/health-articles/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...practiceAreaPages, ...articlePages];
}
