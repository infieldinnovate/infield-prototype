import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";
import { siteConfig } from "@/data/site.config";

export const metadata: Metadata = {
  title: "Resources & Knowledge Centre",
  description:
    "Explore Infield Innovations' knowledge hub — expert articles, technical guides, product brochures, warranty information, maintenance guides, industry insights, and our complete project process.",
  keywords: [
    "engineering knowledge centre",
    "engineering articles kenya",
    "technical engineering guides",
    "solar guides",
    "borehole guides",
    "irrigation guides",
  ],
  alternates: {
    canonical: "/resources/knowledge-centre",
  },
  openGraph: {
    title: `Resources & Knowledge Centre | ${siteConfig.name}`,
    description:
      "Expert articles, technical guides, product brochures, and industry insights to help you make informed decisions about your engineering projects.",
    url: `${siteConfig.url}/resources/knowledge-centre`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Resources & Knowledge Centre | ${siteConfig.name}`,
    description:
      "Expert articles, technical guides, product brochures, and industry insights to help you make informed decisions about your engineering projects.",
  },
};

export default function KnowledgeCentrePage() {
  return <ResourcesClient />;
}
