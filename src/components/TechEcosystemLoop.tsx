import React, { useState } from 'react';
import { Cpu, Sparkles, Orbit, Layers, Terminal, Zap, Shield, Network } from 'lucide-react';
import { ECOSYSTEM_TOOLS } from '../data/content';

export const TechEcosystemLoop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const row1 = [
    { name: 'Model Context Protocol (MCP)', tag: 'Core Protocol', color: 'text-dos-cyan border-dos-cyan/40 bg-dos-cyan/10' },
    { name: 'Agentic AI Swarms', tag: 'Orchestration', color: 'text-dos-azure border-dos-azure/40 bg-dos-azure/10' },
    { name: 'PyTorch 2.5', tag: 'Deep Learning', color: 'text-dos-violet border-dos-violet/40 bg-dos-violet/10' },
    { name: 'LangGraph & AutoGen', tag: 'Task Reasoning', color: 'text-dos-magenta border-dos-magenta/40 bg-dos-magenta/10' },
    { name: 'vLLM & TensorRT-LLM', tag: 'High-Throughput', color: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10' },
    { name: 'CUDA 12.6 & Triton Kernels', tag: 'Hardware Acceleration', color: 'text-amber-400 border-amber-500/40 bg-amber-500/10' },
  ];

  const row2 = [
    { name: 'NVIDIA H100 Superclusters', tag: 'HPC Fabric', color: 'text-dos-cyan border-dos-cyan/40 bg-dos-cyan/10' },
    { name: 'Triton Inference Server', tag: 'Model Serving', color: 'text-dos-azure border-dos-azure/40 bg-dos-azure/10' },
    { name: 'Ray Distributed Computing', tag: 'Scale-Out Systems', color: 'text-dos-violet border-dos-violet/40 bg-dos-violet/10' },
    { name: 'Slurm Workload Orchestration', tag: 'HPC Scheduling', color: 'text-dos-magenta border-dos-magenta/40 bg-dos-magenta/10' },
    { name: 'Qdrant & Milvus Vector Stores', tag: 'Context Lineage', color: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10' },
    { name: 'Kubernetes & Docker Enclaves', tag: 'Zero-Trust Sandboxes', color: 'text-amber-400 border-amber-500/40 bg-amber-500/10' },
  ];

  return (
    <div className="ecosystem-loop-section py-20 lg:py-28 relative overflow-hidden bg-dos-void/80 border-y border-dos-border/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-dos-azure/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase bg-dos-surface border border-dos-cyan/40 text-dos-cyan mb-4">
          <Orbit className="w-3.5 h-3.5 animate-spin [animation-duration:8s]" />
          <span>Continuous Ecosystem & Research Radar</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-dos-cloud tracking-tight">
          Tools & Emerging Technologies in <span className="text-gradient">Continuous Motion.</span>
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-dos-mist/80 font-sans mt-3">
          Our active research and engineering infrastructure encompasses cutting-edge AI frameworks, standardized protocols, and high-performance computing substrates.
        </p>
      </div>

      {/* Orbit Visualization Card in Center */}
      <div className="max-w-4xl mx-auto px-4 mb-14">
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-dos-border/80 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          {/* Left info */}
          <div className="max-w-md space-y-4 text-center md:text-left z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-dos-cyan block">
              Continuous Loop Engine
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-dos-cloud">
              AI, Agentic Swarms & MCP Interoperability
            </h3>
            <p className="text-xs sm:text-sm text-dos-mist/85 leading-relaxed font-sans">
              Every component within the DOS3.AI computational fabric rotates around a deterministic verification core: tools query the MCP server, agents reason in bounded enclaves, and workloads scale over NVIDIA H100 GPU clusters.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-dos-surface border border-dos-border text-dos-cyan">
                Active HPC Pipeline
              </span>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-dos-surface border border-dos-border text-dos-azure">
                Sub-8ms MCP Latency
              </span>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-dos-surface border border-dos-border text-dos-violet">
                Zero-Trust Sandboxes
              </span>
            </div>
          </div>

          {/* Right Circular Orbit Animation */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center shrink-0">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-dos-cyan/30 animate-spin [animation-duration:24s]" />
            {/* Middle rotating ring in reverse */}
            <div className="absolute inset-6 rounded-full border border-dos-azure/40 animate-spin [animation-duration:16s] [animation-direction:reverse]" />
            {/* Inner pulsing ring */}
            <div className="absolute inset-14 rounded-full border border-dos-violet/50 animate-pulse" />

            {/* Orbiting Node 1: MCP */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 p-2 rounded-xl bg-dos-surface border border-dos-cyan shadow-glow-cyan/40 text-[10px] font-mono text-dos-cyan flex items-center gap-1">
              <Zap className="w-3 h-3" />
              <span>MCP Server</span>
            </div>

            {/* Orbiting Node 2: Agent Swarms */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 p-2 rounded-xl bg-dos-surface border border-dos-azure shadow-glow-azure/40 text-[10px] font-mono text-dos-azure flex items-center gap-1">
              <Network className="w-3 h-3" />
              <span>Agentic AI</span>
            </div>

            {/* Orbiting Node 3: LLM Reasoning */}
            <div className="absolute left-1 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-dos-surface border border-dos-violet shadow-sm text-[10px] font-mono text-dos-violet flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>LLM Runtimes</span>
            </div>

            {/* Orbiting Node 4: HPC Superclusters */}
            <div className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-dos-surface border border-emerald-400 shadow-sm text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <Cpu className="w-3 h-3" />
              <span>HPC Cluster</span>
            </div>

            {/* Center Core Node */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-dos-cyan via-dos-azure to-dos-violet p-[2px] shadow-glow-cyan/50 z-10 flex items-center justify-center">
              <div className="orbit-center-core w-full h-full rounded-full bg-dos-void flex flex-col items-center justify-center text-center p-2">
                <span className="font-heading font-extrabold text-xs text-white tracking-wider">
                  DOS3.AI
                </span>
                <span className="text-[8px] font-mono text-dos-cyan font-bold">
                  VERIFIED CORE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Running Marquee Loop - Track 1 (Leftward) */}
      <div className="relative w-full overflow-hidden mb-4 group py-2">
        <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
          {[...row1, ...row1, ...row1].map((tool, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl border backdrop-blur-md transition-all hover:scale-105 shadow-md ${tool.color}`}
            >
              <Terminal className="w-4 h-4 shrink-0" />
              <div>
                <span className="text-xs font-bold font-mono tracking-wide block">
                  {tool.name}
                </span>
                <span className="text-[10px] opacity-80 uppercase tracking-widest font-mono">
                  {tool.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Running Marquee Loop - Track 2 (Rightward) */}
      <div className="relative w-full overflow-hidden group py-2">
        <div className="flex w-max gap-4 animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...row2, ...row2, ...row2].map((tool, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl border backdrop-blur-md transition-all hover:scale-105 shadow-md ${tool.color}`}
            >
              <Cpu className="w-4 h-4 shrink-0" />
              <div>
                <span className="text-xs font-bold font-mono tracking-wide block">
                  {tool.name}
                </span>
                <span className="text-[10px] opacity-80 uppercase tracking-widest font-mono">
                  {tool.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
