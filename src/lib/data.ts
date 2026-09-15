import type { NavLink, WorkflowStep, ServiceCategory, FAQItem, CaseStudy, Testimonial, TeamMember, VideoLearning } from "./types";

/* ===========================================
   NAVIGATION
   =========================================== */

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Learning & Growth", href: "/learning" },
  { label: "Sessions", href: "/sessions" },
  { label: "Contact Us", href: "/contact" },
];

/* ===========================================
   HOW WE WORK — 6-STEP FLOW
   =========================================== */

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { number: "01", title: "Understand", description: "We listen to your challenges, goals, and current people operations landscape." },
  { number: "02", title: "Diagnose", description: "We identify gaps, inefficiencies, and opportunities across your HR ecosystem." },
  { number: "03", title: "Design", description: "We craft tailored solutions that align with your business objectives and culture." },
  { number: "04", title: "Implement", description: "We execute with precision, ensuring minimal disruption and maximum adoption." },
  { number: "05", title: "Measure", description: "We track outcomes against clear KPIs to validate impact and ROI." },
  { number: "06", title: "Improve", description: "We iterate based on data, feedback, and evolving business needs." },
];

/* ===========================================
   SERVICE CATEGORIES (Home page cards)
   =========================================== */

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: "hr-foundation", name: "HR Foundation", description: "Build your HR infrastructure from the ground up with policies, handbooks, and frameworks.", icon: "Building2", href: "/services" },
  { id: "compliance", name: "Compliance & HR Ops", description: "Stay compliant with labor laws and streamline your HR operations.", icon: "ShieldCheck", href: "/services" },
  { id: "talent", name: "Talent & Recruitment", description: "Attract, assess, and onboard the right people for your organization.", icon: "Users", href: "/services" },
  { id: "strategy", name: "HR Strategy", description: "Align your people strategy with business goals for sustainable growth.", icon: "Target", href: "/services" },
  { id: "performance", name: "Performance & Development", description: "Design systems that drive accountability, growth, and high performance.", icon: "TrendingUp", href: "/services" },
  { id: "experience", name: "Employee Experience", description: "Create a workplace culture that attracts, engages, and retains talent.", icon: "Heart", href: "/services" },
  { id: "analytics", name: "HR Analytics & Tech", description: "Leverage data and technology to make smarter people decisions.", icon: "BarChart3", href: "/services" },
  { id: "career", name: "Career & Talent Services", description: "Support individual career growth with coaching, resume building, and guidance.", icon: "GraduationCap", href: "/services" },
];

/* ===========================================
   CASE STUDIES
   =========================================== */

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    category: "HR Foundation",
    title: "Building HR Infrastructure for a 200-Person Startup",
    resultLine: "Reduced onboarding time by 60% and established compliant HR policies across 3 regions.",
  },
  {
    id: "cs-2",
    category: "Performance & Development",
    title: "Redesigning Performance Management for a Growing Enterprise",
    resultLine: "Increased manager satisfaction scores by 45% and aligned individual goals with company OKRs.",
  },
  {
    id: "cs-3",
    category: "Employee Experience",
    title: "Transforming Employee Engagement in a Remote-First Company",
    resultLine: "Improved eNPS from 12 to 58 within 8 months through structured engagement programs.",
  },
];

/* ===========================================
   TESTIMONIALS
   =========================================== */

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    quote: "The humanEaze didn't just fix our HR problems — they built a system that scales with us. Our team finally has the structure they needed.",
    clientName: "Priya Sharma",
    clientTitle: "CEO, TechScale Solutions",
    initials: "PS",
  },
  {
    id: "t-2",
    quote: "Their approach is refreshingly practical. No jargon, no fluff — just clear frameworks that our managers actually use every day.",
    clientName: "Rahul Mehta",
    clientTitle: "VP People, GrowthBridge",
    initials: "RM",
  },
  {
    id: "t-3",
    quote: "Working with The humanEaze felt like having a senior HR leader on our team. They understood our culture and built around it.",
    clientName: "Ananya Kapoor",
    clientTitle: "Founder, Elevate Consulting",
    initials: "AK",
  },
];

/* ===========================================
   TEAM
   =========================================== */

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "tm-1",
    name: "Shourya Gupta",
    role: "Founder & Lead Consultant",
    bio: "15+ years in People Operations, building HR systems for startups and enterprises alike.",
    initials: "SG",
  },
  {
    id: "tm-2",
    name: "Neha Verma",
    role: "HR Strategy Consultant",
    bio: "Specializes in organizational design and performance management frameworks.",
    initials: "NV",
  },
  {
    id: "tm-3",
    name: "Arjun Patel",
    role: "Compliance & Operations Lead",
    bio: "Deep expertise in labor law compliance and HR operations optimization.",
    initials: "AP",
  },
  {
    id: "tm-4",
    name: "Meera Singh",
    role: "Talent & Culture Specialist",
    bio: "Passionate about building inclusive cultures and effective recruitment strategies.",
    initials: "MS",
  },
];

/* ===========================================
   VIDEO LEARNING
   =========================================== */

export const VIDEO_LEARNING: VideoLearning[] = [
  {
    id: "vl-1",
    title: "How to Build an HR Framework from Scratch",
    category: "HR Foundation",
    durationSeconds: 720,
    youtubeUrl: "#",
  },
  {
    id: "vl-2",
    title: "5 Performance Review Mistakes Leaders Make",
    category: "Performance",
    durationSeconds: 540,
    youtubeUrl: "#",
  },
  {
    id: "vl-3",
    title: "Creating a Culture That Retains Top Talent",
    category: "Employee Experience",
    durationSeconds: 660,
    youtubeUrl: "#",
  },
];

/* ===========================================
   FAQ
   =========================================== */

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What types of companies do you work with?",
    answer: "We work with startups, SMEs, and growing enterprises across industries. Whether you're building HR from scratch or optimizing an existing function, our services are designed to scale with your needs.",
    order: 1,
  },
  {
    id: "faq-2",
    question: "How is The humanEaze different from traditional HR consultants?",
    answer: "We don't work in silos. Our approach connects people, processes, and technology into one integrated system. We focus on building sustainable, scalable HR operations — not just fixing isolated problems.",
    order: 2,
  },
  {
    id: "faq-3",
    question: "Do you offer ongoing support or only project-based work?",
    answer: "Both. We offer project-based engagements for specific needs and recurring retainers (monthly, quarterly, half-yearly, or yearly) for continuous HR support and optimization.",
    order: 3,
  },
  {
    id: "faq-4",
    question: "How long does a typical engagement take?",
    answer: "It depends on scope. A focused project like policy development might take 2–4 weeks, while a comprehensive HR overhaul could span 2–3 months. We'll provide a clear timeline during scoping.",
    order: 4,
  },
  {
    id: "faq-5",
    question: "Can you work with our existing HR team?",
    answer: "Absolutely. We often work alongside internal HR teams to augment their capabilities, provide strategic guidance, and help implement best practices without replacing existing roles.",
    order: 5,
  },
  {
    id: "faq-6",
    question: "What's included in the custom proposal?",
    answer: "Every proposal includes a detailed scope of work, timeline, deliverables, pricing breakdown, and success metrics. We tailor each proposal to your specific challenges and goals.",
    order: 6,
  },
  {
    id: "faq-7",
    question: "Do you provide training and workshops?",
    answer: "Yes. Our Learning & Growth programs include workshops for managers, HR teams, and leadership on topics from performance management to building inclusive cultures.",
    order: 7,
  },
  {
    id: "faq-8",
    question: "How do I get started?",
    answer: "Start by reaching out through our contact form or booking a consultation session. We'll schedule a discovery call to understand your needs and recommend the best path forward.",
    order: 8,
  },
];
