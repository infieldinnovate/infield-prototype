import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { siteConfig } from '@/data/site.config';
import { getServiceBySlug } from '@/data/services';
import styles from './quote.module.scss';

export const metadata: Metadata = {
  title: 'Request a Quote',
  description:
    'Request a free, no-obligation quote for electrical, plumbing, solar, irrigation, or borehole services. Our team will respond within 1 business day.',
  alternates: {
    canonical: '/quote',
  },
  openGraph: {
    title: `Request a Quote | ${siteConfig.name}`,
    description:
      'Request a free, no-obligation quote for electrical, plumbing, solar, irrigation, or borehole services. Our team will respond within 1 business day.',
    url: `${siteConfig.url}/quote`,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Request a Quote | ${siteConfig.name}`,
    description:
      'Request a free, no-obligation quote for electrical, plumbing, solar, irrigation, or borehole services.',
  },
};

export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const params = await searchParams;
  const service = params.service ? getServiceBySlug(params.service) : undefined;
  const defaultServiceType = service?.shortName;

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Quote Request' }]} />
          <SectionHeading
            level="h1"
            eyebrow="Free Quote"
            title="Request a Free Quote"
            description="Tell us about your project and we'll provide a detailed, no-obligation quote. The more details you provide, the more accurate your estimate will be."
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <QuoteForm defaultServiceType={defaultServiceType} />
          </div>
        </div>
      </section>
    </>
  );
}
