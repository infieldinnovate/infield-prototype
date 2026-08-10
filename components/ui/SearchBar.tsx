'use client';

// ============================================
// SearchBar Component
// ============================================

import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

export function SearchBar({
  value,
  onChange,
  placeholder = 'Search...',
  className,
  autoFocus = false,
}: SearchBarProps) {
  return (
    <div className={cn(styles.searchBar, className)}>
      <Search className={styles.icon} size={20} aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
        aria-label={placeholder}
        autoFocus={autoFocus}
      />
      {value && (
        <button
          className={styles.clearButton}
          onClick={() => onChange('')}
          aria-label="Clear search"
          type="button"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
