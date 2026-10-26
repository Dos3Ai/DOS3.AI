import { NavItem, TechnologyPillar } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Technology', href: '/technology' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Research', href: '/research' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Security', href: '/security' },
  { label: 'Contact', href: '/contact' },
];

export const TECHNOLOGY_PILLARS: TechnologyPillar[] = [
  {
    id: 'data-intelligence',
    title: 'Data & Intelligence',
    subtitle: 'Foundation for Insight',
    description: 'Exploring modern data systems, streaming architectures, and intelligent statistical methods that help transform raw operational information into actionable insights.',
    iconName: 'Database',
    explorations: [
      'High-throughput data modeling & ingestion architectures',
      'Knowledge representation and structured data graphs',
      'Context-aware information retrieval pipelines',
      'Data provenance and integrity validation protocols'
    ],
    impact: 'Enables systems to ground computational decisions in verified, high-fidelity information rather than unstructured assumptions.'
  },
  {
    id: 'software-systems',
    title: 'Software & Systems',
    subtitle: 'Reliable Engineering',
    description: 'Focusing on robust software architecture, modular systems design, and the foundational software layers that support resilient, high-availability digital experiences.',
    iconName: 'Layers',
    explorations: [
      'Resilient distributed systems architecture',
      'Deterministic state management across distributed nodes',
      'Type-safe, contract-driven interface protocols',
      'Fault-tolerant execution environments'
    ],
    impact: 'Ensures software remains dependable, maintainable, and stable even under evolving operational loads.'
  },
  {
    id: 'computing-infrastructure',
    title: 'Computing Infrastructure',
    subtitle: 'Connected Environments',
    description: 'Exploring the modern computing fabrics, server topologies, and edge environments that power distributed workloads and connected digital ecosystems.',
    iconName: 'Server',
    explorations: [
      'Hybrid cloud and localized compute coordination',
      'Resource scheduling for specialized hardware',
      'Low-latency networking and distributed clustering',
      'Secure compute boundaries and workload isolation'
    ],
    impact: 'Provides the elastic, efficient foundation necessary to run demanding modern compute and memory-intensive workloads.'
  },
  {
    id: 'digital-services',
    title: 'Digital Services',
    subtitle: 'Connected Solutions',
    description: 'Focusing on creating responsive, secure digital services, APIs, and technology-enabled interfaces designed for human interaction and machine-to-machine collaboration.',
    iconName: 'Cpu',
    explorations: [
      'Service-oriented integration frameworks',
      'Secure API governance and permission gateways',
      'Real-time streaming and event-driven communication',
      'Intuitive developer interfaces and tooling abstractions'
    ],
    impact: 'Bridges raw infrastructure with everyday enterprise workflows through intuitive, reliable digital touchpoints.'
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    subtitle: 'Practical Intelligence',
    description: 'Exploring practical AI implementations, structured machine reasoning, and emerging approaches to building safe, useful, and verifiable AI-enabled systems.',
    iconName: 'Sparkles',
    explorations: [
      'Structured planning and multistep task reasoning',
      'Human-in-the-loop permission and verification gates',
      'Model-agnostic evaluation and benchmarking methodologies',
      'Domain-adapted contextual reasoning models'
    ],
    impact: 'Advances machine intelligence from passive text generation into grounded, verifiable, and responsible assistance.'
  }
];

export const ENGINEERING_PRINCIPLES = [
  {
    number: '01',
    title: 'Clarity Before Complexity',
    description: 'Build solutions around clearly defined problems and practical outcomes. We prioritize straightforward architectures that are easy to reason about over gratuitous technical novelty.'
  },
  {
    number: '02',
    title: 'Systems That Work Together',
    description: 'Value reliable, maintainable, and well-integrated technology. No subsystem should operate in an isolated silo; integration must be deterministic, transparent, and resilient.'
  },
  {
    number: '03',
    title: 'Responsible Innovation',
    description: 'Consider security, privacy, reliability, and real-world impact throughout the entire development lifecycle. Trust is not an afterthought or an add-on; it is an architectural requirement.'
  }
];

export const COMPANY_INFO = {
  name: 'DOS3.AI',
  tagline: 'Data • Operating Systems • Servers • Services • AI',
  legalName: 'DOS3.AI',
  location: 'Dallas, Texas, USA',
  emails: {
    general: 'hello@dos3.ai.com',
    business: 'contact@dos3.ai.com',
    security: 'security@dos3.ai.com',
  }
};
