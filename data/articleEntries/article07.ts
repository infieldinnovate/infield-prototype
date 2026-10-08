import type { Article } from "@/data/articles";

const article: Article = {
  id: "art07",

  title: "Rainwater Harvesting in Kenya: A Practical Guide",

  slug: "rainwater-harvesting-kenya-guide",

  excerpt:
    "Learn how to estimate rainwater yield, size storage, and design a practical harvesting system for homes, farms, institutions, and businesses in Kenya.",

  category: "water-harvesting",

  image: "/placeholder_image.jpg",

  readingTime: "4 min read",

  publishDate: "2025-02-20",

  authorId: "tm1",

  reviewerId: "tm4",

  featured: false,

  tags: [
    "rainwater harvesting",
    "water harvesting",
    "water storage",
    "Kenya",
    "rainwater",
  ],

  relatedServiceSlugs: [
    "water-harvesting",
    "water-storage",
    "irrigation",
    "boreholes",
  ],

  keyTakeaways: [
    "Rainwater yield depends mainly on roof area, local rainfall and the catchment surface.",
    "Estimated annual collection can be calculated as roof area × annual rainfall × runoff coefficient.",
    "Storage should be based on actual water demand, rainfall patterns and the reliability of other water sources.",
    "Filtration, safe storage and appropriate treatment are essential where harvested water is used for domestic or potable purposes.",
  ],

  tableOfContents: [
    "How Rainwater Harvesting Works",
    "How Much Rainwater Can You Collect?",
    "How Much Storage Do You Need?",
    "Key System Components",
    "Rainwater for Drinking and Irrigation",
    "Kenya Requirements and Maintenance",
  ],

  faqs: [
    {
      question: "How much rainwater can I collect from my roof?",
      answer:
        "Use the basic formula: roof area (m²) × rainfall (mm) × runoff coefficient. Since 1 mm of rainfall over 1 m² produces 1 litre, the result gives an approximate collection volume before system losses. A 200 m² roof receiving 900 mm of annual rainfall, using a runoff coefficient of 0.8, could theoretically collect about 144,000 litres per year.",
    },

    {
      question: "How large should my rainwater tank be?",
      answer:
        "Start with daily water demand and determine how many days of reserve are required. The appropriate storage period depends on rainfall patterns, demand and whether you have a borehole or municipal supply as backup. For certain new institutional, employment, manufacturing and commercial buildings, Kenya's 2025 regulations specify storage equivalent to seven days of average water demand.",
    },

    {
      question: "Is harvested rainwater safe to drink?",
      answer:
        "Not automatically. Rainwater can become contaminated on the roof, gutters and during storage. Water intended for drinking should undergo appropriate filtration, treatment and quality monitoring before consumption.",
    },

    {
      question: "Can rainwater be used for irrigation?",
      answer:
        "Yes. Rainwater is commonly suitable for irrigation, landscaping and other non-potable uses when the collection and storage system is properly designed and maintained.",
    },
  ],

  practicalSummary: [
    "Measure the effective roof catchment area and use reliable local rainfall data.",
    "Estimate annual yield before selecting storage capacity.",
    "Provide suitable gutters, filtration, storage, overflow and access for maintenance.",
    "Use appropriate treatment and water-quality controls for potable applications.",
  ],

  sources: [
    {
      name: "Water (Harvesting and Storage) Regulations, 2025 — Kenya",
    },
    {
      name: "Kenya Bureau of Standards — KS 1567:2005, Rotational moulded polyethylene water storage tanks",
    },
    {
      name: "Kenya Bureau of Standards — KS EAS 12:2018, Potable water — Specification",
    },
    {
      name: "World Health Organization — Guidelines for Drinking-water Quality",
    },
  ],

  cta: {
    title: "Need a Rainwater Harvesting System?",
    description:
      "We can assess your roof catchment, water demand and site conditions, then design the storage, filtration and distribution system to suit your needs.",
    buttonText: "Talk to Our Water Team",
    href: "/quote",
  },

  content: [
    {
      heading: "How Rainwater Harvesting Works",

      paragraphs: [
        "A roof-based rainwater harvesting system collects water from the roof through gutters and downpipes, passes it through suitable filtration, and stores it in a tank for later use.",

        "A well-designed system should control the first runoff, keep leaves and debris out of storage, provide a secure tank cover, and safely discharge overflow. Water can then be supplied by gravity or a pump depending on the site and required pressure.",
      ],
    },

    {
      heading: "How Much Rainwater Can You Collect?",

      paragraphs: [
        "The basic calculation is:",

        "Annual collection (litres) = Roof area (m²) × Annual rainfall (mm) × Runoff coefficient.",

        "For example, a 200 m² roof receiving 900 mm of annual rainfall with a runoff coefficient of 0.8 has an estimated annual yield of about 144,000 litres before allowing for filtration, overflow and other system losses.",

        "For design purposes, use reliable rainfall data for the specific site rather than relying on national averages. Actual collection will vary with rainfall intensity, roof condition, losses and system performance.",
      ],
    },

    {
      heading: "How Much Storage Do You Need?",

      paragraphs: [
        "Tank capacity should be based on water demand, rainfall distribution and the reliability of other available sources.",

        "A simple starting point is to calculate average daily demand and multiply it by the required number of reserve days. A property with a borehole or municipal supply may require less rainwater storage than a property relying primarily on harvested rainwater.",

        "For certain new institutional, employment, manufacturing and commercial buildings, the Water (Harvesting and Storage) Regulations, 2025 require storage equivalent to seven days of average water demand, subject to the provisions of the Regulations. Agricultural establishments using water resources for irrigation have separate storage requirements under the same Regulations. :contentReference[oaicite:1]{index=1}",
      ],
    },

    {
      heading: "Key System Components",

      paragraphs: [
        "A typical system includes a suitable roof catchment, gutters, downpipes, first-flush or equivalent runoff control, inlet filtration, storage and overflow protection.",

        "The tank should be installed on a stable, level foundation capable of supporting the filled weight. Pipework should allow the tank to be isolated, drained, inspected and cleaned.",

        "For larger systems, controls such as float valves, level sensors, pumps and automatic source changeover can be added to integrate rainwater with borehole or municipal supply.",
      ],
    },

    {
      heading: "Rainwater for Drinking and Irrigation",

      paragraphs: [
        "Rainwater can be used for irrigation, landscaping, cleaning and other non-potable applications when the system is properly designed and maintained.",

        "Potable use requires a higher level of control. Contamination can occur on the roof, in gutters and during storage, so water intended for drinking must be appropriately filtered and treated, with water-quality requirements applied before consumption. Kenya's 2025 regulations require harvested roof rainwater to be filtered and address treatment requirements for intended uses. :contentReference[oaicite:2]{index=2}",

        "WHO guidance similarly recommends managing risks from catchment through storage and point of use rather than assuming harvested rainwater is automatically safe. :contentReference[oaicite:3]{index=3}",
      ],
    },

    {
      heading: "Kenya Requirements and Maintenance",

      paragraphs: [
        "Rainwater harvesting and storage in Kenya is governed by the Water Act and applicable subsidiary regulations. The current Water (Harvesting and Storage) Regulations, 2025 commenced on 6 March 2025. :contentReference[oaicite:4]{index=4}",

        "For polyethylene tanks, KEBS lists KS 1567:2005, which specifies requirements and test methods for rotational-moulded polyethylene water storage tanks. For potable water, KS EAS 12:2018 specifies requirements, sampling and test methods for water intended for direct human consumption. :contentReference[oaicite:5]{index=5}",

        "Keep roofs, gutters, filters and tanks clean. Inspect regularly for blockages, leaks and damage, and maintain treatment equipment according to the manufacturer's instructions.",
      ],
    },
  ],
};

export default article;
