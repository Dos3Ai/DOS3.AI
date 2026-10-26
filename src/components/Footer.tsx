import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, ArrowUpRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO } from '../data/content';

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
                className="h-8 md:h-9 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.footer-logo-fallback')) {
                    const fallback = document.createElement('span');
                    fallback.className = 'footer-logo-fallback font-heading font-extrabold text-xl text-white tracking-wider';
                    fallback.innerHTML = 'DOS3<span class="text-dos-cyan">.AI</span>';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </Link>

            <p className="text-sm font-medium text-dos-cyan tracking-wide">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-sm text-dos-mist/80 max-w-sm leading-relaxed font-sans">
              DOS3.AI explores the intersection of software, data, computing systems, digital infrastructure, and artificial intelligence to help shape the next generation of technology.
            </p>

            <div className="pt-2 space-y-2 text-xs text-dos-mist/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-dos-cyan shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-dos-cyan shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.emails.general}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.emails.general}
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
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading text-xs font-semibold text-dos-cloud uppercase tracking-wider">
              Platform & Focus
            </h3>
            <ul className="space-y-2 text-xs text-dos-mist/80 font-sans">
              <li>
                <Link to="/technology#data-intelligence" className="hover:text-dos-cyan transition-colors">
                  Data & Semantic Intelligence
                </Link>
              </li>
              <li>
                <Link to="/technology#software-systems" className="hover:text-dos-cyan transition-colors">
                  Operating Systems & Runtimes
                </Link>
              </li>
              <li>
                <Link to="/technology#computing-infrastructure" className="hover:text-dos-cyan transition-colors">
                  Distributed Server Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/technology#digital-services" className="hover:text-dos-cyan transition-colors">
                  Digital Services & Interoperability
                </Link>
              </li>
              <li>
                <Link to="/technology#artificial-intelligence" className="hover:text-dos-cyan transition-colors">
                  Grounded Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-dos-cyan transition-colors">
                  Architectural Solutions
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-dos-cyan transition-colors">
                  Engagement Models (Pilot to Enterprise)
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading text-xs font-semibold text-dos-cloud uppercase tracking-wider">
              Trust & Legal
            </h3>
            <ul className="space-y-2.5 text-xs text-dos-mist/80 font-sans">
              <li>
                <Link to="/security" className="hover:text-dos-cyan transition-colors">
                  Security & Trust Center
                </Link>
              </li>
              <li>
                <Link to="/responsible-ai" className="hover:text-dos-cyan transition-colors">
                  Responsible AI Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-dos-cyan transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-dos-cyan transition-colors">
                  Terms of Service & AUP
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="hover:text-dos-cyan transition-colors">
                  Accessibility (WCAG 2.2)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & disclosures */}
        <div className="mt-14 pt-8 border-t border-dos-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dos-mist/60 font-sans">
          <div>
            &copy; {currentYear} {COMPANY_INFO.legalName}. All rights reserved.
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
          </div>
        </div>
      </div>
    </footer>
  );
};
