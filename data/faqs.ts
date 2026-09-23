// ============================================
// FAQs Data (Expanded)
// ============================================

import { ServiceSlug, SERVICE_CATEGORIES } from "./services";

export type FAQSlug = ServiceSlug | "general";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQSlug;
  isPopular?: boolean;
}

type FAQCategory = {
  slug: FAQSlug;
  label: string;
};

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    slug: "general",
    label: "General",
  },
  ...SERVICE_CATEGORIES,
];

export const FAQs: FAQ[] = [
  // ============================================================
  // GENERAL — 10 QUESTIONS
  // ============================================================

  {
    id: "general-1",
    question: "What services does Infield Innovations provide?",
    answer:
      "Infield Innovations provides integrated water, energy, electrical and infrastructure solutions, including solar energy systems, electrical installations, plumbing, borehole drilling, water storage, irrigation, and rainwater harvesting. We serve homes, farms, businesses, institutions, and other properties.",
    category: "general",
  },

  {
    id: "general-2",
    question: "Can you help me choose the right solution for my property?",
    answer:
      "Yes. We assess your needs, existing infrastructure, site conditions, water or energy demand, budget, and future requirements before recommending a suitable solution. Where appropriate, we can combine systems such as solar, pumping, storage, and irrigation.",
    category: "general",
  },

  {
    id: "general-3",
    question: "How do I know which service I need?",
    answer:
      "You do not need to diagnose the problem yourself. Tell us what is happening—for example, high electricity bills, power interruptions, low water pressure, unreliable water supply, leaking pipes, poor irrigation coverage, or a planned project—and we can recommend the appropriate assessment or service.",
    category: "general",
  },

  {
    id: "general-4",
    question: "Do you provide site assessments before starting a project?",
    answer:
      "For projects where site conditions affect the design or cost, we recommend an assessment before installation or construction. This may include evaluating electrical loads, roof conditions, water demand, groundwater conditions, irrigation requirements, or available space.",
    category: "general",
    isPopular: true,
  },

  {
    id: "general-5",
    question: "How do I request a quotation?",
    answer:
      "Contact us with your location, the service you need, the problem you are experiencing, and any available information about your property or existing system. Where necessary, we arrange a site assessment before preparing an accurate quotation.",
    category: "general",
    isPopular: true,
  },

  {
    id: "general-6",
    question: "How long does a project take?",
    answer:
      "The timeline depends on the type, size, site conditions, materials, approvals, and scope of work. Small repairs may be completed quickly, while installations, boreholes, irrigation systems, and larger infrastructure projects require more planning. We provide an expected timeline during the quotation and planning stage.",
    category: "general",
  },

  {
    id: "general-7",
    question: "Do you work on existing systems or only new installations?",
    answer:
      "We can work on both new installations and existing systems, subject to assessment. This includes troubleshooting, repairs, upgrades, replacements, maintenance, and improvements to systems installed by other providers.",
    category: "general",
  },

  {
    id: "general-8",
    question: "Do you provide maintenance after installation?",
    answer:
      "Yes. We provide maintenance and servicing for eligible systems we install and, where practical, existing systems. Preventive maintenance can help identify faults early, maintain performance, and reduce unexpected breakdowns.",
    category: "general",
    isPopular: true,
  },

  {
    id: "general-9",
    question: "Which areas do you serve?",
    answer:
      "We are based in Meru and serve customers in Meru and other locations depending on the project. For larger or specialized projects outside our regular service area, contact us to confirm availability and site requirements.",
    category: "general",
  },

  {
    id: "general-10",
    question: "What warranty do I receive?",
    answer:
      "Warranty coverage depends on the product, manufacturer, installation, and agreed workmanship terms. We explain the applicable warranty conditions in your quotation or project documentation. Manufacturer warranties are separate from workmanship warranties.",
    category: "general",
    isPopular: true,
  },

  // ============================================================
  // SOLAR — 5 QUESTIONS
  // ============================================================

  {
    id: "solar-1",
    question: "How much can I save with solar?",
    answer:
      "Savings depend on your electricity consumption, tariff, system size, solar resource, operating hours, equipment efficiency, and whether batteries are included. We estimate potential savings using your actual energy usage rather than promising a fixed percentage.",
    category: "solar",
    isPopular: true,
  },

  {
    id: "solar-2",
    question: "What size solar system do I need?",
    answer:
      "System size should be based on your electricity consumption, peak demand, appliances, operating hours, available solar resource, mounting space, backup requirements, and future expansion plans. We size the system around your actual requirements.",
    category: "solar",
    isPopular: true,
  },

  {
    id: "solar-3",
    question: "Will solar work during a power outage?",
    answer:
      "A standard grid-connected solar system normally shuts down during a grid outage for safety. To keep selected loads operating during an outage, the system needs an appropriate backup configuration, typically involving batteries and compatible power-control equipment.",
    category: "solar",
  },

  {
    id: "solar-4",
    question: "Do I need batteries with solar?",
    answer:
      "Not necessarily. Batteries are useful when you need backup power, want to use more solar energy after sunset, or want greater independence from the grid. A battery-free system may be more suitable when most of your electricity demand occurs during daylight hours.",
    category: "solar",
  },

  {
    id: "solar-5",
    question: "Why is my solar system producing less power than expected?",
    answer:
      "Possible causes include shading, dust or soiling, equipment faults, poor connections, inverter limitations, high temperatures, incorrect sizing, or changes in energy demand. We can inspect the system and identify the cause before recommending corrective work.",
    category: "solar",
  },

  // ============================================================
  // ELECTRICAL — 5 QUESTIONS
  // ============================================================

  {
    id: "electrical-1",
    question: "Why does my power keep tripping or going off?",
    answer:
      "Repeated tripping can be caused by overloaded circuits, short circuits, earth faults, faulty appliances, damaged wiring, or incorrectly rated protective devices. Do not repeatedly reset a breaker without identifying the cause. We can inspect and diagnose the electrical system.",
    category: "electrical",
    isPopular: true,
  },

  {
    id: "electrical-2",
    question:
      "Can you inspect and repair electrical problems in an old building?",
    answer:
      "Yes. We can inspect existing wiring, distribution boards, protective devices, earthing, connections, and loads to identify problems. Where necessary, we can recommend targeted repairs, upgrades, or partial rewiring.",
    category: "electrical",
  },

  {
    id: "electrical-3",
    question: "Can you handle new electrical installations and rewiring?",
    answer:
      "Yes. We provide electrical installation and upgrade services for suitable residential, commercial, and other projects, including wiring, distribution, lighting, sockets, protection systems, and related electrical infrastructure.",
    category: "electrical",
  },

  {
    id: "electrical-4",
    question: "Can you install backup power systems?",
    answer:
      "Yes. Depending on your requirements, backup solutions can include generators, inverter systems, batteries, solar, or hybrid configurations. We assess your critical loads and operating requirements before recommending the appropriate solution.",
    category: "electrical",
  },

  {
    id: "electrical-5",
    question:
      "Are your electrical installations compliant with Kenyan requirements?",
    answer:
      "Electrical work should be carried out in accordance with applicable Kenyan regulatory and technical requirements. We assess the project requirements and apply the relevant standards and compliance procedures within the scope of the work.",
    category: "electrical",
  },

  // ============================================================
  // BOREHOLES — 5 QUESTIONS
  // ============================================================

  {
    id: "boreholes-1",
    question: "How do I know if I can drill a borehole on my property?",
    answer:
      "Groundwater availability varies by location and geology. A professional hydrogeological assessment helps identify suitable drilling locations and provides information for planning the borehole. A survey cannot guarantee a particular water yield.",
    category: "boreholes",
    isPopular: true,
  },

  {
    id: "boreholes-2",
    question: "How deep will my borehole need to be?",
    answer:
      "There is no universal depth. Borehole depth depends on local geology, aquifer conditions, groundwater levels, target yield, and site-specific findings. The required depth should be determined through professional assessment and drilling conditions.",
    category: "boreholes",
  },

  {
    id: "boreholes-3",
    question: "Can you conduct a hydrogeological survey before drilling?",
    answer:
      "Yes. A professional groundwater assessment can help determine suitable drilling locations and inform borehole design. Depending on the site, the investigation may use hydrogeological and geophysical methods.",
    category: "boreholes",
  },

  {
    id: "boreholes-4",
    question: "Can you guarantee that drilling will find water?",
    answer:
      "No responsible contractor should guarantee a specific water yield before drilling. Groundwater conditions vary naturally. Professional site assessment can improve decision-making and reduce drilling risk, but it cannot eliminate geological uncertainty.",
    category: "boreholes",
    isPopular: true,
  },

  {
    id: "boreholes-5",
    question: "Can you install and power my borehole pump with solar?",
    answer:
      "Yes. We can design borehole pumping solutions around the required water volume, pumping head, borehole conditions, power availability, and intended use. Solar-powered pumping can be particularly useful for farms, remote sites, and properties seeking to reduce electricity or fuel costs.",
    category: "boreholes",
  },

  // ============================================================
  // PLUMBING — 5 QUESTIONS
  // ============================================================

  {
    id: "plumbing-1",
    question: "Why is my water pressure low?",
    answer:
      "Low pressure can be caused by undersized pipes, blocked filters, leaking pipes, pump problems, inadequate tank elevation, faulty valves, restrictions in the supply, or insufficient incoming pressure. We can inspect the system to identify the cause.",
    category: "plumbing",
    isPopular: true,
  },

  {
    id: "plumbing-2",
    question: "Why do my pipes keep leaking?",
    answer:
      "Recurring leaks may be caused by aging pipes, excessive pressure, poor joints, corrosion, movement, unsuitable materials, or previous poor-quality repairs. We can identify the source and recommend a durable repair or replacement.",
    category: "plumbing",
  },

  {
    id: "plumbing-3",
    question: "Can you repair burst pipes and major leaks?",
    answer:
      "Yes. We can diagnose and repair common plumbing failures such as burst pipes, leaking joints, damaged valves, and other water-supply problems. If a leak is severe, shut off the water supply where possible to limit property damage.",
    category: "plumbing",
  },

  {
    id: "plumbing-4",
    question: "Can you replace old or damaged plumbing?",
    answer:
      "Yes. We can replace sections of damaged pipework or undertake larger plumbing upgrades where the existing installation is no longer reliable or suitable for the property's requirements.",
    category: "plumbing",
  },

  {
    id: "plumbing-5",
    question: "Can you install plumbing for a new house or building?",
    answer:
      "Yes. We can provide plumbing installation according to the building's design, water demand, fixtures, storage arrangement, drainage requirements, and applicable project specifications.",
    category: "plumbing",
  },

  // ============================================================
  // IRRIGATION — 5 QUESTIONS
  // ============================================================

  {
    id: "irrigation-1",
    question: "Which irrigation system is best for my farm or garden?",
    answer:
      "The right system depends on crop or plant type, soil, water source, available pressure, field size, terrain, water quality, and budget. Options may include drip, sprinkler, micro-irrigation, or a combination.",
    category: "irrigation",
    isPopular: true,
  },

  {
    id: "irrigation-2",
    question: "Why is my irrigation system using too much water?",
    answer:
      "High water use can result from incorrect scheduling, leaks, poor sprinkler selection, excessive pressure, uneven distribution, evaporation, runoff, or watering areas that do not need the same amount of water. A system assessment can identify opportunities to improve efficiency.",
    category: "irrigation",
  },

  {
    id: "irrigation-3",
    question: "Can you design an irrigation system from scratch?",
    answer:
      "Yes. We assess the water source, required flow, field or landscape layout, elevation, crop or plant requirements, and pumping conditions before designing the system.",
    category: "irrigation",
  },

  {
    id: "irrigation-4",
    question: "Can you automate my irrigation system?",
    answer:
      "Yes. Depending on the project, irrigation can be automated using programmable controllers, valves, sensors, pumps, and other control equipment. Automation can improve scheduling and reduce unnecessary watering.",
    category: "irrigation",
    isPopular: true,
  },

  {
    id: "irrigation-5",
    question:
      "Can irrigation run from a borehole, tank, or solar-powered pump?",
    answer:
      "Yes. Irrigation can be designed around boreholes, storage tanks, harvested rainwater, mains supply, or solar-powered pumping systems. The design must account for available water, flow, pressure, filtration, pumping requirements, and irrigation demand.",
    category: "irrigation",
  },

  // ============================================================
  // WATER STORAGE — 5 QUESTIONS
  // ============================================================

  {
    id: "water-storage-1",
    question: "What size water tank do I need?",
    answer:
      "Tank size depends on daily water demand, number of users, irrigation requirements, available water supply, reliability of the source, and how many days of storage you need. We calculate the appropriate capacity based on your requirements.",
    category: "water-storage",
    isPopular: true,
  },

  {
    id: "water-storage-2",
    question: "Why does my water tank run empty too quickly?",
    answer:
      "The problem may be caused by insufficient tank capacity, high consumption, leaks, irrigation demand, pump problems, or an unreliable water source. We assess the complete water system rather than simply recommending a larger tank.",
    category: "water-storage",
  },

  {
    id: "water-storage-3",
    question: "Can you design and install a complete water storage system?",
    answer:
      "Yes. We can design storage arrangements around your water source, daily demand, available space, pumping requirements, and distribution system.",
    category: "water-storage",
  },

  {
    id: "water-storage-4",
    question:
      "Can you connect a water tank to a borehole or rainwater harvesting system?",
    answer:
      "Yes. Tanks can be integrated with suitable borehole pumps, rainwater harvesting systems, mains supply, pressure systems, and irrigation networks depending on the site configuration.",
    category: "water-storage",
  },

  {
    id: "water-storage-5",
    question: "Do you install elevated water tanks and towers?",
    answer:
      "Yes, where appropriate to the project. Elevated storage can provide gravity-assisted distribution, but the structure and tank arrangement must be designed for the required load, height, water demand, and site conditions.",
    category: "water-storage",
  },

  // ============================================================
  // WATER HARVESTING — 5 QUESTIONS
  // ============================================================

  {
    id: "water-harvesting-1",
    question: "Can I collect rainwater from my roof?",
    answer:
      "Yes. Roof rainwater harvesting can collect water for suitable domestic, agricultural, cleaning, irrigation, or other uses. The system should be designed around roof area, rainfall, collection efficiency, storage capacity, water demand, and intended use.",
    category: "water-harvesting",
    isPopular: true,
  },

  {
    id: "water-harvesting-2",
    question: "How much rainwater can I harvest?",
    answer:
      "Potential harvest depends mainly on roof catchment area, rainfall, runoff characteristics, and collection efficiency. Storage should be sized around local rainfall patterns and the property's actual water demand.",
    category: "water-harvesting",
  },

  {
    id: "water-harvesting-3",
    question: "Is harvested rainwater safe to drink?",
    answer:
      "Rainwater should not automatically be assumed to be potable. Drinking-water use requires appropriate collection hygiene, filtration, disinfection, and suitable water-quality testing. The treatment required depends on the source and intended use.",
    category: "water-harvesting",
    isPopular: true,
  },

  {
    id: "water-harvesting-4",
    question: "Can rainwater harvesting reduce my water bills?",
    answer:
      "It can reduce dependence on purchased or mains water for suitable applications, particularly irrigation, cleaning, and other non-potable uses. The financial benefit depends on rainfall, storage capacity, water demand, and the cost of alternative water supplies.",
    category: "water-harvesting",
  },

  {
    id: "water-harvesting-5",
    question: "Can you design a complete rainwater harvesting system?",
    answer:
      "Yes. A complete system can include roof collection, gutters, first-flush arrangements, filtration, storage, pumps, distribution, and appropriate treatment depending on the intended use.",
    category: "water-harvesting",
  },
];

export function getFAQsByCategory(category: FAQSlug): FAQ[] {
  return FAQs.filter((f) => f.category === category);
}

export const getPopularFAQs = (count = 5) => {
  return [...FAQs]
    .filter((faq) => faq.isPopular)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

export function searchFAQs(query: string): FAQ[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return FAQs.filter(
    (f) =>
      f.question.toLowerCase().includes(q) ||
      f.answer.toLowerCase().includes(q) ||
      f.category.toLowerCase().includes(q),
  );
}
