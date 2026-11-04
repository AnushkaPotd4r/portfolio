'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Code2,
  Server,
  Layers,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Calendar,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LEARNING_JOURNEY, LearningJourneyItem } from '@/data/portfolioData';

export function Experience() {
  const milestoneIcons = [
    <Brain key="brain" className="w-5 h-5 text-[#2563EB]" />,
    <Layers key="layers" className="w-5 h-5 text-sky-500" />,
    <Server key="server" className="w-5 h-5 text-indigo-600" />,
    <Code2 key="code" className="w-5 h-5 text-blue-500" />,
  ];

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-white">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-ai-grid opacity-50 pointer-events-none" />

      {/* Ambient background soft light */}
      <div
        className="absolute top-1/3 left-0 w-80 h-80 bg-blue-100/50 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Technical Trajectory"
          title="My Learning Journey"
          subtitle="A structured record of practical AI/ML project development, machine learning pipeline integration, and Python backend engineering."
        />

        {/* Vertical Timeline Spine */}
        <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-32 md:ml-40 space-y-12">
          {LEARNING_JOURNEY.map((item: LearningJourneyItem, index: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline Marker Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-[#2563EB] shadow-md flex items-center justify-center text-[#2563EB]">
                {milestoneIcons[index % milestoneIcons.length]}
              </div>

              {/* Timestamp / Period badge for larger screens (left side) */}
              <div className="sm:absolute sm:-left-36 md:-left-44 top-2 text-xs font-semibold text-slate-500 font-mono tracking-tight sm:text-right w-28 md:w-36 hidden sm:block">
                {item.period}
              </div>

              {/* Milestone Card */}
              <div className="rounded-3xl p-6 sm:p-7 bg-[#F4F8FF]/80 border border-blue-100/90 shadow-[0_4px_20px_rgba(37,99,235,0.04)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.08)] hover:border-blue-300 transition-all duration-300">
                {/* Mobile Period tag */}
                <span className="sm:hidden inline-block text-xs font-mono font-semibold text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 mb-2">
                  {item.period}
                </span>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#14213D]">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-blue-200 text-[#2563EB]">
                    {item.role}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  {item.description}
                </p>

                {/* Technical Highlights */}
                <div className="space-y-2 mb-4 pt-3 border-t border-blue-100/60">
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Engineering Deliverables:
                  </span>
                  {item.keyHighlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-lg text-xs font-medium bg-white text-slate-600 border border-slate-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Future / Ready for Internship Milestone (Editable slot) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative pl-8 sm:pl-10"
          >
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-blue-50 border-2 border-dashed border-[#2563EB] flex items-center justify-center text-[#2563EB]">
              <Briefcase className="w-4 h-4" />
            </div>

            <div className="sm:absolute sm:-left-36 md:-left-44 top-2 text-xs font-semibold text-[#2563EB] font-mono sm:text-right w-28 md:w-36 hidden sm:block">
              Upcoming
            </div>

            <div className="rounded-3xl p-6 bg-gradient-to-r from-blue-50/80 to-sky-50/80 border border-blue-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#2563EB] text-white mb-1 shadow-2xs">
                  Active Opportunity Window
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#14213D]">
                  Open for AI/ML Engineering Internships
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                  Prepared to contribute directly to machine learning pipelines, generative AI solutions, and backend model services in high-impact engineering environments.
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
              >
                Hire / Connect
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
