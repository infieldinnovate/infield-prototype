"use client";

// ============================================
// Premium Footer Component
// ============================================

import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  Headphones,
  Award,
  Sun,
  Droplets,
  Drill,
  CloudRain,
  CheckCircle2,
  AlertCircle,
  type LucideIcon,
  Database,
} from "lucide-react";
import { siteConfig, socialLinks } from "@/data/site.config";
import { legalLinks, navLinks, servicesNavItems } from "@/data/links";
import { COMMON_IMPACT_STATS } from "@/data/impactStats";
import styles from "./Footer.module.scss";
import CallToAction from "../ui/CallToAction";
import { BrandsCarousel } from "../sections/BrandsCarousel";
import { ServiceIcons } from "@/data/service-icons";

const trustItems = [
  {
    icon: BadgeCheck,
    label: "Licensed & Certified",
    description: "Fully licensed engineering firm",
  },
  {
    icon: ShieldCheck,
    label: "Warranty Guarantee",
    description: "Comprehensive warranty on all work",
  },
  {
    icon: Headphones,
    label: "Professional Support",
    description: "24/7 customer support team",
  },
  {
    icon: Award,
    label: "Quality Assurance",
    description: "ISO 9001 certified processes",
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Top CTA Banner */}
      <CallToAction />

      {/* Main Footer */}
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Company Overview */}
            <div className={styles.brandCol}>
              <Link
                href="/"
                className={styles.logo}
                aria-label={`${siteConfig.name} home`}
              >
                <span className={styles.logoIcon}>
                  <Zap size={24} strokeWidth={2.5} />
                </span>
                <span className={styles.logoText}>{siteConfig.name}</span>
              </Link>
              <p className={styles.description}>{siteConfig.description}</p>
              <p className={styles.mission}>{siteConfig.mission}</p>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>
                    {COMMON_IMPACT_STATS.yearsExperience.value}
                  </span>
                  <span className={styles.statLabel}>Years in Business</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>
                    {COMMON_IMPACT_STATS.projectsCompleted.value}
                  </span>
                  <span className={styles.statLabel}>Projects Completed</span>
                </div>
              </div>
              <div className={styles.coverage}>
                <MapPin size={14} />
                <span>Nationwide across Kenya</span>
              </div>
            </div>

            {/* Services */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Services</h3>
              <ul className={styles.linkList}>
                {servicesNavItems.map((service) => {
                  const Icon = ServiceIcons[service.icon];

                  return (
                    <li key={service.href}>
                      <Link href={service.href} className={styles.serviceLink}>
                        <span className={styles.serviceIcon}>
                          <Icon size={16} />
                        </span>

                        {service.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Links */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Quick Links</h3>
              <ul className={styles.linkList}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Contact Information</h3>
              <ul className={styles.contactList}>
                <li>
                  <Phone size={16} />
                  <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
                </li>
                <li>
                  <Mail size={16} />
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </li>
                <li>
                  <MapPin size={16} />
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {siteConfig.address.street}, {siteConfig.address.city},{" "}
                    {siteConfig.address.country}
                  </a>
                </li>
                <li>
                  <Clock size={16} />
                  <span>Mon–Fri: 7AM–6PM | Sat: 8AM–4PM</span>
                </li>
                <li className={styles.emergencyContact}>
                  <AlertCircle size={16} />
                  <span>
                    Emergency:{" "}
                    <a href={siteConfig.emergencyPhoneHref}>
                      {siteConfig.emergencyPhone}
                    </a>
                  </span>
                </li>
              </ul>
              <a href={siteConfig.phoneHref} className={styles.callNowBtn}>
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterSection}>
            <h3 className={styles.newsletterTitle}>Stay Updated</h3>
            <div className={styles.newsletterGrid}>
              <p className={styles.newsletterDesc}>
                Receive project updates, maintenance tips and industry insights.
              </p>
              <form
                className={styles.newsletterForm}
                onSubmit={handleSubscribe}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={styles.newsletterInput}
                  aria-label="Email address"
                  required
                />
                <button
                  type="submit"
                  className={styles.newsletterBtn}
                  aria-label="Subscribe"
                >
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <p className={styles.subscribed}>
                  <CheckCircle2 size={14} />
                  Thanks for subscribing!
                </p>
              )}
              <div className={styles.social}>
                {Object.entries(socialLinks).map(
                  ([key, { link, icon: Icon, label }]) => (
                    <a
                      key={key}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit us on ${label}`}
                      className={styles.socialLink}
                    >
                      <Icon size={18} />
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Certifications & Trust */}
          <div className={styles.trustSection}>
            <h3 className={styles.trustTitle}>Certified & Trusted</h3>
            <div className={styles.trustGrid}>
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className={styles.trustCard}>
                    <div className={styles.trustIcon}>
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                    <div className={styles.trustInfo}>
                      <span className={styles.trustLabel}>{item.label}</span>
                      <span className={styles.trustDesc}>
                        {item.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Brands We Work With */}
          <BrandsCarousel />

          {/* Service Areas */}
          <div className={styles.areasSection}>
            <h3 className={styles.areasTitle}>Service Areas</h3>
            <div className={styles.areasList}>
              {siteConfig.serviceAreas.map((area) => (
                <span key={area} className={styles.areaChip}>
                  <MapPin size={12} />
                  {area}
                </span>
              ))}
              <Link href="/contact" className={styles.areaChipAll}>
                View All Areas
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.bottom}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <div className={styles.legalLinks}>
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.legalLink}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className={styles.builtBy}>
              Built with quality and innovation by Infield Innovations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
