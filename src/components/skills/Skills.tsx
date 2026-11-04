'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Brain,
  Binary,
  Layers,
  Database,
  Wrench,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { SKILL_CATEGORIES, SkillCategory } from '@/data/portfolioData';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code className="w-5 h-5 text-[#2563EB]" />;
      case 'aiml':
        return <Brain className="w-5 h-5 text-[#2563EB]" />;
      case 'libraries':
        return <Binary className="w-5 h-5 text-sky-500" />;
      case 'backend-web':
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'database-core':
        return <Database className="w-5 h-5 text-[#2563EB]" />;
      case 'tools-technologies':
        return <Wrench className="w-5 h-5 text-sky-600" />;
      default:
        return <Code className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  const filterTabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'programming', label: 'Languages' },
    { id: 'aiml', label: 'AI / ML' },
    { id: 'libraries', label: 'Libraries' },
    { id: 'backend-web', label: 'Web & Backend' },
    { id: 'database-core', label: 'Database & Core' },
    { id: 'tools-technologies', label: 'Tools' },
  ];

  const displayedCategories =
    activeFilter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeFilter);

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-white">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-ai-grid opacity-60 pointer-events-none" />

      {/* Ambient background soft blue glow */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-0 w-96 h-96 bg-sky-100/40 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Interactive Toolkit"
          title="My Technical Arsenal"
          subtitle="A structured overview of core programming languages, machine learning frameworks, data architectures, and engineering toolchains."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                    : 'bg-slate-50 text-slate-600 hover:text-[#14213D] hover:bg-blue-50/80 border border-slate-200/80'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Skills Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category: SkillCategory, index: number) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-3xl p-6 sm:p-7 bg-[#F4F8FF]/80 border border-blue-100/80 shadow-[0_4px_20px_rgba(37,99,235,0.04)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)] hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-3 rounded-2xl bg-white border border-blue-100 shadow-sm group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#14213D] text-base sm:text-lg">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 font-normal">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-white text-slate-700 border border-slate-200/90 shadow-2xs group-hover:border-blue-200 group-hover:text-[#14213D] hover:!bg-[#2563EB] hover:!text-white hover:!border-[#2563EB] transition-all duration-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] group-hover:text-blue-500 hover:text-white" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Metric */}
                <div className="mt-6 pt-4 border-t border-blue-100/60 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-[#2563EB]">
                    {category.skills.length} verified competencies
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-blue-400 opacity-60" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
