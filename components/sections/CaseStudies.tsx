import Link from 'next/link';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { ArrowRight, MapPin } from 'lucide-react';
import { getFeaturedCaseStudies } from '@/data/caseStudies';
import styles from './CaseStudies.module.scss';

export function CaseStudies() {
  const studies = getFeaturedCaseStudies(3);

  return (
    <section className={styles.section} aria-labelledby="case-heading">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Proven Results</p>
        <h2 id="case-heading" className={styles.title}>Featured Case Studies</h2>
        <p className={styles.description}>
          Real projects, real outcomes. See how we&apos;ve delivered measurable results for our clients.
        </p>

        <div className={styles.grid}>
          {studies.map((study) => (
            <article key={study.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <ImageWithFallback
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.image}
                />
                <span className={styles.serviceBadge}>{study.service}</span>
              </div>
              <div className={styles.content}>
                <span className={styles.location}>
                  <MapPin size={14} />
                  {study.location}
                </span>
                <h3 className={styles.title2}>{study.title}</h3>
                <p className={styles.challenge}>{study.challenge}</p>
                <div className={styles.metrics}>
                  {study.metrics.map((m) => (
                    <div key={m.label} className={styles.metric}>
                      <span className={styles.metricValue}>{m.value}</span>
                      <span className={styles.metricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>
                <Link href="/about" className={styles.readMore}>
                  Read case study <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
