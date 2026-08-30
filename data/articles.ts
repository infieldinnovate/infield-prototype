// ============================================
// Articles / Knowledge Centre Data
// ============================================

import { getEmployeeById } from "./teamData";

export type ArticleCategory = 'Solar' | 'Electrical' | 'Boreholes' | 'Plumbing' | 'Irrigation';

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: ArticleCategory;
  image: string;
  readingTime: string;
  publishDate: string;
  authorId: string;
  featured: boolean;
  content: ArticleSection[];
  tags: string[];
}

export const articles: Article[] = [
  {
    id: 'a1',
    title: 'Complete Guide to Solar Panel Installation for Homes',
    slug: 'solar-panel-installation-guide',
    excerpt:
      'Everything you need to know about residential solar — from system sizing and roof assessment to choosing the right panels and inverters for maximum efficiency.',
    category: 'Solar',
    image:
      'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '8 min read',
    publishDate: '2024-06-15',
    authorId: 'tm4',
    featured: true,
    tags: ['solar', 'residential', 'installation', 'panels', 'inverters'],
    content: [
      {
        heading: 'Why Go Solar?',
        paragraphs: [
          'Solar energy is no longer a luxury reserved for a few. Across Kenya, falling panel prices, rising electricity tariffs, and frequent grid outages have made residential solar one of the most practical investments a homeowner can make. A well-designed system can reduce your monthly power bill by 70% or more while providing reliable backup during outages.',
          'Beyond savings, solar increases your property value, reduces your carbon footprint, and gives you independence from unpredictable utility costs. With battery storage, you can keep essential loads running around the clock — lights, refrigeration, security, and communications.',
        ],
      },
      {
        heading: 'Assessing Your Roof and Site',
        paragraphs: [
          'The first step is a professional site assessment. South-facing roofs with minimal shading produce the most energy in Kenya, but east- and west-facing arrays can also perform well if sized correctly. Our engineers evaluate roof orientation, tilt angle, structural integrity, and any shading from trees, chimneys, or neighbouring buildings.',
          'If your roof is not suitable — due to shading, age, or orientation — ground-mounted arrays are an excellent alternative. They offer easier maintenance access and can be oriented perfectly for maximum production.',
        ],
      },
      {
        heading: 'Sizing Your System',
        paragraphs: [
          'System size is determined by your electricity consumption, not by the size of your roof. We analyse your power bills over the past 12 months, identify your peak demand, and account for future needs such as electric vehicles or expanded living space. A typical Kenyan home requires between 3kW and 8kW of solar capacity.',
          'Oversizing your system slightly is often wise — it provides headroom for future demand and ensures adequate production during overcast days. However, oversizing without battery storage means excess energy is exported to the grid, which may or may not be compensated depending on your utility agreement.',
        ],
      },
      {
        heading: 'Choosing Panels and Inverters',
        paragraphs: [
          'Not all solar panels are created equal. Monocrystalline panels offer the highest efficiency and are ideal when roof space is limited. Polycrystalline panels are more affordable but require more area for the same output. We recommend tier-1 brands with 25-year performance warranties for long-term reliability.',
          'The inverter is the heart of your system. String inverters are cost-effective for unshaded arrays, while micro-inverters or power optimisers are better for roofs with partial shading. Hybrid inverters combine solar and battery management in one unit, simplifying installation and reducing costs.',
        ],
      },
      {
        heading: 'Battery Storage: Do You Need It?',
        paragraphs: [
          'Batteries are essential if you experience frequent power outages, want to use solar energy after sunset, or live off-grid. Lithium-ion (LiFePO4) batteries are the current standard — they offer high cycle life, deep discharge capability, and minimal maintenance compared to older lead-acid technologies.',
          'Battery capacity should cover your critical loads for the duration of a typical outage. For most homes, 5–15kWh of usable storage is sufficient. We size batteries based on your essential load profile, not your total consumption, to keep the investment proportionate.',
        ],
      },
      {
        heading: 'Installation and Commissioning',
        paragraphs: [
          'A residential installation typically takes 1–3 days depending on system complexity. Our certified technicians handle mounting, wiring, inverter setup, and grid connection. We test every component, verify safety devices, and walk you through system operation before handover.',
          'After commissioning, monitoring software lets you track production, consumption, and battery status in real time. We provide ongoing maintenance — panel cleaning, electrical inspections, and performance reviews — to keep your system at peak efficiency for decades.',
        ],
      },
    ],
  },
  {
    id: 'a2',
    title: 'How to Choose the Right Electrical Panel for Your Property',
    slug: 'choosing-electrical-panel',
    excerpt:
      'Upgrading your electrical panel? Learn about amperage requirements, smart panels, and how to future-proof your home or business for solar and backup power.',
    category: 'Electrical',
    image:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '6 min read',
    publishDate: '2024-05-28',
    authorId: 'tm1',
    featured: true,
    tags: ['electrical', 'panel', 'upgrade', 'distribution', 'safety'],
    content: [
      {
        heading: 'Understanding Your Current Panel',
        paragraphs: [
          'Your electrical panel — also called a distribution board or breaker box — is the central hub that distributes electricity throughout your property. If your panel is more than 20 years old, has fuses instead of circuit breakers, or trips frequently under normal load, it is time for an upgrade.',
          'Common signs that your panel needs attention include flickering lights, breakers that will not stay reset, burning smells near the panel, or the use of multiple extension cords because you do not have enough circuits. These are not just inconveniences — they are safety hazards.',
        ],
      },
      {
        heading: 'Sizing: How Many Amps Do You Need?',
        paragraphs: [
          'Most modern Kenyan homes require a 100-amp to 200-amp service. A 100-amp panel is adequate for a typical three-bedroom home with standard appliances. A 200-amp panel is recommended for larger homes, properties with electric water heating, or those planning to add solar, battery backup, or electric vehicle charging.',
          'Commercial properties have different requirements entirely. A small office may need a 200-amp three-phase supply, while a restaurant or workshop could require 400 amps or more. We calculate load requirements based on your actual connected equipment and future expansion plans.',
        ],
      },
      {
        heading: 'Smart Panels: The Future of Distribution',
        paragraphs: [
          'Smart electrical panels offer real-time energy monitoring, remote circuit control, and automatic load management. They can prioritise critical loads during power outages, integrate seamlessly with solar and battery systems, and send alerts to your phone if a circuit trips.',
          'While smart panels cost more than traditional ones, they provide valuable insight into your energy usage, help identify waste, and can pay for themselves through optimised consumption patterns. They are particularly valuable when paired with solar and battery storage.',
        ],
      },
      {
        heading: 'Future-Proofing for Solar and Backup',
        paragraphs: [
          'If you plan to install solar or backup power, your panel must be ready to accept these sources. This means having sufficient breaker space, a compatible busbar rating, and proper labelling. A panel upgrade done before solar installation is significantly cheaper than retrofitting later.',
          'We recommend installing a panel with at least 20% spare capacity. This accommodates future circuits — a new room, a swimming pool, or EV charging — without another upgrade. The cost difference between a 100-amp and 200-amp panel is modest compared to the cost of replacing an undersized panel later.',
        ],
      },
      {
        heading: 'Safety and Compliance',
        paragraphs: [
          'Every panel upgrade must meet Kenyan electrical codes and EPRA requirements. This includes proper earthing, surge protection, RCD (residual current device) installation, and correct breaker sizing for each circuit. Non-compliant work voids insurance and endangers lives.',
          'After installation, we perform a full safety inspection, issue a compliance certificate, and walk you through the new system. We label every circuit clearly so you know exactly what each breaker controls — essential during an emergency or when performing maintenance.',
        ],
      },
    ],
  },
  {
    id: 'a3',
    title: 'Borehole Drilling: What to Expect from Start to Finish',
    slug: 'borehole-drilling-process',
    excerpt:
      'A step-by-step walkthrough of the borehole drilling process — geological surveys, permitting, drilling, casing, pump installation, and water quality testing.',
    category: 'Boreholes',
    image:
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '10 min read',
    publishDate: '2024-05-10',
    authorId: 'tm2',
    featured: true,
    tags: ['borehole', 'drilling', 'water', 'groundwater', 'pump'],
    content: [
      {
        heading: 'Step 1: Hydrogeological Survey',
        paragraphs: [
          'Before any drilling begins, a professional hydrogeological survey identifies the most promising drilling location on your property. Using a combination of geological maps, geophysical measurements, and local knowledge, our specialists determine where groundwater is most likely to be found and at what approximate depth.',
          'The survey also assesses potential risks — contamination sources, geological formations that could impede drilling, and regulatory constraints. A thorough survey reduces drilling risk significantly, though no survey can guarantee a specific water yield.',
        ],
      },
      {
        heading: 'Step 2: Permits and Approvals',
        paragraphs: [
          'In Kenya, borehole drilling requires permits from the Water Resources Authority (WRA). The application includes the survey report, property details, and intended water use. We handle the entire permitting process on your behalf, ensuring all documentation is correct and submitted promptly.',
          'Permit approval typically takes 2–4 weeks. During this time, we schedule the drilling rig, prepare the site access, and order materials — casing pipes, screens, grout, and the pump assembly. Everything is ready to begin the moment the permit is issued.',
        ],
      },
      {
        heading: 'Step 3: Drilling',
        paragraphs: [
          'Drilling day is the most exciting part of the process. Our drilling rig arrives on site, and drilling begins through soil, weathered rock, and into the underlying formation. We monitor the cuttings (rock fragments) continuously to identify water-bearing zones and adjust the drilling depth accordingly.',
          'A typical borehole in Kenya ranges from 100 to 300 metres, though some areas require deeper drilling. The drilling process itself usually takes 1–3 days depending on depth and geology. We install steel casing as we drill to prevent the borehole walls from collapsing.',
        ],
      },
      {
        heading: 'Step 4: Casing and Development',
        paragraphs: [
          'Once the target depth is reached, we install a permanent casing — typically PVC or steel pipe — with a slotted screen section positioned across the water-bearing zone. Grout is pumped around the casing to seal out surface contaminants and prevent cross-contamination between aquifers.',
          'Borehole development follows: we airlift or pump the borehole to remove fine particles, drilling fluid, and debris. This process can take several hours and significantly improves water yield and quality. The water is initially cloudy but clears as development progresses.',
        ],
      },
      {
        heading: 'Step 5: Test Pumping and Yield Assessment',
        paragraphs: [
          'Test pumping determines the borehole\'s sustainable yield — how much water can be reliably extracted without depleting the aquifer. We pump at increasing rates and measure water level recovery. This data informs pump selection and long-term usage planning.',
          'A typical test pump runs for 6–24 hours. The results tell us the borehole\'s static water level, dynamic water level, and safe pumping rate. We use this information to select a pump that will deliver the required volume without over-pumping.',
        ],
      },
      {
        heading: 'Step 6: Water Quality Testing',
        paragraphs: [
          'Borehole water is not automatically safe to drink. We send samples to a certified laboratory for a comprehensive analysis covering pH, total dissolved solids, bacterial contamination, heavy metals, and chemical parameters. The results determine whether treatment is needed.',
          'Common treatment solutions include sediment filtration, UV disinfection, chlorination, and reverse osmosis for high-salinity water. We design and install treatment systems tailored to your water quality results, ensuring safe, clean water for your household or operation.',
        ],
      },
      {
        heading: 'Step 7: Pump Installation and Commissioning',
        paragraphs: [
          'The final step is installing the submersible pump, control panel, pipework, and any storage or distribution system. For remote sites, we can integrate solar-powered pumping to eliminate electricity or fuel costs entirely. The pump is sized based on the test pumping results and your daily water demand.',
          'After installation, we commission the system — testing flow rates, pressure, and all safety devices. We provide you with a handover pack including the borehole log, water quality report, pump specifications, and maintenance schedule.',
        ],
      },
    ],
  },
  {
    id: 'a4',
    title: '5 Common Plumbing Problems and How to Prevent Them',
    slug: 'common-plumbing-problems',
    excerpt:
      'From leaking taps to burst pipes, discover the most common plumbing issues homeowners face and practical tips to prevent costly repairs.',
    category: 'Plumbing',
    image:
      'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '5 min read',
    publishDate: '2024-04-22',
    authorId: 'tm5',
    featured: false,
    tags: ['plumbing', 'leaks', 'maintenance', 'repairs', 'prevention'],
    content: [
      {
        heading: '1. Leaking Taps and Fixtures',
        paragraphs: [
          'A dripping tap is more than an annoyance — a single tap leaking one drip per second wastes over 3,000 litres of water per year. The most common cause is a worn washer or O-ring, which is inexpensive to replace but often ignored until the problem worsens.',
          'Prevention: Have a plumber inspect taps and fixtures annually. Replace washers at the first sign of dripping rather than waiting. If you have high water pressure, install a pressure-reducing valve to protect fixtures and extend their lifespan.',
        ],
      },
      {
        heading: '2. Burst Pipes',
        paragraphs: [
          'Burst pipes cause some of the most expensive water damage in homes. They typically result from excessive water pressure, corrosion, freezing (in highland areas), or physical damage during construction or renovation. The key to minimising damage is knowing where your main shut-off valve is and turning it off immediately.',
          'Prevention: Have your pipework inspected for corrosion, especially if your home is over 15 years old. Install a pressure regulator if your incoming pressure exceeds 5 bar. Insulate exposed pipes in cold areas. Never bury pipes in walls without proper sleeving.',
        ],
      },
      {
        heading: '3. Blocked Drains',
        paragraphs: [
          'Blocked drains are usually caused by accumulated grease, food particles, hair, or foreign objects. In kitchens, the culprit is almost always cooking oil poured down the sink. In bathrooms, hair and soap scum build up gradually until the pipe is completely blocked.',
          'Prevention: Never pour cooking oil or fat down the drain — let it solidify and dispose of it in the bin. Use drain strainers in all sinks and showers. Run hot water through drains weekly to dissolve minor build-up. For recurring blockages, have a plumber inspect with a camera to identify the root cause.',
        ],
      },
      {
        heading: '4. Low Water Pressure',
        paragraphs: [
          'Low pressure makes showers frustrating and appliances inefficient. Common causes include undersized pipework, blocked filters, partially closed valves, leaks in the supply line, or an underperforming booster pump. Sometimes the issue is the municipal supply itself.',
          'Prevention: Install a whole-house water filter to prevent sediment from blocking aerators and valves. If you have a booster pump, have it serviced annually. If pressure drops suddenly, check for hidden leaks — an undetected leak can waste thousands of litres and damage your property\'s foundation.',
        ],
      },
      {
        heading: '5. Water Heater Problems',
        paragraphs: [
          'Water heaters fail gradually — you notice less hot water, longer heating times, or discoloured water. Sediment build-up in the tank is the most common cause, reducing efficiency and eventually causing the tank to leak. Thermostat and element failures are also common in electric heaters.',
          'Prevention: Flush your water heater annually to remove sediment. Have the anode rod inspected every 2–3 years — this sacrificial component prevents tank corrosion. If your heater is over 10 years old, consider replacing it proactively rather than waiting for a failure that leaves you without hot water.',
        ],
      },
    ],
  },
  {
    id: 'a5',
    title: 'Smart Irrigation: Saving Water with Technology',
    slug: 'smart-irrigation-technology',
    excerpt:
      'Explore how WiFi-enabled controllers, weather sensors, and drip systems can cut your water usage by up to 50% while keeping your landscape thriving.',
    category: 'Irrigation',
    image:
      'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '7 min read',
    publishDate: '2024-04-05',
    authorId: 'tm6',
    featured: false,
    tags: ['irrigation', 'smart', 'water-saving', 'drip', 'automation'],
    content: [
      {
        heading: 'The Problem with Traditional Irrigation',
        paragraphs: [
          'Traditional irrigation — whether flood, sprinkler, or manual hose watering — is inherently wasteful. Water is applied on a fixed schedule regardless of actual soil moisture, weather conditions, or plant needs. The result: overwatering, runoff, leached nutrients, and water bills far higher than necessary.',
          'In Kenya, where water security is an ongoing concern and municipal supply can be unreliable, wasting water through inefficient irrigation is both environmentally and financially irresponsible. Smart irrigation addresses this by applying water only when, where, and in the amount needed.',
        ],
      },
      {
        heading: 'Smart Controllers: The Brain of the System',
        paragraphs: [
          'A smart controller replaces a traditional timer with an internet-connected device that adjusts watering schedules based on real-time data. It connects to local weather stations or uses built-in sensors to monitor temperature, rainfall, humidity, and solar radiation. If rain is forecast, it skips the scheduled watering. If a heatwave is expected, it increases irrigation depth.',
          'Most smart controllers offer a mobile app for remote management — you can adjust zones, view water usage reports, and receive alerts if a leak or broken sprinkler is detected. Some integrate with home automation systems and voice assistants for seamless control.',
        ],
      },
      {
        heading: 'Drip Irrigation: Precision Delivery',
        paragraphs: [
          'Drip irrigation delivers water directly to the root zone through a network of tubes and emitters, eliminating the evaporation and runoff associated with sprinklers. A well-designed drip system can reduce water consumption by 50–70% compared to traditional methods while improving plant health — roots receive consistent moisture without foliar wetting that promotes disease.',
          'Modern drip systems include pressure-compensating emitters that deliver uniform flow regardless of terrain, filtration to prevent clogging, and air release valves to protect the system. For farms, fertigation injectors can deliver dissolved fertiliser directly through the drip line, reducing fertiliser costs by 30% or more.',
        ],
      },
      {
        heading: 'Soil Moisture Sensors',
        paragraphs: [
          'Soil moisture sensors provide the most accurate data for irrigation scheduling. Placed at root depth in representative zones, they measure actual soil water content and tell the controller exactly when to water and when to stop. This closed-loop approach eliminates guesswork and prevents both overwatering and underwatering.',
          'For large landscapes or farms, multiple sensors across different zones ensure each area receives water according to its specific soil type, sun exposure, and plant requirements. The data collected over time also reveals drainage problems, compacted areas, and zones that consistently dry out faster than others.',
        ],
      },
      {
        heading: 'Integration with Water Sources',
        paragraphs: [
          'Smart irrigation integrates seamlessly with boreholes, rainwater harvesting systems, and storage tanks. The controller can prioritise harvested rainwater when available and switch to borehole supply only when the tank is low. Pump controllers coordinate with the irrigation system to maintain pressure without wasting energy.',
          'For solar-powered systems, the irrigation schedule can be aligned with peak solar production hours, maximising the use of free energy while avoiding battery drain. This integration is particularly valuable for farms where both water and energy costs directly affect profitability.',
        ],
      },
      {
        heading: 'Getting Started',
        paragraphs: [
          'Upgrading to smart irrigation does not require replacing your entire system. In many cases, we can retrofit existing sprinkler zones with drip lines, install a smart controller, and add soil moisture sensors to the most critical zones. The investment typically pays for itself within 1–2 seasons through water savings alone.',
          'We begin with a site assessment — evaluating your landscape, water source, existing infrastructure, and goals. From there, we design a system tailored to your property and install it with minimal disruption. Training is included so you can manage your system confidently from day one.',
        ],
      },
    ],
  },
  {
    id: 'a6',
    title: 'Solar Battery Storage: Is It Worth the Investment?',
    slug: 'solar-battery-storage-guide',
    excerpt:
      'A deep dive into solar battery systems — capacity sizing, lithium vs lead-acid, cost analysis, and how battery backup can provide energy independence.',
    category: 'Solar',
    image:
      'https://images.pexels.com/photos/9823144/pexels-photo-9823144.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '9 min read',
    publishDate: '2024-03-18',
    authorId: 'tm4',
    featured: false,
    tags: ['solar', 'battery', 'storage', 'backup', 'lithium'],
    content: [
      {
        heading: 'Why Battery Storage Matters',
        paragraphs: [
          'A grid-tied solar system without batteries shuts down during a power outage — even if the sun is shining. This is a safety requirement: the inverter must not feed power into a dead grid, where maintenance crews could be working. Battery storage solves this by creating a self-contained circuit that keeps your essential loads running independently.',
          'Beyond backup, batteries let you store excess solar energy produced during the day and use it at night, reducing your reliance on grid power and maximising self-consumption. For homes on time-of-use tariffs, this can mean charging the battery during cheap off-peak hours and discharging during expensive peak periods.',
        ],
      },
      {
        heading: 'Lithium-Ion vs Lead-Acid',
        paragraphs: [
          'Lithium-ion (specifically LiFePO4) batteries have become the standard for residential and commercial solar storage. They offer 4,000–8,000 charge cycles (10–15 years of daily use), 90%+ depth of discharge, and high round-trip efficiency (95%+). They require no maintenance and can be installed indoors.',
          'Lead-acid batteries, while cheaper upfront, have significant drawbacks: 50% maximum depth of discharge, 1,000–1,500 cycles (3–5 years), lower efficiency (80%), and require regular maintenance (checking electrolyte levels, cleaning terminals). Over a 10-year period, lithium batteries are significantly cheaper per kWh of usable storage despite the higher initial cost.',
        ],
      },
      {
        heading: 'Sizing Your Battery System',
        paragraphs: [
          'Battery capacity is measured in kilowatt-hours (kWh) of usable storage. To size your system, identify your essential loads — lighting, refrigeration, security, communications, water pumping — and calculate their total daily consumption. A typical Kenyan home needs 5–15kWh of battery storage to cover essential loads overnight.',
          'It is rarely cost-effective to size your battery to cover your entire home\'s consumption. Instead, we design for your critical loads and accept that during extended outages, non-essential loads (air conditioning, water heating, cooking) will be shed. This approach keeps the investment reasonable while providing meaningful backup.',
        ],
      },
      {
        heading: 'Cost Analysis and ROI',
        paragraphs: [
          'A 10kWh lithium battery system in Kenya costs approximately KSh 350,000–600,000 installed, depending on brand and configuration. The payback period depends on how you use it: if the battery primarily provides backup power, the ROI is measured in avoided downtime and spoiled food rather than direct savings. If it is used daily for peak-shifting, the savings on electricity bills can pay for the battery in 5–8 years.',
          'For businesses, the calculation is more straightforward. A shop or office that loses KSh 10,000 per day in revenue during outages will recover the battery cost in a matter of months. Add in the savings from reduced peak-hour grid consumption, and the investment becomes compelling.',
        ],
      },
      {
        heading: 'Hybrid Inverters: Simplifying the System',
        paragraphs: [
          'A hybrid inverter combines solar charge control, battery management, and grid interaction in a single unit. This simplifies installation, reduces component count, and typically costs less than separate inverter and charge controller combinations. Most modern hybrid inverters also include built-in AC coupling for generator backup.',
          'When selecting a hybrid inverter, ensure it supports the battery chemistry you plan to use (LiFePO4 is most common), has sufficient continuous and surge power ratings for your loads, and offers the monitoring features you need. We recommend inverters with at least 5kW continuous output for typical residential systems.',
        ],
      },
      {
        heading: 'Maintenance and Longevity',
        paragraphs: [
          'Lithium battery systems require essentially no maintenance — no watering, no equalisation charges, no terminal cleaning. The battery management system (BMS) handles cell balancing, temperature protection, and charge limits automatically. We recommend an annual system check to verify connections, update firmware, and review performance data.',
          'Most LiFePO4 batteries retain 80% of their original capacity after 10 years of daily cycling. After that point, they continue to function but with reduced runtime. When the battery eventually reaches end of life, the cells are recyclable — lithium iron phosphate is one of the more environmentally benign battery chemistries available.',
        ],
      },
    ],
  },
  {
    id: 'a7',
    title: 'Backup Generator Installation: What Homeowners Need to Know',
    slug: 'backup-generator-installation-guide',
    excerpt:
      'Considering a backup generator for your home or business? Learn about generator sizing, fuel options, transfer switches, and maintenance best practices.',
    category: 'Electrical',
    image:
      'https://images.pexels.com/photos/3779457/pexels-photo-3779457.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '6 min read',
    publishDate: '2024-03-01',
    authorId: 'tm1',
    featured: false,
    tags: ['generator', 'backup', 'power', 'electrical', 'installation'],
    content: [
      {
        heading: 'Do You Need a Generator?',
        paragraphs: [
          'If your area experiences frequent or prolonged power outages, a backup generator provides reliable power when solar and batteries are not sufficient. Generators are particularly valuable for businesses that cannot tolerate any downtime — cold storage, medical facilities, and manufacturing operations.',
          'For homes, a generator can supplement a solar-battery system, automatically starting when the battery runs low during extended outages. This hybrid approach provides the best of both worlds: silent, free solar power for short outages, and generator backup for prolonged events.',
        ],
      },
      {
        heading: 'Sizing Your Generator',
        paragraphs: [
          'Generator sizing starts with identifying the loads it must support. Unlike solar, a generator must handle the surge current of motor starts — air conditioners, pumps, and refrigerators can draw 3–6 times their running power for a few seconds at startup. An undersized generator will stall or fail to start these loads.',
          'For a typical Kenyan home with essential loads, a 5–10kVA generator is usually sufficient. For commercial applications, we perform a detailed load analysis including motor starting currents, power factor, and diversity factors. We always recommend a generator rated 20% above your calculated requirement to provide headroom.',
        ],
      },
      {
        heading: 'Fuel Options: Diesel, Petrol, or Gas?',
        paragraphs: [
          'Diesel generators are the most common choice for standby power in Kenya. They are fuel-efficient, durable, and available in a wide range of sizes. Diesel stores well and is readily available. For residential use, sound-attenuated diesel generators (60dB or below) are recommended to minimise noise disturbance.',
          'Petrol generators are smaller, lighter, and cheaper but less fuel-efficient and not suitable for long runtimes. They are best for portable or occasional use. LPG/natural gas generators are cleaner and quieter but less common in Kenya due to fuel availability constraints.',
        ],
      },
      {
        heading: 'Transfer Switches: Automatic vs Manual',
        paragraphs: [
          'A transfer switch is the critical safety component that isolates your property from the grid when the generator starts. Without it, generator power can feed back into the grid, endangering utility workers. An Automatic Transfer Switch (ATS) detects an outage, starts the generator, and switches the load — all within 10–30 seconds, automatically.',
          'A manual transfer switch requires you to start the generator and throw the switch yourself. This is cheaper but less convenient and impractical for unattended properties. For most homes and businesses, an ATS is worth the additional cost for the peace of mind it provides.',
        ],
      },
      {
        heading: 'Installation and Maintenance',
        paragraphs: [
          'Generator installation requires a level concrete pad, adequate ventilation, fuel storage, and electrical connection through the transfer switch. We handle the complete installation including fuel tank setup, exhaust routing, electrical connections, and commissioning.',
          'Maintenance is critical for standby generators that sit idle for long periods. We recommend a monthly test run (the ATS can do this automatically), oil and filter changes every 200–250 hours or annually, and a full service every two years. Neglected generators are the most common cause of backup system failure — the generator that never runs is the one that fails when you need it.',
        ],
      },
    ],
  },
  {
    id: 'a8',
    title: 'Water Quality Testing: Ensuring Safe Borehole Water',
    slug: 'borehole-water-quality-testing',
    excerpt:
      'After drilling your borehole, water quality testing is essential. Learn what we test for, how treatment systems work, and maintaining water safety.',
    category: 'Boreholes',
    image:
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '7 min read',
    publishDate: '2024-02-14',
    authorId: 'tm2',
    featured: false,
    tags: ['borehole', 'water-quality', 'testing', 'treatment', 'safety'],
    content: [
      {
        heading: 'Why Test Borehole Water?',
        paragraphs: [
          'Borehole water comes from underground aquifers that are generally protected from surface contamination. However, groundwater quality varies significantly depending on geology, depth, and surrounding land use. Water that looks clear and tastes fine can still contain harmful bacteria, heavy metals, or excessive minerals.',
          'In Kenya, common borehole water issues include high iron, high fluoride, salinity (especially in coastal and arid areas), and bacterial contamination from poorly sealed boreholes or nearby pit latrines. Only a certified laboratory analysis can determine whether your water is safe for its intended use.',
        ],
      },
      {
        heading: 'What We Test For',
        paragraphs: [
          'A comprehensive borehole water test covers physical, chemical, and microbiological parameters. Physical parameters include pH, turbidity, colour, temperature, and total dissolved solids (TDS). Chemical parameters include hardness, iron, manganese, fluoride, nitrate, sulphate, chloride, and heavy metals such as lead and arsenic.',
          'Microbiological testing checks for total coliforms, E. coli, and other faecal indicators. The presence of these organisms means the water is contaminated with waste and is not safe to drink without treatment. We recommend testing at least once after drilling and annually thereafter, or whenever the water\'s taste, smell, or appearance changes.',
        ],
      },
      {
        heading: 'Understanding Your Results',
        paragraphs: [
          'Laboratory results compare your water against World Health Organisation (WHO) drinking water guidelines and Kenyan standards. Each parameter has a maximum acceptable limit — if your water exceeds any of these, treatment is required. We help you interpret the results and recommend appropriate treatment solutions.',
          'Some parameters are aesthetic rather than health-related. For example, high iron causes staining and metallic taste but is not dangerous at typical borehole concentrations. High fluoride, however, causes dental fluorosis in children and is a genuine health concern that must be addressed.',
        ],
      },
      {
        heading: 'Treatment Solutions',
        paragraphs: [
          'Treatment systems are designed based on your water quality results. For sediment and particulate matter, multi-stage cartridge filtration is effective. For bacterial contamination, UV sterilisation or chlorination provides reliable disinfection without altering taste or smell.',
          'For chemical issues, specific treatment media are used: activated carbon for organic compounds and chlorine removal, ion exchange for hardness, reverse osmosis for high salinity and fluoride, and specialised media for iron and manganese. We design treatment systems as integrated units that address all identified issues in the correct sequence.',
        ],
      },
      {
        heading: 'Maintaining Water Safety',
        paragraphs: [
          'Water quality is not static — aquifer conditions, borehole integrity, and environmental factors can change over time. We recommend annual water testing for any borehole used for drinking water. Treatment systems also require maintenance: filter replacement, UV lamp replacement, media regeneration, and system sanitisation.',
          'If you notice any change in water quality — cloudiness, odour, taste, or staining — have the water tested immediately. These changes can indicate borehole contamination, treatment system failure, or aquifer changes that require attention. Early detection prevents health risks and more expensive remediation later.',
        ],
      },
    ],
  },
  {
    id: 'a9',
    title: 'Preparing Your Irrigation System for the Dry Season',
    slug: 'dry-season-irrigation-preparation',
    excerpt:
      "Keep your landscape thriving through the dry season. Learn how to adjust your irrigation system, conserve water, and protect your investment during Kenya's dry months.",
    category: 'Irrigation',
    image:
      'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1200',
    readingTime: '5 min read',
    publishDate: '2024-01-20',
    authorId: 'tm6',
    featured: false,
    tags: ['irrigation', 'dry-season', 'maintenance', 'water-conservation', 'preparation'],
    content: [
      {
        heading: 'Audit Before the Heat',
        paragraphs: [
          'Before the dry season arrives, conduct a full audit of your irrigation system. Run each zone individually and inspect every emitter, sprinkler, and connection. Look for clogged drip emitters, misaligned sprinkler heads, leaking joints, and areas where water pools or runs off instead of infiltrating.',
          'A system running at 80% efficiency wastes 20% of its water — water you cannot afford to lose during the dry season. We offer professional irrigation audits that identify every inefficiency and provide a prioritised list of repairs and upgrades.',
        ],
      },
      {
        heading: 'Adjust Schedules for the Season',
        paragraphs: [
          'During the dry season, evaporation rates are higher and soil dries faster. However, the instinct to water more frequently is often wrong. Deep, infrequent watering encourages deeper root growth, making plants more drought-resistant. Shallow, frequent watering keeps roots near the surface where they dry out quickly.',
          'If you have a smart controller, it will adjust automatically based on weather data. If not, increase watering duration per zone by 20–30% while keeping the frequency the same or reducing it slightly. Water early morning or late evening to minimise evaporation losses.',
        ],
      },
      {
        heading: 'Clean and Replace Filters',
        paragraphs: [
          'Drip irrigation systems rely on clean filters to prevent emitter clogging. During the dry season, higher water demand means more water flows through the system, and any sediment or algae in the supply will accumulate faster. Clean screen and disc filters weekly during peak demand periods.',
          'If your filters clog repeatedly, consider upgrading to a higher-capacity filter or adding a secondary filtration stage. Clogged emitters are the most common cause of dry patches in drip-irrigated landscapes — and they are entirely preventable with proper filtration.',
        ],
      },
      {
        heading: 'Mulch and Soil Preparation',
        paragraphs: [
          'While not strictly an irrigation task, mulching dramatically reduces water loss through evaporation. A 5–10cm layer of organic mulch around plants can reduce water requirements by 25–50%. Mulch also moderates soil temperature, suppresses weeds, and adds organic matter as it decomposes.',
          'Before the dry season, apply a slow-release fertiliser to strengthen root systems. Avoid high-nitrogen fertilisers during drought — they promote lush, water-hungry growth that the plant cannot sustain. Potassium-rich fertilisers improve drought tolerance by regulating plant water use.',
        ],
      },
      {
        heading: 'Plan for Water Supply Reliability',
        paragraphs: [
          'If your irrigation system relies on municipal water, dry season restrictions may limit your watering windows. If you have a borehole, ensure the pump is serviced and the borehole yield is sufficient for increased demand. If you use stored water, check tank capacity and fill levels before the dry season begins.',
          'For farms and large landscapes, consider adding storage capacity or a secondary water source as a buffer. The cost of a storage tank is modest compared to the cost of losing a crop or landscape during a water interruption at the worst possible time.',
        ],
      },
    ],
  },
];

export const articleCategories: ArticleCategory[] = ['Solar', 'Electrical', 'Boreholes', 'Plumbing', 'Irrigation'];

export function getFeaturedArticles(limit = 3): Article[] {
  return articles.filter((a) => a.featured).slice(0, limit);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function getRelatedArticles(currentArticle: Article, limit = 3): Article[] {
  return articles
    .filter((a) => a.id !== currentArticle.id && a.category === currentArticle.category)
    .slice(0, limit);
}

export function getArticleAuthorName(article: Article): string {
  const employee = getEmployeeById(article.authorId);
  return employee ? employee.fullName : "Infield Innovations";
}
