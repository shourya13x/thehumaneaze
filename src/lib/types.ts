/* ===========================================
   THE HUMANEAZE — SHARED TYPE DEFINITIONS
   =========================================== */

/** A single line-item service with pricing */
export interface Service {
  id: string;
  segment: ServiceSegment;
  name: string;
  priceMin: number;
  priceMax: number;
  priceUnit: string;
  isCustom: boolean;
  description?: string;
}

/** The 8 service segments */
export type ServiceSegment =
  | "HR Foundation"
  | "Compliance & HR Operations"
  | "Talent & Recruitment"
  | "HR Strategy"
  | "Performance & Development"
  | "Employee Experience"
  | "HR Analytics & Technology"
  | "Career & Talent Services";

/** Recurring engagement tier */
export interface RecurringEngagement {
  id: string;
  tier: "One-Time" | "Monthly" | "Quarterly" | "Half-Yearly" | "Yearly";
  title: string;
  description: string;
}

/** Case study card */
export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  resultLine: string;
}

/** Testimonial card */
export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientTitle: string;
  initials: string;
}

/** Team member card */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
}

/** FAQ item */
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  order: number;
}

/** Resource (guides, checklists, videos) */
export interface Resource {
  id: string;
  title: string;
  type: "guide" | "checklist" | "video";
  description: string;
  downloadUrl?: string;
  videoUrl?: string;
  category: string;
}

/** Video learning card */
export interface VideoLearning {
  id: string;
  title: string;
  category: string;
  durationSeconds: number;
  youtubeUrl: string;
}

/** Session booking card */
export interface SessionType {
  id: string;
  title: string;
  price: string;
  description: string;
  icon: string;
  bookingUrl: string;
}

/** Service category card for Home page */
export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  href: string;
}

/** Learning category card */
export interface LearningCategory {
  id: string;
  name: string;
  description: string;
  tags: string[];
  icon: string;
}

/** How We Work step */
export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}

/** Contact form data */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  companySize: string;
  helpNeeded: string[];
  message: string;
}

/** Navigation link */
export interface NavLink {
  label: string;
  href: string;
}
