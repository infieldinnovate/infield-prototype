// ============================================
// Breadcrumbs Component
// ============================================

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { buildBreadcrumbSchema } from '@/lib/structured-data';
import styles from './Breadcrumbs.module.scss';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = buildBreadcrumbSchema(items);

  return (
    <>
      <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
        <ol className={styles.list}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className={styles.item}>
                {item.href && !isLast ? (
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                ) : (
                  <span className={styles.current} aria-current="page">
                    {item.label}
                  </span>
                )}
                {!isLast && <ChevronRight size={14} className={styles.separator} />}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
