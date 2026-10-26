import React from 'react';
import { ShieldAlert, CheckCircle2, UserCheck, Cpu, AlertTriangle, FileText, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { TiltCard } from '../components/TiltCard';

export const ResponsibleAI: React.FC = () => {
  const policies = [
    {
      title: 'Policy on Data Use & Model Training',
      icon: <Cpu className="w-6 h-6 text-dos-cyan" />,
      summary: 'Customer and operational data must remain strictly isolated and never repurposed without explicit, documented consent.',
      details: [
        'Zero Training on Customer Data: We do not use customer inputs, prompt contexts, or output logs to train or fine-tune public foundation models.',
        'Data Minimization by Default: Only context fragments strictly necessary to satisfy an active task are routed to reasoning runtimes.',
        'Ephemeral Processing: In-memory buffers are flushed immediately after execution, leaving no persistent state on inference nodes.'
      ]
    },
    {
      title: 'Deterministic Model Evaluation',
      icon: <FileText className="w-6 h-6 text-dos-azure" />,
      summary: 'Evaluating intelligent systems requires transparent, reproducible benchmarks rather than subjective impressions.',
      details: [
        'Methodology Disclosure: Every benchmark published discloses dataset origin, hardware configuration, and versioning.',
        'Deterministic Harnesses: Testing includes fixed-seed reproducibility suites to detect stochastic drift over time.',
        'Anti-AI-Washing Standard: We prohibit speculative claims of artificial general intelligence (AGI) or unprovable performance leaps.'
      ]
    },
    {
      title: 'Human Oversight & Safety Gates',
      icon: <UserCheck className="w-6 h-6 text-dos-violet" />,
      summary: 'Autonomous execution must always be subject to explicit human permission boundaries and rollback mechanisms.',
      details: [
        'Policy Gates for Irreversible Actions: Database mutations, financial transactions, or infrastructure changes require explicit human confirmation.',
        'Explainable Reasoning Traces: System outputs maintain inspectable audit logs detailing the evidence and context leading to a decision.',
        'Instant Kill-Switch Protocol: Operators maintain immediate, deterministic control to halt any executing agent pipeline.'
      ]
    },
    {
      title: 'Adversarial Red-Teaming & Bias Testing',
      icon: <ShieldAlert className="w-6 h-6 text-dos-magenta" />,
      summary: 'Proactively identifying failure modes, prompt injection vectors, and systematic statistical bias.',
      details: [
        'Continuous Injection Stress-Testing: Evaluating system boundaries against indirect prompt injection and malicious payload delivery.',
        'Bias & Safety Verification: Evaluating model decisions for statistical fairness across demographic and domain categories.',
        'Bounded Tool Access: Tools accessible to machine runtimes are confined by strict sandboxes and API permission scopes.'
      ]
    },
    {
      title: 'Incident Handling & Disclosures',
      icon: <AlertTriangle className="w-6 h-6 text-dos-cyan" />,
      summary: 'A structured, transparent protocol for triaging, mitigating, and documenting unexpected behavioral anomalies.',
      details: [
        'Dedicated Security Intake: Fast-track routing for reported safety issues at security@dos3.ai.com.',
        'Root-Cause Analysis: Documenting and remediating edge cases within verifiable engineering tickets.',
        'Transparent Client Advisories: Communicating known model limitations, performance deviations, and environmental dependencies.'
      ]
    }
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-dos-surface border border-dos-border text-dos-cyan mb-6">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Governance & Ethics</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-dos-cloud tracking-tight leading-tight mb-6">
          Responsible AI <span className="text-gradient">Framework & Policy.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-dos-mist/85 leading-relaxed font-sans mb-8">
          The foundational principles, safety mechanisms, and evaluation standards governing the development and application of artificial intelligence at DOS3.AI.
        </p>

        <div className="max-w-2xl mx-auto p-4 rounded-xl bg-dos-surface/70 border border-dos-border/60 text-xs text-dos-mist/80 leading-relaxed font-sans">
          <strong className="text-dos-cyan font-semibold">Governance Commitment:</strong> In accordance with emerging ISO/IEC 42001 and NIST AI Risk Management Frameworks, we hold machine systems to rigorous standards of transparency, human agency, and empirical verifiability.
        </div>
      </div>

      {/* 5 Detailed Policies */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 mb-20">
        {policies.map((pol, idx) => (
          <TiltCard key={idx} className="glass-card p-8 sm:p-10 border border-dos-border/60">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-dos-surface border border-dos-border flex items-center justify-center shrink-0">
                {pol.icon}
              </div>
              <div>
                <span className="text-xs font-mono text-dos-cyan uppercase tracking-wider block">
                  Policy Section 0{idx + 1}
                </span>
                <h2 className="text-2xl font-bold font-heading text-dos-cloud">
                  {pol.title}
                </h2>
              </div>
            </div>

            <p className="text-sm text-dos-mist/85 leading-relaxed font-sans mb-6">
              {pol.summary}
            </p>

            <div className="border-t border-dos-border/40 pt-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-dos-cloud block mb-3">
                Operational Commitments
              </span>
              <ul className="space-y-3">
                {pol.details.map((item, dIdx) => (
                  <li key={dIdx} className="text-xs text-dos-mist/80 flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-dos-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TiltCard>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card rounded-2xl p-8 border border-dos-border/60 space-y-4">
          <h3 className="text-xl font-bold font-heading text-dos-cloud">
            Questions on Our Responsible AI Practices?
          </h3>
          <p className="text-xs text-dos-mist/80 max-w-lg mx-auto leading-relaxed">
            We welcome constructive review from AI alignment researchers and enterprise security officers.
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="primary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              Contact Ethics & Governance Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
