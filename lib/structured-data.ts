import { siteConfig, socialLinks } from "@/data/site.config";
import { reviewSummary } from "@/data/testimonials";
import { serviceAreaNames } from "@/data/impactStats";
import type { BreadcrumbItem } from "@/components/ui/Breadcrumbs";

type JsonLd = Record<string, unknown>;

export function buildLocalBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}#localbusiness`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    priceRange: "KSh",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      address: siteConfig.address.city,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    areaServed: serviceAreaNames,
    sameAs: Object.values(socialLinks).map((social) => social.link),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewSummary.averageRating,
      reviewCount: reviewSummary.totalReviews,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function buildOrganizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.ogImage}`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    sameAs: Object.values(socialLinks).map((social) => social.link),
  };
}

export function buildWebSiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    inLanguage: "en-KE",
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
    })),
  };
}

export function buildServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
  image: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    image: service.image,
    url: `${siteConfig.url}/services/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
    },
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
  };
}

export function buildFAQSchema(
  faqs: { question: string; answer: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
