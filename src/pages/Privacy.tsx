import React from 'react';
import { ShieldCheck, Lock, Eye, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Privacy: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-dos-surface border border-dos-border text-dos-cyan mb-6">
            <Lock className="w-3.5 h-3.5" />
            <span>Legal Notice</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-dos-cloud tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-dos-mist/70 font-mono">
            Last Updated: October 2026 • Governed under the laws of Texas, United States
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-dos-border/60 space-y-8 text-sm text-dos-mist/85 leading-relaxed font-sans">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-dos-cloud">1. Introduction & Overview</h2>
            <p>
              This Privacy Policy explains how {COMPANY_INFO.legalName} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), headquartered in {COMPANY_INFO.location}, collects, uses, protects, and discloses personal and technical data when you visit our website (https://dos3.ai) or interact with our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-dos-cloud">2. Information We Collect</h2>
            <p>
              We adhere strictly to the principle of <strong>data minimization</strong>. We only collect information when you choose to provide it directly (such as through our contact and inquiry forms), or technical access logs automatically generated for network security:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-dos-mist/80">
              <li><strong>Contact Information:</strong> Full name, professional work email address, organization name, and inquiry details.</li>
              <li><strong>Technical Diagnostic Logs:</strong> IP address, browser type, referring URL, and access timestamps for DDoS mitigation and server telemetry.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-dos-cloud">3. How We Use Information</h2>
            <p>We process collected data solely for the following legitimate purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-dos-mist/80">
              <li>To evaluate and respond directly to your technical, business, or collaborative inquiries.</li>
              <li>To maintain website security, prevent fraudulent submissions, and monitor system health.</li>
              <li>To comply with applicable state and federal laws within the United States.</li>
            </ul>
            <p className="text-xs text-dos-cyan font-semibold mt-2">
              We never sell, rent, or lease your personal information to third parties, nor do we share it with data brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-dos-cloud">4. AI Training & Data Retention</h2>
            <p>
              In alignment with our Responsible AI commitments, customer data and private communications are <strong>never used to train or fine-tune public machine learning models</strong>. Inquiries are retained only as long as necessary to fulfill the business communication.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-dos-cloud">5. Your Privacy Rights (CCPA/CPRA, Texas Data Privacy & GDPR)</h2>
            <p>
              Depending on your location, you hold statutory rights regarding your personal information, including the right to know what data we hold, the right to request deletion, and the right to correct inaccurate records. To exercise any of these rights, contact us at <a href={`mailto:${COMPANY_INFO.emails.general}`} className="text-dos-cyan hover:underline">{COMPANY_INFO.emails.general}</a>.
            </p>
          </section>

          <section className="space-y-3 border-t border-dos-border/40 pt-6">
            <h2 className="text-xl font-bold font-heading text-dos-cloud">6. Contact for Privacy Inquiries</h2>
            <p>
              If you have any questions about this Privacy Policy or our data handling practices, please contact our legal and privacy lead:
            </p>
            <div className="p-4 rounded-xl bg-dos-surface border border-dos-border/60 text-xs font-mono text-dos-cyan">
              {COMPANY_INFO.legalName} • Privacy Division<br />
              Email: {COMPANY_INFO.emails.general}<br />
              Location: {COMPANY_INFO.location}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
