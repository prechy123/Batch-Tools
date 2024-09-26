import { MetadataRoute } from "next";
import { tools } from "./tools";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const toolEntries: MetadataRoute.Sitemap = tools.map(({ name }) => ({
    url: `https://batchtools.site/tool/${name}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  }));

  return [
    {
      url: "https://batchtools.site/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...toolEntries,
  ];
}
