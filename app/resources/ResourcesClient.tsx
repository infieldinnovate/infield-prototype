"use client";

// ============================================
// Resources Page (Client Component)
// ============================================

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Download,
  FileText,
  Phone,
  ArrowRight,
  Search as SearchIcon,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SearchBar } from "@/components/ui/SearchBar";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { LinkButton } from "@/components/ui/LinkButton";
import { cn } from "@/lib/utils";
import {
  articles,
  articleCategories,
  type ArticleCategory,
} from "@/data/articles";
import { FAQs } from "@/data/faqs";
import { siteConfig } from "@/data/site.config";
import styles from "./page.module.scss";

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | "All">(
    "All",
  );
  const filteredArticles = useMemo(() => {
    let result = articles;
    if (activeCategory !== "All") {
      result = result.filter((a) => a.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q),
      );
    }
    return result;
  }, [searchQuery, activeCategory]);

  const filteredFAQs = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return FAQs.filter(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const featuredArticles = articles.filter((a) => a.featured);

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
            items={[{ label: "Home", href: "/" }, { label: "Resources" }]}
          />
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.heroBadge}>
              <Sparkles size={16} />
              Knowledge Hub
            </span>
            <h1 className={styles.heroTitle}>
              Resources &amp;{" "}
              <span className={styles.heroAccent}>Knowledge Centre</span>
            </h1>
            <p className={styles.heroDescription}>
              Explore our comprehensive library of articles, technical guides,
              product brochures, and industry insights. Everything you need to
              make informed decisions about your engineering projects.
            </p>
            <div className={styles.heroSearch}>
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search articles, downloads, and FAQs..."
                autoFocus={false}
              />
            </div>
            <div className={styles.heroActions}>
              <LinkButton href="/quote" leftIcon={<Download size={18} />}>
                Download Company Profile
              </LinkButton>
              <LinkButton
                href="/quote"
                variant="outline"
                leftIcon={<FileText size={18} />}
              >
                Request Quote
              </LinkButton>
              <a href={siteConfig.phoneHref} className={styles.heroPhoneLink}>
                <Phone size={18} />
                Contact an Engineer
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Results */}
      {searchQuery.trim() && (
        <section className={styles.searchResults}>
          <div className={styles.container}>
            <div className={styles.resultsHeader}>
              <h2 className={styles.resultsTitle}>
                <SearchIcon size={20} />
                Search Results for &ldquo;{searchQuery}&rdquo;
              </h2>
              <button
                className={styles.clearSearch}
                onClick={() => setSearchQuery("")}
                type="button"
              >
                Clear search
              </button>
            </div>
            {filteredArticles.length > 0 && (
              <div className={styles.resultsSection}>
                <h3 className={styles.resultsSectionTitle}>
                  Articles ({filteredArticles.length})
                </h3>
                <div className={styles.articlesGrid}>
                  {filteredArticles.map((article, i) => (
                    <ArticleCard key={article.id} article={article} index={i} />
                  ))}
                </div>
              </div>
            )}
            {filteredFAQs.length > 0 && (
              <div className={styles.resultsSection}>
                <h3 className={styles.resultsSectionTitle}>
                  FAQs ({filteredFAQs.length})
                </h3>
                <div className={styles.faqResults}>
                  {filteredFAQs.slice(0, 5).map((faq) => (
                    <div key={faq.id} className={styles.faqResult}>
                      <span className={styles.faqCategory}>{faq.category}</span>
                      <p className={styles.faqQuestion}>{faq.question}</p>
                      <p className={styles.faqAnswer}>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {filteredArticles.length === 0 && filteredFAQs.length === 0 && (
              <div className={styles.noResults}>
                <p>No results found. Try a different search term.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Featured Articles */}
      {!searchQuery.trim() && (
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Featured"
              title="Editor's Picks"
              description="Hand-selected articles to help you get started with your project."
            />
            <div className={styles.featuredGrid}>
              {featuredArticles.map((article, i) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  featured={i === 0}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Knowledge Centre */}
      {!searchQuery.trim() && (
        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Knowledge Centre"
              title="Articles & Guides"
              description="Browse our library of expert articles covering all our service areas."
            />
            <div className={styles.categoryFilters}>
              <button
                className={cn(
                  styles.categoryChip,
                  activeCategory === "All" && styles.categoryChipActive,
                )}
                onClick={() => setActiveCategory("All")}
                type="button"
              >
                All Articles
              </button>
              {articleCategories.map((cat) => (
                <button
                  key={cat}
                  className={cn(
                    styles.categoryChip,
                    activeCategory === cat && styles.categoryChipActive,
                  )}
                  onClick={() => setActiveCategory(cat)}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className={styles.articlesGrid}>
              {filteredArticles.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} />
              ))}
            </div>
            {filteredArticles.length === 0 && (
              <div className={styles.noResults}>
                <p>No articles in this category yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Downloads CTA */}
      {!searchQuery.trim() && (
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.downloadsCta}>
              <div className={styles.downloadsCtaContent}>
                <span className={styles.downloadsCtaBadge}>
                  <Download size={16} />
                  Downloads
                </span>
                <h2 className={styles.downloadsCtaTitle}>
                  Resource Library
                </h2>
                <p className={styles.downloadsCtaDesc}>
                  Download brochures, technical datasheets, warranty
                  information, and maintenance guides — all in one place.
                </p>
              </div>
              <LinkButton
                href="/downloads"
                rightIcon={<ArrowRight size={18} />}
              >
                Browse Downloads
              </LinkButton>
            </div>
          </div>
        </section>
      )}

    </>
  );
}
