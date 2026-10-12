'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Cpu,
  Database,
  Globe,
  BarChart3,
  Sparkles,
  CheckCircle2,
  Compass,
} from 'lucide-react';
import { SKILL_CATEGORIES, SkillCategory } from '@/data/portfolioData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';

export function Skills() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code className="w-5 h-5 text-blue-400" />;
      case 'problem-solving':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'web-dev':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'data-analytics':
        return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      case 'currently-exploring':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      default:
        return <Code className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-slate-950/40">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Expertise & Toolkit"
          title="Technical Skills"
          subtitle="A structured overview of core programming languages, problem-solving foundations, and emerging AI technologies."
        />

        {/* Legend / Distinction Banner */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span className="font-medium">Core Technical Foundation</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
            <Compass className="w-4 h-4 text-purple-400 animate-spin-slow" />
            <span className="font-medium">Currently Learning & Exploring</span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category: SkillCategory, index: number) => {
            const isExploring = category.status === 'exploring';

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlowCard
                  glowColor={isExploring ? 'purple' : category.badgeColor}
                  className={`h-full flex flex-col justify-between ${
                    isExploring
                      ? 'border-purple-500/30 bg-gradient-to-b from-purple-950/20 to-slate-900/60'
                      : ''
                  }`}
                >
                  <div>
                    {/* Header: Category Name & Status Badge */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/[0.08]">
                          {getCategoryIcon(category.id)}
                        </div>
                        <h3 className="font-semibold text-white text-base sm:text-lg">
                          {category.name}
                        </h3>
                      </div>

                      {isExploring ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                          Exploring
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-800 text-slate-300 border border-white/[0.08]">
                          Established
                        </span>
                      )}
                    </div>

                    {/* Skill Badges / Pills */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                            isExploring
                              ? 'bg-purple-950/40 text-purple-200 border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                              : 'bg-slate-800/60 text-slate-200 border border-white/[0.08] hover:border-cyan-500/40 hover:text-white hover:shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                          }`}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer caption */}
                  <div className="mt-6 pt-4 border-t border-white/[0.05] text-[11px] text-slate-400 font-mono">
                    {isExploring
                      ? '✦ Emerging interest & self-study'
                      : `✦ ${category.skills.length} core competencies`}
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
