// ============================================
// FAQs Data (Expanded)
// ============================================

import { ServiceSlug, SERVICE_CATEGORIES } from "./services";

export type FAQSlug = ServiceSlug | "general";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQSlug;
  helpful?: number;
}

type FAQCategory = {
  slug: FAQSlug;
  label: string;
};

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    slug: "general",
    label: "General",
  },
  ...SERVICE_CATEGORIES,
];

// export const FAQs: FAQ[] = [
//   // General
//   {
//     id: "g1",
//     question: "What services do you provide?",
//     answer:
//       "Infield Innovations provides a comprehensive range of engineering services including electrical installation and repairs, plumbing solutions, solar energy systems, irrigation design and installation, and borehole drilling. We serve both residential and commercial clients across Kenya.",
//     category: "general",
//     helpful: 142,
//   },
//   {
//     id: "g2",
//     question: "Which areas do you serve?",
//     answer:
//       "We serve Meru and surrounding counties including Nairobi, Nyeri, Embu, Isiolo, and Thika. For commercial and large-scale projects, we extend our service area nationwide. Contact us to confirm we cover your location.",
//     category: "general",
//     helpful: 98,
//   },
//   {
//     id: "g3",
//     question: "Do you provide free quotations?",
//     answer:
//       "Yes, we provide free, no-obligation quotes for all projects. For complex installations like solar or borehole drilling, we conduct a site visit to provide an accurate estimate. You can request a quote through our website or by phone.",
//     category: "general",
//     helpful: 87,
//   },
//   {
//     id: "g4",
//     question: "How long does a project take?",
//     answer:
//       "Project timelines vary by scope. Simple repairs may take a few hours, while full installations like solar or borehole drilling can take 1-5 days. We provide a detailed timeline with every quote so you know exactly what to expect.",
//     category: "general",
//     helpful: 76,
//   },
//   {
//     id: "g5",
//     question: "Are your technicians licensed and insured?",
//     answer:
//       "Yes, all our technicians are fully licensed, insured, and certified. We carry comprehensive liability insurance and workers' compensation. Our electricians are Master Electrician certified, and all team members undergo regular training.",
//     category: "general",
//     helpful: 65,
//   },
//   {
//     id: "g6",
//     question: "Do you offer emergency services?",
//     answer:
//       "Yes, we provide 24/7 emergency electrical and plumbing services. Call our emergency line at +254 718 338 810 for immediate assistance. Emergency rates apply for after-hours and weekend calls.",
//     category: "general",
//     helpful: 54,
//   },
//   {
//     id: "g7",
//     question: "Can you help with permits and inspections?",
//     answer:
//       "Yes, we handle all necessary permits and coordinate inspections for every project. This is included in our service and ensures all work meets local codes and regulations.",
//     category: "general",
//     helpful: 43,
//   },
//   {
//     id: "pr1",
//     question: "Are your products certified and authentic?",
//     answer:
//       "Yes, every Infield product is fully certified and authentic. All products come with manufacturer warranties and our quality guarantee, meeting relevant industry standards and local regulatory requirements.",
//     category: "general",
//     helpful: 33,
//   },
//   {
//     id: "pr2",
//     question: "Do you sell products separately from installation?",
//     answer:
//       "Yes, we sell products both as part of installation packages and separately. Contact us for product pricing and availability. All products come with manufacturer warranties and our quality guarantee.",
//     category: "general",
//     helpful: 28,
//   },
//   {
//     id: "pr3",
//     question: "Are your products certified?",
//     answer:
//       "Yes, all our products are certified and meet relevant industry standards. Solar panels are IEC certified, electrical products meet KEBS standards, and all equipment meets or exceeds local regulatory requirements.",
//     category: "general",
//     helpful: 25,
//   },
//   {
//     id: "in1",
//     question: "How do I prepare for an installation?",
//     answer:
//       "Preparation varies by project. For solar, we need clear roof access. For boreholes, we need access for drilling equipment. We provide a detailed preparation checklist before every installation and handle all permits.",
//     category: "general",
//     helpful: 38,
//   },
//   {
//     id: "in2",
//     question: "Do you clean up after installation?",
//     answer:
//       "Absolutely. We treat your property with respect. Our team cleans up all debris, removes packaging materials, and leaves the work area spotless. We also conduct a final walkthrough with you before considering the job complete.",
//     category: "general",
//     helpful: 31,
//   },
//   {
//     id: "m1",
//     question: "What maintenance is required for solar panels?",
//     answer:
//       "Solar panels require minimal maintenance — periodic cleaning to remove dust and debris, and annual inspections to check connections and performance. We offer maintenance contracts that include cleaning, inspection, and performance monitoring.",
//     category: "general",
//     helpful: 44,
//   },
//   {
//     id: "m2",
//     question: "How often should I service my borehole?",
//     answer:
//       "We recommend annual borehole pump servicing and water quality testing. Regular maintenance prevents pump failures, ensures water quality, and extends the life of your system. We offer scheduled service contracts.",
//     category: "general",
//     helpful: 37,
//   },
//   {
//     id: "w1",
//     question: "What warranties are offered?",
//     answer:
//       "All our workmanship is guaranteed for 2 years. Products carry manufacturer warranties ranging from 3 to 25 years depending on the product. Solar panels come with a 25-year performance warranty. Extended warranties are available for some products.",
//     category: "general",
//     helpful: 52,
//   },
//   {
//     id: "w2",
//     question: "What maintenance is required to keep warranties valid?",
//     answer:
//       "Most warranties require periodic professional maintenance. For solar, annual inspections are recommended. For boreholes, annual pump servicing. We provide documentation of all maintenance visits to support warranty claims.",
//     category: "general",
//     helpful: 34,
//   },
//   {
//     id: "pa1",
//     question: "Which payment methods are accepted?",
//     answer:
//       "We accept M-Pesa, bank transfers, and cash. For larger projects, we offer flexible payment plans. Solar installations may also qualify for special financing options with competitive rates.",
//     category: "general",
//     helpful: 41,
//   },
//   {
//     id: "pa2",
//     question: "Do you offer phased payments?",
//     answer:
//       "Yes, for larger projects we offer phased payment plans. Typically, a deposit is required to begin work, with milestone payments at agreed stages. We discuss all payment options during the quotation process.",
//     category: "general",
//     helpful: 35,
//   },

//   // Solar
//   {
//     id: "s1",
//     question: "How much can I save with solar?",
//     answer:
//       "Most customers save 50-90% on their electricity bills. We provide detailed savings estimates during your consultation, taking into account your energy usage, roof orientation, and local utility rates. Many systems pay for themselves in 5-8 years.",
//     category: "solar",
//     helpful: 112,
//   },
//   {
//     id: "s2",
//     question: "Do solar systems work during power outages?",
//     answer:
//       "Standard grid-tied solar systems shut off during outages for safety. However, with a battery storage system, your solar panels can continue powering your home during outages. We design systems with battery backup for energy independence.",
//     category: "solar",
//     helpful: 89,
//   },
//   {
//     id: "s3",
//     question: "How long do batteries last?",
//     answer:
//       "Modern lithium-ion solar batteries typically last 10-15 years with proper maintenance. Most come with a 10-year warranty. Battery lifespan depends on usage patterns, depth of discharge, and environmental conditions.",
//     category: "solar",
//     helpful: 67,
//   },
//   {
//     id: "s4",
//     question: "What warranty do you provide on solar systems?",
//     answer:
//       "Our solar panels come with a 25-year performance warranty. Inverters carry a 10-15 year warranty, and battery systems typically have 10-year warranties. All our workmanship is guaranteed for 2 years.",
//     category: "solar",
//     helpful: 58,
//   },
//   {
//     id: "s5",
//     question: "Are there tax incentives for going solar?",
//     answer:
//       "Yes, the Kenyan government offers incentives for renewable energy investments, including VAT exemptions on solar equipment. We help you understand all available incentives and assist with the paperwork.",
//     category: "solar",
//     helpful: 45,
//   },
//   {
//     id: "solar-savings",
//     question: "How much can I save with solar?",
//     answer:
//       "Most customers save 50-90% on their electricity bills. We provide detailed savings estimates during your consultation.",
//     category: "solar",
//   },
//   {
//     id: "solar-lifespan",
//     question: "How long do solar panels last?",
//     answer:
//       "Our premium panels come with a 25-year warranty and typically last 25-30+ years with proper maintenance.",
//     category: "solar",
//   },
//   {
//     id: "solar-financing",
//     question: "Are there financing options?",
//     answer:
//       "Yes, we offer flexible payment plans and can connect you with financing partners. We also advise on available incentives and tax reliefs for solar installations in Kenya.",
//     category: "solar",
//   },

//   // Electrical
//   {
//     id: "e1",
//     question: "Do you handle commercial installations?",
//     answer:
//       "Yes, we handle commercial electrical installations of all sizes — from office fit-outs to industrial facilities. Our team is experienced in high-voltage systems, backup power, and commercial code compliance.",
//     category: "electrical",
//     helpful: 72,
//   },
//   {
//     id: "e2",
//     question: "Are your electricians licensed?",
//     answer:
//       "Yes, all our electricians are fully licensed Master Electricians. We carry comprehensive insurance and ensure all work meets or exceeds local electrical codes and safety standards.",
//     category: "electrical",
//     helpful: 61,
//   },
//   {
//     id: "e3",
//     question: "Do you offer electrical maintenance?",
//     answer:
//       "Yes, we offer scheduled maintenance contracts for both residential and commercial properties. Regular maintenance prevents costly breakdowns, ensures safety, and extends the life of your electrical systems.",
//     category: "electrical",
//     helpful: 48,
//   },
//   {
//     id: "e4",
//     question: "Can you install backup generators?",
//     answer:
//       "Yes, we install backup generators for homes and businesses, including sizing, transfer switch setup, and wiring. We handle brands and models suited for the Kenyan market and ensure seamless integration with your electrical system.",
//     category: "electrical",
//     helpful: 39,
//   },
//   {
//     id: "EL1",
//     question: "Are your electricians licensed?",
//     answer:
//       "Yes, all our electricians are fully licensed, insured, and certified to work in your area.",
//     category: "electrical",
//   },
//   {
//     id: "EL2",
//     question: "Do you offer emergency services?",
//     answer:
//       "Yes, we provide 24/7 emergency electrical repair services. Call our emergency line for immediate assistance.",
//     category: "electrical",
//   },
//   {
//     id: "EL3",
//     question: "How long does a panel upgrade take?",
//     answer:
//       "A typical panel upgrade takes 4-8 hours depending on the complexity and your home's current setup.",
//     category: "electrical",
//   },

//   // Boreholes
//   {
//     id: "b1",
//     question: "How deep should a borehole be?",
//     answer:
//       "Borehole depth varies by location and geology, typically ranging from 30 to 200 meters. Our geological survey helps determine the optimal drilling depth for your specific site to ensure adequate water yield.",
//     category: "boreholes",
//     helpful: 83,
//   },
//   {
//     id: "b2",
//     question: "Do you perform hydrogeological surveys?",
//     answer:
//       "Yes, we conduct professional hydrogeological surveys and site assessments before drilling. This includes geological analysis, water divining, and site selection to maximize the chances of hitting a productive water source.",
//     category: "boreholes",
//     helpful: 56,
//   },
//   {
//     id: "b3",
//     question: "Do you install pumps?",
//     answer:
//       "Yes, we install a full range of borehole pumps including submersible and surface pumps. We size the pump to your specific borehole depth and water demand, and include pressure tanks and control systems.",
//     category: "boreholes",
//     helpful: 47,
//   },
//   {
//     id: "b4",
//     question: "Can boreholes run on solar?",
//     answer:
//       "Absolutely! Solar-powered borehole pumps are an excellent solution for remote locations or reducing energy costs. We design and install solar pump systems that provide reliable water supply without grid electricity.",
//     category: "boreholes",
//     helpful: 52,
//   },

//   // Plumbing
//   {
//     id: "p1",
//     question: "Do you handle emergency repairs?",
//     answer:
//       "Yes, we offer 24/7 emergency plumbing services for burst pipes, severe leaks, sewer backups, and other urgent issues. Call our emergency line for immediate dispatch. We carry common parts on our service vehicles for fast repairs.",
//     category: "plumbing",
//     helpful: 69,
//   },
//   {
//     id: "p2",
//     question: "Do you install water heaters?",
//     answer:
//       "Yes, we install, repair, and maintain all types of water heaters — traditional tank systems, tankless, heat pump, and solar water heaters. We help you choose the most energy-efficient option for your needs.",
//     category: "plumbing",
//     helpful: 44,
//   },
//   {
//     id: "p3",
//     question: "Do you replace old piping?",
//     answer:
//       "Yes, we handle complete repiping projects for homes and businesses. We replace galvanized, polybutylene, and aging copper pipes with modern, durable materials. We also handle trenchless pipe replacement where possible.",
//     category: "plumbing",
//     helpful: 36,
//   },
//   {
//     id: "PL1",
//     question: "Do you offer same-day service?",
//     answer:
//       "Yes, we offer same-day service for most plumbing emergencies. Contact us early in the day for best availability.",
//     category: "plumbing",
//   },
//   {
//     id: "PL2",
//     question: "What areas do you serve?",
//     answer:
//       "We serve Meru and surrounding counties including Nairobi, Nyeri, Embu, Isiolo, and Thika. Contact us to confirm coverage for your location.",
//     category: "plumbing",
//   },
//   {
//     id: "PL3",
//     question: "Do you work on tankless water heaters?",
//     answer:
//       "Yes, we install, repair, and maintain both traditional and tankless water heater systems.",
//     category: "plumbing",
//   },

//   // Irrigation
//   {
//     id: "ir1",
//     question: "Which irrigation system is best?",
//     answer:
//       "The best system depends on your landscape, soil type, and water pressure. We design custom solutions combining sprinkler heads for lawns, drip irrigation for gardens, and smart controllers. A site assessment helps us recommend the optimal system.",
//     category: "irrigation",
//     helpful: 58,
//   },
//   {
//     id: "ir2",
//     question: "Can irrigation be automated?",
//     answer:
//       "Yes! We install WiFi-enabled smart controllers that automate watering schedules based on weather forecasts, soil moisture, and plant needs. You can control everything from a mobile app, saving water and ensuring optimal landscape health.",
//     category: "irrigation",
//     helpful: 47,
//   },
//   {
//     id: "ir3",
//     question: "How much water can I save?",
//     answer:
//       "Smart irrigation systems can reduce water usage by 20-50% compared to traditional timer-based systems. Drip irrigation is even more efficient, using 60-70% less water than sprinklers for targeted watering.",
//     category: "irrigation",
//     helpful: 41,
//   },
//   {
//     id: "BH1",
//     question: "How deep do you drill?",
//     answer:
//       "Depth varies by location and geology, typically ranging from 30 to 200 meters. Our survey helps determine the optimal depth.",
//     category: "boreholes",
//   },
//   {
//     id: "BH2",
//     question: "How long does drilling take?",
//     answer:
//       "Most boreholes are completed in 1-3 days depending on depth and geological conditions.",
//     category: "boreholes",
//   },
//   {
//     id: "BH3",
//     question: "Is the water safe to drink?",
//     answer:
//       "We conduct thorough water quality testing after drilling and recommend treatment if needed to ensure safe drinking water.",
//     category: "boreholes",
//   },
//   {
//     id: "IR1",
//     question: "How much water can I save with a smart system?",
//     answer:
//       "Smart irrigation controllers can reduce water usage by 20-50% compared to traditional timer-based systems.",
//     category: "irrigation",
//   },
//   {
//     id: "IR2",
//     question: "How do I prepare my system for the dry season?",
//     answer:
//       "We recommend a system check before the dry season begins, typically in December to January, to ensure optimal water use during the dry months.",
//     category: "irrigation",
//   },
//   {
//     id: "IR3",
//     question: "Do you repair existing systems?",
//     answer:
//       "Yes, we service and repair all brands of irrigation systems, even if we didn't install them.",
//     category: "irrigation",
//   },

//   // WATER STORAGE
//   {
//     id: "WS1",
//     question: "What tank size do I need?",
//     answer:
//       "Tank size depends on your daily water usage and supply reliability. We assess your needs and recommend the optimal capacity — typically 1,000L to 10,000L for homes and much larger for commercial use.",
//     category: "water-storage",
//   },
//   {
//     id: "WS2",
//     question: "Do you build water towers?",
//     answer:
//       "Yes, we design and construct elevated water towers with steel or concrete structures for gravity-fed distribution systems.",
//     category: "water-storage",
//   },
//   {
//     id: "WS3",
//     question: "How long do water tanks last?",
//     answer:
//       "Plastic tanks last 15-20 years, steel tanks 20-30+ years with proper maintenance, and concrete storage can last 50+ years. We provide maintenance guidance for every system we install.",
//     category: "water-storage",
//   },

//   // WATER HARVESTING
//   {
//     id: "WH1",
//     question: "How much water can I harvest?",
//     answer:
//       "A 100 sqm roof can harvest approximately 23,000 litres from 230mm of annual rainfall. We calculate your specific yield based on roof area and local rainfall data.",
//     category: "water-harvesting",
//   },
//   {
//     id: "WH2",
//     question: "Is harvested rainwater safe to drink?",
//     answer:
//       "With proper filtration and first-flush diversion, harvested rainwater is safe for most uses. For drinking, we recommend additional UV or chlorination treatment.",
//     category: "water-harvesting",
//   },
//   {
//     id: "WH3",
//     question: "Do you build farm ponds and dams?",
//     answer:
//       "Yes, we construct lined farm ponds, water pans, earth dams, and sand dams for agricultural water retention and supply.",
//     category: "water-harvesting",
//   },
// ];

export const FAQs: FAQ[] = [
  // ============================================================
  // GENERAL — 15 QUESTIONS
  // ============================================================

  {
    id: "general-1",
    question: "What services does Infield Innovations provide?",
    answer:
      "Infield Innovations provides integrated water, energy, electrical and infrastructure solutions, including solar energy systems, electrical installations, plumbing, borehole drilling and water systems, irrigation, water storage, and rainwater harvesting. We serve homes, farms, businesses, institutions, and other properties.",
    category: "general",
  },

  {
    id: "general-2",
    question: "Can you help me choose the right solution for my property?",
    answer:
      "Yes. We assess your needs, existing infrastructure, site conditions, water or energy demand, budget, and future requirements before recommending a suitable solution. Where appropriate, we can combine systems such as solar, pumping, storage, and irrigation.",
    category: "general",
  },

  {
    id: "general-3",
    question: "How do I know which service I need?",
    answer:
      "You do not need to diagnose the problem yourself. Tell us what is happening—for example, high electricity bills, frequent power interruptions, low water pressure, unreliable water supply, leaking pipes, poor irrigation coverage, or a planned construction project—and we can recommend the appropriate assessment or service.",
    category: "general",
  },

  {
    id: "general-4",
    question: "Do you provide site assessments before starting a project?",
    answer:
      "For projects where site conditions affect the design or cost, we recommend an assessment before installation or construction. This may include evaluating electrical loads, roof conditions, water demand, groundwater conditions, irrigation requirements, or available space.",
    category: "general",
  },

  {
    id: "general-5",
    question: "How do I request a quotation?",
    answer:
      "Contact us with your location, the service you need, the problem you are experiencing, and any available information about your property or existing system. Where necessary, we arrange a site assessment before preparing an accurate quotation.",
    category: "general",
  },

  {
    id: "general-6",
    question: "Are quotations free?",
    answer:
      "Quotation arrangements depend on the type and complexity of the project. Straightforward requirements can often be quoted from the information provided, while specialized projects may require a paid or chargeable site assessment. We confirm any assessment costs before proceeding.",
    category: "general",
  },

  {
    id: "general-7",
    question: "How long does a project take?",
    answer:
      "The timeline depends on the type, size, site conditions, materials, approvals, and scope of work. Small repairs may be completed quickly, while installations, boreholes, irrigation systems, and larger infrastructure projects require more planning. We provide an expected timeline during the quotation and planning stage.",
    category: "general",
  },

  {
    id: "general-8",
    question: "Do you work on existing systems or only new installations?",
    answer:
      "We can work on both new installations and existing systems, subject to assessment. This includes troubleshooting, repairs, upgrades, replacements, maintenance, and improvements to systems installed by other providers.",
    category: "general",
  },

  {
    id: "general-9",
    question: "Do you provide maintenance after installation?",
    answer:
      "Yes. We provide maintenance and servicing for eligible systems we install and, where practical, existing systems. Preventive maintenance can help identify faults early, maintain performance, and reduce unexpected breakdowns.",
    category: "general",
  },

  {
    id: "general-10",
    question:
      "Do you serve residential, commercial, and agricultural customers?",
    answer:
      "Yes. Our solutions can be designed for homes, farms, offices, shops, institutions, commercial properties, and other sites. System design and equipment selection depend on the property's specific requirements.",
    category: "general",
  },

  {
    id: "general-11",
    question: "Which areas do you serve?",
    answer:
      "We are based in Meru and serve customers in Meru and other locations depending on the project. For larger or specialized projects outside our regular service area, contact us to confirm availability and site requirements.",
    category: "general",
  },

  {
    id: "general-12",
    question: "Do you supply equipment separately from installation?",
    answer:
      "Selected products and equipment may be available separately from installation. Availability, compatibility, warranty terms, and pricing depend on the specific product. We can also recommend equipment suitable for your existing system.",
    category: "general",
  },

  {
    id: "general-13",
    question: "Do you help with permits, approvals, and compliance?",
    answer:
      "Where a project requires regulatory approvals, inspections, permits, or technical documentation, we can advise you on the applicable requirements and assist with the process within the scope of our services. Requirements vary by project and location.",
    category: "general",
  },

  {
    id: "general-14",
    question: "What warranty do I receive?",
    answer:
      "Warranty coverage depends on the product, manufacturer, installation, and agreed workmanship terms. We explain the applicable warranty conditions in your quotation or project documentation. Manufacturer warranties are separate from workmanship warranties.",
    category: "general",
  },

  {
    id: "general-15",
    question: "What happens if I am not sure what is causing the problem?",
    answer:
      "Start with the symptoms rather than trying to identify the technical fault yourself. We can assess issues such as unexplained high electricity consumption, repeated electrical trips, low water pressure, pump failure, water shortages, leaks, poor irrigation coverage, or inconsistent system performance.",
    category: "general",
  },

  // ============================================================
  // SOLAR
  // ============================================================

  {
    id: "solar-1",
    question: "How much can I save with solar?",
    answer:
      "Savings depend on your electricity consumption, tariff, system size, solar resource, operating hours, equipment efficiency, and whether batteries are included. We calculate an estimate based on your actual energy usage rather than promising a fixed percentage.",
    category: "solar",
  },

  {
    id: "solar-2",
    question: "What size solar system do I need?",
    answer:
      "System size should be based on your electricity consumption, peak demand, appliances, operating hours, available solar resource, roof or mounting space, backup requirements, and future expansion plans. We size the system around your actual requirements.",
    category: "solar",
  },

  {
    id: "solar-3",
    question: "Will solar work during a power outage?",
    answer:
      "A standard grid-connected solar system normally shuts down during a grid outage for safety. To keep selected loads operating during an outage, the system needs an appropriate backup configuration, typically involving batteries and compatible power-control equipment.",
    category: "solar",
  },

  {
    id: "solar-4",
    question: "Do I need batteries with solar?",
    answer:
      "Not necessarily. Batteries are useful when you need backup power, want to use more solar energy after sunset, or want greater independence from the grid. A battery-free system may be more suitable when most of your electricity demand occurs during daylight hours.",
    category: "solar",
  },

  {
    id: "solar-5",
    question: "How long do solar panels and batteries last?",
    answer:
      "Quality solar panels are designed for long-term operation and commonly have long performance warranties. Battery lifespan depends on battery chemistry, temperature, cycling, depth of discharge, and manufacturer specifications. We provide the applicable warranty and expected service-life information for the equipment selected.",
    category: "solar",
  },

  {
    id: "solar-6",
    question: "Why is my solar system producing less power than expected?",
    answer:
      "Possible causes include shading, dust or soiling, equipment faults, poor connections, inverter limitations, high temperatures, incorrect sizing, or changes in energy demand. We can inspect the system and identify the cause before recommending corrective work.",
    category: "solar",
  },

  // ============================================================
  // ELECTRICAL
  // ============================================================

  {
    id: "electrical-1",
    question: "Why does my power keep tripping or going off?",
    answer:
      "Repeated tripping can be caused by overloaded circuits, short circuits, earth faults, faulty appliances, damaged wiring, or incorrectly rated protective devices. Do not repeatedly reset a breaker without identifying the cause. We can inspect and diagnose the electrical system.",
    category: "electrical",
  },

  {
    id: "electrical-2",
    question:
      "Can you inspect and repair electrical problems in an old building?",
    answer:
      "Yes. We can inspect existing wiring, distribution boards, protective devices, earthing, connections, and loads to identify problems. Where necessary, we can recommend targeted repairs, upgrades, or partial rewiring.",
    category: "electrical",
  },

  {
    id: "electrical-3",
    question: "Can you handle new electrical installations and rewiring?",
    answer:
      "Yes. We provide electrical installation and upgrade services for suitable residential, commercial, and other projects, including wiring, distribution, lighting, sockets, protection systems, and related electrical infrastructure.",
    category: "electrical",
  },

  {
    id: "electrical-4",
    question: "Can you install backup power systems?",
    answer:
      "Yes. Depending on your requirements, backup solutions can include generators, inverter systems, batteries, solar, or hybrid configurations. We assess your critical loads and operating requirements before recommending the appropriate solution.",
    category: "electrical",
  },

  {
    id: "electrical-5",
    question: "Do you provide electrical maintenance and inspections?",
    answer:
      "Yes. Preventive electrical maintenance can include inspection of distribution boards, connections, protective devices, earthing, lighting, equipment connections, and other system components according to the installation.",
    category: "electrical",
  },

  {
    id: "electrical-6",
    question:
      "Are your electrical installations compliant with Kenyan requirements?",
    answer:
      "Electrical work should be carried out in accordance with applicable Kenyan regulatory and technical requirements. We assess the project requirements and apply the relevant standards and compliance procedures within the scope of the work.",
    category: "electrical",
  },

  // ============================================================
  // BOREHOLES
  // ============================================================

  {
    id: "boreholes-1",
    question: "How do I know if I can drill a borehole on my property?",
    answer:
      "Groundwater availability varies by location and geology. A professional hydrogeological assessment helps identify suitable drilling locations and provides information for planning the borehole. A survey cannot guarantee a particular water yield.",
    category: "boreholes",
  },

  {
    id: "boreholes-2",
    question: "How deep will my borehole need to be?",
    answer:
      "There is no universal depth. Borehole depth depends on local geology, aquifer conditions, groundwater levels, target yield, and site-specific findings. The required depth should be determined through professional assessment and drilling conditions.",
    category: "boreholes",
  },

  {
    id: "boreholes-3",
    question: "Can you conduct a hydrogeological survey before drilling?",
    answer:
      "Yes. A professional groundwater assessment can help determine suitable drilling locations and inform borehole design. Depending on the site, the investigation may use hydrogeological and geophysical methods.",
    category: "boreholes",
  },

  {
    id: "boreholes-4",
    question: "Can you guarantee that drilling will find water?",
    answer:
      "No responsible contractor should guarantee a specific water yield before drilling. Groundwater conditions vary naturally. Professional site assessment can improve decision-making and reduce drilling risk, but it cannot eliminate geological uncertainty.",
    category: "boreholes",
  },

  {
    id: "boreholes-5",
    question: "Is borehole water safe to drink?",
    answer:
      "Not necessarily. Groundwater quality varies from site to site and should be tested before being used for drinking. Where treatment is required, we can recommend an appropriate water-treatment approach based on the test results.",
    category: "boreholes",
  },

  {
    id: "boreholes-6",
    question: "Can you install and power my borehole pump with solar?",
    answer:
      "Yes. We can design borehole pumping solutions around the required water volume, pumping head, borehole conditions, power availability, and intended use. Solar-powered pumping can be particularly useful for farms, remote sites, and properties seeking to reduce electricity or fuel costs.",
    category: "boreholes",
  },

  // ============================================================
  // PLUMBING
  // ============================================================

  {
    id: "plumbing-1",
    question: "Why is my water pressure low?",
    answer:
      "Low pressure can be caused by undersized pipes, blocked filters, leaking pipes, pump problems, inadequate tank elevation, faulty valves, restrictions in the supply, or insufficient incoming pressure. We can inspect the system to identify the cause.",
    category: "plumbing",
  },

  {
    id: "plumbing-2",
    question: "Why do my pipes keep leaking?",
    answer:
      "Recurring leaks may be caused by aging pipes, excessive pressure, poor joints, corrosion, movement, unsuitable materials, or previous poor-quality repairs. We can identify the source and recommend a durable repair or replacement.",
    category: "plumbing",
  },

  {
    id: "plumbing-3",
    question: "Can you repair burst pipes and major leaks?",
    answer:
      "Yes. We can diagnose and repair common plumbing failures such as burst pipes, leaking joints, damaged valves, and other water-supply problems. If a leak is severe, shut off the water supply where possible to limit property damage.",
    category: "plumbing",
  },

  {
    id: "plumbing-4",
    question: "Can you replace old or damaged plumbing?",
    answer:
      "Yes. We can replace sections of damaged pipework or undertake larger plumbing upgrades where the existing installation is no longer reliable or suitable for the property's requirements.",
    category: "plumbing",
  },

  {
    id: "plumbing-5",
    question: "Can you install water heaters?",
    answer:
      "Yes, where the required equipment is within our service scope. We can assist with suitable water-heating solutions based on hot-water demand, available power, space, and energy requirements.",
    category: "plumbing",
  },

  {
    id: "plumbing-6",
    question: "Can you install plumbing for a new house or building?",
    answer:
      "Yes. We can provide plumbing installation according to the building's design, water demand, fixtures, storage arrangement, drainage requirements, and applicable project specifications.",
    category: "plumbing",
  },

  // ============================================================
  // IRRIGATION
  // ============================================================

  {
    id: "irrigation-1",
    question: "Which irrigation system is best for my farm or garden?",
    answer:
      "The right system depends on crop or plant type, soil, water source, available pressure, field size, terrain, water quality, and budget. Options may include drip, sprinkler, micro-irrigation, or a combination.",
    category: "irrigation",
  },

  {
    id: "irrigation-2",
    question: "Why is my irrigation system using too much water?",
    answer:
      "High water use can result from incorrect scheduling, leaks, poor sprinkler selection, excessive pressure, uneven distribution, evaporation, runoff, or watering areas that do not need the same amount of water. A system assessment can identify opportunities to improve efficiency.",
    category: "irrigation",
  },

  {
    id: "irrigation-3",
    question: "Can you design an irrigation system from scratch?",
    answer:
      "Yes. We assess the water source, required flow, field or landscape layout, elevation, crop or plant requirements, and pumping conditions before designing the system.",
    category: "irrigation",
  },

  {
    id: "irrigation-4",
    question: "Can you automate my irrigation system?",
    answer:
      "Yes. Depending on the project, irrigation can be automated using programmable controllers, valves, sensors, pumps, and other control equipment. Automation can improve scheduling and reduce unnecessary watering.",
    category: "irrigation",
  },

  {
    id: "irrigation-5",
    question: "Can you repair an existing irrigation system?",
    answer:
      "Yes. We can troubleshoot and repair issues such as leaking pipes, blocked emitters, damaged sprinklers, faulty valves, pump problems, poor pressure, and control-system faults.",
    category: "irrigation",
  },

  {
    id: "irrigation-6",
    question:
      "Can irrigation run from a borehole, tank, or solar-powered pump?",
    answer:
      "Yes. Irrigation can be designed around boreholes, storage tanks, harvested rainwater, mains supply, or solar-powered pumping systems. The design must account for available water, flow, pressure, filtration, pumping requirements, and irrigation demand.",
    category: "irrigation",
  },

  // ============================================================
  // WATER STORAGE
  // ============================================================

  {
    id: "water-storage-1",
    question: "What size water tank do I need?",
    answer:
      "Tank size depends on daily water demand, number of users, irrigation requirements, available water supply, reliability of the source, and how many days of storage you need. We calculate the appropriate capacity based on your requirements.",
    category: "water-storage",
  },

  {
    id: "water-storage-2",
    question: "Why does my water tank run empty too quickly?",
    answer:
      "The problem may be caused by insufficient tank capacity, high consumption, leaks, irrigation demand, pump problems, or an unreliable water source. We assess the complete water system rather than simply recommending a larger tank.",
    category: "water-storage",
  },

  {
    id: "water-storage-3",
    question: "Can you design and install a complete water storage system?",
    answer:
      "Yes. We can design storage arrangements around your water source, daily demand, available space, pumping requirements, and distribution system.",
    category: "water-storage",
  },

  {
    id: "water-storage-4",
    question:
      "Can you connect a water tank to a borehole or rainwater harvesting system?",
    answer:
      "Yes. Tanks can be integrated with suitable borehole pumps, rainwater harvesting systems, mains supply, pressure systems, and irrigation networks depending on the site configuration.",
    category: "water-storage",
  },

  {
    id: "water-storage-5",
    question: "Do you install elevated water tanks and towers?",
    answer:
      "Yes, where appropriate to the project. Elevated storage can provide gravity-assisted distribution, but the structure and tank arrangement must be designed for the required load, height, water demand, and site conditions.",
    category: "water-storage",
  },

  {
    id: "water-storage-6",
    question: "How do I keep my stored water clean and safe?",
    answer:
      "Proper tank installation, covered storage, clean inlet arrangements, suitable filtration, inspection, and periodic cleaning help maintain water quality. Drinking-water systems require additional attention to hygiene, treatment, and water-quality testing.",
    category: "water-storage",
  },

  // ============================================================
  // WATER HARVESTING
  // ============================================================

  {
    id: "water-harvesting-1",
    question: "Can I collect rainwater from my roof?",
    answer:
      "Yes. Roof rainwater harvesting can collect water for suitable domestic, agricultural, cleaning, irrigation, or other uses. The system should be designed around roof area, rainfall, collection efficiency, storage capacity, water demand, and intended use.",
    category: "water-harvesting",
  },

  {
    id: "water-harvesting-2",
    question: "How much rainwater can I harvest?",
    answer:
      "Potential harvest depends mainly on roof catchment area, rainfall, runoff characteristics, and collection efficiency. Storage should be sized around local rainfall patterns and the property's actual water demand.",
    category: "water-harvesting",
  },

  {
    id: "water-harvesting-3",
    question: "Is harvested rainwater safe to drink?",
    answer:
      "Rainwater should not automatically be assumed to be potable. Drinking-water use requires appropriate collection hygiene, filtration, disinfection, and suitable water-quality testing. The treatment required depends on the source and intended use.",
    category: "water-harvesting",
  },

  {
    id: "water-harvesting-4",
    question: "Can rainwater harvesting reduce my water bills?",
    answer:
      "It can reduce dependence on purchased or mains water for suitable applications, particularly irrigation, cleaning, and other non-potable uses. The financial benefit depends on rainfall, storage capacity, water demand, and the cost of alternative water supplies.",
    category: "water-harvesting",
  },

  {
    id: "water-harvesting-5",
    question: "Can you design a complete rainwater harvesting system?",
    answer:
      "Yes. A complete system can include roof collection, gutters, first-flush arrangements, filtration, storage, pumps, distribution, and appropriate treatment depending on the intended use.",
    category: "water-harvesting",
  },

  {
    id: "water-harvesting-6",
    question: "Can harvested rainwater be used for irrigation?",
    answer:
      "Yes. Rainwater can be a useful irrigation source when the collection and storage system is appropriately designed. Filtration and water-quality considerations depend on the irrigation equipment and intended application.",
    category: "water-harvesting",
  },
];
export function getFAQsByCategory(category: FAQSlug): FAQ[] {
  return FAQs.filter((f) => f.category === category);
}

export function searchFAQs(query: string): FAQ[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return FAQs.filter(
    (f) =>
      f.question.toLowerCase().includes(q) ||
      f.answer.toLowerCase().includes(q) ||
      f.category.toLowerCase().includes(q),
  );
}
