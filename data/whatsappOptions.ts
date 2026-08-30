import { siteConfig } from "./site.config";

export interface ChatOption {
  customerCare: string;
  label: string;
  message: string;
}

export const chatOptions: ChatOption[] = [
  {
    customerCare: siteConfig.whatsapp,
    label: "Solar Solutions",
    message:
      "Hello — I'm interested in Infield Innovations' solar solutions (design, installation, battery storage). Can you share a quote and next steps?",
  },
  {
    customerCare: siteConfig.whatsapp,
    label: "Electrical Installations",
    message:
      "Hi — I need information on electrical installation services for a residential/commercial project. Please share availability and pricing.",
  },
  {
    customerCare: siteConfig.whatsapp,
    label: "Plumbing Services",
    message:
      "Hello — I'm enquiring about plumbing services (repairs, installations, emergency). Could you advise on next steps and rates?",
  },
  {
    customerCare: siteConfig.whatsapp,
    label: "Borehole Solutions",
    message:
      "Hi — I'd like a quote and timeline for borehole drilling, pump installation and water testing from Infield Innovations.",
  },
  {
    customerCare: siteConfig.whatsapp,
    label: "Irrigation Systems",
    message:
      "Hello — I'm interested in irrigation system design and installation (drip/sprinkler). Could you send info and sample proposals?",
  },
  {
    customerCare: siteConfig.whatsapp,
    label: "Get a Quote",
    message:
      "Hi — I'd like a tailored quote. My project: [brief description]. Please advise required steps and documentation.",
  },
];
