import type { Metadata } from "next";
import { siteConfig } from "@/data/site.config";
import { SERVICES } from "@/data/services";
import { buildServiceListSchema } from "@/lib/structured-data";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Infield Innovations' full range of engineering services — solar energy, electrical, plumbing, borehole drilling, water storage, water harvesting, and irrigation systems across Kenya.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Our Services | ${siteConfig.name}`,
    description:
      "Integrated water, energy, and engineering solutions for homes, businesses, and institutions across Kenya.",
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Services | ${siteConfig.name}`,
    description:
      "Integrated water, energy, and engineering solutions for homes, businesses, and institutions across Kenya.",
  },
};

export default function ServicesPage() {
  const jsonLd = buildServiceListSchema(SERVICES);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesPageClient />
    </>
  );
}
