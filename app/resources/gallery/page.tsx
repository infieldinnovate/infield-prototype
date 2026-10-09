import type { Metadata } from "next";
import { Suspense } from "react";
import GalleryClient from "./GalleryClient";
import { siteConfig } from "@/data/site.config";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse photos and videos from Infield Innovations' completed solar, borehole, irrigation, plumbing, and electrical projects across Kenya.",
  alternates: {
    canonical: "/resources/gallery",
  },
  openGraph: {
    title: `Project Gallery | ${siteConfig.name}`,
    description:
      "Explore photos and videos of our completed solar, borehole, irrigation, plumbing, and electrical projects across Kenya.",
    url: `${siteConfig.url}/resources/gallery`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: `Project Gallery | ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Project Gallery | ${siteConfig.name}`,
    description:
      "Explore photos and videos of our completed solar, borehole, irrigation, plumbing, and electrical projects across Kenya.",
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
};

export default function GalleryPage() {
  return (
    <Suspense>
      <GalleryClient />
    </Suspense>
  );
}
