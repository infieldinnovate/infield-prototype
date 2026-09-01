import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getArticleSlugs,
  getRelatedArticles,
} from "@/data/articles";
import { getEmployeeById, type Employee } from "@/data/teamData";
import { siteConfig } from "@/data/site.config";
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
    keywords: article.tags,
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

  return (
    <ArticleDetailClient
      article={article}
      author={author ?? null}
      relatedArticles={relatedArticles}
    />
  );
}
