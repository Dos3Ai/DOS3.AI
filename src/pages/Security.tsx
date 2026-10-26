import React from 'react';
import { Shield, Lock, Eye, CheckCircle2, Mail, FileText, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { COMPANY_INFO } from '../data/content';

export const Security: React.FC = () => {
  const securityPillars = [
    {
      title: 'Security by Design',
      icon: <Lock className="w-6 h-6 text-dos-cyan" />,
      tagline: 'Architectural Hygiene',
      description: 'Security is not a layer applied after software is built; it must be incorporated into initial system schemas, API contracts, and memory-safe implementation choices.',
      commitments: [
        'Principle of least privilege across all service-to-service boundaries',
        'Hardware and tenant isolation to prevent multi-workload side-channel risks',
        'Deterministic permission checks prior to any automated system execution',
        'Continuous elimination of unnecessary attack surfaces and dependencies'
      ]
    },
    {
      title: 'Privacy-Aware Development',
      icon: <Eye className="w-6 h-6 text-dos-azure" />,
      tagline: 'Data Minimization',
      description: 'Handling sensitive and proprietary information requires disciplined architectural controls, strict scoping, and clear data residency awareness.',
      commitments: [
        'Zero unauthorized retention of client or operational data',
        'Explicit data minimization: processing only what is strictly necessary to perform work',
        'End-to-end transport encryption and cryptographic isolation at rest',
        'No repurposing or training on private customer data without explicit authorization'
      ]
    },
    {
      title: 'Responsible AI Principles',
      icon: <CheckCircle2 className="w-6 h-6 text-dos-violet" />,
      tagline: 'Grounded Execution',
      description: 'Machine intelligence must be designed to act safely, predictably, and with explicit human oversight throughout all multi-step reasoning cycles.',
      commitments: [
        'Deterministic verification gates to evaluate reasoning outputs before execution',
        'Human-in-the-loop escalation paths for high-stakes operational decisions',
        'Explicit disclosure of system boundaries, confidence thresholds, and failure modes',
        'Red-teaming and adversarial stress testing against hallucinations and unsafe instructions'
      ]
    },
    {
      title: 'Reliability & Transparency',
      icon: <FileText className="w-6 h-6 text-dos-magenta" />,
      tagline: 'Honest Communication',
      description: 'Credibility in enterprise technology is rooted in transparency regarding capabilities, operational trade-offs, and system limitations.',
      commitments: [
        'No exaggerated marketing or unsupported computational benchmarks',
        'Clear documentation of system boundaries and environmental prerequisites',
        'Rapid, honest disclosure of vulnerabilities and anomalous behaviors',
        'Commitment to continuous empirical verification and peer collaboration'
      ]
    }
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-dos-surface border border-dos-border text-dos-cyan mb-6">
          <Shield className="w-3.5 h-3.5" />
          <span>Security & Trust</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-dos-cloud tracking-tight leading-tight mb-6">
          Security as a{' '}
          <span className="text-gradient">Core Architectural Feature.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-dos-mist/85 leading-relaxed font-sans mb-8">
          In distributed computing and artificial intelligence, trust is not an afterthought. We design our technology around explicit permission models, data isolation, and honest engineering standards.
        </p>

        {/* Clear compliance disclaimer */}
        <div className="max-w-2xl mx-auto p-4 rounded-xl bg-dos-surface/70 border border-dos-border/60 text-xs text-dos-mist/80 leading-relaxed font-sans">
          <strong className="text-dos-cyan font-semibold">Principle Disclosure:</strong> The practices and commitments detailed below reflect our core engineering philosophy and architectural guidelines. We present them transparently as guiding principles rather than unverified commercial certifications.
        </div>
      </div>

      {/* 4 Pillars of Trust */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-8 sm:p-10 border border-dos-border/60 flex flex-col justify-between transition-colors hover:border-dos-cyan/40"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-dos-surface border border-dos-border flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-mono text-dos-cyan uppercase tracking-wider">
                    {pillar.tagline}
                  </span>
                </div>

                <h2 className="text-2xl font-bold font-heading text-dos-cloud mb-3">
                  {pillar.title}
                </h2>

                <p className="text-sm text-dos-mist/80 leading-relaxed font-sans mb-6">
                  {pillar.description}
                </p>

                <div className="border-t border-dos-border/40 pt-4">
                  <span className="text-xs font-semibold text-dos-cloud uppercase tracking-wider block mb-3">
                    Architectural Commitments
                  </span>
                  <ul className="space-y-2.5">
                    {pillar.commitments.map((item, cIdx) => (
                      <li key={cIdx} className="text-xs text-dos-mist/75 flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-dos-cyan shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Contact for Security Concerns */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-dos-border/70 text-center space-y-6">
          <div className="w-12 h-12 rounded-xl bg-dos-surface border border-dos-border flex items-center justify-center text-dos-cyan mx-auto">
            <Mail className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-dos-cloud">
            Vulnerability Reporting & Security Inquiries
          </h2>

          <p className="text-sm sm:text-base text-dos-mist/85 leading-relaxed font-sans max-w-xl mx-auto">
            We value responsible coordination with security researchers and engineering peers. If you have identified a vulnerability or have an inquiry regarding our data handling or architecture, please contact our security address directly.
          </p>

          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-dos-surface border border-dos-border/80 font-mono text-sm text-dos-cyan shadow-sm">
            <Mail className="w-4 h-4" />
            <span>{COMPANY_INFO.emails.security}</span>
          </div>

          <p className="text-xs text-dos-mist/60 max-w-md mx-auto">
            We review security disclosures promptly and handle all technical reports with professional confidentiality.
          </p>
        </div>
      </section>
    </div>
  );
};
