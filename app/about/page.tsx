import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import AboutHeroCarousel from "@/components/sections/AboutHeroCarousel";
import { siteConfig } from "@/data/site.config";
import { certificationsList } from "@/data/certifications";
import { equipment, safetyCommitments } from "@/data/equipment";
import { CircleCheck as CheckCircle2, Target, Eye, Heart, Users } from "lucide-react";
import styles from "./about.module.scss";
import AboutTimeline from "./AboutTimeline";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Infield Innovations — our mission, values, and the team of certified professionals dedicated to delivering exceptional electrical, plumbing, solar, irrigation, and borehole services across Kenya.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Infield Innovations",
    description:
      "For over 15 years, Infield Innovations has been the trusted name in electrical, plumbing, solar, irrigation, and borehole services across Kenya.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Infield Innovations",
    description:
      "For over 15 years, Infield Innovations has been the trusted name in electrical, plumbing, solar, irrigation, and borehole services across Kenya.",
  },
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide innovative, reliable, and sustainable water and energy solutions that improve the quality of life for our clients while contributing to environmental conservation.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading trusted provider of integrated water and energy solutions in East Africa, recognized for our expertise, innovation, and commitment to sustainability.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, quality, customer-first thinking, and continuous improvement guide everything we do. We treat every project as if it were our own.",
  },
];

const currentYear = new Date().getFullYear();

const milestones = [
  {
    year: "2014",
    event: "Company Founded",
    description:
      "Started with a vision to provide quality water and energy solutions",
  },
  {
    year: "2016",
    event: "First Major Project",
    description: "Completed our first large-scale solar installation",
  },
  {
    year: "2018",
    event: "10 Projects Milestone",
    description: "Reached 10 successful project completions",
  },
  {
    year: "2020",
    event: "Team Expansion",
    description: "Grew our team to 5 certified professionals",
  },
  {
    year: "2022",
    event: "Innovation Award",
    description: "Recognized for excellence in sustainable energy solutions",
  },
  {
    year: currentYear,
    event: "150+ Projects",
    description: "Celebrating over 150 successful installations",
  },
];

export default function AboutPage() {
  return (
    <>
      <AboutHeroCarousel />

      <section className={styles.statsSection}>
        <div className={styles.container}>
          <AnimatedStats
            eyebrow="Our Track Record"
            title="A Decade of Engineering Excellence"
            description="The results behind our reputation — built project by project across Kenya."
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyImage}>
              <ImageWithFallback
                src="/solar/solar-52634168903q.jpg"
                alt="Infield Innovations team at work"
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.storyContent}>
              <SectionHeading
                eyebrow="Our Story"
                title="From Small Beginnings to Regional Leader"
                centered={false}
              />
              <p className={styles.paragraph}>
                Infield Innovations was founded in 2009 with a simple mission:
                to provide honest, reliable electrical services to our
                community. What started as a three-person operation has grown
                into a multi-disciplinary engineering company serving thousands
                of satisfied customers across Kenya.
              </p>
              <p className={styles.paragraph}>
                Today, we offer comprehensive services across electrical,
                plumbing, solar, irrigation, and borehole drilling. Our team of
                28 certified technicians brings expertise, professionalism, and
                a commitment to quality to every project.
              </p>
              <div className={styles.certifications}>
                {certificationsList.map((cert) => (
                  <span key={cert.id} className={styles.certification}>
                    <CheckCircle2 size={16} />
                    {cert.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Mission, Vision & Values"
            description="The principles that guide every decision we make and every project we undertake."
          />
          <div className={styles.valuesGrid}>
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <value.icon size={32} />
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Our People"
            title="Meet the Team"
            description="The certified professionals behind every Infield Innovations project."
          />
          <ScrollReveal>
            <div className={styles.teamGroupPhoto}>
              <ImageWithFallback
                src="https://images.pexels.com/photos/13005576/pexels-photo-13005576.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Infield Innovations team"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className={styles.teamGroupImage}
              />
              <div className={styles.teamGroupOverlay}>
                <div className={styles.teamGroupBadge}>
                  <Users size={28} />
                </div>
                <h3 className={styles.teamGroupTitle}>Our Crew</h3>
                <p className={styles.teamGroupSubtitle}>
                  28 certified technicians, engineers, and specialists working
                  across Kenya.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Our Journey"
            title="Milestones Through the Years"
            description="Key moments that shaped Infield Innovations into the company we are today."
          />

          <AboutTimeline milestones={milestones} />
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className={styles.equipmentSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Our Tools"
            title="Equipment & Technology"
            description="We invest in professional-grade equipment to deliver precise, efficient, and reliable results."
          />
          <div className={styles.equipmentGrid}>
            {equipment.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.id} delay={(i % 4) * 80}>
                  <div className={styles.equipmentCard}>
                    <div className={styles.equipmentIcon}>
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                    <div className={styles.equipmentContent}>
                      <span className={styles.equipmentCategory}>
                        {item.category}
                      </span>
                      <h3 className={styles.equipmentName}>{item.name}</h3>
                      <p className={styles.equipmentDesc}>{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety & Quality Commitment */}
      <section className={styles.safetySection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Our Commitment"
            title="Safety & Quality First"
            description="We never compromise on safety or quality. Here is our commitment to every project."
          />
          <div className={styles.safetyGrid}>
            {safetyCommitments.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.id} delay={(i % 3) * 100}>
                  <div className={styles.safetyCard}>
                    <div className={styles.safetyIcon}>
                      <Icon size={28} strokeWidth={1.8} />
                    </div>
                    <h3 className={styles.safetyTitle}>{item.title}</h3>
                    <p className={styles.safetyDesc}>{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Gallery */}
      <CertificationsSection />
    </>
  );
}
