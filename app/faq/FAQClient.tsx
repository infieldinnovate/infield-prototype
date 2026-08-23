"use client";

// ============================================
// FAQ Page (Client Component)
// ============================================

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  FileText,
  ArrowRight,
  LifeBuoy,
  HelpCircle,
  Calendar,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SearchBar } from "@/components/ui/SearchBar";
import { EnhancedFAQAccordion } from "@/components/ui/EnhancedFAQAccordion";
import { SupportCard } from "@/components/ui/SupportCard";
import { LinkButton } from "@/components/ui/LinkButton";
import { cn } from "@/lib/utils";
import { FAQs, FAQ_CATEGORIES, searchFAQs, type FAQSlug } from "@/data/faqs";
import { SERVICES } from "@/data/services";
import { articles } from "@/data/articles";
import { downloads } from "@/data/downloads";
import { siteConfig } from "@/data/site.config";
import styles from "./page.module.scss";

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

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FAQSlug | "All">(
    "general",
  );

  const filteredFAQs = useMemo(() => {
    if (searchQuery.trim()) {
      return searchFAQs(searchQuery);
    }
    if (activeCategory === "All") return FAQs;
    return FAQs.filter((f) => f.category === activeCategory);
  }, [searchQuery, activeCategory]);

  const popularQuestions = FAQs.filter((f) =>
    [
      "solar-1",
      "electrical-4",
      "plumbing-6",
      "boreholes-2",
      "irrigation-2",
    ].includes(f.id),
  );

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.heroGrid} />
        </div>
        <div className={styles.container}>
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
          />
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.heroIconWrapper}>
              <LifeBuoy size={48} strokeWidth={1.5} />
            </div>
            <span className={styles.heroBadge}>Help Centre</span>
            <h1 className={styles.heroTitle}>
              How Can We <span className={styles.heroAccent}>Help You?</span>
            </h1>
            <p className={styles.heroDescription}>
              Find answers to common questions about our services, products,
              installation process, warranties, and payments. Our team is always
              here to help.
            </p>
            <div className={styles.heroSearch}>
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search for answers..."
                autoFocus={false}
              />
            </div>
            <div className={styles.heroQuickCats}>
              <button
                className={cn(
                  styles.quickCat,
                  activeCategory === "All" && styles.quickCatActive,
                )}
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                type="button"
              >
                All Questions
              </button>

              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  className={cn(
                    styles.quickCat,
                    activeCategory === cat.slug && styles.quickCatActive,
                  )}
                  onClick={() => {
                    setActiveCategory(cat.slug);
                    setSearchQuery("");
                  }}
                  type="button"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.layout}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}> Categories </h3>
                <nav className={styles.categoryNav} aria-label="FAQ categories">
                  <button
                    className={cn(
                      styles.categoryLink,
                      activeCategory === "All" && styles.categoryLinkActive,
                    )}
                    onClick={() => {
                      setActiveCategory("All");
                      setSearchQuery("");
                    }}
                    type="button"
                  >
                    <HelpCircle size={16} />
                    All Questions
                    <span className={styles.categoryCount}>{FAQs.length}</span>
                  </button>

                  {FAQ_CATEGORIES.map((cat) => {
                    const count = FAQs.filter(
                      (f) => f.category === cat.slug,
                    ).length;

                    return (
                      <button
                        key={cat.slug}
                        className={cn(
                          styles.categoryLink,
                          activeCategory === cat.slug &&
                            styles.categoryLinkActive,
                        )}
                        onClick={() => {
                          setActiveCategory(cat.slug);
                          setSearchQuery("");
                        }}
                        type="button"
                      >
                        <HelpCircle size={16} />
                        {cat.label}
                        <span className={styles.categoryCount}>{count}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className={styles.main}>
              <div className={styles.mainHeader}>
                <h2 className={styles.mainTitle}>
                  {searchQuery.trim()
                    ? `Search Results (${filteredFAQs.length})`
                    : activeCategory === "All"
                      ? `All Questions (${filteredFAQs.length})`
                      : `${activeCategory} Questions (${filteredFAQs.length})`}
                </h2>
              </div>
              <EnhancedFAQAccordion
                faqs={filteredFAQs}
                searchQuery={searchQuery}
              />

              {/* Popular Questions */}
              {!searchQuery.trim() && activeCategory === "All" && (
                <div className={styles.popularSection}>
                  <h3 className={styles.popularTitle}>Most Asked Questions</h3>
                  <div className={styles.popularGrid}>
                    {popularQuestions.slice(0, 6).map((faq) => (
                      <button
                        key={faq.id}
                        className={styles.popularCard}
                        onClick={() => {
                          document
                            .getElementById(`faq-${faq.id}`)
                            ?.scrollIntoView({
                              behavior: "smooth",
                              block: "center",
                            });
                        }}
                        type="button"
                      >
                        <span className={styles.popularCategory}>
                          {faq.category}
                        </span>
                        <span className={styles.popularQuestion}>
                          {faq.question}
                        </span>
                        <ArrowRight size={16} className={styles.popularArrow} />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Need More Help */}
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

      {/* Related Content */}
      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Explore More"
            title="Related Content"
            description="Dive deeper into our services, knowledge base, and downloadable resources."
          />

          <div className={styles.relatedGrid}>
            {/* Services */}
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

            {/* Articles */}
            <div className={styles.relatedCol}>
              <h3 className={styles.relatedColTitle}>Knowledge Articles</h3>
              <ul className={styles.relatedList}>
                {articles.slice(0, 5).map((article) => (
                  <li key={article.id}>
                    <LinkButton
                      href="/resources"
                      className={styles.relatedLink}
                    >
                      {article.title.length > 50
                        ? article.title.slice(0, 50) + "..."
                        : article.title}
                      <ArrowRight size={14} />
                    </LinkButton>
                  </li>
                ))}
              </ul>
            </div>

            {/* Downloads */}
            <div className={styles.relatedCol}>
              <h3 className={styles.relatedColTitle}>Downloads</h3>
              <ul className={styles.relatedList}>
                {downloads.slice(0, 5).map((download) => (
                  <li key={download.id}>
                    <LinkButton
                      href="/resources"
                      className={styles.relatedLink}
                    >
                      {download.title}
                      <ArrowRight size={14} />
                    </LinkButton>
                  </li>
                ))}
              </ul>
            </div>

            {/* Case Studies (future ready) */}
            <div className={styles.relatedCol}>
              <h3 className={styles.relatedColTitle}>Case Studies</h3>
              <div className={styles.comingSoon}>
                <p className={styles.comingSoonText}>
                  Case studies coming soon. In the meantime, explore our recent
                  projects on the About page.
                </p>
                <LinkButton href="/about" variant="outline" size="sm">
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
