import type { NavLink, WorkflowStep, ServiceCategory, FAQItem, CaseStudy, Testimonial, TeamMember, VideoLearning } from "./types";

/* ===========================================
   NAVIGATION
   =========================================== */

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Learning & Growth", href: "/learning" },
  { label: "Sessions", href: "/sessions" },
];

/* ===========================================
   HOW WE WORK — 5-STEP FLOW
   =========================================== */

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "We learn how your business works, where you're struggling, and where you want to go.",
  },
  {
    number: "02",
    title: "Assess",
    description: "We identify gaps, risks, inefficiencies, and opportunities across your people operations.",
  },
  {
    number: "03",
    title: "Design",
    description: "We build practical HR solutions aligned with your business, people, and goals.",
  },
  {
    number: "04",
    title: "Implement",
    description: "We help put those solutions into practice, with clear processes, communication, and support.",
  },
  {
    number: "05",
    title: "Improve",
    description: "We measure outcomes, gather feedback, and refine the system as your business grows.",
  },
];

/* ===========================================
   SERVICE CATEGORIES (Home page cards)
   =========================================== */

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "hr-foundations",
    name: "HR Foundations & Systems",
    description: "Build the HR infrastructure your business needs — policies, handbooks, SOPs, processes, and documentation.",
    icon: "Building2",
    href: "/services",
  },
  {
    id: "hr-compliance",
    name: "HR Operations & Compliance",
    description: "Keep your people processes organized, efficient, and aligned with applicable requirements.",
    icon: "ShieldCheck",
    href: "/services",
  },
  {
    id: "talent-recruitment",
    name: "Talent & Recruitment",
    description: "Build structured hiring and onboarding processes that help you attract and bring in the right people.",
    icon: "Users",
    href: "/services",
  },
  {
    id: "performance-development",
    name: "Performance & Development",
    description: "Create systems that support accountability, performance, learning, and growth.",
    icon: "TrendingUp",
    href: "/services",
  },
  {
    id: "employee-experience",
    name: "Employee Experience & Culture",
    description: "Strengthen employee engagement, communication, relations, and workplace culture.",
    icon: "Heart",
    href: "/services",
  },
  {
    id: "people-strategy",
    name: "People Strategy & Analytics",
    description: "Connect your people strategy, data, and technology to better business decisions.",
    icon: "BarChart3",
    href: "/services",
  },
];

/* ===========================================
   CASE STUDIES
   =========================================== */

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    slug: "building-hr-infrastructure-startup",
    category: "HR Foundation",
    title: "Building HR Infrastructure for a 200-Person Startup",
    resultLine: "Reduced onboarding time by 60% and established compliant HR policies across 3 regions.",
    clientType: "Series B SaaS Startup (200+ employees, 3 operating regions)",
    challenge: "TechScale Solutions had tripled its team size in 14 months without an established HR infrastructure. People operations were run on scattered spreadsheets, manager-led onboarding was inconsistent, and interstate compliance standards were unclear, risking audits and high 90-day churn.",
    solution: [
      "Created an end-to-end employee handbook, job classification framework, and SOP library.",
      "Digitized and streamlined the onboarding pipeline into an automated 30-60-90 day playbook.",
      "Designed regional compliance checklists ensuring statutory compliance across all three operating entities.",
      "Trained 24 people managers on standard operational HR routines and documentation.",
    ],
    results: [
      "Reduced onboarding cycle time from 15 days to 6 days (60% drop).",
      "Zero compliance flags in subsequent external labor and workplace audits.",
      "90-day new hire turnover dropped by 38% within two quarters.",
      "Manager satisfaction regarding HR enablement reached 92%.",
    ],
    metrics: [
      { label: "Onboarding Cycle Time", value: "-60%" },
      { label: "Regions Compliant", value: "3 of 3" },
      { label: "Manager HR Satisfaction", value: "92%" },
    ],
    quote: {
      text: "The humanEaze gave us the foundation we desperately needed to scale from 200 to 500 without our operations breaking down.",
      author: "Priya Sharma",
      role: "CEO, TechScale Solutions",
    },
  },
  {
    id: "cs-2",
    slug: "redesigning-performance-management-enterprise",
    category: "Performance & Development",
    title: "Redesigning Performance Management for a Growing Enterprise",
    resultLine: "Increased manager satisfaction scores by 45% and aligned individual goals with company OKRs.",
    clientType: "Mid-Market Enterprise (650+ team members)",
    challenge: "GrowthBridge operated with an outdated once-a-year review cycle that felt like a bureaucratic chore. Employees lacked clear goal visibility, feedback was rarely timely, and high performers felt unrecognized, resulting in disengagement and inconsistent ratings.",
    solution: [
      "Transitioned from annual appraisals to a continuous quarterly check-in framework with goal alignment.",
      "Linked department and individual key results directly to company-wide strategic OKRs.",
      "Instituted structured 1-on-1 feedback templates and 360-degree review rituals.",
      "Conducted practical manager coaching workshops on delivering constructive, actionable feedback.",
    ],
    results: [
      "Manager satisfaction with performance evaluations surged by 45%.",
      "94% on-time completion rate for quarterly developmental discussions.",
      "Company-wide goal alignment transparency rose from 41% to 88%.",
      "Top talent retention improved by 22% year-over-year.",
    ],
    metrics: [
      { label: "Manager Satisfaction", value: "+45%" },
      { label: "Review Completion", value: "94%" },
      { label: "Top Talent Retention", value: "+22%" },
    ],
    quote: {
      text: "Their frameworks transformed performance reviews from an annual dread into meaningful growth conversations.",
      author: "Rahul Mehta",
      role: "VP People, GrowthBridge",
    },
  },
  {
    id: "cs-3",
    slug: "transforming-employee-engagement-remote",
    category: "Employee Experience",
    title: "Transforming Employee Engagement in a Remote-First Company",
    resultLine: "Improved eNPS from 12 to 58 within 8 months through structured engagement programs.",
    clientType: "Remote-First Consulting Firm (120+ team members)",
    challenge: "Elevate Consulting shifted to a permanently distributed remote model, leading to team isolation, siloed communication, and an eNPS drop to 12. Remote employees felt disconnected from company mission and experienced high fatigue.",
    solution: [
      "Conducted anonymous pulse surveys and focus sessions to pinpoint root causes of disconnection.",
      "Implemented structured asynchronous communication guidelines and meeting hygiene rules.",
      "Created quarterly virtual retreats, peer appreciation channels, and collaborative knowledge-sharing rituals.",
      "Designed personalized learning stipends and wellness support initiatives.",
    ],
    results: [
      "eNPS increased dramatically from 12 to 58 in 8 months.",
      "Voluntary attrition decreased by 34% over the following 12 months.",
      "Cross-functional collaboration sentiment improved by 52%.",
      "89% of employees reported feeling valued and connected to company purpose.",
    ],
    metrics: [
      { label: "eNPS Score", value: "12 → 58" },
      { label: "Voluntary Attrition", value: "-34%" },
      { label: "Sense of Belonging", value: "89%" },
    ],
    quote: {
      text: "Working with The humanEaze felt like having a senior HR leader who truly understood our remote culture and helped us thrive.",
      author: "Ananya Kapoor",
      role: "Founder, Elevate Consulting",
    },
  },
];

/* ===========================================
   TESTIMONIALS
   =========================================== */

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    slug: "priya-sharma-techscale",
    quote: "The humanEaze didn't just fix our HR problems — they built a system that scales with us. Our team finally has the structure they needed.",
    clientName: "Priya Sharma",
    clientTitle: "CEO, TechScale Solutions",
    company: "TechScale Solutions",
    industry: "B2B SaaS / Enterprise Technology",
    initials: "PS",
    highlights: [
      "Scaled infrastructure from 150 to 300+ people seamlessly",
      "Cut onboarding time by 60%",
      "Unified 3 multi-regional entities under single compliance framework",
    ],
    story: [
      "When TechScale reached rapid post-Series B expansion, leadership realized their people operations were buckling under the weight of exponential hiring.",
      "The humanEaze stepped in as a hands-on strategic partner, auditing existing bottlenecks and architecting clean, codified HR systems from policies and compensation bands to onboarding workflows.",
      "Today, TechScale's managers lead with confidence and the company maintains a compliant, structured, and vibrant culture as they continue their hypergrowth.",
    ],
  },
  {
    id: "t-2",
    slug: "rahul-mehta-growthbridge",
    quote: "Their approach is refreshingly practical. No jargon, no fluff — just clear frameworks that our managers actually use every day.",
    clientName: "Rahul Mehta",
    clientTitle: "VP People, GrowthBridge",
    company: "GrowthBridge",
    industry: "Fintech & Financial Services",
    initials: "RM",
    highlights: [
      "Rebuilt performance management into continuous check-ins",
      "45% increase in manager satisfaction scores",
      "Seamless OKR alignment across 12 distributed business units",
    ],
    story: [
      "GrowthBridge needed to overhaul an inherited, slow-moving performance review system that alienated managers and failed to track real growth.",
      "The humanEaze designed a lightweight, high-impact continuous feedback cadence tailored to fast-paced fintech operations.",
      "The result was an immediate boost in transparency, accountability, and managerial trust across the company.",
    ],
  },
  {
    id: "t-3",
    slug: "ananya-kapoor-elevate",
    quote: "Working with The humanEaze felt like having a senior HR leader on our team. They understood our culture and built around it.",
    clientName: "Ananya Kapoor",
    clientTitle: "Founder, Elevate Consulting",
    company: "Elevate Consulting",
    industry: "Management & Digital Strategy",
    initials: "AK",
    highlights: [
      "eNPS surged from +12 to +58 in under a year",
      "34% reduction in voluntary turnover",
      "Built comprehensive remote-first employee engagement playbook",
    ],
    story: [
      "As Elevate went fully distributed, culture erosion and team detachment became pressing concerns for the founding team.",
      "The humanEaze embedded deeply with team leads to design rituals, recognition systems, and transparent communication protocols that re-energized the entire workforce.",
      "Elevate is now recognized as a benchmark for remote workplace satisfaction in their sector.",
    ],
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
