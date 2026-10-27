import React, { useState, useEffect } from 'react';
import { X, Lock, Mail, User, ArrowRight, ShieldCheck, Github, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (userEmail: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setError('');
      setSuccess(false);
    }
  }, [isOpen, mode]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const userObj = {
        email,
        name: name || email.split('@')[0],
        token: 'dos3_jwt_' + Math.random().toString(36).substring(2, 10)
      };
      localStorage.setItem('dos3_user', JSON.stringify(userObj));
      if (onSuccess) onSuccess(email);

      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 1200);
    }, 600);
  };

  const handleOAuthMock = (provider: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const userObj = {
        email: `dev@${provider.toLowerCase()}.com`,
        name: `${provider} Developer`,
        token: `dos3_oauth_${provider.toLowerCase()}`
      };
      localStorage.setItem('dos3_user', JSON.stringify(userObj));
      if (onSuccess) onSuccess(userObj.email);

      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 1200);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="glass-card rounded-3xl p-6 sm:p-8 max-w-md w-full border border-dos-cyan/40 shadow-2xl relative animate-scaleUp"
        role="dialog"
        aria-modal="true"
        aria-label="Authentication Modal"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-dos-mist hover:text-white hover:bg-dos-surface border border-transparent hover:border-dos-border/60 transition-colors"
          aria-label="Close authentication modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-dos-surface border border-dos-cyan/40 shadow-glow-cyan/20 flex items-center justify-center mx-auto mb-3">
            <Lock className="w-6 h-6 text-dos-cyan" />
          </div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-dos-cyan">
            DOS3.AI Developer Portal
          </span>
          <h2 className="text-2xl font-bold font-heading text-dos-cloud mt-1">
            {mode === 'signin' ? 'Sign In to Your Workspace' : 'Create an Account'}
          </h2>
          <p className="text-xs text-dos-mist/80 mt-1">
            Access secure enclaves, MCP server gateways, and telemetry endpoints.
          </p>
        </div>

        {/* Success State */}
        {success ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-dos-cyan mx-auto animate-bounce" />
            <h3 className="text-lg font-bold font-heading text-dos-cloud">
              {mode === 'signin' ? 'Authenticated Successfully!' : 'Account Created!'}
            </h3>
            <p className="text-xs text-dos-mist/80 font-mono">
              Redirecting to DOS3.AI Developer Enclave...
            </p>
          </div>
        ) : (
          <>
            {/* Mode Switcher */}
            <div className="flex p-1 rounded-xl bg-dos-surface border border-dos-border mb-6">
              <button
                type="button"
                onClick={() => setMode('signin')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  mode === 'signin'
                    ? 'bg-dos-azure text-white shadow-glow-azure/30'
                    : 'text-dos-mist hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setMode('signup')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  mode === 'signup'
                    ? 'bg-dos-azure text-white shadow-glow-azure/30'
                    : 'text-dos-mist hover:text-white'
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Error banner */}
            {error && (
              <div className="p-3 mb-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <div>
                  <label className="block text-xs font-mono text-dos-mist mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-dos-mist/50 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Hariharan Babu"
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-dos-surface border border-dos-border/70 text-xs text-white placeholder:text-dos-mist/40 focus:outline-none focus:ring-2 focus:ring-dos-cyan"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-mono text-dos-mist mb-1">Work / Personal Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-dos-mist/50 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="developer@organization.ai"
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-dos-surface border border-dos-border/70 text-xs text-white placeholder:text-dos-mist/40 focus:outline-none focus:ring-2 focus:ring-dos-cyan"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-dos-mist mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-dos-mist/50 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-dos-surface border border-dos-border/70 text-xs text-white placeholder:text-dos-mist/40 focus:outline-none focus:ring-2 focus:ring-dos-cyan"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-dos-cyan to-dos-azure text-black font-semibold text-xs tracking-wide uppercase hover:opacity-95 shadow-glow-cyan/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>{mode === 'signin' ? 'Sign In to Platform' : 'Create Free Account'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* SSO separator */}
            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-dos-border/50" />
              </div>
              <div className="relative flex justify-center text-[10px] font-mono uppercase">
                <span className="bg-dos-void px-2 text-dos-mist/60">Or authenticate with</span>
              </div>
            </div>

            {/* OAuth Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleOAuthMock('GitHub')}
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-dos-surface border border-dos-border/70 text-xs text-dos-mist hover:text-white hover:border-dos-cyan/40 transition-colors"
              >
                <Github className="w-4 h-4 text-white" />
                <span>GitHub SSO</span>
              </button>

              <button
                type="button"
                onClick={() => handleOAuthMock('Google')}
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-dos-surface border border-dos-border/70 text-xs text-dos-mist hover:text-white hover:border-dos-cyan/40 transition-colors"
              >
                <span className="font-bold text-xs">G</span>
                <span>Google Workspace</span>
              </button>
            </div>

            <div className="mt-5 text-center flex items-center justify-center gap-1.5 text-[11px] text-dos-mist/60 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-dos-cyan" />
              <span>Zero-knowledge tenant isolation policy</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
