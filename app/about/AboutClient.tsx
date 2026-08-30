"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import AboutHeroCarousel from "@/components/sections/AboutHeroCarousel";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { certificationsList } from "@/data/certifications";
import { equipment, safetyCommitments } from "@/data/equipment";
import { industries } from "@/data/industries";
import {
  CircleCheck as CheckCircle2,
  Target,
  Eye,
  Heart,
  Users,
} from "lucide-react";
import { siteConfig } from "@/data/site.config";
import { COMMON_IMPACT_STATS } from "@/data/impactStats";
import styles from "./about.module.scss";

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
    year: siteConfig.foundedYear,
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
    event: `${COMMON_IMPACT_STATS.projectsCompleted.value} Projects`,
    description: `Celebrating over ${COMMON_IMPACT_STATS.projectsCompleted.value} successful installations`,
  },
];

function AboutTimeline() {
  return (
    <div className={styles.timeline}>
      {milestones.map((milestone, index) => (
        <motion.div
          key={`${milestone.year}-${milestone.event}`}
          className={styles.timelineItem}
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? -60 : 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.12,
            ease: "easeOut",
          }}
        >
          <div className={styles.timelineContent}>
            <div className={styles.timelineYear}>{milestone.year}</div>

            <h3>{milestone.event}</h3>

            <p>{milestone.description}</p>
          </div>

          <motion.div
            className={styles.timelineDot}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.12 + 0.25,
              type: "spring",
              stiffness: 250,
            }}
          >
            <CheckCircle2 size={20} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <AboutHeroCarousel />

      {/* AnimatedStats */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <AnimatedStats
            eyebrow="Our Track Record"
            title="A Decade of Engineering Excellence"
            description="The results behind our reputation — built project by project across Kenya."
          />
        </div>
      </section>

      {/* Our Story */}
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
                Infield Innovations was founded in {siteConfig.foundedYear} with
                a simple mission: to provide honest, reliable electrical
                services to our community. What started as a three-person
                operation has grown into a multi-disciplinary engineering
                company serving thousands of satisfied customers across Kenya.
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

      {/* Milestones Timeline */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Our Journey"
            title="Milestones Through the Years"
            description="Key moments that shaped Infield Innovations into the company we are today."
          />

          <AboutTimeline />
        </div>
      </section>

      {/* Mission, Vision & Values */}
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

      {/* Industries We Serve */}
      <section className={styles.industriesSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Industries"
            title="Industries We Serve"
            description="We deliver tailored engineering solutions across a wide range of industries."
          />
          <div className={styles.industriesGrid}>
            {industries.map((industry, i) => (
              <IndustryCard key={industry.id} industry={industry} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="How We Work"
            title="Our Process"
            description="From initial consultation to ongoing maintenance, we follow a proven process to deliver exceptional results."
          />
          <ProcessTimeline />
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
