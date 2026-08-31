// data\whatsappOptions.ts

export interface ChatOption {
  label: string;
  message: string;
}

export const chatOptions: ChatOption[] = [
  {
    label: "Get a Quote",
    message:
      "Hello Infield Innovations, I'd like to get a quote. Please let me know how I can share my project requirements.",
  },
  {
    label: "Request a Site Visit",
    message:
      "Hello Infield Innovations, I'd like to request a site visit. Please let me know the next steps.",
  },
  {
    label: "Speak to an Expert",
    message:
      "Hello Infield Innovations, I'd like to speak with an expert about my project. Please assist me.",
  },
  {
    label: "Solar & Electrical",
    message:
      "Hello Infield Innovations, I'm interested in solar and electrical solutions. I'd like to discuss my project requirements.",
  },
  {
    label: "Water & Borehole",
    message:
      "Hello Infield Innovations, I'm interested in water or borehole solutions. I'd like to discuss my project requirements.",
  },
];
