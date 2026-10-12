'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Code2,
  Sparkles,
  Target,
  MapPin,
  BookOpen,
} from 'lucide-react';
import { ABOUT_CONTENT, PERSONAL_INFO } from '@/data/portfolioData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';

export function About() {
  const iconMap = [
    <GraduationCap key="grad" className="w-5 h-5 text-purple-400" />,
    <BookOpen key="book" className="w-5 h-5 text-cyan-400" />,
    <Code2 key="code" className="w-5 h-5 text-blue-400" />,
    <Target key="target" className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Background"
          title="About Me"
          subtitle="A passionate engineering student focused on intelligent technologies and strong algorithmic fundamentals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Authentic Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/60 border border-white/[0.08] backdrop-blur-xl shadow-xl space-y-5">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
                <div className="inline-flex items-center gap-1.5 text-purple-300">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-cyan-300">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>{PERSONAL_INFO.college}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Academic & Technical Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {ABOUT_CONTENT.academicPillars.map((pillar, index) => (
              <GlowCard
                key={pillar.label}
                glowColor={
                  index === 0 ? 'purple' : index === 1 ? 'cyan' : index === 2 ? 'blue' : 'emerald'
                }
                className="p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/[0.1] shrink-0">
                    {iconMap[index]}
                  </div>
                  <div>
                    <span className="text-xs font-mono tracking-wider uppercase text-slate-400">
                      {pillar.label}
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-white mt-1">
                      {pillar.value}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
