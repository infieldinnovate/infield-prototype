"use client";

import { useMemo } from "react";
import {
  Building2,
  CheckCircle2,
  ClipboardCheck,
  MapPin,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import {
  PremiumCarousel,
  type PremiumSlide,
} from "@/components/sections/PremiumCarousel";
import { siteConfig } from "@/data/site.config";
import { SERVICES } from "@/data/services";
import { ServiceIcons } from "@/data/service-icons";
import { processSteps } from "@/data/process";
import { certificationsList } from "@/data/certifications";
import { safetyCommitments } from "@/data/safety";
import { countiesServed } from "@/data/serviceAreas";

export default function AboutHeroCarousel() {
  const slides: PremiumSlide[] = useMemo(() => {
    // ── 01 Who We Are ──
    const slide1: PremiumSlide = {
      image: "/about/solar-structure-155821_747.jpg",
      imageAlt: "Infield Innovations team at work",
      imagePriority: true,
      badge: "Who We Are",
      badgeIcon: Building2,
      eyebrow: `Since ${siteConfig.foundedYear}`,
      title: "Engineering excellence across Kenya.",
      description:
        "From a three-person operation to a multi-disciplinary engineering company — we combine technical expertise with genuine care for every project we deliver.",
      meta: [
        { icon: Users, text: "28 certified professionals" },
        { icon: CheckCircle2, text: "150+ projects completed" },
      ],
      primaryButton: { label: "Our Story", href: "/about" },
      secondaryButton: { label: "Contact Us", href: "/contact" },
    };

    // ── 02 What We Do ──
    const serviceNames = SERVICES.map((s) => s.shortName).join(" · ");
    const slide2: PremiumSlide = {
      image: "/about/borehole-132108_3620.jpg",
      imageAlt: "Solar and engineering installations",
      imagePriority: false,
      badge: "What We Do",
      badgeIcon: Settings,
      eyebrow: "Water + Energy + Engineering",
      title: "Integrated solutions, one trusted partner.",
      description: serviceNames,
      meta: SERVICES.slice(0, 4).map((s) => {
        const Icon = ServiceIcons[s.icon] ?? CheckCircle2;
        return { icon: Icon, text: s.shortName };
      }),
      primaryButton: { label: "Explore Services", href: "/services/solar" },
      secondaryButton: { label: "Get a Quote", href: "/quote" },
    };

    // ── 03 How We Work ──
    const slide3: PremiumSlide = {
      image: "/about/borehole-85643547345.jpg",
      imageAlt: "Engineers assessing and installing systems",
      imagePriority: false,
      badge: "How We Work",
      badgeIcon: ClipboardCheck,
      eyebrow: "Our Process",
      title: "A clearer path from idea to impact.",
      description:
        "No hand-offs into the unknown — a considered plan, direct communication, and a team accountable for the outcome.",
      meta: [
        { icon: processSteps[0].icon, text: "Assess" },
        { icon: processSteps[2].icon, text: "Design" },
        { icon: processSteps[4].icon, text: "Install" },
        { icon: processSteps[7].icon, text: "Support" },
      ],
      primaryButton: {
        label: "See Our Process",
        href: "/resources/knowledge-centre",
      },
    };

    // ── 04 Why Choose Us ──
    const slide4: PremiumSlide = {
      image: "/about/borehole-135232_716.jpg",
      imageAlt: "Quality engineering and safety on site",
      imagePriority: false,
      badge: "Why Choose Us",
      badgeIcon: ShieldCheck,
      eyebrow: "Certified & Trusted",
      title: "Engineering that holds together.",
      description:
        "Quality, safety, reliability, and professional expertise — backed by certifications and a commitment to doing the job right.",
      meta: [
        { icon: certificationsList[1].icon, text: "ISO 9001 Quality" },
        { icon: safetyCommitments[0].icon, text: "Certified Safety" },
        { icon: safetyCommitments[3].icon, text: "Insured & Warranted" },
        { icon: safetyCommitments[5].icon, text: "Expert Team" },
      ],
      primaryButton: { label: "Our Certifications", href: "/about" },
    };

    // ── 05 Our Reach ──
    const countyCount = countiesServed.length;
    const slide5: PremiumSlide = {
      image: "/about/tank-89675647.jpg",
      imageAlt: "Projects across Kenya",
      imagePriority: false,
      badge: "Our Reach",
      badgeIcon: MapPin,
      eyebrow: "Nationwide Coverage",
      title: "Delivering across Kenya.",
      description: `We have delivered projects across ${countyCount} counties — from Meru to Marsabit, Nairobi to Garissa. Wherever you are, we can help.`,
      meta: [
        { icon: MapPin, text: `${countyCount} counties served` },
        { icon: CheckCircle2, text: "150+ installations" },
      ],
      primaryButton: { label: "View Projects", href: "/resources/projects" },
      secondaryButton: { label: "Get a Quote", href: "/quote" },
    };

    return [slide1, slide2, slide3, slide4, slide5];
  }, []);

  return (
    <PremiumCarousel
      slides={slides}
      autoplayDelay={6000}
      loop={slides.length > 1}
    />
  );
}
