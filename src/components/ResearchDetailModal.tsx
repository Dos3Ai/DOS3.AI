import React from 'react';
import { X, BookOpen, Clock, ShieldCheck, Cpu, Download, ArrowRight, Share2, ExternalLink } from 'lucide-react';
import { ResearchArticle } from '../types';
import { EXTERNAL_LINKS } from '../data/content';

interface ResearchDetailModalProps {
  paper: ResearchArticle | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ResearchDetailModal: React.FC<ResearchDetailModalProps> = ({ paper, isOpen, onClose }) => {
  if (!isOpen || !paper) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="glass-card rounded-3xl p-6 sm:p-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-dos-cyan/40 shadow-2xl relative animate-scaleUp"
        role="dialog"
        aria-modal="true"
        aria-label={paper.title}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-dos-mist hover:text-white hover:bg-dos-surface border border-transparent hover:border-dos-border/60 transition-colors"
          aria-label="Close research topic detail"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-md text-xs font-mono uppercase bg-dos-surface text-dos-cyan border border-dos-cyan/40">
            {paper.category}
          </span>
          <span className="flex items-center gap-1 text-xs font-mono text-dos-mist/70">
            <Clock className="w-3.5 h-3.5 text-dos-azure" />
            <span>{paper.readTime}</span>
          </span>
          <span className="flex items-center gap-1 text-xs font-mono text-dos-mist/70">
            <span className="w-2 h-2 rounded-full bg-dos-cyan animate-pulse" />
            <span>{paper.status}</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-dos-cloud mb-4 leading-snug">
          {paper.title}
        </h2>

        {/* Abstract Box */}
        <div className="p-5 rounded-2xl bg-dos-surface border border-dos-border/80 mb-6">
          <span className="text-[11px] font-mono text-dos-cyan uppercase tracking-wider block mb-1.5">
            Abstract & Investigative Scope
          </span>
          <p className="text-sm text-dos-mist/90 leading-relaxed font-sans">
            {paper.abstract}
          </p>
        </div>

        {/* Full Overview Section */}
        {paper.fullOverview && (
          <div className="mb-6 space-y-2">
            <h3 className="text-base font-bold font-heading text-dos-cloud flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-dos-cyan" />
              <span>Executive Overview</span>
            </h3>
            <p className="text-xs sm:text-sm text-dos-mist/85 leading-relaxed font-sans">
              {paper.fullOverview}
            </p>
          </div>
        )}

        {/* Architecture Details */}
        {paper.architectureDetails && paper.architectureDetails.length > 0 && (
          <div className="mb-6 space-y-3">
            <h3 className="text-base font-bold font-heading text-dos-cloud flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-dos-azure" />
              <span>Architectural Specifications & Invariants</span>
            </h3>
            <div className="space-y-2">
              {paper.architectureDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-dos-surface/70 border border-dos-border/50 flex items-start gap-3 text-xs font-sans text-dos-mist/85"
                >
                  <span className="w-5 h-5 rounded-md bg-dos-surface border border-dos-cyan/40 text-dos-cyan font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empirical Benchmarks */}
        {paper.benchmarks && paper.benchmarks.length > 0 && (
          <div className="mb-6 space-y-2.5">
            <h3 className="text-base font-bold font-heading text-dos-cloud flex items-center gap-2">
              <Cpu className="w-4 h-4 text-dos-violet" />
              <span>Empirical Benchmarks & Verification (HPC Clusters)</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-dos-mist/80">
              {paper.benchmarks.map((b, i) => (
                <li key={i} className="p-3 rounded-xl bg-dos-surface border border-dos-border/40 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-dos-cyan shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Citation Box */}
        {paper.citations && (
          <div className="p-4 rounded-xl bg-dos-void border border-dos-border/60 mb-6">
            <span className="text-[10px] font-mono text-dos-mist/50 uppercase tracking-widest block mb-1">
              Suggested Citation
            </span>
            <code className="text-xs font-mono text-dos-mist/80 block break-words">
              {paper.citations}
            </code>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-4 border-t border-dos-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-mono text-dos-mist/60 text-center sm:text-left">
            Peer review in progress • Dallas AI Research Lab
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={EXTERNAL_LINKS.manualPdf}
              download="DOS3AI_Architecture_Manual.pdf"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-dos-surface border border-dos-cyan/40 text-dos-cyan hover:bg-dos-surfaceHover text-xs font-semibold transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Manual PDF</span>
            </a>
            <a
              href={EXTERNAL_LINKS.bookingSchedule}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-dos-cyan to-dos-azure text-black text-xs font-semibold hover:opacity-90 transition-all shadow-glow-cyan/20"
            >
              <span>Discuss with Author</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
