import React, { useState, useEffect } from 'react';
import { Shield, Cookie, X, Check } from 'lucide-react';
import { Button } from './Button';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always required
    analytics: false,
    performance: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('dos3_cookie_consent');
    if (!consent) {
      // Delay showing banner slightly for smooth entrance
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'dos3_cookie_consent',
      JSON.stringify({ essential: true, analytics: true, performance: true, timestamp: Date.now() })
    );
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem(
      'dos3_cookie_consent',
      JSON.stringify({ essential: true, analytics: false, performance: false, timestamp: Date.now() })
    );
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      'dos3_cookie_consent',
      JSON.stringify({ ...preferences, timestamp: Date.now() })
    );
    setShowPreferences(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      <div
        className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-slideUp"
        role="region"
        aria-label="Cookie and Privacy Consent"
      >
        <div className="glass-card rounded-2xl p-5 border border-dos-border/80 shadow-2xl backdrop-blur-xl space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-dos-surface border border-dos-border flex items-center justify-center text-dos-cyan shrink-0 mt-0.5">
              <Cookie className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold font-heading text-dos-cloud">
                Privacy & Data Preferences
              </h4>
              <p className="text-xs text-dos-mist/80 mt-1 leading-relaxed font-sans">
                DOS3.AI uses essential cookies for site security and navigation. We do not sell personal data or track visitors across third-party networks.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Button variant="primary" size="sm" onClick={handleAcceptAll}>
              Accept All
            </Button>
            <Button variant="secondary" size="sm" onClick={handleEssentialOnly}>
              Essential Only
            </Button>
            <button
              type="button"
              onClick={() => setShowPreferences(true)}
              className="text-xs text-dos-mist hover:text-dos-cyan underline transition-colors px-2 py-1"
            >
              Preferences
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
        >
          <div className="glass-card rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-dos-border/80 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-dos-border/40 pb-4">
              <div className="flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-dos-cyan" />
                <h3 id="cookie-modal-title" className="text-lg font-bold font-heading text-dos-cloud">
                  Privacy & Cookie Preferences
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="text-dos-mist hover:text-white p-1 rounded-lg"
                aria-label="Close preferences"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs font-sans">
              <div className="p-3.5 rounded-xl bg-dos-surface border border-dos-border/60 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-dos-cloud">Strictly Essential</div>
                  <div className="text-dos-mist/70 mt-0.5">Required for core system security and routing.</div>
                </div>
                <span className="text-xs font-mono text-dos-cyan px-2 py-0.5 rounded bg-dos-cyan/10 border border-dos-cyan/30">
                  Always Active
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-dos-surface border border-dos-border/60 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-dos-cloud">Privacy-Preserving Analytics</div>
                  <div className="text-dos-mist/70 mt-0.5">Aggregated metrics to optimize page load speeds.</div>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="h-4 w-4 rounded bg-dos-void border-dos-border text-dos-azure focus:ring-dos-cyan"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-dos-surface border border-dos-border/60 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-dos-cloud">Performance & Telemetry</div>
                  <div className="text-dos-mist/70 mt-0.5">Assists in diagnostic crash and error detection.</div>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.performance}
                  onChange={(e) => setPreferences({ ...preferences, performance: e.target.checked })}
                  className="h-4 w-4 rounded bg-dos-void border-dos-border text-dos-azure focus:ring-dos-cyan"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-dos-border/40">
              <Button variant="secondary" size="sm" onClick={() => setShowPreferences(false)}>
                Cancel
              </Button>
              <Button variant="primary" size="sm" onClick={handleSavePreferences} icon={<Check className="w-4 h-4" />}>
                Save Preferences
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
