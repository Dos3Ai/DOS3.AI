import { NavItem, TechnologyPillar, CareerPosition, PreviousProject, UpcomingEvent, ResearchArticle } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Technology', href: '/technology' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Research', href: '/research' },
  { label: 'Careers', href: '/careers' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Security', href: '/security' },
  { label: 'Contact', href: '/contact' },
];

export const EXTERNAL_LINKS = {
  bookingSchedule: 'https://bookings.cloud.microsoft/bookwithme/user/00bd8674785944ee9c0ed8cfbf164de5@dos3.ai/meetingtype/Do-W11U4WU-0OxPctynXVg2?anonymous&ismsaljsauthenabled&ep=mcard',
  ceoLinkedIn: 'https://www.linkedin.com/in/hariharan-babu-hb/',
  companyLinkedIn: 'https://www.linkedin.com/in/hariharan-babu-hb/',
  dallasMaps: 'https://maps.google.com/?q=Dallas,+Texas',
  orgMail: 'mailto:hello@dos3.ai',
  manualPdf: '/docs/DOS3AI_Architecture_Manual.pdf'
};

export const CEO_PROFILE = {
  name: 'Dr. Hariharan Babu BE, MS, PhD',
  role: 'Founder & Chief Executive Officer (CEO)',
  education: 'Advanced Computer Science & Distributed Systems Research',
  location: 'Dallas, Texas, USA',
  skills: [
    'Agentic AI Architectures',
    'Model Context Protocol (MCP)',
    'Distributed Systems Engineering',
    'High-Performance Computing (HPC)',
    'LLM Fine-Tuning & Quantization',
    'Deterministic Safety Verification',
    'Cloud-Native Infrastructure & Kubernetes'
  ],
  quote: 'At DOS3.AI, we believe artificial intelligence is transitioning from conversational novelty to mission-critical infrastructure. To unlock true autonomy, machine reasoning must be grounded in deterministic data lineages, resilient operating systems, and verifiable boundaries. We are not just building another wrapper; our 50+ researchers and engineers are engineering the computational substrate that will power the next century of autonomous enterprise intelligence.',
  bio: 'Hariharan Babu spearheads DOS3.AI with a vision to unite Data, Operating Systems, Cloud Servers, Digital Services, and Artificial Intelligence into a singular, deterministic computational fabric. Under his leadership, the organization leads advanced initiatives in Model Context Protocol (MCP) implementations, multi-agent reasoning harnesses, and high-performance computing clusters.',
  socials: {
    linkedin: EXTERNAL_LINKS.ceoLinkedIn,
    meetingSchedule: EXTERNAL_LINKS.bookingSchedule,
    email: 'hello@dos3.ai'
  }
};

export const COMPANY_STATS = {
  teamSize: '50+ Top-Tier Researchers & Developers',
  hpcCompute: 'NVIDIA H100/A100 Superclusters with InfiniBand',
  layersCount: '5 Interconnected Architectural Layers',
  standardsAlignment: 'ISO/IEC 42001, NIST AI RMF, WCAG 2.2 AA'
};

export const CAREER_POSITIONS: CareerPosition[] = [
  {
    id: 'ai-research-scientist',
    title: 'Senior AI Research Scientist (Agentic Reasoning)',
    type: 'Full-Time Job',
    department: 'AI Research & Machine Reasoning',
    location: 'Dallas, Texas',
    workplace: 'Hybrid (Dallas, TX)',
    description: 'Lead theoretical and experimental design of deterministic validation gates and multi-step agent reasoning pipelines.',
    responsibilities: [
      'Design formal verification harnesses to prevent autonomous drift in multi-agent tool execution.',
      'Formulate novel semantic context graphs to ground reasoning in factual enterprise data.',
      'Author technical working papers and contribute to high-impact research publications.',
      'Collaborate with HPC systems engineers to benchmark inference latencies across cluster nodes.'
    ],
    requirements: [
      'Ph.D. or Master’s in Computer Science, Machine Learning, or related quantitative field.',
      'Strong track record in LLM reasoning, reinforcement learning, or agentic frameworks (LangGraph, AutoGen).',
      'Proficiency in PyTorch, Triton, and high-throughput model serving runtimes.',
      'Deep interest in deterministic AI safety and formal system guarantees.'
    ],
    skills: ['PyTorch', 'Agentic AI', 'Multi-Agent Swarms', 'Python', 'Formal Verification']
  },
  {
    id: 'mcp-protocol-lead',
    title: 'Model Context Protocol (MCP) Lead Systems Engineer',
    type: 'Full-Time Job',
    department: 'Protocols & Infrastructure',
    location: 'Dallas, Texas',
    workplace: 'Hybrid (Dallas, TX)',
    description: 'Architect and scale enterprise MCP servers bridging foundation models with distributed enterprise databases and internal tooling.',
    responsibilities: [
      'Build ultra-low-latency MCP server runtimes using TypeScript, Go, and Rust.',
      'Implement zero-trust security partitions and granular permission policies for tool execution.',
      'Design standardized schemas for bi-directional context streaming and state synchronization.',
      'Engage with open-source protocol working groups and enterprise partner integration teams.'
    ],
    requirements: [
      '5+ years experience building production distributed services and low-latency APIs.',
      'Hands-on expertise with Model Context Protocol (MCP), gRPC, and event-driven architectures.',
      'Familiarity with containerized orchestration (Kubernetes, Docker) and security boundary sandboxing.',
      'Excellent systems debugging and performance profiling capabilities.'
    ],
    skills: ['Model Context Protocol (MCP)', 'TypeScript', 'Go / Rust', 'Kubernetes', 'gRPC']
  },
  {
    id: 'hpc-systems-engineer',
    title: 'High-Performance Computing (HPC) Systems Engineer',
    type: 'Full-Time Job',
    department: 'Compute & Server Topology',
    location: 'Dallas, Texas',
    workplace: 'On-Site (Dallas, TX)',
    description: 'Manage and optimize DOS3.AI multi-node GPU superclusters, InfiniBand networking fabrics, and distributed training jobs.',
    responsibilities: [
      'Oversee cluster operations spanning NVIDIA H100 and A100 Tensor Core GPU nodes.',
      'Tune Slurm schedulers, Ray clusters, and InfiniBand Quantum-2 low-latency fabrics.',
      'Profile CUDA kernels and multi-GPU distributed communications (NCCL, RDMA).',
      'Ensure 99.99% infrastructure availability with automated fault detection and failover.'
    ],
    requirements: [
      'BS/MS in Computer Engineering, Systems Engineering, or equivalent experience.',
      'Deep hands-on expertise with Linux kernel tuning, Slurm, NVIDIA HPC software stacks, and CUDA.',
      'Experience with high-speed network fabrics (InfiniBand, RoCE, RoCEv2).',
      'Track record maintaining mission-critical AI training or scientific computing clusters.'
    ],
    skills: ['NVIDIA HPC', 'CUDA', 'Slurm', 'InfiniBand', 'Ray', 'Linux Kernel']
  },
  {
    id: 'agentic-ai-intern',
    title: 'AI Agent & Autonomous Systems Intern',
    type: 'Internship',
    department: 'AI Engineering (Spring/Summer 2026)',
    location: 'Dallas, Texas',
    workplace: 'Hybrid (Dallas, TX)',
    description: 'Work alongside senior researchers to build, test, and benchmark autonomous agentic workflows and tool-calling interfaces.',
    responsibilities: [
      'Construct automated benchmark datasets evaluating multi-step reasoning accuracy.',
      'Develop interactive visual dashboards tracking agent tool invocation traces and state changes.',
      'Experiment with local model fine-tuning and context compression techniques.',
      'Present findings at weekly engineering seminars.'
    ],
    requirements: [
      'Pursuing BS, MS, or Ph.D. in Computer Science, Data Science, or related field.',
      'Solid programming proficiency in Python and familiarity with modern LLM APIs.',
      'Curiosity for agentic orchestration, MCP, and developer tooling.',
      'Strong problem-solving and technical communication skills.'
    ],
    skills: ['Python', 'LLMs', 'LangGraph', 'Agentic AI', 'Prompt Engineering']
  },
  {
    id: 'gpu-kernel-intern',
    title: 'ML Systems & GPU Inference Intern',
    type: 'Internship',
    department: 'Infrastructure & Compute',
    location: 'Dallas, Texas',
    workplace: 'Hybrid (Dallas, TX)',
    description: 'Collaborate on optimizing high-throughput model serving engines (vLLM, TensorRT-LLM, Triton) on our Dallas HPC clusters.',
    responsibilities: [
      'Profile memory bandwidth and kernel execution times across heterogeneous GPU architectures.',
      'Benchmark speculative decoding and KV cache quantization strategies.',
      'Contribute to internal performance testing suites and telemetry dashboards.',
      'Document optimization wins and reproduction steps.'
    ],
    requirements: [
      'Pursuing degree in Computer Science, Electrical & Computer Engineering, or related discipline.',
      'Knowledge of C++, Python, and parallel computing fundamentals (CUDA/OpenCL).',
      'Familiarity with transformer model architectures and attention mechanisms.',
      'Eager to dive deep into hardware-software co-design.'
    ],
    skills: ['C++', 'CUDA', 'vLLM', 'Triton', 'GPU Optimization']
  },
  {
    id: 'research-fellow',
    title: 'AI Safety & Formal Verification Research Fellow',
    type: 'Fellowship',
    department: 'Research Lab',
    location: 'Dallas, Texas / Remote',
    workplace: 'Remote',
    description: 'Investigate mathematical verification methods for bounding autonomous agent actions in critical enterprise environments.',
    responsibilities: [
      'Develop formal specifications for permissible state transitions in agentic workflows.',
      'Publish joint preprints with DOS3.AI research scientists.',
      'Prototype automated guardrail modules for enterprise software systems.'
    ],
    requirements: [
      'Ph.D. candidate or postdoctoral researcher in formal methods, program verification, or AI safety.',
      'Strong analytical rigor and experience in automated theorem proving or static analysis.',
      'Self-driven research initiative and commitment to open scientific standards.'
    ],
    skills: ['Formal Methods', 'AI Safety', 'Verification', 'Discrete Math', 'Logic']
  }
];

export const PREVIOUS_PROJECTS: PreviousProject[] = [
  {
    id: 'enterprise-agent-swarm',
    title: 'Enterprise Autonomous Agent Swarm',
    category: 'Agentic AI',
    tagline: 'Deterministic Multi-Agent Task Orchestration with Permission Gates',
    description: 'Engineered an enterprise-grade agentic cluster coordinating specialized reasoning agents across compliance, data retrieval, and API mutations with zero hallucinated state changes.',
    architecture: [
      'Hierarchical planner decomposing unstructured goals into typed contract DAGs',
      'Deterministic sandbox verifying output schemas before external tool dispatch',
      'Cryptographic human-in-the-loop authorization gates for database writes',
      'Immutable state replay enabling instant recovery and complete auditability'
    ],
    technologies: ['LangGraph', 'Python', 'vLLM', 'Docker Enclaves', 'Redis Streams'],
    metrics: '99.4% Task Verification Accuracy • 65% Reduction in Multi-Step Error Cascades'
  },
  {
    id: 'custom-mcp-server-fabric',
    title: 'High-Throughput Enterprise MCP Server Fabric',
    category: 'MCP & Protocols',
    tagline: 'Standardized Model Context Protocol Gateway for Legacy & Modern Data',
    description: 'Architected and deployed production MCP (Model Context Protocol) servers linking foundation models with enterprise SQL data warehouses, internal microservices, and file stores under strict zero-trust ACLs.',
    architecture: [
      'Bi-directional streaming transport over gRPC, stdio, and Server-Sent Events (SSE)',
      'Dynamic tool schema discovery and runtime context grounding with token budgeting',
      'Role-based access control (RBAC) preventing unauthorized data exfiltration',
      'Continuous health monitoring and sub-5ms local context serialization'
    ],
    technologies: ['Model Context Protocol (MCP)', 'TypeScript', 'gRPC', 'PostgreSQL', 'Slurm'],
    metrics: 'Sub-8ms P99 Latency • 50+ Custom Enterprise Tools Exposed Safely'
  },
  {
    id: 'hpc-inference-engine',
    title: 'High-Performance LLM Inference & Context Routing Substrate',
    category: 'LLM & Inference',
    tagline: 'Distributed GPU Cluster Orchestration with Speculative Acceleration',
    description: 'Constructed an elastic inference router distributing requests across our NVIDIA H100 supercluster with continuous batching, dynamic KV caching, and model-agnostic fallback mechanisms.',
    architecture: [
      'Hardware-aware load balancer dynamically routing tasks by prompt token density',
      'PagedAttention KV cache memory optimization minimizing GPU VRAM fragmentation',
      'Multi-node tensor parallelism over InfiniBand Quantum-2 interconnects',
      'Automatic fallback to local quantized reasoning nodes during network congestion'
    ],
    technologies: ['Triton Inference Server', 'vLLM', 'CUDA', 'InfiniBand', 'Ray Cluster'],
    metrics: '4.8x Higher Tokens/Sec • Sub-12ms Time-To-First-Token (TTFT)'
  },
  {
    id: 'verifiable-memory-substrate',
    title: 'Deterministic Episodic Memory & Lineage Repository',
    category: 'Distributed Systems',
    tagline: 'Cryptographically Verified Semantic Knowledge Graph for Autonomous Workloads',
    description: 'Designed a decentralized context repository preserving full data provenance and vector lineages across long-running autonomous agent sessions, eliminating drift and temporal hallucinations.',
    architecture: [
      'Hybrid dense-sparse vector embedding indices with real-time graph relation updates',
      'Cryptographic hashing of ingested context fragments for evidentiary verification',
      'Zero-retention ephemeral memory enclaves for HIPAA and financial compliance',
      'Distributed consensus layer synchronizing agent knowledge states across edge nodes'
    ],
    technologies: ['Qdrant', 'Rust', 'Raft Consensus', 'GraphQL', 'AWS GovCloud'],
    metrics: '100% Traceable Lineage • 10M+ Context Embeddings Ingested in Real-Time'
  }
];

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: 'event-mcp-summit',
    title: 'Building Enterprise MCP Servers: Architecture & Real-World Case Studies',
    type: 'Webinar',
    date: 'Thursday, November 12, 2026',
    time: '11:00 AM – 12:30 PM CST',
    location: 'Virtual Live Stream & Interactive Q&A',
    description: 'Deep dive into Model Context Protocol (MCP) server design, securing enterprise data gateways, and connecting LLM reasoning engines with production internal APIs.',
    speaker: 'Hariharan Babu (CEO) & DOS3.AI Protocol Engineering Team',
    bookingUrl: EXTERNAL_LINKS.bookingSchedule
  },
  {
    id: 'event-dallas-ai-meetup',
    title: 'Dallas AI Systems Meetup: Deterministic Reasoning at Scale',
    type: 'In-Person Meetup',
    date: 'Wednesday, November 25, 2026',
    time: '6:00 PM – 8:30 PM CST',
    location: 'Dallas Tech Innovation Hub, Dallas, Texas',
    description: 'Meet the DOS3.AI engineering team in person. Keynotes on GPU cluster orchestration, verifiable multi-agent swarms, and live demonstrations of the 5-layer platform.',
    speaker: 'Hariharan Babu (CEO) & Invited Research Fellows',
    bookingUrl: EXTERNAL_LINKS.bookingSchedule
  },
  {
    id: 'event-office-hours',
    title: '1-on-1 Architecture Discovery & Technical Office Hours',
    type: '1-on-1 Office Hours',
    date: 'Weekly Booking (Tuesdays & Thursdays)',
    time: '30-Minute Dedicated Architecture Slots',
    location: 'Microsoft Teams / Direct Schedule',
    description: 'Reserve a 30-minute private technical consultation with our engineering leadership to review your custom AI agent and MCP server requirements.',
    speaker: 'DOS3.AI Systems Architecture Council',
    bookingUrl: EXTERNAL_LINKS.bookingSchedule
  }
];

export const RESEARCH_ARTICLES_DETAILED: ResearchArticle[] = [
  {
    id: 'wp-01',
    title: 'Architectures for Verifiable Multi-Step Machine Reasoning',
    category: 'AI Safety & Verification',
    readTime: 'Technical Briefing',
    status: 'Working Paper in Preparation',
    abstract: 'An investigation into deterministic validation gates and permission harnesses that prevent autonomous drift in agentic task pipelines.',
    fullOverview: 'As autonomous agentic systems are deployed to orchestrate enterprise databases, infrastructure configurations, and critical transactions, non-deterministic model drift presents catastrophic reliability risks. This paper proposes a formal mathematical harness combining typed contract DAGs with hardware-enforced permission barriers.',
    architectureDetails: [
      'Typed Input/Output Schema Enforcement: Every agent tool invocation must strictly conform to verifiable Zod/Protobuf contracts.',
      'Deterministic Sandbox Boundaries: Workload execution takes place in ephemeral Linux namespaces with zero network egress unless explicitly authorized.',
      'Human-in-the-Loop Threshold Checkpoints: Automated cryptographic verification prevents state commitment until designated security thresholds are met.'
    ],
    benchmarks: [
      'Zero unauthorized tool invocations over 100,000 synthetic multi-agent test iterations.',
      'P95 latency overhead introduced by validation gates kept below 1.4 milliseconds.',
      '100% reproducible audit logs verifiable against SHA-256 state chain hashes.'
    ],
    citations: 'Babu, H. et al. (2026). "Architectures for Verifiable Multi-Step Machine Reasoning: Bounding Drift in Autonomous Agentic Pipelines." DOS3.AI Technical Briefing Series, 26(01).'
  },
  {
    id: 'wp-02',
    title: 'Decoupled Context Repositories for Heterogeneous AI Workloads',
    category: 'Data Infrastructure',
    readTime: 'Systems Note',
    status: 'Research Note',
    abstract: 'Analyzing data lineage preservation and schema drift mitigation when feeding streaming operational event logs into reasoning models.',
    fullOverview: 'Modern enterprise AI systems ingest streaming telemetry from Kafka, relational stores, and unstructured documents. When vector indexing occurs without deterministic provenance tracking, retrieval models suffer from temporal hallucinations and conflicting state assumptions. This note presents our decoupled context repository architecture.',
    architectureDetails: [
      'Time-Travel Vector Indexing: Preserves historical semantic snapshots allowing agents to query system states at any arbitrary unix epoch.',
      'Schema Drift Isolation: Automated semantic anomaly detectors identify when incoming data fields mutate before feeding context into LLM prompts.',
      'Multi-Tenant Cryptographic Partitioning: Ensures tenant isolation without duplicating common underlying foundation embeddings.'
    ],
    benchmarks: [
      '99.9% semantic recall accuracy across streaming telemetry up to 50,000 events/second.',
      'Complete elimination of temporal hallucination errors in operational troubleshooting benchmarks.'
    ],
    citations: 'DOS3.AI Research Council (2026). "Decoupled Context Repositories for Heterogeneous AI Workloads." DOS3 Systems Notes, SN-26-02.'
  },
  {
    id: 'wp-03',
    title: 'Fault-Tolerant State Coordination Across Edge and Core Compute Fabrics',
    category: 'Distributed Systems',
    readTime: 'Architecture Study',
    status: 'In Development',
    abstract: 'Examining low-overhead consensus protocols and hardware-enforced isolation enclaves across multi-tier enterprise server environments.',
    fullOverview: 'Edge computing nodes often experience intermittent connectivity and constrained memory. This paper investigates a lightened Raft consensus variant optimized for synchronizing agentic state machines between local edge appliances and central NVIDIA H100 superclusters.',
    architectureDetails: [
      'Optimistic Local State Commit with Eventual Central Harmonization.',
      'Hardware-Enforced Enclave Encryption (AMD SEV-SNP & Intel SGX) at both edge and core.',
      'Zero-Copy Serialization over RoCEv2 network fabrics.'
    ],
    benchmarks: [
      'Failover recovery under node failure reduced to 18 milliseconds.',
      'Bandwidth footprint lowered by 72% compared to standard distributed state replication.'
    ],
    citations: 'Babu, H. & Systems Engineering Group (2026). "Fault-Tolerant State Coordination Across Edge and Core Compute Fabrics." DOS3.AI Architecture Studies, AS-26-03.'
  },
  {
    id: 'wp-04',
    title: 'Evaluating Model Independence in Enterprise Software Gateways',
    category: 'Systems Architecture',
    readTime: 'Technical Briefing',
    status: 'Working Paper in Preparation',
    abstract: 'Methodologies for abstracting underlying foundational models behind strictly typed, verifiable contract boundaries.',
    fullOverview: 'Proprietary foundation models evolve unpredictably with frequent deprecations, prompting drift, and API price shifts. This briefing presents an architectural methodology to maintain complete foundation model independence through standardized contract interfaces.',
    architectureDetails: [
      'Prompt-Agnostic Semantic Translation Layer mapping business logic to model-specific formats.',
      'Automated Multi-Model Consensus Benchmarking comparing outputs across closed and open-source models.',
      'Zero-Downtime Hot-Swapping of underlying foundation model providers.'
    ],
    benchmarks: [
      'Zero application-level code alterations required when switching foundation models.',
      'Benchmark parity of 98.7% verified across 4 diverse commercial and open-weight models.'
    ],
    citations: 'DOS3.AI Research Lab (2026). "Evaluating Model Independence in Enterprise Software Gateways." DOS3.AI Technical Briefing, 26(04).'
  }
];

export const ECOSYSTEM_TOOLS = [
  { name: 'Model Context Protocol (MCP)', category: 'Protocols', tag: 'Core Protocol' },
  { name: 'Agentic AI Swarms', category: 'Agentic AI', tag: 'Orchestration' },
  { name: 'PyTorch 2.5', category: 'Deep Learning', tag: 'Framework' },
  { name: 'LangGraph & AutoGen', category: 'Agentic AI', tag: 'Execution' },
  { name: 'vLLM & TensorRT-LLM', category: 'Inference', tag: 'High-Throughput' },
  { name: 'Triton Inference Server', category: 'Compute', tag: 'NVIDIA Engine' },
  { name: 'CUDA 12.6 & Triton', category: 'GPU Kernels', tag: 'Hardware Acceleration' },
  { name: 'NVIDIA H100 HPC Clusters', category: 'HPC Supercomputing', tag: 'Superclusters' },
  { name: 'Ray Distributed Computing', category: 'Distributed Systems', tag: 'Scaling' },
  { name: 'Slurm Workload Manager', category: 'HPC', tag: 'Cluster Scheduling' },
  { name: 'Qdrant & Milvus Vector Engines', category: 'Semantic Data', tag: 'Context Stores' },
  { name: 'Kubernetes & Docker Enclaves', category: 'Infrastructure', tag: 'Security Enclaves' }
];

export const PARTNERSHIPS_DATA = {
  hpcTitle: 'High-Performance Computing (HPC) Supercomputing Fabric',
  hpcDescription: 'Operating high-performance GPU superclusters with NVIDIA H100 Tensor Core GPUs, InfiniBand Quantum-2 low-latency networking, and Slurm cluster orchestration tailored for intensive reasoning model training and real-time agentic execution.',
  cloudPartners: ['AWS AI Partner Network', 'Google Cloud Vertex AI', 'Microsoft Azure AI Infrastructure'],
  researchLabs: ['Academic AI Safety Consortia', 'Open Model Context Protocol (MCP) Working Groups', 'Distributed Systems Research Initiative']
};

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
    description: 'Exploring modern computing fabrics, server topologies, and edge environments that power distributed workloads and connected digital ecosystems.',
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
    general: 'hello@dos3.ai',
    business: 'hello@dos3.ai',
    careers: 'careers@dos3.ai',
    security: 'security@dos3.ai',
  }
};
