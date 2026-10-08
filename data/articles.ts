// ============================================
// Articles / Knowledge Centre Data
// ============================================

// Author/reviewer resolution now lives in teamData.ts (getEmployeeNameById, getEmployeeByIdNullable)
import { ServiceSlug, SERVICE_CATEGORIES, getServiceBySlug } from "@/data/services";

import article01 from "@/data/articleEntries/article01";
import article02 from "@/data/articleEntries/article02";
import article03 from "@/data/articleEntries/article03";
import article04 from "@/data/articleEntries/article04";
import article05 from "@/data/articleEntries/article05";
import article06 from "@/data/articleEntries/article06";
import article07 from "@/data/articleEntries/article07";
import article08 from "@/data/articleEntries/article08";
import article09 from "@/data/articleEntries/article09";
import article10 from "@/data/articleEntries/article10";

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ArticleCaseStudy {
  challenge: string;
  assessment: string;
  solution: string;
  implementation: string;
  result: string;
  projectLink?: string;
  projectLinkLabel?: string;
}

export interface ArticleSource {
  name: string;
  url?: string;
}

export interface ArticleCTA {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: ServiceSlug;
  image: string;
  readingTime: string;
  publishDate: string;
  updatedDate?: string;
  authorId: string;
  reviewerId?: string;
  featured: boolean;
  content: ArticleSection[];
  tags: string[];
  keyTakeaways: string[];
  tableOfContents?: string[];
  faqs?: ArticleFAQ[];
  caseStudy?: ArticleCaseStudy;
  practicalSummary?: string[];
  sources?: ArticleSource[];
  relatedServiceSlugs?: ServiceSlug[];
  cta?: ArticleCTA;
}

export const articles: Article[] = [
  article01,
  article02,
  article03,
  article04,
  article05,
  article06,
  article07,
  article08,
  article09,
  article10,
];

export const articleCategories = SERVICE_CATEGORIES;

export function getFeaturedArticles(limit = 3): Article[] {
  return articles.filter((a) => a.featured).slice(0, limit);
}

export function getArticlesByCategory(category: ServiceSlug): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function getRelatedArticles(
  currentArticle: Article,
  limit = 3,
): Article[] {
  return articles
    .filter(
      (a) =>
        a.id !== currentArticle.id && a.category === currentArticle.category,
    )
    .slice(0, limit);
}

export function getArticleRelatedServices(article: Article) {
  if (!article.relatedServiceSlugs) return [];
  return article.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
}
