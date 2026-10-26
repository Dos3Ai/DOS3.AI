import React from 'react';
import { FileText, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Terms: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-dos-surface border border-dos-border text-dos-cyan mb-6">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Terms</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-dos-cloud tracking-tight mb-4">
            Terms of Service & Acceptable Use
          </h1>
          <p className="text-sm text-dos-mist/70 font-mono">
            Effective Date: October 2026 • DOS3.AI
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-dos-border/60 space-y-8 text-sm text-dos-mist/85 leading-relaxed font-sans">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-dos-cloud">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website and digital resources operated by {COMPANY_INFO.legalName} (&quot;DOS3.AI&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from accessing our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-dos-cloud">2. Acceptable Use Policy (AUP)</h2>
            <p>
              You agree to use our systems and materials strictly for lawful research, development, and business collaboration. Prohibited conduct includes, but is not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-dos-mist/80">
              <li>Attempting to probe, scan, or breach system security boundaries or API rate limits.</li>
              <li>Injecting malicious prompts, automated scraping scripts, or denial-of-service traffic.</li>
              <li>Misrepresenting your affiliation or submitting fabricated corporate credentials.</li>
              <li>Using system outputs to develop deceptive, fraudulent, or hazardous applications.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-dos-cloud">3. AI Disclosures & Output Responsibility</h2>
            <p>
              Where technical architectures or computational models process automated tasks:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-dos-mist/80">
              <li><strong>Probabilistic Nature:</strong> AI models operate probabilistically. While we implement deterministic verification harnesses, human oversight remains essential for mission-critical operations.</li>
              <li><strong>User Responsibility:</strong> Users and partner organizations are responsible for verifying system outputs before committing irreversible real-world decisions.</li>
              <li><strong>No Harmful Uses:</strong> You may not use DOS3.AI technology to violate privacy rights, facilitate unauthorized surveillance, or circumvent intellectual property laws.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-dos-cloud">4. Intellectual Property & Trademarks</h2>
            <p>
              The names, logos, technical architectures, and software materials published by DOS3.AI are protected under United States and international intellectual property laws. All trademarks and service marks are the property of {COMPANY_INFO.legalName}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-dos-cloud">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, DOS3.AI provides its informational website on an &quot;as-is&quot; basis without warranties of any kind. Under no circumstances shall DOS3.AI be liable for indirect, incidental, or consequential damages resulting from website access.
            </p>
          </section>

          <section className="space-y-3 border-t border-dos-border/40 pt-6">
            <h2 className="text-xl font-bold font-heading text-dos-cloud">6. Contact Information</h2>
            <p>
              For legal inquiries regarding these Terms, contact our legal counsel intake at <a href={`mailto:${COMPANY_INFO.emails.business}`} className="text-dos-cyan hover:underline">{COMPANY_INFO.emails.business}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
