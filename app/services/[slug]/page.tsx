import type { Metadata } from "next";
import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LinkButton } from "@/components/ui/LinkButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTA } from "@/components/ui/CTA";
import { services, getServiceBySlug, getServiceSlugs } from "@/data/services";
import { siteConfig } from "@/data/site.config";
import { industries } from "@/data/industries";
import { processSteps } from "@/data/process";
import { buildServiceSchema, buildFAQSchema } from "@/lib/structured-data";
import {
  ArrowRight,
  Check,
  Clock,
  DollarSign,
  Shield,
  Users,
  Leaf,
  Award,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import styles from "./[slug].module.scss";
import { getProjectsByService } from "@/data/projectStats";
import ProjectGallery from "./ProjectGallery";
import ServiceInfographic from "./ServiceInfographic";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.name,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} | ${siteConfig.name}`,
      description: service.description,
      images: [{ url: service.image, alt: service.name }],
    },
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const projects = getProjectsByService(service.slug);
  const Icon =
    (Icons[service.icon as keyof typeof Icons] as React.ComponentType<{
      size?: number;
      strokeWidth?: number;
    }>) || Icons.Zap;

  const whyInfield = [
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: `Our ${service.shortName.toLowerCase()} solutions deliver measurable, long-lasting outcomes.`,
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description:
        "All work is backed by our workmanship warranty and quality assurance.",
    },
    {
      icon: Clock,
      title: "Fast Response",
      description:
        "Same-day service available for urgent needs and emergencies.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Certified, experienced technicians who treat your property with respect.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description:
        "Clear, upfront quotes with no hidden fees or surprise charges.",
    },
    {
      icon: Leaf,
      title: "Sustainable Focus",
      description:
        "Energy-efficient solutions that reduce costs and environmental impact.",
    },
  ];

  const relevantIndustries = industries.filter((ind) =>
    ind.services.some((s) =>
      s.toLowerCase().includes(service.shortName.toLowerCase().split(" ")[0])
    )
  );
  const displayIndustries =
    relevantIndustries.length >= 3 ? relevantIndustries : industries.slice(0, 6);

  const renderIndustryIcon = (iconName: string) => {
    const Icon =
      (Icons[iconName as keyof typeof Icons] as LucideIcon) || Icons.Building2;
    return <Icon size={24} strokeWidth={1.8} />;
  };

  const jsonLd = [
    buildServiceSchema({
      name: service.name,
      description: service.description,
      slug: service.slug,
      image: service.image,
    }),
    buildFAQSchema(service.faqs),
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <ImageWithFallback
            src={service.image}
            alt={service.name}
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: service.shortName },
              ]}
            />
            <div className={styles.heroIcon}>
              <Icon size={40} strokeWidth={1.8} />
            </div>
            <span className={styles.heroEyebrow}>{service.tagline}</span>
            <h1 className={styles.heroTitle}>{service.name}</h1>
            <p className={styles.heroDescription}>{service.longDescription}</p>
            <div className={styles.heroActions}>
              <LinkButton
                href="/quote"
                size="lg"
                rightIcon={<ArrowRight size={20} />}
              >
                Get a Quote
              </LinkButton>
              <LinkButton href="/contact" variant="outline" size="lg">
                Ask a Question
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Infographic */}
      <section className={styles.infographicSection}>
        <div className={styles.container}>
          <ServiceInfographic
            steps={service.infographic}
            title={service.infographicTitle}
            subtitle={service.infographicSubtitle}
          />
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className={styles.infoBar}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <DollarSign size={24} />
              <div>
                <span className={styles.infoLabel}>Starting Price</span>
                <span className={styles.infoValue}>
                  {service.startingPrice}
                </span>
              </div>
            </div>
            <div className={styles.infoItem}>
              <Shield size={24} />
              <div>
                <span className={styles.infoLabel}>Warranty</span>
                <span className={styles.infoValue}>2-Year Workmanship</span>
              </div>
            </div>
            <div className={styles.infoItem}>
              <Clock size={24} />
              <div>
                <span className={styles.infoLabel}>Response Time</span>
                <span className={styles.infoValue}>Same Day Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="What We Offer"
            title={`${service.shortName} Services We Provide`}
            description="Comprehensive solutions tailored to your specific needs."
          />
          <div className={styles.featuresGrid}>
            {service.features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={(i % 3) * 100}>
                <div className={styles.featureCard}>
                  <div className={styles.featureCheck}>
                    <Check size={20} />
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className={styles.industriesSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Who We Serve"
            title="Industries We Support"
            description={`Our ${service.shortName.toLowerCase()} solutions serve a wide range of sectors.`}
          />
          <div className={styles.industriesGrid}>
            {displayIndustries.map((industry, i) => (
              <ScrollReveal key={industry.id} delay={(i % 3) * 100}>
                <div className={styles.industryCard}>
                  <div className={styles.industryIcon}>
                    {renderIndustryIcon(industry.icon)}
                  </div>
                  <h3 className={styles.industryName}>{industry.name}</h3>
                  <p className={styles.industryDescription}>
                    {industry.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Our Process"
            title="How We Deliver Your Project"
            description="From initial contact to project completion, we make it easy."
          />
          <div className={styles.processGrid}>
            {(service.process.length > 0 ? service.process : processSteps.slice(0, 5)).map(
              (step) => (
                <div key={step.step} className={styles.processStep}>
                  <div className={styles.processNumber}>{step.step}</div>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDescription}>{step.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Why Infield */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Why Infield"
            title={`Why Choose Our ${service.shortName} Services`}
            description="What sets us apart and why customers trust us with their projects."
          />
          <div className={styles.featuresGrid}>
            {whyInfield.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={(i % 3) * 100}>
                <div className={styles.featureCard}>
                  <div className={styles.featureCheck}>
                    <benefit.icon size={20} />
                  </div>
                  <h3 className={styles.featureTitle}>{benefit.title}</h3>
                  <p className={styles.featureDescription}>
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <CTA />
        </div>
      </section>

      {/* Projects */}
      {projects.length > 0 && (
        <section className={styles.projectsSection}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Recent Work"
              title={`${service.shortName} Projects`}
              description="See examples of our work in this service category."
            />
            <ProjectGallery projects={projects} />
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="FAQ"
            title={`${service.shortName} Questions & Answers`}
            description="Common questions about this service."
          />
          <FAQAccordion
            faqs={service.faqs.map((f, i) => ({
              ...f,
              id: `sf-${i}`,
              category: "General" as const,
            }))}
          />
        </div>
      </section>

      {/* Other Services */}
      <section className={styles.otherServices}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="More Services"
            title="Explore Our Other Services"
          />
          <div className={styles.otherGrid}>
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => {
                const OtherIcon =
                  (Icons[s.icon as keyof typeof Icons] as React.ComponentType<{
                    size?: number;
                  }>) || Icons.Zap;
                return (
                  <LinkButton
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    variant="ghost"
                    className={styles.otherLink}
                  >
                    <OtherIcon size={24} />
                    <span>{s.shortName}</span>
                    <ArrowRight size={16} />
                  </LinkButton>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
