import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServiceSlugs } from "@/data/services";
import ServiceDetailClient from "./ServiceDetailClient";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.name,
    description: service.description,
    openGraph: {
      title: `${service.name} | Infield Innovations`,
      description: service.description,
      images: [{ url: service.image, alt: service.name }],
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
