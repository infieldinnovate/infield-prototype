'use client';

// ============================================
// ArticleCard Component
// ============================================

import Link from 'next/link';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import type { Article } from '@/data/articles';
import { getArticleAuthorName } from '@/data/articles';
import { formatDateShort } from '@/lib/utils';
import styles from './ArticleCard.module.scss';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  index?: number;
}

export function ArticleCard({ article, featured = false, index = 0 }: ArticleCardProps) {
  return (
    <motion.article
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/resources/${article.slug}`} className={styles.link}>
        <div className={styles.imageWrapper}>
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            fill
            sizes={featured ? '(max-width: 768px) 100vw, 60vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
            className={styles.image}
          />
          <span className={styles.categoryBadge}>{article.category}</span>
          {featured && <span className={styles.featuredBadge}>Featured</span>}
        </div>
        <div className={styles.content}>
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <Calendar size={14} />
              {formatDateShort(article.publishDate)}
            </span>
            <span className={styles.metaItem}>
              <Clock size={14} />
              {article.readingTime}
            </span>
          </div>
          <h3 className={styles.title}>{article.title}</h3>
          <p className={styles.excerpt}>{article.excerpt}</p>
          <div className={styles.footer}>
            <span className={styles.author}>By {getArticleAuthorName(article)}</span>
            <span className={styles.readMore}>
              Read More <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
