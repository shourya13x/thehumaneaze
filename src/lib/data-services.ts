import type { Service, RecurringEngagement, SessionType, LearningCategory, Resource } from "./types";

/* ===========================================
   SERVICES — FULL LINE-ITEM PRICING
   =========================================== */

export const SERVICES: Service[] = [
  // --- HR Foundation ---
  { id: "s-1", segment: "HR Foundation", name: "HR Policy Development", priceMin: 5000, priceMax: 15000, priceUnit: "/policy set", isCustom: false },
  { id: "s-2", segment: "HR Foundation", name: "Employee Handbook Creation", priceMin: 10000, priceMax: 25000, priceUnit: "/handbook", isCustom: false },
  { id: "s-3", segment: "HR Foundation", name: "HR Process Documentation", priceMin: 8000, priceMax: 20000, priceUnit: "/process set", isCustom: false },
  { id: "s-4", segment: "HR Foundation", name: "Organizational Structure Design", priceMin: 15000, priceMax: 40000, priceUnit: "/project", isCustom: false },
  { id: "s-5", segment: "HR Foundation", name: "Job Description Framework", priceMin: 3000, priceMax: 10000, priceUnit: "/role set", isCustom: false },

  // --- Compliance & HR Operations ---
  { id: "s-6", segment: "Compliance & HR Operations", name: "Labor Law Compliance Audit", priceMin: 15000, priceMax: 35000, priceUnit: "/audit", isCustom: false },
  { id: "s-7", segment: "Compliance & HR Operations", name: "Statutory Compliance Setup", priceMin: 10000, priceMax: 30000, priceUnit: "/setup", isCustom: false },
  { id: "s-8", segment: "Compliance & HR Operations", name: "HR Operations Optimization", priceMin: 20000, priceMax: 50000, priceUnit: "/project", isCustom: false },
  { id: "s-9", segment: "Compliance & HR Operations", name: "Payroll & Benefits Structuring", priceMin: 12000, priceMax: 35000, priceUnit: "/structure", isCustom: false },
  { id: "s-10", segment: "Compliance & HR Operations", name: "Workplace Safety & POSH", priceMin: 8000, priceMax: 20000, priceUnit: "/program", isCustom: false },

  // --- Talent & Recruitment ---
  { id: "s-11", segment: "Talent & Recruitment", name: "Recruitment Strategy Design", priceMin: 15000, priceMax: 40000, priceUnit: "/strategy", isCustom: false },
  { id: "s-12", segment: "Talent & Recruitment", name: "Interview Framework Development", priceMin: 8000, priceMax: 20000, priceUnit: "/framework", isCustom: false },
  { id: "s-13", segment: "Talent & Recruitment", name: "Employer Branding Strategy", priceMin: 20000, priceMax: 50000, priceUnit: "/project", isCustom: false },
  { id: "s-14", segment: "Talent & Recruitment", name: "Onboarding Program Design", priceMin: 10000, priceMax: 30000, priceUnit: "/program", isCustom: false },
  { id: "s-15", segment: "Talent & Recruitment", name: "Campus & Early Career Programs", priceMin: 12000, priceMax: 35000, priceUnit: "/program", isCustom: false },

  // --- HR Strategy ---
  { id: "s-16", segment: "HR Strategy", name: "People Strategy Roadmap", priceMin: 25000, priceMax: 60000, priceUnit: "/roadmap", isCustom: false },
  { id: "s-17", segment: "HR Strategy", name: "Workforce Planning", priceMin: 20000, priceMax: 50000, priceUnit: "/plan", isCustom: false },
  { id: "s-18", segment: "HR Strategy", name: "Change Management Framework", priceMin: 18000, priceMax: 45000, priceUnit: "/framework", isCustom: false },
  { id: "s-19", segment: "HR Strategy", name: "Mergers & Acquisitions HR", priceMin: 30000, priceMax: 80000, priceUnit: "/project", isCustom: true },
  { id: "s-20", segment: "HR Strategy", name: "DEI Strategy Development", priceMin: 15000, priceMax: 40000, priceUnit: "/strategy", isCustom: false },

  // --- Performance & Development ---
  { id: "s-21", segment: "Performance & Development", name: "Performance Management System", priceMin: 20000, priceMax: 50000, priceUnit: "/system", isCustom: false },
  { id: "s-22", segment: "Performance & Development", name: "Competency Framework Design", priceMin: 15000, priceMax: 35000, priceUnit: "/framework", isCustom: false },
  { id: "s-23", segment: "Performance & Development", name: "Learning & Development Strategy", priceMin: 18000, priceMax: 45000, priceUnit: "/strategy", isCustom: false },
  { id: "s-24", segment: "Performance & Development", name: "Leadership Development Program", priceMin: 25000, priceMax: 60000, priceUnit: "/program", isCustom: false },
  { id: "s-25", segment: "Performance & Development", name: "Succession Planning", priceMin: 20000, priceMax: 50000, priceUnit: "/plan", isCustom: false },

  // --- Employee Experience ---
  { id: "s-26", segment: "Employee Experience", name: "Employee Engagement Strategy", priceMin: 15000, priceMax: 40000, priceUnit: "/strategy", isCustom: false },
  { id: "s-27", segment: "Employee Experience", name: "Culture Assessment & Design", priceMin: 20000, priceMax: 50000, priceUnit: "/project", isCustom: false },
  { id: "s-28", segment: "Employee Experience", name: "Rewards & Recognition Program", priceMin: 10000, priceMax: 30000, priceUnit: "/program", isCustom: false },
  { id: "s-29", segment: "Employee Experience", name: "Employee Wellbeing Program", priceMin: 12000, priceMax: 35000, priceUnit: "/program", isCustom: false },
  { id: "s-30", segment: "Employee Experience", name: "Internal Communications Strategy", priceMin: 10000, priceMax: 25000, priceUnit: "/strategy", isCustom: false },

  // --- HR Analytics & Technology ---
  { id: "s-31", segment: "HR Analytics & Technology", name: "HRMS Selection & Implementation", priceMin: 25000, priceMax: 70000, priceUnit: "/project", isCustom: false },
  { id: "s-32", segment: "HR Analytics & Technology", name: "HR Dashboard & Reporting", priceMin: 15000, priceMax: 40000, priceUnit: "/setup", isCustom: false },
  { id: "s-33", segment: "HR Analytics & Technology", name: "People Analytics Framework", priceMin: 20000, priceMax: 50000, priceUnit: "/framework", isCustom: false },
  { id: "s-34", segment: "HR Analytics & Technology", name: "HR Process Automation", priceMin: 18000, priceMax: 45000, priceUnit: "/process", isCustom: false },
  { id: "s-35", segment: "HR Analytics & Technology", name: "HR Tech Stack Audit", priceMin: 10000, priceMax: 25000, priceUnit: "/audit", isCustom: false },

  // --- Career & Talent Services ---
  { id: "s-36", segment: "Career & Talent Services", name: "Executive Career Coaching", priceMin: 8000, priceMax: 25000, priceUnit: "/engagement", isCustom: false },
  { id: "s-37", segment: "Career & Talent Services", name: "Resume & Profile Optimization", priceMin: 3000, priceMax: 8000, priceUnit: "/person", isCustom: false },
  { id: "s-38", segment: "Career & Talent Services", name: "Interview Preparation Coaching", priceMin: 5000, priceMax: 15000, priceUnit: "/person", isCustom: false },
  { id: "s-39", segment: "Career & Talent Services", name: "Career Transition Support", priceMin: 10000, priceMax: 30000, priceUnit: "/person", isCustom: false },
  { id: "s-40", segment: "Career & Talent Services", name: "Leadership Assessment", priceMin: 15000, priceMax: 40000, priceUnit: "/assessment", isCustom: false },
];

/* ===========================================
   RECURRING ENGAGEMENTS
   =========================================== */

export const RECURRING_ENGAGEMENTS: RecurringEngagement[] = [
  {
    id: "re-1",
    tier: "One-Time",
    title: "One-Time Consultation",
    description: "A focused engagement for a specific HR challenge or project. Ideal for audits, policy creation, or process design.",
  },
  {
    id: "re-2",
    tier: "Monthly",
    title: "Monthly Retainer",
    description: "Ongoing HR support with regular check-ins, advisory, and hands-on implementation assistance each month.",
  },
  {
    id: "re-3",
    tier: "Quarterly",
    title: "Quarterly Partnership",
    description: "Strategic HR reviews and project sprints every quarter, aligned with your business planning cycles.",
  },
  {
    id: "re-4",
    tier: "Half-Yearly",
    title: "Half-Yearly Engagement",
    description: "Deep-dive HR transformation programs with mid-year reviews, milestone tracking, and progress reporting.",
  },
  {
    id: "re-5",
    tier: "Yearly",
    title: "Annual HR Partnership",
    description: "A comprehensive, year-long partnership covering all HR functions with dedicated consultant access and strategic roadmapping.",
  },
];

/* ===========================================
   SESSION TYPES
   =========================================== */

export const SESSION_TYPES: SessionType[] = [
  {
    id: "sess-1",
    title: "Career Guidance",
    price: "₹2,500",
    description: "One-on-one session to explore career paths, set goals, and create an actionable career development plan.",
    icon: "Compass",
    bookingUrl: "#",
  },
  {
    id: "sess-2",
    title: "Resume Review",
    price: "₹1,500",
    description: "Expert review and feedback on your resume to maximize impact and get past applicant tracking systems.",
    icon: "FileText",
    bookingUrl: "#",
  },
  {
    id: "sess-3",
    title: "LinkedIn Optimization",
    price: "₹2,000",
    description: "Transform your LinkedIn profile into a powerful personal brand that attracts opportunities.",
    icon: "Linkedin",
    bookingUrl: "#",
  },
  {
    id: "sess-4",
    title: "Interview Preparation",
    price: "₹3,000",
    description: "Mock interviews with detailed feedback, strategy coaching, and confidence-building techniques.",
    icon: "MessageSquare",
    bookingUrl: "#",
  },
  {
    id: "sess-5",
    title: "HR Career Guidance",
    price: "₹2,500",
    description: "Specialized guidance for HR professionals looking to advance their career or transition within the field.",
    icon: "UserCheck",
    bookingUrl: "#",
  },
  {
    id: "sess-6",
    title: "HR Consultation",
    price: "₹5,000",
    description: "Strategic consultation for business leaders on people operations challenges and HR decision-making.",
    icon: "Briefcase",
    bookingUrl: "#",
  },
];

/* ===========================================
   LEARNING CATEGORIES
   =========================================== */

export const LEARNING_CATEGORIES: LearningCategory[] = [
  {
    id: "lc-1",
    name: "HR Learning",
    description: "Master the fundamentals and advanced practices of human resources management.",
    tags: ["Policies", "Compliance", "HRMS", "Operations", "Analytics"],
    icon: "BookOpen",
  },
  {
    id: "lc-2",
    name: "Career Growth",
    description: "Develop the skills and strategies to accelerate your professional journey.",
    tags: ["Resume", "Interviews", "Networking", "Personal Brand", "Leadership"],
    icon: "Rocket",
  },
  {
    id: "lc-3",
    name: "Organizational Growth",
    description: "Build scalable systems and cultures that drive sustainable business growth.",
    tags: ["Culture", "Strategy", "Performance", "Engagement", "Change Management"],
    icon: "Building",
  },
];

/* ===========================================
   RESOURCES
   =========================================== */

export const RESOURCES: Resource[] = [
  {
    id: "r-1",
    title: "The Complete HR Starter Kit",
    type: "guide",
    description: "Everything you need to build your HR foundation — policies, templates, and checklists.",
    downloadUrl: "#",
    category: "HR Foundation",
  },
  {
    id: "r-2",
    title: "Performance Review Template Pack",
    type: "checklist",
    description: "Ready-to-use templates for quarterly and annual performance reviews.",
    downloadUrl: "#",
    category: "Performance",
  },
  {
    id: "r-3",
    title: "Building an Inclusive Workplace",
    type: "video",
    description: "A comprehensive guide to creating DEI programs that drive real change.",
    videoUrl: "#",
    category: "Employee Experience",
  },
  {
    id: "r-4",
    title: "Compliance Checklist for Indian Startups",
    type: "checklist",
    description: "Essential labor law compliance checklist for startups operating in India.",
    downloadUrl: "#",
    category: "Compliance",
  },
  {
    id: "r-5",
    title: "Manager's Guide to 1-on-1 Meetings",
    type: "guide",
    description: "Frameworks and conversation starters for effective manager-report conversations.",
    downloadUrl: "#",
    category: "Leadership",
  },
  {
    id: "r-6",
    title: "How to Structure Your First 90 Days in HR",
    type: "video",
    description: "Video walkthrough of setting up HR operations in a new organization.",
    videoUrl: "#",
    category: "HR Foundation",
  },
];
