import type { Article } from "@/data/articles";

const article: Article = {
  id: "art01",
  title: "Solar System Sizing & Installation: A Practical Guide",
  slug: "solar-system-sizing-installation-guide",
  excerpt:
    "A practical guide to planning, sizing and installing solar PV for homes and businesses in Kenya, from site assessment and system selection to testing, handover and maintenance.",
  category: "solar",
  image: "/placeholder_image.jpg",
  readingTime: "6 min read",
  publishDate: "2025-01-15",
  authorId: "tm4",
  reviewerId: "tm1",
  featured: true,
  tags: ["solar", "sizing", "installation", "PV", "batteries", "Kenya"],
  relatedServiceSlugs: ["solar", "electrical"],

  keyTakeaways: [
    "Start with actual electricity consumption, load profile and peak demand—not roof area alone.",
    "A proper site assessment checks shading, roof condition, structural capacity and the existing electrical installation.",
    "Solar PV, inverter, battery storage and protection equipment should be selected as one coordinated system.",
    "Installation should include design verification, testing, commissioning, documentation and user handover.",
  ],

  tableOfContents: [
    "Is Solar Right for Your Property?",
    "How Solar Systems Are Sized",
    "What a Site Assessment Covers",
    "Choosing the Right System Configuration",
    "Main Solar System Components",
    "The Installation Process",
    "Common Design and Installation Mistakes",
    "Maintenance and Expected Service Life",
  ],

  faqs: [
    {
      question: "Do I need batteries for a solar system?",
      answer:
        "Not always. Batteries are useful when backup power is required, when significant energy use occurs after sunset, or where a property operates off-grid. A grid-connected PV system without backup capability normally does not supply loads during a grid outage.",
    },
    {
      question: "How much solar do I need?",
      answer:
        "The answer depends on your electricity consumption, when the energy is used, site solar resource, system losses, peak demand and future loads. A professional design uses your bills and load data together with a site assessment rather than relying on a standard package size.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Small residential systems can often be installed within a few days on site. The overall project duration is longer because it may include consultation, site survey, design approval, procurement, installation, testing and commissioning.",
    },
    {
      question: "What maintenance does solar require?",
      answer:
        "Solar PV normally requires limited routine maintenance, but panels should be kept reasonably clean and the electrical system inspected periodically. Monitoring system performance helps identify faults, shading changes or abnormal output early.",
    },
  ],

  caseStudy: {
    challenge:
      "Illustrative example only: a property needs lower daytime electricity costs together with reliable backup for essential loads.",
    assessment:
      "The design would review electricity consumption, load priorities, outage patterns, roof condition, shading, available installation space and the existing electrical distribution system.",
    solution:
      "A hybrid PV system could combine solar generation, battery storage and the grid, with backup circuits selected according to the customer's essential loads.",
    implementation:
      "Installation would include mounting, DC and AC wiring, protection, inverter and battery integration, system testing, commissioning and user training.",
    result:
      "Actual energy savings, backup duration and system performance should be reported from measured project data rather than estimated claims.",
    projectLink: "/resources/projects",
    projectLinkLabel: "View Solar Projects",
  },

  practicalSummary: [
    "Use recent electricity bills and a load schedule as the starting point for sizing.",
    "Carry out a site survey before final equipment selection and installation.",
    "Specify certified equipment, compatible protection and an installation method suited to the site conditions.",
    "Size batteries around essential loads and required backup duration—not simply total daily energy use.",
    "Complete testing, commissioning, documentation and user training before handover.",
    "Use monitoring and periodic inspections to maintain performance and safety.",
  ],

  sources: [
    { name: "Energy and Petroleum Regulatory Authority (EPRA)" },
    {
      name: "IEC 60364-7-712:2025 — Solar photovoltaic (PV) power supply installations",
    },
    {
      name: "IEC 62446-1 — PV systems: testing, documentation, commissioning and inspection",
    },
    {
      name: "IEC 61215 series — PV module design qualification and type approval",
    },
    { name: "IEC 61730-1:2023 — PV module safety qualification" },
    { name: "Applicable Kenya Standards and current electrical requirements" },
  ],

  cta: {
    title: "Need a Solar Energy Assessment?",
    description:
      "We assess your energy use, site conditions and backup requirements before recommending a solar system that is practical, safe and properly sized.",
    buttonText: "Talk to Our Solar Team",
    href: "/quote",
  },

  content: [
    {
      heading: "Is Solar Right for Your Property?",
      paragraphs: [
        "Solar PV can reduce grid electricity use and provide an additional source of power for homes, businesses and institutions. The right system, however, depends on how much electricity you use, when you use it, whether backup is required and whether the site is suitable for installation.",
        "Grid-connected properties can use solar to offset daytime consumption, while hybrid systems add battery storage for evening use and backup. Off-grid systems depend on solar, batteries and, where necessary, a generator or other backup source. The most suitable configuration should be determined from the property's actual operating needs.",
      ],
    },
    {
      heading: "How Solar Systems Are Sized",
      paragraphs: [
        "Solar sizing starts with energy consumption and load profile. Electricity bills show how much energy is used over time; a load schedule shows which appliances or equipment create that demand and when they operate. Peak demand is also important because the inverter and electrical infrastructure must safely handle the highest expected power requirement.",
        "A simple preliminary estimate can be expressed as: PV capacity ≈ daily energy demand ÷ (site-specific equivalent sun hours × expected system performance). For example, a property using about 30 kWh per day may require roughly 8 kWp under an illustrative assumption of 4.5 equivalent sun hours and an 80% overall performance factor. This is only a preliminary estimate; final sizing should use site conditions, equipment data and a proper yield calculation.",
        "Battery capacity is sized separately. The key inputs are essential load, required backup duration, usable battery capacity and battery operating limits. A larger battery is not automatically better; it should match the actual backup requirement and operating strategy.",
      ],
    },
    {
      heading: "What a Site Assessment Covers",
      paragraphs: [
        "Before installation, the site should be assessed for roof condition, structural capacity, available space, orientation, tilt and shading. Trees, adjacent buildings and other obstructions can affect annual energy production and should be considered in the design.",
        "The electrical installation is assessed at the same time. This includes the distribution board, earthing and bonding, cable routes, protection, supply characteristics and the proposed point of connection. Any required upgrades should be identified before equipment is installed.",
      ],
    },
    {
      heading: "Choosing the Right System Configuration",
      paragraphs: [
        "Grid-tied systems are designed primarily to reduce grid energy consumption and are generally suitable where the utility supply is reliable. They normally do not provide power to the premises during a grid outage unless the system has specific backup/islanding capability.",
        "Hybrid systems combine PV, the grid and battery storage. They are suitable where both energy-cost reduction and backup power are important. Off-grid systems are designed for locations without a suitable grid connection and require careful management of generation, storage and backup capacity.",
        "Where export of excess energy is planned, the system must also comply with the applicable regulatory and utility requirements in force at the time of connection.",
      ],
    },
    {
      heading: "Main Solar System Components",
      paragraphs: [
        "A typical system includes PV modules, an inverter, mounting structures, DC and AC cables, isolation and protection devices, and monitoring equipment. Battery systems add battery modules and battery management equipment.",
        "Module selection should consider electrical ratings, temperature behaviour, mechanical characteristics, warranty terms and applicable product standards. IEC 61215 addresses module design qualification and type approval, while IEC 61730 addresses module safety. The exact module technology and power rating should be selected for the project rather than treated as a fixed standard size.",
        "The inverter should be matched to the PV array, expected loads, grid characteristics and any battery configuration. Where shading, multiple roof orientations or other site constraints exist, the design may use module-level power electronics or other measures to reduce mismatch losses.",
      ],
    },
    {
      heading: "The Installation Process",
      paragraphs: [
        "A professional installation normally follows a defined sequence: consultation, site survey, system design, equipment selection, installation, testing, commissioning and handover.",
        "Installation includes secure mounting, correct cable management, appropriate DC and AC protection, earthing and bonding, inverter and battery integration where applicable, and clear identification of circuits and isolation points.",
        "Testing and commissioning are critical. The system should be inspected and tested in accordance with the applicable requirements, with records and documentation completed at handover. IEC 62446-1 provides a framework for commissioning tests, inspection and customer documentation for grid-connected PV systems.",
        "The customer should receive the relevant system information, operating guidance, warranties and maintenance requirements. EPRA also maintains licensing and submission processes for solar PV works and practitioners in Kenya.",
      ],
    },
    {
      heading: "Common Design and Installation Mistakes",
      paragraphs: [
        "Common problems include sizing from roof area rather than energy demand, ignoring peak loads, overlooking shading, using incompatible equipment, inadequate protection, poor cable sizing and installing without considering future expansion.",
        "Battery systems are often over-sized because they are designed around total daily consumption instead of essential loads and the required backup period. A better approach is to define priority loads first, then size the battery and backup circuits around those requirements.",
        "Good design also considers maintenance access, equipment clearances, weather exposure, cable routes and safe isolation. These details affect long-term reliability as much as the headline system size.",
      ],
    },
    {
      heading: "Maintenance and Expected Service Life",
      paragraphs: [
        "Routine maintenance is relatively limited but should not be ignored. Panels may require cleaning where dust or other deposits affect output, while electrical connections, protection devices, cables, earthing and equipment condition should be inspected periodically.",
        "Performance monitoring is equally important. Comparing actual generation and system behaviour with the design expectation can reveal faults, new shading, soiling or equipment issues before they become major problems.",
        "Service life varies by component, operating conditions and manufacturer. PV modules, inverters and batteries should therefore be assessed using their specific warranties, technical datasheets and expected operating conditions rather than a single universal lifespan.",
      ],
    },
  ],
};

export default article;
