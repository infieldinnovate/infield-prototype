import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import ServicesGrid from "./ServicesGrid";
import { siteConfig } from "@/data/site.config";
import styles from "./services.module.scss";
import {
  Sun,
  Droplets,
  Zap,
  Waves,
  Sprout,
  ArrowRight,
  CircleCheck as CheckCircle,
  Phone,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our comprehensive range of services: electrical, plumbing, solar installation, irrigation systems, and borehole drilling. Professional, certified, and reliable.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Our Services | ${siteConfig.name}`,
    description:
      "Explore our comprehensive range of services: electrical, plumbing, solar installation, irrigation systems, and borehole drilling. Professional, certified, and reliable.",
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Services | ${siteConfig.name}`,
    description:
      "Explore our comprehensive range of services: electrical, plumbing, solar installation, irrigation systems, and borehole drilling.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "solar",
      title: "Solar Solutions",
      subtitle: "Harness the Power of the Sun",
      description:
        "End-to-end solar energy solutions for homes, businesses, and institutions, including system design, installation, battery storage, and ongoing maintenance.",
      icon: <Sun size={60} />,
      image: "/solar/solar_9283740293.jpg",
      features: [
        "Solar System Design & Sizing",
        "Residential & Commercial Installations",
        "Solar Water Heating Systems",
        "Battery Energy Storage Solutions",
        "Grid-Tied & Off-Grid Solar Systems",
        "System Maintenance & Performance Monitoring",
        "Energy Efficiency Audits",
        "Solar Pumping Solutions",
      ],
      benefits: [
        "Reduce electricity bills by up to 90%",
        "Reliable clean energy",
        "Lower carbon footprint",
        "25-year solar panel warranty",
      ],
      service_href: "/services/solar",
      color: "#fbbf24",
    },
    {
      id: "electrical",
      title: "Electrical Installations",
      subtitle: "Safe & Reliable Power Solutions",
      description:
        "Professional electrical installation, maintenance, and upgrade services for residential, commercial, and industrial projects, delivered to the highest safety standards.",
      icon: <Zap size={60} />,
      image: "/electrical/electrical_482938.jpg",
      features: [
        "Complete House & Commercial Wiring",
        "Indoor & Outdoor Lighting Installation",
        "Switches, Sockets & Power Outlets",
        "Distribution Board (DB) Installation",
        "Earthing & Lightning Protection",
        "Generator, UPS & Backup Power Integration",
        "Electrical Panel Upgrades",
        "Inspection, Testing & Preventive Maintenance",
      ],
      benefits: [
        "Improved electrical safety",
        "Energy-efficient installations",
        "Standards-compliant workmanship",
        "Future-ready electrical systems",
      ],
      service_href: "/services/electrical",
      color: "#f97316",
    },
    {
      id: "plumbing",
      title: "Plumbing Services",
      subtitle: "Professional Water Solutions",
      description:
        "Reliable plumbing services for residential and commercial properties, covering installations, repairs, maintenance, and water distribution systems.",
      icon: <Droplets size={60} />,
      image: "/plumbing/plumbing_279876362s.jpg",
      features: [
        "Plumbing Fixture Installation & Repairs",
        "Pipe Installation & Repiping",
        "Water Supply System Installation",
        "Drainage & Sewer Line Solutions",
        "Water Heater Installation & Servicing",
        "Leak Detection & Repairs",
        "Bathroom & Kitchen Plumbing Renovations",
        "Routine Plumbing Maintenance",
      ],
      benefits: [
        "Fast and reliable service",
        "Licensed and experienced technicians",
        "High-quality materials",
        "Transparent and competitive pricing",
      ],
      service_href: "/services/plumbing",
      color: "#1e40af",
    },
    {
      id: "borehole",
      title: "Borehole Solutions",
      subtitle: "Reliable Access to Clean Water",
      description:
        "Complete borehole drilling and water supply solutions, from hydrogeological surveys to pump installation, water testing, and ongoing maintenance.",
      icon: <Waves size={60} />,
      image: "/borehole/borehole-6734280429.jpg",
      features: [
        "Hydrogeological Surveys",
        "Borehole Drilling & Casing",
        "Pump Installation & Maintenance",
        "Water Quality Testing",
        "Borehole Development & Rehabilitation",
        "Solar Borehole Pump Systems",
        "Water Storage Tank Installation",
        "Routine Borehole Servicing",
      ],
      benefits: [
        "Reliable year-round water supply",
        "Long-term cost savings",
        "Professionally tested water quality",
        "Modern drilling equipment",
      ],
      service_href: "/services/borehole",
      color: "#0891b2",
    },
    {
      id: "irrigation",
      title: "Irrigation Systems",
      subtitle: "Smart Water Management",
      description:
        "Custom irrigation solutions for farms, landscapes, and commercial properties, designed to maximize water efficiency and improve productivity.",
      icon: <Sprout size={60} />,
      image: "/irrigation/irrigation_489637824.jpg",
      features: [
        "Irrigation System Design & Planning",
        "Drip Irrigation Systems",
        "Sprinkler System Installation",
        "Water Distribution Pipe Networks",
        "Pressure Regulation Systems",
        "Filtration & Water Treatment",
        "Smart Irrigation Controllers",
        "System Maintenance & Optimization",
      ],
      benefits: [
        "Save up to 50% on water usage",
        "Increase crop productivity",
        "Automated irrigation scheduling",
        "Lower operating and labor costs",
      ],
      service_href: "/services/irrigation",
      color: "#10b981",
    },
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Services" }]}
          />
          <SectionHeading
            eyebrow="What We Do"
            title="Professional Services for Your Every Need"
            description="Comprehensive water and energy solutions tailored to your specific
              needs"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <ServicesGrid services={services} />
      </section>
    </>
  );
}
