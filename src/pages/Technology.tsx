import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Database, Layers, Server, Cpu, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { ENGINEERING_PRINCIPLES } from '../data/content';

export const Technology: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const techSections = [
    {
      id: 'data-intelligence',
      title: 'Data & Intelligence',
      subtitle: 'The Semantic Grounding Layer',
      icon: <Database className="w-6 h-6 text-dos-cyan" />,
      whatItInvolves: 'The ingestion, transformation, structuring, and semantic modeling of operational information across heterogeneous sources.',
      problemsAddressed: [
        'Information silos where data cannot be contextualized across departmental tools',
        'Data drift, schema fragmentation, and latency in real-time pipelines',
        'Lack of verifiable data lineage and provenance in automated workflows'
      ],
      whyItMatters: 'Intelligent systems are only as competent as the quality and context of the data they ingest. Grounded intelligence requires clean, structured, and auditable information foundations.',
      howWeExplore: 'DOS3.AI investigates context-aware data graphs, streaming event verification, and semantic retrieval layers designed to supply downstream systems with mathematically grounded context.',
      status: 'Research & Architecture Modeling'
    },
    {
      id: 'software-systems',
      title: 'Software Engineering & Systems',
      subtitle: 'Resilient Execution Architecture',
      icon: <Layers className="w-6 h-6 text-dos-azure" />,
      whatItInvolves: 'The discipline of designing fault-tolerant, modular, and high-performance software environments, system runtimes, and execution protocols.',
      problemsAddressed: [
        'Fragile coupling between high-level applications and low-level system calls',
        'Nondeterministic state synchronization across distributed worker nodes',
        'Execution failures due to unhandled concurrency anomalies and network partitions'
      ],
      whyItMatters: 'Modern digital operations require deterministic reliability. Software must gracefully absorb node failures, network latency, and fluctuating load patterns without human intervention.',
      howWeExplore: 'We explore modular micro-kernels, typed boundary interfaces, and state-machine replication protocols that enforce reliability at compile time and runtime.',
      status: 'Conceptual Architecture & Prototyping'
    },
    {
      id: 'computing-infrastructure',
      title: 'Computing Infrastructure',
      subtitle: 'Hybrid & Distributed Fabrics',
      icon: <Server className="w-6 h-6 text-dos-cyan" />,
      whatItInvolves: 'The physical and virtual compute topologies, networking protocols, and resource allocators that orchestrate server hardware across cloud and on-premises environments.',
      problemsAddressed: [
        'High latency between data residency points and accelerated compute clusters',
        'Compute resource starvation and inefficient GPU/CPU memory allocation',
        'Complex cross-cloud orchestration and strict security boundary enforcement'
      ],
      whyItMatters: 'As computation-heavy workloads scale, the underlying infrastructure must remain cost-effective, elastically scalable, and secure against multi-tenant interference.',
      howWeExplore: 'Our investigations focus on low-overhead workload scheduling, edge-to-core computational orchestration, and hardware-isolated execution enclaves.',
      status: 'Exploratory Systems Modeling'
    },
    {
      id: 'digital-services',
      title: 'Digital Services',
      subtitle: 'Interoperable Interfaces & APIs',
      icon: <Cpu className="w-6 h-6 text-dos-violet" />,
      whatItInvolves: 'The API layers, messaging protocols, and integration frameworks that connect business applications with underlying compute fabrics.',
      problemsAddressed: [
        'Disjointed API standards that increase developer integration friction',
        'Lack of unified governance, access control, and telemetry across multi-tier services',
        'Inflexible synchronous service architectures that fail during traffic spikes'
      ],
      whyItMatters: 'Technology creates practical value only when it can be seamlessly consumed by developers, partner systems, and end-user applications.',
      howWeExplore: 'We explore declarative API specifications, event-driven streaming gateways, and fine-grained authorization layers that allow services to communicate reliably.',
      status: 'Interface Design & Protocol Research'
    },
    {
      id: 'artificial-intelligence',
      title: 'Artificial Intelligence',
      subtitle: 'Grounded & Verifiable Reasoning',
      icon: <Sparkles className="w-6 h-6 text-dos-magenta" />,
      whatItInvolves: 'The practical application of machine learning, statistical reasoning models, and agentic task orchestration to automate real-world multi-step tasks.',
      problemsAddressed: [
        'Unpredictable model hallucinations and lack of verifiable task execution',
        'Unsafe autonomous actions executed without explicit human policy controls',
        'Difficulty evaluating model performance against objective, reproducible criteria'
      ],
      whyItMatters: 'For AI to become truly enterprise-grade, it must operate with demonstrable accuracy, strict permission limits, and evidence-based verification rather than blind trust.',
      howWeExplore: 'DOS3.AI studies model-agnostic task planning, deterministic verification harnesses, and permission-gated execution architectures that ensure AI acts safely within predefined parameters.',
      status: 'Algorithmic Research & Safety Frameworks'
    }
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-dos-surface border border-dos-border text-dos-cyan mb-6">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technology Overview</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-dos-cloud tracking-tight leading-tight mb-6">
          The Architecture of{' '}
          <span className="text-gradient">Connected Computing.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-dos-mist/85 leading-relaxed font-sans mb-8">
          A comprehensive overview of our technology focus areas: exploring the interplay of software, data systems, computing infrastructure, digital services, and artificial intelligence.
        </p>

        {/* Clear status clarification to prevent overstatement */}
        <div className="max-w-2xl mx-auto p-4 rounded-xl bg-dos-surface/70 border border-dos-border/60 text-xs text-dos-mist/80 leading-relaxed font-sans">
          <strong className="text-dos-cyan font-semibold">Scope & Disclosure:</strong> The technical areas detailed below represent our core fields of active engineering exploration, system prototyping, and conceptual research. We clearly distinguish between ongoing development initiatives and future commercial availability.
        </div>
      </div>

      {/* 5 Deep-Dive Tech Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-24">
        {techSections.map((sec, idx) => (
          <section
            key={sec.id}
            id={sec.id}
            className="glass-card rounded-3xl p-8 sm:p-12 border border-dos-border/60 scroll-mt-28 relative overflow-hidden transition-colors hover:border-dos-cyan/40"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-dos-border/40 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-dos-surface border border-dos-border flex items-center justify-center shrink-0">
                  {sec.icon}
                </div>
                <div>
                  <span className="text-xs font-mono text-dos-cyan uppercase tracking-wider block">
                    Focus Area 0{idx + 1} • {sec.subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-dos-cloud">
                    {sec.title}
                  </h2>
                </div>
              </div>

              <div className="self-start md:self-auto px-3 py-1 rounded-full text-xs font-mono bg-dos-surface border border-dos-border/80 text-dos-mist/80">
                {sec.status}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-dos-cloud mb-2">
                    What This Field Involves
                  </h3>
                  <p className="text-dos-mist/80 leading-relaxed font-sans">
                    {sec.whatItInvolves}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-dos-cloud mb-2">
                    Why It Matters
                  </h3>
                  <p className="text-dos-mist/80 leading-relaxed font-sans">
                    {sec.whyItMatters}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-dos-cloud mb-2">
                    Challenges Addressed
                  </h3>
                  <ul className="space-y-2">
                    {sec.problemsAddressed.map((prob, pIdx) => (
                      <li key={pIdx} className="text-dos-mist/75 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-dos-cyan mt-0.5 shrink-0" />
                        <span>{prob}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-dos-surface/90 border border-dos-border/60">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-dos-cyan mb-1.5">
                    How DOS3.AI Explores It
                  </h3>
                  <p className="text-xs text-dos-mist/80 leading-relaxed font-sans">
                    {sec.howWeExplore}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 6. ENGINEERING PRINCIPLES */}
      <section className="py-20 bg-dos-midnight/30 border-y border-dos-border/30 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Standards"
            title="Core Engineering Principles"
            subtitle="The non-negotiable guidelines that shape our technical roadmap and design choices."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ENGINEERING_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="glass-card rounded-2xl p-8 border border-dos-border/60"
              >
                <span className="font-mono text-2xl font-bold text-dos-cyan mb-3 block">
                  {principle.number}
                </span>
                <h3 className="text-xl font-bold font-heading text-dos-cloud mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-dos-mist/80 leading-relaxed font-sans">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-dos-cloud">
          Interested in Technical Collaboration?
        </h2>
        <p className="text-sm sm:text-base text-dos-mist/80 max-w-xl mx-auto font-sans leading-relaxed">
          We welcome technical dialogue with researchers, engineers, and organizations working on similar systems challenges.
        </p>
        <div className="pt-2">
          <Button to="/contact" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            Connect With the Team
          </Button>
        </div>
      </div>
    </div>
  );
};
