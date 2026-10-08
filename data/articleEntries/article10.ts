import type { Article } from "@/data/articles";

const article: Article = {
  id: "art10",
  title: "Complete Solar-Powered Water System: Borehole, Pump, Storage & Irrigation",
  slug: "complete-solar-powered-water-system",
  excerpt:
    "The flagship guide to designing a fully integrated, solar-powered water system — from borehole and rainwater sources through pumping, storage, treatment, and irrigation. One partner, every detail.",
  category: "solar",
  image: "/placeholder_image.jpg",
  readingTime: "14 min read",
  publishDate: "2025-03-10",
  authorId: "tm4",
  reviewerId: "tm1",
  featured: true,
  tags: ["solar", "borehole", "water", "irrigation", "integrated", "off-grid", "Kenya"],
  relatedServiceSlugs: ["boreholes", "solar", "water-storage", "water-harvesting", "irrigation", "electrical"],
  keyTakeaways: [
    "A complete solar-powered water system links a water source, a solar pump, storage, treatment, and distribution into a single autonomous supply with near-zero operating cost.",
    "Water is the energy storage — pumping during sunlight into tanks eliminates the need for batteries, which are the most expensive and shortest-lived component of any solar system.",
    "System design follows an eight-step sequence: source, demand, borehole yield, pump selection, solar sizing, storage, treatment, and distribution.",
    "A storage buffer of 3 or more days bridges the gap between sunny pumping days and overcast periods, and a backup power source or secondary water source covers extended low-solar periods.",
    "Total system cost ranges from KSh 1.6 million for a small domestic system to KSh 6 million or more for a large farm or institutional system, with payback in 3 to 5 years versus diesel.",
    "The most common design mistake is selecting a pump before borehole yield testing — the pump must be matched to what the borehole can actually deliver, not to an assumed figure.",
  ],
  tableOfContents: [
    "What Is a Solar-Powered Water System?",
    "Step 1 — Establishing the Water Source",
    "Step 2 — Determining Water Demand",
    "Step 3 — Borehole Assessment and Yield",
    "Step 4 — Pump Selection and Sizing",
    "Step 5 — Solar Power System Design",
    "Step 6 — Water Storage Design",
    "Step 7 — Water Treatment",
    "Step 8 — Distribution and Irrigation",
    "Designing for Reliability",
    "Complete System Example",
    "How Much Does a Solar-Powered Water System Cost?",
    "Common Design Mistakes",
  ],
  faqs: [
    {
      question: "How does a solar water system work without batteries?",
      answer:
        "The solar panels power the pump during daylight hours, and the pumped water is stored in tanks. The tanks are the energy storage — instead of converting sunlight to electricity and storing it in batteries (which are expensive and wear out), the system stores sunlight as water. When you open a tap or run irrigation, water flows from the tank by gravity or a small booster pump, no battery needed.",
    },
    {
      question: "What happens on cloudy days when the pump cannot run?",
      answer:
        "The storage buffer carries the property through short overcast periods. We size storage for at least 3 days of demand, so a day or two of low solar production does not interrupt supply. For extended cloudy periods, a small backup generator or grid connection can power the pump, or a secondary water source (rainwater, municipal) can supplement the system.",
    },
    {
      question: "How long does it take to install a complete system?",
      answer:
        "A complete system — borehole, solar pump, storage, treatment, and distribution — typically takes 6 to 12 weeks from the start of the hydrogeological survey to handover. Drilling and pump installation take 1 to 2 weeks, the solar array and storage 1 to 2 weeks, and treatment and distribution 1 to 2 weeks, with permitting and survey adding 2 to 6 weeks at the start.",
    },
    {
      question: "How much does a complete solar water system cost?",
      answer:
        "The total cost ranges from approximately KSh 1.6 million for a small domestic system to KSh 6 million or more for a large farm or institutional system. The borehole is typically the largest single component (KSh 800,000 to 2,500,000), followed by the solar pump and array (KSh 350,000 to 1,400,000 combined), storage tanks (KSh 100,000 to 500,000), treatment (KSh 50,000 to 300,000), and irrigation and distribution (KSh 300,000 to 1,500,000).",
    },
    {
      question: "Can this system work for my property?",
      answer:
        "If your property has a viable borehole site (confirmed by a hydrogeological survey) or another water source (rainwater, surface water), and enough sunlight for solar pumping — which covers virtually all of Kenya — then a solar-powered water system is feasible. The design is scaled to your specific water demand and source yield.",
    },
    {
      question: "What maintenance does a solar water system need?",
      answer:
        "Maintenance is light: clean the solar panels every few months, clean irrigation filters weekly during active irrigation, replace water filter cartridges every 6 to 12 months, replace UV lamps annually, inspect the pump controller annually, and clean storage tanks annually. There is no engine to service, no fuel to buy, and no oil to change.",
    },
  ],
  caseStudy: {
    challenge:
      "A 50-acre farm in Nyandarua County needed a reliable, autonomous water supply for a farmhouse (5 residents), 30 dairy cows, and 10 acres of vegetable crops. The property had no grid electricity, and a diesel pump would have cost KSh 45,000 per month in fuel plus maintenance, making the farm's water cost unsustainable.",
    assessment:
      "Our engineering team conducted a hydrogeological survey, drilled and test-pumped a borehole to 120m depth with a sustainable yield of 8,000 litres per hour, and calculated total daily water demand: 500 litres for domestic use, 3,000 litres for livestock (30 cows at 100 litres each), and 30,000 litres for drip irrigation of 10 acres — a total of 33,500 litres per day.",
    solution:
      "We designed and installed a complete solar-powered water system: a 2.2 kW Lorentz solar submersible pump powered by a 3.5 kW solar array (8 x 450W panels), filling two 10,000 litre elevated storage tanks. The system includes a sediment filter and UV steriliser for the domestic supply, a disc filter for irrigation, and a pressure-regulated drip irrigation network covering the 10 acres in four zones.",
    implementation:
      "The borehole was drilled and test-pumped in week 1. The solar pump was installed in week 2, the solar array mounted and connected in week 3, and the storage tanks, treatment system, and drip irrigation network installed in weeks 4 and 5. Commissioning and training were completed in week 6.",
    result:
      "The system delivers fully autonomous water supply with zero fuel cost. The 20,000 litres of elevated storage provides gravity pressure for the farmhouse and livestock troughs, and the drip irrigation network delivers precise, efficient watering to the 10 acres of vegetables. The farm's monthly water operating cost dropped from KSh 45,000 (diesel fuel and maintenance) to zero, and the system is expected to pay for itself in approximately 4 years. The farmer has since expanded the irrigated area to 15 acres using the same water source.",
    projectLink: "/resources/projects",
    projectLinkLabel: "View Integrated Projects",
  },
  practicalSummary: [
    "Start with the water source: a hydrogeological survey and test pumping determine what the system can actually deliver, before any equipment is purchased.",
    "Calculate total daily water demand across all uses (domestic, livestock, irrigation, commercial) and add 20 to 30 percent for future growth.",
    "Size the solar array to the pump's power requirement with a 1.3 to 1.5 multiplier for system losses, and orient panels at 10 to 15 degrees tilt facing the equator.",
    "Install at least 3 days of water storage to bridge short overcast periods, and plan a backup power source for extended low-solar periods.",
    "Include filtration and treatment appropriate to the end use — disc filtration for irrigation, UV sterilisation for drinking water, and sediment filtration for both.",
    "Protect the pump with a controller that includes dry-run protection, overload protection, and surge protection — pump failure is the most common and costly system breakdown.",
  ],
  sources: [
    { name: "Food and Agriculture Organization (FAO) — Small-scale solar pumping" },
    { name: "Kenya Agricultural and Livestock Research Organization (KALRO)" },
    { name: "Water Resources Authority (WRA) — Borehole drilling and permitting" },
    { name: "IEC 61730 / IEC 61215 — Solar panel safety and quality standards" },
    { name: "Lorentz and Grundfos solar pump technical documentation" },
  ],
  cta: {
    title: "Need a Complete Water & Energy Solution?",
    description:
      "Our team can assess the water source, pumping requirements, storage needs and energy demand, then design and deliver an integrated system from source to end use — one partner, every detail.",
    buttonText: "Request an Integrated Water System Assessment",
    href: "/quote",
  },
  content: [
    {
      heading: "What Is a Solar-Powered Water System?",
      paragraphs: [
        "A complete solar-powered water system is a fully integrated supply that uses solar energy to pump water from a source — typically a borehole — into storage, from which it is treated and distributed for domestic, livestock, irrigation, or commercial use. The system has no fuel cost, minimal maintenance, and no dependency on the electrical grid. It is the ultimate water and energy independence solution for properties where grid power is unreliable, unavailable, or too expensive to run a conventional pumping system.",
        "The architecture follows a clear sequence: Water Source (borehole, rainwater, surface water) — Pump (solar-powered submersible or surface pump) — Solar Power (panels and pump controller) — Storage (elevated or ground-level tanks) — Treatment (filtration and disinfection) — Distribution (gravity or booster pump to taps, troughs, and irrigation) — End Use (drinking, domestic, livestock, irrigation). Each component is sized to match the others, and the system is designed as a whole rather than assembled from parts.",
        "The defining principle of a solar water system is that water is the energy storage. Instead of converting solar energy to electricity and storing it in batteries (which are expensive, have limited cycle life, and require replacement every 10 to 15 years), the system pumps water into tanks during daylight hours. The water in the tanks is the stored energy — when you open a tap or run irrigation, the water flows from the tank by gravity or a small booster pump, with no battery involved. This makes the system simpler, cheaper, and longer-lasting than a battery-based solar power system performing the same task.",
      ],
    },
    {
      heading: "Step 1 — Establishing the Water Source",
      paragraphs: [
        "Every solar water system starts with the water source. A borehole is the most common and most reliable year-round source for Kenyan properties, providing a consistent supply that is independent of rainfall. A hydrogeological survey determines the likely depth and yield before any drilling investment is made. Rainwater is a valuable supplementary source, particularly during the two rainy seasons, and can reduce borehole pumping by 50 to 70 percent during those months. Surface water — rivers, streams, dams — is viable where available but requires pumping from an open source and more extensive treatment.",
        "Most integrated systems use a borehole as the primary source and rainwater as a supplement. The borehole provides the base supply that is available year-round, while rainwater fills the storage tanks during the rainy seasons, reducing the borehole pump's running time and extending its service life. An existing municipal or tanker supply can also serve as a backup, automatically topping up the storage tanks when the primary source cannot keep up with demand.",
        "The choice of source depends on the property's location, geology, and water demand. In most of Kenya, a borehole is feasible and is the recommended primary source for any property seeking water independence. The hydrogeological survey, drilling, and testing process is covered in detail in our borehole drilling guide. For properties with large roof areas and good rainfall, a rainwater harvesting system can serve as a significant secondary source, as described in our rainwater harvesting guide.",
      ],
    },
    {
      heading: "Step 2 — Determining Water Demand",
      paragraphs: [
        "Accurate demand calculation is the foundation of the entire system design. Every component — the pump, the solar array, the storage, the treatment, the distribution — is sized to the daily and peak water demand. Underestimating demand leads to a system that cannot keep up, while overestimating leads to unnecessary cost. The demand assessment should list every water use on the property, its daily volume, and its timing (whether demand is spread across the day or concentrated in specific periods).",
        "Domestic demand for a household is typically 50 to 100 litres per person per day, covering drinking, cooking, bathing, laundry, and sanitation. Livestock demand varies by animal: dairy cows need 80 to 120 litres per head per day, beef cattle 30 to 50 litres, sheep and goats 5 to 10 litres, and poultry 0.2 to 0.5 litres per bird. Irrigation demand is the largest consumer for most farms: it depends on crop type, area, and climate, typically 3 to 8 mm per day, which translates to 30,000 to 80,000 litres per day for 10 acres. Institutional demand (schools, hospitals) should be calculated from the specific user count and activity pattern.",
        "Once the daily demand is totalled, add a margin of 20 to 30 percent for future growth. This margin accounts for expansion — more livestock, additional irrigated area, new buildings — without requiring a system redesign. The peak demand is also important: if all the irrigation zones run simultaneously, or if the household draws water while the irrigation is running, the pump and distribution system must handle the combined flow. The demand figure is what drives the pump selection in Step 4 and the storage sizing in Step 6.",
      ],
    },
    {
      heading: "Step 3 — Borehole Assessment and Yield",
      paragraphs: [
        "The borehole is the heart of most solar water systems, and its yield — the rate at which water can be sustainably extracted — is the single most important parameter in the design. Yield is determined by test pumping, which measures the static water level (the rest level before pumping), the dynamic water level (the stabilised level during pumping at a known rate), and the sustainable yield (the maximum rate at which the borehole can be pumped continuously without the water level dropping irreversibly).",
        "The borehole yield must exceed the daily water demand, or the system must include sufficient storage to bridge the gap. For example, if the daily demand is 33,500 litres and the borehole yields 8,000 litres per hour, the pump needs to run for approximately 4.2 hours to meet the daily demand. With 6 hours of effective solar pumping per day in Kenya, this borehole comfortably meets the demand with margin. A lower-yielding borehole — say 3,000 litres per hour — would need to pump for 11 hours, which exceeds the solar window; in this case, a larger storage tank and a longer pumping strategy (perhaps supplemented by a small generator for cloudy days) would be needed.",
        "Low-yield boreholes do not disqualify a solar system — they simply change the design. A 2,000 L/hr borehole can still serve a property needing 20,000 L/day if the pump runs for 10 hours (possible with a well-sized solar array and good sunlight) and the storage tank holds 2 to 3 days of demand. The key is that the pump rate must not exceed the borehole's sustainable yield, or the water level will drop below the pump intake and the pump will run dry, causing damage. A pump controller with dry-run protection is mandatory. For the full borehole drilling, testing, and permitting process, see our borehole drilling guide.",
      ],
    },
    {
      heading: "Step 4 — Pump Selection and Sizing",
      paragraphs: [
        "The pump must deliver the required daily volume of water at the required pressure, within the constraints of the borehole yield and the solar energy available. Two parameters define the pump's operating point: the flow rate (litres per hour) and the total dynamic head (the total height and pressure the pump must overcome). The total dynamic head is the sum of the static water level (depth from surface to water), the elevation from the borehole to the storage tank, the friction loss in the pipework, and the operating pressure required at the tank inlet.",
        "For a borehole at 120m depth with a static water level at 40m, pumping to a tank 15m above the borehole, through 200m of 32mm pipework with a friction loss of 5m, the total dynamic head is approximately 60m (40m static + 15m elevation + 5m friction). The pump must deliver the required flow rate — say 8,000 L/hr (2.2 L/s) — at this head. Solar submersible pumps from manufacturers like Lorentz, Grundfos (SQF range), and Franklin Electric are designed for this duty, with pump curves that show the flow rate achievable at different heads and solar input levels.",
        "The pump's daily output must meet the property's daily demand within the available solar pumping hours. In Kenya, a well-oriented solar array provides approximately 5 to 6 hours of effective pumping per day (equivalent peak sun hours for pumping, which is slightly less than the total daylight because the pump only reaches full output when solar irradiance is high). A 2.2 kW solar submersible pump operating at 60m head can deliver approximately 8,000 L/hr at peak solar input, giving 40,000 to 48,000 litres per day from 5 to 6 hours of pumping — enough for the 33,500 L/day demand in our example. The pump controller (with MPPT — maximum power point tracking) maximises the energy harvested from the panels and includes dry-run protection, overload protection, and surge protection.",
      ],
    },
    {
      heading: "Step 5 — Solar Power System Design",
      paragraphs: [
        "The solar array is sized to the pump's power requirement with a multiplier for system losses. A 2.2 kW pump needs a solar array of approximately 2.2 x 1.3 to 1.5 = 2.9 to 3.3 kW, accounting for losses in the controller, wiring, temperature derating, and the need to reach full pump output before solar irradiance peaks. In practice, this means 6 to 8 panels of 450W each, giving 2.7 to 3.6 kW of array capacity. The array is connected to the pump controller, which manages the power flow to the pump and includes the MPPT function that maximises output across varying solar conditions.",
        "Panel orientation in Kenya is straightforward because of the equatorial location. Panels should be mounted facing the equator (north-facing in Kenya, since Kenya is in the southern hemisphere relative to the equator — though practically, a near-flat tilt works well) at a tilt angle of 10 to 15 degrees from horizontal. This shallow tilt captures the high-angle sun that passes near overhead, and it also allows rain to wash dust off the panels. A steeper tilt is not necessary and reduces midday output. The mounting structure must be rated for local wind loads and securely anchored to the ground or a suitable surface.",
        "No batteries are needed in a solar water system. The pump runs directly from the solar array during daylight, and the pumped water is stored in tanks for use at any time. This is the key cost and reliability advantage: batteries are the most expensive and shortest-lived component of any solar power system, and they are entirely unnecessary when the stored product is water rather than electricity. The pump controller manages the variable solar input, starting the pump when the array produces enough power and stopping it when production drops below the pump's minimum — all automatically. For cloudy periods, the storage buffer (Step 6) provides multi-day coverage, and an optional backup power source can run the pump during extended overcast spells.",
      ],
    },
    {
      heading: "Step 6 — Water Storage Design",
      paragraphs: [
        "Storage is the buffer that turns intermittent solar pumping into a continuous, reliable water supply. The tank holds water pumped during the day for use at any time — at night, in the early morning, or during cloudy days when the pump cannot run. The storage capacity must cover at least 2 to 3 days of demand to bridge short overcast periods, and for properties with no backup power source, 3 to 5 days is prudent.",
        "For our example farm with a daily demand of 33,500 litres, a 3-day storage buffer requires approximately 100,000 litres. This can be achieved with multiple tanks — for example, two 10,000 litre tanks for domestic and livestock use (elevated for gravity pressure) and a larger ground-level tank or reservoir of 80,000 litres for irrigation. The domestic and livestock tanks are elevated on a platform or tower to provide gravity pressure at the taps and troughs, while the irrigation tank is typically at ground level, with a booster pump or gravity feeding the irrigation network depending on the field topography.",
        "The tank type and location are covered in detail in our water storage tank sizing guide. For an integrated system, the key considerations are: the tanks must be positioned to receive water from the borehole pump (which may be several hundred metres from the borehole), the elevated tank structure must be engineered for the water weight (1,000 kg per cubic metre), and the system should include float switches or level sensors that stop the pump when the tanks are full to prevent overflow. An overflow pipe at each tank routes excess water to a safe drain or, in the case of irrigation, to a supplementary storage or soak pit.",
      ],
    },
    {
      heading: "Step 7 — Water Treatment",
      paragraphs: [
        "Treatment is determined by the water quality test and the end use. Every borehole should be tested after drilling and periodically thereafter — our water quality testing guide covers the full parameter list, interpretation, and treatment selection. The most common treatment train for a solar water system serving multiple uses is a split design: a disc or screen filter for irrigation water (to protect drip emitters), and a separate treatment chain for domestic water.",
        "The domestic treatment chain typically consists of a sediment filter (10 to 20 micron) to remove particulates, a carbon filter to remove taste and odour, and a UV steriliser to kill bacteria and other pathogens. Where the water quality test identifies specific issues — high fluoride, iron, or hardness — targeted treatment is added: an activated alumina or reverse osmosis unit for fluoride, an oxidation filter for iron, or a water softener for hardness. The treatment system is installed on the domestic supply line downstream of the storage tank, so the tank holds raw water and treatment is applied at the point of use.",
        "For irrigation, filtration is the primary concern. Drip irrigation systems require 120 to 150 mesh filtration to prevent emitter clogging, and borehole water with high sediment or iron content may need a sand media filter in addition to a disc filter. The irrigation filter is installed on the irrigation supply line, after the storage tank and before the mainline to the field. Filters must be cleaned regularly — weekly during active irrigation — to maintain flow and pressure. UV lamps for domestic treatment must be replaced annually, and carbon and sediment cartridges every 6 to 12 months depending on water quality and usage.",
      ],
    },
    {
      heading: "Step 8 — Distribution and Irrigation",
      paragraphs: [
        "Distribution is the final link from storage to end use. For a system with elevated storage, gravity provides the pressure for domestic supply and livestock troughs — every 10 metres of tank height delivers approximately 1 bar at ground level. For a tank at 15m height, the gravity pressure at the farmhouse is approximately 1.5 bar, which is adequate for most domestic fixtures. If the tank is at ground level, a small booster pump with a pressure tank pressurises the domestic supply, typically set to 2 to 3 bar.",
        "Livestock troughs are served by gravity from the elevated tank through a dedicated line with float valves at each trough, which automatically maintain the water level. The line is sized for the peak drinking demand — cattle drink most intensively in the hour after milking or feeding, so the pipe must deliver enough flow to fill multiple troughs simultaneously without the last trough in the line running dry.",
        "Irrigation distribution is covered in detail in our irrigation system design guide. For a solar water system, the irrigation network is connected to the storage tank and is designed to operate within the available pressure — either gravity from an elevated tank or a booster pump from a ground-level tank. Drip irrigation is the preferred method because it operates at low pressure (0.5 to 1.5 bar), uses 90 to 95 percent of applied water efficiently, and can be zoned for sequential operation so that the total flow never exceeds what the tank and pump can sustain. The system is divided into zones, each controlled by a valve, and zones are irrigated in sequence on a schedule that ensures every area receives its daily water requirement.",
      ],
    },
    {
      heading: "Designing for Reliability",
      paragraphs: [
        "A solar water system is inherently reliable — there is no engine to break down, no fuel supply to interrupt, and minimal moving parts. But reliability is not automatic; it must be designed in. The first reliability measure is the storage buffer: at least 3 days of demand in storage means that a cloudy day or two does not interrupt supply. For properties where water continuity is critical — a dairy farm where cattle must water daily, or a school where sanitation depends on running water — 5 days of storage is the safer target.",
        "Backup power and multiple water sources provide further resilience. A small generator (2 to 3 kW) connected to the pump controller through an automatic or manual transfer switch can run the pump during extended overcast periods when solar production is insufficient. Alternatively, if the property has a grid connection, the pump controller can accept AC input as a backup. A secondary water source — rainwater harvesting feeding the same storage tanks, or a municipal connection as a top-up — adds redundancy at the source level. If the borehole pump fails, the rainwater system or municipal supply can maintain partial service while the pump is repaired or replaced.",
        "Pump protection is the most important reliability measure after storage. The pump controller must include dry-run protection (which stops the pump if the water level drops below the intake, preventing catastrophic damage), overload protection (which stops the pump if it draws excessive current, indicating a blockage or mechanical fault), and surge protection (which protects the controller and pump from voltage spikes, particularly during thunderstorms). Remote monitoring via GSM adds the ability to check pump status, water level, and solar performance from a phone, so issues are detected before they cause a supply interruption. A well-protected, well-monitored solar pump can run for 7 to 10 years before needing major servicing.",
      ],
    },
    {
      heading: "Complete System Example",
      paragraphs: [
        "To illustrate how all the steps come together, here is a worked example for a 50-acre farm in Nyandarua County. The farm has a farmhouse with 5 residents, 30 dairy cows, and 10 acres of vegetables under drip irrigation. There is no grid electricity on the property, so a diesel pump was the only conventional option — at a fuel and maintenance cost of approximately KSh 45,000 per month.",
        "The water demand assessment: domestic use at 100 litres per person per day for 5 people = 500 litres. Livestock at 100 litres per cow per day for 30 cows = 3,000 litres. Irrigation at 5 mm per day over 10 acres (40,470 m2) = approximately 20,000 litres, adjusted for irrigation efficiency and scheduling to 30,000 litres. Total daily demand: 33,500 litres, with a 25 percent growth margin bringing the design figure to approximately 42,000 litres per day.",
        "The borehole was drilled to 120m with a sustainable yield of 8,000 litres per hour and a static water level at 40m. The pump selected was a 2.2 kW Lorentz solar submersible, delivering 8,000 L/hr at 60m total dynamic head. The solar array is 3.5 kW (8 x 450W panels) at 12 degrees tilt. Storage consists of two 10,000 litre elevated tanks for domestic and livestock supply (gravity pressure at 1.5 bar) and the irrigation network draws from the same tanks via a booster pump. Treatment includes a sediment filter and UV steriliser for the domestic line, and a disc filter for the irrigation line. The drip irrigation network covers 10 acres in four zones. The system delivers 40,000 to 48,000 litres per day from 5 to 6 hours of solar pumping, meeting the design demand with margin. Monthly operating cost: zero. Payback versus diesel: approximately 4 years. The farmer has since expanded the irrigated area to 15 acres using the same water source and storage.",
      ],
    },
    {
      heading: "How Much Does a Solar-Powered Water System Cost?",
      paragraphs: [
        "The cost of a complete solar-powered water system is the sum of its components, and the total depends heavily on the borehole depth, the daily water demand, and the scale of the irrigation or distribution network. Rather than a single blanket figure, it is more useful to break the cost into its components and show the range for each.",
        "The borehole is typically the largest single cost: hydrogeological survey (KSh 35,000 to 60,000), permits (KSh 15,000 to 50,000), drilling and casing at KSh 8,000 to 15,000 per metre for a typical 80 to 200m depth (KSh 640,000 to 3,000,000), and test pumping (KSh 25,000 to 50,000). The solar pump costs KSh 150,000 to 600,000 depending on power rating, and the solar array adds KSh 200,000 to 800,000 depending on the number of panels and mounting structure. Storage tanks range from KSh 100,000 for a basic two-tank domestic setup to KSh 500,000 or more for large-scale irrigation storage. Water treatment adds KSh 50,000 to 300,000 depending on the complexity. The irrigation network — mainline, submains, dripline, filters, valves, and fittings — ranges from KSh 200,000 for a small garden to KSh 1,000,000 or more for 10+ acres. Distribution pipework for domestic and livestock supply adds KSh 100,000 to 500,000.",
        "The total range for a complete system is approximately KSh 1,600,000 for a small domestic system (borehole, small solar pump, basic storage, minimal treatment) to KSh 6,000,000 or more for a large farm or institutional system with deep borehole, high-capacity pump, large storage, full treatment, and extensive irrigation. The critical comparison is operating cost: a diesel pump running 6 hours per day at KSh 180 per litre of fuel consumes approximately KSh 20,000 to 60,000 per month in fuel alone, plus servicing and eventual engine replacement. A solar system has zero fuel cost and minimal maintenance, so the total cost of ownership over a 10-year period is substantially lower — the solar system pays for itself within 3 to 5 years in most cases, and continues to deliver free water for years thereafter.",
      ],
    },
    {
      heading: "Common Design Mistakes",
      paragraphs: [
        "The most common and most costly mistake is selecting a pump before the borehole yield has been tested. A pump sized to an assumed yield that turns out to be higher than the actual yield will over-pump the borehole, drawing the water level down below the pump intake and triggering dry-run shutdowns — or, if dry-run protection is not fitted, destroying the pump. A pump sized to an assumed yield that is lower than actual leaves water in the ground that the property could use. Always drill, test-pump, and confirm the sustainable yield before selecting the pump.",
        "The second most common mistake is insufficient storage. A system with only 1 day of storage will fail during the first cloudy day, leaving the property without water. The storage must be sized for the realistic worst case — 3 days minimum, 5 days for critical-supply properties. A related error is incorrect solar array sizing: an array that is too small for the pump means the pump never reaches full output, reducing daily pumped volume and potentially stalling in low-light conditions. The array must be oversized by 1.3 to 1.5x the pump's rated power to ensure adequate performance across the solar day and across seasons.",
        "Poor filtration for drip irrigation, no pump protection, and ignoring future demand round out the list. Drip emitters will clog without adequate filtration, and the problem is often invisible until crop health suffers. A pump without dry-run, overload, and surge protection is a failure waiting to happen — and pump replacement is the most expensive single repair in the system. Finally, designing the system for today's demand with no margin for growth means that adding livestock, expanding the irrigated area, or building a new facility will require a system redesign and equipment upgrade. A 20 to 30 percent demand margin at the design stage costs very little and saves significantly over the system's life.",
      ],
    },
  ],
};

export default article;
