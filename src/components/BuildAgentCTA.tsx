import React from 'react';
import { Bot, Zap, Cpu, Server, ShieldCheck, Download, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { EXTERNAL_LINKS, PARTNERSHIPS_DATA } from '../data/content';

export const BuildAgentCTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" id="build-with-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-dos-cyan/40 relative shadow-2xl overflow-hidden mb-16">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-dos-azure/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-dos-cyan/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase bg-dos-surface border border-dos-cyan/40 text-dos-cyan">
                <Bot className="w-3.5 h-3.5" />
                <span>Enterprise Agentic AI & MCP Services</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-dos-cloud leading-tight">
                Build Your Own <span className="text-gradient">AI Agent & MCP Server</span> With Us.
              </h2>

              <p className="text-sm sm:text-base text-dos-mist/85 leading-relaxed font-sans">
                Stop wrestling with fragile prompt wrappers and unverified pipelines. Partner with DOS3.AI to architect production-ready Model Context Protocol (MCP) servers and deterministic multi-agent swarms tailored strictly to your organization's internal APIs, databases, and compliance boundaries.
              </p>

              {/* 3 Step Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-dos-surface border border-dos-border/70">
                  <span className="text-[10px] font-mono text-dos-cyan uppercase block mb-1">01 • Context & Tools</span>
                  <strong className="text-xs font-bold text-white block mb-1">Custom MCP Server</strong>
                  <p className="text-[11px] text-dos-mist/70 leading-relaxed">
                    Standardized tool & data interfaces exposing ERPs, SQL, and APIs with zero-trust ACLs.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-dos-surface border border-dos-border/70">
                  <span className="text-[10px] font-mono text-dos-azure uppercase block mb-1">02 • Orchestration</span>
                  <strong className="text-xs font-bold text-white block mb-1">Autonomous Swarms</strong>
                  <p className="text-[11px] text-dos-mist/70 leading-relaxed">
                    Multi-agent planners with deterministic safety gates and human verification checkpoints.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-dos-surface border border-dos-border/70">
                  <span className="text-[10px] font-mono text-dos-violet uppercase block mb-1">03 • High Performance</span>
                  <strong className="text-xs font-bold text-white block mb-1">HPC Deployment</strong>
                  <p className="text-[11px] text-dos-mist/70 leading-relaxed">
                    Hosted on our NVIDIA H100 superclusters or deployed inside your private cloud enclave.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={EXTERNAL_LINKS.bookingSchedule}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-dos-cyan to-dos-azure text-black font-semibold text-xs tracking-wide uppercase hover:opacity-95 shadow-glow-cyan/25 flex items-center justify-center gap-2 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule 30-Min Architecture Discovery</span>
                </a>

                <a
                  href={EXTERNAL_LINKS.manualPdf}
                  download="DOS3AI_Architecture_Manual.pdf"
                  className="px-5 py-3 rounded-xl bg-dos-surface hover:bg-dos-surfaceHover border border-dos-cyan/40 text-dos-cyan font-semibold text-xs tracking-wide flex items-center justify-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Architecture Manual (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Architecture Spec Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl p-6 bg-dos-surface/90 border border-dos-border/80 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-dos-border/40">
                  <span className="text-xs font-mono text-dos-cyan uppercase">
                    Service Blueprint
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Engagement Slots Open</span>
                  </span>
                </div>

                <div className="space-y-3 text-xs font-sans">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-dos-void border border-dos-border/50">
                    <Zap className="w-5 h-5 text-dos-cyan shrink-0" />
                    <div>
                      <strong className="text-white block">Dedicated Protocol Implementation</strong>
                      <span className="text-dos-mist/70 text-[11px]">Direct integration with Anthropic MCP & open agent standards</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-dos-void border border-dos-border/50">
                    <Cpu className="w-5 h-5 text-dos-azure shrink-0" />
                    <div>
                      <strong className="text-white block">Hardware-Accelerated Inference</strong>
                      <span className="text-dos-mist/70 text-[11px]">Sub-10ms latency via Triton & vLLM cluster pipelines</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-dos-void border border-dos-border/50">
                    <ShieldCheck className="w-5 h-5 text-dos-violet shrink-0" />
                    <div>
                      <strong className="text-white block">Zero Data Retention Guarantees</strong>
                      <span className="text-dos-mist/70 text-[11px]">Customer datasets never used for public model training</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] font-mono text-dos-mist/60">
                    Lead Architect: Hariharan Babu & 50+ Top-Tier Engineers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnerships & HPC Infrastructure Banner (Requirement #15) */}
        <div className="glass-card rounded-2xl p-8 border border-dos-border/70 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-dos-cyan block mb-1">
              Infrastructure & Research Alliances
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-dos-cloud">
              Running High-Performance Computing (HPC) & World-Class Cloud Fabrics
            </h3>
            <p className="text-xs sm:text-sm text-dos-mist/80 mt-1">
              We partner with premier research labs and cloud computing hyperscalers to power verifiable AI workloads at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* HPC superclusters */}
            <div className="p-5 rounded-xl bg-dos-surface/80 border border-dos-border/60">
              <div className="w-10 h-10 rounded-xl bg-dos-void border border-dos-cyan/40 flex items-center justify-center mx-auto mb-3 text-dos-cyan">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-heading text-white mb-1">
                HPC Supercomputing Fabric
              </h4>
              <p className="text-xs text-dos-mist/75 font-sans leading-relaxed">
                NVIDIA H100 & A100 Tensor Core superclusters with InfiniBand Quantum-2 networking and Slurm multi-node job dispatch.
              </p>
            </div>

            {/* Cloud Partners */}
            <div className="p-5 rounded-xl bg-dos-surface/80 border border-dos-border/60">
              <div className="w-10 h-10 rounded-xl bg-dos-void border border-dos-azure/40 flex items-center justify-center mx-auto mb-3 text-dos-azure">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-heading text-white mb-1">
                Cloud Platform Partners
              </h4>
              <p className="text-xs text-dos-mist/75 font-sans leading-relaxed">
                AWS AI Partner Network, Google Cloud Vertex AI, and Microsoft Azure AI Infrastructure for elastic hybrid cloud failover.
              </p>
            </div>

            {/* Research Labs */}
            <div className="p-5 rounded-xl bg-dos-surface/80 border border-dos-border/60">
              <div className="w-10 h-10 rounded-xl bg-dos-void border border-dos-violet/40 flex items-center justify-center mx-auto mb-3 text-dos-violet">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-heading text-white mb-1">
                Advanced Research Labs
              </h4>
              <p className="text-xs text-dos-mist/75 font-sans leading-relaxed">
                Joint initiatives with leading Academic AI Safety Consortia, MCP Protocol Working Groups, and formal verification researchers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
