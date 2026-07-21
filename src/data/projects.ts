import type { Capability, Project } from "./types";

export const projects: Project[] = [
  {
    slug: "north-lake-dispatch",
    name: "North Lake Dispatch",
    tagline: "Dispatch & route optimization platform",
    points: [
      {
        label: "The problem",
        text: "Scheduling 10+ field employees across 415 properties in the North Lake Tahoe basin — a 700-square-mile mountain territory stretching from Kings Beach to Incline Village — was done manually, with no visibility into drive time, task priority, or property clustering. Things got missed.",
      },
      {
        label: "The gap",
        text: "The two industry platforms we used (Breezeway and Streamline) tracked what needed to happen well. Neither could tell you the optimal order, the real drive time, or which properties to cluster on the same run.",
      },
      {
        label: "What I built",
        text: "A full-stack dispatch platform with constraint-based route optimization (OR-Tools), real drive time calculations, priority check-in detection, user-scoped schedule history, and shareable route links — deployed and in active daily use.",
      },
      {
        label: "Impact",
        text: "Drove labor overruns from 22% to under 4%, cut technician drive time from 3.5 to under 2 hours daily, and shifted issue resolution from informal to fully auditable. Now adopted by 50+ companies.",
      },
    ],
    stack: ["Python", "Flask", "OR-Tools", "OSRM", "Leaflet", "SQLite", "Railway"],
    link: { href: "https://northlakedispatch.com", label: "northlakedispatch.com" },
    hasCaseStudy: true,
  },
  {
    slug: "lead-ai-institute",
    name: "Lead AI Institute",
    tagline: "E-learning platform, enrollment to certification",
    points: [
      {
        label: "The problem",
        text: "Selling a course is the easy part. The operational drag is everything after checkout — granting access, tracking who finished what, and issuing certificates without a human in the loop.",
      },
      {
        label: "What I built",
        text: "A production e-learning platform that automates the entire enrollment-to-certification flow: PCI DSS-compliant Stripe checkout, per-student access tokens, progress tracking, and automatic certificate generation.",
      },
      {
        label: "Impact",
        text: "Owned the full software development lifecycle from discovery through launch. The enrollment pipeline runs unattended end to end.",
      },
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Stripe", "React", "TypeScript"],
    link: { href: "https://leadaiinstitute.com", label: "leadaiinstitute.com" },
  },
  {
    slug: "staffing-analytics",
    name: "Staffing Analytics & Forecasting Tool",
    tagline: "A year of performance data against booking and seasonal demand",
    points: [
      {
        label: "The problem",
        text: "Leadership was divided on staffing, and every position was argued from anecdote. Without a shared picture of how the team actually performed across a full season cycle, the same disagreements resurfaced every quarter and nobody could settle them.",
      },
      {
        label: "The gap",
        text: "Performance data, booking volume, and seasonal demand each lived in a separate system. Nobody had ever put them side by side, so a busy month and a productive month were indistinguishable.",
      },
      {
        label: "What I built",
        text: "An ingestion and analytics pipeline tracking individual employee performance across a full year on multiple metrics, joined against booking data and the seasonal factors that actually drive workload — holiday peaks, shoulder seasons, and storm cycles. Findings are compiled into automated PDF reports written for leadership review.",
      },
      {
        label: "Impact",
        text: "Gave a divided leadership team one shared, evidence-based picture to argue from. Staffing decisions moved from competing impressions to grounded strategy, and labor forecasting became a function of real seasonal demand rather than the previous month's gut feel.",
      },
    ],
    stack: ["Python", "Pandas", "ReportLab", "Streamlit"],
  },
];

export const capabilities: Capability[] = [
  {
    icon: "⚙️",
    title: "Operational System Design",
    description:
      "Architect automation frameworks for high-volume service operations — the kind where a missed stop has real consequences.",
  },
  {
    icon: "🔁",
    title: "Process Optimization",
    description:
      "Replace manual coordination with structured, scalable internal platforms. I start with the people problem, then build the software.",
  },
  {
    icon: "📊",
    title: "Data-Driven Planning",
    description:
      "Translate operational data into forecasting models and decision-support systems that actual teams use day to day.",
  },
  {
    icon: "🚀",
    title: "Platform Implementation",
    description:
      "Design and deploy secure internal systems integrating third-party services — built to last, not just to demo.",
  },
  {
    icon: "🎯",
    title: "End-to-End Delivery",
    description:
      "Technical scoping through rollout and adoption. I stay until the thing actually works.",
  },
];

export const consultingServices: Capability[] = [
  {
    icon: "🧭",
    title: "AI Strategy & Scoping",
    description:
      "Not sure where to start? I will map your operation, identify the highest-leverage automation opportunities, and give you a clear roadmap — with honest opinions about what is not worth building.",
  },
  {
    icon: "🛠️",
    title: "Custom Tool Development",
    description:
      "Internal dashboards, scheduling tools, AI-powered workflows, reporting automation. If you are running your business out of spreadsheets and group texts, there is almost certainly a better way.",
  },
  {
    icon: "🤖",
    title: "LLM & Automation Integration",
    description:
      "Connect AI to what you already have. Smart notifications, automated summaries, data extraction, decision support. Practical use cases built on real APIs, not demos.",
  },
];
