import type { Article } from "@/data/articles";

const article: Article = {
  id: "art10",

  title:
    "Complete Solar-Powered Water System: Borehole, Pump, Storage & Irrigation",

  slug: "complete-solar-powered-water-system",

  excerpt:
    "A practical guide to designing an integrated solar-powered water system—from water source and pumping to storage, treatment and irrigation.",

  category: "solar",

  image: "/articles/borehole-45680.jpg",

  readingTime: "4 min read",

  publishDate: "2025-03-10",

  authorId: "tm4",

  reviewerId: "tm1",

  featured: true,

  tags: [
    "solar water",
    "solar pumping",
    "borehole",
    "water storage",
    "irrigation",
    "integrated systems",
    "Kenya",
  ],

  relatedServiceSlugs: [
    "boreholes",
    "solar",
    "water-storage",
    "water-harvesting",
    "irrigation",
    "electrical",
  ],

  keyTakeaways: [
    "A reliable solar water system is designed as one integrated system, not as separate pump, tank and solar components.",
    "Borehole yield, water demand and total pumping head determine the pump duty; the solar system is then designed around that duty.",
    "Water storage can separate the timing of solar pumping from the timing of water use, often avoiding the need for battery storage for the pumping function.",
    "Water treatment must be based on water-quality test results and the intended end use.",
    "A complete design should include protection, controls, backup arrangements and provisions for future demand.",
  ],

  tableOfContents: [
    "How a Solar-Powered Water System Works",
    "1. Assess the Water Source",
    "2. Calculate Water Demand",
    "3. Size the Pump and Solar System",
    "4. Design Storage and Treatment",
    "5. Distribute Water and Irrigate",
    "Reliability, Maintenance and Compliance",
  ],

  faqs: [
    {
      question: "Can a solar water system work without batteries?",
      answer:
        "Yes. For many pumping applications, solar energy is used during the day to pump water into storage. The stored water is then used later by gravity or a booster pump. Batteries may still be appropriate where electrical loads or pumping must continue when solar power is unavailable.",
    },

    {
      question: "How is a solar borehole pump sized?",
      answer:
        "The pump is selected from the required flow rate and total dynamic head, while respecting the borehole's sustainable yield. The solar array and controller are then matched to the pump's operating requirements and the site's available solar resource.",
    },

    {
      question: "How much water storage do I need?",
      answer:
        "Storage depends on daily demand, pump operating hours, source reliability, water availability and the consequences of an interruption. Rather than applying one fixed number of days to every property, the tank should be sized from the site's water balance and required resilience.",
    },

    {
      question: "Can the same system serve domestic use and irrigation?",
      answer:
        "Yes. A common source and storage system can serve multiple uses, but domestic and irrigation supplies should be designed and treated according to their different water-quality and pressure requirements.",
    },

    {
      question: "Can rainwater be added to a solar borehole system?",
      answer:
        "Yes. Rainwater can supplement the borehole and reduce groundwater pumping when rainfall is available. The sources can feed common storage or separate tanks, provided the system is hydraulically and hygienically designed to prevent unsuitable cross-connections.",
    },
  ],

  caseStudy: {
    challenge:
      "Illustrative design example: a rural property requires water for domestic use, livestock and irrigation but has unreliable grid electricity.",

    assessment:
      "The design assessment establishes total daily demand, borehole yield, pumping water level, elevation to storage, irrigation requirements, available solar resource and the required operating reserve.",

    solution:
      "The system is configured around a solar-powered borehole pump feeding storage tanks. Domestic water receives treatment appropriate to its quality, while irrigation passes through dedicated filtration before entering the irrigation network.",

    implementation:
      "The work typically involves water-source assessment and approvals, borehole testing where applicable, pump and solar design, tank and pipework installation, controls, treatment, irrigation infrastructure, testing and commissioning.",

    result:
      "The objective is a reliable water supply with reduced dependence on grid electricity or fuel, while maintaining appropriate water quality, pumping performance and operational control.",

    projectLink: "/resources/projects",

    projectLinkLabel: "View Water & Energy Projects",
  },

  practicalSummary: [
    "Confirm the water source and sustainable yield before selecting the pump.",
    "Calculate total and peak demand for domestic, livestock and irrigation uses.",
    "Size the pump from flow and total dynamic head, then design the solar array around the pump duty.",
    "Use storage to bridge the gap between pumping hours and water-use periods.",
    "Base treatment on water-quality results and the intended end use.",
  ],

  sources: [
    {
      name: "Water Resources Authority (WRA) — Water Resources Regulations, 2021",
    },
    {
      name: "Water Resources Authority — Groundwater Assessment and Monitoring",
    },
    {
      name: "National Irrigation Authority — Survey and Design of Irrigation Projects",
    },
    {
      name: "National Irrigation Authority — Final Irrigation Guidelines",
    },
    {
      name: "FAO — Revised Crop Evapotranspiration Guidelines, 2025",
    },
    {
      name: "Energy and Petroleum Regulatory Authority (EPRA) — Renewable Energy Guidelines and Licensing",
    },
  ],

  cta: {
    title: "Need a Complete Water & Energy Solution?",

    description:
      "We can assess your water source, demand, pumping requirements and energy needs, then design an integrated system from source to end use.",

    buttonText: "Request an Integrated System Assessment",

    href: "/quote",
  },

  content: [
    {
      heading: "How a Solar-Powered Water System Works",

      paragraphs: [
        "A solar-powered water system uses solar energy to pump water from a borehole or other source into storage, then distributes that water for domestic, livestock, irrigation or commercial use.",

        "A typical system consists of the water source, pump, solar array and controller, storage, treatment, distribution and end-use equipment. The components must be designed together so that the available water, hydraulic requirements and energy supply are balanced.",

        "For many pumping applications, storage replaces the need to store electricity in batteries. Solar power pumps during available daylight hours, while the tank holds water for later use.",
      ],
    },

    {
      heading: "1. Assess the Water Source",

      paragraphs: [
        "The system starts with a reliable water source. This may be a borehole, harvested rainwater, surface water, municipal supply or a combination of sources.",

        "For boreholes, design should be based on measured groundwater conditions rather than an assumed yield. WRA requires motorised boreholes to undergo test pumping, with current regulations specifying a continuous constant-rate pumping test of at least 24 hours and a recovery period of at least 20 hours unless otherwise stipulated by the Authority. :contentReference[oaicite:2]{index=2}",

        "WRA also emphasises professional groundwater assessment, borehole siting, construction, supervision and pumping-test procedures to support sustainable abstraction. :contentReference[oaicite:3]{index=3}",
      ],
    },

    {
      heading: "2. Calculate Water Demand",

      paragraphs: [
        "List every intended use before selecting equipment: household consumption, livestock, irrigation, cleaning and any commercial or institutional demand.",

        "For irrigation, water requirements should be calculated from local climate, reference evapotranspiration, crop characteristics, growth stage, rainfall and irrigation-system performance. FAO's revised 2025 guidance continues this approach using updated evapotranspiration methods and crop information. :contentReference[oaicite:4]{index=4}",

        "Peak demand is also important. The system must handle periods when several uses occur at the same time, even when average daily demand is much lower.",
      ],
    },

    {
      heading: "3. Size the Pump and Solar System",

      paragraphs: [
        "Pump selection is based mainly on two parameters: required flow and total dynamic head. Total dynamic head includes the pumping water level, elevation difference, pressure requirements and friction losses in the pipework.",

        "The pump duty must remain within the sustainable yield of the water source. Once the pump duty is established, the solar array and controller are selected to provide the required energy under the site's expected solar conditions.",

        "This is why purchasing a pump first and attempting to fit the rest of the system around it is poor practice. The correct sequence is source assessment, demand calculation, hydraulic design and then equipment selection.",
      ],
    },

    {
      heading: "4. Design Storage and Treatment",

      paragraphs: [
        "Storage allows pumping and water use to occur at different times. This is particularly valuable for solar systems because water can be pumped during daylight and used later without relying on electrical battery storage.",

        "Tank capacity should be based on demand, pumping hours, source reliability and the required reserve. Critical applications may require greater resilience or a secondary source such as rainwater, grid power or a generator.",

        "Water treatment should be based on a water-quality test and the intended use. Domestic water may require filtration and disinfection, while irrigation water may primarily require filtration to protect emitters and other equipment. Different uses can therefore require separate treatment lines.",
      ],
    },

    {
      heading: "5. Distribute Water and Irrigate",

      paragraphs: [
        "Water can be distributed from storage by gravity or through a booster pump. Elevated tanks can provide useful pressure, while ground-level storage normally requires pumping where pressure is needed.",

        "For irrigation, the mainline, valves, filters, laterals or sprinklers and control zones should be designed around the required flow and operating pressure. The National Irrigation Authority publishes guidance covering irrigation survey, design, implementation and operation. :contentReference[oaicite:5]{index=5}",

        "Where rainwater, borehole water and storage are combined, controls can prioritise available sources and maintain supply without requiring every source to operate continuously.",
      ],
    },

    {
      heading: "Reliability, Maintenance and Compliance",

      paragraphs: [
        "A reliable system includes appropriate pump protection, tank-level controls, isolation valves, overflow arrangements and protection against electrical faults and surges.",

        "Routine maintenance should cover solar modules, pumps, filters, tanks, valves, treatment equipment and irrigation components. Maintenance intervals should follow equipment manufacturers' requirements and actual site conditions.",

        "Borehole development and water abstraction should be undertaken in accordance with applicable WRA requirements and authorisations. Solar and electrical works should likewise be carried out under the applicable EPRA and electrical requirements. EPRA currently publishes renewable-energy licensing guidance and solar-PV works documentation. :contentReference[oaicite:6]{index=6}",

        "The objective is not simply to install solar panels and a pump. A properly engineered system should provide adequate water, operate within the source capacity, use energy efficiently, protect water quality and remain serviceable over its operating life.",
      ],
    },
  ],
};

export default article;
