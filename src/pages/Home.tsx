import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Cpu, Code2, Globe, Sparkles, Terminal, CheckCircle2, Copy, Check, Server, Database, Layers, ExternalLink, Zap } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { ThreeCanvas } from '../components/ThreeCanvas';
import { NetworkCanvas } from '../components/NetworkCanvas';
import { TiltCard } from '../components/TiltCard';
import { TECHNOLOGY_PILLARS, ENGINEERING_PRINCIPLES } from '../data/content';

export const Home: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [codeLanguage, setCodeLanguage] = useState<'typescript' | 'python' | 'curl'>('typescript');
  const [copied, setCopied] = useState<boolean>(false);

  const layers = [
    {
      name: 'Data',
      subtitle: 'Layer 01 • The Semantic Foundation',
      description: 'Knowledge graphs, streaming event verification, and verifiable context lineage that ensure reasoning systems operate on factual ground truth.',
      specs: 'Knowledge Graph Ingestion • Semantic Context Repositories • Deterministic Data Lineage'
    },
    {
      name: 'Operating Systems',
      subtitle: 'Layer 02 • Resilient Execution',
      description: 'Micro-kernel abstractions, memory-safe execution runtimes, and low-latency system-call interfaces tailored for high-concurrency tasks.',
      specs: 'Memory-Safe Runtimes • Workload Sandboxing • Concurrency State Replication'
    },
    {
      name: 'Servers',
      subtitle: 'Layer 03 • Distributed Compute',
      description: 'Elastic compute topology coordinating GPU/CPU clusters across localized edge nodes and hybrid cloud backends with strict tenant isolation.',
      specs: 'Hardware-Enforced Enclaves • Dynamic GPU Allocation • Low-Latency Clustering'
    },
    {
      name: 'Services',
      subtitle: 'Layer 04 • Interoperable APIs',
      description: 'Service-oriented contract interfaces, streaming event buses, and zero-trust permission gateways designed for seamless integration.',
      specs: 'Declarative Contract APIs • Zero-Trust Gateways • Event-Driven Bus Architecture'
    },
    {
      name: 'Artificial Intelligence',
      subtitle: 'Layer 05 • Grounded Machine Reasoning',
      description: 'Model-agnostic task orchestration, deterministic verification harnesses, and human-in-the-loop permission checkpoints.',
      specs: 'Model-Agnostic Planners • Deterministic Safety Gates • Empirical Verification'
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
      {/* 1. HERO SECTION WITH 3D CANVAS & 2D NETWORK */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* Interactive 3D WebGL Core */}
        <ThreeCanvas className="opacity-70" />

        {/* 2D Particle constellation overlay */}
        <NetworkCanvas density={35} className="opacity-40" />

        {/* Ambient Gradient Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-dos-cyan/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-dos-azure/15 rounded-full blur-[170px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-dos-surface/90 border border-dos-border/80 text-dos-cyan mb-8 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-dos-cyan animate-pulse"></span>
            <span>Technology • Systems • Data • Services • AI</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-dos-cloud tracking-tight leading-[1.1] mb-6">
            Building Intelligent Technology for a{' '}
            <span className="text-gradient">Connected World.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-dos-mist/85 font-sans leading-relaxed mb-10">
            DOS3.AI explores the intersection of software, data, computing systems, digital infrastructure, and artificial intelligence to help shape the next generation of technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/technology"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore Our Technology
            </Button>
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
            >
              Connect With Us
            </Button>
          </div>
        </div>
      </section>

      {/* 2. PROOF STRIP / RESEARCH FOCUS (Playbook Section 3) */}
      <section className="py-8 border-y border-dos-border/30 bg-dos-midnight/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 text-center text-xs font-mono text-dos-mist/70">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-dos-cyan" />
              <span>Dallas, Texas Headquarters</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-dos-azure" />
              <span>WCAG 2.2 Level AA Accessible</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-dos-violet" />
              <span>ISO/IEC 42001 & NIST AI Alignment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-dos-magenta" />
              <span>Deterministic Verification Architecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE SHIFT (Playbook Section 4) */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="The Industry Shift"
            title="Moving Beyond Fragile Point Solutions"
            subtitle="The fundamental paradigm shift in how modern enterprise intelligence must be constructed."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TiltCard className="glass-card p-8 border border-dos-border/60">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-4 font-mono text-xs font-bold">
                OLD
              </div>
              <h3 className="text-lg font-bold font-heading text-dos-cloud mb-2">The Old Way</h3>
              <p className="text-xs text-dos-mist/80 leading-relaxed font-sans">
                Brittle pipeline glue connecting isolated applications with unverified AI wrappers and unstructured data silos.
              </p>
            </TiltCard>

            <TiltCard className="glass-card p-8 border border-dos-border/60">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 mb-4 font-mono text-xs font-bold">
                RISK
              </div>
              <h3 className="text-lg font-bold font-heading text-dos-cloud mb-2">Why It Breaks</h3>
              <p className="text-xs text-dos-mist/80 leading-relaxed font-sans">
                Complex workloads fail when machine reasoning operates without deterministic grounding, memory-safe boundaries, or runtime validation.
              </p>
            </TiltCard>

            <TiltCard className="glass-card p-8 border border-dos-cyan/40 shadow-glow-cyan/20">
              <div className="w-10 h-10 rounded-xl bg-dos-cyan/10 border border-dos-cyan/30 flex items-center justify-center text-dos-cyan mb-4 font-mono text-xs font-bold">
                NEW
              </div>
              <h3 className="text-lg font-bold font-heading text-dos-cloud mb-2">What Changed</h3>
              <p className="text-xs text-dos-mist/80 leading-relaxed font-sans">
                An integrated computational fabric uniting Data, Operating Systems, Servers, Services, and AI into one continuous, verified architecture.
              </p>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 4. PLATFORM OVERVIEW: 5-LAYER INTERACTIVE SCHEMATIC (Playbook Section 5) */}
      <section className="py-24 lg:py-32 border-t border-dos-border/30 bg-dos-midnight/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Platform Architecture"
            title="One Architecture. Five Connected Layers."
            subtitle="The name DOS3.AI defines our structural platform hierarchy: Data, Operating Systems, Servers, Services, and AI operating in harmony."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Layer Selector Buttons */}
            <div className="lg:col-span-5 space-y-3">
              {layers.map((layer, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveLayer(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between group ${
                    activeLayer === idx
                      ? 'bg-dos-surface border-dos-cyan/50 shadow-glow-cyan/20'
                      : 'bg-dos-surface/40 border-dos-border/50 hover:border-dos-cyan/30 hover:bg-dos-surface/70'
                  }`}
                >
                  <div>
                    <span className="text-[11px] font-mono text-dos-cyan uppercase tracking-wider block mb-0.5">
                      {layer.subtitle}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-dos-cloud group-hover:text-white">
                      {layer.name}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    activeLayer === idx ? 'bg-dos-cyan text-black' : 'bg-dos-void text-dos-mist/50'
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>

            {/* Inspector Display for Selected Layer */}
            <div className="lg:col-span-7">
              <TiltCard className="glass-card rounded-3xl p-8 sm:p-12 border border-dos-border/80 relative">
                <div className="flex items-center justify-between pb-4 border-b border-dos-border/40 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-dos-cyan animate-pulse" />
                    <span className="text-xs font-mono text-dos-cyan">
                      ACTIVE_LAYER: 0{activeLayer + 1}_{layers[activeLayer].name.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-dos-mist/60">dos3.stack.v1</span>
                </div>

                <span className="text-xs font-mono text-dos-cyan uppercase tracking-wider block mb-2">
                  Architectural Specification
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-dos-cloud mb-4">
                  {layers[activeLayer].name} Layer
                </h3>

                <p className="text-sm sm:text-base text-dos-mist/85 font-sans leading-relaxed mb-6">
                  {layers[activeLayer].description}
                </p>

                <div className="p-4 rounded-xl bg-dos-surface border border-dos-border/60">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-dos-cyan block mb-1">
                    Technical Specifications
                  </span>
                  <p className="text-xs font-mono text-dos-mist/80">
                    {layers[activeLayer].specs}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-dos-border/40 flex items-center justify-between">
                  <span className="text-xs text-dos-mist/60">
                    Engineered for continuous multi-tier integration
                  </span>
                  <Button to="/technology" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                    View Deep Dive
                  </Button>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CAPABILITIES (Playbook Section 6) */}
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

      {/* 6. HOW IT WORKS (Playbook Section 7) */}
      <section className="py-24 lg:py-32 border-t border-dos-border/30 bg-dos-midnight/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Execution Flow"
            title="How the Architecture Works"
            subtitle="A transparent, deterministic four-step pipeline from high-level goal ingestion to verified result."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-dos-border/60 relative">
              <span className="text-2xl font-bold font-mono text-dos-cyan/40 mb-3 block">STEP 01</span>
              <h4 className="text-base font-bold font-heading text-dos-cloud mb-2">Context Ingestion</h4>
              <p className="text-xs text-dos-mist/80 font-sans leading-relaxed">
                Workload goals are ingested and mapped to verified semantic knowledge graphs and current system state.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-dos-border/60 relative">
              <span className="text-2xl font-bold font-mono text-dos-azure/40 mb-3 block">STEP 02</span>
              <h4 className="text-base font-bold font-heading text-dos-cloud mb-2">Deterministic Planning</h4>
              <p className="text-xs text-dos-mist/80 font-sans leading-relaxed">
                Task steps are decomposed into typed contract operations with explicit dependency validation.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-dos-border/60 relative">
              <span className="text-2xl font-bold font-mono text-dos-violet/40 mb-3 block">STEP 03</span>
              <h4 className="text-base font-bold font-heading text-dos-cloud mb-2">Permissioned Execution</h4>
              <p className="text-xs text-dos-mist/80 font-sans leading-relaxed">
                Operations execute within hardware-isolated boundaries under human policy gates.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-dos-cyan/40 shadow-glow-cyan/20 relative">
              <span className="text-2xl font-bold font-mono text-dos-cyan mb-3 block">STEP 04</span>
              <h4 className="text-base font-bold font-heading text-dos-cloud mb-2">Result Verification</h4>
              <p className="text-xs text-dos-mist/80 font-sans leading-relaxed">
                Outputs are verified against deterministic acceptance criteria and recorded in immutable audit logs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. USE CASES PREVIEW (Playbook Section 8) */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Tailored Scenarios"
            title="Built for High-Stakes Environments"
            subtitle="Designed for engineering teams who cannot afford unverified AI hallucinations or unpredictable latency."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TiltCard className="glass-card p-8 border border-dos-border/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-dos-cyan uppercase tracking-wider block mb-2">Persona Focus</span>
                <h3 className="text-xl font-bold font-heading text-dos-cloud mb-3">ML & Systems Engineers</h3>
                <p className="text-xs text-dos-mist/80 leading-relaxed font-sans mb-4">
                  Construct deterministic reasoning harnesses without wrestling with fragile glue code or unpredictable model drift.
                </p>
              </div>
              <Button to="/solutions" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                Read ML Solutions
              </Button>
            </TiltCard>

            <TiltCard className="glass-card p-8 border border-dos-border/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-dos-azure uppercase tracking-wider block mb-2">Architect Focus</span>
                <h3 className="text-xl font-bold font-heading text-dos-cloud mb-3">Enterprise CTOs</h3>
                <p className="text-xs text-dos-mist/80 leading-relaxed font-sans mb-4">
                  Avoid proprietary lock-in. Maintain unified governance across on-premise hardware and multi-cloud backends.
                </p>
              </div>
              <Button to="/solutions" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                Read CTO Architecture
              </Button>
            </TiltCard>

            <TiltCard className="glass-card p-8 border border-dos-border/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-dos-magenta uppercase tracking-wider block mb-2">Security Focus</span>
                <h3 className="text-xl font-bold font-heading text-dos-cloud mb-3">Security & CISOs</h3>
                <p className="text-xs text-dos-mist/80 leading-relaxed font-sans mb-4">
                  Enforce zero-retention data partitions, fine-grained access gateways, and cryptographically verified audit trails.
                </p>
              </div>
              <Button to="/solutions" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                Read Security Controls
              </Button>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 8. DEVELOPER TEASER & INTERACTIVE TERMINAL (Playbook Section 11) */}
      <section className="py-24 lg:py-32 border-t border-dos-border/30 bg-dos-midnight/40 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Developer Experience"
            title="Clean, Contract-Driven Interfaces"
            subtitle="Shows the product is real. Seamless integration into modern TypeScript, Python, and cloud services."
          />

          <div className="glass-card rounded-2xl border border-dos-border/80 overflow-hidden shadow-2xl">
            {/* Terminal Header & Language Tabs */}
            <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 bg-dos-void/90 border-b border-dos-border/50 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="ml-2 text-xs font-mono text-dos-mist/60">dos3-quickstart</span>
              </div>

              <div className="flex items-center gap-1 sm:gap-2">
                {(['typescript', 'python', 'curl'] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setCodeLanguage(lang)}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
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
                  className="p-1.5 rounded-md hover:bg-dos-surface text-dos-mist hover:text-white transition-colors ml-2"
                  title="Copy snippet"
                  aria-label="Copy code"
                >
                  {copied ? <Check className="w-4 h-4 text-dos-cyan" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Terminal Code Body */}
            <div className="p-6 sm:p-8 bg-dos-void/70 overflow-x-auto">
              <pre className="text-xs sm:text-sm font-mono text-dos-mist/90 leading-relaxed">
                <code>{codeSnippets[codeLanguage]}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TRUST BAND (Playbook Section 10) */}
      <section className="py-20 border-t border-dos-border/30 bg-dos-midnight/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-dos-cyan">
                <ShieldCheck className="w-4 h-4" />
                <span>Foundational Security & Trust</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-dos-cloud">
                Trust Center: Security & Responsible AI
              </h3>
              <p className="text-sm text-dos-mist/80 font-sans leading-relaxed max-w-2xl">
                We believe security and ethical AI governance belong in the architectural core, not a footer disclaimer. Explore our data handling matrices, privacy commitments, and responsible evaluation policies.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button to="/security" variant="outline" size="md">
                Visit Security & Trust
              </Button>
              <Button to="/responsible-ai" variant="secondary" size="md">
                Read Responsible AI Policy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA (Playbook Section 12) */}
      <section className="py-24 lg:py-32 border-t border-dos-border/30 bg-gradient-to-b from-dos-midnight/50 to-dos-void relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-dos-cloud">
            Let's Build What Comes Next.
          </h2>

          <p className="text-base sm:text-lg text-dos-mist/80 max-w-2xl mx-auto font-sans leading-relaxed">
            Have an idea, a technical challenge, or an opportunity to collaborate? We'd like to hear from you.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get in Touch
            </Button>
            <Button
              to="/pricing"
              variant="secondary"
              size="lg"
            >
              View Engagement Models
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
