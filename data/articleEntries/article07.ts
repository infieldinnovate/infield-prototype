import type { Article } from "@/data/articles";

const article: Article = {
  id: "art07",
  title: "Rainwater Harvesting in Kenya: How to Design a Reliable Water System",
  slug: "rainwater-harvesting-kenya-guide",
  excerpt:
    "From roof to tap, a practical guide to designing a rainwater harvesting system in Kenya — covering catchment sizing, storage, filtration, and integration with borehole and municipal supply.",
  category: "water-harvesting",
  image: "/placeholder_image.jpg",
  readingTime: "10 min read",
  publishDate: "2025-02-20",
  authorId: "tm1",
  reviewerId: "tm4",
  featured: false,
  tags: ["rainwater", "harvesting", "water", "Kenya", "roof", "collection"],
  relatedServiceSlugs: ["water-harvesting", "water-storage", "irrigation", "boreholes"],
  keyTakeaways: [
    "Rainwater harvesting is practical for any Kenyan property receiving 600mm or more of annual rainfall, which covers most of the country outside the arid north and northeast.",
    "A complete system flows water from the catchment roof through a first-flush diverter and filtration into storage, then to the end use by gravity or pump.",
    "Annual collection can be estimated as roof area (m2) multiplied by annual rainfall (mm) multiplied by a runoff coefficient of 0.8 for metal roofs and 0.7 for tiles.",
    "Storage should be sized for the dry season, not the average day — plan for 30 to 60 days of demand to bridge Kenya's dry seasons from June to September and January to February.",
    "Rainwater is naturally soft and low in minerals, making it excellent for irrigation and laundry, but it requires filtration and disinfection for drinking.",
    "Combining rainwater with a borehole and storage creates an integrated supply where rainwater covers wet-season demand and the borehole provides base supply during dry months.",
  ],
  tableOfContents: [
    "Is Rainwater Harvesting Practical for Your Property?",
    "How Rainwater Harvesting Works",
    "How Much Rainwater Can You Collect?",
    "Designing the Catchment System",
    "Choosing the Right Storage Capacity",
    "Filtration and Water Treatment",
    "Rainwater for Irrigation",
    "Rainwater + Borehole + Storage: Integrated Water Supply",
    "Common Rainwater Harvesting Mistakes",
    "Maintenance",
  ],
  faqs: [
    {
      question: "How much rain can I collect from my roof in Kenya?",
      answer:
        "Multiply your roof area in square metres by annual rainfall in millimetres by a runoff coefficient (0.8 for metal, 0.7 for tiles). A 200m2 roof in Nairobi receiving 900mm per year yields about 144,000 litres annually with a metal roof, or roughly 395 litres per day on average.",
    },
    {
      question: "Is rainwater safe to drink?",
      answer:
        "Rainwater itself is clean, but it picks up dust, bird droppings, and debris from the roof. For drinking, it must pass through a first-flush diverter, sediment filtration, carbon filtration, and UV sterilisation or chlorination. Without treatment, rainwater is safe for irrigation, laundry, and toilet flushing but not for drinking.",
    },
    {
      question: "What roof material is best for rainwater harvesting?",
      answer:
        "Corrugated metal (mabati) roofs are the best catchment surface — they are smooth, yield a high runoff coefficient of 0.8, and do not absorb water. Clay and concrete tiles work at a slightly lower coefficient of 0.7. Thatch roofs are not suitable for potable water collection because they harbour contaminants and absorb water.",
    },
    {
      question: "How large should my rainwater storage tank be?",
      answer:
        "Size for the dry season, not the average day. Calculate your daily demand and multiply by the number of days between significant rainfall events in your area. In most of Kenya, plan for 30 to 60 days of storage. For a household using 500 litres per day, that means a 15,000 to 30,000 litre tank.",
    },
    {
      question: "Can rainwater harvesting replace my borehole or municipal supply?",
      answer:
        "On its own, rainwater is seasonal and may not cover year-round demand. However, combined with a borehole and adequate storage, rainwater can provide 50 to 70 percent of annual water needs for many properties, significantly reducing borehole pumping costs and municipal water bills.",
    },
  ],
  caseStudy: {
    challenge:
      "A secondary school in Kiambu County with 300 students faced high municipal water bills of approximately KSh 200,000 per term and frequent supply interruptions that disrupted cooking, sanitation, and dormitory operations.",
    assessment:
      "Our team surveyed the school's 12 classroom and dormitory buildings, measuring a total roof catchment area of approximately 500m2. Kiambu receives roughly 1,100mm of annual rainfall, giving a theoretical collection potential of 440,000 litres per year from a metal-roof catchment.",
    solution:
      "We designed a rainwater harvesting system connecting the main dormitory and dining hall roofs (350m2 combined) to two 10,000 litre plastic tanks via PVC gutters, downpipes, and first-flush diverters. A floating pump distributes water to the kitchen and toilets, with a UV steriliser for kitchen use.",
    implementation:
      "Gutters and downpipes were installed across the catchment roofs over 5 days. First-flush diverters were fitted at each downpipe, and both tanks were mounted on concrete pads with overflow pipes routed to a soak pit. The UV steriliser was installed at the kitchen supply line.",
    result:
      "The system provides approximately 60 percent of the school's annual water needs, reducing the municipal water bill by approximately KSh 120,000 per year. During the long rains, the school runs almost entirely on rainwater, and the municipal supply serves only as a backup during the dry season.",
    projectLink: "/resources/projects",
    projectLinkLabel: "View Water Projects",
  },
  practicalSummary: [
    "Measure your roof catchment area and check local rainfall data to estimate annual collection potential before investing in storage.",
    "Install a first-flush diverter at every downpipe to divert the most contaminated initial runoff away from your storage tank.",
    "Size storage for 30 to 60 days of demand to bridge Kenya's dry seasons, not for a single day's usage.",
    "Use metal roofing for the highest collection efficiency, and ensure gutters are sized and sloped correctly for the roof area.",
    "Treat rainwater with filtration and UV sterilisation or chlorination before drinking — untreated rainwater is suitable for irrigation and laundry only.",
    "Integrate rainwater with borehole and storage for year-round supply reliability, using rainwater as the primary source during wet seasons.",
  ],
  sources: [
    { name: "Kenya Meteorological Department — Historical rainfall data" },
    { name: "Kenya Bureau of Standards (KEBS) — KS 765: Drinking water specification" },
    { name: "World Health Organization — Guidelines for Drinking-water Quality" },
    { name: "Kenya Water Act 2016 — Water resource management" },
  ],
  cta: {
    title: "Plan a Rainwater Harvesting System",
    description:
      "Our engineers can assess your roof catchment, estimate collection potential, and design a complete harvesting and storage system tailored to your property and water demand.",
    buttonText: "Talk to Our Water Team",
    href: "/quote",
  },
  content: [
    {
      heading: "Is Rainwater Harvesting Practical for Your Property?",
      paragraphs: [
        "Rainwater harvesting is practical for almost any property in Kenya that receives 600mm or more of annual rainfall. This threshold covers the vast majority of the country, including Nairobi (approximately 900mm), the Central Highlands (1,000 to 1,500mm), Western Kenya (1,200 to 2,000mm), and the Lake Basin and Coastal regions. Only the arid and semi-arid north and northeast, which receive 250 to 500mm, fall below this cutoff, and even there, harvesting can supplement other sources.",
        "The two factors that determine whether rainwater harvesting makes sense for you are your roof area and your water demand. A larger roof collects more water, and a property with modest demand can cover a significant share of its needs from rainfall alone. Even if rainwater cannot fully replace a borehole or municipal connection, it reduces pumping costs, lowers water bills, and provides a clean, soft water source that is excellent for irrigation, laundry, and, with treatment, drinking.",
        "The cost of a basic rainwater harvesting system — gutters, downpipes, a first-flush diverter, and a storage tank — is modest compared to drilling a borehole or extending a municipal pipe. For many properties, the payback period from reduced water bills is two to four years, after which the water is essentially free except for minor maintenance costs. This makes rainwater harvesting one of the highest-value water investments available to Kenyan property owners.",
      ],
    },
    {
      heading: "How Rainwater Harvesting Works",
      paragraphs: [
        "A rainwater harvesting system is a sequence of stages, each performing a specific function. The catchment is the roof surface that intercepts rainfall. Rain runs off the roof into gutters, which collect and channel it along the eaves. Downpipes carry the water from gutters down to ground level, where a first-flush diverter captures and discards the initial runoff — the first 0.5 to 2mm of rainfall, which carries the dust, bird droppings, and debris that have accumulated on the roof since the last rain.",
        "After the first flush, the cleaner water passes through a leaf screen or mesh filter that catches leaves, twigs, and larger particles. From the filter, water enters the storage tank, where it is held until needed. Water is drawn from the tank either by gravity, if the tank is elevated above the point of use, or by a pump. Depending on the intended end use, the water may pass through additional treatment — sediment filtration, carbon filtration, and UV sterilisation or chlorination — before reaching the tap.",
        "Each stage in this chain serves a purpose, and skipping any one degrades the quality of the stored water or the efficiency of the system. The first-flush diverter is the single most important component for water quality, because it removes the contaminated initial runoff before it enters storage. The leaf screen prevents organic matter from decomposing in the tank and consuming oxygen, which can cause anaerobic conditions and foul-smelling water. Together, these two elements keep the tank water clean enough that downstream treatment has a manageable job, rather than fighting a heavy contamination load.",
      ],
    },
    {
      heading: "How Much Rainwater Can You Collect?",
      paragraphs: [
        "The amount of rainwater you can collect depends on three factors: the roof area, the annual rainfall at your location, and the runoff coefficient of your roof material. The formula is straightforward: roof area in square metres multiplied by annual rainfall in millimetres multiplied by the runoff coefficient multiplied by a system efficiency factor of approximately 0.9 for losses in gutters and filtration. The result is the approximate number of litres you can collect per year.",
        "Consider a worked example. A home in Nairobi has a metal roof measuring 200m2. Nairobi receives approximately 900mm of rainfall per year. Using a runoff coefficient of 0.8 for a metal roof and a system efficiency of 0.9, the annual collection is 200 x 900 x 0.8 x 0.9 = 129,600 litres per year, or an average of about 355 litres per day. This is enough to cover a significant share of a household's daily needs, particularly during the rainy seasons.",
        "It is important to recognise that rainfall is not evenly distributed across the year. Kenya has two main rainy seasons — the long rains from March to May and the short rains from October to December — with dry periods in between. The 355 litres per day in the example is an average. During the rainy seasons, collection may exceed 1,000 litres per day, while during the dry seasons, collection drops to near zero. This is why storage capacity is so important: the tank must be large enough to carry the collected water through the dry months.",
      ],
    },
    {
      heading: "Designing the Catchment System",
      paragraphs: [
        "The catchment system — the roof, gutters, downpipes, and first-flush diverter — is the part of the system that captures and delivers rainwater to storage. The roof is the primary catchment surface, and its material determines the runoff coefficient. Corrugated metal sheets (mabati) are the best surface for rainwater harvesting: they are smooth, shed water quickly, and yield a runoff coefficient of 0.8. Clay and concrete tiles work at a slightly lower coefficient of 0.7 because some water is absorbed between the tiles. Thatch roofs are not suitable for potable water collection.",
        "Gutters must be sized to the roof area they serve. For a typical Kenyan home, a gutter width of 100mm is adequate for roof sections up to about 50m2, while larger roofs need 125mm or 150mm gutters to handle peak rainfall intensity without overflowing. Gutters should be installed with a slope of approximately 1 in 100 (1cm drop per metre of run) so water flows toward the downpipes rather than pooling. Common gutter materials are PVC, which is affordable and corrosion-resistant, and metal, which is more durable but needs protective coating.",
        "Downpipes carry water from the gutters to ground level. They should be at least 75mm in diameter for a typical residential system and 100mm or larger for commercial buildings. A first-flush diverter is fitted at the base of each downpipe. The diverter holds the first 0.5 to 2mm of rainfall — equivalent to 0.5 to 2 litres per square metre of roof — in a sealed chamber that is then slowly drained or manually emptied. This ensures that only the cleaner water that follows the first flush enters the storage tank. For a 200m2 roof, a first-flush volume of 100 to 400 litres is typical.",
      ],
    },
    {
      heading: "Choosing the Right Storage Capacity",
      paragraphs: [
        "Storage is what bridges the gap between when rain falls and when water is needed. In Kenya, the dry seasons — June to September and January to February — can last 8 to 12 weeks with minimal rainfall. A tank sized only for a few days of demand will run dry during these periods. The correct approach is to size the tank for the longest realistic dry spell in your area, which means planning for 30 to 60 days of stored demand depending on your region.",
        "For a household using 500 litres per day, a 30-day reserve requires 15,000 litres of storage, and a 60-day reserve requires 30,000 litres. This can be achieved with a single large tank or multiple smaller tanks connected in parallel. For properties combining rainwater with a borehole, the storage requirement can be reduced because the borehole provides a fallback during extended dry periods. In that case, the tank serves as a buffer of one to two weeks rather than two months, and the borehole tops up the tank when rainwater alone is insufficient.",
        "The choice between one large tank and several smaller ones is often driven by space and budget. A single 20,000 litre tank is usually cheaper than two 10,000 litre tanks, but two smaller tanks are easier to transport, can be placed at different locations around the property, and allow one tank to be taken offline for cleaning while the other remains in service. For a detailed guide to tank types, sizing, and placement, see our water storage tank sizing guide.",
      ],
    },
    {
      heading: "Filtration and Water Treatment",
      paragraphs: [
        "The level of treatment required depends on the end use. For non-potable applications — garden irrigation, toilet flushing, laundry — a leaf screen at the tank inlet and a first-flush diverter are usually sufficient. Rainwater is naturally soft, free of dissolved minerals, and slightly acidic, which makes it excellent for laundry because it lathers well with less soap and does not leave scale deposits in pipes and appliances.",
        "For domestic use that includes bathing and food preparation but not direct drinking, a sediment filter (10 to 20 micron) followed by a carbon filter improves clarity and removes any residual taste or odour. For drinking water, the full treatment chain is a sediment filter, a carbon filter, and a UV steriliser or chlorination system. The UV steriliser kills bacteria, viruses, and other pathogens that may be present from bird droppings or airborne contamination on the roof. UV treatment adds no chemicals to the water and is the preferred method for household rainwater systems.",
        "It is worth noting that rainwater collected from a well-maintained metal roof, fitted with a first-flush diverter and stored in a covered, light-excluded tank, is often of good enough quality that only UV treatment is needed to make it safe for drinking. However, this should always be confirmed with a water quality test before the water is consumed. Tanks should be opaque or coloured to prevent light entry, which promotes algae growth. A well-designed system produces water that is cleaner than many municipal supplies and far cheaper.",
      ],
    },
    {
      heading: "Rainwater for Irrigation",
      paragraphs: [
        "Rainwater is an excellent source for irrigation. It is soft, free of dissolved salts and minerals, and slightly acidic, which means it does not clog drip emitters with calcium or iron deposits the way borehole water can. For drip irrigation systems, this is a significant advantage — emitters last longer, filtration requirements are lower, and plants respond well to the low-mineral water. Rainwater can be fed directly from the storage tank to a drip network by gravity if the tank is elevated, or by a small pump if it is at ground level.",
        "For gardens and small-scale landscaping, a simple connection from the rainwater tank to a hose or drip line is all that is needed. For larger farm irrigation, the rainwater tank acts as a buffer: rain fills the tank during wet periods, and a pump draws from it to irrigate on schedule. Because rainwater is most abundant during the rainy seasons when irrigation demand is lowest, the primary value of rainwater for irrigation is in supplementing the main water source — usually a borehole — and reducing the pumping cost and wear on the borehole pump during the shoulder months.",
        "On farms with both a borehole and a rainwater system, the two sources can be plumbed to a common storage tank or to separate tanks that feed the same irrigation network. An automatic valve can prioritise rainwater when it is available and switch to borehole supply when the rainwater tank is low. This integrated approach minimises borehole pumping, extends pump life, and ensures that every drop of free rainwater is used before paid energy is spent pumping from the ground.",
      ],
    },
    {
      heading: "Rainwater + Borehole + Storage: Integrated Water Supply",
      paragraphs: [
        "The most reliable and cost-effective water supply for a Kenyan property is an integrated system that combines rainwater, a borehole, and adequate storage. Each source has strengths and weaknesses that the others compensate for. Rainwater is free and abundant during wet seasons but scarce during dry months. A borehole provides a year-round base supply but requires energy to pump and is subject to pump failures and power outages. Storage buffers the variability of both sources, holding water when it is plentiful for use when it is not.",
        "In an integrated system, rainwater fills the storage tanks during the rainy seasons, covering most or all of the property's demand. The borehole acts as the backup, topping up the tanks when rainwater alone is insufficient. A float switch or level sensor in the tank controls the borehole pump so it starts only when the tank level drops below a set threshold, which means during the rainy season the borehole pump may run rarely or not at all. This saves energy, reduces pump wear, and extends the time between borehole pump servicing and replacement.",
        "The result is a water supply that is more reliable than any single source, cheaper to operate than a borehole alone, and resilient to power outages, pump failures, and dry spells. For farms, schools, hospitals, and commercial properties where water continuity is critical, this integrated approach is the gold standard. It is also the foundation of a fully solar-powered water system, where a solar pump fills the tanks during daylight and gravity or a small booster distributes water on demand. Our flagship article on complete solar-powered water systems covers this integration in detail.",
      ],
    },
    {
      heading: "Common Rainwater Harvesting Mistakes",
      paragraphs: [
        "The most common mistake is undersized gutters. Gutters that are too narrow for the roof area they serve will overflow during heavy rainfall, losing significant amounts of collectable water. A 75mm gutter that serves a 100m2 roof section will overflow in a typical Kenyan downpour, while a 100mm or 125mm gutter on the same section will capture nearly all the runoff. The cost difference is minimal, so it is always better to oversize gutters slightly.",
        "Omitting the first-flush diverter is another frequent error. Without a diverter, every rain event washes the accumulated dust, bird droppings, and debris from the roof directly into the storage tank, degrading water quality and creating a maintenance burden. A first-flush diverter costs a fraction of the total system but has a disproportionate impact on water quality. Similarly, neglecting overflow management — not installing an overflow pipe or routing it poorly — causes water to back up into the gutters or pool around the tank base, damaging the tank foundation and the building's fascia.",
        "Finally, mixing potable and non-potable water without proper treatment is a health risk. If rainwater is used for drinking without filtration and UV sterilisation, it can transmit pathogens from the roof surface. The safe approach is to treat the water for the most demanding use on the property: if anyone drinks it, the full treatment chain must be in place. A water quality test after installation confirms that the treatment is working correctly.",
      ],
    },
    {
      heading: "Maintenance",
      paragraphs: [
        "Rainwater harvesting systems require simple but regular maintenance to keep water quality high and the system functioning correctly. Gutters should be cleaned quarterly, or more often if overhanging trees drop leaves and twigs. Blocked gutters not only reduce collection efficiency but can cause water to overflow and run down walls, damaging paint and fascia boards. Downpipes and first-flush diverters should be checked and emptied after each significant rain, especially at the start of the rainy season.",
        "The storage tank should be drained and cleaned at least once a year. Sediment accumulates at the bottom of any tank, and in a rainwater system this sediment is a mix of fine dust, pollen, and organic matter that has passed through the filters. A annual clean involves draining the tank, scrubbing the interior walls and floor, rinsing thoroughly, and refilling. Filters — leaf screens, sediment cartridges, and carbon blocks — should be replaced on their manufacturer-recommended schedule, typically every 6 to 12 months for cartridge filters.",
        "If the system includes UV sterilisation, the UV lamp must be replaced annually even if it still appears to be working, because UV output declines over time and the lamp may no longer deliver effective disinfection. A water quality test should be performed after the annual maintenance and at any point when the water's appearance, taste, or odour changes. With this routine care, a rainwater harvesting system delivers clean, reliable water for 15 to 20 years or more with minimal operating cost.",
      ],
    },
  ],
};

export default article;
