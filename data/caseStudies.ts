// ============================================
// Case Studies / Featured Projects Data
// ============================================

export interface CaseStudy {
  id: string;
  title: string;
  service: string;
  serviceSlug: string;
  client: string;
  location: string;
  challenge: string;
  solution: string;
  outcome: string;
  image: string;
  metrics: { label: string; value: string }[];
  beforeImage: string;
  afterImage: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Commercial Solar Array for Manufacturing Facility',
    service: 'Solar',
    serviceSlug: 'solar',
    client: 'Manufacturing Co.',
    location: 'Nairobi, Kenya',
    challenge:
      'A manufacturing facility was facing high and unpredictable electricity costs, impacting profitability and operational planning.',
    solution:
      'We designed and installed a 120kW commercial solar array with battery backup, integrated with their existing electrical infrastructure and grid connection.',
    outcome:
      'The facility now generates 85% of its own energy, with a projected 6-year return on investment and full backup power during outages.',
    image:
      'https://images.pexels.com/photos/4338/photo.jpg?auto=compress&cs=tinysrgb&w=1200',
    metrics: [
      { label: 'Energy Savings', value: '85%' },
      { label: 'System Size', value: '120kW' },
      { label: 'ROI', value: '6 Years' },
      { label: 'CO₂ Reduced', value: '140 tons/yr' },
    ],
    beforeImage:
      'https://images.pexels.com/photos/280262/pexels-photo-280262.jpeg?auto=compress&cs=tinysrgb&w=1200',
    afterImage:
      'https://images.pexels.com/photos/4338/photo.jpg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
  },
  {
    id: 'cs2',
    title: 'Borehole Water Supply for 50-Acre Farm',
    service: 'Borehole',
    serviceSlug: 'borehole',
    client: 'Green Valley Farm',
    location: 'Meru, Kenya',
    challenge:
      'A commercial farm relied on expensive municipal water with unreliable supply, threatening crop yields and livestock.',
    solution:
      'We conducted a geological survey, drilled a 120-meter borehole, installed a submersible pump, and set up a complete water storage and distribution system.',
    outcome:
      'The farm now has an independent, reliable water supply delivering 25 litres per minute, with water quality certified safe for all uses.',
    image:
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: [
      { label: 'Depth', value: '120m' },
      { label: 'Flow Rate', value: '25 L/min' },
      { label: 'Water Tested', value: 'Certified' },
      { label: 'Independence', value: '100%' },
    ],
    beforeImage:
      'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1200',
    afterImage:
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
  },
  {
    id: 'cs3',
    title: 'Historic Home Complete Electrical Rewire',
    service: 'Electrical',
    serviceSlug: 'electrical',
    client: 'Private Residence',
    location: 'Nyeri, Kenya',
    challenge:
      'A historic home had outdated wiring that failed modern safety standards, with frequent tripping and safety concerns.',
    solution:
      'We performed a complete electrical rewire, upgraded the panel to 200A, installed 40 new circuits, and integrated smart home controls while preserving the home character.',
    outcome:
      'The home now meets all modern safety codes, with reliable power, LED lighting throughout, and smart home integration for energy management.',
    image:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: [
      { label: 'Panel Upgrade', value: '200A' },
      { label: 'New Circuits', value: '40' },
      { label: 'Duration', value: '2 Weeks' },
      { label: 'Inspection', value: 'Passed' },
    ],
    beforeImage:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
    afterImage:
      'https://images.pexels.com/photos/8961342/pexels-photo-8961342.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
  },
];

export function getFeaturedCaseStudies(limit = 3): CaseStudy[] {
  return caseStudies.filter((c) => c.featured).slice(0, limit);
}

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.id === id);
}
