import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alexkhan.site",
      lastModified: new Date(),
    },
    {
      url: "https://alexkhan.site/about",
      lastModified: new Date(),
    },
    {
      url: "https://alexkhan.site/projects",
      lastModified: new Date(),
    },
    {
      url: "https://alexkhan.site/contact",
      lastModified: new Date(),
    },
  ];
}
