import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface NewsletterProps {
  className?: string;
  variant?: 'card' | 'inline';
}

export const Newsletter: React.FC<NewsletterProps> = ({ className = '', variant = 'card' }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      try {
        const stored = JSON.parse(localStorage.getItem('dos3_subscribers') || '[]');
        stored.push({ email, date: new Date().toISOString() });
        localStorage.setItem('dos3_subscribers', JSON.stringify(stored));
      } catch (err) {
        // ignore storage error
      }
    }, 500);
  };

  if (variant === 'inline') {
    return (
      <div className={className}>
        {subscribed ? (
          <div className="flex items-center gap-2 text-xs font-mono text-dos-cyan">
            <CheckCircle2 className="w-4 h-4 text-dos-cyan" />
            <span>Subscribed to research briefings!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="w-full px-3 py-2 rounded-xl bg-dos-surface border border-dos-border/60 text-xs text-white placeholder:text-dos-mist/40 focus:outline-none focus:ring-1 focus:ring-dos-cyan"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-3.5 py-2 rounded-xl bg-dos-cyan text-black text-xs font-semibold whitespace-nowrap hover:opacity-90 disabled:opacity-50 transition-all"
            >
              {loading ? '...' : 'Join'}
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className={`glass-card rounded-3xl p-8 sm:p-12 border border-dos-cyan/30 relative overflow-hidden shadow-2xl ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-dos-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase bg-dos-surface border border-dos-cyan/40 text-dos-cyan">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Research Dispatch & Technical Briefings</span>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-dos-cloud">
          Stay Ahead in Autonomous AI & Systems Architecture.
        </h3>

        <p className="text-xs sm:text-sm text-dos-mist/85 leading-relaxed font-sans max-w-xl mx-auto">
          Just enter your email to receive our latest working papers, Model Context Protocol (MCP) specifications, and engineering updates directly from our Dallas research lab.
        </p>

        {subscribed ? (
          <div className="p-6 rounded-2xl bg-dos-surface border border-dos-cyan/50 text-center space-y-2 animate-fadeIn max-w-md mx-auto">
            <CheckCircle2 className="w-10 h-10 text-dos-cyan mx-auto animate-bounce" />
            <h4 className="text-base font-bold font-heading text-white">
              You're on the Dispatch List!
            </h4>
            <p className="text-xs text-dos-mist/80 font-mono">
              Welcome aboard. You'll receive our upcoming briefings on deterministic agentic harnesses and MCP server topologies.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3 pt-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-dos-mist/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-dos-surface border border-dos-border/80 text-xs text-white placeholder:text-dos-mist/50 focus:outline-none focus:ring-2 focus:ring-dos-cyan transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-dos-cyan to-dos-azure text-black font-semibold text-xs tracking-wide uppercase hover:opacity-95 shadow-glow-cyan/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <span>Signing In...</span>
                ) : (
                  <>
                    <span>Get Newsletter</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {error && (
              <p className="text-xs text-red-400 font-mono text-left">{error}</p>
            )}

            <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-dos-mist/60">
              <ShieldCheck className="w-3.5 h-3.5 text-dos-cyan" />
              <span>Strict zero-spam policy. Unsubscribe anytime with 1-click.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
