// ============================================
// Our Process Data
// ============================================

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Consultation',
    description: 'We discuss your needs, goals, and project scope to understand exactly what you require.',
    icon: 'MessageCircle',
  },
  {
    step: 2,
    title: 'Site Visit',
    description: 'Our engineers visit your property to assess conditions, take measurements, and identify challenges.',
    icon: 'MapPin',
  },
  {
    step: 3,
    title: 'Design',
    description: 'We create a detailed system design tailored to your property and requirements.',
    icon: 'PenTool',
  },
  {
    step: 4,
    title: 'Quotation',
    description: 'You receive a transparent, itemised quote with no hidden costs or surprises.',
    icon: 'FileText',
  },
  {
    step: 5,
    title: 'Installation',
    description: 'Our certified technicians execute the installation efficiently and to the highest standards.',
    icon: 'Wrench',
  },
  {
    step: 6,
    title: 'Testing',
    description: 'Every system is thoroughly tested and commissioned to ensure safety and performance.',
    icon: 'CheckCircle2',
  },
  {
    step: 7,
    title: 'Handover',
    description: 'We walk you through your new system, provide documentation, and answer all questions.',
    icon: 'Handshake',
  },
  {
    step: 8,
    title: 'Maintenance',
    description: 'Ongoing support and maintenance to keep your systems performing optimally for years.',
    icon: 'Settings',
  },
];
