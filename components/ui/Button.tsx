// ============================================
// Button Component
// ============================================

import { forwardRef } from 'react';
import { Loader2, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  fullWidth?: boolean;
}

export const buttonVariants = (variant: ButtonVariant = 'primary', size: ButtonSize = 'md') =>
  cn(styles.button, styles[variant], styles[size]);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          styles.button,
          styles[variant],
          styles[size],
          fullWidth && styles.fullWidth,
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className={styles.spinner} size={16} aria-hidden="true" />}
        {!loading && LeftIcon && <span className={styles.icon}><LeftIcon size={18} /></span>}
        <span>{children}</span>
        {!loading && RightIcon && <span className={styles.icon}><RightIcon size={18} /></span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
