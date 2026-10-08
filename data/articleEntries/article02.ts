import type { Article } from "@/data/articles";

const article: Article = {
  id: "art02",
  title: "Solar Battery Storage: Is It Worth the Investment?",
  slug: "solar-battery-storage-worth-it",
  excerpt:
    "A practical guide to solar battery storage in Kenya—when it is useful, how to size it, what to compare, and when a battery makes more sense than a generator.",
  category: "solar",
  image: "/placeholder_image.jpg",
  readingTime: "5 min read",
  publishDate: "2025-02-01",
  authorId: "tm4",
  reviewerId: "tm1",
  featured: false,
  tags: ["solar", "battery", "storage", "LiFePO4", "backup"],
  relatedServiceSlugs: ["solar", "electrical"],

  keyTakeaways: [
    "A battery mainly provides backup power and stores surplus solar energy for later use.",
    "Size storage from essential loads and required backup time—not from total daily electricity consumption.",
    "LiFePO4 is widely suited to regularly cycled solar storage, but actual usable capacity, cycle life and warranty depend on the manufacturer and operating conditions.",
    "The right decision depends on outage frequency, load profile, tariff arrangements, system cost and the value of uninterrupted power.",
  ],

  tableOfContents: [
    "What Does a Solar Battery Do?",
    "Do You Need Battery Storage?",
    "How Much Battery Capacity Do You Need?",
    "LiFePO4 vs Lead-Acid",
    "Battery Cost and Generator Comparison",
    "Safety, Maintenance and End-of-Life",
  ],

  faqs: [
    {
      question: "Do I need a battery with solar?",
      answer:
        "Not always. A grid-connected solar system can reduce daytime electricity purchases without a battery. Storage becomes more useful when you need backup power, use significant electricity after sunset, or want to increase self-consumption of solar energy.",
    },
    {
      question: "How do I size a solar battery?",
      answer:
        "Identify the loads that must remain on during an outage, calculate their energy use in kWh, and multiply by the required backup time. Then allow for the battery's specified usable capacity, inverter losses and the manufacturer's operating limits.",
    },
    {
      question: "Is LiFePO4 better than lead-acid?",
      answer:
        "For applications requiring frequent cycling, LiFePO4 is often preferred because it generally offers higher usable capacity, longer cycle life and lower maintenance. The correct choice should still be based on the manufacturer's specifications, warranty, installation conditions and total cost of ownership.",
    },
    {
      question: "Is a battery better than a generator?",
      answer:
        "They solve the problem differently. Batteries provide quiet, automatic short-duration backup with low operating costs. Generators can support heavier loads and longer outages when fuel is available. Many critical facilities use batteries for immediate backup with a generator as extended backup.",
    },
  ],

  practicalSummary: [
    "Start with essential loads and expected outage duration.",
    "Compare batteries using usable kWh, power rating, warranty, expected cycle life, installation requirements and manufacturer support—not headline capacity alone.",
    "Confirm that the inverter and battery are compatible and that the backup circuit is correctly designed.",
    "For critical applications, consider a generator as extended-duration backup rather than sizing an unusually large battery for rare long outages.",
  ],

  sources: [
    {
      name: "IEC 62619:2022 — Safety requirements for secondary lithium cells and batteries for industrial applications",
    },
    {
      name: "IEC 60364-7-712:2025 — Electrical installations for solar photovoltaic power supply systems",
    },
    {
      name: "IEC 62477-1:2022 — Safety requirements for power electronic converter systems and equipment",
    },
    {
      name: "IEC 62446-1:2016+A1:2018 — PV system testing, inspection, commissioning and documentation",
    },
    {
      name: "Energy and Petroleum Regulatory Authority (EPRA) — applicable Kenya energy and solar requirements",
    },
  ],

  cta: {
    title: "Is Battery Storage Right for Your Property?",
    description:
      "We assess your loads, outage pattern and solar production before recommending the right storage capacity and backup configuration.",
    buttonText: "Request a Battery Assessment",
    href: "/quote",
  },

  content: [
    {
      heading: "What Does a Solar Battery Do?",
      paragraphs: [
        "A solar battery stores electricity for use when solar production is low or the grid is unavailable. The two main benefits are energy shifting and backup power.",
        "During the day, surplus solar energy can charge the battery. That stored energy can then supply evening loads or essential circuits during a grid outage. On some applicable electricity tariffs, storage can also help shift consumption between tariff periods.",
        "A battery therefore adds value when your electricity use extends beyond solar production hours or when uninterrupted power matters. It is not automatically necessary on every solar installation.",
      ],
    },
    {
      heading: "Do You Need Battery Storage?",
      paragraphs: [
        "A battery is worth considering when outages are frequent, critical equipment cannot tolerate interruptions, or a large share of your electricity use occurs after sunset. Homes may prioritise refrigeration, lighting, security and communications; businesses may prioritise servers, point-of-sale systems, refrigeration, pumps or production equipment.",
        "For a grid-connected property that mainly uses electricity during daylight hours and has reliable supply, a battery may offer less financial value. For off-grid systems, however, storage is normally essential because solar production is intermittent and does not continue through the night.",
        "The decision should be based on measured consumption, outage history and the cost of interruption—not on battery capacity alone.",
      ],
    },
    {
      heading: "How Much Battery Capacity Do You Need?",
      paragraphs: [
        "Start with the loads that must remain operational during an outage. Record each load, its power rating and the number of hours it must run. The resulting energy requirement is expressed in kilowatt-hours (kWh).",
        "For example, if essential loads average 1.5 kW and must run for 6 hours, the basic energy requirement is 9 kWh. The final battery selection must then account for the manufacturer's specified usable capacity, inverter losses, operating limits and the desired reserve.",
        "Power rating matters as well as capacity. The inverter must supply the running load and any short-duration starting demand from motors such as refrigerators, pumps or air conditioners. A professional design therefore sizes the battery in kWh and the inverter in kW together.",
      ],
    },
    {
      heading: "LiFePO4 vs Lead-Acid",
      paragraphs: [
        "LiFePO4 (lithium iron phosphate) and lead-acid are established battery technologies, but they suit different operating requirements. LiFePO4 is commonly preferred for solar systems with regular cycling because it generally provides higher usable capacity, longer cycle life and lower routine maintenance.",
        "Lead-acid batteries can have a lower initial purchase price, but their usable capacity and cycle life depend strongly on battery type and operating conditions. Flooded lead-acid batteries also require maintenance that lithium systems generally avoid.",
        "Do not select a battery from chemistry alone. Compare usable kWh, continuous and peak power, warranty terms, cycle-life conditions, operating temperature range, protection features and manufacturer support.",
      ],
    },
    {
      heading: "Battery Cost and Generator Comparison",
      paragraphs: [
        "Battery prices in Kenya vary substantially by brand, capacity, inverter, protection equipment, installation complexity and warranty. For that reason, a fixed price-per-kWh published in an article can quickly become misleading. Compare complete installed solutions rather than battery capacity alone.",
        "A useful financial assessment includes the purchase and installation cost, expected service life, usable energy, replacement requirements and the value of avoided grid purchases or downtime. The result is a project-specific payback—not a universal battery ROI.",
        "Generators have a lower initial cost in many applications but continue to incur fuel, servicing and operating costs. Batteries generally have lower routine operating costs and provide automatic, quiet short-duration backup. For sites requiring long-duration backup, a battery-generator combination can be more practical than using either technology alone.",
      ],
    },
    {
      heading: "Safety, Maintenance and End-of-Life",
      paragraphs: [
        "Battery safety depends on correct equipment selection, installation, protection, ventilation or thermal management, and compliance with the manufacturer's requirements. Lithium storage systems should include an appropriate battery management system and correctly rated protection and isolation.",
        "Routine maintenance is usually limited, but the system should be inspected periodically. Monitoring should be used to identify abnormal temperatures, faults, unusual state-of-charge behaviour or declining performance. Installation and commissioning should include the required testing and documentation.",
        "IEC 62619:2022 covers safety requirements for industrial lithium batteries, including stationary applications. IEC 60364-7-712:2025 addresses electrical installations for PV systems and includes requirements related to energy storage. PV system testing, inspection and customer documentation are covered by IEC 62446-1.",
        "At end of life, batteries should be handled through appropriate recovery or recycling channels rather than general waste. The installer or supplier should be able to explain the applicable return, replacement and disposal process.",
      ],
    },
  ],
};

export default article;
