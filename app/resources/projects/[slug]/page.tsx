import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getProjectSlugs,
  getProjectsByService,
} from "@/data/projectStats";
import { getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/data/site.config";
import { buildProjectListSchema } from "@/lib/structured-data";
import ProjectDetailClient from "./ProjectDetailClient";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.challenge,
    alternates: {
      canonical: `/resources/projects/${project.id}`,
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.challenge,
      url: `${siteConfig.url}/resources/projects/${project.id}`,
      siteName: siteConfig.name,
      type: "article",
      images: [
        {
          url: project.projectImages[0]?.url ?? "/placeholder_image.jpg",
          alt: project.title,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.challenge,
      images: [project.projectImages[0]?.url ?? "/placeholder_image.jpg"],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getProjectsByService(project.category)
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  const relatedServices = (project.relatedServiceSlugs ?? [project.category])
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined)
    .filter((s) => s.slug !== project.category || (project.relatedServiceSlugs ?? []).length > 1)
    .slice(0, 4);

  const jsonLd = buildProjectListSchema([project]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetailClient
        project={project}
        relatedProjects={relatedProjects}
        relatedServices={relatedServices}
      />
    </>
  );
}
