// ============================================
// SupportCard Component
// ============================================

import Link from 'next/link';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';
import styles from './SupportCard.module.scss';

interface SupportCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  action: string;
  accent?: 'primary' | 'secondary' | 'success' | 'accent';
  external?: boolean;
}

export function SupportCard({
  icon,
  title,
  description,
  href,
  action,
  accent = 'primary',
  external = false,
}: SupportCardProps) {
  const Icon = (Icons[icon as keyof typeof Icons] as React.ComponentType<{
    size?: number;
    strokeWidth?: number;
  }>) || Icons.MessageSquare;

  return (
    <Link
      href={href}
      className={cn(styles.card, styles[accent])}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <div className={styles.iconWrapper}>
        <Icon size={28} strokeWidth={1.8} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.action}>
        {action}
        <Icons.ArrowRight size={16} />
      </span>
    </Link>
  );
}
