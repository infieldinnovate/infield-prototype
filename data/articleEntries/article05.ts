import type { Article } from "@/data/articles";

const article: Article = {
  id: "art05",
  title: "Borehole Water Quality Testing & Treatment in Kenya",
  slug: "borehole-water-quality-testing-treatment",
  excerpt:
    "Borehole water should be tested before use. Learn what to test, how results guide treatment, and how to maintain a reliable water-treatment system.",
  category: "boreholes",
  image: "/articles/borehole-3645837.jpg",
  readingTime: "5 min read",
  publishDate: "2025-02-10",
  authorId: "tm1",
  reviewerId: "tm4",
  featured: false,
  tags: [
    "borehole",
    "water quality",
    "testing",
    "treatment",
    "safe water",
    "Kenya",
  ],
  relatedServiceSlugs: ["boreholes", "water-storage"],

  keyTakeaways: [
    "Borehole water is not automatically safe for drinking; test it before use and monitor it according to the intended use and risk.",
    "Testing should cover the physical, chemical and microbiological parameters relevant to the water source and its application.",
    "Treatment should be selected from laboratory results rather than assumptions about the area or borehole depth.",
    "Fluoride, iron, hardness, salinity and microbiological contamination are among the issues that may require treatment in groundwater.",
    "A treatment system needs correct sizing, routine servicing and periodic water-quality checks to remain effective.",
  ],

  tableOfContents: [
    "Why Test Borehole Water?",
    "What Should Be Tested?",
    "How Results Determine Treatment",
    "Treatment for Different Uses",
    "Cost and Maintenance",
    "What to Expect from a Professional Service",
  ],

  faqs: [
    {
      question: "Is borehole water safe to drink?",
      answer:
        "Not automatically. Groundwater can contain microorganisms or naturally occurring chemicals that are not visible, and the only reliable way to assess suitability is through appropriate laboratory testing against the requirements for the intended use.",
    },
    {
      question: "How often should borehole water be tested?",
      answer:
        "There is no single interval that suits every borehole. Testing frequency should reflect the intended use, source vulnerability, treatment system and applicable regulatory or institutional requirements. Retesting is also appropriate after changes in water quality, flooding, borehole work or treatment-system problems.",
    },
    {
      question: "What treatment does borehole water usually need?",
      answer:
        "It depends on the test results. Sediment may require filtration, bacteria may require disinfection, hardness may require softening, and elevated fluoride or salinity may require specialised treatment. Some boreholes may require little or no treatment for a particular use.",
    },
    {
      question:
        "Can the same borehole water be used for drinking and irrigation?",
      answer:
        "Possibly, but the quality requirements are different. Drinking water requires a higher level of control, while irrigation is assessed using parameters such as salinity and sodium-related effects on soil. Test the water against the requirements of each intended use.",
    },
  ],

  practicalSummary: [
    "Test the water after borehole development before commissioning drinking-water use.",
    "Use a laboratory report to identify contaminants and set treatment requirements.",
    "Size treatment equipment for both water quality and actual flow demand.",
    "Maintain filters, dosing or disinfection equipment according to manufacturer requirements.",
    "Retest when the source, water quality or treatment performance changes.",
  ],

  sources: [
    {
      name: "Water Resources Authority (WRA), Kenya — groundwater and water-use permitting requirements",
    },
    {
      name: "NEMA — Environmental Management and Co-ordination (Water Quality) Regulations, 2024, Legal Notice 177 of 2024, as amended",
    },
    {
      name: "Kenya Bureau of Standards — KS EAS 12:2018, Potable Water Specification",
    },
    {
      name: "World Health Organization — Guidelines for Drinking-water Quality",
    },
  ],

  cta: {
    title: "Need Your Borehole Water Tested?",
    description:
      "We can arrange water sampling, laboratory analysis and treatment design based on the actual quality of your borehole water and its intended use.",
    buttonText: "Request Water Testing",
    href: "/quote",
  },

  content: [
    {
      heading: "Why Test Borehole Water?",
      paragraphs: [
        "Borehole water can look clean while containing microorganisms, dissolved minerals or other substances that affect health, taste, plumbing or suitability for irrigation. Testing establishes what is actually present instead of relying on assumptions about groundwater depth or location.",
        "Testing is also the starting point for treatment design. A treatment system should remove a confirmed problem at the required flow rate and for the intended use. Testing first avoids paying for equipment that does not address the real water-quality issue.",
      ],
    },

    {
      heading: "What Should Be Tested?",
      paragraphs: [
        "A professional assessment normally considers three groups of parameters: physical, chemical and microbiological. The exact panel should reflect the borehole, local conditions and intended use rather than using the same test package for every site.",
        "For drinking-water applications, testing may include parameters such as pH, turbidity, electrical conductivity or TDS, hardness, iron, fluoride, nitrate and microbiological indicators such as E. coli. Additional parameters may be required where local geology, land use or the intended application creates a specific risk.",
        "Kenya's potable-water standard is KS EAS 12:2018, while current environmental water-quality requirements are contained in the 2024 Water Quality Regulations. WHO guidance also provides internationally recognised drinking-water benchmarks, including a fluoride guideline value of 1.5 mg/L. citeturn213626search0turn569805search1turn213626search29",
      ],
    },

    {
      heading: "How Results Determine Treatment",
      paragraphs: [
        "The treatment process should follow the test report. There is no single filter that removes every groundwater contaminant.",
        "Sediment and turbidity may require filtration. Microbiological contamination may require disinfection such as ultraviolet treatment or chlorination, depending on the system. Hardness can be managed with a water softener, while elevated fluoride may require technologies such as activated alumina or reverse osmosis. Salinity and high dissolved solids may require more advanced treatment.",
        "The treatment train must also match the required flow and daily demand. Pre-treatment is often important because excessive sediment or other contaminants can reduce the performance and service life of downstream equipment.",
      ],
    },

    {
      heading: "Treatment for Different Uses",
      paragraphs: [
        "Drinking and cooking require the strictest control because the water is consumed directly. Treatment and monitoring should therefore be designed against the applicable potable-water requirements.",
        "Domestic non-potable uses such as washing or toilet flushing may have different treatment needs. Irrigation water is assessed differently, with attention to factors such as salinity, electrical conductivity and sodium-related effects on soil. Livestock and industrial users may also have application-specific quality requirements.",
        "The same borehole may therefore need different treatment points depending on how the water is distributed. Treating only the water that needs high-quality purification can sometimes reduce system size and operating cost.",
      ],
    },

    {
      heading: "Cost and Maintenance",
      paragraphs: [
        "Water-treatment cost varies with the contaminants present, required flow, daily consumption, treatment technology and installation conditions. A laboratory test is therefore more useful than a generic equipment price when preparing a project budget.",
        "Maintenance depends on the treatment process. Filters may need cleaning or replacement, softeners need regeneration and salt management, and disinfection equipment requires periodic inspection and replacement of consumable components. Follow the manufacturer's service requirements rather than relying on a fixed universal interval.",
        "Water quality should also be rechecked when the source changes, treatment performance declines, or there is a reason to suspect contamination. Keeping laboratory reports and maintenance records creates a useful performance history for the system.",
      ],
    },

    {
      heading: "What to Expect from a Professional Service",
      paragraphs: [
        "A professional water-quality service should begin with a clear definition of the intended use, proper sampling, laboratory analysis and interpretation of the results. The recommendation should then identify the contaminants of concern, the treatment process required and the expected maintenance requirements.",
        "For borehole owners, the final deliverables should include the laboratory report, treatment specification, operating guidance and a maintenance schedule. Where treatment is installed, commissioning should confirm that the system operates at the required flow and that the treated water meets the target quality requirements.",
      ],
    },
  ],
};

export default article;
