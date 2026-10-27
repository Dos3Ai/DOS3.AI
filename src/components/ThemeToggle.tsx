import React, { useState, useEffect } from 'react';
import { Moon, Sparkles, Sun } from 'lucide-react';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dos3-theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('dos3-theme', 'light');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('dos3-theme', 'dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-300 border shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-dos-cyan ${
        theme === 'dark'
          ? 'bg-dos-surface/90 border-dos-border/80 hover:border-dos-cyan/60 text-dos-cyan'
          : 'bg-white border-slate-300 hover:border-blue-500 text-blue-700 shadow-slate-200'
      } ${className}`}
      title={theme === 'dark' ? 'Switch to Quantum Frost theme' : 'Switch to Deep Void theme'}
      aria-label="Toggle visual theme"
    >
      {theme === 'dark' ? (
        <span className="flex items-center gap-1.5 text-xs font-mono font-medium tracking-wide">
          <Moon className="w-3.5 h-3.5 text-dos-cyan" />
          <span className="hidden sm:inline">Deep Void</span>
          <span className="text-[11px]">🌌</span>
        </span>
      ) : (
        <span className="flex items-center gap-1.5 text-xs font-mono font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span className="hidden sm:inline">Quantum Frost</span>
          <span className="text-[11px]">⚡</span>
        </span>
      )}
    </button>
  );
};
