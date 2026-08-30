// components\Header\Header.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site.config";
import { navLinks } from "@/data/links";
import { servicesNavItems } from "@/data/links";
import { resourcesNavItems } from "@/data/links";
import { LinkButton } from "@/components/ui/LinkButton";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import styles from "./Header.module.scss";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { ServiceIcons } from "@/data/service-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const pathname = usePathname() || "/";
  const { scrolled } = useScrollDirection();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resourcesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  useLockBodyScroll(isServicesOpen || isResourcesOpen || isMenuOpen);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return (
      pathname === href ||
      pathname.startsWith(href + "/") ||
      pathname.startsWith(href)
    );
  };

  const isServiceActive = () =>
    servicesNavItems.some((s) => pathname.startsWith(s.href));

  const isResourceActive = () =>
    resourcesNavItems.some(
      (r) => pathname === r.href || pathname.startsWith(r.href + "/"),
    );

  // Close dropdown on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsResourcesOpen(false);
    setIsMenuOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsServicesOpen(false);
        setIsResourcesOpen(false);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleServicesClick = () => {
    setIsServicesOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsServicesOpen(false);
  };

  const handleMouseEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  const handleResourcesClick = () => {
    setIsResourcesOpen((prev) => !prev);
  };

  const closeResourcesDropdown = () => {
    setIsResourcesOpen(false);
  };

  const handleResourcesMouseEnter = () => {
    if (resourcesCloseTimer.current) {
      clearTimeout(resourcesCloseTimer.current);
      resourcesCloseTimer.current = null;
    }
    setIsResourcesOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    resourcesCloseTimer.current = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 200);
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
          {navLinks
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
          <div
            className={styles.servicesDropdown}
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`${styles.navLink} ${styles.servicesTrigger} ${
                isServiceActive() ? styles.active : ""
              } ${isServicesOpen ? styles.triggerOpen : ""}`}
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
              type="button"
              onClick={handleServicesClick}
            >
              Services
              <ChevronDown
                size={16}
                className={cn(
                  styles.servicesChevron,
                  isServicesOpen && styles.chevronOpen,
                )}
              />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  className={styles.servicesMenu}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <button
                    className={styles.closeButton}
                    onClick={closeDropdown}
                    aria-label="Close services menu"
                    type="button"
                  >
                    <X size={22} />
                  </button>

                  <div className={styles.servicesGrid}>
                    {servicesNavItems.map((service) => {
                      const active = pathname.startsWith(service.href);
                      const Icon = ServiceIcons[service.icon];
                      return (
                        <Link
                          key={service.id}
                          href={service.href}
                          className={`${styles.serviceCard} ${
                            active ? styles.serviceCardActive : ""
                          }`}
                          onClick={closeDropdown}
                        >
                          <div className={styles.serviceCardHeader}>
                            <div className={styles.serviceIconWrap}>
                              <Icon size={20} strokeWidth={1.8} />
                            </div>
                          </div>
                          <h3 className={styles.serviceTitle}>
                            {service.label}
                          </h3>
                          <ul className={styles.subServicesList}>
                            <li className={styles.subServiceItem}>
                              {service.tagline}
                            </li>
                          </ul>
                          <span className={styles.serviceLink}>
                            View {service.label}
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

          {/* Resources Dropdown */}
          <div
            className={styles.servicesDropdown}
            ref={resourcesDropdownRef}
            onMouseEnter={handleResourcesMouseEnter}
            onMouseLeave={handleResourcesMouseLeave}
          >
            <button
              className={`${styles.navLink} ${styles.servicesTrigger} ${
                isResourceActive() ? styles.active : ""
              } ${isResourcesOpen ? styles.triggerOpen : ""}`}
              aria-haspopup="true"
              aria-expanded={isResourcesOpen}
              type="button"
              onClick={handleResourcesClick}
            >
              Resources
              <ChevronDown
                size={16}
                className={cn(
                  styles.servicesChevron,
                  isResourcesOpen && styles.chevronOpen,
                )}
              />
            </button>

            <AnimatePresence>
              {isResourcesOpen && (
                <motion.div
                  className={styles.servicesMenu}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <button
                    className={styles.closeButton}
                    onClick={closeResourcesDropdown}
                    aria-label="Close resources menu"
                    type="button"
                  >
                    <X size={22} />
                  </button>

                  <div className={styles.servicesGrid}>
                    {resourcesNavItems.map((item) => {
                      const active =
                        pathname === item.href ||
                        pathname.startsWith(item.href + "/");
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.id}
                          href={item.href}
                          className={`${styles.serviceCard} ${
                            active ? styles.serviceCardActive : ""
                          }`}
                          onClick={closeResourcesDropdown}
                        >
                          <div className={styles.serviceCardHeader}>
                            <div className={styles.serviceIconWrap}>
                              <Icon size={20} strokeWidth={1.8} />
                            </div>
                          </div>
                          <h3 className={styles.serviceTitle}>{item.label}</h3>
                          <p className={styles.subServiceItem}>
                            {item.description}
                          </p>
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
        </div>

        {/* Desktop Actions (phone + quote) */}
        <div className={styles.actions}>
          <a href={siteConfig.phoneHref} className={styles.phoneLink}>
            <Phone size={18} />
            <span>{siteConfig.phone}</span>
          </a>
        </div>

        {/* Get Quote — visible from 320px upward */}
        <LinkButton
          href="/quote"
          size="sm"
          className={styles.quoteBtn}
          rightIcon={<span>→</span>}
        >
          Get a Quote
        </LinkButton>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          type="button"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={40} />}
        </button>
      </nav>

      {/* Mobile Menu — full screen below navbar, internally scrollable */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.mobileMenuContent}>
              {navLinks
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
                      {servicesNavItems.map((service) => {
                        const active = pathname.startsWith(service.href);
                        const Icon = ServiceIcons[service.icon];

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
                              <Icon size={20} strokeWidth={1.8} />
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

              {/* Mobile Resources Accordion */}
              <div className={styles.mobileServicesSection}>
                <button
                  className={`${styles.mobileServicesToggle} ${
                    isResourceActive() ? styles.active : ""
                  }`}
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  aria-expanded={mobileResourcesOpen}
                  type="button"
                >
                  Resources
                  <ChevronDown
                    size={18}
                    className={
                      mobileResourcesOpen ? styles.mobileChevronOpen : ""
                    }
                  />
                </button>
                <AnimatePresence>
                  {mobileResourcesOpen && (
                    <motion.div
                      className={styles.mobileServicesList}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: "hidden" }}
                    >
                      {resourcesNavItems.map((item) => {
                        const active =
                          pathname === item.href ||
                          pathname.startsWith(item.href + "/");
                        const Icon = item.icon;

                        return (
                          <Link
                            key={item.id}
                            href={item.href}
                            className={`${styles.mobileServiceLink} ${
                              active ? styles.active : ""
                            }`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setMobileResourcesOpen(false);
                            }}
                          >
                            <span className={styles.mobileServiceIcon}>
                              <Icon size={20} strokeWidth={1.8} />
                            </span>

                            <span className={styles.mobileServiceName}>
                              {item.label}
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
