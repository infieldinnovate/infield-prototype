// ============================================
// Equipment & Technology Data
// ============================================

export interface Equipment {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}

export const equipment: Equipment[] = [
  {
    id: 'e1',
    name: 'Thermal Imaging Cameras',
    description: 'Advanced thermal diagnostics for electrical panels, solar arrays, and plumbing systems.',
    icon: 'ThermometerSun',
    category: 'Diagnostics',
  },
  {
    id: 'e2',
    name: 'Borehole Drilling Rigs',
    description: 'Heavy-duty drilling rigs capable of reaching depths up to 250 metres in any geology.',
    icon: 'Drill',
    category: 'Drilling',
  },
  {
    id: 'e3',
    name: 'Solar Site Survey Tools',
    description: 'Professional sun-path analysis and shading assessment equipment for optimal panel placement.',
    icon: 'Sun',
    category: 'Solar',
  },
  {
    id: 'e4',
    name: 'Pipe Inspection Cameras',
    description: 'High-resolution inspection cameras for drain and sewer line diagnostics.',
    icon: 'Camera',
    category: 'Plumbing',
  },
  {
    id: 'e5',
    name: 'Power Quality Analysers',
    description: 'Industrial-grade power quality monitoring for commercial electrical installations.',
    icon: 'Activity',
    category: 'Electrical',
  },
  {
    id: 'e6',
    name: 'Water Quality Testing Kits',
    description: 'Comprehensive water testing equipment for borehole and irrigation water analysis.',
    icon: 'Droplets',
    category: 'Water',
  },
  {
    id: 'e7',
    name: 'Smart Irrigation Controllers',
    description: 'Weather-based smart controllers with remote monitoring and zone management.',
    icon: 'CloudRain',
    category: 'Irrigation',
  },
  {
    id: 'e8',
    name: 'Leak Detection Equipment',
    description: 'Acoustic and tracer gas leak detection for precise underground pipe location.',
    icon: 'Waves',
    category: 'Plumbing',
  },
];

export interface SafetyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const safetyCommitments: SafetyItem[] = [
  {
    id: 's1',
    title: 'Certified Safety Team',
    description: 'All technicians are trained in occupational health and safety, with regular refresher courses.',
    icon: 'HardHat',
  },
  {
    id: 's2',
    title: 'Risk Assessment First',
    description: 'Every project begins with a comprehensive risk assessment and site safety briefing.',
    icon: 'ClipboardCheck',
  },
  {
    id: 's3',
    title: 'Quality Materials Only',
    description: 'We use certified, warrantied materials from trusted manufacturers — never substandard parts.',
    icon: 'BadgeCheck',
  },
  {
    id: 's4',
    title: 'Full Insurance Cover',
    description: 'Comprehensive liability insurance and workmanship warranty on every project we undertake.',
    icon: 'ShieldCheck',
  },
  {
    id: 's5',
    title: 'Compliance Guaranteed',
    description: 'All work meets or exceeds Kenyan regulatory standards and international best practices.',
    icon: 'FileCheck',
  },
  {
    id: 's6',
    title: 'Continuous Training',
    description: 'Our team undergoes ongoing professional development to stay current with industry standards.',
    icon: 'GraduationCap',
  },
];
