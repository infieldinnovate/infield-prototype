"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ArrowRight, Tag, User, Briefcase, CircleCheck as CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LinkButton } from "@/components/ui/LinkButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/cards/ArticleCard";
import type { Article } from "@/data/articles";
import { getArticleAuthorName } from "@/data/articles";
import type { Employee } from "@/data/teamData";
import { formatDateShort } from "@/lib/utils";
import styles from "./page.module.scss";

interface ArticleDetailClientProps {
  article: Article;
  author: Employee | null;
  relatedArticles: Article[];
}

export default function ArticleDetailClient({
  article,
  author,
  relatedArticles,
}: ArticleDetailClientProps) {
  return (
    <article className={styles.page}>
      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources/knowledge-centre" },
              { label: article.title },
            ]}
          />

          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.categoryBadge}>{article.category}</span>

            <h1 className={styles.title}>{article.title}</h1>

            <p className={styles.excerpt}>{article.excerpt}</p>

            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <Calendar size={16} />
                {formatDateShort(article.publishDate)}
              </span>
              <span className={styles.metaItem}>
                <Clock size={16} />
                {article.readingTime}
              </span>
              <span className={styles.metaItem}>
                <User size={16} />
                {getArticleAuthorName(article)}
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Featured Image */}
      <div className={styles.featuredImageWrap}>
        <div className={styles.featuredImageContainer}>
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className={styles.featuredImage}
          />
        </div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.layout}>
            {/* Article Content */}
            <div className={styles.content}>
              {article.content.map((section, index) => (
                <motion.section
                  key={index}
                  className={styles.section}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className={styles.paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </motion.section>
              ))}

              {/* Tags */}
              {article.tags.length > 0 && (
                <div className={styles.tags}>
                  <span className={styles.tagsLabel}>
                    <Tag size={14} />
                    Tags
                  </span>
                  <div className={styles.tagList}>
                    {article.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className={styles.cta}>
                <div className={styles.ctaContent}>
                  <h3>Need help with your project?</h3>
                  <p>
                    Our certified engineers are ready to assess your needs and
                    provide a tailored solution. Get a free, no-obligation
                    quote today.
                  </p>
                </div>
                <LinkButton
                  href="/quote"
                  rightIcon={<ArrowRight size={18} />}
                >
                  Get a Free Quote
                </LinkButton>
              </div>

              {/* Back Link */}
              <Link href="/resources/knowledge-centre" className={styles.backLink}>
                <ArrowLeft size={18} />
                Back to all articles
              </Link>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* Author Card */}
              {author && (
                <div className={styles.authorCard}>
                  <div className={styles.authorPhotoWrap}>
                    <ImageWithFallback
                      src={author.photo}
                      alt={author.fullName}
                      fill
                      sizes="120px"
                      className={styles.authorPhoto}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <h3 className={styles.authorName}>{author.fullName}</h3>
                    <p className={styles.authorRole}>
                      <Briefcase size={13} />
                      {author.jobTitle}
                    </p>
                    <p className={styles.authorDept}>{author.department}</p>
                    <p className={styles.authorBio}>{author.bio}</p>
                    {author.qualifications.length > 0 && (
                      <ul className={styles.authorQuals}>
                        {author.qualifications.map((qual, i) => (
                          <li key={i}>
                            <CheckCircle2 size={13} />
                            {qual}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className={styles.authorMeta}>
                      <span>{author.experience} experience</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Article Info Card */}
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Article Details</h3>
                <dl className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <dt>Category</dt>
                    <dd>{article.category}</dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt>Published</dt>
                    <dd>{formatDateShort(article.publishDate)}</dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt>Reading Time</dt>
                    <dd>{article.readingTime}</dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt>Author</dt>
                    <dd>{getArticleAuthorName(article)}</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Keep Reading"
              title="Related Articles"
              description="Explore more guides and insights from our knowledge centre."
            />
            <div className={styles.relatedGrid}>
              {relatedArticles.map((relArticle, i) => (
                <ArticleCard key={relArticle.id} article={relArticle} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
