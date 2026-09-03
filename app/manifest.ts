// app\manifest.ts

import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f6cbd",
    icons: [
      {
        src: "/favicon_io/favicon-32x32.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon_io/favicon-32x32.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
