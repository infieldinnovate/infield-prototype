import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServiceSlugs } from "@/data/services";
import { siteConfig } from "@/data/site.config";
import { buildServiceSchema } from "@/lib/structured-data";
import ServiceDetailClient from "./ServiceDetailClient";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.name,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} | ${siteConfig.name}`,
      description: service.description,
      url: `${siteConfig.url}/services/${service.slug}`,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: service.image, alt: service.name, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | ${siteConfig.name}`,
      description: service.description,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const jsonLd = buildServiceSchema(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailClient service={service} />
    </>
  );
}
