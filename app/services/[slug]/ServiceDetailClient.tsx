"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Building2,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Clock3,
  CloudRain,
  Database,
  Drill,
  Droplets,
  ExternalLink,
  Factory,
  Gauge,
  HandHeart,
  Home,
  Landmark,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Quote,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  Sun,
  Users,
  Wheat,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { LinkButton } from "@/components/ui/LinkButton";
import { getServiceBySlug, services, type Service } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { faqs } from "@/data/faqs";
import { industries } from "@/data/industries";
import { impactStats } from "@/data/projectStats";
import { siteConfig } from "@/data/site.config";
import { testimonials } from "@/data/testimonials";
import styles from "./page.module.scss";

interface ServiceDetailClientProps {
  service: Service;
}

const iconMap: Record<string, LucideIcon> = {
  ArrowDownToLine: ArrowDownRight,
  ArrowDownRight,
  BatteryCharging: Gauge,
  Building2: ShieldCheck,
  CloudRain: Droplets,
  Database: Gauge,
  Drill: CircleDot,
  Droplets,
  Filter: ShieldCheck,
  GitBranch: ArrowRight,
  Gutter: ArrowDownRight,
  Lightbulb,
  ShieldCheck,
  ShowerHead: Droplets,
  Sprout: Sparkles,
  Sun: Sparkles,
  Zap: Gauge,
};

const audienceIcons: Record<string, LucideIcon> = {
  Residential: Home,
  Commercial: Building2,
  Schools: Users,
  Hospitals: ShieldCheck,
  Hotels: Sparkles,
  Farms: Sprout,
  Government: Landmark,
  NGOs: HandHeart,
  Manufacturing: Factory,
};

const integratedStages = [
  { id: "source", label: "Water source", kicker: "01", icon: Drill, description: "Find and secure the water beneath or around your site.", services: ["Borehole drilling", "Water harvesting"] },
  { id: "power", label: "Solar energy", kicker: "02", icon: Sun, description: "Use clean, dependable power to move and manage it.", services: ["Solar energy", "Electrical"] },
  { id: "storage", label: "Storage", kicker: "03", icon: Database, description: "Hold supply where it is available, ready for demand.", services: ["Water storage", "Water harvesting"] },
  { id: "delivery", label: "Pumping", kicker: "04", icon: Droplets, description: "Move water and power to where they are needed, efficiently.", services: ["Irrigation", "Plumbing"] },
  { id: "result", label: "Productive land", kicker: "05", icon: Sprout, description: "Turn reliable infrastructure into a stronger operation.", services: ["Irrigation", "Solar energy"] },
];

const processSteps = [
  { number: "01", title: "Assess", description: "We inspect the site, listen carefully and define the real need." },
  { number: "02", title: "Design", description: "Our specialists connect the right technologies into one workable plan." },
  { number: "03", title: "Implement", description: "Certified teams install with care, precision and minimal disruption." },
  { number: "04", title: "Commission", description: "We test every part, explain the system and hand it over properly." },
  { number: "05", title: "Support", description: "We stay close with maintenance, improvements and practical advice." },
];

const problemPoints = [
  { number: "01", title: "Unreliable supply", description: "Power cuts, dry seasons and municipal interruptions make planning fragile." },
  { number: "02", title: "Disconnected fixes", description: "A pump without storage, or storage without a dependable source, only moves the problem." },
  { number: "03", title: "Waste at the edges", description: "Poor sizing and inefficient delivery turn scarce water and energy into avoidable cost." },
];

const serviceStats = [
  { value: "4,200+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "15+", label: "Years experience" },
  { value: "8", label: "Counties served" },
];

function getIcon(name: string): LucideIcon {
  return iconMap[name] || Sparkles;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [selectedServiceSlug, setSelectedServiceSlug] = useState(service.slug);
  const [selectedStageId, setSelectedStageId] = useState("source");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const selectedService = getServiceBySlug(selectedServiceSlug) || service;
  const activeStage = integratedStages.find((stage) => stage.id === selectedStageId) || integratedStages[0];
  const activeTestimonial = testimonials[testimonialIndex % testimonials.length];
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 4);
  const heroIcon = getIcon(service.icon);
  const HeroIcon = heroIcon;

  const changeTestimonial = (direction: number) => {
    setTestimonialIndex((current) =>
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
              <div className={styles.eyebrow}><span /> What we do</div>
              <h1>{service.name}</h1>
              <p className={styles.heroLead}>{service.tagline}</p>
              <p className={styles.heroDescription}>{service.longDescription}</p>
              <div className={styles.heroActions}>
                <LinkButton href="/quote" size="lg" rightIcon={<ArrowUpRight size={18} />}>
                  Get a Free Assessment
                </LinkButton>
                <a className={styles.textLink} href="#services">
                  Explore Our Services <ArrowRight size={17} />
                </a>
              </div>
              <div className={styles.heroMeta}>
                <span><ShieldCheck size={16} /> Certified workmanship</span>
                <span><Clock3 size={16} /> Clear project timelines</span>
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
                  <span className={styles.visualIcon}><HeroIcon size={19} /></span>
                  <span><small>Specialist service</small>{service.shortName}</span>
                </div>
              </div>
              <div className={styles.heroSystem} aria-label="Integrated solution system">
                <div className={styles.heroSystemHeader}><span>Connected system</span><span><CircleDot size={11} /> Designed as one</span></div>
                <div className={styles.heroSystemFlow}>
                  {integratedStages.map((stage, index) => {
                    const StageIcon = stage.icon;
                    return (
                      <div className={styles.heroSystemItem} key={stage.id}>
                        <motion.div className={styles.heroSystemNode} initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .45 + index * .12, duration: .5, ease: "easeOut" }}>
                          <StageIcon size={17} />
                        </motion.div>
                        <span><small>{stage.kicker}</small>{stage.label}</span>
                        {index < integratedStages.length - 1 && <motion.span className={styles.heroSystemLine} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: .8 + index * .14, duration: .7, ease: "easeOut" }} />}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.floatingCard}>
                <span className={styles.floatingIcon}><Check size={16} /></span>
                <span><strong>Built for your brief</strong><small>From first survey to final handover</small></span>
              </div>
              <div className={styles.visualIndex}>0{services.findIndex((item) => item.slug === service.slug) + 1}<span>/ 07</span></div>
            </motion.div>
          </div>
        </div>
        <div className={styles.heroRule} />
      </section>

      <section className={styles.problemSection}>
        <div className={styles.container}>
          <div className={styles.problemGrid}>
            <div className={styles.problemHeading}><div className={styles.eyebrow}><span /> The problem we solve</div><h2>Infrastructure rarely fails in isolation.</h2></div>
            <div className={styles.problemBody}><p>When water is unreliable, energy becomes expensive. When energy is unstable, pumping and production suffer. The right answer is rarely one product on its own — it is a system that understands how each part affects the next.</p><span className={styles.problemNote}><ArrowDownRight size={17} /> From source to outcome</span></div>
          </div>
          <div className={styles.problemPoints}>{problemPoints.map((point, index) => <motion.div key={point.number} className={styles.problemPoint} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}><span>{point.number}</span><div><h3>{point.title}</h3><p>{point.description}</p></div></motion.div>)}</div>
        </div>
      </section>

      <section className={styles.statStrip} aria-label="Company statistics">
        <div className={styles.container}>
          <div className={styles.statGrid}>
            {serviceStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={styles.stat}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <strong>{stat.value}</strong><span>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="services">
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <div className={styles.eyebrow}><span /> Our capabilities</div>
              <h2>One partner for the details that matter.</h2>
            </div>
            <p>Every service is delivered with the same disciplined approach: thoughtful design, quality materials and a finish that performs in the real world.</p>
          </div>

          <div className={styles.serviceLayout}>
            <div className={styles.serviceList} role="tablist" aria-label="Explore services">
              {services.map((item, index) => {
                const Icon = getIcon(item.icon);
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
                    <span className={styles.serviceItemNumber}>0{index + 1}</span>
                    <span className={styles.serviceItemIcon}><Icon size={20} /></span>
                    <span className={styles.serviceItemText}><strong>{item.shortName}</strong><small>{item.tagline}</small></span>
                    <ArrowUpRight className={styles.serviceItemArrow} size={19} />
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
                <div className={styles.panelTopline}><span>Selected service</span><span>{selectedService.startingPrice} starting point</span></div>
                <h3>{selectedService.name}</h3>
                <p>{selectedService.description}</p>
                <div className={styles.featureGrid}>
                  {selectedService.features.slice(0, 6).map((feature) => (
                    <div className={styles.feature} key={feature.title}>
                      <CheckCircle2 size={17} />
                      <span><strong>{feature.title}</strong><small>{feature.description}</small></span>
                    </div>
                  ))}
                </div>
                <Link href={`/quote?service=${selectedService.slug}`} className={styles.panelLink}>Get a Free Assessment <ArrowUpRight size={17} /></Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className={styles.integrationSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}><div><div className={styles.eyebrow}><span /> Integrated solutions</div><h2>Every stage strengthens the next.</h2></div><p>Explore the chain that turns individual services into a complete, useful outcome. Select a stage to see what it needs and what it unlocks.</p></div>
          <div className={styles.integrationFlow} role="tablist" aria-label="Integrated solution stages">
            {integratedStages.map((stage, index) => { const StageIcon = stage.icon; const isActive = stage.id === activeStage.id; return <button type="button" role="tab" aria-selected={isActive} className={`${styles.integrationStage} ${isActive ? styles.integrationStageActive : ""}`} key={stage.id} onClick={() => setSelectedStageId(stage.id)}><span className={styles.integrationStageNumber}>{stage.kicker}</span><span className={styles.integrationStageIcon}><StageIcon size={20} /></span><strong>{stage.label}</strong>{index < integratedStages.length - 1 && <ArrowRight className={styles.integrationStageArrow} size={17} />}</button>; })}
          </div>
          <AnimatePresence mode="wait"><motion.div key={activeStage.id} className={styles.integrationDetail} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .24 }}><div><span className={styles.detailKicker}>Stage {activeStage.kicker}</span><h3>{activeStage.label}</h3><p>{activeStage.description}</p></div><div className={styles.detailServices}><span>Relevant services</span><div>{activeStage.services.map((item) => <span key={item}><Check size={14} /> {item}</span>)}</div></div><ArrowDownRight className={styles.integrationDetailArrow} size={28} /></motion.div></AnimatePresence>
        </div>
      </section>

      <section className={`${styles.section} ${styles.processSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <div className={styles.eyebrow}><span /> How we work</div>
              <h2>A clearer path from idea to impact.</h2>
            </div>
            <p>No hand-offs into the unknown. You get a considered plan, direct communication and a team accountable for the outcome.</p>
          </div>
          <div className={styles.processTrack}>
            <div className={styles.trackLine} aria-hidden="true" />
            {processSteps.map((step, index) => (
              <motion.div
                className={styles.processStep}
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.processMarker}>{step.number}</div>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.insightSection}>
        <div className={styles.container}>
          <div className={styles.insightGrid}>
            <div className={styles.insightCopy}>
              <div className={styles.eyebrow}><span /> Designed around performance</div>
              <h2>Good engineering should feel simple.</h2>
              <p>We make complex infrastructure easier to understand, easier to maintain and better suited to the way your property actually works.</p>
              <ul className={styles.checkList}>
                <li><CheckCircle2 size={18} /> Straightforward recommendations</li>
                <li><CheckCircle2 size={18} /> Quality-led installation</li>
                <li><CheckCircle2 size={18} /> Practical aftercare and support</li>
              </ul>
              <LinkButton href="/contact" variant="outline" rightIcon={<ArrowRight size={17} />}>Talk to an expert</LinkButton>
            </div>
            <div className={styles.infographic}>
              <div className={styles.infographicHeader}><span>System view</span><span><CircleDot size={13} /> Live project logic</span></div>
              <div className={styles.diagram}>
                {service.infographic.map((step, index) => {
                  const Icon = getIcon(step.icon);
                  return (
                    <div className={styles.diagramStep} key={step.label}>
                      <div className={styles.diagramOrb}><Icon size={23} /></div>
                      <span className={styles.diagramNumber}>0{index + 1}</span>
                      <strong>{step.label}</strong>
                      <small>{step.description}</small>
                      {index < service.infographic.length - 1 && <ArrowRight className={styles.diagramArrow} size={18} aria-hidden="true" />}
                    </div>
                  );
                })}
              </div>
              <div className={styles.diagramFooter}><Lightbulb size={17} /> {service.infographicSubtitle}</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <div className={styles.container}>
          <div className={styles.testimonialHeader}><div><div className={styles.eyebrow}><span /> Client perspective</div><h2>Work that earns trust.</h2></div><div className={styles.testimonialControls}><button type="button" onClick={() => changeTestimonial(-1)} aria-label="Previous testimonial"><ChevronLeft size={19} /></button><span>{String(testimonialIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span><button type="button" onClick={() => changeTestimonial(1)} aria-label="Next testimonial"><ChevronRight size={19} /></button></div></div>
          <AnimatePresence mode="wait">
            <motion.div key={activeTestimonial.id} className={styles.testimonial} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
              <Quote className={styles.quoteIcon} size={45} />
              <blockquote>“{activeTestimonial.content}”</blockquote>
              <div className={styles.testimonialPerson}><ImageWithFallback src={activeTestimonial.avatar} alt={activeTestimonial.name} width={52} height={52} className={styles.avatar} /><span><strong>{activeTestimonial.name}</strong><small>{activeTestimonial.role}, {activeTestimonial.company}</small></span><span className={styles.rating}>{Array.from({ length: activeTestimonial.rating }).map((_, index) => <Star key={index} size={15} fill="currentColor" />)}</span></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <div className={styles.relatedHeader}><div><div className={styles.eyebrow}><span /> More from Infield</div><h2>One challenge rarely stands alone.</h2></div><Link href="/services" className={styles.textLink}>View all services <ArrowRight size={17} /></Link></div>
          <div className={styles.relatedGrid}>{relatedServices.map((item) => { const Icon = getIcon(item.icon); return <Link href={`/services/${item.slug}`} className={styles.relatedCard} key={item.slug}><span className={styles.relatedIcon}><Icon size={21} /></span><span className={styles.relatedNumber}>{String(services.indexOf(item) + 1).padStart(2, "0")}</span><h3>{item.shortName}</h3><p>{item.tagline}</p><ArrowUpRight className={styles.relatedArrow} size={18} /></Link>; })}</div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}><div className={styles.ctaPanel}><div className={styles.ctaGlow} /><div className={styles.ctaContent}><div className={styles.eyebrow}><span /> Start a conversation</div><h2>Have a project in mind?</h2><p>Let&apos;s build something exceptional together — with a plan that makes sense from day one.</p><div className={styles.ctaActions}><LinkButton href="/quote" size="lg" rightIcon={<ArrowUpRight size={18} />}>Start a project</LinkButton><a href={siteConfig.phoneHref} className={styles.ctaContact}><Phone size={17} /> {siteConfig.phone}</a></div></div><div className={styles.ctaAside}><span>Ready when you are</span><strong>Let&apos;s make it work.</strong><Mail size={27} /></div></div></div>
      </section>
    </div>
  );
}
