"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  User,
  Briefcase,
  CircleCheck as CheckCircle2,
  Lightbulb,
  ClipboardList,
  FileSearch,
  BookOpen,
  ExternalLink,
  CheckCircle2 as CheckIcon,
  ShieldCheck,
} from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LinkButton } from "@/components/ui/LinkButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/cards/ArticleCard";
import type { Article } from "@/data/articles";
import { getArticleAuthorName } from "@/data/articles";
import type { Employee } from "@/data/teamData";
import type { Service } from "@/data/services";
import { formatDateShort } from "@/lib/utils";
import styles from "./page.module.scss";

interface ArticleDetailClientProps {
  article: Article;
  author: Employee | null;
  reviewer: Employee | null;
  relatedArticles: Article[];
  relatedServices: Service[];
}

export default function ArticleDetailClient({
  article,
  author,
  reviewer,
  relatedArticles,
  relatedServices,
}: ArticleDetailClientProps) {
  return (
    <article className={styles.page}>
      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Knowledge Centre", href: "/resources/knowledge-centre" },
              { label: article.category.charAt(0).toUpperCase() + article.category.slice(1) },
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
                <User size={16} />
                {getArticleAuthorName(article)}
              </span>
              <span className={styles.metaItem}>
                <Calendar size={16} />
                Published {formatDateShort(article.publishDate)}
              </span>
              {article.updatedDate && (
                <span className={styles.metaItem}>
                  <Calendar size={16} />
                  Updated {formatDateShort(article.updatedDate)}
                </span>
              )}
              <span className={styles.metaItem}>
                <Clock size={16} />
                {article.readingTime}
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

      {/* Key Takeaways */}
      {article.keyTakeaways.length > 0 && (
        <section className={styles.takeawaysSection}>
          <div className={styles.container}>
            <div className={styles.takeaways}>
              <h2 className={styles.takeawaysTitle}>
                <Lightbulb size={20} />
                Key Takeaways
              </h2>
              <ul className={styles.takeawaysList}>
                {article.keyTakeaways.map((takeaway, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Body */}
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.layout}>
            {/* Article Content */}
            <div className={styles.content}>
              {/* Table of Contents */}
              {article.tableOfContents && article.tableOfContents.length > 0 && (
                <nav className={styles.toc}>
                  <h3 className={styles.tocTitle}>In This Guide</h3>
                  <ol className={styles.tocList}>
                    {article.tableOfContents.map((item, i) => (
                      <li key={i}>
                        <Link href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {/* Article Sections */}
              {article.content.map((section, index) => (
                <motion.section
                  key={index}
                  id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
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

              {/* Practical Summary */}
              {article.practicalSummary && article.practicalSummary.length > 0 && (
                <div className={styles.practicalSummary}>
                  <h2 className={styles.practicalTitle}>
                    <ClipboardList size={20} />
                    Before You Proceed
                  </h2>
                  <p className={styles.practicalIntro}>
                    For a successful outcome, make sure you have:
                  </p>
                  <ul className={styles.practicalList}>
                    {article.practicalSummary.map((item, i) => (
                      <li key={i}>
                        <CheckIcon size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Case Study */}
              {article.caseStudy && (
                <div className={styles.caseStudy}>
                  <h2 className={styles.caseStudyTitle}>
                    <FileSearch size={20} />
                    From the Field
                  </h2>
                  <div className={styles.caseStudyBody}>
                    <div className={styles.caseStudyItem}>
                      <span className={styles.caseStudyLabel}>Challenge</span>
                      <p>{article.caseStudy.challenge}</p>
                    </div>
                    <div className={styles.caseStudyItem}>
                      <span className={styles.caseStudyLabel}>Assessment</span>
                      <p>{article.caseStudy.assessment}</p>
                    </div>
                    <div className={styles.caseStudyItem}>
                      <span className={styles.caseStudyLabel}>Solution</span>
                      <p>{article.caseStudy.solution}</p>
                    </div>
                    <div className={styles.caseStudyItem}>
                      <span className={styles.caseStudyLabel}>Implementation</span>
                      <p>{article.caseStudy.implementation}</p>
                    </div>
                    <div className={styles.caseStudyItem}>
                      <span className={styles.caseStudyLabel}>Result</span>
                      <p>{article.caseStudy.result}</p>
                    </div>
                  </div>
                  {article.caseStudy.projectLink && (
                    <Link href={article.caseStudy.projectLink} className={styles.caseStudyLink}>
                      {article.caseStudy.projectLinkLabel ?? "View the Project"}
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              )}

              {/* FAQ */}
              {article.faqs && article.faqs.length > 0 && (
                <div className={styles.faqSection}>
                  <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                  <div className={styles.faqList}>
                    {article.faqs.map((faq, i) => (
                      <details key={i} className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>{faq.question}</summary>
                        <p className={styles.faqAnswer}>{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Conclusion */}
              <div className={styles.conclusion}>
                <h2 className={styles.conclusionTitle}>Conclusion</h2>
                <p className={styles.paragraph}>
                  {article.excerpt} For tailored advice specific to your situation, consult
                  with our qualified engineers who can assess your needs and recommend the
                  right approach.
                </p>
              </div>

              {/* Article-Specific CTA */}
              {article.cta && (
                <div className={styles.cta}>
                  <div className={styles.ctaContent}>
                    <h3>{article.cta.title}</h3>
                    <p>{article.cta.description}</p>
                  </div>
                  <LinkButton href={article.cta.href} rightIcon={ArrowRight}>
                    {article.cta.buttonText}
                  </LinkButton>
                </div>
              )}

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

              {/* Sources & References */}
              {article.sources && article.sources.length > 0 && (
                <div className={styles.sources}>
                  <h2 className={styles.sourcesTitle}>
                    <BookOpen size={20} />
                    Sources &amp; References
                  </h2>
                  <ul className={styles.sourcesList}>
                    {article.sources.map((source, i) => (
                      <li key={i}>
                        {source.url ? (
                          <a href={source.url} target="_blank" rel="noopener noreferrer">
                            {source.name}
                            <ExternalLink size={14} />
                          </a>
                        ) : (
                          <span>{source.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Back Link */}
              <Link href="/resources/knowledge-centre" className={styles.backLink}>
                <ArrowLeft size={18} />
                Back to Knowledge Centre
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

              {/* Technical Reviewer */}
              {reviewer && (
                <div className={styles.reviewerCard}>
                  <h3 className={styles.reviewerTitle}>
                    <ShieldCheck size={16} />
                    Technically Reviewed By
                  </h3>
                  <p className={styles.reviewerName}>{reviewer.fullName}</p>
                  <p className={styles.reviewerRole}>{reviewer.jobTitle}</p>
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
                  {article.updatedDate && (
                    <div className={styles.infoItem}>
                      <dt>Updated</dt>
                      <dd>{formatDateShort(article.updatedDate)}</dd>
                    </div>
                  )}
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

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="What We Do"
              title="Related Services"
              description="Services directly connected to this article."
            />
            <div className={styles.servicesGrid}>
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={styles.serviceCard}
                >
                  <div className={styles.serviceCardHeader}>
                    <span
                      className={styles.serviceIcon}
                      style={{ backgroundColor: service.color }}
                    >
                      <Briefcase size={20} color="white" />
                    </span>
                    <h3 className={styles.serviceName}>{service.shortName}</h3>
                  </div>
                  <p className={styles.serviceDesc}>{service.description}</p>
                  <span className={styles.serviceLink}>
                    Learn More
                    <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Keep Reading"
              title="Continue Exploring"
              description="Related guides and insights from our knowledge centre."
            />
            <div className={styles.relatedGrid}>
              {relatedArticles.map((relArticle, i) => (
                <ArticleCard
                  key={relArticle.id}
                  article={relArticle}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
