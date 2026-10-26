import React from 'react';
import { CreditCard, CheckCircle2, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { TiltCard } from '../components/TiltCard';

export const Pricing: React.FC = () => {
  const tiers = [
    {
      name: 'Pilot',
      tagline: 'Exploration & Prototyping',
      description: 'Ideal for engineering teams conducting proof-of-concept evaluations and architecture feasibility testing.',
      badge: 'Proof of Concept',
      features: [
        '30-day scoped architectural assessment',
        'Isolated development sandbox environment',
        'Core context modeling & data graph ingestion',
        'Model-agnostic task evaluation harness',
        'Weekly architectural alignment syncs',
        'Standard developer documentation access'
      ],
      cta: 'Request Pilot Engagement',
      highlight: false
    },
    {
      name: 'Production',
      tagline: 'High-Availability Deployment',
      description: 'Built for enterprise teams deploying long-running, fault-tolerant workloads with strict latency and uptime guarantees.',
      badge: 'Most Popular',
      features: [
        'Dedicated multi-node cluster deployment',
        'Deterministic hardware-isolated tenant compute',
        'Real-time streaming telemetry and audit logging',
        'Automated state failover & recovery protocols',
        'Business hours dedicated engineering escalation',
        '99.9% uptime availability target commitment',
        'Continuous red-team safety evaluation updates'
      ],
      cta: 'Deploy Production Architecture',
      highlight: true
    },
    {
      name: 'Enterprise',
      tagline: 'Custom Topology & Scale',
      description: 'Designed for regulated organizations requiring hybrid cloud, localized on-premise enclaves, and custom compliance frameworks.',
      badge: 'Custom Architecture',
      features: [
        'Custom hybrid-cloud / on-premise topology',
        'Cryptographic zero-retention data partitions',
        'Air-gapped deployment option available',
        'Custom SSO/SAML & RBAC permission gateways',
        'Dedicated Solutions Architect & Technical Account Mgr',
        '24/7 priority incident response with custom SLA',
        'Assistance with third-party security audits'
      ],
      cta: 'Contact Enterprise Solutions',
      highlight: false
    }
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-dos-surface border border-dos-border text-dos-cyan mb-6">
          <CreditCard className="w-3.5 h-3.5" />
          <span>Engagement Architecture</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-dos-cloud tracking-tight leading-tight mb-6">
          Transparent, <span className="text-gradient">Engineered Engagement.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-dos-mist/85 leading-relaxed font-sans mb-8">
          Clear engagement tiers tailored to your engineering maturity—from exploratory feasibility pilots to multi-region enterprise compute topologies.
        </p>
      </div>

      {/* 3 Engagement Tiers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <TiltCard
              key={idx}
              className={`glass-card p-8 sm:p-10 border flex flex-col justify-between ${
                tier.highlight
                  ? 'border-dos-cyan/60 shadow-glow-azure/20 ring-1 ring-dos-cyan/30'
                  : 'border-dos-border/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-dos-cyan">
                    Tier 0{idx + 1}
                  </span>
                  <span
                    className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full ${
                      tier.highlight
                        ? 'bg-dos-cyan/20 text-dos-cyan border border-dos-cyan/40'
                        : 'bg-dos-surface text-dos-mist/70 border border-dos-border'
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-dos-cloud mb-1">
                  {tier.name}
                </h3>
                <span className="text-xs text-dos-cyan font-mono block mb-4">
                  {tier.tagline}
                </span>

                <p className="text-sm text-dos-mist/80 font-sans leading-relaxed mb-6">
                  {tier.description}
                </p>

                <div className="border-t border-dos-border/40 pt-6 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-dos-cloud block mb-4">
                    What This Includes
                  </span>
                  <ul className="space-y-3">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-dos-mist/80 flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-dos-cyan shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-dos-border/40">
                <Button
                  to="/contact"
                  variant={tier.highlight ? 'primary' : 'outline'}
                  size="md"
                  className="w-full justify-center"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {tier.cta}
                </Button>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Trust & Engagement Transparency Notice */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-8 border border-dos-border/60 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-dos-surface border border-dos-border flex items-center justify-center text-dos-cyan shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1 text-left">
            <h4 className="text-base font-bold font-heading text-dos-cloud">
              Clear Engagements Without Lock-in
            </h4>
            <p className="text-xs text-dos-mist/80 leading-relaxed font-sans">
              All commercial engagements are scoped with explicit deliverables, verifiable milestones, and transparent infrastructure pass-through costs. We maintain an evidence-first approach: no hidden telemetry fees or ambiguous licensing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
