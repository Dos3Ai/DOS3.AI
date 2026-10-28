import React, { useState } from 'react';
import { Linkedin, Calendar, Mail, MapPin, GraduationCap, Code2, Users, Quote, ExternalLink, ArrowRight } from 'lucide-react';
import { CEO_PROFILE, EXTERNAL_LINKS } from '../data/content';
import ceoPhoto from '../assets/ceo-hariharan-babu.jpg';

export const PeopleSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" id="people-section">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-dos-cyan/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase bg-dos-surface border border-dos-cyan/40 text-dos-cyan mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Leadership & Research Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-dos-cloud tracking-tight">
            Pioneering the Next Era of <span className="text-gradient">Intelligent Systems.</span>
          </h2>
          <p className="text-sm sm:text-base text-dos-mist/85 font-sans mt-4">
            Led by founder Hariharan Babu and powered by an elite team of 50+ researchers, distributed systems architects, and machine learning engineers.
          </p>
        </div>

        {/* 50+ Team Stat Banner */}
        <div className="mb-14 glass-card rounded-2xl p-6 border border-dos-border/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-dos-cyan to-dos-azure flex items-center justify-center text-black font-extrabold text-xl shadow-glow-cyan/20 shrink-0">
              50+
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-dos-cloud">
                Top-Tier AI Researchers & Distributed Systems Developers
              </h3>
              <p className="text-xs text-dos-mist/80 font-sans">
                Operating multi-node GPU superclusters in Dallas, Texas and collaborating with global academic research institutions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/careers"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-dos-surface hover:bg-dos-surfaceHover border border-dos-border/80 text-dos-cyan text-xs font-semibold transition-all"
            >
              <span>Talent Network</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* CEO Spotlight Card (Requirement #3: CEO Picture Added) */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-dos-cyan/40 relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* CEO Profile Image / Visual & Badges */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-3xl p-1 bg-gradient-to-tr from-dos-cyan via-dos-azure to-dos-violet shadow-glow-cyan/40">
                  <div className="w-full h-full rounded-[22px] overflow-hidden bg-dos-void flex items-center justify-center border border-dos-border/50 relative">
                    {!imgError ? (
                      <img
                        src={ceoPhoto}
                        alt="Hariharan Babu - Founder & CEO, DOS3.AI"
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          if (e.currentTarget.src !== '/images/ceo-hariharan-babu-official.jpg') {
                            e.currentTarget.src = '/images/ceo-hariharan-babu-official.jpg';
                          } else {
                            setImgError(true);
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-dos-surface to-dos-surfaceHover border border-dos-cyan/40 flex items-center justify-center mb-2">
                          <span className="font-heading font-extrabold text-3xl text-gradient">
                            HB
                          </span>
                        </div>
                        <span className="text-sm font-bold font-heading text-white">
                          Hariharan Babu
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Dallas, TX badge */}
                <div className="absolute -bottom-2.5 -right-2 px-3.5 py-1.5 rounded-full bg-dos-surface border border-dos-cyan text-[11px] font-mono text-dos-cyan shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-dos-cyan animate-pulse" />
                  <span>Dallas, TX HQ</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold font-heading text-dos-cloud mb-1">
                {CEO_PROFILE.name}
              </h3>
              <p className="text-xs font-mono text-dos-cyan uppercase tracking-wider mb-3">
                {CEO_PROFILE.role}
              </p>

              {/* Education */}
              <div className="flex items-center gap-2 text-xs text-dos-mist/80 font-sans mb-4">
                <GraduationCap className="w-4 h-4 text-dos-azure shrink-0" />
                <span>{CEO_PROFILE.education}</span>
              </div>

              {/* Connect / Redirections */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                <a
                  href={EXTERNAL_LINKS.ceoLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-dos-surface hover:bg-dos-surfaceHover border border-dos-border/80 hover:border-dos-cyan text-xs font-semibold text-white transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-dos-cyan" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-dos-mist/50" />
                </a>

                <a
                  href={EXTERNAL_LINKS.bookingSchedule}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-dos-cyan to-dos-azure text-black text-xs font-bold transition-all shadow-glow-cyan/20 hover:opacity-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Business Meeting</span>
                </a>

                <a
                  href={EXTERNAL_LINKS.orgMail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-dos-surface hover:bg-dos-surfaceHover border border-dos-border/80 text-xs font-semibold text-dos-mist hover:text-white transition-all"
                >
                  <Mail className="w-4 h-4 text-dos-azure" />
                  <span>Email CEO</span>
                </a>

                <a
                  href={EXTERNAL_LINKS.dallasMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-dos-surface hover:bg-dos-surfaceHover border border-dos-border/80 text-xs font-semibold text-dos-mist hover:text-white transition-all"
                >
                  <MapPin className="w-4 h-4 text-dos-magenta" />
                  <span>Dallas, Texas Area</span>
                </a>
              </div>
            </div>

            {/* CEO Vision & Core Skills */}
            <div className="lg:col-span-7 space-y-6">
              {/* CEO Quote Card */}
              <div className="ceo-quote-card p-6 sm:p-8 rounded-2xl bg-dos-surface/90 border border-dos-border/70 relative">
                <Quote className="w-8 h-8 text-dos-cyan/30 absolute top-4 right-4" />
                <span className="text-xs font-mono uppercase tracking-widest text-dos-cyan block mb-2 font-semibold">
                  Executive Vision • Future Impact of AI
                </span>
                <blockquote className="text-sm sm:text-base text-dos-cloud font-sans leading-relaxed italic mb-4">
                  "{CEO_PROFILE.quote}"
                </blockquote>
                <div className="flex items-center justify-between text-xs font-mono text-dos-mist/70 pt-2 border-t border-dos-border/40">
                  <span className="quote-author">— Hariharan Babu, Founder & CEO</span>
                  <span className="quote-title text-dos-cyan">DOS3.AI Substrate Vision</span>
                </div>
              </div>

              {/* Core Skills & Technical Specializations */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-dos-mist/70 block mb-3 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-dos-cyan" />
                  <span>Core Technical Disciplines & Architecture Skills</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {CEO_PROFILE.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono bg-dos-surface border border-dos-border/80 text-dos-mist hover:text-white hover:border-dos-cyan/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio summary */}
              <p className="text-xs text-dos-mist/80 leading-relaxed font-sans pt-2">
                {CEO_PROFILE.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
