// components\Header\Header.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
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
import { Dropdown, type DropdownItem } from "./Dropdown";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const pathname = usePathname() || "/";
  const { scrolled } = useScrollDirection();

  useLockBodyScroll(isMenuOpen);

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const serviceDropdownItems: DropdownItem[] = servicesNavItems.map(
    (service) => ({
      id: service.id,
      label: service.label,
      href: service.href,
      icon: ServiceIcons[service.icon],
      description: service.tagline,
    }),
  );

  const resourceDropdownItems: DropdownItem[] = resourcesNavItems.map(
    (item) => ({
      id: item.id,
      label: item.label,
      href: item.href,
      icon: item.icon,
      description: item.description,
    }),
  );

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
          <Dropdown
            label="Services"
            items={serviceDropdownItems}
            isActive={isServiceActive}
          />

          {/* Resources Dropdown */}
          <Dropdown
            label="Resources"
            items={resourceDropdownItems}
            isActive={isResourceActive}
          />
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
          {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
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
