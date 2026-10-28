import React, { useState } from 'react';
import { Layers, ArrowRight, CheckCircle2, Cpu, ExternalLink, Zap, Network, Database } from 'lucide-react';
import { PREVIOUS_PROJECTS, EXTERNAL_LINKS } from '../data/content';
import { TiltCard } from './TiltCard';

export const PreviousProjects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Agentic AI' | 'MCP & Protocols' | 'LLM & Inference'>('All');

  const filtered = filter === 'All' 
    ? PREVIOUS_PROJECTS 
    : PREVIOUS_PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="previous-projects-section py-20 lg:py-28 relative bg-dos-midnight/20 border-t border-dos-border/40" id="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase bg-dos-surface border border-dos-cyan/40 text-dos-cyan mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Proven Engineering Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-dos-cloud tracking-tight">
            Top-Tier Projects in <span className="text-gradient">AI, MCP & Agentic Systems.</span>
          </h2>
          <p className="text-sm sm:text-base text-dos-mist/85 font-sans mt-3">
            Real-world systems engineered by our team—from deterministic multi-agent orchestration to enterprise Model Context Protocol gateways and GPU inference acceleration.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {(['All', 'Agentic AI', 'MCP & Protocols', 'LLM & Inference'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-dos-azure text-white shadow-glow-azure/30'
                    : 'bg-dos-surface border border-dos-border/70 text-dos-mist hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filtered.map((proj) => (
            <TiltCard
              key={proj.id}
              className="glass-card rounded-3xl p-8 border border-dos-border/70 hover:border-dos-cyan/40 flex flex-col justify-between shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-md text-[11px] font-mono uppercase bg-dos-surface text-dos-cyan border border-dos-cyan/30">
                    {proj.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Production Substrate</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-dos-cloud mb-1">
                  {proj.title}
                </h3>
                <span className="text-xs font-mono text-dos-mist/70 block mb-4">
                  {proj.tagline}
                </span>

                <p className="text-xs sm:text-sm text-dos-mist/85 leading-relaxed font-sans mb-6">
                  {proj.description}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-dos-cyan block">
                    Core Architectural Highlights
                  </span>
                  {proj.architecture.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-dos-mist/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-dos-azure mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-dos-surface border border-dos-border text-dos-mist"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Metric & Action */}
              <div className="pt-4 border-t border-dos-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-xs font-mono text-dos-cyan font-bold">
                  {proj.metrics}
                </div>
                <a
                  href={EXTERNAL_LINKS.bookingSchedule}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-dos-mist hover:text-white transition-colors"
                >
                  <span>Inquire Architecture Specs</span>
                  <ExternalLink className="w-3.5 h-3.5 text-dos-cyan" />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
