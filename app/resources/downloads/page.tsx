import type { Metadata } from "next";
import DownloadsClient from "./DownloadsClient";
import { siteConfig } from "@/data/site.config";

export const metadata: Metadata = {
  title: "Downloads & Resource Library",
  description:
    "Download brochures, technical datasheets, warranty information, and maintenance guides from Infield Innovations. Everything you need to make informed decisions about your engineering projects.",
  alternates: {
    canonical: "/resources/downloads",
  },
  openGraph: {
    title: `Downloads & Resource Library | ${siteConfig.name}`,
    description:
      "Download brochures, technical datasheets, warranty information, and maintenance guides to help you make informed decisions about your engineering projects.",
    url: `${siteConfig.url}/resources/downloads`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Downloads & Resource Library | ${siteConfig.name}`,
    description:
      "Download brochures, technical datasheets, warranty information, and maintenance guides to help you make informed decisions about your engineering projects.",
  },
};

export default function DownloadsPage() {
  return <DownloadsClient />;
}
