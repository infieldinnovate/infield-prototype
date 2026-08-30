"use client";

// ============================================
// FAQ Page
// ============================================

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, FileText, ArrowRight, LifeBuoy, CircleHelp as HelpCircle, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SearchBar } from "@/components/ui/SearchBar";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SupportCard } from "@/components/ui/SupportCard";
import { LinkButton } from "@/components/ui/LinkButton";
import { cn } from "@/lib/utils";
import { FAQ_CATEGORIES, searchFAQs, getFAQsByCategory, type FAQSlug } from "@/data/faqs";
import { SERVICES } from "@/data/services";
import { articles } from "@/data/articles";
import { downloads } from "@/data/downloads";
import { siteConfig } from "@/data/site.config";
import styles from "./page.module.scss";

// ============================================
// Support Cards
// ============================================

const supportCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp an Engineer",
    description:
      "Chat directly with one of our engineers for quick questions and advice.",
    href: `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`,
    action: "Start Chat",
    accent: "success" as const,
    external: true,
  },
  {
    icon: Phone,
    title: "Call Us",
    description:
      "Speak with our team directly during business hours or for emergencies.",
    href: siteConfig.phoneHref,
    action: "Call Now",
    accent: "primary" as const,
  },
  {
    icon: Mail,
    title: "Email Us",
    description:
      "Send us a detailed message and we will respond within 24 hours.",
    href: `mailto:${siteConfig.email}`,
    action: "Send Email",
    accent: "secondary" as const,
  },
  {
    icon: FileText,
    title: "Request a Quote",
    description:
      "Get a free, no-obligation quote for your project or service needs.",
    href: "/quote",
    action: "Get Quote",
    accent: "accent" as const,
  },
  {
    icon: Calendar,
    title: "Book a Site Visit",
    description:
      "Schedule a professional site assessment with one of our engineers.",
    href: "/contact",
    action: "Book Now",
    accent: "primary" as const,
  },
];

// ============================================
// FAQ View
// ============================================

type FAQView = FAQSlug;

// ============================================
// FAQ Page
// ============================================

export default function FAQPage() {
  // ------------------------------------------
  // State
  // ------------------------------------------

  const [searchQuery, setSearchQuery] = useState("");
  const [activeView, setActiveView] = useState<FAQView>("general");

  // ------------------------------------------
  // Current FAQ Results
  // ------------------------------------------

  const filteredFAQs = useMemo(() => {
    // Search takes priority over the active category.
    if (searchQuery.trim()) {
      return searchFAQs(searchQuery);
    }

    // Show FAQs for the selected category.
    return getFAQsByCategory(activeView);
  }, [searchQuery, activeView]);

  // ------------------------------------------
  // Active Category Label
  // ------------------------------------------

  const activeCategoryLabel = useMemo(() => {
    return (
      FAQ_CATEGORIES.find((category) => category.slug === activeView)?.label ??
      activeView
    );
  }, [activeView]);

  // ------------------------------------------
  // Category Selection
  // ------------------------------------------

  const handleCategoryChange = (category: FAQSlug) => {
    setSearchQuery("");
    setActiveView(category);
  };

  // ==========================================
  // Render
  // ==========================================

  return (
    <>
      {/* ======================================
          Hero
          ====================================== */}

      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.heroGrid} />
        </div>

        <div className={styles.container}>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources/knowledge-centre" },
              { label: "FAQ" },
            ]}
          />

          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Hero Icon */}

            <div className={styles.heroIconWrapper}>
              <LifeBuoy size={48} strokeWidth={1.5} />
            </div>

            {/* Badge */}

            <span className={styles.heroBadge}>Help Centre</span>

            {/* Heading */}

            <h1 className={styles.heroTitle}>
              How Can We <span className={styles.heroAccent}>Help You?</span>
            </h1>

            {/* Description */}

            <p className={styles.heroDescription}>
              Find answers to common questions about our services, products,
              installation process, warranties, and payments. Our team is always
              here to help.
            </p>

            {/* Search */}

            <div className={styles.heroSearch}>
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search for answers..."
                autoFocus={false}
              />
            </div>

            {/* Quick Category Navigation */}

            <div className={styles.heroQuickCats}>
              {FAQ_CATEGORIES.map((category) => (
                <button
                  key={category.slug}
                  className={cn(
                    styles.quickCat,
                    activeView === category.slug && styles.quickCatActive,
                  )}
                  onClick={() => handleCategoryChange(category.slug)}
                  type="button"
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================
          Main FAQ Section
          ====================================== */}

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.layout}>
            {/* ==================================
                Sidebar
                ================================== */}

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Categories</h3>

                <nav className={styles.categoryNav} aria-label="FAQ categories">
                  {FAQ_CATEGORIES.map((category) => {
                    const count = getFAQsByCategory(category.slug).length;

                    return (
                      <button
                        key={category.slug}
                        className={cn(
                          styles.categoryLink,
                          activeView === category.slug &&
                            styles.categoryLinkActive,
                        )}
                        onClick={() => handleCategoryChange(category.slug)}
                        type="button"
                      >
                        <HelpCircle size={16} />

                        <span>{category.label}</span>

                        <span className={styles.categoryCount}>{count}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* ==================================
                Main Content
                ================================== */}

            <div className={styles.main}>
              {/* ----------------------------------
                  Header
                  ---------------------------------- */}

              <div className={styles.mainHeader}>
                <h2 className={styles.mainTitle}>
                  {searchQuery.trim()
                    ? `Search Results (${filteredFAQs.length})`
                    : activeCategoryLabel}
                </h2>

                {!searchQuery.trim() && (
                  <span className={styles.mainCount}>
                    {filteredFAQs.length}{" "}
                    {filteredFAQs.length === 1 ? "question" : "questions"}
                  </span>
                )}
              </div>

              {/* ==================================
                  Search Results / Category FAQs
                  ================================== */}

              {searchQuery.trim() ? (
                filteredFAQs.length > 0 ? (
                  <FAQAccordion faqs={filteredFAQs} searchQuery={searchQuery} />
                ) : (
                  <div className={styles.emptyState}>
                    <div className={styles.emptyIcon}>
                      <HelpCircle size={32} />
                    </div>

                    <h3 className={styles.emptyTitle}>No answers found</h3>

                    <p className={styles.emptyDescription}>
                      We couldn&apos;t find any questions matching{" "}
                      <strong>{searchQuery}</strong>. Try a different search
                      term or browse our categories.
                    </p>

                    <button
                      type="button"
                      className={styles.emptyButton}
                      onClick={() => setSearchQuery("")}
                    >
                      Browse Categories
                    </button>
                  </div>
                )
              ) : (
                <FAQAccordion faqs={filteredFAQs} searchQuery={searchQuery} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          Need More Help
          ====================================== */}

      <section className={styles.supportSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Still Need Help?"
            title="We're Here for You"
            description="Reach out to our team through any of these channels and we will get back to you promptly."
          />

          <div className={styles.supportGrid}>
            {supportCards.map((card) => (
              <SupportCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          Related Content
          ====================================== */}

      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Explore More"
            title="Related Content"
            description="Dive deeper into our services, knowledge base, and downloadable resources."
          />

          <div className={styles.relatedGrid}>
            {/* ----------------------------------
                Services
                ---------------------------------- */}

            <div className={styles.relatedCol}>
              <h3 className={styles.relatedColTitle}>Our Services</h3>

              <ul className={styles.relatedList}>
                {SERVICES.map((service) => (
                  <li key={service.slug}>
                    <LinkButton
                      href={`/services/${service.slug}`}
                      className={styles.relatedLink}
                    >
                      {service.shortName}
                      <ArrowRight size={14} />
                    </LinkButton>
                  </li>
                ))}
              </ul>
            </div>

            {/* ----------------------------------
                Articles
                ---------------------------------- */}

            <div className={styles.relatedCol}>
              <h3 className={styles.relatedColTitle}>Knowledge Articles</h3>

              <ul className={styles.relatedList}>
                {articles.slice(0, 5).map((article) => (
                  <li key={article.id}>
                    <LinkButton
                      href="/resources/knowledge-centre"
                      className={styles.relatedLink}
                    >
                      {article.title.length > 50
                        ? `${article.title.slice(0, 50)}...`
                        : article.title}

                      <ArrowRight size={14} />
                    </LinkButton>
                  </li>
                ))}
              </ul>
            </div>

            {/* ----------------------------------
                Downloads
                ---------------------------------- */}

            <div className={styles.relatedCol}>
              <h3 className={styles.relatedColTitle}>Downloads</h3>

              <ul className={styles.relatedList}>
                {downloads.slice(0, 5).map((download) => (
                  <li key={download.id}>
                    <LinkButton
                      href="/resources/downloads"
                      className={styles.relatedLink}
                    >
                      {download.title}
                      <ArrowRight size={14} />
                    </LinkButton>
                  </li>
                ))}
              </ul>
            </div>

            {/* ----------------------------------
                Case Studies
                ---------------------------------- */}

            <div className={styles.relatedCol}>
              <h3 className={styles.relatedColTitle}>Case Studies</h3>

              <div className={styles.comingSoon}>
                <p className={styles.comingSoonText}>
                  Explore our recent installations and completed projects
                  across Kenya.
                </p>

                <LinkButton href="/projects" variant="outline" size="sm">
                  View Projects
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
