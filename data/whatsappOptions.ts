export interface ChatOption {
  label: string;
  message: string;
}

export const chatOptions: ChatOption[] = [
  {
    label: "Solar Solutions",
    message:
      "Hello — I'm interested in Infield Innovations' solar solutions (design, installation, battery storage). Can you share a quote and next steps?",
  },
  {
    label: "Electrical Installations",
    message:
      "Hi — I need information on electrical installation services for a residential/commercial project. Please share availability and pricing.",
  },
  {
    label: "Plumbing Services",
    message:
      "Hello — I'm enquiring about plumbing services (repairs, installations, emergency). Could you advise on next steps and rates?",
  },
  {
    label: "Borehole Solutions",
    message:
      "Hi — I'd like a quote and timeline for borehole drilling, pump installation and water testing from Infield Innovations.",
  },
  {
    label: "Irrigation Systems",
    message:
      "Hello — I'm interested in irrigation system design and installation (drip/sprinkler). Could you send info and sample proposals?",
  },
  {
    label: "Get a Quote",
    message:
      "Hi — I'd like a tailored quote. My project: [brief description]. Please advise required steps and documentation.",
  },
];
