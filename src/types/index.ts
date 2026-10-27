export interface NavItem {
  label: string;
  href: string;
}

export interface TechnologyPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  explorations: string[];
  impact: string;
}

export interface ResearchArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  status: string;
  abstract: string;
  fullOverview?: string;
  architectureDetails?: string[];
  benchmarks?: string[];
  citations?: string;
}

export interface CareerPosition {
  id: string;
  title: string;
  type: 'Full-Time Job' | 'Internship' | 'Fellowship';
  department: string;
  location: string;
  workplace: 'Hybrid (Dallas, TX)' | 'Remote' | 'On-Site (Dallas, TX)';
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
}

export interface PreviousProject {
  id: string;
  title: string;
  category: 'Agentic AI' | 'MCP & Protocols' | 'LLM & Inference' | 'Distributed Systems';
  tagline: string;
  description: string;
  architecture: string[];
  technologies: string[];
  metrics: string;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  type: 'Webinar' | 'In-Person Meetup' | '1-on-1 Office Hours';
  date: string;
  time: string;
  location: string;
  description: string;
  speaker: string;
  bookingUrl: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
  consent: boolean;
}
