import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, ArrowUpRight, ShieldCheck, HeartHandshake, Linkedin, Calendar, Download, ExternalLink } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO, EXTERNAL_LINKS } from '../data/content';
import { Newsletter } from './Newsletter';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dos-void border-t border-dos-border/40 text-dos-mist relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block" aria-label="DOS3.AI Home">
              <img
                src="/images/logo-dark.png"
                alt="DOS3.AI"
                className="h-8 md:h-9 w-auto object-contain dark-logo"
              />
              <img
                src="/images/logo-light.png"
                alt="DOS3.AI"
                className="h-8 md:h-9 w-auto object-contain light-logo"
              />
            </Link>

            <p className="text-sm font-medium text-dos-cyan tracking-wide">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-sm text-dos-mist/80 max-w-sm leading-relaxed font-sans">
              DOS3.AI explores the intersection of software, data, computing systems, digital infrastructure, and artificial intelligence to help shape the next generation of technology.
            </p>

            {/* Redirections for Mail, Location (Dallas Maps), LinkedIn, Meeting Schedule (Requirement #11) */}
            <div className="pt-2 space-y-2.5 text-xs text-dos-mist/80">
              {/* Location -> Google Maps Dallas */}
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-dos-cyan shrink-0" />
                <a
                  href={EXTERNAL_LINKS.dallasMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-dos-cyan transition-colors inline-flex items-center gap-1 group"
                  title="Open Dallas, Texas in Google Maps"
                >
                  <span>{COMPANY_INFO.location}</span>
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </a>
              </div>

              {/* Email -> hello@dos3.ai */}
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-dos-cyan shrink-0" />
                <a
                  href={EXTERNAL_LINKS.orgMail}
                  className="hover:text-dos-cyan transition-colors"
                >
                  {COMPANY_INFO.emails.general}
                </a>
              </div>

              {/* LinkedIn -> Company Page */}
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-dos-cyan shrink-0" />
                <a
                  href={EXTERNAL_LINKS.companyLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-dos-cyan transition-colors inline-flex items-center gap-1 text-dos-cloud font-medium"
                >
                  <span>LinkedIn (DOS3.AI Company)</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

              {/* LinkedIn -> CEO / Org Profile */}
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-dos-azure shrink-0" />
                <a
                  href={EXTERNAL_LINKS.ceoLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-dos-cyan transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn (Founder & Leadership)</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

              {/* Meeting Schedule -> MS Bookings */}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-dos-violet shrink-0" />
                <a
                  href={EXTERNAL_LINKS.bookingSchedule}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-dos-cyan transition-colors inline-flex items-center gap-1 font-semibold text-dos-cyan"
                >
                  <span>Book 30-Min Architecture Meeting</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
              </div>

              {/* Download Architecture Manual PDF (Requirement #2) */}
              <div className="flex items-center gap-2 pt-1">
                <Download className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={EXTERNAL_LINKS.manualPdf}
                  download="DOS3AI_Architecture_Manual.pdf"
                  className="hover:text-dos-cyan transition-colors inline-flex items-center gap-1 text-emerald-400 font-medium"
                >
                  <span>Download Architecture Manual (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading text-xs font-semibold text-dos-cloud uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs font-sans">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="hover:text-dos-cyan transition-colors duration-150 inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus & Solutions */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading text-xs font-semibold text-dos-cloud uppercase tracking-wider">
              Platform & Focus
            </h3>
            <ul className="space-y-2 text-xs text-dos-mist/80 font-sans">
              <li>
                <Link to="/technology#data-intelligence" className="hover:text-dos-cyan transition-colors">
                  Data & Semantic Lineage
                </Link>
              </li>
              <li>
                <Link to="/technology#software-systems" className="hover:text-dos-cyan transition-colors">
                  Operating Systems & Runtimes
                </Link>
              </li>
              <li>
                <Link to="/technology#computing-infrastructure" className="hover:text-dos-cyan transition-colors">
                  Distributed HPC Superclusters
                </Link>
              </li>
              <li>
                <Link to="/technology#digital-services" className="hover:text-dos-cyan transition-colors">
                  Model Context Protocol (MCP)
                </Link>
              </li>
              <li>
                <Link to="/technology#artificial-intelligence" className="hover:text-dos-cyan transition-colors">
                  Grounded Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-dos-cyan transition-colors">
                  Autonomous Agent Swarms
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-dos-cyan transition-colors text-dos-cyan font-medium">
                  Careers & Internships (50+ Team)
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription Box (Requirement #5) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading text-xs font-semibold text-dos-cloud uppercase tracking-wider">
              Research Newsletter
            </h3>
            <p className="text-xs text-dos-mist/80 font-sans leading-relaxed">
              Subscribe to receive verified technical briefs, MCP schemas, and HPC benchmarks.
            </p>
            <Newsletter variant="inline" />
            <div className="pt-2 text-[11px] text-dos-mist/60 font-mono">
              Zero spam. Verified systems updates only.
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclosures */}
        <div className="mt-14 pt-8 border-t border-dos-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dos-mist/60 font-sans">
          <div>
            &copy; {currentYear} {COMPANY_INFO.legalName}. All rights reserved. • Dallas, TX, USA
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-dos-cyan transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-dos-cyan transition-colors">
              Terms
            </Link>
            <Link to="/accessibility" className="hover:text-dos-cyan transition-colors">
              Accessibility
            </Link>
            <Link to="/contact" className="hover:text-dos-cyan transition-colors">
              Contact
            </Link>
            <a
              href={EXTERNAL_LINKS.companyLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-dos-cyan transition-colors inline-flex items-center gap-1 text-dos-cyan"
              aria-label="DOS3.AI LinkedIn Company Page"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
