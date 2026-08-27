// app/v/data.ts

// ============================================
// Employee & Team Data
// SINGLE SOURCE OF TRUTH
// ============================================

export type EmployeeStatus = "Active" | "Suspended" | "Expired";

export interface Employee {
  id: string;

  // Verification
  verificationCode: string;
  status: EmployeeStatus;

  // Identity & employment
  fullName: string;
  jobTitle: string;
  department: string;
  employeeNumber: string;
  phone: string;

  // Public team profile
  bio: string;
  photo: string;
  qualifications: string[];
  experience: string;

  // Social
  social?: {
    linkedin?: string;
  };
}

export type LookupResult =
  | {
      found: true;
      employee: Employee;
    }
  | {
      found: false;
      employee: null;
    };

// ============================================
// EMPLOYEES
// ============================================

export const employees: Employee[] = [
  {
    id: "tm1",
    verificationCode: "Q7W3NZ5R",
    status: "Active",

    fullName: "Wadeya Wicklife",
    jobTitle: "Lead Technician",
    department: "Engineering",
    employeeNumber: "EMP-001",
    phone: "+254712345678",

    bio: "Wadeya is a lead technician supporting engineering installations, maintenance, and field operations, with a strong focus on reliable project delivery, technical quality, and safety.",

    photo: "/team_profile/wadeya.png",

    qualifications: [
      "Technical Engineering Qualification",
      "Electrical & Engineering Systems Training",
      "Workplace Health & Safety Training",
    ],

    experience: "7+ years",

    social: {
      linkedin: "#",
    },
  },

  {
    id: "tm2",
    verificationCode: "8XJ4PKM2",
    status: "Active",

    fullName: "Collince Ngicho",
    jobTitle: "Technician",
    department: "Engineering",
    employeeNumber: "EMP-002",
    phone: "+254723456789",

    bio: "Collince supports engineering installation, maintenance, troubleshooting, and field operations, helping deliver dependable technical solutions for residential, commercial, and institutional projects.",

    photo: "/team_profile/ngicho.png",

    qualifications: [
      "Technical Engineering Qualification",
      "Electrical & Mechanical Systems Training",
      "Workplace Health & Safety Training",
    ],

    experience: "5+ years",

    social: {
      linkedin: "#",
    },
  },

  {
    id: "tm3",
    verificationCode: "F9K2LMP8",
    status: "Active",

    fullName: "Mary Odhiambo",
    jobTitle: "Snr. Operations",
    department: "Operations",
    employeeNumber: "EMP-003",
    phone: "+254734567890",

    bio: "Mary supports the coordination of company operations and project activities, helping ensure efficient resource management, client service, scheduling, and smooth delivery across service divisions.",

    photo: "/team_profile/mary.jpg",

    qualifications: [
      "Operations Management Training",
      "Project Coordination Training",
      "Workplace Health & Safety Training",
    ],

    experience: "8+ years",

    social: {
      linkedin: "#",
    },
  },

  {
    id: "tm4",
    verificationCode: "M4T6CY1K",
    status: "Active",

    fullName: "Jared Oluoch",
    jobTitle: "Lead Engineer",
    department: "Engineering",
    employeeNumber: "EMP-004",
    phone: "+254745678901",

    bio: "Jared leads engineering activities and provides technical oversight across projects, supporting system design, implementation, troubleshooting, and quality assurance.",

    photo: "/team_profile/jared.png",

    qualifications: [
      "BSc Engineering",
      "Professional Engineering Training",
      "Workplace Health & Safety Training",
    ],

    experience: "10+ years",

    social: {
      linkedin: "#",
    },
  },

  {
    id: "tm5",
    verificationCode: "R6KF1WZS",
    status: "Active",

    fullName: "Alex Juma",
    jobTitle: "Technician",
    department: "Engineering",
    employeeNumber: "EMP-005",
    phone: "+254756789012",

    bio: "Alex supports technical installations, maintenance, inspections, and field service activities, contributing to the reliable execution of engineering projects.",

    photo: "/team_profile/alex.jpg",

    qualifications: [
      "Technical Engineering Qualification",
      "Installation & Maintenance Training",
      "Workplace Health & Safety Training",
    ],

    experience: "5+ years",

    social: {
      linkedin: "#",
    },
  },

  {
    id: "tm6",
    verificationCode: "Z8P4RK2N",
    status: "Active",

    fullName: "Josephine Anyango",
    jobTitle: "Sales Manager",
    department: "Sales & Marketing",
    employeeNumber: "EMP-006",
    phone: "+254767890123",

    bio: "Josephine leads sales and marketing activities, helping clients understand available engineering solutions, develop project requirements, and identify services suited to their needs.",

    photo: "/team_profile/josephine.jpg",

    qualifications: [
      "Sales & Marketing Qualification",
      "Business Development Training",
      "Customer Relationship Management Training",
    ],

    experience: "8+ years",

    social: {
      linkedin: "#",
    },
  },
];

// ============================================
// EMPLOYEE VERIFICATION
// ============================================

export function lookupEmployee(verificationCode: string): LookupResult {
  const normalizedCode = verificationCode.trim().toUpperCase();

  const employee = employees.find(
    (employee) => employee.verificationCode.toUpperCase() === normalizedCode,
  );

  if (employee) {
    return {
      found: true,
      employee,
    };
  }

  return {
    found: false,
    employee: null,
  };
}

// ============================================
// EMPLOYEE LOOKUP BY EMPLOYEE NUMBER
// ============================================

export function lookupEmployeeByNumber(employeeNumber: string): LookupResult {
  const normalized = employeeNumber.trim().toUpperCase();
  const employee = employees.find(
    (e) => e.employeeNumber.toUpperCase() === normalized,
  );
  if (employee) {
    return { found: true, employee };
  }
  return { found: false, employee: null };
}

// ============================================
// EMPLOYEE LOOKUP BY ID
// ============================================

export function getEmployeeById(id: string): Employee | undefined {
  return employees.find((e) => e.id === id);
}

// ============================================
// EMPLOYEE LOOKUP BY PHONE NUMBER
// ============================================

export function lookupEmployeeByPhone(phone: string): LookupResult {
  const normalized = phone.replace(/\s+/g, "");
  const employee = employees.find((e) => e.phone.replace(/\s+/g, "") === normalized);
  if (employee) {
    return { found: true, employee };
  }
  return { found: false, employee: null };
}
