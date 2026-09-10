import type { Metadata } from 'next';
import { siteConfig } from '@/data/site.config';
import { projects } from '@/data/projectStats';
import { buildProjectListSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Our Projects',
  description:
    'Explore our completed solar, borehole, irrigation, plumbing, and electrical projects across Kenya. See the real-world impact of our engineering solutions.',
  alternates: {
    canonical: '/resources/projects',
  },
  openGraph: {
    title: `Our Projects | ${siteConfig.name}`,
    description:
      'Explore our completed solar, borehole, irrigation, plumbing, and electrical projects across Kenya.',
    url: `${siteConfig.url}/resources/projects`,
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
  const jsonLd = buildProjectListSchema(projects);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
