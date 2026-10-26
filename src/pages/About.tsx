import React from 'react';
import { ArrowRight, Compass, Target, Cpu, CheckCircle2, Shield, Wrench } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { TECHNOLOGY_PILLARS, COMPANY_INFO } from '../data/content';

export const About: React.FC = () => {
  const approaches = [
    {
      title: 'Problem-Driven Engineering',
      description: 'We anchor technical investigations in tangible operational challenges rather than pursuing technology for its own sake. Real needs dictate architectural direction.',
      icon: <Target className="w-5 h-5 text-dos-cyan" />,
    },
    {
      title: 'Practical Experimentation',
      description: 'Hypotheses must be tested in working environments. We build prototypes, measure behavioral characteristics, and validate assumptions with empirical evidence.',
      icon: <Wrench className="w-5 h-5 text-dos-azure" />,
    },
    {
      title: 'Modular and Maintainable Systems',
      description: 'Complexity is the enemy of longevity. We emphasize clean abstraction boundaries, contract-driven interfaces, and components that can evolve independently.',
      icon: <Cpu className="w-5 h-5 text-dos-violet" />,
    },
    {
      title: 'Responsible Technology Development',
      description: 'Security, privacy, and systemic reliability are non-negotiable prerequisites. We design with explicit permission boundaries, least privilege, and safety gates.',
      icon: <Shield className="w-5 h-5 text-dos-magenta" />,
    },
    {
      title: 'Continuous Learning & Measurable Improvement',
      description: 'Technology disciplines evolve rapidly. We maintain a culture of rigorous documentation, iterative refinement, and honest evaluation of system limitations.',
      icon: <CheckCircle2 className="w-5 h-5 text-dos-cyan" />,
    },
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-dos-surface border border-dos-border text-dos-cyan mb-6">
          <Compass className="w-3.5 h-3.5" />
          <span>About DOS3.AI</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-dos-cloud tracking-tight leading-tight mb-6">
          Exploring the Frontiers of{' '}
          <span className="text-gradient">Intelligent Systems.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-dos-mist/85 leading-relaxed font-sans">
          DOS3.AI is an independent technology initiative focused on the convergence of software development, operational data, operating systems, computing infrastructure, digital services, and artificial intelligence.
        </p>
      </div>

      {/* 1. OUR PURPOSE & 2. OUR VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-dos-border/60 relative overflow-hidden">
            <span className="text-xs font-mono text-dos-cyan uppercase tracking-wider block mb-3">
              Foundational Intent
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-dos-cloud mb-4">
              Our Purpose
            </h2>
            <p className="text-sm sm:text-base text-dos-mist/85 leading-relaxed font-sans mb-4">
              The modern technological stack is often fragmented into rigid silos: applications are written in isolation from the operating systems they run on, cloud compute is managed separately from data semantics, and artificial intelligence is frequently deployed as an external black box.
            </p>
            <p className="text-sm text-dos-mist/75 leading-relaxed font-sans">
              DOS3.AI exists to explore how these layers can be thoughtfully connected—designing software and digital systems where data, servers, and intelligence operate in unified harmony.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-dos-border/60 relative overflow-hidden">
            <span className="text-xs font-mono text-dos-cyan uppercase tracking-wider block mb-3">
              Future Direction
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-dos-cloud mb-4">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base text-dos-mist/85 leading-relaxed font-sans mb-4">
              We envision a future of computing where applications are not developed as brittle point solutions, but as resilient, interconnected systems capable of operating fluidly across local hardware, edge devices, and distributed cloud backends.
            </p>
            <p className="text-sm text-dos-mist/75 leading-relaxed font-sans">
              Our long-term ambition is to build enduring capabilities, advance reliable systems engineering, and establish the technical groundwork for intelligent software that users and organizations can trust implicitly.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH */}
      <section className="py-20 bg-dos-midnight/30 border-y border-dos-border/30 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Methodology"
            title="Our Engineering Approach"
            subtitle="How we structure our research, design architectures, and evaluate technological concepts."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approaches.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-dos-border/60 transition-colors hover:border-dos-cyan/40"
              >
                <div className="w-10 h-10 rounded-xl bg-dos-surface border border-dos-border/80 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-dos-cloud mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-dos-mist/80 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AREAS OF INTEREST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          pill="Domain Breadth"
          title="Areas of Technical Interest"
          subtitle="A structured look at the five dimensions driving our technology agenda."
        />

        <div className="space-y-4">
          {TECHNOLOGY_PILLARS.map((pillar, i) => (
            <div
              key={pillar.id}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-dos-border/60 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-dos-cyan font-semibold">0{i + 1}</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-dos-mist/60">/ {pillar.subtitle}</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-dos-cloud mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-dos-mist/80 font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="shrink-0">
                <Button to={`/technology#${pillar.id}`} variant="outline" size="sm">
                  View Focus Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OUR JOURNEY (Honest, disciplined perspective) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-dos-border/70 text-center space-y-4">
          <span className="text-xs font-mono text-dos-cyan uppercase tracking-wider block">
            Perspective
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-dos-cloud">
            Our Continuous Journey
          </h2>
          <p className="text-sm sm:text-base text-dos-mist/85 leading-relaxed font-sans max-w-2xl mx-auto">
            DOS3.AI operates as an active, forward-looking engineering venture headquartered in {COMPANY_INFO.location}. We are focused on foundational system design, technical validation, and building genuine long-term value before commercial spectacle.
          </p>
          <div className="pt-4">
            <Button to="/contact" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Start a Conversation With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
