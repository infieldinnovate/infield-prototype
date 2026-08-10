// components\Header\Header.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import * as Icons from "lucide-react";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/data/site.config";
import { navServices } from "@/data/navServices";
import { LinkButton } from "@/components/ui/LinkButton";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import styles from "./Header.module.scss";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname() || "/";
  const { scrolled } = useScrollDirection();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return (
      pathname === href ||
      pathname.startsWith(href + "/") ||
      pathname.startsWith(href)
    );
  };

  const isServiceActive = () =>
    navServices.some((s) => pathname.startsWith(s.href));

  const renderServiceIcon = (iconName: string) => {
    const Icon =
      (Icons[iconName as keyof typeof Icons] as LucideIcon) || Icons.Wrench;
    return <Icon size={20} strokeWidth={1.8} />;
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
          {navItems
            .filter((item) => item.href !== "/quote")
            .map((item) => {
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

          {/* Services Dropdown */}
          <div className={styles.servicesDropdown}>
            <button
              className={`${styles.navLink} ${styles.servicesTrigger} ${
                isServiceActive() ? styles.active : ""
              }`}
              aria-haspopup="true"
              aria-expanded="false"
              type="button"
            >
              Services
              <ChevronDown size={16} className={styles.servicesChevron} />
            </button>

            <div className={styles.servicesMenu}>
              <div className={styles.servicesGrid}>
                {navServices.map((service) => {
                  const active = pathname.startsWith(service.href);
                  return (
                    <Link
                      key={service.id}
                      href={service.href}
                      className={`${styles.serviceCard} ${
                        active ? styles.serviceCardActive : ""
                      }`}
                    >
                      <div className={styles.serviceCardHeader}>
                        <div className={styles.serviceIconWrap}>
                          {renderServiceIcon(service.icon)}
                        </div>
                        <span className={styles.serviceNumber}>
                          {service.number}
                        </span>
                      </div>
                      <h3 className={styles.serviceTitle}>{service.label}</h3>
                      <ul className={styles.subServicesList}>
                        {service.subServices.map((sub) => (
                          <li key={sub} className={styles.subServiceItem}>
                            {sub}
                          </li>
                        ))}
                      </ul>
                      <span className={styles.serviceLink}>
                        View {service.label}
                        <ArrowRight size={14} />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
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
              {navItems
                .filter((item) => item.href !== "/quote")
                .map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`${styles.mobileNavLink} ${
                        active ? styles.active : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}

              {/* Mobile Services Accordion */}
              <div className={styles.mobileServicesSection}>
                <button
                  className={`${styles.mobileServicesToggle} ${
                    isServiceActive() ? styles.active : ""
                  }`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                  type="button"
                >
                  Services
                  <ChevronDown
                    size={18}
                    className={
                      mobileServicesOpen ? styles.mobileChevronOpen : ""
                    }
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      className={styles.mobileServicesList}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: "hidden" }}
                    >
                      {navServices.map((service) => {
                        const active = pathname.startsWith(service.href);
                        return (
                          <Link
                            key={service.id}
                            href={service.href}
                            className={`${styles.mobileServiceLink} ${
                              active ? styles.active : ""
                            }`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                          >
                            <span className={styles.mobileServiceIcon}>
                              {renderServiceIcon(service.icon)}
                            </span>
                            <span className={styles.mobileServiceName}>
                              {service.label}
                            </span>
                            <ChevronRight size={16} />
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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
