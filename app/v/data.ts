export type EmployeeStatus = "Active" | "Suspended" | "Expired";

export interface Employee {
  verificationCode: string;
  fullName: string;
  jobTitle: string;
  department: string;
  photo?: string;
  status: EmployeeStatus;
}

export type LookupResult =
  | { found: true; employee: Employee }
  | { found: false; employee: null };

// MOCK DATA — Replaceable with Supabase or any database
const employees: Employee[] = [
  {
    verificationCode: "Q7W3NZ5R",
    fullName: "Wadeya Wicklife",
    jobTitle: "Lead Technician",
    department: "Engineering",
    photo: "/team_profile/wadeya.png",
    status: "Active",
  },
  {
    verificationCode: "8XJ4PKM2",
    fullName: "Collince Ngicho",
    jobTitle: "Technician",
    department: "Engineering",
    photo: "/team_profile/ngicho.png",
    status: "Active",
  },
  {
    verificationCode: "F9K2LMP8",
    fullName: "Mary Odhiambo",
    jobTitle: "Snr. Operations",
    department: "Operations",
    photo: "/team_profile/mary.jpg",
    status: "Active",
  },
  {
    verificationCode: "M4T6CY1K",
    fullName: "Jared Oluoch",
    jobTitle: "Lead Engineer",
    department: "Engineering",
    photo: "/team_profile/jared.png",
    status: "Active",
  },
  {
    verificationCode: "R6KF1WZS",
    fullName: "Alex Juma",
    jobTitle: "Technician",
    department: "Engineering",
    photo: "/team_profile/alex.jpg",
    status: "Active",
  },
  {
    verificationCode: "Z8P4RK2N",
    fullName: "Josephine Anyango",
    jobTitle: "Sales Manager",
    department: "Sales & Marketing",
    photo: "/team_profile/josephine.jpg",
    status: "Active",
  },
];

// SHARED LOOKUP — Only this function changes when migrating to a database
export function lookupEmployee(verificationCode: string): LookupResult {
  const employee = employees.find(
    (e) => e.verificationCode.toUpperCase() === verificationCode.toUpperCase(),
  );
  if (employee) {
    return { found: true, employee };
  }
  return { found: false, employee: null };
}
