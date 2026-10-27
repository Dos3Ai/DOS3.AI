import React, { useState } from 'react';
import { BookOpen, Search, ArrowRight, Filter, Clock, Sparkles, ExternalLink, Download } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { RESEARCH_ARTICLES_DETAILED, EXTERNAL_LINKS } from '../data/content';
import { ResearchArticle } from '../types';
import { ResearchDetailModal } from '../components/ResearchDetailModal';
import { Newsletter } from '../components/Newsletter';

export const Research: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPaper, setSelectedPaper] = useState<ResearchArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    'All',
    'Distributed Systems',
    'AI Safety & Verification',
    'Data Infrastructure',
    'Systems Architecture',
  ];

  const filteredPapers = RESEARCH_ARTICLES_DETAILED.filter((paper) => {
    const matchesCategory = activeCategory === 'All' || paper.category === activeCategory;
    const matchesSearch =
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenPaper = (paper: ResearchArticle) => {
    setSelectedPaper(paper);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-24 lg:pt-32 pb-24">
      {/* Page Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-dos-surface border border-dos-border text-dos-cyan mb-6">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Research & Emerging Technologies</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-dos-cloud tracking-tight leading-tight mb-6">
          Ideas, Research &{' '}
          <span className="text-gradient">Emerging Technology.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-dos-mist/85 leading-relaxed font-sans mb-8">
          A dedicated space for technical working papers, engineering notes, and architectural discussions from our ongoing investigations in Dallas, TX. Click on any topic to inspect full technical outlines and empirical benchmarks.
        </p>

        {/* Download Manual / Whitepaper Button (Requirement #2) */}
        <div className="flex items-center justify-center gap-3">
          <a
            href={EXTERNAL_LINKS.manualPdf}
            download="DOS3AI_Architecture_Manual.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dos-surface hover:bg-dos-surfaceHover border border-dos-cyan/40 text-dos-cyan text-xs font-semibold shadow-sm transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Full Architecture & Research Manual (PDF)</span>
          </a>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="glass-card rounded-2xl p-4 sm:p-6 border border-dos-border/60 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none" role="tablist">
            <Filter className="w-4 h-4 text-dos-mist/60 shrink-0 ml-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dos-cyan ${
                  activeCategory === cat
                    ? 'bg-dos-azure text-white font-semibold shadow-glow-azure/30'
                    : 'text-dos-mist hover:text-white hover:bg-dos-surface'
                }`}
                role="tab"
                aria-selected={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-dos-mist/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research topics..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-dos-surface border border-dos-border/60 text-xs text-white placeholder:text-dos-mist/40 focus:outline-none focus:ring-2 focus:ring-dos-cyan transition-all"
            />
          </div>
        </div>
      </div>

      {/* Working Papers List (Requirement #7: Interactive details on click) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        {filteredPapers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPapers.map((paper) => (
              <div
                key={paper.id}
                onClick={() => handleOpenPaper(paper)}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-dos-border/60 flex flex-col justify-between transition-all hover:border-dos-cyan/60 hover:shadow-glow-cyan/20 cursor-pointer group"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleOpenPaper(paper);
                  }
                }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-dos-surface text-dos-cyan border border-dos-border/70">
                      {paper.category}
                    </span>
                    <span className="text-xs font-mono text-dos-mist/60 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{paper.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-dos-cloud mb-3 group-hover:text-dos-cyan transition-colors">
                    {paper.title}
                  </h3>

                  <p className="text-sm text-dos-mist/80 font-sans leading-relaxed mb-6">
                    {paper.abstract}
                  </p>
                </div>

                <div className="pt-4 border-t border-dos-border/40 flex items-center justify-between">
                  <span className="text-xs font-mono text-dos-mist/60 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-dos-cyan/80 animate-pulse" />
                    <span>{paper.status}</span>
                  </span>

                  <span className="text-xs font-semibold text-dos-cyan group-hover:text-white transition-colors inline-flex items-center gap-1.5">
                    <span>Topic Outline</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-12 text-center border border-dos-border/60 max-w-lg mx-auto">
            <Sparkles className="w-8 h-8 text-dos-cyan mx-auto mb-3" />
            <h3 className="text-lg font-bold font-heading text-dos-cloud mb-1">
              No Matching Topics
            </h3>
            <p className="text-xs text-dos-mist/70 mb-4">
              Try adjusting your search criteria or category filter.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      {/* Newsletter */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Newsletter />
      </div>

      {/* Editorial Standard */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-8 border border-dos-border/60 text-center space-y-4">
          <span className="text-xs font-mono text-dos-cyan uppercase tracking-wider block">
            Editorial Standard
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-dos-cloud">
            Evidence-Based Research Standards
          </h2>
          <p className="text-sm text-dos-mist/80 leading-relaxed font-sans max-w-2xl mx-auto">
            DOS3.AI adheres to strict publication standards. We do not publish speculative marketing claims disguised as research. Every technical paper undergoes rigorous internal review and empirical verification on our Dallas HPC clusters before release.
          </p>
          <div className="pt-2">
            <a
              href={EXTERNAL_LINKS.bookingSchedule}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-dos-surface hover:bg-dos-surfaceHover border border-dos-border/80 text-dos-mist hover:text-white text-xs font-semibold transition-all"
            >
              <span>Inquire About Research Collaborations</span>
              <ExternalLink className="w-3.5 h-3.5 text-dos-cyan" />
            </a>
          </div>
        </div>
      </div>

      {/* Research Details Modal (Requirement #7) */}
      <ResearchDetailModal
        paper={selectedPaper}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
