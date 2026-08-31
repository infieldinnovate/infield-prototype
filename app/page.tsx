import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { IndustriesPreview } from "@/components/sections/IndustriesPreview";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { getPopularFAQs } from "@/data/faqs";
import { siteConfig } from "@/data/site.config";
import styles from "./page.module.scss";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import { getFeaturedProjects } from "@/data/projectStats";
import HomeCarousel from "@/components/sections/hero/HeroCarousel";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
};

export default function HomePage() {
  return (
    <>
      <HomeCarousel />

      {/* Animated Stats Section */}
      <AnimatedStats
        eyebrow="Our Impact"
        title="Delivering Measurable Results"
        description="Over a decade of engineering excellence across Kenya — the numbers speak for themselves."
        scroll={true}
      />

      <ServicesOverview />

      <WhyChooseUs />

      {/* Featured Case Studies */}
      <ProjectsShowcase projects={getFeaturedProjects()} />

      {/* Before & After Slider */}
      <BeforeAfterSlider />

      {/* Industries Served Preview */}
      <IndustriesPreview />

      {/* Certifications & Licences */}
      <CertificationsSection />

      {/* Google Reviews Carousel */}
      <GoogleReviews />

      {/* FAQ Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services and process."
          />
          <FAQAccordion faqs={getPopularFAQs()} />
        </div>
      </section>
    </>
  );
}
