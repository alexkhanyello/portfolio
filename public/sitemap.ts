import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cv.alexkhan.site",
      lastModified: new Date(),
    },
    {
      url: "https://cv.alexkhan.site/about",
      lastModified: new Date(),
    },
    {
      url: "https://cv.alexkhan.site/projects",
      lastModified: new Date(),
    },
    {
      url: "https://cv.alexkhan.site/contact",
      lastModified: new Date(),
    },
  ];
}