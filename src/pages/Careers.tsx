import React, { useState } from 'react';
import { Briefcase, Send, CheckCircle2, Sparkles, Users, ShieldCheck, Mail, MapPin, ArrowRight } from 'lucide-react';
import { EXTERNAL_LINKS } from '../data/content';

export const Careers: React.FC = () => {
  const [talentName, setTalentName] = useState('');
  const [talentEmail, setTalentEmail] = useState('');
  const [talentProfile, setTalentProfile] = useState('');
  const [talentRole, setTalentRole] = useState('AI Research');
  const [talentNotes, setTalentNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setTalentName('');
      setTalentEmail('');
      setTalentProfile('');
      setTalentNotes('');
    }, 3000);
  };

  return (
    <div className="pt-24 lg:pt-32 pb-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase bg-dos-surface border border-dos-cyan/40 text-dos-cyan mb-6">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Careers & Research Opportunities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-dos-cloud tracking-tight leading-tight mb-6">
          Join the <span className="text-gradient">DOS3.AI Talent Network.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-dos-mist/85 leading-relaxed font-sans mb-8">
          We are engineering the foundational computational fabric for deterministic AI reasoning, Model Context Protocol (MCP), and distributed systems in Dallas, Texas.
        </p>
      </div>

      {/* No Current Openings Banner (Requirement #2) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-dos-cyan/30 text-center space-y-4 shadow-xl relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-dos-surface border border-dos-cyan/40 flex items-center justify-center text-dos-cyan mx-auto mb-2 shadow-glow-cyan/20">
            <Briefcase className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono text-dos-cyan uppercase tracking-widest block">
            Hiring Status • Updated 2026
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-dos-cloud">
            No Current Openings
          </h2>

          <p className="text-sm sm:text-base text-dos-mist/85 max-w-2xl mx-auto font-sans leading-relaxed">
            There are currently no active job or internship openings available. All cohorts and research fellowship slots are fully staffed.
          </p>

          <p className="text-xs sm:text-sm text-dos-mist/75 max-w-xl mx-auto font-sans leading-relaxed">
            However, we continuously review exceptional candidates in <strong className="text-dos-cloud font-medium">Agentic AI, Model Context Protocol (MCP), distributed HPC clusters, and ML systems</strong> for upcoming research projects and expanding initiatives.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-dos-mist/70">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dos-surface border border-dos-border/60">
              <MapPin className="w-3.5 h-3.5 text-dos-cyan" />
              <span>Dallas, Texas Headquarters</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dos-surface border border-dos-border/60">
              <Mail className="w-3.5 h-3.5 text-dos-azure" />
              <span>careers@dos3.ai</span>
            </span>
          </div>
        </div>
      </div>

      {/* General Talent Pool Submission Form */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-dos-border/80 shadow-2xl">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-dos-cyan block mb-1">
              General Intake
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-dos-cloud">
              Submit Your Profile for Future Considerations
            </h3>
            <p className="text-xs text-dos-mist/80 mt-1">
              Introduce yourself and your research interests. When relevant roles or fellowships open, our engineering committee will reach out directly.
            </p>
          </div>

          {submitted ? (
            <div className="py-10 text-center space-y-3 animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-dos-cyan mx-auto animate-bounce" />
              <h4 className="text-xl font-bold font-heading text-dos-cloud">
                Profile Received!
              </h4>
              <p className="text-xs text-dos-mist/85 font-sans max-w-md mx-auto">
                Thank you for your interest in DOS3.AI. Your profile has been added to our research talent registry.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-dos-mist font-mono mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={talentName}
                    onChange={(e) => setTalentName(e.target.value)}
                    placeholder="Ada Lovelace"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dos-surface border border-dos-border/70 text-white placeholder:text-dos-mist/40 focus:outline-none focus:ring-1 focus:ring-dos-cyan"
                  />
                </div>

                <div>
                  <label className="block text-dos-mist font-mono mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={talentEmail}
                    onChange={(e) => setTalentEmail(e.target.value)}
                    placeholder="ada@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dos-surface border border-dos-border/70 text-white placeholder:text-dos-mist/40 focus:outline-none focus:ring-1 focus:ring-dos-cyan"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-dos-mist font-mono mb-1.5">Primary Discipline</label>
                  <select
                    value={talentRole}
                    onChange={(e) => setTalentRole(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dos-surface border border-dos-border/70 text-white focus:outline-none focus:ring-1 focus:ring-dos-cyan"
                  >
                    <option value="AI Research">AI Research & Agentic Reasoning</option>
                    <option value="MCP Protocols">Model Context Protocol (MCP) Systems</option>
                    <option value="HPC Systems">High-Performance Computing & GPU Kernels</option>
                    <option value="Distributed OS">Distributed Systems & Operating Systems</option>
                    <option value="Internship">Student Research / Summer Internship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-dos-mist font-mono mb-1.5">LinkedIn / GitHub / Portfolio</label>
                  <input
                    type="url"
                    value={talentProfile}
                    onChange={(e) => setTalentProfile(e.target.value)}
                    placeholder="https://github.com/... or linkedin.com/in/..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dos-surface border border-dos-border/70 text-white placeholder:text-dos-mist/40 focus:outline-none focus:ring-1 focus:ring-dos-cyan"
                  />
                </div>
              </div>

              <div>
                <label className="block text-dos-mist font-mono mb-1.5">Brief Summary of Experience & Research Interests</label>
                <textarea
                  rows={4}
                  required
                  value={talentNotes}
                  onChange={(e) => setTalentNotes(e.target.value)}
                  placeholder="Share a short summary of projects you have built, papers you have published, or specific technologies you are passionate about..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dos-surface border border-dos-border/70 text-white placeholder:text-dos-mist/40 focus:outline-none focus:ring-1 focus:ring-dos-cyan resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-dos-cyan to-dos-azure text-black font-semibold text-xs tracking-wide uppercase hover:opacity-95 shadow-glow-cyan/25 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit to Talent Network</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Pillars Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="glass-card rounded-2xl p-6 border border-dos-border/60">
            <div className="w-10 h-10 rounded-xl bg-dos-surface border border-dos-cyan/40 flex items-center justify-center text-dos-cyan mx-auto mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold font-heading text-dos-cloud mb-1">
              HPC Superclusters
            </h4>
            <p className="text-xs text-dos-mist/80 font-sans leading-relaxed">
              Equipped with dedicated NVIDIA H100 clusters, Quantum-2 InfiniBand networking, and cutting-edge testbeds in Dallas.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-dos-border/60">
            <div className="w-10 h-10 rounded-xl bg-dos-surface border border-dos-azure/40 flex items-center justify-center text-dos-azure mx-auto mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold font-heading text-dos-cloud mb-1">
              50+ World-Class Researchers
            </h4>
            <p className="text-xs text-dos-mist/80 font-sans leading-relaxed">
              Work alongside CEO Hariharan Babu and an exceptional team of distributed systems engineers and scientists.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-dos-border/60">
            <div className="w-10 h-10 rounded-xl bg-dos-surface border border-dos-violet/40 flex items-center justify-center text-dos-violet mx-auto mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold font-heading text-dos-cloud mb-1">
              Open Protocol Standards
            </h4>
            <p className="text-xs text-dos-mist/80 font-sans leading-relaxed">
              We author specifications for Model Context Protocol (MCP) and verifiable execution harnesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
