"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Clock3,
  Database,
  Drill,
  Droplets,
  Lightbulb,
  MapPin,
  Quote,
  Settings2,
  ShieldCheck,
  Sprout,
  Star,
  Sun,
  Users,
  Wrench,
} from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { LinkButton } from "@/components/ui/LinkButton";
import { getServiceBySlug, SERVICES, Service } from "@/data/services";
import { industries } from "@/data/industries";
import { getProjectsByService } from "@/data/projectStats";
import { testimonials } from "@/data/testimonials";
import { FAQs } from "@/data/faqs";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import styles from "./page.module.scss";
import { ServiceIcons } from "@/data/service-icons";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";

interface ServiceDetailClientProps {
  service: Service;
}

const integratedStages = [
  {
    id: "source",
    label: "Water source",
    kicker: "01",
    icon: Drill,
    description: "Find and secure the water beneath or around your site.",
    services: ["Borehole drilling", "Water harvesting"],
  },
  {
    id: "power",
    label: "Solar energy",
    kicker: "02",
    icon: Sun,
    description: "Use clean, dependable power to move and manage it.",
    services: ["Solar energy", "Electrical"],
  },
  {
    id: "storage",
    label: "Storage",
    kicker: "03",
    icon: Database,
    description: "Hold supply where it is available, ready for demand.",
    services: ["Water storage", "Water harvesting"],
  },
  {
    id: "delivery",
    label: "Pumping",
    kicker: "04",
    icon: Droplets,
    description: "Move water and power to where they are needed, efficiently.",
    services: ["Irrigation", "Plumbing"],
  },
  {
    id: "result",
    label: "Productive land",
    kicker: "05",
    icon: Sprout,
    description: "Turn reliable infrastructure into a stronger operation.",
    services: ["Irrigation", "Solar energy"],
  },
];

const problemPoints = [
  {
    number: "01",
    title: "Unreliable supply",
    description:
      "Power cuts, dry seasons and municipal interruptions make planning fragile.",
  },
  {
    number: "02",
    title: "Disconnected fixes",
    description:
      "A pump without storage, or storage without a dependable source, only moves the problem.",
  },
  {
    number: "03",
    title: "Waste at the edges",
    description:
      "Poor sizing and inefficient delivery turn scarce water and energy into avoidable cost.",
  },
];

const whyInfieldItems = [
  {
    icon: Settings2,
    title: "Integrated solutions",
    description:
      "We connect water, energy and infrastructure into one coherent system — no gaps, no finger-pointing.",
  },
  {
    icon: ShieldCheck,
    title: "Quality engineering",
    description:
      "Certified technicians, premium materials and workmanship that meets real-world conditions, not just specs.",
  },
  {
    icon: Wrench,
    title: "Reliable implementation",
    description:
      "Clear timelines, clean sites and minimal disruption. We do what we said we would, when we said we would.",
  },
  {
    icon: Clock3,
    title: "Long-term support",
    description:
      "Maintenance, monitoring and practical advice that keeps your system performing for years, not weeks.",
  },
  {
    icon: Users,
    title: "Customer-focused",
    description:
      "We listen first. Your brief, your site and your constraints shape the solution — not a catalogue.",
  },
  {
    icon: Sprout,
    title: "Sustainable by design",
    description:
      "Solar pumping, water harvesting and efficient delivery that lower cost and environmental impact together.",
  },
];

export default function ServiceDetailClient({
  service,
}: ServiceDetailClientProps) {
  const [selectedServiceSlug, setSelectedServiceSlug] = useState(service.slug);
  const [selectedStageId, setSelectedStageId] = useState("source");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const serviceFaqs = FAQs.filter((f) => service.slug.includes(f.category));

  const [openFaqId, setOpenFaqId] = useState<string | null>(
    serviceFaqs[0]?.id ?? null,
  );
  const processTrackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: processTrackRef,
    offset: ["start end", "end start"],
  });
  const trackScale = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);
  const selectedService = getServiceBySlug(selectedServiceSlug) || service;
  const activeStage =
    integratedStages.find((stage) => stage.id === selectedStageId) ||
    integratedStages[0];
  const activeTestimonial =
    testimonials[testimonialIndex % testimonials.length];
  const relatedServices = SERVICES.filter(
    (item) => item.slug !== service.slug,
  ).slice(0, 4);
  const HeroIcon = ServiceIcons[service.icon];

  const changeTestimonial = (direction: number) => {
    setTestimonialIndex(
      (current) =>
        (current + direction + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <motion.div
              className={styles.heroCopy}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <Link href="/services" className={styles.backLink}>
                <ArrowLeft size={16} />
                All services
              </Link>
              <div className={styles.eyebrow}>
                <span /> What we do
              </div>
              <h1>{service.name}</h1>
              <p className={styles.heroLead}>{service.tagline}</p>
              <p className={styles.heroDescription}>
                {service.longDescription}
              </p>
              <div className={styles.heroActions}>
                <LinkButton
                  href="/quote"
                  size="lg"
                  rightIcon={<ArrowUpRight size={18} />}
                >
                  Get a Free Assessment
                </LinkButton>
                <a className={styles.textLink} href="#services">
                  Explore Our Services <ArrowRight size={17} />
                </a>
              </div>
              <div className={styles.heroMeta}>
                <span>
                  <ShieldCheck size={16} /> Certified workmanship
                </span>
                <span>
                  <Clock3 size={16} /> Clear project timelines
                </span>
              </div>
            </motion.div>

            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              <div className={styles.heroImageFrame}>
                <ImageWithFallback
                  src={service.image}
                  alt={`${service.name} project`}
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className={styles.heroImage}
                />
                <div className={styles.imageShade} />
                <div className={styles.visualLabel}>
                  <span className={styles.visualIcon}>
                    <HeroIcon size={19} />
                  </span>
                  <span>
                    <small>Specialist service</small>
                    {service.shortName}
                  </span>
                </div>
              </div>
              <div
                className={styles.heroSystem}
                aria-label="Integrated solution system"
              >
                <div className={styles.heroSystemHeader}>
                  <span>Connected system</span>
                  <span>
                    <CircleDot size={11} /> Designed as one
                  </span>
                </div>
                <div className={styles.heroSystemFlow}>
                  {integratedStages.map((stage, index) => {
                    const StageIcon = stage.icon;
                    return (
                      <div className={styles.heroSystemItem} key={stage.id}>
                        <motion.div
                          className={styles.heroSystemNode}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.45 + index * 0.12,
                            duration: 0.5,
                            ease: "easeOut",
                          }}
                        >
                          <StageIcon size={17} />
                        </motion.div>
                        <span>
                          <small>{stage.kicker}</small>
                          {stage.label}
                        </span>
                        {index < integratedStages.length - 1 && (
                          <motion.span
                            className={styles.heroSystemLine}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                              delay: 0.8 + index * 0.14,
                              duration: 0.7,
                              ease: "easeOut",
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.floatingCard}>
                <span className={styles.floatingIcon}>
                  <Check size={16} />
                </span>
                <span>
                  <strong>Built for your brief</strong>
                  <small>From first survey to final handover</small>
                </span>
              </div>
              <div className={styles.visualIndex}>
                0{SERVICES.findIndex((item) => item.slug === service.slug) + 1}
                <span>/ 07</span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className={styles.heroRule} />
      </section>

      <section className={styles.problemSection}>
        <div className={styles.container}>
          <div className={styles.problemGrid}>
            <div className={styles.problemHeading}>
              <div className={styles.eyebrow}>
                <span /> The problem we solve
              </div>
              <h2>Infrastructure rarely fails in isolation.</h2>
            </div>
            <div className={styles.problemBody}>
              <p>
                When water is unreliable, energy becomes expensive. When energy
                is unstable, pumping and production suffer. The right answer is
                rarely one product on its own — it is a system that understands
                how each part affects the next.
              </p>
              <span className={styles.problemNote}>
                <ArrowDownRight size={17} /> From source to outcome
              </span>
            </div>
          </div>
          <div className={styles.problemPoints}>
            {problemPoints.map((point, index) => (
              <motion.div
                key={point.number}
                className={styles.problemPoint}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span>{point.number}</span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.statStrip} aria-label="Company statistics">
        <AnimatedStats scroll category={service.slug} />
      </section>

      <section className={styles.section} id="services">
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <div className={styles.eyebrow}>
                <span /> Our capabilities
              </div>
              <h2>One partner for the details that matter.</h2>
            </div>
            <p>
              Every service is delivered with the same disciplined approach:
              thoughtful design, quality materials and a finish that performs in
              the real world.
            </p>
          </div>

          <div className={styles.serviceLayout}>
            <div
              className={styles.serviceList}
              role="tablist"
              aria-label="Explore services"
            >
              {SERVICES.map((item, index) => {
                const Icon = ServiceIcons[item.icon];
                const isActive = item.slug === selectedServiceSlug;
                return (
                  <button
                    key={item.slug}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`${styles.serviceItem} ${isActive ? styles.serviceItemActive : ""}`}
                    onClick={() => setSelectedServiceSlug(item.slug)}
                  >
                    <span className={styles.serviceItemNumber}>
                      0{index + 1}
                    </span>
                    <span className={styles.serviceItemIcon}>
                      <Icon size={20} />
                    </span>
                    <span className={styles.serviceItemText}>
                      <strong>{item.shortName}</strong>
                      <small>{item.tagline}</small>
                    </span>
                    <ArrowUpRight
                      className={styles.serviceItemArrow}
                      size={19}
                    />
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.slug}
                className={styles.servicePanel}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.25 }}
                role="tabpanel"
              >
                <div className={styles.panelTopline}>
                  <span>Selected service</span>
                  <span>{selectedService.startingPrice} starting point</span>
                </div>
                <h3>{selectedService.name}</h3>
                <p>{selectedService.description}</p>
                <div className={styles.featureGrid}>
                  {selectedService.features.slice(0, 6).map((feature) => (
                    <div className={styles.feature} key={feature.title}>
                      <CheckCircle2 size={17} />
                      <span>
                        <strong>{feature.title}</strong>
                        <small>{feature.description}</small>
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/quote?service=${selectedService.slug}`}
                  className={styles.panelLink}
                >
                  Get a Free Assessment <ArrowUpRight size={17} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className={styles.integrationSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <div className={styles.eyebrow}>
                <span /> Integrated solutions
              </div>
              <h2>Every stage strengthens the next.</h2>
            </div>
            <p>
              Explore the chain that turns individual services into a complete,
              useful outcome. Select a stage to see what it needs and what it
              unlocks.
            </p>
          </div>
          <div
            className={styles.integrationFlow}
            role="tablist"
            aria-label="Integrated solution stages"
          >
            {integratedStages.map((stage, index) => {
              const StageIcon = stage.icon;
              const isActive = stage.id === activeStage.id;
              return (
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.integrationStage} ${isActive ? styles.integrationStageActive : ""}`}
                  key={stage.id}
                  onClick={() => setSelectedStageId(stage.id)}
                >
                  <span className={styles.integrationStageNumber}>
                    {stage.kicker}
                  </span>
                  <span className={styles.integrationStageIcon}>
                    <StageIcon size={20} />
                  </span>
                  <strong>{stage.label}</strong>
                  {index < integratedStages.length - 1 && (
                    <ArrowRight
                      className={styles.integrationStageArrow}
                      size={17}
                    />
                  )}
                </button>
              );
            })}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              className={styles.integrationDetail}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.24 }}
            >
              <div>
                <span className={styles.detailKicker}>
                  Stage {activeStage.kicker}
                </span>
                <h3>{activeStage.label}</h3>
                <p>{activeStage.description}</p>
              </div>
              <div className={styles.detailServices}>
                <span>Relevant services</span>
                <div>
                  {activeStage.services.map((item) => (
                    <span key={item}>
                      <Check size={14} /> {item}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowDownRight
                className={styles.integrationDetailArrow}
                size={28}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className={styles.audienceSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <div className={styles.eyebrow}>
                <span /> Who we serve
              </div>
              <h2>Built for the way you work.</h2>
            </div>
            <p>
              From a single home to a multi-site operation, we tailor every
              system to the demands of your sector.
            </p>
          </div>
          <div className={styles.audienceGrid}>
            {industries.map((industry, index) => {
              const Icon = industry.icon || Building2;
              const isLarge = index === 0 || index === 5;
              return (
                <motion.div
                  key={industry.id}
                  className={`${styles.audienceCard} ${isLarge ? styles.audienceCardLarge : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <div className={styles.audienceIconWrap}>
                    <Icon size={28} strokeWidth={1.8} />
                  </div>
                  <h3 className={styles.audienceName}>{industry.name}</h3>
                  <p className={styles.audienceDesc}>{industry.description}</p>
                  <ul className={styles.audienceServices}>
                    {industry.services.slice(0, 3).map((s) => (
                      <li key={s}>
                        <Check size={12} /> {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS / CASE STUDIES */}
      <ProjectsShowcase projects={getProjectsByService(service.slug)} />

      {/* RESULTS */}
      <section className={styles.resultsSection}>
        <div className={styles.container}>
          <div className={styles.resultsIntro}>
            <div className={styles.eyebrow}>
              <span /> Measurable impact
            </div>
            <h2>Numbers that mean something.</h2>
            <p>
              A decade of engineering across Kenya, tracked in outcomes that
              matter to the people who rely on our work.
            </p>
          </div>
          <AnimatedStats
            theme="light"
            eyebrow="Measurable impact"
            title="Numbers that mean something."
            description="A decade of engineering across Kenya, tracked in outcomes that matter to the people who rely on our work."
            category={service.slug}
          />
        </div>
      </section>

      {/* WHY INFIELD */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            <div className={styles.whyCopy}>
              <div className={styles.eyebrow}>
                <span /> Why Infield
              </div>
              <h2>Engineering that holds together.</h2>
              <p>
                We do not sell products. We design, build and maintain systems
                that keep working long after installation day.
              </p>
              <LinkButton
                href="/quote"
                size="lg"
                rightIcon={<ArrowUpRight size={18} />}
              >
                Get a Free Assessment
              </LinkButton>
            </div>
            <div className={styles.whyItems}>
              {whyInfieldItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className={styles.whyItem}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                  >
                    <div className={styles.whyIconWrap}>
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.processSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <div className={styles.eyebrow}>
                <span /> How we work
              </div>
              <h2>A clearer path from idea to impact.</h2>
            </div>
            <p>
              No hand-offs into the unknown. You get a considered plan, direct
              communication and a team accountable for the outcome.
            </p>
          </div>
          <div className={styles.processTrack} ref={processTrackRef}>
            <div className={styles.trackLine} aria-hidden="true" />
            <motion.div
              className={`${styles.trackProgress} ${styles.trackProgressV}`}
              style={{ scaleY: trackScale }}
              aria-hidden="true"
            />
            <motion.div
              className={`${styles.trackProgress} ${styles.trackProgressH}`}
              style={{ scaleX: trackScale }}
              aria-hidden="true"
            />
            {service.process.map((process, index) => (
              <motion.div
                className={styles.processStep}
                key={process.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.processMarker}>{process.step}</div>
                <div>
                  <h3>{process.title}</h3>
                  <p>{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.insightSection}>
        <div className={styles.container}>
          <div className={styles.insightGrid}>
            <div className={styles.insightCopy}>
              <div className={styles.eyebrow}>
                <span /> Designed around performance
              </div>
              <h2>Good engineering should feel simple.</h2>
              <p>
                We make complex infrastructure easier to understand, easier to
                maintain and better suited to the way your property actually
                works.
              </p>
              <ul className={styles.checkList}>
                <li>
                  <CheckCircle2 size={18} /> Straightforward recommendations
                </li>
                <li>
                  <CheckCircle2 size={18} /> Quality-led installation
                </li>
                <li>
                  <CheckCircle2 size={18} /> Practical aftercare and support
                </li>
              </ul>
              <LinkButton
                href="/contact"
                variant="outline"
                rightIcon={<ArrowRight size={17} />}
              >
                Talk to an expert
              </LinkButton>
            </div>
            <div className={styles.infographic}>
              <div className={styles.infographicHeader}>
                <span>System view</span>
                <span>
                  <CircleDot size={13} /> Live project logic
                </span>
              </div>
              <div className={styles.diagram}>
                {service.infographic.map((step, index) => {
                  const Icon = ServiceIcons[step.icon];
                  return (
                    <div className={styles.diagramStep} key={step.label}>
                      <div className={styles.diagramOrb}>
                        <Icon size={23} />
                      </div>
                      <span className={styles.diagramNumber}>0{index + 1}</span>
                      <strong>{step.label}</strong>
                      <small>{step.description}</small>
                      {index < service.infographic.length - 1 && (
                        <ArrowRight
                          className={styles.diagramArrow}
                          size={18}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <div className={styles.diagramFooter}>
                <Lightbulb size={17} /> {service.infographicSubtitle}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <div className={styles.container}>
          <div className={styles.testimonialHeader}>
            <div>
              <div className={styles.eyebrow}>
                <span /> Client perspective
              </div>
              <h2>Work that earns trust.</h2>
            </div>
            <div className={styles.testimonialControls}>
              <button
                type="button"
                onClick={() => changeTestimonial(-1)}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={19} />
              </button>
              <span>
                {String(testimonialIndex + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => changeTestimonial(1)}
                aria-label="Next testimonial"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              className={styles.testimonial}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <Quote className={styles.quoteIcon} size={28} />
              <blockquote>“{activeTestimonial.content}”</blockquote>
              <div className={styles.testimonialPerson}>
                <ImageWithFallback
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  width={52}
                  height={52}
                  className={styles.avatar}
                />
                <span>
                  <strong>{activeTestimonial.name}</strong>
                  <small>
                    {activeTestimonial.role}, {activeTestimonial.company}
                  </small>
                </span>
                <span className={styles.rating}>
                  {Array.from({ length: activeTestimonial.rating }).map(
                    (_, index) => (
                      <Star key={index} size={15} fill="currentColor" />
                    ),
                  )}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <div className={styles.relatedHeader}>
            <div>
              <div className={styles.eyebrow}>
                <span /> More from Infield
              </div>
              <h2>One challenge rarely stands alone.</h2>
            </div>
            <Link href="/services" className={styles.textLink}>
              View all services <ArrowRight size={17} />
            </Link>
          </div>
          <div className={styles.relatedGrid}>
            {relatedServices.map((item) => {
              const Icon = ServiceIcons[item.icon];
              return (
                <Link
                  href={`/services/${item.slug}`}
                  className={styles.relatedCard}
                  key={item.slug}
                >
                  <span className={styles.relatedIcon}>
                    <Icon size={21} />
                  </span>
                  <span className={styles.relatedNumber}>
                    {String(SERVICES.indexOf(item) + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.shortName}</h3>
                  <p>{item.tagline}</p>
                  <ArrowUpRight className={styles.relatedArrow} size={18} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <div className={styles.eyebrow}>
                <span /> Questions &amp; answers
              </div>
              <h2>Everything you need to know.</h2>
            </div>
            <p>
              Clear answers to the questions we hear most — about how we work,
              what we deliver, and how to get started.
            </p>
          </div>
          <div className={styles.faqList}>
            {serviceFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
                >
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${faq.id}`}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-content-${faq.id}`}
                        className={styles.faqContent}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className={styles.faqAnswer}>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
