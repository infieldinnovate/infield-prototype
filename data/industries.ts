// ============================================
// Industries We Serve Data
// ============================================

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  services: string[];
  serviceSlug: string;
}

export const industries: Industry[] = [
  {
    id: 'i1',
    name: 'Residential',
    icon: 'Home',
    description: 'Complete engineering services for homes, apartments, and residential estates.',
    services: ['Electrical wiring', 'Solar installation', 'Plumbing', 'Irrigation systems'],
    serviceSlug: 'electrical',
  },
  {
    id: 'i2',
    name: 'Commercial',
    icon: 'Building2',
    description: 'Reliable solutions for offices, retail spaces, and commercial buildings.',
    services: ['Electrical fit-outs', 'Solar systems', 'Plumbing', 'Maintenance contracts'],
    serviceSlug: 'electrical',
  },
  {
    id: 'i3',
    name: 'Schools',
    icon: 'GraduationCap',
    description: 'Safe, efficient engineering for educational institutions and campuses.',
    services: ['Electrical safety', 'Solar energy', 'Plumbing', 'Water solutions'],
    serviceSlug: 'electrical',
  },
  {
    id: 'i4',
    name: 'Hospitals',
    icon: 'HeartPulse',
    description: 'Critical engineering services for healthcare facilities and clinics.',
    services: ['Backup power', 'Electrical systems', 'Plumbing', 'Water supply'],
    serviceSlug: 'electrical',
  },
  {
    id: 'i5',
    name: 'Hotels',
    icon: 'Hotel',
    description: 'Premium engineering solutions for hospitality and tourism properties.',
    services: ['Electrical', 'Solar', 'Plumbing', 'Irrigation'],
    serviceSlug: 'electrical',
  },
  {
    id: 'i6',
    name: 'Farms',
    icon: 'Wheat',
    description: 'Agricultural engineering — water supply, power, and irrigation solutions.',
    services: ['Borehole drilling', 'Solar pumps', 'Irrigation', 'Electrical'],
    serviceSlug: 'boreholes',
  },
  {
    id: 'i7',
    name: 'Government',
    icon: 'Landmark',
    description: 'Compliant engineering services for government and municipal projects.',
    services: ['Electrical', 'Solar', 'Boreholes', 'Infrastructure'],
    serviceSlug: 'electrical',
  },
  {
    id: 'i8',
    name: 'NGOs',
    icon: 'HandHeart',
    description: 'Sustainable engineering solutions for non-profit and community projects.',
    services: ['Solar', 'Boreholes', 'Water systems', 'Electrical'],
    serviceSlug: 'solar',
  },
  {
    id: 'i9',
    name: 'Manufacturing',
    icon: 'Factory',
    description: 'Industrial-grade engineering for factories and manufacturing facilities.',
    services: ['High-voltage electrical', 'Solar', 'Plumbing', 'Maintenance'],
    serviceSlug: 'electrical',
  },
];
