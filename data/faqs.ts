// ============================================
// FAQs Data
// ============================================

import { ServiceSlug, SERVICE_CATEGORIES } from "./services";

export type FAQSlug = ServiceSlug | "general";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQSlug;
  isPopular?: boolean;
  featured?: boolean;
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

export const FAQs: FAQ[] = [
  // ============================================================
  // GENERAL
  // ============================================================

  {
    id: "general-1",
    question:
      "Do you conduct a site assessment before recommending a solution?",
    answer:
      "Yes. Where required, we conduct a site assessment to understand your energy needs, existing infrastructure, site conditions and project requirements. This allows us to recommend a solution that is properly sized, practical and safe.",
    category: "general",
  },

  {
    id: "general-2",
    question:
      "How do you assess my requirements and design the right solution?",
    answer:
      "We assess your current and anticipated energy needs, consumption patterns, available infrastructure, site conditions and budget. Our engineers then develop a solution focused on reliability, performance, safety and long-term value.",
    category: "general",
    isPopular: true,
  },

  {
    id: "general-3",
    question:
      "How do I request a quotation, and what information do you need?",
    answer:
      "Simply contact us with details of your project and location. Depending on the scope, we may request electricity bills, equipment information, drawings, photographs or a site visit before preparing a detailed quotation.",
    category: "general",
  },

  {
    id: "general-4",
    question:
      "What does your process look like from consultation to project completion?",
    answer:
      "Our typical process is: Consultation → Site Assessment → Design → Quotation → Planning → Installation → Testing & Commissioning → Handover → After-Sales Support. We keep you informed at each important stage of the project.",
    category: "general",
    isPopular: true,
  },

  {
    id: "general-5",
    question:
      "Are there any certifications, permits, approvals or other documentation required for my project, and do you assist with obtaining or preparing them?",
    answer:
      "Yes. Requirements depend on the type and scale of the project. We identify the applicable regulatory, technical and project documentation requirements and assist with the preparation and coordination of the necessary documentation. For applicable solar PV projects, completion documentation and system information form part of the regulatory framework.",
    category: "general",
    isPopular: true,
  },

  {
    id: "general-6",
    question: "How long does a project take?",
    answer:
      "Most residential installations can be completed within 1–4 working days, while larger/commercial and industrial projects may take longer depending on scope, approvals and site conditions. We provide a project-specific schedule before work begins.",
    category: "general",
    isPopular: true,
  },

  {
    id: "general-7",
    question:
      "Do you provide testing, commissioning and handover after installation?",
    answer:
      "Yes. We test and commission installations before handover to verify safe and proper operation. We also provide the relevant project documentation and user guidance applicable to the system. For solar PV installations, Kenyan regulations provide for completion documentation, system information and warranty documentation.",
    category: "general",
  },

  {
    id: "general-8",
    question: "What warranty do you provide on equipment and workmanship?",
    answer:
      "Warranty coverage depends on the equipment and scope of work. Manufacturer warranties apply to eligible equipment, while our workmanship warranty is stated clearly in your quotation or contract. We make the applicable warranty terms clear before project commencement.",
    category: "general",
    isPopular: true,
  },

  {
    id: "general-9",
    question: "What happens if I experience a problem after installation?",
    answer:
      "We remain available after installation. Contact our support team and we will assess the issue and recommend the appropriate solution. Where a site visit or corrective work is required, we will advise you on the next steps.",
    category: "general",
  },

  {
    id: "general-10",
    question: "Do you provide maintenance and after-sales technical support?",
    answer:
      "Yes. We provide preventive maintenance and technical support to help keep your systems safe, reliable and operating efficiently. Maintenance can be arranged according to the type, size and operating requirements of your installation.",
    category: "general",
  },

  // ============================================================
  // SOLAR ENERGY
  // ============================================================

  {
    id: "solar-1",
    question: "How much does a solar system cost?",
    answer:
      "There is no one-size-fits-all price. Cost depends on system capacity (kWp), battery storage (kWh), inverter type, equipment quality and installation requirements. After assessing your energy needs, we provide a detailed quotation showing the system specification, equipment and total project cost.",
    category: "solar",
    featured: true,
  },

  {
    id: "solar-2",
    question:
      "What size solar system do I need for my home, business or institution?",
    answer:
      "The right size is based on your electricity consumption, peak demand, operating hours and available solar resource—not simply the size of the property. We review your electricity usage and site conditions to determine the appropriate solar capacity, inverter rating and, where required, battery capacity.",
    category: "solar",
    featured: true,
  },

  {
    id: "solar-3",
    question: "Do I need batteries, and how much battery storage do I need?",
    answer:
      "Not necessarily. Batteries are recommended when you need backup power, evening/night-time energy use, greater energy independence or reduced reliance on the grid. We size battery storage in kWh based on the loads you want to support and the required backup duration.",
    category: "solar",
    featured: true,
  },

  {
    id: "solar-4",
    question:
      "Can solar power my borehole, water pump or irrigation system?",
    answer:
      "Yes. We design solar pumping systems for boreholes, water supply and irrigation applications. System sizing considers the pump power, water demand, borehole depth, required flow rate, pumping head and daily operating hours to ensure the system is appropriately matched to the application.",
    category: "solar",
    featured: true,
  },

  {
    id: "solar-5",
    question:
      "Can you integrate solar with my existing electrical system, generator or grid supply?",
    answer:
      "Yes. Depending on the system design, we can integrate solar with your existing electrical installation, utility grid and generator, including hybrid configurations with battery storage. We assess the existing system first to ensure proper capacity, protection, changeover and compatibility.",
    category: "solar",
  },

  {
    id: "solar-6",
    question: "How much can I save on my electricity bill with solar?",
    answer:
      "Savings depend on your electricity consumption, tariff, solar system size, daytime load profile and operating hours. We use your actual consumption data where available to estimate expected solar generation, grid energy offset and potential savings rather than relying on a generic percentage.",
    category: "solar",
    featured: true,
  },

  {
    id: "solar-7",
    question: "Will my solar system work during cloudy or rainy weather?",
    answer:
      "Yes. Solar panels continue producing electricity under cloudy conditions, although output is lower because solar irradiance is reduced. A properly designed system accounts for local weather conditions, while battery storage can provide additional energy availability when solar production is limited.",
    category: "solar",
  },

  {
    id: "solar-8",
    question: "How long will my solar system and batteries last?",
    answer:
      "Quality solar PV modules are designed for long-term operation, commonly 25 years or more, with gradual performance degradation over time. Battery life depends heavily on chemistry, operating temperature, depth of discharge, charging conditions and usage patterns. We recommend equipment based on the required application and expected operating life.",
    category: "solar",
  },

  {
    id: "solar-9",
    question: "What maintenance does a solar system require?",
    answer:
      "Solar systems generally require low but important routine maintenance. This can include panel cleaning, visual inspections, electrical connection checks, battery and inverter checks, protection-system inspections and performance monitoring. We recommend periodic maintenance based on the system type, environment and operating conditions.",
    category: "solar",
  },

  // ============================================================
  // ELECTRICAL
  // ============================================================

  {
    id: "electrical-1",
    question:
      "How do I know what size motor, pump and electrical supply I need?",
    answer:
      "The correct size depends on the required flow, head, duty cycle, load demand, starting requirements and operating conditions. We assess these parameters and calculate the appropriate motor, pump, cable, protection and electrical supply rather than relying on standard sizing.",
    category: "electrical",
    featured: true,
  },

  {
    id: "electrical-2",
    question: "Why does my pump or motor keep tripping the circuit breaker?",
    answer:
      "Frequent tripping can result from overload, short circuits, high starting current, low or unbalanced voltage, mechanical problems, incorrect protection settings or a poorly sized motor. We diagnose the electrical and mechanical causes before recommending corrective action.",
    category: "electrical",
    featured: true,
  },

  {
    id: "electrical-3",
    question: "What is a VFD, and when should I use one for my pump or motor?",
    answer:
      "A Variable Frequency Drive (VFD) controls an AC motor's speed and torque by varying its frequency and voltage. It is particularly useful where motor speed needs to vary with demand, such as water pumping, pressure control and variable-flow applications.",
    category: "electrical",
    featured: true,
  },

  {
    id: "electrical-4",
    question:
      "Can a VFD reduce energy consumption and improve pump or motor performance?",
    answer:
      "Yes, where the application is suitable. For variable-flow centrifugal pumps, reducing motor speed can substantially reduce power demand; under ideal conditions, pump power varies approximately with the cube of speed. We assess the duty cycle and operating profile to determine whether a VFD is technically and economically worthwhile.",
    category: "electrical",
    featured: true,
  },

  {
    id: "electrical-5",
    question:
      "Why is my motor overheating, drawing excessive current or losing performance?",
    answer:
      "Common causes include overloading, phase imbalance, low or high voltage, poor ventilation, bearing problems, incorrect motor sizing, frequent starts or incorrect VFD settings. We measure electrical parameters and inspect the motor and driven equipment to identify the root cause rather than simply replacing components.",
    category: "electrical",
  },

  {
    id: "electrical-6",
    question:
      "Why do my circuit breakers, RCDs or other protection devices keep tripping?",
    answer:
      "Repeated tripping is a warning that should not be ignored. Possible causes include overloads, earth leakage, short circuits, insulation faults, incorrect protection ratings or equipment faults. We test the circuit, identify the cause and verify that protection is correctly coordinated with the installation.",
    category: "electrical",
  },

  {
    id: "electrical-7",
    question:
      "Can you diagnose voltage problems, phase imbalance and other electrical faults?",
    answer:
      "Yes. We can investigate issues such as under/over-voltage, phase imbalance, voltage drops, earth faults, nuisance tripping and abnormal motor currents using appropriate electrical measurements and diagnostic testing. We then recommend corrective action based on the measured condition.",
    category: "electrical",
    featured: true,
  },

  {
    id: "electrical-8",
    question:
      "Can you design, install, test and maintain complete electrical distribution systems?",
    answer:
      "Yes. We provide end-to-end electrical engineering services covering load assessment, distribution design, cable sizing, switchgear and protection, installation, testing, commissioning and maintenance for residential, commercial and industrial applications. All applicable electrical works are undertaken in accordance with relevant Kenyan regulatory and technical requirements.",
    category: "electrical",
  },

  {
    id: "electrical-9",
    question:
      "Can you connect my solar panels, inverter and batteries to my electrical system?",
    answer:
      "Yes. We handle the electrical integration of solar PV systems, including DC and AC cabling, inverter connections, battery storage integration, changeover arrangements and protection. We assess your existing installation first to ensure compatibility, proper capacity and correct protection coordination before connecting the solar system.",
    category: "electrical",
    featured: true,
  },

  {
    id: "electrical-10",
    question:
      "What backup power options can you install and integrate?",
    answer:
      "We install and integrate battery-based backup systems, inverters, UPS units and generator changeover systems. The right solution depends on which loads you need to support, the required backup duration, available space and budget. We design the backup system around your critical loads and integrate it with your existing electrical installation for automatic or manual changeover.",
    category: "electrical",
    featured: true,
  },

  {
    id: "electrical-11",
    question:
      "Do you build control panels, starters and motor protection systems?",
    answer:
      "Yes. We design and assemble motor control panels, direct-on-line (DOL) starters, star-delta starters, changeover panels and customized control assemblies. We also install and configure protection devices including overcurrent, earth leakage, thermal and motor protection to ensure equipment is protected against electrical and mechanical faults.",
    category: "electrical",
    featured: true,
  },

  {
    id: "electrical-12",
    question:
      "Can you carry out electrical works for water pumps, irrigation systems and other machinery?",
    answer:
      "Yes. We handle the electrical installation, connection and control for water pumps, irrigation pumps, borehole pumps, motors and other machinery. This includes cabling, motor protection, control panels, VFDs, and integration with the wider electrical and water systems so the equipment operates safely and reliably.",
    category: "electrical",
  },

  // ============================================================
  // PLUMBING
  // ============================================================

  {
    id: "plumbing-1",
    question: "How much does a plumbing installation or repair cost?",
    answer:
      "The cost depends on the scope of work, materials, pipe sizes, fittings, accessibility and site conditions. We assess the requirement first and provide a clear quotation outlining the work, materials and applicable costs before proceeding.",
    category: "plumbing",
    featured: true,
  },

  {
    id: "plumbing-2",
    question: "Why is my water pressure low? How do I boost it?",
    answer:
      "Low pressure can result from undersized pipes, inadequate supply pressure, blocked pipes or filters, elevation differences, leaking systems or an incorrectly sized pump. We identify the cause first, then recommend the appropriate solution—such as pipe upgrades, pressure boosting or pump optimisation.",
    category: "plumbing",
    featured: true,
  },

  {
    id: "plumbing-3",
    question: "Why do my pipes keep leaking or bursting?",
    answer:
      "Recurring leaks can indicate excessive pressure, poor-quality materials, unsuitable fittings, incorrect installation, corrosion or movement within the pipework. We inspect the system to identify the root cause and recommend a durable repair or replacement rather than repeatedly treating the same leak.",
    category: "plumbing",
  },

  {
    id: "plumbing-4",
    question: "Why are my drains blocked or backing up?",
    answer:
      "Common causes include grease and debris, unsuitable items entering the drainage system, inadequate pipe gradients, undersized pipes, damaged pipework or insufficient ventilation. We diagnose the blockage and inspect the drainage arrangement where necessary before carrying out corrective work.",
    category: "plumbing",
    featured: true,
  },

  {
    id: "plumbing-5",
    question:
      "Do you design and install complete plumbing systems for new buildings?",
    answer:
      "Yes. We provide end-to-end plumbing services covering water supply, sanitary fittings, hot and cold-water systems, drainage, storage and pumping. We coordinate the design and installation with other building services and applicable requirements under Kenya's National Building Code 2024.",
    category: "plumbing",
    featured: true,
  },

  {
    id: "plumbing-6",
    question:
      "Can you connect my plumbing system to a borehole, water tank or pump?",
    answer:
      "Yes. We can integrate water sources, storage tanks and pumping systems into your building's plumbing network. We consider flow requirements, pressure, elevation, pipe sizing, pump capacity and storage volume to deliver a reliable water supply.",
    category: "plumbing",
    featured: true,
  },

  {
    id: "plumbing-7",
    question: "Can you install hot-water systems and water heaters?",
    answer:
      "Yes. We install and integrate suitable hot-water systems, including electric water heaters and solar water-heating solutions, according to the property's hot-water demand. We size the system around the number of users, usage patterns and required hot-water volume.",
    category: "plumbing",
  },

  {
    id: "plumbing-8",
    question: "Can you repair or upgrade an existing plumbing system?",
    answer:
      "Yes. We handle individual repairs as well as system upgrades, including leaking pipes, faulty valves, low-pressure problems, tank and pump connections, drainage issues and replacement of ageing pipework. Where appropriate, we assess the wider system so the repair addresses the underlying problem.",
    category: "plumbing",
  },

  {
    id: "plumbing-9",
    question: "Do you provide plumbing maintenance and emergency repairs?",
    answer:
      "Yes. We provide scheduled maintenance and responsive repair services for residential, commercial and institutional plumbing systems. Maintenance can include leak detection, pressure checks, pump and tank inspections, valve checks, drainage inspection and preventive repairs to reduce unexpected failures.",
    category: "plumbing",
  },

  // ============================================================
  // BOREHOLES
  // ============================================================

  {
    id: "boreholes-1",
    question: "How much does it cost to drill and equip a borehole?",
    answer:
      "There is no standard borehole price because costs depend on location, anticipated depth, ground conditions, drilling diameter, casing requirements, test pumping, pump capacity and water-storage needs. We provide a project-specific quotation based on the recommended design and scope.",
    category: "boreholes",
    featured: true,
  },

  {
    id: "boreholes-2",
    question: "How do I know if there is groundwater on my property?",
    answer:
      "A hydrogeological survey provides the professional basis for identifying suitable drilling targets. We assess available groundwater information, geology, hydrogeological conditions and site characteristics before recommending the most suitable drilling location.",
    category: "boreholes",
    featured: true,
  },

  {
    id: "boreholes-3",
    question: "Why is a hydrogeological survey necessary before drilling?",
    answer:
      "It reduces the risk of drilling in an unsuitable location and helps determine the most promising drilling point, expected geological conditions and groundwater potential. WRA identifies hydrogeological assessment and professional groundwater development as important measures for reducing borehole failure.",
    category: "boreholes",
  },

  {
    id: "boreholes-4",
    question: "How deep is my borehole likely to be?",
    answer:
      "Depth varies significantly by location, geology and aquifer characteristics. A hydrogeological assessment can provide an informed estimate, but the actual depth is confirmed during drilling as geological formations and water-bearing zones are encountered.",
    category: "boreholes",
    featured: true,
  },

  {
    id: "boreholes-5",
    question: "Can you guarantee that we will find sufficient water?",
    answer:
      "No responsible groundwater professional can guarantee a specific water yield before drilling and testing. We use hydrogeological assessment and professional siting to reduce the risk, then verify the borehole's performance through testing before selecting the final pumping equipment.",
    category: "boreholes",
    featured: true,
  },

  {
    id: "boreholes-6",
    question:
      "How do you determine the yield and sustainable pumping rate of a borehole?",
    answer:
      "After drilling and development, we conduct pumping and recovery tests to evaluate water levels, drawdown, borehole performance and aquifer response. The results help establish an appropriate abstraction rate rather than simply selecting a pump based on the borehole's maximum instantaneous yield. WRA provides specific codes of practice for borehole pumping tests and sustainable groundwater development.",
    category: "boreholes",
  },

  {
    id: "boreholes-7",
    question:
      "What happens if the borehole produces less water than expected?",
    answer:
      "We first evaluate the measured yield, water levels, drawdown and pumping-test results. Depending on the findings, options may include borehole development, adjusting the abstraction rate, selecting a suitably sized pump or reviewing storage requirements. We do not recommend over-pumping a low-yield borehole.",
    category: "boreholes",
  },

  {
    id: "boreholes-8",
    question:
      "Is borehole water safe for drinking, domestic use or irrigation?",
    answer:
      "Not automatically. Groundwater quality must be established through laboratory testing before deciding its intended use. We can arrange water-quality analysis for relevant physical, chemical and microbiological parameters and advise on appropriate treatment where required. Kenya has a potable-water standard covering water intended for direct human consumption and domestic use.",
    category: "boreholes",
    featured: true,
  },

  {
    id: "boreholes-9",
    question: "What pump and equipment will my borehole need?",
    answer:
      "Pump selection is based on the tested borehole yield, required flow rate, pumping head, water level, depth, operating hours and end-use requirements. We can design the complete system, including the submersible pump, rising main, controls, protection, power supply, solar system and water storage where applicable.",
    category: "boreholes",
  },

  {
    id: "boreholes-10",
    question:
      "Can you provide the complete borehole solution, including drilling, testing, pumping, solar and water storage?",
    answer:
      "Yes. We can coordinate the complete solution from hydrogeological assessment and drilling through borehole development, testing, water-quality analysis, pump selection, solar power, controls and water storage. Where applicable, we also support the documentation and water-use permitting process required by the Water Resources Authority. WRA's permitting process includes hydrogeological assessment, borehole completion records, water-quality analysis, inspection and issuance of the water-use permit.",
    category: "boreholes",
  },

  // ============================================================
  // WATER STORAGE
  // ============================================================

  {
    id: "water-storage-1",
    question: "What size water tank or reservoir do I need?",
    answer:
      "The right capacity depends on daily water demand, supply reliability, peak usage, available space and the required backup period. We assess your consumption and supply pattern to determine the appropriate storage volume rather than recommending a standard tank size.",
    category: "water-storage",
    featured: true,
  },

  {
    id: "water-storage-2",
    question:
      "How much water storage do I need for my home, farm, business or institution?",
    answer:
      "We size storage based on number of users, daily demand, operating requirements and expected supply interruptions. For larger facilities, we also consider peak demand, pumping capacity and required reserve levels to ensure storage supports actual operations.",
    category: "water-storage",
    featured: true,
  },

  {
    id: "water-storage-3",
    question: "How much does a complete water storage system cost?",
    answer:
      "Cost depends on tank capacity, material, support structure, site conditions, pump capacity, pipework, controls and installation requirements. We provide a project-specific quotation with the equipment, installation scope and applicable costs clearly identified.",
    category: "water-storage",
    featured: true,
  },

  {
    id: "water-storage-4",
    question:
      "Which is best for my project — plastic, steel, GRP or concrete storage?",
    answer:
      "There is no universally best material. We select based on capacity, location, structural requirements, water quality, expected service life, installation conditions and budget. We can recommend and compare suitable options so you can make an informed decision.",
    category: "water-storage",
    featured: true,
  },

  {
    id: "water-storage-5",
    question:
      "Should my tank be installed on the ground or on a water tower?",
    answer:
      "It depends on the required water pressure and system design. Ground-level storage is generally simpler and can be paired with a booster pump, while elevated storage can provide gravity-fed pressure. We assess the site elevation, demand and distribution requirements before selecting the appropriate arrangement.",
    category: "water-storage",
  },

  {
    id: "water-storage-6",
    question:
      "How high should my storage tank be to achieve enough pressure?",
    answer:
      "Water pressure from an elevated tank depends primarily on the vertical difference between the water level and the point of use. Approximately 10 metres of water head provides about 1 bar of static pressure, before accounting for pipe friction and other losses. We calculate the required head depending on use and, where feasible, specify a booster pump.",
    category: "water-storage",
    featured: true,
  },

  {
    id: "water-storage-7",
    question:
      "How can I prevent contamination, algae and sediment in my tank?",
    answer:
      "Good storage hygiene starts with a covered tank, secure access, suitable inlet and overflow arrangements, proper drainage and regular inspection and cleaning. For potable water, we also consider the quality of the incoming water and appropriate treatment requirements. Kenyan water-quality requirements emphasize protecting water quality throughout water-service systems.",
    category: "water-storage",
  },

  // ============================================================
  // WATER HARVESTING
  // ============================================================

  {
    id: "water-harvesting-1",
    question: "How much rainwater can I harvest from my roof or property?",
    answer:
      "Harvestable water depends mainly on catchment area, rainfall and collection efficiency. As a simple planning estimate, 1 mm of rainfall on 1 m² produces approximately 1 litre of water before collection losses. We use site-specific rainfall data and catchment characteristics to estimate realistic annual and seasonal yield.",
    category: "water-harvesting",
    featured: true,
  },

  {
    id: "water-harvesting-2",
    question: "How much does a rainwater harvesting system cost?",
    answer:
      "Cost depends on the catchment area, storage capacity, tank or reservoir type, earthworks, gutters, filtration, pumps and distribution requirements. We assess the site and provide a clear project-specific quotation covering the recommended system and installation scope.",
    category: "water-harvesting",
    featured: true,
  },

  {
    id: "water-harvesting-3",
    question: "What size storage tank or reservoir do I need?",
    answer:
      "We size storage using water demand, catchment yield, rainfall patterns, storage losses and the required reserve period. For applicable commercial, institutional and industrial buildings, current Kenyan regulations provide for storage equivalent to seven days of average water demand, subject to the applicable provisions and exceptions.",
    category: "water-harvesting",
    featured: true,
  },

  {
    id: "water-harvesting-4",
    question:
      "Can you design and construct water pans, farm ponds and small reservoirs?",
    answer:
      "Yes. We can develop water-harvesting solutions ranging from farm ponds and water pans to larger storage reservoirs, based on catchment area, expected runoff, soil conditions, storage requirements and intended use. We also consider appropriate approvals and technical requirements for the project.",
    category: "water-harvesting",
    featured: true,
  },

  {
    id: "water-harvesting-5",
    question:
      "How do you design a harvesting system to provide water through the dry season?",
    answer:
      "We analyse rainfall patterns, catchment yield, water demand and available storage to determine how much water can realistically be captured and carried into the dry period. The design may combine roof harvesting, runoff collection, storage reservoirs, pumping and efficient irrigation to extend water availability between rainfall events.",
    category: "water-harvesting",
    featured: true,
  },

  // ============================================================
  // IRRIGATION
  // ============================================================

  {
    id: "irrigation-1",
    question: "How much does an irrigation system cost per acre?",
    answer:
      "There is no fixed cost per acre. Pricing depends on the irrigation method, crop, field layout, water source, pumping requirements, terrain, pipework and level of automation. We assess the farm and provide a project-specific design and quotation before installation.",
    category: "irrigation",
    featured: true,
  },

  {
    id: "irrigation-2",
    question:
      "Which irrigation system is best for my farm — drip, sprinkler or another system?",
    answer:
      "The best system depends on your crop, soil, water availability, field size, terrain and budget. Drip is well suited to many high-value and row crops, while sprinklers can suit a wide range of field and tree crops. We select the method based on the farm's actual operating requirements rather than selling a standard package.",
    category: "irrigation",
    featured: true,
  },

  {
    id: "irrigation-3",
    question: "How much water does my crop and farm require?",
    answer:
      "Water requirements vary with crop type, growth stage, climate, soil and effective rainfall. We calculate irrigation demand using factors such as reference evapotranspiration (ETo) and crop coefficient (Kc), then account for system efficiency to determine the required irrigation volume.",
    category: "irrigation",
    featured: true,
  },

  {
    id: "irrigation-4",
    question:
      "Can you design an irrigation system specifically for my crops and field?",
    answer:
      "Yes. We design systems around your crop, acreage, water source, soil, topography, required flow and irrigation schedule. The design determines pipe sizes, pump capacity, operating pressure, zones, emitters or sprinklers and control requirements.",
    category: "irrigation",
  },

  {
    id: "irrigation-5",
    question: "Can solar power my irrigation pump?",
    answer:
      "Yes. Solar pumping can be used for boreholes, rivers, tanks and other suitable water sources. We size the solar array, pump, controller and storage based on the required flow, pumping head, operating hours and available solar resource, with battery storage included where the application requires it.",
    category: "irrigation",
    featured: true,
  },

  {
    id: "irrigation-6",
    question:
      "Why do my drip emitters or sprinklers keep blocking or delivering unevenly?",
    answer:
      "Common causes include sediment, algae, poor filtration, inadequate pressure, blocked emitters/nozzles, incorrect pipe sizing or uneven terrain. We check water quality, filtration, pressure and hydraulic balance before recommending corrective measures. Proper filtration and pressure control are particularly important for drip and sprinkler systems.",
    category: "irrigation",
  },

  {
    id: "irrigation-7",
    question:
      "Can you automate irrigation and control different irrigation zones?",
    answer:
      "Yes. We can automate irrigation using timers, solenoid valves, controllers, sensors and zone-based control. This allows different crops or field sections to be irrigated according to their individual schedules and water requirements, while reducing unnecessary manual operation.",
    category: "irrigation",
    featured: true,
  },
];

export function getFAQsByCategory(category: FAQSlug): FAQ[] {
  return FAQs.filter((f) => f.category === category);
}

export function getFeaturedFAQsByCategory(category: FAQSlug): FAQ[] {
  const featured = FAQs.filter(
    (f) => f.category === category && f.featured,
  );
  if (featured.length > 0) return featured;
  return getFAQsByCategory(category);
}

export const getPopularFAQs = (count = 5) => {
  return [...FAQs]
    .filter((faq) => faq.isPopular)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

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
