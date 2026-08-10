// ============================================
// TestimonialCard Component
// ============================================

import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import type { Testimonial } from '@/data/testimonials';
import { formatDateShort } from '@/lib/utils';
import styles from './TestimonialCard.module.scss';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.quoteIcon}>
        <Quote size={28} />
      </div>
      <div className={styles.rating} aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < testimonial.rating ? styles.starFilled : styles.starEmpty}
            fill={i < testimonial.rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>
      <p className={styles.content}>&ldquo;{testimonial.content}&rdquo;</p>
      <div className={styles.author}>
        <div className={styles.avatar}>
          <ImageWithFallback
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            sizes="48px"
            className={styles.avatarImage}
          />
        </div>
        <div className={styles.authorInfo}>
          <p className={styles.name}>{testimonial.name}</p>
          <p className={styles.role}>
            {testimonial.role}
            {testimonial.company && ` · ${testimonial.company}`}
          </p>
          <p className={styles.date}>{formatDateShort(testimonial.date)}</p>
        </div>
      </div>
    </article>
  );
}
