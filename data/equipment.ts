// ============================================
// Equipment & Technology Data
// ============================================

import {
  Activity,
  Camera,
  CloudRain,
  Drill,
  Droplets,
  Sun,
  ThermometerSun,
  Waves,
  type LucideIcon,
} from "lucide-react";

export interface Equipment {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

export const equipment: Equipment[] = [
  {
    id: "e1",
    name: "Thermal Imaging Cameras",
    description:
      "Thermal inspection tools used to identify abnormal heat patterns in electrical panels, connections, solar equipment, and other systems.",
    icon: ThermometerSun,
    category: "Diagnostics",
  },
  {
    id: "e2",
    name: "Borehole Drilling Equipment",
    description:
      "Professional drilling equipment used for borehole construction, casing, development, and groundwater projects according to site conditions.",
    icon: Drill,
    category: "Drilling",
  },
  {
    id: "e3",
    name: "Solar Site Assessment Tools",
    description:
      "Tools and instruments used to assess solar exposure, shading, orientation, and site conditions during solar system planning.",
    icon: Sun,
    category: "Solar",
  },
  {
    id: "e4",
    name: "Pipe Inspection Cameras",
    description:
      "Inspection cameras used to identify blockages, damage, and other conditions inside accessible drainage and pipework.",
    icon: Camera,
    category: "Plumbing",
  },
  {
    id: "e5",
    name: "Power Quality Analysers",
    description:
      "Electrical measurement equipment used to assess voltage, current, power quality, and operating conditions in electrical installations.",
    icon: Activity,
    category: "Electrical",
  },
  {
    id: "e6",
    name: "Water Quality Testing Equipment",
    description:
      "Testing equipment used to assess key water-quality parameters and support appropriate treatment and water-system decisions.",
    icon: Droplets,
    category: "Water",
  },
  {
    id: "e7",
    name: "Smart Irrigation Controllers",
    description:
      "Programmable irrigation control technology used to manage watering schedules, zones, pumps, and automated irrigation systems.",
    icon: CloudRain,
    category: "Irrigation",
  },
  {
    id: "e8",
    name: "Leak Detection Equipment",
    description:
      "Specialized diagnostic equipment used to help locate concealed leaks and identify faults in water-supply and pipework systems.",
    icon: Waves,
    category: "Plumbing",
  },
];
