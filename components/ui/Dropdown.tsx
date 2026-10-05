"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { ChevronDown, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "./Dropdown.module.scss";

export interface DropdownOption<T extends string> {
  value: T;
  label: string;
  icon?: ReactNode;
}

interface DropdownProps<T extends string> {
  options: DropdownOption<T>[];
  value: T;
  onChange: (value: T) => void;
  ariaLabel?: string;
  className?: string;
}

export function Dropdown<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  className,
}: DropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        close();
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, close]);

  const handleSelect = (val: T) => {
    onChange(val);
    close();
  };

  return (
    <div ref={containerRef} className={cn(styles.wrapper, className)}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((p) => !p)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
      >
        <span className={styles.triggerContent}>
          {selected?.icon && (
            <span className={styles.triggerIcon}>{selected.icon}</span>
          )}
          <span className={styles.triggerLabel}>{selected?.label}</span>
        </span>
        <ChevronDown
          size={18}
          className={cn(styles.chevron, open && styles.chevronOpen)}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className={styles.menu}
            role="listbox"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {options.map((option) => {
              const isActive = option.value === value;
              return (
                <li key={option.value} role="option" aria-selected={isActive}>
                  <button
                    type="button"
                    className={cn(
                      styles.option,
                      isActive && styles.optionActive,
                    )}
                    onClick={() => handleSelect(option.value)}
                  >
                    {option.icon && (
                      <span className={styles.optionIcon}>{option.icon}</span>
                    )}
                    <span>{option.label}</span>
                    {isActive && <Check size={16} className={styles.check} />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
