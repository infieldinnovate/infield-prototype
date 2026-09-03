import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site.config';
import { getServiceSlugs } from '@/data/services';
import { articles } from '@/data/articles';

const STATIC_LAST_MODIFIED = '2026-09-01';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const, lastModified: STATIC_LAST_MODIFIED },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: STATIC_LAST_MODIFIED },
    { url: '/services', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: STATIC_LAST_MODIFIED },
    { url: '/resources/knowledge-centre', priority: 0.9, changeFrequency: 'weekly' as const, lastModified: STATIC_LAST_MODIFIED },
    { url: '/resources/projects', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: STATIC_LAST_MODIFIED },
    { url: '/resources/downloads', priority: 0.7, changeFrequency: 'weekly' as const, lastModified: STATIC_LAST_MODIFIED },
    { url: '/resources/faq', priority: 0.7, changeFrequency: 'weekly' as const, lastModified: STATIC_LAST_MODIFIED },
    { url: '/quote', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: STATIC_LAST_MODIFIED },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: STATIC_LAST_MODIFIED },
  ];

  const servicePages = getServiceSlugs().map((slug) => ({
    url: `/services/${slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    lastModified: STATIC_LAST_MODIFIED,
  }));

  const articlePages = articles.map((article) => ({
    url: `/resources/knowledge-centre/${article.slug}`,
    priority: 0.6,
    changeFrequency: 'monthly' as const,
    lastModified: article.publishDate,
  }));

  return [...staticPages, ...servicePages, ...articlePages].map((page) => ({
    url: `${siteConfig.url}${page.url}`,
    lastModified: new Date(page.lastModified),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
