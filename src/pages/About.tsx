import React from 'react';
import { ArrowRight, Compass, Target, Cpu, CheckCircle2, Shield, Wrench, Download, MapPin, Calendar, ExternalLink, Users } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { TECHNOLOGY_PILLARS, COMPANY_INFO, EXTERNAL_LINKS, COMPANY_STATS } from '../data/content';
import { PeopleSection } from '../components/PeopleSection';
import { Newsletter } from '../components/Newsletter';

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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-dos-surface border border-dos-border text-dos-cyan mb-6">
          <Compass className="w-3.5 h-3.5" />
          <span>About DOS3.AI</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-dos-cloud tracking-tight leading-tight mb-6">
          Exploring the Frontiers of{' '}
          <span className="text-gradient">Intelligent Systems.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-dos-mist/85 leading-relaxed font-sans mb-8">
          DOS3.AI is an independent technology initiative focused on the convergence of software development, operational data, operating systems, computing infrastructure, digital services, and artificial intelligence. Headquartered in Dallas, Texas.
        </p>

        {/* Download Manual Button (Requirement #2) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={EXTERNAL_LINKS.manualPdf}
            download="DOS3AI_Architecture_Manual.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-dos-cyan to-dos-azure text-black font-semibold text-xs tracking-wide uppercase shadow-glow-cyan/25 hover:opacity-95 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Organization Architecture Manual (PDF)</span>
          </a>

          <a
            href={EXTERNAL_LINKS.bookingSchedule}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-dos-surface hover:bg-dos-surfaceHover border border-dos-border text-dos-mist hover:text-white text-xs font-semibold transition-all"
          >
            <Calendar className="w-4 h-4 text-dos-cyan" />
            <span>Schedule Meeting with CEO</span>
          </a>
        </div>
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

      {/* Leadership & People Section (Requirements #6, #10, #17) */}
      <PeopleSection />

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

      {/* Newsletter */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <Newsletter />
      </div>

      {/* 5. OUR JOURNEY & MAP REDIRECT */}
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
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={EXTERNAL_LINKS.bookingSchedule}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-dos-cyan to-dos-azure text-black font-semibold text-xs tracking-wide uppercase hover:opacity-95 shadow-glow-cyan/25 flex items-center gap-2 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Architecture Session</span>
            </a>
            <a
              href={EXTERNAL_LINKS.dallasMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-dos-surface hover:bg-dos-surfaceHover border border-dos-border/80 text-dos-mist hover:text-white text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <MapPin className="w-4 h-4 text-dos-cyan" />
              <span>View Dallas Location in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
