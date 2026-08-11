import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as Icons from "lucide-react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Leaf,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTA } from "@/components/ui/CTA";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { LinkButton } from "@/components/ui/LinkButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/caseStudies";
import { navServices } from "@/data/navServices";
import { getProjectsByService } from "@/data/projectStats";
import { services, getServiceBySlug, getServiceSlugs } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site.config";
import { buildFAQSchema, buildServiceSchema } from "@/lib/structured-data";
import ProjectGallery from "./ProjectGallery";
import ServiceInfographic from "./ServiceInfographic";
import styles from "./[slug].module.scss";

interface PageProps {
  params: { slug: string };
}

const serviceAliases: Record<string, string> = {
  boreholes: "borehole",
  "water-storage": "water storage",
  "water-harvesting": "water harvesting",
};

const normalize = (value: string) => value.toLowerCase().replace(/[-_]/g, " ");

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
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

  const serviceKey = serviceAliases[service.slug] ?? service.slug;
  const ServiceIcon =
    (Icons[service.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Wrench;
  const relatedProjects = getProjectsByService(service.slug);
  const relatedCaseStudies = caseStudies.filter(
    (study) => normalize(study.serviceSlug) === normalize(serviceKey),
  );
  const relatedTestimonials = testimonials.filter(
    (testimonial) => normalize(testimonial.service) === normalize(service.shortName),
  );
  const displayTestimonials =
    relatedTestimonials.length > 0 ? relatedTestimonials.slice(0, 3) : testimonials.slice(0, 2);
  const displayCaseStudies = relatedCaseStudies.length > 0 ? relatedCaseStudies : caseStudies.slice(0, 2);
  const servedIndustries = industries.filter((industry) =>
    industry.services.some((name) =>
      service.features.some((feature) => normalize(name).includes(normalize(feature.title).split(" ")[0])),
    ),
  );
  const displayIndustries = servedIndustries.length >= 3 ? servedIndustries.slice(0, 6) : industries.slice(0, 6);
  const faqItems = service.faqs.map((faq, index) => ({
    ...faq,
    id: `${service.slug}-faq-${index}`,
    category: "General" as const,
  }));
  const jsonLd = [
    buildServiceSchema({
      name: service.name,
      description: service.description,
      slug: service.slug,
      image: service.image,
    }),
    buildFAQSchema(service.faqs),
  ];

  const proofPoints = [
    { value: service.startingPrice, label: "Typical project entry point" },
    { value: "2-year", label: "Workmanship assurance" },
    { value: "Same day", label: "Response available" },
  ];

  const reasons: { icon: LucideIcon; title: string; description: string }[] = [
    {
      icon: ShieldCheck,
      title: "Built to last",
      description: "We specify dependable materials and document the work for long-term performance.",
    },
    {
      icon: Users,
      title: "One accountable team",
      description: "Design, installation, testing, and handover stay coordinated from start to finish.",
    },
    {
      icon: TrendingUp,
      title: "Measured outcomes",
      description: "Every recommendation is connected to reliability, efficiency, or operating savings.",
    },
    {
      icon: Leaf,
      title: "Responsible by design",
      description: "We look for practical ways to reduce waste, energy use, and operating costs.",
    },
  ];

  const renderIcon = (iconName: string, size = 24) => {
    const Icon = (Icons[iconName as keyof typeof Icons] as LucideIcon) ?? Icons.Building2;
    return <Icon size={size} strokeWidth={1.8} />;
  };

  return (
    <main>
      {jsonLd.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className={styles.hero}>
        <div className={styles.heroImageWrap}>
          <ImageWithFallback src={service.image} alt={service.name} fill priority sizes="100vw" className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.shortName }]} />
            <div className={styles.heroLayout}>
              <div className={styles.heroCopy}>
                <div className={styles.eyebrowLight}><Sparkles size={15} /> Integrated infrastructure, delivered properly</div>
                <div className={styles.heroIcon}><ServiceIcon size={30} strokeWidth={1.7} /></div>
                <p className={styles.heroKicker}>{service.tagline}</p>
                <h1>{service.name}</h1>
                <p className={styles.heroDescription}>{service.description}</p>
                <div className={styles.heroActions}>
                  <LinkButton href="/quote" size="lg" rightIcon={<ArrowRight size={19} />}>Plan your project</LinkButton>
                  <a href={siteConfig.phoneHref} className={styles.phoneLink}><Phone size={18} /> {siteConfig.phone}</a>
                </div>
              </div>
              <aside className={styles.heroPanel}>
                <span className={styles.panelLabel}>The problem we solve</span>
                <p>{service.longDescription}</p>
                <Link href="#results" className={styles.panelLink}>See the approach <ArrowDownRight size={17} /></Link>
              </aside>
            </div>
          </div>
        </div>
        <div className={styles.heroBottomLine} />
      </section>

      <nav className={styles.serviceNav} aria-label="Service navigation">
        <div className={styles.container}>
          <div className={styles.serviceNavInner}>
            <span className={styles.serviceNavLabel}>Explore services</span>
            <div className={styles.serviceNavLinks}>
              {navServices.map((item) => (
                <Link key={item.id} href={item.href} className={item.slug === service.slug ? styles.serviceNavActive : undefined}>
                  <span>{item.number}</span>{item.label}<ChevronRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className={styles.proofBar} id="results">
        <div className={styles.container}>
          <div className={styles.proofGrid}>
            {proofPoints.map((point) => <div key={point.label} className={styles.proofItem}><strong>{point.value}</strong><span>{point.label}</span></div>)}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.splitHeading}>
            <SectionHeading eyebrow="Our approach" title="A connected system, not a collection of parts." description="Good infrastructure works as one. We design each service around the wider needs of your property, people, and operation." centered={false} />
            <div className={styles.headingNote}><Clock3 size={20} /><span>Clear scope. Documented work. No unnecessary complexity.</span></div>
          </div>
          <ServiceInfographic steps={service.infographic} title={service.infographicTitle} subtitle={service.infographicSubtitle} />
        </div>
      </section>

      <section className={`${styles.section} ${styles.surfaceSection}`}>
        <div className={styles.container}>
          <SectionHeading eyebrow="What we offer" title={`${service.shortName} capabilities`} description="From the first assessment to the final handover, our scope is built around practical outcomes." centered={false} />
          <div className={styles.offerGrid}>
            {service.features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={(index % 3) * 70}>
                <article className={styles.offerCard}><span className={styles.offerIndex}>{String(index + 1).padStart(2, "0")}</span><div><h3>{feature.title}</h3><p>{feature.description}</p></div><Check className={styles.offerCheck} size={18} /></article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.editorialGrid}>
            <div className={styles.editorialLead}><span className={styles.eyebrow}>Who we serve</span><h2>Designed for the way your operation actually works.</h2><p>Our work spans homes, farms, institutions, and commercial sites. The solution changes with the context; the standard does not.</p><LinkButton href="/contact" variant="outline" rightIcon={<ArrowRight size={17} />}>Talk to an advisor</LinkButton></div>
            <div className={styles.industryGrid}>{displayIndustries.map((industry, index) => <ScrollReveal key={industry.id} delay={(index % 3) * 60}><Link href={`/services/${industry.serviceSlug}`} className={styles.industryCard}><div className={styles.industryIcon}>{renderIcon(industry.icon)}</div><h3>{industry.name}</h3><p>{industry.description}</p><ArrowRight size={17} className={styles.cardArrow} /></Link></ScrollReveal>)}</div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.darkSection}`}>
        <div className={styles.container}>
          <SectionHeading themeColor="light" eyebrow="Our process" title="A calm, accountable way to deliver complex work." description="You always know what happens next, who owns it, and what success looks like." centered={false} />
          <div className={styles.processGrid}>{service.process.map((step, index) => <ScrollReveal key={step.step} delay={(index % 3) * 70}><div className={styles.processCard}><span>0{step.step}</span><h3>{step.title}</h3><p>{step.description}</p></div></ScrollReveal>)}</div>
        </div>
      </section>

      {relatedProjects.length > 0 && <section className={`${styles.section} ${styles.surfaceSection}`}><div className={styles.container}><SectionHeading eyebrow="Case-study proof" title="Work that performs in the real world." description="Explore completed projects, the challenges behind them, and the results delivered." centered={false} /><ProjectGallery projects={relatedProjects} /></div></section>}

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading eyebrow="Why Infield" title="Technical confidence, without the corporate distance." description="We combine engineering discipline with a straightforward, human way of working." centered={false} />
          <div className={styles.reasonGrid}>{reasons.map((reason, index) => <ScrollReveal key={reason.title} delay={index * 70}><article className={styles.reasonCard}><reason.icon size={25} /><h3>{reason.title}</h3><p>{reason.description}</p></article></ScrollReveal>)}</div>
        </div>
      </section>

      {displayCaseStudies.length > 0 && <section className={`${styles.section} ${styles.caseStudySection}`}><div className={styles.container}><SectionHeading eyebrow="Proven results" title={`${service.shortName} in practice`} description="A closer look at the decisions and outcomes behind selected work." centered={false} /><div className={styles.caseStudyGrid}>{displayCaseStudies.map((study, index) => <ScrollReveal key={study.id} delay={index * 80}><article className={styles.caseStudyCard}><div className={styles.caseStudyImage}><ImageWithFallback src={study.image} alt={study.title} fill sizes="(max-width: 768px) 100vw, 50vw" /><span>{study.service}</span></div><div className={styles.caseStudyBody}><div className={styles.caseStudyMeta}><MapPin size={14} /> {study.location}</div><h3>{study.title}</h3><p>{study.challenge}</p><div className={styles.metrics}>{study.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></div></article></ScrollReveal>)}</div></div></section>}

      <section className={styles.ctaSection}><div className={styles.container}><CTA title={`Ready to make your ${service.shortName.toLowerCase()} system work harder?`} description="Tell us what you are trying to achieve. We will help you understand the right scope, options, and next step." /></div></section>

      {displayTestimonials.length > 0 && <section className={`${styles.section} ${styles.surfaceSection}`}><div className={styles.container}><SectionHeading eyebrow="Client perspective" title="What the work feels like on the other side." description="Professional delivery is measured by the experience as well as the finished system." centered={false} /><div className={styles.testimonialGrid}>{displayTestimonials.map((testimonial) => <TestimonialCard key={testimonial.id} testimonial={testimonial} />)}</div></div></section>}

      <section className={styles.section}><div className={styles.containerNarrow}><SectionHeading eyebrow="Questions" title="Before you get started" description="Straight answers to the questions we hear most often." /><FAQAccordion faqs={faqItems} /></div></section>

      <section className={styles.otherServices}><div className={styles.container}><div className={styles.otherServicesHead}><span className={styles.eyebrow}>Continue exploring</span><h2>One partner for connected infrastructure.</h2></div><div className={styles.otherServicesGrid}>{services.filter((item) => item.slug !== service.slug).map((item) => <Link key={item.slug} href={`/services/${item.slug}`} className={styles.otherServiceLink}><span>{item.shortName}</span><ArrowRight size={17} /></Link>)}</div></div></section>
    </main>
  );
}
