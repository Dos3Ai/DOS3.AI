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
  date: string;
  summary: string;
  status: 'Published' | 'In Development' | 'Working Paper';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
  consent: boolean;
}
