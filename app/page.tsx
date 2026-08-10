import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { IndustriesPreview } from "@/components/sections/IndustriesPreview";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/site.config";
import styles from "./page.module.scss";
import HeroCarousel from "@/components/sections/HeroCarousel";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";

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

const whyChooseUs = [
  {
    title: "Licensed & Insured",
    description:
      "All our technicians are fully certified, insured, and background-checked for your peace of mind.",
  },
  {
    title: "Upfront Pricing",
    description:
      "Transparent, no-surprise quotes. You approve the price before any work begins.",
  },
  {
    title: "Quality Guarantee",
    description:
      "We stand behind our work with a 2-year workmanship warranty on all services.",
  },
  {
    title: "24/7 Emergency Service",
    description:
      "Plumbing or electrical emergency? We are available around the clock to help.",
  },
];

export default function HomePage() {
const generalFAQs = faqs.slice(0, 6);

  return (
    <>
      <HeroCarousel />

      {/* Animated Stats Section */}
      <AnimatedStats />

      <ServicesOverview />

      <WhyChooseUs />

      {/* Featured Case Studies */}
      <ProjectsShowcase />

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
          <FAQAccordion faqs={generalFAQs} />
        </div>
      </section>
    </>
  );
}
