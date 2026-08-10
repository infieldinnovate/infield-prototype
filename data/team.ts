// ============================================
// Team Members Data
// ============================================

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  qualifications: string[];
  experience: string;
  social?: {
    linkedin?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "tm1",
    name: "James Mwangi",
    role: "Founder & Principal Engineer",
    bio: "A licensed electrical engineer with over 20 years of experience, James founded Infield Innovations in 2009 and has led its growth into a multi-disciplinary engineering firm.",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    qualifications: [
      "BSc Electrical Engineering",
      "EPRA Licensed",
      "ISO 9001 Lead Auditor",
    ],
    experience: "20+ years",
    social: { linkedin: "#" },
  },
  {
    id: "tm2",
    name: "Grace Wanjiru",
    role: "Head of Solar Division",
    bio: "Grace leads our solar energy team, specialising in commercial and industrial solar system design and installation across Kenya.",
    image:
      "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600",
    qualifications: [
      "MSc Renewable Energy",
      "STAK Certified",
      "NABCEP Solar Professional",
    ],
    experience: "12 years",
    social: { linkedin: "#" },
  },
  {
    id: "tm3",
    name: "Peter Kamau",
    role: "Senior Plumbing Engineer",
    bio: "Peter oversees all plumbing and water systems projects, bringing deep expertise in commercial and residential installations.",
    image:
      "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600",
    qualifications: [
      "Diploma in Plumbing Engineering",
      "Nairobi County Licensed",
      "Backflow Prevention Certified",
    ],
    experience: "15 years",
    social: { linkedin: "#" },
  },
  {
    id: "tm4",
    name: "Esther Njeri",
    role: "Borehole & Water Systems Lead",
    bio: "Esther manages our borehole drilling division, from geological survey through to pump installation and water treatment.",
    image:
      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600",
    qualifications: [
      "BSc Geology",
      "WRA Certified Driller",
      "Water Quality Specialist",
    ],
    experience: "10 years",
    social: { linkedin: "#" },
  },
  {
    id: "tm5",
    name: "Daniel Otieno",
    role: "Operations & Safety Manager",
    bio: "Daniel ensures every project meets our safety standards and operational excellence, coordinating teams across all service divisions.",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
    qualifications: [
      "BSc Occupational Safety",
      "DOSH Certified",
      "First Aid Instructor",
    ],
    experience: "8 years",
    social: { linkedin: "#" },
  },
  {
    id: "tm6",
    name: "Faith Achieng",
    role: "Irrigation Systems Designer",
    bio: "Faith designs smart irrigation systems for residential estates, commercial properties, and agricultural clients throughout Kenya.",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    qualifications: [
      "BSc Agricultural Engineering",
      "Smart Irrigation Certified",
      "Water Audit Specialist",
    ],
    experience: "7 years",
    social: { linkedin: "#" },
  },
];
