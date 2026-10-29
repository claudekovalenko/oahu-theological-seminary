import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { degrees } from "@/content/degrees";
import { courses } from "@/content/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const statics = ["", "/about", "/degrees", "/faculty", "/calendar", "/articles", "/admissions", "/courses", "/community", "/contact", "/start", "/start/apply"];
  return [
    ...statics.map((p) => ({ url: `${base}${p}`, changeFrequency: "monthly" as const })),
    ...degrees.map((d) => ({ url: `${base}/degrees/${d.slug}`, changeFrequency: "yearly" as const })),
    ...courses.map((c) => ({ url: `${base}/courses/${c.slug}`, changeFrequency: "monthly" as const })),
  ];
}
