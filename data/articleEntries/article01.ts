import type { Article } from "@/data/articles";

const article: Article = {
  id: "art01",
  title: "Solar System Sizing & Installation: A Complete Guide for Homes and Businesses",
  slug: "solar-system-sizing-installation-guide",
  excerpt:
    "A practical, engineer-led guide to sizing and installing solar for Kenyan homes and businesses — covering site assessment, panel and inverter selection, battery storage, worked sizing examples, and the full installation process.",
  category: "solar",
  image: "/placeholder_image.jpg",
  readingTime: "12 min read",
  publishDate: "2025-01-15",
  authorId: "tm4",
  reviewerId: "tm1",
  featured: true,
  tags: ["solar", "sizing", "installation", "panels", "inverters", "batteries", "Kenya"],
  relatedServiceSlugs: ["solar", "electrical"],

  keyTakeaways: [
    "System size is determined by your electricity consumption and load profile, not by your available roof area — a 12-month billing history is the starting point for every accurate design.",
    "A professional site assessment covers roof condition, orientation and tilt, shading, available space, and the existing electrical infrastructure that the solar system must connect to.",
    "The main components are solar panels (monocrystalline, 18-22% efficiency, 400-550W), a hybrid or string inverter (95-98% efficient), LiFePO4 battery storage, the mounting structure, and balance-of-system protection.",
    "Batteries are appropriate when you face frequent outages, want to use solar energy at night, or operate off-grid; a grid-tied system without batteries shuts down during outages for safety reasons.",
    "A full installation runs from consultation and site survey through design, equipment selection, physical installation, testing, commissioning, and ongoing monitoring — typically 1-3 days on site for a residential system.",
    "Maintenance is light but essential: periodic panel cleaning, annual electrical inspections, and performance reviews keep a system productive across a 25-year panel warranty and a 10-15 year inverter and battery lifespan.",
  ],

  tableOfContents: [
    "Is Solar Right for Your Property?",
    "What Determines the Size of a Solar System?",
    "Solar Site Assessment",
    "Understanding the Main Solar System Components",
    "How to Choose the Right Solar Configuration",
    "How Much Solar Do You Actually Need?",
    "Solar Installation Process",
    "Common Solar Installation Mistakes",
    "Solar Maintenance and System Life",
  ],

  faqs: [
    {
      question: "How long does a solar installation take?",
      answer:
        "A typical residential installation takes 1-3 days on site depending on system size, roof type, and whether battery storage is included. The full process — consultation, site survey, design, equipment procurement, installation, testing, and commissioning — usually runs 2-4 weeks from first contact to a live system.",
    },
    {
      question: "How much can I save on my electricity bill with solar?",
      answer:
        "A well-designed grid-tied system can reduce your monthly power bill by 70% or more. With battery storage, many homes reach 85-95% grid independence. Actual savings depend on your consumption, system size, tariff, and how much of your usage can be shifted to daylight hours when the panels are producing.",
    },
    {
      question: "Do I need batteries for my solar system?",
      answer:
        "Batteries are essential if you experience frequent outages, want to use solar energy after sunset, or live off-grid. A grid-tied system without batteries shuts down during a grid outage for safety reasons. If your area has reliable grid power and you mainly use electricity during the day, a battery may not be necessary immediately — but a hybrid inverter keeps the option open.",
    },
    {
      question: "What maintenance does a solar system require?",
      answer:
        "Solar systems require minimal maintenance: periodic panel cleaning (especially in dusty areas), an annual electrical inspection of connections and protection devices, and ongoing performance monitoring through the inverter app. Most tier-1 panels carry a 25-year performance warranty, while inverters and batteries typically last 10-15 years.",
    },
    {
      question: "Can solar power an entire home or business?",
      answer:
        "Yes. A correctly sized system with adequate battery storage can power an entire property. The key is accurate load profiling — listing every appliance, its wattage, and its daily run time. For businesses with heavy daytime loads, a grid-tied system may cover most consumption without batteries. For full independence, a hybrid or off-grid system with sufficient storage is required.",
    },
    {
      question: "What happens on cloudy days?",
      answer:
        "Solar panels still produce electricity on overcast days, typically at 10-30% of their rated output. Kenya's average solar irradiance of 4-6 kWh/m2/day is measured year-round, including cloudy periods. A slightly oversized system and adequate battery storage carry you through low-production days. For critical operations, a generator can be integrated as a final backup.",
    },
  ],

  caseStudy: {
    challenge:
      "A homeowner in Nakuru experienced frequent power outages lasting several hours and faced rising electricity costs, with no reliable backup power solution.",
    assessment:
      "Our engineering team evaluated the household's 12-month electricity consumption, roof orientation and structural condition, shading from nearby trees, and the essential loads the family needed to keep running during outages.",
    solution:
      "A 6kW monocrystalline solar array paired with a 10kWh LiFePO4 battery bank and a hybrid inverter, providing daytime power and overnight backup for refrigeration, lighting, security, and communications.",
    implementation:
      "Installation completed in 2 days with minimal disruption. The system was commissioned with real-time monitoring enabled so the homeowner can track production, consumption, and battery state from a phone.",
    result:
      "The homeowner achieved 85% grid independence and maintained power throughout every outage, with annual savings of approximately KSh 180,000 on electricity costs.",
    projectLink: "/resources/projects",
    projectLinkLabel: "View Solar Projects",
  },

  practicalSummary: [
    "Start with a verified site assessment covering roof orientation, tilt, shading, structural integrity, and the existing electrical infrastructure.",
    "Size the system from 12 months of electricity consumption data, not from available roof area — include peak demand and a margin for future loads.",
    "Specify tier-1 monocrystalline panels with 25-year performance warranties and a certified mounting structure rated for local wind loads.",
    "Choose a hybrid inverter if battery storage is planned now or in the future, even if batteries are not installed on day one.",
    "Size battery capacity to essential loads and expected outage duration, not to total daily consumption, to keep the investment proportionate.",
    "Commit to an annual maintenance plan including panel cleaning, electrical inspection, and a performance review against the original yield estimate.",
  ],

  sources: [
    { name: "Energy and Petroleum Regulatory Authority (EPRA)" },
    { name: "Kenya Bureau of Standards (KEBS) — KS IEC 6259" },
    { name: "IEC 61730 — Photovoltaic module safety qualification" },
    { name: "IEC 61215 — Crystalline silicon module quality" },
  ],

  cta: {
    title: "Need a Solar Energy Assessment?",
    description:
      "Our engineers can assess your roof, energy consumption, and backup requirements to design a solar system tailored to your home or business — with transparent sizing and a clear payback estimate.",
    buttonText: "Talk to Our Solar Team",
    href: "/quote",
  },

  content: [
    {
      heading: "Is Solar Right for Your Property?",
      paragraphs: [
        "Solar energy has become one of the most practical investments for Kenyan homes and businesses. Falling panel prices, rising electricity tariffs, and frequent grid outages have shifted the economics firmly in favour of self-generation. Kenya receives an average solar irradiance of 4-6 kWh/m2/day across most of the country, which is among the best solar resources in the world and more than enough to power a well-designed system year-round.",
        "The first question is not whether solar works in Kenya — it clearly does — but whether it is the right fit for your specific property and usage pattern. Grid reliability varies widely: urban centres may experience occasional outages, while rural areas and certain neighbourhoods can lose power for hours at a time. If your property depends on a stable supply for refrigeration, security, medical equipment, or business operations, solar with battery storage addresses both cost and continuity in a single investment.",
        "The decision also depends on whether you are off-grid or grid-connected. Off-grid properties have no choice — solar (or another generator) is the primary source of power. Grid-connected properties can choose anything from a small grid-tied array that offsets daytime consumption to a full hybrid system with batteries that delivers near-total independence. Residential systems typically prioritise backup and bill reduction, while commercial systems prioritise peak-demand shaving and operational continuity. In every case, the right answer comes from looking at your actual consumption, not from a one-size-fits-all package.",
      ],
    },
    {
      heading: "What Determines the Size of a Solar System?",
      paragraphs: [
        "System size is driven by your electricity consumption, your load profile, and your peak demand — not by the size of your roof. The starting point is 12 months of electricity bills, which reveal your average daily consumption in kilowatt-hours (kWh), your seasonal variation, and your highest-demand months. A home using 900 kWh per month consumes roughly 30 kWh per day; a business using 3,000 kWh per month consumes around 100 kWh per day. These figures anchor the entire design.",
        "Just as important as the total is when you use the energy. A load that runs during daylight hours — a workshop, an office, or irrigation pumps — can be served directly by panels with little or no battery storage. A load that runs at night — lighting, refrigeration, entertainment — requires battery storage to capture daytime production for later use. Peak demand matters too: a property that briefly draws 8 kW when multiple appliances start simultaneously needs an inverter and wiring rated for that surge, even if the daily average is far lower.",
        "Future energy requirements must also be factored in. Adding an electric vehicle, expanding a business, installing electric water heating, or building a new room can all increase demand. It is significantly cheaper to oversize a system by 10-20% during the initial installation than to retrofit additional capacity later. Site conditions — available roof area, shading, and structural capacity — set the upper limit on what is physically possible, but they should not be the starting point. The starting point is always the energy you actually need.",
      ],
    },
    {
      heading: "Solar Site Assessment",
      paragraphs: [
        "A professional site assessment is the foundation of a system that performs as promised. It begins with the roof: its condition, age, structural integrity, and remaining useful life. A roof nearing the end of its life should be repaired or replaced before solar is installed, because removing and reinstalling an array to re-roof is costly. The assessment also confirms that the roof can support the additional weight of panels, mounting rails, and in some cases ballasted mounting systems.",
        "Orientation and tilt determine how much energy each panel captures. Because Kenya sits near the equator, the sun travels almost directly overhead, so panels can face east, west, or lie nearly flat and still produce effectively. A tilt of 10-15 degrees is common in Kenya — steep enough to shed dust and rainwater but shallow enough to capture high-angle sunlight. True south-facing arrays with a steeper tilt are used when maximising winter or morning production is a priority, but they are not a requirement the way they are in higher-latitude countries.",
        "Shading is the most common cause of underperformance. Even a small shadow from a chimney, a neighbouring building, or a tree branch can disproportionately reduce the output of an entire string of panels. The assessment maps shading across the day and the year and identifies whether tree trimming, a different roof section, or micro-inverters are the right response. When no suitable roof exists, ground-mounted arrays are an excellent alternative — they offer perfect orientation, easy cleaning access, and room for expansion. Finally, the assessment reviews the existing electrical infrastructure: the distribution board capacity, earthing, cable runs, and whether any upgrades are needed before the solar system can connect safely.",
      ],
    },
    {
      heading: "Understanding the Main Solar System Components",
      paragraphs: [
        "A solar power system has four core components, plus the balance-of-system that ties them together. The solar panels — the photovoltaic modules — convert sunlight into direct current (DC) electricity. Modern monocrystalline panels achieve 18-22% efficiency and typically produce 400-550 watts each. Monocrystalline panels cost slightly more but deliver more power per square metre, making them the standard choice when roof space is limited. Polycrystalline panels are cheaper and slightly less efficient, suited to larger roof or ground areas where space is not a constraint. Always specify tier-1 panels that carry IEC 61215 and IEC 61730 certifications and a 25-year performance warranty.",
        "The inverter converts the DC output of the panels into the alternating current (AC) that your appliances and the grid use. Modern inverters operate at 95-98% efficiency. String inverters are the most cost-effective option for unshaded arrays, while micro-inverters or power optimisers are better for roofs with partial shading because they allow each panel to perform independently. Hybrid inverters combine solar and battery management in a single unit and are the right choice if battery storage is planned now or in the future — they avoid the cost and complexity of adding a separate battery inverter later.",
        "Battery storage captures surplus daytime production for use at night or during outages. Lithium iron phosphate (LiFePO4) batteries are the current standard: they tolerate a 90% depth of discharge, deliver 4,000-6,000 charge cycles, and require no regular maintenance. The mounting structure secures the panels to the roof or ground and must be rated for local wind and weather conditions. The balance-of-system — DC and AC isolators, surge protection devices, fuses, correctly sized cabling, and an energy meter — is what makes the installation safe, compliant, and serviceable. Cutting corners on these components is a common and costly mistake.",
      ],
    },
    {
      heading: "How to Choose the Right Solar Configuration",
      paragraphs: [
        "There are four main solar configurations, each suited to a different situation. A grid-tied system connects directly to the utility grid with no batteries. It is the simplest and most cost-effective option, offsetting daytime consumption and exporting any surplus to the grid. The limitation is that it shuts down automatically during a grid outage for safety reasons — it cannot provide backup power on its own.",
        "A hybrid system adds battery storage to a grid-tied setup. It can power your property from solar during the day, from batteries at night, and from the grid when batteries are depleted. Crucially, a hybrid system with backup capability can keep essential loads running during a grid outage. This is the most popular configuration for Kenyan homes and businesses that want both bill reduction and resilience. A hybrid inverter manages all three sources automatically.",
        "An off-grid system has no grid connection at all — solar and batteries are the entire power supply, often with a generator as a final backup for extended cloudy periods. Off-grid is the right choice for remote properties where a grid connection is unavailable or prohibitively expensive. Finally, a solar-plus-generator configuration pairs a solar array with a backup generator instead of, or in addition to, batteries. This suits properties with heavy loads or frequent extended outages where battery storage alone would be impractically large. The right configuration depends on your grid reliability, outage pattern, budget, and how much independence you require.",
      ],
    },
    {
      heading: "How Much Solar Do You Actually Need?",
      paragraphs: [
        "Sizing a solar system is a straightforward calculation once you have your consumption data. The goal is to match your average daily energy use with enough panel capacity to generate that amount during the available sunlight hours, while accounting for system losses. In Kenya, a well-oriented panel produces roughly 4-5 peak sun hours of equivalent output per day, and real-world system losses (inverter conversion, wiring, dust, temperature) typically reduce the rated output by about 20%.",
        "Consider a worked example. A home uses 900 kWh per month, which is approximately 30 kWh per day. To generate 30 kWh per day from a solar array, divide the daily requirement by the effective sun hours and adjust for losses: 30 kWh divided by 4.5 peak sun hours gives 6.7 kW of raw panel capacity, and accounting for roughly 10% in losses brings the practical requirement to about 6 kW. A 6 kW array built from 500 W panels requires 12 panels, occupying roughly 25-30 square metres of roof area. With a 10 kWh battery, this home can store surplus daytime production to cover evening essentials and ride through short outages.",
        "For businesses the logic is identical but the scale is larger. A business consuming 3,000 kWh per month (about 100 kWh per day) needs roughly a 22-25 kW array, which is typically a commercial ground-mounted or large-roof installation. The key is to size the array to your average daily consumption, size the battery to your essential loads and outage duration, and size the inverter to your peak demand. A professional designer produces a load schedule that lists every appliance, its wattage, its daily run time, and its surge requirement, then uses that schedule to specify each component precisely.",
      ],
    },
    {
      heading: "Solar Installation Process",
      paragraphs: [
        "A professional solar installation follows a defined sequence that protects both performance and safety. It begins with a consultation, where the engineer reviews your energy goals, consumption history, and budget. This is followed by a site survey — a physical inspection of the roof or ground area, shading, structural condition, and electrical infrastructure. The survey produces the measurements and conditions that the system design depends on.",
        "System design translates the survey data into a detailed proposal: panel layout, inverter selection, battery capacity, cable runs, protection devices, and a yield estimate showing expected annual production. Once the design is approved, equipment is selected and procured — always tier-1, certified components with manufacturer warranties. The physical installation follows: mounting the structure, attaching and wiring the panels, installing the inverter and batteries, and connecting the balance-of-system protection. For a residential system this takes 1-3 days on site.",
        "After installation comes testing and commissioning. Every connection is checked, insulation resistance is measured, protection devices are verified, and the system is energised under supervision. The inverter is configured, monitoring is activated, and the client is walked through system operation and safety procedures. The handover includes documentation, warranty information, and a maintenance schedule. From this point, ongoing monitoring — through the inverter app or a web portal — lets you and your installer track production, consumption, and battery health, flagging any underperformance early.",
      ],
    },
    {
      heading: "Common Solar Installation Mistakes",
      paragraphs: [
        "The most frequent mistake is incorrect sizing — usually undersizing. A system sized to today's consumption with no margin for future loads will be unable to support additions like an electric vehicle, a new appliance, or a business expansion. The corollary is sizing a battery to total daily consumption rather than to essential loads, which inflates cost dramatically for little benefit. Battery capacity should cover the loads you genuinely need during an outage, not everything you own.",
        "Ignoring shading is another common error. A design that looks good on paper can underperform badly if a shadow from a nearby tree or building falls across a string of panels during peak production hours. A proper site survey uses a shading analysis to identify and mitigate this before installation. Similarly, poor protection — missing DC isolators, inadequate surge protection, or no fuse on the battery circuit — creates both safety and equipment risks. Undersized cables cause voltage drop, energy loss, and overheating; every cable must be sized for the current it carries and the distance it travels.",
        "Poor battery sizing and ignoring future loads round out the list. A battery too small for the outage duration leaves you in the dark; a battery too large wastes money. The right approach is to list essential loads, estimate the hours of autonomy required, and add a margin for depth of discharge and degradation over time. Finally, systems designed without any thought to future expansion — no spare inverter capacity, no spare roof space, no provision for additional battery modules — force expensive retrofits. A small amount of forward planning at the design stage saves significant cost later.",
      ],
    },
    {
      heading: "Solar Maintenance and System Life",
      paragraphs: [
        "Solar systems are among the lowest-maintenance power systems available, but they are not maintenance-free. The most important routine task is panel cleaning. Dust, pollen, and bird droppings reduce output, and in dry regions of Kenya a layer of dust can cut production by 5-15% between cleanings. Panels should be rinsed or wiped every few months — more often in dusty environments — using only water and a soft cloth, never abrasive cleaners. A quick rinse at the start of the dry season and after any dust storm is usually sufficient.",
        "Annual electrical inspections are the second pillar of maintenance. A technician checks torque on all connections, verifies the operation of DC and AC isolators, tests surge protection devices, inspects cabling for heat damage or rodent activity, and confirms that earthing is intact. The battery management system and inverter logs are reviewed for any fault history. A performance check compares actual production against the original yield estimate — a persistent shortfall indicates a problem such as a degraded panel, a shading change, or an inverter fault that needs attention.",
        "Component lifespans are well established. Tier-1 panels carry a 25-year performance warranty, typically guaranteeing at least 80% of rated output at year 25, and often continue producing well beyond that. Inverters have a service life of 10-15 years and may need one replacement over the life of the system. LiFePO4 batteries last 10-15 years depending on usage depth and cycle count, with 4,000-6,000 cycles before reaching 80% of original capacity. Budgeting for one inverter and one battery replacement over a 25-year period gives a realistic total cost of ownership and keeps the system running at full capability for its entire life.",
      ],
    },
  ],
};

export default article;
