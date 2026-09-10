import { siteConfig } from "@/data/site.config";
import { socialLinks } from "@/data/links";
import { reviewSummary } from "@/data/testimonials";
import { serviceAreaNames } from "@/data/serviceAreas";
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
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.emergencyPhone,
        contactType: "emergency",
        availableLanguage: "English",
      },
    ],
  };
}

export function buildOrganizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.ogImage}`,
    },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.emergencyPhone,
        contactType: "emergency",
        availableLanguage: "English",
      },
    ],
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

export function buildArticleSchema(article: {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  publishDate: string;
  updatedDate?: string;
  authorName: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.publishDate,
    dateModified: article.updatedDate ?? article.publishDate,
    url: `${siteConfig.url}/resources/knowledge-centre/${article.slug}`,
    author: {
      "@type": "Person",
      name: article.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.ogImage}`,
      },
    },
  };
}

export function buildProjectListSchema(
  projects: { id: string; title: string; category: string; county: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Completed Projects",
    description:
      "Completed solar, borehole, irrigation, plumbing, and electrical installations delivered by Infield Innovations across Kenya.",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: `${siteConfig.url}/resources/projects#${project.id}`,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        creator: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        about: project.category,
        contentLocation: {
          "@type": "Place",
          name: project.county,
          address: {
            "@type": "PostalAddress",
            addressCountry: "Kenya",
            addressRegion: project.county,
          },
        },
      },
    })),
  };
}

export function buildServiceListSchema(
  services: { name: string; description: string; slug: string; image: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Engineering Services",
    description:
      "Integrated water, energy, and engineering solutions offered by Infield Innovations across Kenya.",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      url: `${siteConfig.url}/services/${service.slug}`,
      item: {
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
      },
    })),
  };
}
