import type { Metadata } from 'next';
import { siteConfig } from '@/data/site.config';

export const metadata: Metadata = {
  title: 'Our Projects',
  description:
    'Explore our completed solar, borehole, irrigation, plumbing, and electrical projects across Kenya. See the real-world impact of our engineering solutions.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: `Our Projects | ${siteConfig.name}`,
    description:
      'Explore our completed solar, borehole, irrigation, plumbing, and electrical projects across Kenya.',
    url: `${siteConfig.url}/projects`,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Our Projects | ${siteConfig.name}`,
    description:
      'Explore our completed solar, borehole, irrigation, plumbing, and electrical projects across Kenya.',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
