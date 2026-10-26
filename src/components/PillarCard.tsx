import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Layers, Server, Cpu, Sparkles, ArrowRight } from 'lucide-react';
import { TechnologyPillar } from '../types';

interface PillarCardProps {
  pillar: TechnologyPillar;
  index: number;
}

export const PillarCard: React.FC<PillarCardProps> = ({ pillar, index }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Database':
        return <Database className="w-6 h-6 text-dos-cyan" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-dos-azure" />;
      case 'Server':
        return <Server className="w-6 h-6 text-dos-cyan" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-dos-violet" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-dos-magenta" />;
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1">
      <div>
        {/* Top header with icon and number */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-dos-surface border border-dos-border/60 flex items-center justify-center transition-colors group-hover:border-dos-cyan/40">
            {getIcon(pillar.iconName)}
          </div>
          <span className="text-xs font-mono font-semibold text-dos-mist/50">
            0{index + 1}
          </span>
        </div>

        <span className="text-xs font-medium uppercase tracking-wider text-dos-cyan mb-1.5 block">
          {pillar.subtitle}
        </span>

        <h3 className="text-xl md:text-2xl font-bold font-heading text-dos-cloud mb-3 group-hover:text-white transition-colors">
          {pillar.title}
        </h3>

        <p className="text-sm text-dos-mist/80 leading-relaxed mb-6 font-sans">
          {pillar.description}
        </p>

        {/* Explorations preview bullet points */}
        <div className="border-t border-dos-border/40 pt-4 mb-6">
          <span className="text-xs font-semibold text-dos-cloud uppercase tracking-wider block mb-2">
            Areas of Exploration
          </span>
          <ul className="space-y-1.5">
            {pillar.explorations.slice(0, 3).map((item, i) => (
              <li key={i} className="text-xs text-dos-mist/75 flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-dos-cyan mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        to={`/technology#${pillar.id}`}
        className="inline-flex items-center gap-2 text-xs font-semibold text-dos-cyan group-hover:text-white transition-colors"
      >
        <span>Explore Focus Area</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};
