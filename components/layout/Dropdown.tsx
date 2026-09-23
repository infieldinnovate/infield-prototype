"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, ArrowRight, type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import styles from "./Header.module.scss";

export interface DropdownItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  description: string;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
  isActive: () => boolean;
}

export function Dropdown({ label, items, isActive }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname() || "/";

  useLockBodyScroll(isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className={styles.servicesDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`${styles.navLink} ${styles.servicesTrigger} ${
          isActive() ? styles.active : ""
        } ${isOpen ? styles.triggerOpen : ""}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
        onClick={handleClick}
      >
        {label}
        <ChevronDown
          size={16}
          className={cn(styles.servicesChevron, isOpen && styles.chevronOpen)}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.servicesMenu}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <button
              className={styles.closeButton}
              onClick={close}
              aria-label={`Close ${label.toLowerCase()} menu`}
              type="button"
            >
              <X size={22} />
            </button>

            <div className={styles.servicesGrid}>
              {items.map((item) => {
                const Icon = item.icon;
                const active = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`${styles.serviceCard} ${
                      active ? styles.serviceCardActive : ""
                    }`}
                    onClick={close}
                  >
                    <div className={styles.serviceCardHeader}>
                      <div className={styles.serviceIconWrap}>
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                    </div>
                    <h3 className={styles.serviceTitle}>{item.label}</h3>
                    <p className={styles.subServiceItem}>{item.description}</p>
                    <span className={styles.serviceLink}>
                      View {item.label}
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
