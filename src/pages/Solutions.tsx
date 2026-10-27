import React, { useState } from 'react';
import { Briefcase, ArrowRight, Server, Shield, Database, Activity, Landmark, ShieldAlert, Cpu, Download, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { TiltCard } from '../components/TiltCard';
import { PreviousProjects } from '../components/PreviousProjects';
import { BuildAgentCTA } from '../components/BuildAgentCTA';
import { EXTERNAL_LINKS } from '../data/content';

export const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'persona' | 'industry'>('persona');

  const personas = [
    {
      title: 'For Machine Learning & AI Engineers',
      role: 'ML & Systems Developers',
      icon: <Cpu className="w-6 h-6 text-dos-cyan" />,
      challenge: 'Dealing with fragile model glue, erratic hallucination rates, and lack of deterministic execution environments for multi-step reasoning.',
      solution: 'Contract-driven agent runtimes, model-agnostic abstraction boundaries, and deterministic verification harnesses that catch errors before execution.',
      outcome: 'Confidence in production deployments with reproducible evaluation telemetry and automated fallback policies.'
    },
    {
      title: 'For Chief Technology Officers & Architects',
      role: 'System Architects & Engineering Leaders',
      icon: <Server className="w-6 h-6 text-dos-azure" />,
      challenge: 'Sprawling vendor lock-in, ballooning GPU compute costs, and architectural fragmentation across cloud providers and on-premise clusters.',
      solution: 'Unified 5-layer computational fabric bridging raw hardware with high-level software interfaces, giving teams complete control over their deployment topology.',
      outcome: 'Predictable infrastructure economics, hardware portability, and clean abstraction layers that outlive individual AI model hype cycles.'
    },
    {
      title: 'For Chief Information Security Officers',
      role: 'CISO & Security Reviewers',
      icon: <Shield className="w-6 h-6 text-dos-magenta" />,
      challenge: 'Unsanctioned AI tools accessing sensitive internal datasets, data leakage across multi-tenant APIs, and ambiguous subprocessor liability.',
      solution: 'Zero-trust permission boundaries, cryptographic tenant isolation, least-privilege tool execution, and clear audit logging of all computational decisions.',
      outcome: 'Complete architectural auditability, verifiable data residency, and proactive defense against unauthorized data exploitation.'
    }
  ];

  const industries = [
    {
      title: 'Financial Services & Quantitative Systems',
      icon: <Landmark className="w-6 h-6 text-dos-cyan" />,
      need: 'High-throughput algorithmic transaction analysis requiring deterministic latency and absolute audibility.',
      approach: 'Hardware-isolated execution enclaves with immutable audit trails, ensuring every automated action is backed by cryptographic evidence.'
    },
    {
      title: 'Health Sciences & Regulated Data',
      icon: <Activity className="w-6 h-6 text-dos-azure" />,
      need: 'Strict data residency and privacy controls when contextualizing complex biomedical literature and clinical records.',
      approach: 'Zero-retention context retrieval pipelines and tenant-isolated compute partitions that process data without exposing underlying datasets.'
    },
    {
      title: 'Enterprise Software & Cloud Platforms',
      icon: <Database className="w-6 h-6 text-dos-violet" />,
      need: 'Transforming legacy monolithic systems into responsive, event-driven microservices capable of consuming machine intelligence.',
      approach: 'Modular contract gateways and declarative API frameworks that integrate computational reasoning directly into existing CI/CD workflows.'
    },
    {
      title: 'Critical Infrastructure & Public Sector',
      icon: <ShieldAlert className="w-6 h-6 text-dos-magenta" />,
      need: 'Operational resiliency where system downtime or unauthorized automated actions carry high societal consequences.',
      approach: 'Human-in-the-loop authorization gates and formal mathematical verification before state changes are committed to production systems.'
    }
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-dos-surface border border-dos-border text-dos-cyan mb-6">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Architectural Solutions</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-dos-cloud tracking-tight leading-tight mb-6">
          Engineered for <span className="text-gradient">Real-World Scale.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-dos-mist/85 leading-relaxed font-sans mb-8">
          Explore how DOS3.AI addresses complex technical requirements across specific engineering personas, high-stakes operational sectors, and custom enterprise agent swarms.
        </p>

        {/* Tab Toggle */}
        <div className="inline-flex p-1.5 rounded-xl bg-dos-surface border border-dos-border/80">
          <button
            type="button"
            onClick={() => setActiveTab('persona')}
            className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'persona' ? 'bg-dos-azure text-white shadow-glow-azure/30' : 'text-dos-mist hover:text-white'
            }`}
          >
            By Engineering Persona
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('industry')}
            className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'industry' ? 'bg-dos-azure text-white shadow-glow-azure/30' : 'text-dos-mist hover:text-white'
            }`}
          >
            By Industry Context
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        {activeTab === 'persona' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {personas.map((item, idx) => (
              <TiltCard key={idx} className="glass-card p-8 border border-dos-border/60 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-dos-surface border border-dos-border flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono text-dos-cyan uppercase tracking-wider block mb-2">
                    {item.role}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-dos-cloud mb-4">
                    {item.title}
                  </h3>

                  <div className="space-y-4 text-xs font-sans">
                    <div className="p-3.5 rounded-xl bg-dos-surface/80 border border-dos-border/40">
                      <strong className="text-dos-cloud uppercase tracking-wider text-[10px] block mb-1">
                        Core Challenge
                      </strong>
                      <p className="text-dos-mist/80 leading-relaxed">{item.challenge}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-dos-surface/80 border border-dos-border/40">
                      <strong className="text-dos-cyan uppercase tracking-wider text-[10px] block mb-1">
                        Architectural Solution
                      </strong>
                      <p className="text-dos-mist/80 leading-relaxed">{item.solution}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-dos-surface/80 border border-dos-cyan/30">
                      <strong className="text-dos-cloud uppercase tracking-wider text-[10px] block mb-1">
                        Target Outcome
                      </strong>
                      <p className="text-dos-mist/90 leading-relaxed">{item.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-dos-border/40">
                  <a
                    href={EXTERNAL_LINKS.bookingSchedule}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-dos-surface hover:bg-dos-surfaceHover border border-dos-border/70 text-xs font-semibold text-dos-mist hover:text-white transition-all"
                  >
                    <span>Discuss Architecture with Team</span>
                    <ExternalLink className="w-3.5 h-3.5 text-dos-cyan" />
                  </a>
                </div>
              </TiltCard>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind, idx) => (
              <TiltCard key={idx} className="glass-card p-8 sm:p-10 border border-dos-border/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-dos-surface border border-dos-border flex items-center justify-center shrink-0">
                      {ind.icon}
                    </div>
                    <h3 className="text-xl font-bold font-heading text-dos-cloud">
                      {ind.title}
                    </h3>
                  </div>

                  <div className="space-y-4 text-xs font-sans">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-dos-mist/60 block mb-1">
                        Sector Requirement
                      </span>
                      <p className="text-sm text-dos-mist/85 leading-relaxed">{ind.need}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-dos-surface/90 border border-dos-border/60">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-dos-cyan block mb-1">
                        Engineered Approach
                      </span>
                      <p className="text-xs text-dos-mist/80 leading-relaxed">{ind.approach}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-dos-border/40">
                  <a
                    href={EXTERNAL_LINKS.bookingSchedule}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-dos-surface hover:bg-dos-surfaceHover border border-dos-border/70 text-xs font-semibold text-dos-mist hover:text-white transition-all"
                  >
                    <span>Explore Industry Feasibility</span>
                    <ExternalLink className="w-3.5 h-3.5 text-dos-cyan" />
                  </a>
                </div>
              </TiltCard>
            ))}
          </div>
        )}
      </div>

      {/* Previous Projects Showcase in Solutions (Requirement #12) */}
      <PreviousProjects />

      {/* Build Own AI Agent & Custom MCP Server (Requirement #16) */}
      <BuildAgentCTA />

      {/* Meeting Discovery Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-dos-border/70 space-y-4 shadow-xl">
          <span className="text-xs font-mono text-dos-cyan uppercase tracking-wider block">
            Direct Engineering Engagement
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-dos-cloud">
            Have a Specific Architectural Challenge?
          </h2>
          <p className="text-sm text-dos-mist/80 max-w-xl mx-auto leading-relaxed">
            Our engineering leadership and 50+ researchers consult directly with CTOs and enterprise architects to evaluate workload requirements, security boundaries, and custom MCP integrations.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href={EXTERNAL_LINKS.bookingSchedule}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-dos-cyan to-dos-azure text-black font-semibold text-xs tracking-wide uppercase hover:opacity-95 shadow-glow-cyan/25 flex items-center gap-2 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book 30-Min Architecture Discovery</span>
            </a>
            <a
              href={EXTERNAL_LINKS.manualPdf}
              download="DOS3AI_Architecture_Manual.pdf"
              className="px-5 py-3 rounded-xl bg-dos-surface hover:bg-dos-surfaceHover border border-dos-cyan/40 text-dos-cyan text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Architecture Manual</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
