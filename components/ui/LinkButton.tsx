// ============================================
// LinkButton Component (Next.js Link styled as button)
// ============================================

import Link from 'next/link';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
}

export function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        className
      )}
      {...props}
    >
      {LeftIcon && <span className={styles.icon}><LeftIcon size={18} /></span>}
      <span>{children}</span>
      {RightIcon && <span className={styles.icon}><RightIcon size={18} /></span>}
    </Link>
  );
}
