import React from 'react';
import { Mail, MapPin, MessageSquare, Shield, Clock, HelpCircle, Calendar, Linkedin, Download, ExternalLink } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { COMPANY_INFO, EXTERNAL_LINKS } from '../data/content';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32 pb-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-dos-surface border border-dos-border text-dos-cyan mb-6">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct Inquiries & Architecture Dialogue</span>
        </div>

        {/* Required Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-dos-cloud tracking-tight leading-tight mb-6">
          Start a <span className="text-gradient">Conversation.</span>
        </h1>

        {/* Required Supporting Copy */}
        <p className="max-w-3xl mx-auto text-lg text-dos-mist/85 leading-relaxed font-sans mb-6">
          Whether you're interested in building custom AI Agents, deploying MCP servers, or scheduling time with our leadership in Dallas, TX, we'd be glad to connect.
        </p>

        {/* Top Action Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={EXTERNAL_LINKS.bookingSchedule}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-dos-cyan to-dos-azure text-black font-semibold text-xs tracking-wide uppercase hover:opacity-95 shadow-glow-cyan/20 transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book 30-Minute Meeting with DOS3.AI Team</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={EXTERNAL_LINKS.manualPdf}
            download="DOS3AI_Architecture_Manual.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dos-surface hover:bg-dos-surfaceHover border border-dos-cyan/40 text-dos-cyan text-xs font-semibold transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Architecture Manual (PDF)</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries & Verification Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-8 border border-dos-border/60 space-y-6">
              <h2 className="text-xl font-bold font-heading text-dos-cloud">
                Verified Communication Channels
              </h2>

              <p className="text-sm text-dos-mist/80 leading-relaxed font-sans">
                Inquiries are reviewed by our engineering leadership and research teams. Connect directly through official inboxes or book dedicated calendar sessions.
              </p>

              <div className="space-y-3.5 pt-2">
                {/* Book with me link */}
                <div className="p-3.5 rounded-xl bg-dos-surface/90 border border-dos-cyan/50 shadow-glow-cyan/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-dos-cyan uppercase tracking-wider block">
                      Direct Calendar Booking
                    </span>
                    <Calendar className="w-4 h-4 text-dos-cyan" />
                  </div>
                  <a
                    href={EXTERNAL_LINKS.bookingSchedule}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-white hover:text-dos-cyan inline-flex items-center gap-1.5 transition-colors font-bold"
                  >
                    <span>Book time with DOS3.AI Team (30 minutes)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-dos-cyan" />
                  </a>
                </div>

                {/* Email general */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-dos-surface/80 border border-dos-border/60">
                  <Mail className="w-5 h-5 text-dos-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-dos-cloud uppercase tracking-wider block">
                      General & Inquiries
                    </span>
                    <a
                      href={EXTERNAL_LINKS.orgMail}
                      className="text-sm font-mono text-dos-cyan hover:underline"
                    >
                      {COMPANY_INFO.emails.general}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-dos-surface/80 border border-dos-border/60">
                  <Linkedin className="w-5 h-5 text-dos-azure shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-dos-cloud uppercase tracking-wider block">
                      Leadership LinkedIn
                    </span>
                    <a
                      href={EXTERNAL_LINKS.ceoLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono text-dos-azure hover:underline inline-flex items-center gap-1"
                    >
                      <span>Hariharan Babu (CEO)</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  </div>
                </div>

                {/* Headquarters in Dallas Maps */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-dos-surface/80 border border-dos-border/60">
                  <MapPin className="w-5 h-5 text-dos-magenta shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-dos-cloud uppercase tracking-wider block">
                      Headquarters (Dallas, Texas)
                    </span>
                    <a
                      href={EXTERNAL_LINKS.dallasMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-dos-mist font-sans hover:text-dos-cyan inline-flex items-center gap-1 transition-colors"
                    >
                      <span>{COMPANY_INFO.location}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
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
