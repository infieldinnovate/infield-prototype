import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getArticleSlugs,
  getRelatedArticles,
} from "@/data/articles";
import { getEmployeeById, type Employee } from "@/data/teamData";
import { siteConfig } from "@/data/site.config";
import { getArticleAuthorName } from "@/data/articles";
import { buildArticleSchema } from "@/lib/structured-data";
import ArticleDetailClient from "./ArticleDetailClient";

interface ArticlePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/resources/knowledge-centre/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | ${siteConfig.name}`,
      description: article.excerpt,
      url: `${siteConfig.url}/resources/knowledge-centre/${article.slug}`,
      siteName: siteConfig.name,
      type: "article",
      images: [{ url: article.image, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | ${siteConfig.name}`,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const author = getEmployeeById(article.authorId) as Employee | undefined;
  const relatedArticles = getRelatedArticles(article, 3);

  const jsonLd = buildArticleSchema({
    title: article.title,
    excerpt: article.excerpt,
    slug: article.slug,
    image: article.image,
    publishDate: article.publishDate,
    authorName: getArticleAuthorName(article),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleDetailClient
        article={article}
        author={author ?? null}
        relatedArticles={relatedArticles}
      />
    </>
  );
}
