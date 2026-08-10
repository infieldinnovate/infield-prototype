// ============================================
// FAQs Data (Expanded)
// ============================================

export type FAQCategory =
  | 'General'
  | 'Solar'
  | 'Electrical'
  | 'Plumbing'
  | 'Boreholes'
  | 'Irrigation'
  | 'Products'
  | 'Installation'
  | 'Maintenance'
  | 'Warranty'
  | 'Payments';

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  helpful?: number;
}

export const faqCategories: FAQCategory[] = [
  'General',
  'Solar',
  'Electrical',
  'Plumbing',
  'Boreholes',
  'Irrigation',
  'Products',
  'Installation',
  'Maintenance',
  'Warranty',
  'Payments',
];

export const faqs: FAQ[] = [
  // General
  {
    id: 'g1',
    question: 'What services do you provide?',
    answer:
      'Infield Innovations provides a comprehensive range of engineering services including electrical installation and repairs, plumbing solutions, solar energy systems, irrigation design and installation, and borehole drilling. We serve both residential and commercial clients across Kenya.',
    category: 'General',
    helpful: 142,
  },
  {
    id: 'g2',
    question: 'Which areas do you serve?',
    answer:
      'We serve Meru and surrounding counties including Nairobi, Nyeri, Embu, Isiolo, and Thika. For commercial and large-scale projects, we extend our service area nationwide. Contact us to confirm we cover your location.',
    category: 'General',
    helpful: 98,
  },
  {
    id: 'g3',
    question: 'Do you provide free quotations?',
    answer:
      'Yes, we provide free, no-obligation quotes for all projects. For complex installations like solar or borehole drilling, we conduct a site visit to provide an accurate estimate. You can request a quote through our website or by phone.',
    category: 'General',
    helpful: 87,
  },
  {
    id: 'g4',
    question: 'How long does a project take?',
    answer:
      'Project timelines vary by scope. Simple repairs may take a few hours, while full installations like solar or borehole drilling can take 1-5 days. We provide a detailed timeline with every quote so you know exactly what to expect.',
    category: 'General',
    helpful: 76,
  },
  {
    id: 'g5',
    question: 'Are your technicians licensed and insured?',
    answer:
      'Yes, all our technicians are fully licensed, insured, and certified. We carry comprehensive liability insurance and workers\' compensation. Our electricians are Master Electrician certified, and all team members undergo regular training.',
    category: 'General',
    helpful: 65,
  },
  {
    id: 'g6',
    question: 'Do you offer emergency services?',
    answer:
      'Yes, we provide 24/7 emergency electrical and plumbing services. Call our emergency line at +254 718 338 810 for immediate assistance. Emergency rates apply for after-hours and weekend calls.',
    category: 'General',
    helpful: 54,
  },
  {
    id: 'g7',
    question: 'Can you help with permits and inspections?',
    answer:
      'Yes, we handle all necessary permits and coordinate inspections for every project. This is included in our service and ensures all work meets local codes and regulations.',
    category: 'General',
    helpful: 43,
  },
  // Solar
  {
    id: 's1',
    question: 'How much can I save with solar?',
    answer:
      'Most customers save 50-90% on their electricity bills. We provide detailed savings estimates during your consultation, taking into account your energy usage, roof orientation, and local utility rates. Many systems pay for themselves in 5-8 years.',
    category: 'Solar',
    helpful: 112,
  },
  {
    id: 's2',
    question: 'Do solar systems work during power outages?',
    answer:
      'Standard grid-tied solar systems shut off during outages for safety. However, with a battery storage system, your solar panels can continue powering your home during outages. We design systems with battery backup for energy independence.',
    category: 'Solar',
    helpful: 89,
  },
  {
    id: 's3',
    question: 'How long do batteries last?',
    answer:
      'Modern lithium-ion solar batteries typically last 10-15 years with proper maintenance. Most come with a 10-year warranty. Battery lifespan depends on usage patterns, depth of discharge, and environmental conditions.',
    category: 'Solar',
    helpful: 67,
  },
  {
    id: 's4',
    question: 'What warranty do you provide on solar systems?',
    answer:
      'Our solar panels come with a 25-year performance warranty. Inverters carry a 10-15 year warranty, and battery systems typically have 10-year warranties. All our workmanship is guaranteed for 2 years.',
    category: 'Solar',
    helpful: 58,
  },
  {
    id: 's5',
    question: 'Are there tax incentives for going solar?',
    answer:
      'Yes, the Kenyan government offers incentives for renewable energy investments, including VAT exemptions on solar equipment. We help you understand all available incentives and assist with the paperwork.',
    category: 'Solar',
    helpful: 45,
  },
  // Electrical
  {
    id: 'e1',
    question: 'Do you handle commercial installations?',
    answer:
      'Yes, we handle commercial electrical installations of all sizes — from office fit-outs to industrial facilities. Our team is experienced in high-voltage systems, backup power, and commercial code compliance.',
    category: 'Electrical',
    helpful: 72,
  },
  {
    id: 'e2',
    question: 'Are your electricians licensed?',
    answer:
      'Yes, all our electricians are fully licensed Master Electricians. We carry comprehensive insurance and ensure all work meets or exceeds local electrical codes and safety standards.',
    category: 'Electrical',
    helpful: 61,
  },
  {
    id: 'e3',
    question: 'Do you offer electrical maintenance?',
    answer:
      'Yes, we offer scheduled maintenance contracts for both residential and commercial properties. Regular maintenance prevents costly breakdowns, ensures safety, and extends the life of your electrical systems.',
    category: 'Electrical',
    helpful: 48,
  },
  {
    id: 'e4',
    question: 'Can you install backup generators?',
    answer:
      'Yes, we install backup generators for homes and businesses, including sizing, transfer switch setup, and wiring. We handle brands and models suited for the Kenyan market and ensure seamless integration with your electrical system.',
    category: 'Electrical',
    helpful: 39,
  },
  // Boreholes
  {
    id: 'b1',
    question: 'How deep should a borehole be?',
    answer:
      'Borehole depth varies by location and geology, typically ranging from 30 to 200 meters. Our geological survey helps determine the optimal drilling depth for your specific site to ensure adequate water yield.',
    category: 'Boreholes',
    helpful: 83,
  },
  {
    id: 'b2',
    question: 'Do you perform hydrogeological surveys?',
    answer:
      'Yes, we conduct professional hydrogeological surveys and site assessments before drilling. This includes geological analysis, water divining, and site selection to maximize the chances of hitting a productive water source.',
    category: 'Boreholes',
    helpful: 56,
  },
  {
    id: 'b3',
    question: 'Do you install pumps?',
    answer:
      'Yes, we install a full range of borehole pumps including submersible and surface pumps. We size the pump to your specific borehole depth and water demand, and include pressure tanks and control systems.',
    category: 'Boreholes',
    helpful: 47,
  },
  {
    id: 'b4',
    question: 'Can boreholes run on solar?',
    answer:
      'Absolutely! Solar-powered borehole pumps are an excellent solution for remote locations or reducing energy costs. We design and install solar pump systems that provide reliable water supply without grid electricity.',
    category: 'Boreholes',
    helpful: 52,
  },
  // Plumbing
  {
    id: 'p1',
    question: 'Do you handle emergency repairs?',
    answer:
      'Yes, we offer 24/7 emergency plumbing services for burst pipes, severe leaks, sewer backups, and other urgent issues. Call our emergency line for immediate dispatch. We carry common parts on our service vehicles for fast repairs.',
    category: 'Plumbing',
    helpful: 69,
  },
  {
    id: 'p2',
    question: 'Do you install water heaters?',
    answer:
      'Yes, we install, repair, and maintain all types of water heaters — traditional tank systems, tankless, heat pump, and solar water heaters. We help you choose the most energy-efficient option for your needs.',
    category: 'Plumbing',
    helpful: 44,
  },
  {
    id: 'p3',
    question: 'Do you replace old piping?',
    answer:
      'Yes, we handle complete repiping projects for homes and businesses. We replace galvanized, polybutylene, and aging copper pipes with modern, durable materials. We also handle trenchless pipe replacement where possible.',
    category: 'Plumbing',
    helpful: 36,
  },
  // Irrigation
  {
    id: 'ir1',
    question: 'Which irrigation system is best?',
    answer:
      'The best system depends on your landscape, soil type, and water pressure. We design custom solutions combining sprinkler heads for lawns, drip irrigation for gardens, and smart controllers. A site assessment helps us recommend the optimal system.',
    category: 'Irrigation',
    helpful: 58,
  },
  {
    id: 'ir2',
    question: 'Can irrigation be automated?',
    answer:
      'Yes! We install WiFi-enabled smart controllers that automate watering schedules based on weather forecasts, soil moisture, and plant needs. You can control everything from a mobile app, saving water and ensuring optimal landscape health.',
    category: 'Irrigation',
    helpful: 47,
  },
  {
    id: 'ir3',
    question: 'How much water can I save?',
    answer:
      'Smart irrigation systems can reduce water usage by 20-50% compared to traditional timer-based systems. Drip irrigation is even more efficient, using 60-70% less water than sprinklers for targeted watering.',
    category: 'Irrigation',
    helpful: 41,
  },
  // Products
  {
    id: 'pr1',
    question: 'Are your products certified and authentic?',
    answer:
      'Yes, every Infield product is fully certified and authentic. All products come with manufacturer warranties and our quality guarantee, meeting relevant industry standards and local regulatory requirements.',
    category: 'Products',
    helpful: 33,
  },
  {
    id: 'pr2',
    question: 'Do you sell products separately from installation?',
    answer:
      'Yes, we sell products both as part of installation packages and separately. Contact us for product pricing and availability. All products come with manufacturer warranties and our quality guarantee.',
    category: 'Products',
    helpful: 28,
  },
  {
    id: 'pr3',
    question: 'Are your products certified?',
    answer:
      'Yes, all our products are certified and meet relevant industry standards. Solar panels are IEC certified, electrical products meet KEBS standards, and all equipment meets or exceeds local regulatory requirements.',
    category: 'Products',
    helpful: 25,
  },
  // Installation
  {
    id: 'in1',
    question: 'How do I prepare for an installation?',
    answer:
      'Preparation varies by project. For solar, we need clear roof access. For boreholes, we need access for drilling equipment. We provide a detailed preparation checklist before every installation and handle all permits.',
    category: 'Installation',
    helpful: 38,
  },
  {
    id: 'in2',
    question: 'Do you clean up after installation?',
    answer:
      'Absolutely. We treat your property with respect. Our team cleans up all debris, removes packaging materials, and leaves the work area spotless. We also conduct a final walkthrough with you before considering the job complete.',
    category: 'Installation',
    helpful: 31,
  },
  // Maintenance
  {
    id: 'm1',
    question: 'What maintenance is required for solar panels?',
    answer:
      'Solar panels require minimal maintenance — periodic cleaning to remove dust and debris, and annual inspections to check connections and performance. We offer maintenance contracts that include cleaning, inspection, and performance monitoring.',
    category: 'Maintenance',
    helpful: 44,
  },
  {
    id: 'm2',
    question: 'How often should I service my borehole?',
    answer:
      'We recommend annual borehole pump servicing and water quality testing. Regular maintenance prevents pump failures, ensures water quality, and extends the life of your system. We offer scheduled service contracts.',
    category: 'Maintenance',
    helpful: 37,
  },
  // Warranty
  {
    id: 'w1',
    question: 'What warranties are offered?',
    answer:
      'All our workmanship is guaranteed for 2 years. Products carry manufacturer warranties ranging from 3 to 25 years depending on the product. Solar panels come with a 25-year performance warranty. Extended warranties are available for some products.',
    category: 'Warranty',
    helpful: 52,
  },
  {
    id: 'w2',
    question: 'What maintenance is required to keep warranties valid?',
    answer:
      'Most warranties require periodic professional maintenance. For solar, annual inspections are recommended. For boreholes, annual pump servicing. We provide documentation of all maintenance visits to support warranty claims.',
    category: 'Warranty',
    helpful: 34,
  },
  // Payments
  {
    id: 'pa1',
    question: 'Which payment methods are accepted?',
    answer:
      'We accept M-Pesa, bank transfers, and cash. For larger projects, we offer flexible payment plans. Solar installations may also qualify for special financing options with competitive rates.',
    category: 'Payments',
    helpful: 41,
  },
  {
    id: 'pa2',
    question: 'Do you offer phased payments?',
    answer:
      'Yes, for larger projects we offer phased payment plans. Typically, a deposit is required to begin work, with milestone payments at agreed stages. We discuss all payment options during the quotation process.',
    category: 'Payments',
    helpful: 35,
  },
];

export function getFAQsByCategory(category: FAQCategory): FAQ[] {
  return faqs.filter((f) => f.category === category);
}

export function searchFAQs(query: string): FAQ[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(q) ||
      f.answer.toLowerCase().includes(q) ||
      f.category.toLowerCase().includes(q)
  );
}
