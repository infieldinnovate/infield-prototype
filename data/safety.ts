import {
  LucideIcon,
  HardHat,
  ClipboardCheck,
  BadgeCheck,
  CheckCircle2,
  FileCheck,
  GraduationCap,
} from "lucide-react";

interface SafetyItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const safetyCommitments: SafetyItem[] = [
  {
    id: "s1",
    title: "Safety-Trained Team",
    description:
      "Our teams follow established occupational health and safety procedures appropriate to the work and site conditions.",
    icon: HardHat,
  },
  {
    id: "s2",
    title: "Risk Assessment First",
    description:
      "Projects are assessed for relevant hazards and site risks before work begins, with appropriate control measures put in place.",
    icon: ClipboardCheck,
  },
  {
    id: "s3",
    title: "Quality Materials",
    description:
      "We aim to use suitable, quality materials and equipment from reputable manufacturers, selected according to project requirements.",
    icon: BadgeCheck,
  },
  {
    id: "s4",
    title: "Documented Quality Checks",
    description:
      "Where applicable, installation, testing, commissioning, and handover checks are documented as part of project delivery.",
    icon: CheckCircle2,
  },
  {
    id: "s5",
    title: "Regulatory Compliance",
    description:
      "We plan and execute work with applicable Kenyan technical, safety, and regulatory requirements in mind, including approvals where required.",
    icon: FileCheck,
  },
  {
    id: "s6",
    title: "Continuous Professional Development",
    description:
      "Our team continues to develop its technical and safety knowledge to keep pace with changing industry requirements and good engineering practice.",
    icon: GraduationCap,
  },
];
