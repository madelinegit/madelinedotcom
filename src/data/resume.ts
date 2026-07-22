import type { Credential, Language, Role, StackGroup } from "./types";

/**
 * Source of truth: Madeline_Gall_Resume_ATS9 (rev. 2026-07-19).
 * Dates here are authoritative — update this file when the resume changes.
 */

export const experience: Role[] = [
  {
    title: "Technical Product Manager",
    company: "Tahoe Getaways",
    dates: "May 2024 – Present",
    location: "Truckee, CA · Hybrid",
    bullets: [
      "Launched North Lake Dispatch, a Python/Flask field service SaaS platform adopted by 50+ hospitality and property management companies under Monarch, collectively serving a $2.5M field-operations budget",
      "Prioritized feature requests from field teams — separating signal from noise across business requirements and market trends — driving labor overruns from 22% to under 4% and cutting scheduling conflicts ~75%",
      "Architected a Priority Check-In feature via OR-Tools constraint solver enforcing real-time SLA compliance — cutting missed windows from ~15/month to under 5 and protecting $300,000 in at-risk annual booking revenue",
      "Spearheaded IT automation cutting technician drive time from 3.5 to under 2 hrs daily — recovering 30 hrs/week and $70,000+ in annual labor savings",
      "Established data pipelines and analytics dashboards presented to C-suite stakeholders, guiding executive decisions across field ops and contributing to a 12% EBITDA improvement",
      "Aligned stakeholders across engineering, operations, and field teams through Scrum ceremonies and sprint reviews — lifting feature adoption from 45% to 80%+ quarter-over-quarter",
      "Coordinated beta releases, user acceptance testing, and QA validation with field teams ahead of each launch, owning release management through the CI/CD pipeline",
    ],
  },
  {
    title: "Full-Stack Developer & Founder",
    company: "Ecodev LLC",
    arrangement: "Freelance",
    dates: "Aug 2022 – Present",
    location: "Remote",
    bullets: [
      "Engineered 3+ full-stack SaaS platforms across Python (Flask, FastAPI) and Node.js with PostgreSQL/MySQL — relational data models, REST APIs, and secure authentication across concurrent client engagements",
      "Owned the full SDLC and product launch of Lead AI Institute, a production e-learning platform automating the enrollment-to-certification flow — PCI DSS-compliant Stripe checkout, per-student access tokens, progress tracking, and certificate generation",
      "Delivered AI integrations for 10+ small business clients — conversational interfaces, customer service automation, and LLM-powered features — cutting client service response times by up to 70%",
      "Conducted product discovery and user research with clients across 3 industries, translating operational pain points into rapid prototypes and prioritized roadmaps that drove adoption above 80% within 30 days of deployment",
      "Scaled platform capabilities from 50 to 500+ concurrent users without re-architecting the core product, building reusable React/TypeScript component systems optimized for usability",
      "Operated production cloud infrastructure across AWS EC2 and Railway with GitHub CI/CD at 99%+ uptime — executing cloud migration of workloads to Railway with performance monitoring of costs and uptime",
    ],
  },
  {
    title: "React Developer",
    company: "Nexalure Technologies",
    arrangement: "Contract",
    dates: "Oct 2023 – May 2024",
    location: "Remote · Greater London team",
    bullets: [
      "Architected a modular React + TypeScript component library for a high-scale B2B SaaS platform supporting $150,000+ in contract renewals",
      "Cut component render time from ~800ms to under 640ms, driving a 15% lift in user engagement across key product surfaces",
      "Designed Redux state management architecture for consistent cross-view data handling across a complex, multi-surface application",
      "Validated REST API data pipelines powering real-time UI updates — cutting front-end data latency and eliminating stale-state bugs across key user flows",
      "Shipped production features across 8 months of Agile/Scrum sprint cycles within a remote cross-functional team",
    ],
  },
  {
    title: "Data Specialist",
    company: "Embrace Pet Insurance",
    dates: "Aug 2019 – Jul 2022",
    location: "Cleveland, OH · Remote",
    bullets: [
      "Owned data quality across a 200,000+ policyholder, $50M+ pet health insurance environment — validating claims datasets spanning clinical treatments and medications via SQL in Salesforce CRM",
      "Analyzed operational metrics in Tableau to surface inconsistencies within high-volume processing, improving data-driven decisions for customer service teams by an estimated 20%",
      "Instituted process controls and data governance standards — cutting manual remediation time by 40% (~$30,000/year) while sustaining financial-data SLA compliance above 99.5% for 3 consecutive years",
      "Safeguarded sensitive customer and financial PII in secure, role-based-access environments under strict compliance protocols",
    ],
  },
];

export const education: Credential[] = [
  {
    institution: "University of Virginia (Darden)",
    award: "Certification — Digital Product Management",
    // ATS9 says 2024; the correct year is 2026. Needs fixing on the resume too.
    year: "2026",
  },
  {
    institution: "Colorado Technical University",
    award: "Full-Stack Software Development Certification",
    detail: ["via Coding Dojo · Python, MySQL, JavaScript, React, version control"],
    year: "2023",
  },
  {
    institution: "Project Management Institute",
    award: "Certified Associate in Project Management (CAPM)",
    // Hidden by choice, not removed. Set this to false to show it again.
    hidden: true,
  },
  {
    institution: "Ohio University",
    award: "Bachelor of Science, Anthropology",
    // Two deliberate divergences from resume ATS9, both confirmed correct here
    // and pending correction on the resume itself:
    //   - ATS9 says "Information Technology"; the degree is Computer Technology.
    //   - ATS9 omits the Strategic Business Leadership certificate entirely.
    detail: [
      "Associate of Science, Computer Technology",
      "Certificate in Strategic Business Leadership",
    ],
    year: "2014",
  },
];

export const languages: Language[] = [
  { name: "Spanish", level: "C1 Advanced / Professional Working Proficiency" },
  { name: "Portuguese", level: "B2 Intermediate" },
];

export const stack: StackGroup[] = [
  {
    label: "Frontend",
    items: "React, TypeScript, Redux — production UIs for internal tools and operational workflows",
  },
  {
    label: "Backend",
    items: "Python (Flask, FastAPI), Node.js, REST API design for scalable applications",
  },
  {
    label: "Databases",
    items: "PostgreSQL, MySQL, SQLite, Snowflake — schema design, querying, optimization",
  },
  {
    label: "Data & Reporting",
    items: "Pandas pipelines, Tableau dashboards, automated PDF reporting (ReportLab)",
  },
  {
    label: "Cloud & Infrastructure",
    items: "AWS (EC2, S3, IAM), Railway, Vercel, Linux servers, Nginx configuration",
  },
  {
    label: "Containerization & CI/CD",
    items: "Docker and GitHub Actions for automated builds and deployments",
  },
  {
    label: "Optimization & Integrations",
    items: "OR-Tools constraint solving, OSRM routing, Google Maps API, Stripe, LLM APIs",
  },
  {
    label: "Performance",
    items: "Redis caching, production monitoring and debugging",
  },
  {
    label: "Security & Practice",
    items:
      "Authentication, SSL, PII handling, Git version control, environment management, structured deployment",
  },
];
