// ============================================
// CTA Component (Call to Action)
// ============================================

import { Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site.config';
import { LinkButton } from '@/components/ui/LinkButton';
import styles from './CTA.module.scss';

interface CTAProps {
  title?: string;
  description?: string;
}

export function CTA({
  title = 'Ready to Start Your Project?',
  description = 'Get a free, no-obligation quote today. Our expert team is standing by to help with your electrical, plumbing, solar, irrigation, or borehole needs.',
}: CTAProps) {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            <LinkButton href="/quote" size="lg" rightIcon={<ArrowRight size={20} />}>
              Request a Free Quote
            </LinkButton>
            <a href={siteConfig.phoneHref} className={styles.phoneCta}>
              <Phone size={20} />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
