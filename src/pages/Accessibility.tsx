import React from 'react';
import { Eye, CheckCircle2, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Accessibility: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-dos-surface border border-dos-border text-dos-cyan mb-6">
            <Eye className="w-3.5 h-3.5" />
            <span>Inclusive Design</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-dos-cloud tracking-tight mb-4">
            Accessibility Statement
          </h1>
          <p className="text-sm text-dos-mist/70 font-mono">
            Conformance Target: WCAG 2.2 Level AA • DOS3.AI
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-dos-border/60 space-y-8 text-sm text-dos-mist/85 leading-relaxed font-sans">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-dos-cloud">1. Our Commitment</h2>
            <p>
              {COMPANY_INFO.legalName} is committed to digital inclusion and ensuring that our website and digital services are accessible to individuals of all abilities. We actively design, develop, and test our web interfaces according to the World Wide Web Consortium (W3C) <strong>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong> standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-dos-cloud">2. Technical Measures Implemented</h2>
            <p>Our website incorporates the following accessibility features:</p>
            <ul className="space-y-2 text-xs text-dos-mist/80">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-dos-cyan mt-0.5 shrink-0" />
                <span><strong>Keyboard Navigation:</strong> All interactive buttons, links, tabs, and form elements are operable using only a keyboard with clear visible focus rings.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-dos-cyan mt-0.5 shrink-0" />
                <span><strong>Color Contrast:</strong> Body copy maintains a contrast ratio exceeding 4.5:1 against the dark background, and large headings exceed 3:1.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-dos-cyan mt-0.5 shrink-0" />
                <span><strong>Semantic HTML & ARIA:</strong> Landmarks, headings (h1-h4), and ARIA attributes provide screen readers with accurate contextual hierarchies.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-dos-cyan mt-0.5 shrink-0" />
                <span><strong>Reduced Motion Support:</strong> Animations and 3D WebGL rotations respect the user&apos;s <code className="text-dos-cyan font-mono">prefers-reduced-motion</code> system setting.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-dos-cyan mt-0.5 shrink-0" />
                <span><strong>Accessible Forms:</strong> Explicit label associations, programmatic error descriptions, and clear status announcements.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-dos-border/40 pt-6">
            <h2 className="text-xl font-bold font-heading text-dos-cloud">3. Feedback & Problem Reporting</h2>
            <p>
              We welcome feedback on the accessibility of our site. If you encounter any barriers, difficulty accessing content, or have suggestions for improvement, please contact us:
            </p>
            <div className="p-4 rounded-xl bg-dos-surface border border-dos-border/60 text-xs font-mono text-dos-cyan flex items-center gap-3">
              <Mail className="w-5 h-5 text-dos-cyan shrink-0" />
              <div>
                Email: {COMPANY_INFO.emails.general}<br />
                Subject: Accessibility Inquiry
              </div>
            </div>
            <p className="text-xs text-dos-mist/70">
              We investigate accessibility reports promptly and strive to resolve identified issues within 3 business days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
