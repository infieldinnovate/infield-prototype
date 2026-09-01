import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site.config';
import { getServiceSlugs } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/resources/knowledge-centre', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/resources/projects', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/downloads', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/resources/faq', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/quote', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const servicePages = getServiceSlugs().map((slug) => ({
    url: `/services/${slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticPages, ...servicePages].map((page) => ({
    url: `${siteConfig.url}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
