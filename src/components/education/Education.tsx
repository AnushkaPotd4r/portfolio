'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EDUCATION_LIST, EducationItem, PERSONAL_INFO } from '@/data/portfolioData';

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 bg-white">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-ai-grid opacity-50 pointer-events-none" />

      {/* Ambient background soft light */}
      <div
        className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-100/50 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Academic Credentials"
          title="My Academic Journey"
          subtitle="Building rigorous fundamentals in Artificial Intelligence, Machine Learning, and Computer Science."
        />

        {/* Academic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Degree Card: B.Tech in AIML */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 h-full"
          >
            <div className="rounded-3xl p-7 sm:p-9 bg-[#F4F8FF] border border-blue-200/90 shadow-[0_8px_30px_rgba(37,99,235,0.06)] hover:shadow-[0_16px_40px_rgba(37,99,235,0.12)] hover:border-blue-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                {/* Header ribbon */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#2563EB] text-white shadow-2xs">
                    <GraduationCap className="w-4 h-4" />
                    <span>Undergraduate Degree</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>2024 – 2028 (Third Year)</span>
                  </span>
                </div>

                {/* Institution & Degree Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#14213D] leading-tight">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-sm sm:text-base font-bold text-[#2563EB] mt-1">
                  Branch: Artificial Intelligence and Machine Learning
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 font-medium">
                  <span className="inline-flex items-center gap-1">
                    <BookOpen className="w-4 h-4 text-slate-400" />
                    <span>{PERSONAL_INFO.college}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Kolhapur, Maharashtra</span>
                  </span>
                </div>

                {/* Score Banner */}
                <div className="my-6 p-4 rounded-2xl bg-white border border-blue-100 flex items-center justify-between shadow-xs">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Academic Standing
                    </span>
                    <span className="text-lg font-bold text-[#14213D]">
                      Cumulative CGPA
                    </span>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-center">
                    <span className="text-xl font-extrabold text-[#2563EB]">
                      {PERSONAL_INFO.cgpa}
                    </span>
                  </div>
                </div>

                {/* Key Coursework Highlights */}
                <div className="space-y-2">
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Curricular Focus:
                  </span>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span>Data Structures &amp; Algorithms in Java, Object-Oriented System Design</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span>Artificial Intelligence, Deep Learning &amp; Machine Learning Architectures</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span>Database Management Systems (DBMS), SQL, and Edge Computing</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Graduation Year: {PERSONAL_INFO.graduationYear}</span>
                <span className="text-[#2563EB] font-bold">Third-Year Standing</span>
              </div>
            </div>
          </motion.div>

          {/* Higher Secondary Card: 12th Grade */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 h-full"
          >
            <div className="rounded-3xl p-7 sm:p-9 bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(37,99,235,0.04)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.08)] hover:border-blue-300 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                {/* Header ribbon */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                    <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                    <span>Higher Secondary</span>
                  </span>

                  <span className="text-xs font-mono font-semibold text-slate-500">
                    Year: 2024
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-[#14213D] leading-tight">
                  Higher Secondary Certificate (12th Grade)
                </h3>
                <p className="text-sm font-semibold text-slate-600 mt-1">
                  Science Stream (Physics, Chemistry, Mathematics)
                </p>

                <div className="mt-3 text-xs sm:text-sm text-slate-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Maharashtra, India</span>
                </div>

                {/* Score Box */}
                <div className="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Final Examination
                    </span>
                    <span className="text-base font-bold text-[#14213D]">
                      Aggregate Score
                    </span>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-center">
                    <span className="text-lg font-bold text-[#14213D]">
                      {PERSONAL_INFO.hscPercentage}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Completed senior secondary education with solid academic foundations in advanced mathematics, analytical reasoning, and computational problem-solving.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Class of 2024</span>
                <span className="text-emerald-600 font-semibold">Completed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
