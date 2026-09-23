// data/process.ts

import {
  CheckCircle2,
  FileText,
  Handshake,
  MapPin,
  MessageCircle,
  PenTool,
  Settings,
  Wrench,
  type LucideIcon,
} from "lucide-react";

// ============================================
// Our Process Data
// ============================================

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Consultation",
    description:
      "We discuss your needs, goals, budget, and project scope to understand the right solution for your requirements.",
    icon: MessageCircle,
  },

  {
    step: 2,
    title: "Site Visit",
    description:
      "Our engineers assess the site, take measurements, review existing conditions, and identify technical requirements and challenges.",
    icon: MapPin,
  },

  {
    step: 3,
    title: "Design",
    description:
      "We develop a practical system design tailored to your site, requirements, performance needs, and applicable standards.",
    icon: PenTool,
  },

  {
    step: 4,
    title: "Proposal & Quotation",
    description:
      "You receive a clear proposal and itemised quotation outlining the recommended solution, scope of work, costs, and project expectations.",
    icon: FileText,
  },

  {
    step: 5,
    title: "Installation",
    description:
      "Our qualified team carries out the installation professionally, safely, and in accordance with the approved design and applicable requirements.",
    icon: Wrench,
  },

  {
    step: 6,
    title: "Testing & Commissioning",
    description:
      "We test and commission the completed system to verify safety, functionality, performance, and readiness for use.",
    icon: CheckCircle2,
  },

  {
    step: 7,
    title: "Handover",
    description:
      "We guide you through the completed system, provide relevant documentation, and explain operation, care, and maintenance requirements.",
    icon: Handshake,
  },

  {
    step: 8,
    title: "Maintenance & Support",
    description:
      "We provide ongoing maintenance and technical support to help keep your system operating reliably and efficiently.",
    icon: Settings,
  },
];
