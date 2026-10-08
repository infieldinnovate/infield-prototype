import type { Article } from "@/data/articles";

const article: Article = {
  id: "art05",
  title: "Borehole Water Quality Testing & Treatment: What You Need to Know",
  slug: "borehole-water-quality-testing-treatment",
  excerpt:
    "Borehole water is not automatically safe to drink. Learn what to test for, how to read a water quality report, and how to choose the right treatment system for your borehole in Kenya.",
  category: "boreholes",
  image: "/placeholder_image.jpg",
  readingTime: "10 min read",
  publishDate: "2025-02-10",
  authorId: "tm1",
  reviewerId: "tm4",
  featured: false,
  tags: ["borehole", "water quality", "testing", "treatment", "safe water", "Kenya"],
  relatedServiceSlugs: ["boreholes", "water-storage"],
  keyTakeaways: [
    "Borehole water is not automatically safe to drink — it must be tested after drilling and at least every 6 to 12 months thereafter.",
    "A complete water quality test covers physical, chemical, and microbiological parameters, including pH, turbidity, fluoride, iron, nitrate, and E. coli.",
    "Treatment must be chosen based on test results, not guesswork — different contaminants require different removal technologies.",
    "Fluoride above 1.5 mg/L is common in Kenya's Rift Valley and can cause dental and skeletal fluorosis if left untreated.",
    "A treatment system is only as reliable as its maintenance — filters, UV lamps, and softener salt must be replaced on schedule.",
  ],
  tableOfContents: [
    "Why Borehole Water Must Be Tested",
    "When Should Borehole Water Be Tested?",
    "What Does a Water Quality Test Include?",
    "How to Read a Borehole Water Test Report",
    "Common Borehole Water Problems",
    "Choosing the Right Water Treatment",
    "Borehole Water for Different Uses",
    "Water Treatment Maintenance",
    "Common Water Treatment Mistakes",
  ],
  faqs: [
    {
      question: "Is borehole water safe to drink without treatment?",
      answer:
        "Not always. Borehole water can be contaminated by bacteria, nitrates from sewage, fluoride, iron, and other minerals. The only way to confirm it is safe is through laboratory testing against WHO and KEBS drinking water standards. Some boreholes are safe untreated, but many require at least filtration and disinfection.",
    },
    {
      question: "How often should I test my borehole water?",
      answer:
        "Test immediately after drilling, then every 6 to 12 months for routine monitoring. You should also test after flooding, nearby construction, changes in the water's appearance, taste, or odour, or if anyone in the household experiences unexplained illness.",
    },
    {
      question: "What is the most dangerous contaminant in Kenyan borehole water?",
      answer:
        "Microbiological contamination (E. coli and coliforms) is the most immediate health risk, causing diarrhoeal disease. Fluoride is a serious long-term risk in many areas, particularly the Rift Valley, where levels above the WHO limit of 1.5 mg/L are common and can cause dental and skeletal fluorosis.",
    },
    {
      question: "Can I treat borehole water myself without testing first?",
      answer:
        "No. Treating water without testing can waste money on the wrong equipment and leave real contaminants untreated. For example, a standard filter will not remove fluoride or bacteria, and a water softener will not remove iron. Always test first, then choose treatment based on the results.",
    },
    {
      question: "How much does borehole water treatment cost in Kenya?",
      answer:
        "Costs vary widely depending on the contaminants present. A basic sediment filter and UV sterilisation system may cost KSh 40,000 to 80,000, while a multi-stage system for fluoride, iron, and bacteria removal can range from KSh 150,000 to over KSh 400,000. A water test (typically KSh 5,000 to 15,000) should always come first.",
    },
  ],
  caseStudy: {
    challenge:
      "A primary school in Nakuru County relied on a borehole for drinking water, but students began showing signs of dental fluorosis — brown mottling on teeth caused by excess fluoride. Initial testing revealed fluoride at 3.2 mg/L, more than double the WHO recommended limit of 1.5 mg/L.",
    assessment:
      "Our engineers collected water samples and sent them to an accredited laboratory for full physical, chemical, and microbiological analysis. The results confirmed fluoride as the primary concern, alongside moderate turbidity. All other parameters fell within safe limits.",
    solution:
      "We designed a two-stage treatment system: a sediment pre-filter to reduce turbidity, followed by an activated alumina fluoride removal unit sized for the school's daily demand. The system was installed at the main storage tank so all distributed water passed through treatment.",
    implementation:
      "Installation was completed within two days during a school holiday to avoid disruption. The system was commissioned with flow rates verified, and school staff were trained on filter replacement and simple monitoring.",
    result:
      "Post-installation testing confirmed fluoride levels had dropped below 1.0 mg/L, well within the WHO limit. The system now serves over 400 students with safe drinking water, and the school retests water quality every six months as part of a maintenance schedule.",
  },
  practicalSummary: [
    "Test borehole water immediately after drilling and at least every 6 to 12 months thereafter.",
    "Request a full panel test covering physical, chemical, and microbiological parameters, not just a basic check.",
    "Choose treatment based on test results — match each contaminant to the correct removal technology.",
    "Factor in all intended uses (drinking, irrigation, livestock) when deciding the treatment level required.",
    "Budget for ongoing maintenance: filter replacements, UV lamp changes, softener salt, and periodic retesting.",
  ],
  sources: [
    { name: "WHO Guidelines for Drinking-water Quality (4th edition)" },
    { name: "Kenya Bureau of Standards (KEBS) — KS 765: Drinking water specification" },
    { name: "Kenya Water Act 2016" },
    { name: "NEMA Water Quality Regulations, 2006 (Legal Notice No. 120)" },
  ],
  cta: {
    title: "Concerned About Your Borehole Water Quality?",
    description:
      "Our engineers can collect samples, arrange accredited laboratory testing, and design a treatment system tailored to your water quality report.",
    buttonText: "Request Water Testing",
    href: "/quote",
  },
  content: [
    {
      heading: "Why Borehole Water Must Be Tested",
      paragraphs: [
        "There is a common assumption that water drawn from deep underground is naturally clean and safe to drink. In reality, borehole water is only as safe as the geology and surroundings it passes through. Groundwater can be contaminated by agricultural runoff carrying nitrates and pesticides, by leaking septic tanks and pit latrines introducing bacteria, and by naturally occurring minerals such as fluoride, iron, and arsenic dissolved from the surrounding rock. None of these contaminants are visible to the naked eye, and many have no taste or smell.",
        "In Kenya, the legal and health implications of ignoring water quality are significant. The Kenya Water Act 2016 and NEMA water quality regulations place responsibility on the borehole owner to ensure water is fit for its intended use. For institutions such as schools, hospitals, and commercial premises, providing unsafe water is a serious liability. Health-wise, long-term exposure to contaminants like fluoride can cause irreversible dental and skeletal fluorosis, while bacterial contamination is a leading cause of waterborne disease. Testing is the only reliable way to know what is in your water.",
        "Testing also protects your investment. A borehole is a major capital expense, and the treatment system that supports it should be designed around the actual water chemistry, not assumptions. A water quality report allows an engineer to specify the correct filters, softeners, or sterilisation equipment from the outset, avoiding the cost of retrofitting the wrong solution later.",
      ],
    },
    {
      heading: "When Should Borehole Water Be Tested?",
      paragraphs: [
        "The first test should happen immediately after drilling is completed and the borehole has been flushed and developed. This initial analysis establishes a baseline for your water quality and determines what treatment, if any, is required before the water is put into use. Skipping this step means drinking and using water of unknown quality, which is a risk no property owner should accept.",
        "After the initial test, routine monitoring should follow every 6 to 12 months. Groundwater quality is not static. Seasonal rainfall can shift contaminant levels, nearby land use can change, and the borehole structure itself can degrade over time. Regular testing catches problems early, before they affect health or damage plumbing and appliances. For domestic boreholes, an annual test is a reasonable minimum, while institutions and commercial users should lean towards twice-yearly testing.",
        "You should also test outside the routine schedule whenever there is a specific reason for concern. Test after flooding or heavy rains that could wash surface contaminants into the aquifer, after nearby construction or excavation that might disturb the borehole casing, and after any noticeable change in the water's appearance, taste, or odour. Cloudy water, a sudden metallic taste, or an unusual smell are all warning signs that warrant an immediate test.",
      ],
    },
    {
      heading: "What Does a Water Quality Test Include?",
      paragraphs: [
        "A complete borehole water quality test is divided into three categories: physical, chemical, and microbiological. Physical parameters describe the water's appearance and general characteristics. The World Health Organization recommends a pH between 6.5 and 8.5 for drinking water, as water outside this range can taste unpleasant and accelerate corrosion or scaling in pipes. Turbidity should be below 5 NTU (nephelometric turbidity units), as cloudy water can shield microorganisms from disinfection and carry particles of soil or organic matter. Total dissolved solids (TDS) should be below 1,000 mg/L; higher levels give water an unpleasant taste and can indicate excessive mineral content.",
        "Chemical parameters measure dissolved substances that can affect health or usability. Fluoride should be below 1.5 mg/L according to WHO guidelines, as higher levels cause dental and skeletal fluorosis, a widespread problem in Kenya's Rift Valley. Iron should be below 0.3 mg/L to avoid metallic taste, staining of fixtures and laundry, and bacterial iron deposits in pipes. Nitrate should be below 10 mg/L, particularly important where septic systems or fertilisers are nearby, as elevated nitrate is dangerous for infants. Other parameters include total hardness, sodium, and in some regions arsenic, which should be below 0.01 mg/L.",
        "Microbiological parameters are the most critical for immediate health. A drinking water sample should show zero E. coli per 100 ml and zero total coliforms per 100 ml. The presence of E. coli confirms faecal contamination, which means disease-causing organisms may be present. Total coliforms are a broader indicator of contamination and suggest that the water source or distribution system is vulnerable to intrusion. Even if physical and chemical results are acceptable, failing the microbiological test means the water is not safe to drink without disinfection.",
      ],
    },
    {
      heading: "How to Read a Borehole Water Test Report",
      paragraphs: [
        "A laboratory water quality report lists each tested parameter alongside your sample's result, the recommended limit, and a pass or fail interpretation. Learning to read this report helps you understand your water and have an informed conversation with your engineer about treatment. Below is an illustrative example of how results are typically presented, with sample values drawn from a common borehole profile in Kenya.",
        "pH: Result 7.2, Recommended Limit 6.5 to 8.5, Interpretation: Within range, no action required. Turbidity: Result 8.3 NTU, Recommended Limit below 5 NTU, Interpretation: Above limit, sediment filtration recommended. Fluoride: Result 2.1 mg/L, Recommended Limit below 1.5 mg/L, Interpretation: Above limit, fluoride removal required for drinking water. Iron: Result 0.1 mg/L, Recommended Limit below 0.3 mg/L, Interpretation: Within range, no action required. E. coli: Result 4 per 100 ml, Recommended Limit 0 per 100 ml, Interpretation: Above limit, disinfection by UV or chlorination required before drinking.",
        "In this example, the water fails on three counts: turbidity, fluoride, and E. coli. Each failure points to a different treatment step, which is why a single report can result in a multi-stage system. Note that a parameter within range today does not guarantee it will remain so, which is the case for routine retesting. Always ask the laboratory or your engineer to explain any result you do not understand, and keep each report on file so you can track changes in water quality over time.",
      ],
    },
    {
      heading: "Common Borehole Water Problems",
      paragraphs: [
        "Iron is one of the most frequent borehole problems in Kenya. At concentrations above 0.3 mg/L, iron causes a metallic taste, reddish-brown staining of sinks, toilets, and laundry, and can support the growth of iron bacteria that create slime inside pipes and filters. While not usually a health hazard at the levels found in most boreholes, iron makes water unpleasant and damages fixtures over time.",
        "Hardness is another widespread issue, caused by dissolved calcium and magnesium. Hard water leaves scale deposits in kettles, pipes, and water heaters, reduces the effectiveness of soap and detergents, and shortens the lifespan of appliances. Fluoride is a particular concern in the Rift Valley and surrounding highland areas, where geological conditions produce borehole water with fluoride levels well above the 1.5 mg/L WHO limit. Long-term consumption causes dental fluorosis in children and, at higher exposures, skeletal fluorosis in adults.",
        "Salinity and elevated TDS affect boreholes in coastal and arid regions, where water can taste salty and be unsuitable for drinking or irrigation without treatment. Microbial contamination is a risk wherever a borehole is located near septic tanks, pit latrines, or animal enclosures, or where the wellhead is poorly sealed against surface runoff. Finally, sediment and turbidity appear when the borehole is newly drilled, when the aquifer is disturbed, or when the pump is placed too close to the bottom of the borehole, drawing in sand and silt.",
      ],
    },
    {
      heading: "Choosing the Right Water Treatment",
      paragraphs: [
        "Treatment must be matched to the contaminants identified in your water test, because no single device removes everything. For iron, the standard solution is oxidation followed by filtration, where air or a chemical oxidant converts dissolved iron into particles that a filter then captures. For hardness, a water softener using ion exchange replaces calcium and magnesium with sodium, preventing scale and improving soap performance. The softener must be sized to the water hardness level and regenerated regularly with salt.",
        "Fluoride removal requires a dedicated technology such as activated alumina adsorption or reverse osmosis. Activated alumina media is effective and relatively economical for moderate fluoride levels, while reverse osmosis provides broader purification and is preferred when multiple contaminants are present, though it produces a waste water stream and uses more energy. For bacterial contamination, ultraviolet (UV) sterilisation is the most common choice for whole-house treatment, provided the water is clear enough for UV light to penetrate. Chlorination is an alternative, particularly for stored water or where intermittent dosing is practical.",
        "Sediment and turbidity are addressed with cartridge or sand filtration as a first stage, which also protects downstream equipment. When a borehole has more than one problem, a multi-stage system combines these technologies in sequence, typically sediment filtration first, then iron or hardness removal, then fluoride removal if needed, and finally UV sterilisation as a last line against bacteria. The order matters, because each stage conditions the water for the next. A qualified engineer designs the system based on your report, flow rate requirements, and daily demand.",
      ],
    },
    {
      heading: "Borehole Water for Different Uses",
      paragraphs: [
        "The level of treatment required depends on how the water will be used. For drinking and cooking, the water must meet WHO drinking water guidelines in full, meaning all physical, chemical, and microbiological parameters must be within safe limits. This typically requires a complete treatment system and regular testing. There is no acceptable shortcut for water that people will consume.",
        "For general domestic use such as bathing, laundry, and toilet flushing, the treatment threshold is lower. Microbiological safety remains important, but moderate hardness or slightly elevated iron may be tolerated, though iron will still stain fixtures. Irrigation water quality is judged by different criteria, primarily salinity, sodium absorption ratio (SAR), and specific ion toxicity. High sodium relative to calcium and magnesium degrades soil structure over time, while high salinity reduces crop yields. A water test for irrigation should therefore include sodium, calcium, magnesium, and electrical conductivity.",
        "Livestock water has its own limits. Cattle and other animals are sensitive to fluoride and nitrate, and levels safe for short-term human contact may not be acceptable for daily animal consumption over a lifetime. Commercial and industrial users must match water quality to their process requirements, whether that is food preparation, manufacturing, or cooling. In every case, the starting point is the same: test the water, understand the requirements of the end use, and design treatment accordingly.",
      ],
    },
    {
      heading: "Water Treatment Maintenance",
      paragraphs: [
        "A treatment system is not a fit-and-forget installation. Each component has a service life that depends on water quality and usage. Sediment and cartridge filters typically need replacement every three to six months, or more frequently if the borehole carries heavy sediment. Iron removal filters require backwashing to clear accumulated particles, and the media itself is replaced periodically. Water softeners must be regenerated with salt on a schedule tied to water hardness and consumption, and the resin bed eventually needs replacement.",
        "UV sterilisation systems require particular attention. The UV lamp must be replaced annually, even if it still appears to be lit, because the ultraviolet output that actually kills bacteria drops below effective levels after roughly 9,000 hours of use. The quartz sleeve that protects the lamp must be cleaned regularly, as any film or scale on the glass blocks the light. Reverse osmosis membranes last two to three years with good pre-treatment but fail quickly if sediment or chlorine is allowed to reach them.",
        "After any maintenance that opens the system, such as a filter change or media replacement, the system should be sanitised and the water retested to confirm that treatment is still effective. We recommend keeping a simple maintenance log recording the date of each service, the parts replaced, and the next due date. This discipline is what separates a treatment system that delivers safe water for years from one that quietly fails and exposes users to contamination.",
      ],
    },
    {
      heading: "Common Water Treatment Mistakes",
      paragraphs: [
        "The most common mistake is testing the water once at drilling and never testing again. Water quality changes over time, and a system designed for the original report may no longer be adequate. The second mistake is the reverse: installing treatment without testing at all, which often results in equipment that does not address the actual problem. A filter bought on assumption does not remove fluoride, and a softener does not remove bacteria.",
        "Undersizing the treatment system is another frequent error. A system must be matched not only to the contaminants present but to the peak flow rate and daily volume the household or institution demands. An undersized unit cannot keep up, allowing untreated water to bypass the system or causing filters to clog prematurely. Equally important is neglecting pre-treatment for high-sediment boreholes. Without a sediment filter upstream, iron removal media, softener resin, and UV sleeves all foul rapidly, shortening service life and reducing effectiveness.",
        "Finally, ignoring maintenance schedules defeats the purpose of having a treatment system at all. A UV lamp past its service life provides no disinfection. A softener out of salt stops softening water. Clogged filters reduce flow and can become a breeding ground for bacteria. The solution is simple: follow the manufacturer's service intervals, keep a maintenance log, and retest the water after any major service to confirm the system is still performing as designed.",
      ],
    },
  ],
};

export default article;
