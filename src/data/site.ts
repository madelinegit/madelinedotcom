export const site = {
  name: "Madeline Gall",
  /** Positioning per Madeline_Gall_Resume_ATS9. */
  role: "Technical Product Manager",
  tagline: "Technical Product Manager · SaaS & Platform Operations · AI-Powered Tooling",
  email: "mgalldev@gmail.com",
  location: "Truckee, CA",
  url: "https://madelinegall.com",
  description:
    "Technical Product Manager and full-stack developer. I build operational software that ships — dispatch platforms, AI integrations, and internal tools that hold up in the real world.",
  hero: {
    headline: ["I build things that make", "operations work smoothly."],
    sub: "Technical Product Manager and full-stack developer. I got tired of waiting for the right software to exist, so I started building it — custom platforms, AI integrations, and systems that hold up in the real world.",
    tags: ["PRODUCT MANAGEMENT", "SOFTWARE ENGINEERING", "OPERATIONS AUTOMATION", "AI CONSULTING"],
  },
} as const;

export const navLinks = [
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#projects", label: "Work" },
  { href: "/#consulting", label: "Consulting" },
  { href: "/#experience", label: "Experience" },
  { href: "/blog", label: "Writing" },
] as const;
