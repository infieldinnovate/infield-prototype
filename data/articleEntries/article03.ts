import type { Article } from "@/data/articles";

const article: Article = {
  id: "art03",
  title:
    "Electrical Installation Planning: How to Build a Safe, Reliable System",
  slug: "electrical-installation-distribution-guide",
  excerpt:
    "A practical guide to planning safe electrical installations in Kenya, covering demand assessment, distribution, cable selection, protection, backup power, and testing.",
  category: "electrical",
  image: "/placeholder_image.jpg",
  readingTime: "5 min read",
  publishDate: "2025-01-20",
  authorId: "tm1",
  reviewerId: "tm4",
  featured: true,
  tags: [
    "electrical",
    "installation",
    "distribution",
    "safety",
    "wiring",
    "protection",
  ],
  relatedServiceSlugs: ["electrical", "solar"],

  keyTakeaways: [
    "Start with the property's actual demand, including major and future loads, rather than choosing equipment from a standard package.",
    "Cable, breaker and distribution-board selection must be coordinated for current capacity, voltage drop, fault conditions and the installation environment.",
    "Protection should include appropriate overcurrent, residual-current, surge, earthing and bonding measures for the specific installation.",
    "Testing, documentation and compliance are part of the installation—not steps to be added after construction.",
  ],

  tableOfContents: [
    "Plan the Electrical Demand",
    "Design the Distribution System",
    "Select Cables and Protection",
    "Plan for Backup and Future Loads",
    "Testing and Compliance",
    "Common Installation Problems",
  ],

  faqs: [
    {
      question: "Should I use single-phase or three-phase supply?",
      answer:
        "The choice depends on the property's maximum demand, equipment and supply availability. Single-phase is suitable for many smaller premises, while larger or motor-intensive installations may require three-phase supply. The decision should be based on a load assessment rather than property type alone.",
    },
    {
      question: "What is the difference between an MCB and an RCD?",
      answer:
        "An MCB protects a circuit against overcurrent such as overload and short-circuit. An RCD detects residual current and provides additional protection against electric shock. They perform different functions and are normally used together where required.",
    },
    {
      question:
        "Can an existing electrical installation be upgraded for solar or backup power?",
      answer:
        "Yes. The existing installation should first be assessed for capacity, protection, earthing, cable condition and distribution-board space. Solar, batteries or generators may require additional protection, dedicated circuits or changes to the distribution arrangement.",
    },
    {
      question:
        "What should be tested before an electrical installation is handed over?",
      answer:
        "Testing normally includes inspection, continuity, polarity, insulation resistance, earth-related tests and verification of protective devices, as applicable to the installation. The results should be recorded and the required completion and handover documentation provided.",
    },
  ],

  practicalSummary: [
    "Assess connected and maximum demand, including major motor loads and reasonably foreseeable future loads.",
    "Coordinate cable sizes, protective devices and distribution boards with the design current and installation conditions.",
    "Provide appropriate RCD, surge, earthing and bonding measures based on the installation design and applicable requirements.",
    "Separate critical and non-critical circuits where backup power is planned.",
    "Complete inspection, testing, documentation and applicable certification before energisation and handover.",
  ],

  sources: [
    {
      name: "Energy and Petroleum Regulatory Authority (EPRA) — electrical installation requirements and licensing",
    },
    { name: "Kenya Wiring Regulations (KS 662)" },
    { name: "IEC 60364 series — Low-voltage electrical installations" },
    { name: "IEC 60364-4-43:2023 — Protection against overcurrent" },
    { name: "IEC 60364-5-52:2009+A1:2024 — Wiring systems" },
    {
      name: "IEC 60364-5-54:2011+A1:2021 — Earthing and protective conductors",
    },
    { name: "IEC 60364-6 — Verification of electrical installations" },
  ],

  cta: {
    title: "Planning an Electrical Installation or Upgrade?",
    description:
      "Our electrical team can assess your demand, design the distribution and protection system, and deliver a tested installation with provision for solar, backup power and future loads.",
    buttonText: "Speak to an Electrical Engineer",
    href: "/quote",
  },

  content: [
    {
      heading: "Plan the Electrical Demand",
      paragraphs: [
        "Good electrical design starts with the loads. We identify lighting, sockets, appliances, pumps, motors, heating, air conditioning and other equipment, then assess how and when they operate. The design uses the expected maximum demand rather than simply adding every rated load together.",
        "Starting currents, operating patterns and likely future additions also matter. Solar, battery storage, EV charging, additional equipment or building extensions can materially change demand, so reasonable future requirements should be considered before the installation is built.",
      ],
    },
    {
      heading: "Design the Distribution System",
      paragraphs: [
        "Power is distributed from the incoming supply through the main distribution board and, where needed, sub-distribution boards to individual final circuits. Separating lighting, sockets, dedicated appliances and specialist equipment makes the installation easier to isolate, maintain and troubleshoot.",
        "Distribution boards should have suitable current ratings, enclosure protection, circuit identification and practical allowance for expansion. The correct board is determined by the design—not by a fixed rule such as 100 A for homes or 200 A for businesses.",
      ],
    },
    {
      heading: "Select Cables and Protection",
      paragraphs: [
        "Cable selection considers design current, installation method, grouping, ambient conditions, voltage drop and fault protection. A cable that is adequate in free air may require derating when installed in conduit, insulation or alongside other loaded cables.",
        "Protective devices must be coordinated with the conductors and expected fault conditions. Overcurrent protection addresses overload and short-circuit risks; RCDs provide additional protection against residual current; surge protection may be required to reduce the effects of transient overvoltage. Earthing and protective bonding complete the safety arrangement.",
      ],
    },
    {
      heading: "Plan for Backup and Future Loads",
      paragraphs: [
        "Where solar, batteries or a generator are planned, the distribution design should identify which circuits actually need backup. Critical loads such as communications, security, refrigeration or selected lighting can be separated from high-demand non-critical loads, keeping the backup system proportionate.",
        "Future-proofing does not mean installing unnecessary capacity. It means leaving sensible space and routes for likely additions, such as a solar inverter, battery, EV charger, pump or additional circuits, while ensuring the original installation remains safe and compliant.",
      ],
    },
    {
      heading: "Testing and Compliance",
      paragraphs: [
        "An electrical installation is not complete when the wiring is in place. It must be inspected and tested to confirm that the installation and protective measures perform as intended. Depending on the installation, this may include continuity, polarity, insulation resistance, earth-related tests and verification of RCDs and other protective devices.",
        "In Kenya, electrical installation work is subject to EPRA requirements, licensing provisions and applicable Kenyan standards. Current regulatory forms also require documented inspection and test results as part of completion and energisation procedures. The client should receive the relevant certificates, test records and as-built information at handover.",
      ],
    },
    {
      heading: "Common Installation Problems",
      paragraphs: [
        "The problems that matter most are usually poor design or poor workmanship: undersized conductors, incorrectly selected protective devices, overloaded circuits, inadequate earthing, missing protection, poor labelling and insufficient provision for future loads. These issues can lead to nuisance tripping, equipment damage, overheating or electric-shock risk.",
        "The practical solution is straightforward: assess the demand properly, design to the applicable requirements, use suitable materials, test the completed installation and document the result. That approach costs less than correcting avoidable defects after the building is occupied.",
      ],
    },
  ],
};

export default article;
