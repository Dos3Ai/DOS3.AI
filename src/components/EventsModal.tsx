import React from 'react';
import { X, Calendar, Clock, MapPin, ExternalLink, Sparkles, UserCheck } from 'lucide-react';
import { UPCOMING_EVENTS, EXTERNAL_LINKS } from '../data/content';

interface EventsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EventsModal: React.FC<EventsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="glass-card rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-dos-cyan/40 shadow-2xl relative animate-scaleUp"
        role="dialog"
        aria-modal="true"
        aria-label="Upcoming Events and Meeting Sessions"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-dos-mist hover:text-white hover:bg-dos-surface border border-transparent hover:border-dos-border/60 transition-colors"
          aria-label="Close events modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono uppercase bg-dos-surface border border-dos-cyan/40 text-dos-cyan mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Technical Schedule • 2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-dos-cloud">
            Upcoming Events & Architecture Sessions
          </h2>
          <p className="text-xs sm:text-sm text-dos-mist/80 mt-1">
            Connect directly with DOS3.AI researchers, join our Dallas engineering meetups, or book a 1-on-1 architecture session.
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-4 mb-6">
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.id}
              className="glass-card rounded-2xl p-5 border border-dos-border/60 hover:border-dos-cyan/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase bg-dos-surface text-dos-cyan border border-dos-border">
                    {event.type}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-dos-mist/70">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-dos-cyan" />
                      <span>{event.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-dos-azure" />
                      <span>{event.time}</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-heading text-dos-cloud mb-1.5">
                  {event.title}
                </h3>

                <p className="text-xs text-dos-mist/80 leading-relaxed font-sans mb-3">
                  {event.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-dos-mist/60 pt-2 border-t border-dos-border/30">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-dos-cyan" />
                    <span>{event.location}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5 text-dos-violet" />
                    <span>{event.speaker}</span>
                  </span>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-dos-border/40 flex items-center justify-end">
                <a
                  href={event.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-dos-surface hover:bg-dos-surfaceHover text-dos-cyan border border-dos-cyan/40 text-xs font-semibold hover:shadow-glow-cyan/20 transition-all"
                >
                  <span>RSVP / Schedule Session</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Booking Box */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-dos-surface to-dos-surfaceHover border border-dos-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-dos-cyan shrink-0" />
            <div>
              <span className="text-xs font-bold text-white block">
                Need an immediate custom consultation?
              </span>
              <span className="text-[11px] text-dos-mist/70">
                Book a dedicated 30-minute meeting with our core engineering team.
              </span>
            </div>
          </div>
          <a
            href={EXTERNAL_LINKS.bookingSchedule}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-4 py-2 rounded-xl bg-gradient-to-r from-dos-cyan to-dos-azure text-black font-semibold text-xs whitespace-nowrap shadow-glow-cyan/20 hover:opacity-90 transition-all"
          >
            Book 30-Min Meeting
          </a>
        </div>
      </div>
    </div>
  );
};
