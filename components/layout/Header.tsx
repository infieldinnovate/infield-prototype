// components\Header\Header.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/data/site.config";
import { LinkButton } from "@/components/ui/LinkButton";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import styles from "./Header.module.scss";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname() || "/";
  const { scrolled } = useScrollDirection();

  // returns true if link should be considered active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    // for non-root routes, mark active when pathname equals or startsWith href
    return (
      pathname === href ||
      pathname.startsWith(href + "/") ||
      pathname.startsWith(href)
    );
  };

  return (
    <header
      className={cn(styles.header, scrolled && styles.scrolled)}
      role="banner"
    >
      {/* Main Navigation */}
      <nav
        className={styles.navbar}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className={styles.logo}
          aria-label="Infield Innovations home"
        >
          <ImageWithFallback
            src="/logo.png"
            alt="Infield Innovations Limited"
            width={200}
            height={90}
            className={styles.logoImage}
            loading="eager"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${active ? styles.active : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className={styles.actions}>
          <a href={siteConfig.phoneHref} className={styles.phoneLink}>
            <Phone size={18} />
            <span>{siteConfig.phone}</span>
          </a>
          <LinkButton href="/quote" size="sm" rightIcon={<span>→</span>}>
            Get a Quote
          </LinkButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24 }}
          >
            <div className={styles.mobileMenuContent}>
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${styles.mobileNavLink} ${active ? styles.active : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/quote"
                className={styles.mobileQuoteButton}
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
