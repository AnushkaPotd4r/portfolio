'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Brain,
  Code2,
  Sparkles,
  MapPin,
  Target,
  ArrowRight,
  Compass,
} from 'lucide-react';
import { ABOUT_CONTENT, PERSONAL_INFO } from '@/data/portfolioData';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function About() {
  const pillarIcons = [
    <GraduationCap key="grad" className="w-5 h-5 text-[#2563EB]" />,
    <Brain key="brain" className="w-5 h-5 text-sky-500" />,
    <Code2 key="code" className="w-5 h-5 text-indigo-600" />,
    <Compass key="compass" className="w-5 h-5 text-emerald-600" />,
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-[#F4F8FF]">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-ai-grid opacity-50 pointer-events-none" />

      {/* Ambient background soft light */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-blue-200/40 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Professional Vision"
          title={ABOUT_CONTENT.heading}
          subtitle="Transforming foundational AI principles into scalable, real-world solutions that create meaningful impact."
        />

        {/* Top Split: Narrative & Profile Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Column: Biography Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-blue-100/90 shadow-[0_10px_30px_rgba(37,99,235,0.06)] space-y-5">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal"
                >
                  {paragraph}
                </p>
              ))}

              {/* Career Objective Box */}
              <div className="pt-6 border-t border-slate-100">
                <div className="rounded-2xl p-4 bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100 flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-[#2563EB] text-white shrink-0 mt-0.5 shadow-sm">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                      Career Objective
                    </span>
                    <p className="text-sm text-slate-800 font-medium mt-1 leading-relaxed">
                      &ldquo;{PERSONAL_INFO.careerObjective}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Institutional & Location tags */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500">
                <div className="inline-flex items-center gap-1.5 font-medium text-slate-700">
                  <MapPin className="w-4 h-4 text-[#2563EB]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 font-medium text-slate-700">
                  <Sparkles className="w-4 h-4 text-sky-500" />
                  <span>{PERSONAL_INFO.college}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Secondary Professional Portrait Integration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl p-3 bg-white border border-blue-100/90 shadow-[0_16px_40px_rgba(37,99,235,0.08)] group">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={PERSONAL_INFO.photoUrl}
                  alt="Anushka Potdar"
                  fill
                  className="object-cover object-top sm:object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#2563EB] text-white mb-1 shadow-sm">
                    Aspiring AI/ML Engineer
                  </span>
                  <h3 className="text-xl font-bold">{PERSONAL_INFO.fullName}</h3>
                  <p className="text-xs text-blue-100 mt-0.5">
                    Dr. D. Y. Patil College of Engineering and Technology, Kolhapur
                  </p>
                </div>
              </div>

              {/* Quick stats ribbon */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-2 border-t border-slate-100 text-center">
                <div className="p-2 rounded-xl bg-slate-50">
                  <span className="block text-[10px] font-semibold text-slate-400 uppercase">Year</span>
                  <span className="text-xs font-bold text-[#14213D]">Third Year</span>
                </div>
                <div className="p-2 rounded-xl bg-blue-50">
                  <span className="block text-[10px] font-semibold text-[#2563EB] uppercase">CGPA</span>
                  <span className="text-xs font-bold text-[#2563EB]">{PERSONAL_INFO.cgpa}</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50">
                  <span className="block text-[10px] font-semibold text-slate-400 uppercase">Graduation</span>
                  <span className="text-xs font-bold text-[#14213D]">{PERSONAL_INFO.graduationYear}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: 4 Key Professional Identity Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_CONTENT.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl p-6 bg-white border border-blue-100/80 shadow-[0_4px_20px_rgba(37,99,235,0.04)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.1)] hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-blue-50 w-fit mb-4 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                  {pillarIcons[index]}
                </div>
                <h3 className="text-lg font-bold text-[#14213D] group-hover:text-[#2563EB] transition-colors">
                  {pillar.title}
                </h3>
                <span className="block text-xs font-medium text-blue-600 mt-1">
                  {pillar.subtitle}
                </span>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
