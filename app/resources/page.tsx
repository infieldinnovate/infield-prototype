import type { Metadata } from 'next';
import ResourcesClient from './ResourcesClient';
import { siteConfig } from '@/data/site.config';

export const metadata: Metadata = {
  title: 'Resources & Knowledge Centre',
  description:
    "Explore Infield Innovations' knowledge hub — expert articles, technical guides, product brochures, warranty information, maintenance guides, industry insights, and our complete project process.",
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: `Resources & Knowledge Centre | ${siteConfig.name}`,
    description:
      'Expert articles, technical guides, product brochures, and industry insights to help you make informed decisions about your engineering projects.',
    url: `${siteConfig.url}/resources`,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Resources & Knowledge Centre | ${siteConfig.name}`,
    description:
      'Expert articles, technical guides, product brochures, and industry insights to help you make informed decisions about your engineering projects.',
  },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
