"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Clock3,
  Droplets,
  ExternalLink,
  Gauge,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { LinkButton } from "@/components/ui/LinkButton";
import { getServiceBySlug, services, type Service } from "@/data/services";
import { siteConfig, stats } from "@/data/site.config";
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

const processSteps = [
  { number: "01", title: "Discover", description: "We listen, inspect the site and understand the result you need." },
  { number: "02", title: "Plan", description: "Our specialists turn your brief into a clear, buildable solution." },
  { number: "03", title: "Build", description: "Certified teams install with care, precision and minimal disruption." },
  { number: "04", title: "Launch & Grow", description: "We test, hand over and stay close for maintenance and improvements." },
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
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const selectedService = getServiceBySlug(selectedServiceSlug) || service;
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
                  Get started
                </LinkButton>
                <a className={styles.textLink} href="#services">
                  Explore our approach <ArrowRight size={17} />
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
                <Link href={`/quote?service=${selectedService.slug}`} className={styles.panelLink}>Discuss this service <ArrowUpRight size={17} /></Link>
              </motion.div>
            </AnimatePresence>
          </div>
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
