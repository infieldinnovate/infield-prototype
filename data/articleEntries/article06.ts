import type { Article } from "@/data/articles";

const article: Article = {
  id: "art06",

  title: "How to Choose the Right Water Storage Tank Size",

  slug: "water-storage-tank-sizing-guide",

  excerpt:
    "Learn how to estimate water demand, choose the right tank size, and plan a safe and reliable water storage system for your home, farm, or business.",

  category: "water-storage",

  image: "/placeholder_image.jpg",

  readingTime: "4 min read",

  publishDate: "2025-02-15",

  authorId: "tm1",

  reviewerId: "tm4",

  featured: false,

  tags: [
    "water storage",
    "water tank",
    "tank sizing",
    "borehole",
    "rainwater harvesting",
    "Kenya",
  ],

  relatedServiceSlugs: [
    "water-storage",
    "boreholes",
    "water-harvesting",
    "irrigation",
  ],

  keyTakeaways: [
    "Start with actual daily water demand rather than choosing a tank by household size alone.",
    "A reserve of about 2–3 days can be used as a starting point where the supply is unreliable, then adjusted to site conditions.",
    "Choose a tank that is suitable for the water use, site, budget, and applicable standards.",
    "A safe base, proper overflow, accessible fittings, and good maintenance are essential to reliable storage.",
  ],

  tableOfContents: [
    "How Much Storage Do You Need?",
    "Choosing the Right Tank",
    "Ground or Elevated Tank?",
    "Installation Essentials",
    "Borehole and Rainwater Systems",
    "Maintenance",
  ],

  faqs: [
    {
      question: "How do I calculate the tank size I need?",
      answer:
        "Estimate your average daily water demand, then multiply it by the number of reserve days required. For example, 5 people using 80 litres each per day require about 400 litres per day. A 3-day reserve would require about 1,200 litres before allowing for additional demand or operating losses.",
    },

    {
      question: "What tank size is suitable for a typical home?",
      answer:
        "There is no single correct size. A 2,000–5,000 litre tank may suit many households, but the correct capacity depends on occupancy, water use, supply reliability, available space, and whether the tank also receives borehole or rainwater.",
    },

    {
      question: "Is an elevated tank better than a ground tank?",
      answer:
        "An elevated tank can provide gravity-fed pressure, while a ground tank normally requires a pump for distribution. The practical choice depends on required pressure, building height, site conditions, cost, and whether water must remain available during power interruptions.",
    },

    {
      question: "Can harvested rainwater be used for drinking?",
      answer:
        "Yes, but not without appropriate treatment. Kenya's Water (Harvesting and Storage) Regulations, 2025 require harvested rainwater intended for potable use to be treated in accordance with applicable drinking-water requirements. Untreated harvested rainwater should therefore be treated as non-potable.",
    },
  ],

  practicalSummary: [
    "Calculate daily demand before selecting tank capacity.",
    "Allow sufficient reserve for the reliability of your water source.",
    "Use a level, load-bearing foundation and provide inlet, outlet, overflow, and drain connections.",
    "For drinking water, use a tank and water system suitable for potable use and applicable standards.",
  ],

  sources: [
    {
      name: "Kenya Bureau of Standards — KS 1567:2005, Rotational moulded polyethylene water storage tanks – Specification",
    },
    {
      name: "Kenya Bureau of Standards — KS EAS 12:2018, Potable water – Specification",
    },
    {
      name: "Water Act, 2016",
    },
    {
      name: "Water (Harvesting and Storage) Regulations, 2025",
    },
  ],

  cta: {
    title: "Need Help Choosing the Right Tank?",
    description:
      "We can assess your water demand, source, site conditions, and required pressure to recommend a suitable tank capacity and system configuration.",
    buttonText: "Get a Water Storage Assessment",
    href: "/quote",
  },

  content: [
    {
      heading: "How Much Storage Do You Need?",

      paragraphs: [
        "Tank sizing starts with daily water demand. Consider the number of users, actual consumption, livestock, irrigation, and other water uses rather than selecting a tank based only on property size.",

        "Where supply interruptions are common, a reserve of about 2–3 days is a useful starting point. For example, five people using 80 litres per person per day require about 400 litres daily. A 3-day reserve is therefore about 1,200 litres, before allowing for higher use, future demand, or delays in refilling.",

        "For farms, businesses and institutions, demand should be calculated from the specific activity. Livestock, irrigation, accommodation facilities, schools and commercial premises can require substantially more storage than a domestic household.",
      ],
    },

    {
      heading: "Choosing the Right Tank",

      paragraphs: [
        "For many residential applications, rotational-moulded polyethylene tanks are practical because they are relatively light, durable and available in a wide range of capacities. For larger or permanent installations, steel, GRP and concrete systems may also be appropriate.",

        "The important factors are capacity, water quality requirements, site conditions, durability, maintenance and cost. For potable water, select a tank and associated components suitable for drinking-water applications and compliant with applicable standards. KEBS lists KS 1567:2005 for rotational-moulded polyethylene water storage tanks. :contentReference[oaicite:1]{index=1}",

        "Avoid choosing a tank purely because it is the largest available. Oversizing increases cost and may leave water stored for longer periods than necessary.",
      ],
    },

    {
      heading: "Ground or Elevated Tank?",

      paragraphs: [
        "A ground tank is generally simpler to install and maintain. Water is normally distributed using a pressure or booster pump.",

        "An elevated tank can provide gravity-fed distribution and reduce dependence on a pressure pump. Water pressure increases with elevation at approximately 0.1 bar for every metre of water head, before pipe and fitting losses are considered.",

        "The support structure must be properly designed for the full load. One cubic metre of water weighs approximately one tonne, so a 5,000-litre tank contains about five tonnes of water when full.",
      ],
    },

    {
      heading: "Installation Essentials",

      paragraphs: [
        "The tank should be installed on a firm, level and adequately sized foundation designed for the filled weight. A poor foundation can cause distortion, settlement, leakage or structural failure.",

        "Plan the pipework before installation. A typical system requires an inlet, outlet, overflow and drain, together with suitable valves and level controls where applicable.",

        "Provide safe access for inspection and cleaning, protect the tank from avoidable damage, and route overflow water away from buildings and foundations.",
      ],
    },

    {
      heading: "Borehole and Rainwater Systems",

      paragraphs: [
        "When connected to a borehole, the tank acts as a buffer between pumping and water use. A level control or float system can automatically stop filling when the tank reaches the required level. Pump capacity should be matched to the borehole yield and system demand.",

        "For rainwater harvesting, use suitable gutters, screens and filtration before water enters the tank. Kenya's current Water (Harvesting and Storage) Regulations require roof-based rainwater to be appropriately filtered; water intended for potable use must also be treated to the applicable drinking-water requirements. :contentReference[oaicite:2]{index=2}",

        "The storage requirement for irrigation should be based on crop water demand, irrigated area, source yield and the required operating reserve rather than using the same domestic sizing rule.",
      ],
    },

    {
      heading: "Maintenance",

      paragraphs: [
        "Inspect the tank, fittings, valves and pipework regularly for leaks, damage and deterioration. Keep the tank securely covered to prevent the entry of debris, insects and animals.",

        "For drinking-water systems, maintain appropriate cleaning and water-quality controls based on the source, usage and applicable requirements. Do not assume that stored water remains potable simply because it entered the tank as treated or clean water.",

        "A well-maintained storage system should be easy to isolate, drain, inspect and clean without major pipework alterations.",
      ],
    },
  ],
};

export default article;
