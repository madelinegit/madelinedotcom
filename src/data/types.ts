export interface Role {
  title: string;
  company: string;
  /** e.g. "Freelance", "Contract" — omitted for full-time roles. */
  arrangement?: string;
  /** Display string, already formatted. Kept in sync with the resume. */
  dates: string;
  location?: string;
  bullets: string[];
}

export interface Credential {
  institution: string;
  /** The award itself, e.g. "Bachelor of Science, Anthropology". */
  award: string;
  /** Supporting detail shown under the award. */
  detail?: string;
  year?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  /** Rendered as a labelled list: "The problem:", "What I built:", etc. */
  points: { label?: string; text: string }[];
  stack: string[];
  link?: { href: string; label: string };
  /** Set when a long-form case study exists for this project. */
  hasCaseStudy?: boolean;
}

export interface Capability {
  icon: string;
  title: string;
  description: string;
}

export interface StackGroup {
  label: string;
  items: string;
}
