import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/content';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open & handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav ${
        isScrolled ? 'py-2.5 shadow-md' : 'py-3.5 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Always visible and switches accurately between Dark & Light themes */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dos-cyan rounded-md shrink-0"
            aria-label="DOS3.AI Home"
            onClick={() => setIsOpen(false)}
          >
            {/* Dark Theme Logo (for Deep Void) */}
            <img
              src="/images/logo-dark.png"
              alt="DOS3.AI"
              className="h-8 sm:h-9 w-auto object-contain dark-logo transition-transform duration-200 group-hover:scale-[1.02]"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent && !parent.querySelector('.dark-fallback')) {
                  const fallback = document.createElement('span');
                  fallback.className = 'dark-fallback font-heading font-extrabold text-xl text-white tracking-wider';
                  fallback.innerHTML = 'DOS3<span class="text-dos-cyan">.AI</span>';
                  parent.appendChild(fallback);
                }
              }}
            />
            {/* Light Theme Logo (for Quantum Frost) */}
            <img
              src="/images/logo-light.png"
              alt="DOS3.AI"
              className="h-8 sm:h-9 w-auto object-contain light-logo transition-transform duration-200 group-hover:scale-[1.02]"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent && !parent.querySelector('.light-fallback')) {
                  const fallback = document.createElement('span');
                  fallback.className = 'light-fallback font-heading font-extrabold text-xl text-slate-900 tracking-wider';
                  fallback.innerHTML = 'DOS3<span class="text-blue-600">.AI</span>';
                  parent.appendChild(fallback);
                }
              }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`nav-link-item px-3 py-1.5 text-xs lg:text-sm font-medium rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dos-cyan ${
                    isActive
                      ? 'nav-link-active text-white bg-dos-surface border border-dos-border/60 shadow-sm'
                      : 'text-dos-mist hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Theme Toggle Only (No event, connect, or sign in buttons) */}
          <div className="hidden lg:flex items-center">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-dos-mist hover:text-white hover:bg-dos-surface border border-transparent hover:border-dos-border/60 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 top-[57px] bg-black/75 backdrop-blur-sm z-40 lg:hidden animate-fadeIn"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div
            className="relative z-50 lg:hidden glass-nav border-t border-dos-border/40 px-4 pt-3 pb-6 mt-2 space-y-2 max-h-[calc(100dvh-4.5rem)] overflow-y-auto no-scrollbar animate-slideDown"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`nav-link-item px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'nav-link-active text-dos-cyan bg-dos-surface border border-dos-border font-semibold shadow-glow-cyan/10'
                        : 'text-dos-mist hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </header>
  );
};
