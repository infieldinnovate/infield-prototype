import type { Article } from "@/data/articles";

const article: Article = {
  id: "art06",
  title: "How to Choose and Size a Water Storage Tank",
  slug: "water-storage-tank-sizing-guide",
  excerpt:
    "Reliable water supply starts with the right storage. Learn how to calculate your daily demand, choose between tank types, and size a tank that covers your home, farm, or business.",
  category: "water-storage",
  image: "/placeholder_image.jpg",
  readingTime: "9 min read",
  publishDate: "2025-02-15",
  authorId: "tm1",
  reviewerId: "tm4",
  featured: false,
  tags: ["water storage", "tank", "sizing", "water", "Kenya"],
  relatedServiceSlugs: ["water-storage", "boreholes", "water-harvesting", "irrigation"],
  keyTakeaways: [
    "Size your tank for at least 2 to 3 days of reserve demand, not just a single day's usage, to ride out supply interruptions.",
    "A typical household of five at 100 litres per person per day needs a 2,000 to 3,000 litre tank to cover a 3-day reserve.",
    "Match the tank material to your budget, location, and water use — plastic tanks are economical, steel and concrete offer longevity for large or permanent installations.",
    "An elevated tank delivers gravity pressure of roughly 1 bar for every 10 metres of height, eliminating the running cost of a pressure pump.",
    "Proper foundation, overflow planning, and annual cleaning are as important as the tank itself for a reliable storage system.",
  ],
  tableOfContents: [
    "Why Water Storage Matters",
    "How Much Water Storage Do You Need?",
    "Types of Water Storage Tanks",
    "Ground Tank vs Elevated Tank",
    "Choosing the Right Tank Location",
    "Integrating Your Tank with a Borehole",
    "Integrating Water Storage with Rainwater Harvesting",
    "Water Storage for Irrigation",
    "Installation and Maintenance",
    "Common Tank-Sizing Mistakes",
  ],
  faqs: [
    {
      question: "How do I calculate how much water storage I need?",
      answer:
        "Multiply your daily per-person consumption (typically 50 to 100 litres) by the number of users to get daily demand, then multiply by 2 to 3 days for a reserve. For a household of five at 100 litres each, daily demand is 500 litres and a 3-day reserve is 1,500 litres, so a 2,000 to 3,000 litre tank is recommended to allow for peak days and refilling delays.",
    },
    {
      question: "What is the best material for a water storage tank in Kenya?",
      answer:
        "For most homes, a UV-stabilised plastic (HDPE) tank offers the best balance of cost, weight, and durability, with a 10 to 15 year service life. Stainless or galvanised steel tanks last 20+ years and suit larger or commercial installations. Concrete reservoirs are used for very large, permanent storage above 10,000 litres. The right choice depends on capacity, budget, and whether the water must be potable.",
    },
    {
      question: "Should I choose a ground tank or an elevated tank?",
      answer:
        "A ground tank is cheaper and easier to install but needs a pump to distribute water. An elevated tank provides gravity pressure — about 1 bar for every 10 metres of height — with no running cost for pressure, though the supporting structure costs more. Choose elevated if you want reliable gravity-fed supply and ground if budget and simplicity are the priority.",
    },
    {
      question: "How do I connect a water storage tank to a borehole?",
      answer:
        "The borehole pump fills the tank through a pipe controlled by a float switch, which stops the pump when the tank is full to prevent overflow and save energy. The tank needs an overflow pipe, a drain for cleaning, and a distribution line to the property. Pump sizing must match the tank fill rate and the borehole's safe yield.",
    },
    {
      question: "How often should a water storage tank be cleaned?",
      answer:
        "A domestic tank should be drained, scrubbed, and rinsed at least once a year to remove sediment, biofilm, and any contamination. Tanks supplying institutions or used for drinking water may need cleaning every six months. Always refit a tight, secure cover after cleaning to prevent insects, animals, and debris from entering.",
    },
  ],
  caseStudy: {
    challenge:
      "A dairy farm in Eldoret with 50 cattle relied on a single borehole pumped directly to troughs, with no storage. During the dry season the borehole could not keep up with peak demand, and power interruptions left cattle without water for hours at a time.",
    assessment:
      "Our engineers calculated daily water demand for 50 cattle at roughly 50 litres per head per day, totalling 2,500 litres, plus a reserve for dry spells and pump downtime. The borehole yield was sufficient on average but could not sustain continuous direct supply during peak hours.",
    solution:
      "We installed two 10,000 litre UV-stabilised plastic tanks in parallel, giving 20,000 litres of total storage. The borehole pump fills the tanks through a float switch control, and gravity and a booster pump distribute water to troughs across the farm.",
    implementation:
      "Both tanks were mounted on prepared concrete pads with connected inlet, outlet, overflow, and drain fittings. The float switch automation was wired to the borehole pump controller so filling stops automatically when the tanks are full.",
    result:
      "The farm eliminated water shortages during the dry season and power outages. The 20,000 litre reserve covers roughly eight days of normal cattle demand, giving the owner confidence that livestock never go without water even during extended interruptions.",
  },
  practicalSummary: [
    "Calculate daily demand first, then multiply by 2 to 3 days to size the reserve capacity.",
    "Choose a UV-stabilised plastic tank for most homes; steel or concrete for large or permanent installations.",
    "Prepare a flat, load-bearing concrete pad before any tank is delivered.",
    "Plan inlet, outlet, overflow, and drain connections from the start, not as an afterthought.",
    "Clean the tank annually and inspect it for cracks, leaks, and a secure, fitted cover.",
  ],
  sources: [
    { name: "Kenya Bureau of Standards (KEBS) — KS 765: Drinking water specification" },
    { name: "Kenya Water Act 2016" },
    { name: "Tank manufacturer specifications (HDPE, steel, GRP)" },
  ],
  cta: {
    title: "Not Sure What Tank Size You Need?",
    description:
      "Our engineers can assess your daily demand, site conditions, and water source to recommend the right tank type, capacity, and installation plan.",
    buttonText: "Get a Water Storage Assessment",
    href: "/quote",
  },
  content: [
    {
      heading: "Why Water Storage Matters",
      paragraphs: [
        "Water storage is the buffer between an unreliable supply and a consistent demand. In many parts of Kenya, mains water is interrupted without warning, boreholes depend on electricity that is itself intermittent, and rainfall is concentrated in a few months of the year. A properly sized storage tank smooths out these gaps, ensuring that water is available when you need it rather than only when the source is active.",
        "Storage also supports a smarter pumping strategy. Pumping water is cheaper and easier on equipment when done in controlled batches into a tank, rather than running a pump every time a tap is opened. By storing water when pumping is convenient and drawing from the tank on demand, you reduce pump start-stop cycles, extend equipment life, and lower energy costs. For solar-pumped boreholes, storage is what allows daytime energy to supply water through the night.",
        "Beyond convenience, storage provides an emergency reserve. A household or institution with several days of stored water can weather a pump failure, a power outage, or a dry spell without disruption. For irrigation, storage buffers the mismatch between when water can be pumped or harvested and when crops need it. In every case, the tank turns an intermittent source into a reliable supply.",
      ],
    },
    {
      heading: "How Much Water Storage Do You Need?",
      paragraphs: [
        "Sizing a tank begins with daily demand. For domestic use, the World Health Organization and Kenyan planning norms suggest roughly 50 to 100 litres per person per day, covering drinking, cooking, bathing, laundry, and sanitation. The lower figure suits basic rural households, while the higher figure reflects urban homes with multiple bathrooms and water-dependent appliances. Commercial and institutional demand is higher and must be calculated from the specific activity, such as students at a school, beds in a hospital, or head of livestock on a farm.",
        "Once daily demand is established, multiply by the number of days of reserve you want to hold. For domestic supply, we recommend a reserve of 2 to 3 days to cover typical interruptions. Agricultural and commercial users should assess how long their source can reasonably be unavailable and size accordingly. It is also wise to allow a margin above the calculated reserve for peak days and refilling delays.",
        "Consider a worked example. A household of five people using 100 litres each per day has a daily demand of 500 litres. A 3-day reserve is 1,500 litres. In practice we would recommend a tank of 2,000 to 3,000 litres for this household. The extra capacity above the bare 1,500 litres accommodates days of higher than average use, the time it takes for the source to refill the tank after a drawdown, and a modest allowance for future demand growth such as an additional family member.",
      ],
    },
    {
      heading: "Types of Water Storage Tanks",
      paragraphs: [
        "Plastic or HDPE (high-density polyethylene) tanks are the most common choice for Kenyan homes and small businesses. They are lightweight, easy to transport, and available in capacities from a few hundred to 10,000 litres or more. A UV-stabilised plastic tank in the 1,000 to 10,000 litre range typically costs between KSh 8,000 and KSh 50,000. With proper installation away from direct mechanical damage, a good quality HDPE tank lasts 10 to 15 years. Look for tanks that are rated for potable water and UV-stabilised to withstand the Kenyan sun.",
        "Steel tanks, either galvanised or stainless, are a more durable option for larger capacities and commercial use. Galvanised steel tanks range from roughly KSh 30,000 to KSh 200,000 depending on size and finish, while stainless steel commands a premium for corrosion resistance. Steel tanks can last 20 years or more, but galvanised versions require an internal lining if the stored water is for drinking, to prevent zinc from leaching into the water. Steel tanks are heavier and need a more substantial foundation.",
        "GRP (fibreglass) tanks offer corrosion resistance and can be moulded into custom shapes to fit awkward spaces, making them useful where a standard cylindrical tank will not fit. They sit at a premium price point between plastic and steel. For very large or permanent storage, concrete reservoirs are the answer. Site-built concrete tanks can hold 10,000 to 100,000 litres or more, are extremely long-lived, and suit institutions, farms, and commercial premises. They carry the highest upfront cost and require proper design and curing, but they deliver the lowest cost per litre stored over a long service life.",
      ],
    },
    {
      heading: "Ground Tank vs Elevated Tank",
      paragraphs: [
        "A ground-level tank is the simplest and cheapest installation. It sits on a prepared pad, is easy to deliver and connect, and is straightforward to inspect and clean. The trade-off is that water must be pumped out for distribution, because a tank at ground level provides almost no gravity pressure at the taps. Every time you open a tap, a pump must run, which adds energy cost and wear to the pump.",
        "An elevated tank trades a higher upfront cost for free pressure. By raising the tank, gravity does the work of distribution. The relationship is straightforward: every 10 metres of height produces approximately 1 bar of pressure at the outlet. A tank on a 10-metre tower therefore delivers about 1 bar at ground level, which is enough for most single-storey domestic fixtures, while a 20-metre tower delivers roughly 2 bar, suitable for two-storey buildings or longer pipe runs. The supporting structure must be engineered to carry the full weight of water, which is significant, one cubic metre of water weighs one tonne.",
        "The choice depends on your priorities. If you want the lowest running cost and a supply that works during power outages, an elevated tank with gravity distribution is ideal, provided the structure can be built safely. If your budget is tighter or the site cannot support a tower, a ground tank with a pressure pump is perfectly serviceable, and a solar pump can keep running costs low. Many farms and larger properties use a hybrid: a ground tank for bulk storage and a smaller elevated tank for gravity distribution.",
      ],
    },
    {
      heading: "Choosing the Right Tank Location",
      paragraphs: [
        "Location affects both the lifespan of the tank and the quality of the water it stores. The foundation is the first consideration. A tank must sit on a flat, load-bearing surface, typically a concrete pad, that can support the full weight of the filled tank. A 5,000 litre tank weighs over five tonnes when full, and an uneven or soft base will cause the tank to distort, stress its seams, and eventually crack or fail. The pad should be slightly larger than the tank footprint and free of sharp stones.",
        "Accessibility matters for both delivery and maintenance. The tank must be reachable by the delivery vehicle for offloading, and there must be space around it for cleaning, inspecting fittings, and replacing valves. Sun exposure is another factor: while UV-stabilised tanks withstand sunlight, keeping a tank shaded or partially buried keeps the stored water cooler, which slows algae growth and improves water quality. Where shading is not possible, a darker coloured tank can help reduce light penetration into the water.",
        "Drainage and structural loading complete the checklist. The area around the tank should drain away from the foundation so that overflow or cleaning water does not undermine the pad. For elevated tanks, the tower or platform must be designed by a competent person to carry the dead load of the tank, the water, and wind forces on the exposed structure. A poorly supported elevated tank is a serious safety hazard. Finally, ensure the site allows for future expansion, since many owners add a second tank once they realise how useful storage is.",
      ],
    },
    {
      heading: "Integrating Your Tank with a Borehole",
      paragraphs: [
        "A storage tank turns a borehole from an on-demand source into a managed supply. The borehole pump fills the tank, and the tank feeds the property, which means the pump can run in efficient cycles rather than starting every time a tap is opened. The key to this arrangement is correct pump sizing: the pump must fill the tank faster than the property draws it down, while not exceeding the borehole's safe yield, which is the rate at which water can be extracted without over-pumping and damaging the aquifer.",
        "Float switch control automates the system. A float switch in the tank senses the water level and starts the borehole pump when the tank drops below a set point, then stops it when the tank is full. This prevents overflow, avoids running the pump dry, and removes the need for someone to operate the system manually. For solar-pumped boreholes, the control is often integrated with the solar pump controller so filling happens automatically during daylight hours.",
        "Every tank installation needs an overflow pipe routed to a safe drain, a drain valve at the lowest point for emptying and cleaning, and a distribution line sized for the property's peak flow. Where demand is high or the site is spread out, multiple tanks can be connected in parallel to increase total storage, or staged with one tank for raw borehole water and a second for treated water. The configuration should be planned with the borehole yield and the treatment system in mind from the outset.",
      ],
    },
    {
      heading: "Integrating Water Storage with Rainwater Harvesting",
      paragraphs: [
        "Rainwater harvesting makes a storage tank even more valuable, because the tank becomes the collection endpoint for water captured from roofs. A typical Kenyan roof receives substantial rainfall during the long and short rains, and storing that water extends its usefulness far beyond the rainy season. The tank is connected to the guttering system via a downpipe, and the harvested water supplements or replaces borehole or mains supply.",
        "Two features are essential for a harvested-rainwater system. The first is a first-flush diverter, which captures and discards the initial runoff from a roof at the start of each rain. This first flush carries the dust, bird droppings, and debris that have accumulated on the roof since the last rain, and diverting it away from the tank keeps that contamination out of your stored water. The second is inlet filtration, typically a leaf screen or mesh filter at the tank inlet, which catches leaves and larger particles before they enter storage.",
        "Overflow management matters as much for rainwater systems as for borehole-fed tanks. When the tank is full, excess rainwater must be directed away from the tank foundation and away from the building, ideally to a soak pit or garden. Without a properly sized overflow, water can back up the downpipe and overflow at the gutter, causing damage to fascia boards and walls. With a first-flush diverter, inlet filter, and managed overflow, a rainwater-fed tank delivers clean, soft water that is excellent for laundry, bathing, and, with appropriate treatment, drinking.",
      ],
    },
    {
      heading: "Water Storage for Irrigation",
      paragraphs: [
        "Irrigation demand is different from domestic demand. Crops need water on a schedule, often in large volumes over short pumping windows, and the need is greatest during dry spells when the water source is under most stress. Storage resolves this mismatch by allowing water to be pumped and stored during off-peak hours, then released to crops on an irrigation schedule. This is especially valuable for solar-pumped systems, which can only pump during daylight but may need to irrigate early or late in the day.",
        "Sizing an irrigation tank starts with the daily irrigation requirement, which depends on the crop type, the area under irrigation, and the evapotranspiration rate for the location. Once the daily volume is known, multiply by 2 to 3 days to determine the buffer capacity needed. This buffer covers short interruptions to the water source and smooths out the difference between pumping capacity and peak irrigation demand. For drip irrigation, a smaller buffer may suffice because application is efficient and gradual; for sprinkler systems, a larger buffer is prudent.",
        "The tank should be positioned to serve the irrigation distribution efficiently. A tank at the high point of the farm can feed drip or sprinkler lines by gravity, while a ground-level tank may need a booster pump to achieve the pressure sprinklers require. In every case, the goal is to decouple the pumping window from the irrigation window, so that a few hours of pumping can supply several days of crop water and the system can ride through a dry spell or a pump fault without the crop suffering.",
      ],
    },
    {
      heading: "Installation and Maintenance",
      paragraphs: [
        "Proper installation begins with the base. Whatever the tank material, the foundation must be flat, level, and capable of carrying the full weight of the filled tank. For plastic tanks, a concrete pad or compacted sand bed is typical; for steel and concrete tanks, a reinforced concrete base designed for the load is essential. The tank should be secured against wind, particularly larger plastic tanks that are light when empty and can be displaced or damaged in a storm.",
        "Connections must be planned and fitted correctly from the start. A complete tank has four connections: an inlet for incoming water, an outlet for distribution, an overflow to shed excess water safely, and a drain at the lowest point for emptying and cleaning. Each connection should use the correct fittings and valves so that the tank can be isolated, drained, and serviced without disconnecting pipework. Poorly fitted connections are the most common source of leaks.",
        "Maintenance is straightforward but should not be neglected. A domestic tank should be drained, scrubbed, and rinsed at least once a year to remove sediment and biofilm, with a tighter schedule for tanks supplying drinking water. Inspect the tank and fittings for cracks, leaks, and UV degradation, and ensure the cover is tight and secure to prevent insects, rodents, and debris from entering. A tank that is kept clean and covered stores water far more safely than one that is out of sight and out of mind.",
      ],
    },
    {
      heading: "Common Tank-Sizing Mistakes",
      paragraphs: [
        "The most frequent mistake is sizing a tank for a single day's demand. A one-day tank offers no reserve against supply interruptions, so the moment the source stops, the household or farm runs dry. The correct approach is to size for 2 to 3 days of demand, which is enough to cover most outages and refilling delays. The modest extra cost of a larger tank is far less than the cost and disruption of running out of water.",
        "A related error is ignoring future demand. A tank that is just adequate today will be undersized when a family grows, a new building is added, or livestock numbers increase. It is almost always cheaper to buy a larger tank, or to leave space for a second tank, than to replace an undersized one. Similarly, failing to plan for overflow is a common oversight. Without a properly routed overflow pipe, a full tank spills water around its base, undermining the foundation and creating a muddy, unsanitary mess.",
        "Finally, placing a tank without a proper foundation is a mistake that shortens the tank's life and risks catastrophic failure. An uneven, soft, or undersized base causes plastic tanks to distort and crack, and can cause steel and concrete tanks to settle unevenly and leak at the seams. The foundation is not the place to save money. A flat, reinforced pad, correctly sized for the filled weight of the tank, is the minimum standard for any installation.",
      ],
    },
  ],
};

export default article;
