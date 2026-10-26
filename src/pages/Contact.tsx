import React from 'react';
import { Mail, MapPin, MessageSquare, Shield, Clock, HelpCircle } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { COMPANY_INFO } from '../data/content';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32 pb-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-dos-surface border border-dos-border text-dos-cyan mb-6">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct Inquiries</span>
        </div>

        {/* Required Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-dos-cloud tracking-tight leading-tight mb-6">
          Start a <span className="text-gradient">Conversation.</span>
        </h1>

        {/* Required Supporting Copy */}
        <p className="max-w-3xl mx-auto text-lg text-dos-mist/85 leading-relaxed font-sans">
          Whether you're interested in technology, collaboration, or learning more about DOS3.AI, we'd be glad to hear from you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries & Verification Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card rounded-3xl p-8 border border-dos-border/60 space-y-6">
              <h2 className="text-xl font-bold font-heading text-dos-cloud">
                Verified Communication Channels
              </h2>

              <p className="text-sm text-dos-mist/80 leading-relaxed font-sans">
                Inquiries are reviewed by our engineering and research teams. For specific inquiries, you may also email our designated inboxes directly.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-dos-surface/80 border border-dos-border/60">
                  <Mail className="w-5 h-5 text-dos-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-dos-cloud uppercase tracking-wider block">
                      General & Collaborative Inquiries
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.emails.general}`}
                      className="text-sm font-mono text-dos-cyan hover:underline"
                    >
                      {COMPANY_INFO.emails.general}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-dos-surface/80 border border-dos-border/60">
                  <Mail className="w-5 h-5 text-dos-azure shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-dos-cloud uppercase tracking-wider block">
                      Business & Technical Dialogue
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.emails.business}`}
                      className="text-sm font-mono text-dos-cyan hover:underline"
                    >
                      {COMPANY_INFO.emails.business}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-dos-surface/80 border border-dos-border/60">
                  <Shield className="w-5 h-5 text-dos-magenta shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-dos-cloud uppercase tracking-wider block">
                      Security & Vulnerability Reports
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.emails.security}`}
                      className="text-sm font-mono text-dos-cyan hover:underline"
                    >
                      {COMPANY_INFO.emails.security}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-dos-surface/80 border border-dos-border/60">
                  <MapPin className="w-5 h-5 text-dos-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-dos-cloud uppercase tracking-wider block">
                      Headquarters
                    </span>
                    <span className="text-sm text-dos-mist font-sans">
                      {COMPANY_INFO.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Promise */}
            <div className="glass-card rounded-2xl p-6 border border-dos-border/60 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-dos-surface flex items-center justify-center text-dos-cyan shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold font-heading text-dos-cloud">
                  Thoughtful Response Standard
                </h3>
                <p className="text-xs text-dos-mist/75 mt-1 leading-relaxed font-sans">
                  We review every qualified technical and collaborative inquiry and strive to respond within one to two business days.
                </p>
              </div>
            </div>

            {/* Production Form Integration Notice */}
            <div className="p-5 rounded-2xl bg-dos-surface/50 border border-dos-border/50 text-xs text-dos-mist/70 space-y-2">
              <div className="flex items-center gap-2 text-dos-cloud font-semibold">
                <HelpCircle className="w-4 h-4 text-dos-cyan shrink-0" />
                <span>Production Form Backend Notice</span>
              </div>
              <p className="leading-relaxed">
                This form runs client-side verification and transmission simulation. To connect to an active production backend, configure an API endpoint via <code className="text-dos-cyan font-mono">VITE_CONTACT_ENDPOINT</code> or link to your Cloudflare Worker / CRM gateway.
              </p>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
