import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Cpu, Code2, Globe, Sparkles, Terminal, CheckCircle2, Copy, Check, Server, Database, Layers, ExternalLink, Zap, ChevronDown, Download, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { ThreeCanvas } from '../components/ThreeCanvas';
import { NetworkCanvas } from '../components/NetworkCanvas';
import { TiltCard } from '../components/TiltCard';
import { TechEcosystemLoop } from '../components/TechEcosystemLoop';
import { PreviousProjects } from '../components/PreviousProjects';
import { BuildAgentCTA } from '../components/BuildAgentCTA';
import { PeopleSection } from '../components/PeopleSection';
import { Newsletter } from '../components/Newsletter';
import { TECHNOLOGY_PILLARS, ENGINEERING_PRINCIPLES, EXTERNAL_LINKS, COMPANY_STATS } from '../data/content';

export const Home: React.FC = () => {
  // Accordion state for 5-layer platform architecture (Requirement #4)
  const [activeLayer, setActiveLayer] = useState<number | null>(0);
  const [codeLanguage, setCodeLanguage] = useState<'typescript' | 'python' | 'curl'>('typescript');
  const [copied, setCopied] = useState<boolean>(false);

  const layers = [
    {
      id: 'data',
      name: 'Data',
      subtitle: 'LAYER 01 • THE SEMANTIC FOUNDATION',
      description: 'Knowledge graphs, streaming event verification, and verifiable context lineage that ensure reasoning systems operate on factual ground truth rather than ungrounded assumptions.',
      specs: 'Knowledge Graph Ingestion • Semantic Context Repositories • Deterministic Data Lineage',
      deepDive: 'Ingests heterogeneous relational streams, vector representations, and operational event logs into a cryptographically verified context fabric.'
    },
    {
      id: 'operating-systems',
      name: 'Operating Systems',
      subtitle: 'LAYER 02 • RESILIENT EXECUTION',
      description: 'Micro-kernel abstractions, memory-safe execution runtimes, and low-latency system-call interfaces tailored for high-concurrency autonomous agent tasks.',
      specs: 'Memory-Safe Runtimes • Workload Sandboxing • Concurrency State Replication',
      deepDive: 'Provides fault-tolerant isolation boundaries ensuring failing agent processes cannot compromise neighboring system states.'
    },
    {
      id: 'servers',
      name: 'Servers',
      subtitle: 'LAYER 03 • DISTRIBUTED COMPUTE',
      description: 'Elastic compute topology coordinating GPU/CPU clusters across localized edge nodes and hybrid cloud backends with strict tenant isolation and sub-10ms latency.',
      specs: 'Hardware-Enforced Enclaves • Dynamic GPU Allocation • Low-Latency InfiniBand',
      deepDive: 'Orchestrates multi-node NVIDIA H100 GPU clusters, continuous batching, and distributed KV cache memory allocation via Slurm.'
    },
    {
      id: 'services',
      name: 'Services',
      subtitle: 'LAYER 04 • INTEROPERABLE APIS',
      description: 'Service-oriented contract interfaces, streaming event buses, and zero-trust permission gateways designed for seamless Model Context Protocol (MCP) tool calling.',
      specs: 'Declarative Contract APIs • Zero-Trust Gateways • Event-Driven Bus Architecture',
      deepDive: 'Exposes standardized MCP servers allowing foundation models to securely interact with enterprise databases and internal endpoints.'
    },
    {
      id: 'artificial-intelligence',
      name: 'Artificial Intelligence',
      subtitle: 'LAYER 05 • GROUNDED MACHINE REASONING',
      description: 'Model-agnostic task orchestration, deterministic verification harnesses, and human-in-the-loop permission checkpoints that prevent autonomous drift.',
      specs: 'Model-Agnostic Planners • Deterministic Safety Gates • Empirical Verification',
      deepDive: 'Enforces mathematical guardrails ensuring autonomous multi-step reasoning plans cannot execute unverified side-effects.'
    }
  ];

  const capabilities = [
    {
      title: 'Context-Grounded Information',
      metric: 'Zero Hallucination Tolerance',
      description: 'Converts unstructured operational knowledge into verifiable context representations that ground every computational step.'
    },
    {
      title: 'Hardware-Isolated Enclaves',
      metric: 'Tenant Isolation',
      description: 'Cryptographically bounded compute partitions that ensure sensitive client data remains completely inaccessible to neighboring workloads.'
    },
    {
      title: 'Deterministic State Recovery',
      metric: 'High Resilience',
      description: 'Automated state-machine checkpoints that seamlessly restore execution pipelines across node dropouts or network partitions.'
    },
    {
      title: 'Model-Agnostic Abstraction',
      metric: 'Future-Proof',
      description: 'Swap underlying foundation models without rewriting high-level application code or breaking existing API contracts.'
    },
    {
      title: 'Human-in-the-Loop Gates',
      metric: 'Strict Governance',
      description: 'Enforce explicit cryptographic sign-offs for high-consequence operations, database mutations, or external API transactions.'
    },
    {
      title: 'Auditable Execution Traces',
      metric: '100% Traceability',
      description: 'Every decision, retrieved context fragment, and tool execution is recorded in an immutable, inspectable telemetry stream.'
    }
  ];

  const codeSnippets = {
    typescript: `import { DOS3Client } from '@dos3/sdk';

// Initialize DOS3 client with isolated tenant scope
const client = new DOS3Client({
  endpoint: 'https://api.dos3.ai/v1',
  credentials: process.env.DOS3_API_KEY
});

// Configure task execution with deterministic safety gates
const session = await client.orchestrate({
  goal: 'Synthesize operational telemetry across edge nodes',
  contextSources: ['knowledge-graph://production-systems'],
  verificationLevel: 'strict',
  requireHumanConfirmation: ['database-write', 'external-network']
});

const result = await session.execute();
console.log('Verified Result:', result.proofToken);`,
    python: `from dos3 import DOS3Client, VerificationMode

# Initialize client in secure enclave
client = DOS3Client(
    endpoint="https://api.dos3.ai/v1",
    api_key=os.environ["DOS3_API_KEY"]
)

# Plan and execute multi-step workload
plan = client.plan_workload(
    objective="Analyze multi-cluster GPU utilization",
    verification=VerificationMode.DETERMINISTIC,
    timeout_seconds=30
)

# Stream verified trace
for step in plan.stream_steps():
    print(f"Step [{step.index}]: {step.status} -> {step.verification_hash}")`,
    curl: `curl -X POST https://api.dos3.ai/v1/orchestrate \\
  -H "Authorization: Bearer $DOS3_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "tenantId": "org-cluster-01",
    "goal": "Replicate state machine across distributed nodes",
    "verificationPolicy": "strict",
    "humanApprovalRequired": true
  }'`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[codeLanguage]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden pt-20">
      {/* 1. HERO SECTION (Requirement #9: Removed 4 lines text, added organization platform core visual) */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-14 pb-20 lg:pt-20 lg:pb-28">
        {/* Interactive 3D WebGL Core Background */}
        <ThreeCanvas className="opacity-60" />

        {/* 2D Particle constellation overlay */}
        <NetworkCanvas density={30} className="opacity-35" />

        {/* Ambient Gradient Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-dos-cyan/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-dos-azure/15 rounded-full blur-[180px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wide uppercase bg-dos-surface/90 border border-dos-border/80 text-dos-cyan mb-6 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-dos-cyan animate-pulse"></span>
            <span>Technology • Systems • Data • Services • AI</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-dos-cloud tracking-tight leading-[1.1] mb-8">
            Building Intelligent Technology for a{' '}
            <span className="text-gradient">Connected World.</span>
          </h1>

          {/* Requirement #9: The 4 lines of text have been replaced by the futuristic architectural visual of what DOS3.AI is building */}
          <div className="relative max-w-4xl mx-auto mb-10 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-dos-cyan via-dos-azure to-dos-violet rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-dos-cyan/40 bg-dos-void shadow-2xl">
              <img
                src="/images/dos3_platform_core.jpg"
                alt="DOS3.AI Autonomous Computing Fabric - 5 Connected Layers"
                className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition duration-700 max-h-[460px]"
                loading="eager"
              />
              
              {/* Overlay Badges */}
              <div className="hero-core-overlay absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-wrap items-center justify-between gap-2 p-3 rounded-2xl bg-dos-void/85 backdrop-blur-md border border-dos-border/70 text-left">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-dos-cyan animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-dos-cloud">
                    DOS3.AI Substrate: Data • OS • Servers • Services • AI
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-dos-mist/80">
                  <span className="hidden sm:inline">Dallas HPC Superclusters</span>
                  <span className="badge-h100 px-2 py-0.5 rounded bg-dos-surface border border-dos-cyan/40 text-dos-cyan">
                    H100 Powered
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <Button
              to="/technology"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto justify-center"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore Our Technology
            </Button>
            <a
              href={EXTERNAL_LINKS.bookingSchedule}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-dos-surface hover:bg-dos-surfaceHover border border-dos-cyan/40 text-dos-cyan text-sm font-semibold transition-all hover:shadow-glow-cyan/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Connect With Us</span>
            </a>
            <a
              href={EXTERNAL_LINKS.manualPdf}
              download="DOS3AI_Architecture_Manual.pdf"
              className="btn-manual-download w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-dos-surface/80 hover:bg-dos-surface border border-dos-border text-dos-mist hover:text-white text-sm font-semibold transition-all"
            >
              <Download className="w-4 h-4 text-dos-azure" />
              <span>Manual (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. PROOF STRIP (With Dallas Maps link, 50+ Team Size, Standards) */}
      <section className="py-6 sm:py-8 border-y border-dos-border/30 bg-dos-midnight/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-center justify-center lg:justify-between gap-4 sm:gap-6 text-center text-xs font-mono text-dos-mist/80">
            {/* Dallas Location with Google Maps Redirect (Requirement #11) */}
            <a
              href={EXTERNAL_LINKS.dallasMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center lg:justify-start gap-2 hover:text-dos-cyan transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-dos-cyan shrink-0" />
              <span>Dallas, Texas Headquarters</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            {/* Team Size Badge (Requirement #17) */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-dos-cyan">
              <Users className="w-3.5 h-3.5 text-dos-cyan shrink-0" />
              <span className="font-semibold">{COMPANY_STATS.teamSize}</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-dos-azure shrink-0" />
              <span>NVIDIA H100 Superclusters</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-dos-magenta shrink-0" />
              <span>Deterministic Verification Architecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLATFORM ARCHITECTURE - ACCORDION EXPANSION (Requirement #4: Content expands downwards under clicked layer) */}
      <section className="py-24 lg:py-32 border-t border-dos-border/30 bg-dos-midnight/30 relative" id="platform-architecture">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Platform Architecture"
            title="One Architecture. Five Connected Layers."
            subtitle="The name DOS3.AI defines our structural platform hierarchy: Data, Operating Systems, Servers, Services, and AI operating in harmony."
          />

          {/* Accordion Layer Stack: Content expands downwards directly under each clicked layer */}
          <div className="space-y-4">
            {layers.map((layer, idx) => {
              const isSelected = activeLayer === idx;
              return (
                <div
                  key={layer.id}
                  className={`layer-accordion-item rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isSelected
                      ? 'layer-accordion-active border-dos-cyan/60 bg-dos-surface/90 shadow-glow-cyan/20'
                      : 'border-dos-border/60 bg-dos-surface/40 hover:border-dos-cyan/30 hover:bg-dos-surface/70'
                  }`}
                >
                  {/* Layer Header Button */}
                  <button
                    type="button"
                    onClick={() => setActiveLayer(isSelected ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors focus:outline-none"
                    aria-expanded={isSelected}
                  >
                    <div>
                      <span className="text-[11px] font-mono text-dos-cyan uppercase tracking-wider block mb-1">
                        {layer.subtitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-dos-cloud flex items-center gap-2">
                        <span>{layer.name}</span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-dos-cyan animate-pulse" />
                        )}
                      </h3>
                    </div>

                    <div
                      className={`layer-arrow-badge w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-dos-cyan text-black rotate-180 shadow-glow-cyan/30'
                          : 'bg-dos-void text-dos-mist/70 border border-dos-border/50'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {/* Accordion Content that comes down when clicked (Requirement #4) */}
                  {isSelected && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-2 border-t border-dos-border/50 animate-slideDown">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-mono text-dos-cyan">
                          <span>ACTIVE_LAYER: 0{idx + 1}_{layer.name.toUpperCase()}</span>
                          <span className="text-dos-mist/50">dos3.stack.v1</span>
                        </div>

                        <p className="text-sm sm:text-base text-dos-mist/90 leading-relaxed font-sans">
                          {layer.description}
                        </p>

                        <div className="layer-specs-box p-4 rounded-xl bg-dos-void border border-dos-border/70">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-dos-cyan block mb-1 font-mono">
                            Technical Specifications
                          </span>
                          <p className="text-xs font-mono text-dos-mist/85">
                            {layer.specs}
                          </p>
                        </div>

                        <p className="text-xs text-dos-mist/70 font-sans leading-relaxed">
                          <strong className="text-dos-cloud">Architectural Role: </strong>
                          {layer.deepDive}
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-dos-border/40">
                          <span className="text-xs text-dos-mist/60 font-mono">
                            Engineered for zero-drift deterministic operations
                          </span>
                          <Button to="/technology" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                            View Full Layer Deep Dive
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TOOLS & ECOSYSTEM IN CONTINUOUS MOTION (Requirement #8: AI, ML, Agentic AI, MCP, HPC Radar & Infinite Loop) */}
      <TechEcosystemLoop />

      {/* 5. PREVIOUS TOP-TIER PROJECTS (Requirement #12: AI, Agentic AI, MCP, LLMs) */}
      <PreviousProjects />

      {/* 6. BUILD YOUR OWN AI AGENT & MCP SERVER (Requirements #15 & #16) */}
      <BuildAgentCTA />

      {/* 7. PEOPLE & CEO SECTION (Requirements #6, #10, #17) */}
      <PeopleSection />

      {/* 8. CAPABILITIES */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Capabilities"
            title="Outcome-First Engineering"
            subtitle="Built to solve systemic computing challenges with measurable, verifiable operational advantages."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {capabilities.map((cap, idx) => (
              <TiltCard key={idx} className="glass-card p-8 border border-dos-border/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-dos-cyan">0{idx + 1}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-dos-surface border border-dos-border text-dos-mist/70">
                      {cap.metric}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-dos-cloud mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-dos-mist/80 leading-relaxed font-sans">
                    {cap.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-dos-border/30">
                  <span className="text-xs font-semibold text-dos-cyan inline-flex items-center gap-1">
                    <span>Verified Feature</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DEVELOPER EXPERIENCE QUICKSTART */}
      <section className="py-24 lg:py-32 border-t border-dos-border/30 bg-dos-midnight/40 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Developer Experience"
            title="Clean, Contract-Driven Interfaces"
            subtitle="Shows the product is real. Seamless integration into modern TypeScript, Python, and cloud services."
          />

          <div className="terminal-card glass-card rounded-2xl border border-dos-border/80 overflow-hidden shadow-2xl">
            <div className="terminal-header flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 bg-dos-void/90 border-b border-dos-border/50 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="terminal-title ml-2 text-xs font-mono text-dos-mist/60">dos3-quickstart</span>
              </div>

              <div className="flex items-center gap-1 sm:gap-2">
                {(['typescript', 'python', 'curl'] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setCodeLanguage(lang)}
                    className={`terminal-tab px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                      codeLanguage === lang
                        ? 'bg-dos-surface text-dos-cyan font-bold border border-dos-border'
                        : 'text-dos-mist/60 hover:text-white'
                    }`}
                  >
                    {lang === 'typescript' ? 'TypeScript' : lang === 'python' ? 'Python' : 'cURL'}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={handleCopy}
                  className="terminal-copy-btn p-1.5 rounded-md hover:bg-dos-surface text-dos-mist hover:text-white transition-colors ml-2"
                  title="Copy snippet"
                  aria-label="Copy code"
                >
                  {copied ? <Check className="w-4 h-4 text-dos-cyan" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="terminal-body p-6 sm:p-8 bg-dos-void/70 overflow-x-auto">
              <pre className="terminal-code text-xs sm:text-sm font-mono text-dos-mist/90 leading-relaxed">
                <code>{codeSnippets[codeLanguage]}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER SIGN IN (Requirement #5) */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Newsletter />
      </section>

      {/* 11. FINAL CTA (With Organization Manual PDF download & Meeting Scheduler) */}
      <section className="final-cta-section py-24 lg:py-32 border-t border-dos-border/30 bg-gradient-to-b from-dos-midnight/50 to-dos-void relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-dos-cloud">
            Let's Build What Comes Next.
          </h2>

          <p className="text-base sm:text-lg text-dos-mist/80 max-w-2xl mx-auto font-sans leading-relaxed">
            Have an idea, a technical challenge, or an opportunity to build custom AI Agents & MCP servers with us?
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <a
              href={EXTERNAL_LINKS.bookingSchedule}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-dos-cyan to-dos-azure text-black font-bold text-sm tracking-wide uppercase hover:opacity-95 shadow-glow-cyan/25 flex items-center justify-center gap-2 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book 30-Min Meeting with DOS3.AI</span>
            </a>

            <a
              href={EXTERNAL_LINKS.manualPdf}
              download="DOS3AI_Architecture_Manual.pdf"
              className="px-6 py-3.5 rounded-xl bg-dos-surface hover:bg-dos-surfaceHover border border-dos-cyan/40 text-dos-cyan font-semibold text-sm flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Architecture Manual (PDF)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
