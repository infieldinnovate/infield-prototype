"use client";

// ============================================
// Downloads Page (Client Component)
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
import { DownloadCard } from "@/components/cards/DownloadCard";
import { LinkButton } from "@/components/ui/LinkButton";
import { cn } from "@/lib/utils";
import {
  downloads,
  downloadCategories,
  getDownloadsByCategory,
  type DownloadCategory,
} from "@/data/downloads";
import { siteConfig } from "@/data/site.config";
import styles from "./page.module.scss";

export default function DownloadsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDownloadCategory, setActiveDownloadCategory] =
    useState<string>("All");

  const filteredDownloads = useMemo(() => {
    let result =
      activeDownloadCategory !== "All"
        ? getDownloadsByCategory(activeDownloadCategory as DownloadCategory)
        : downloads;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.category.toLowerCase().includes(q),
      );
    }
    return result;
  }, [searchQuery, activeDownloadCategory]);

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
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources/knowledge-centre" },
              { label: "Downloads" },
            ]}
          />
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.heroBadge}>
              <Sparkles size={16} />
              Resource Library
            </span>
            <h1 className={styles.heroTitle}>
              Downloads &amp;{" "}
              <span className={styles.heroAccent}>Resource Library</span>
            </h1>
            <p className={styles.heroDescription}>
              Download brochures, technical datasheets, warranty information,
              and maintenance guides. Everything you need to make informed
              decisions about your engineering projects.
            </p>
            <div className={styles.heroSearch}>
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search downloads..."
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
            {filteredDownloads.length > 0 ? (
              <div className={styles.downloadsGrid}>
                {filteredDownloads.map((download, i) => (
                  <DownloadCard key={download.id} download={download} index={i} />
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <p>No downloads found. Try a different search term.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Downloads Centre */}
      {!searchQuery.trim() && (
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Downloads"
              title="Resource Library"
              description="Download brochures, technical datasheets, warranty information, and maintenance guides."
            />
            <div className={styles.categoryFilters}>
              <button
                className={cn(
                  styles.categoryChip,
                  activeDownloadCategory === "All" && styles.categoryChipActive,
                )}
                onClick={() => setActiveDownloadCategory("All")}
                type="button"
              >
                All Downloads
              </button>
              {downloadCategories.map((cat) => (
                <button
                  key={cat}
                  className={cn(
                    styles.categoryChip,
                    activeDownloadCategory === cat && styles.categoryChipActive,
                  )}
                  onClick={() => setActiveDownloadCategory(cat)}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className={styles.downloadsGrid}>
              {filteredDownloads.map((download, i) => (
                <DownloadCard key={download.id} download={download} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Need more information?</h2>
            <p>
              Can&apos;t find what you&apos;re looking for? Our team is ready to
              help with any technical documentation or project details you need.
            </p>
            <div className={styles.ctaActions}>
              <LinkButton href="/contact" rightIcon={<ArrowRight size={18} />}>
                Contact Us
              </LinkButton>
              <LinkButton href="/resources/knowledge-centre" variant="outline">
                Browse Articles
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
