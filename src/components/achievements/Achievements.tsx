'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Award,
  Cloud,
  CheckCircle2,
  Calendar,
  Sparkles,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ACHIEVEMENTS, AchievementItem } from '@/data/portfolioData';

export function Achievements() {
  const ieeeAward = ACHIEVEMENTS.find((a) => a.id === 'ieee-techforgood');
  const azureCert = ACHIEVEMENTS.find((a) => a.id === 'azure-fundamentals');

  return (
    <section id="achievements" className="relative py-24 md:py-32 bg-[#F4F8FF]">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-ai-grid opacity-50 pointer-events-none" />

      {/* Ambient background soft light */}
      <div
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Verified Honors"
          title="Milestones &amp; Recognition"
          subtitle="Honors, competitive hackathon awards, and cloud certifications validating technical excellence and innovative execution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* FEATURED ACHIEVEMENT: IEEE TechForGood (Special Visual Importance) */}
          {ieeeAward && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 h-full"
            >
              <div className="relative rounded-3xl p-7 sm:p-9 bg-white border-2 border-amber-300 shadow-[0_16px_40px_rgba(245,158,11,0.12)] hover:shadow-[0_24px_50px_rgba(245,158,11,0.18)] transition-all duration-300 flex flex-col justify-between h-full group">
                {/* Top Corner Ribbon */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-100 border border-amber-300 text-amber-900 shadow-2xs">
                    <Trophy className="w-4 h-4 text-amber-600" />
                    <span>FEATURED AWARD</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{ieeeAward.date}</span>
                  </div>
                </div>

                <div>
                  {/* Award Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-md shrink-0 group-hover:scale-105 transition-transform">
                      <Trophy className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-amber-700 tracking-wider uppercase block">
                        {ieeeAward.event}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#14213D] leading-tight mt-1">
                        {ieeeAward.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-6">
                    {ieeeAward.description}
                  </p>

                  {/* Impact points */}
                  <div className="space-y-2 pt-4 border-t border-amber-100 mb-6">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Recognition Merits:
                    </span>
                    {ieeeAward.skillsOrImpact.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Badge */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-amber-800">
                    Jury Evaluated Technical Project
                  </span>
                  <span className="text-[11px] font-mono font-bold bg-amber-50 text-amber-800 px-2.5 py-1 rounded-full border border-amber-200">
                    IEEE Recognized
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* CLOUD CERTIFICATION: Microsoft Azure Fundamentals (AZ-900) */}
          {azureCert && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 h-full"
            >
              <div className="rounded-3xl p-7 sm:p-9 bg-white border border-blue-200 shadow-[0_8px_30px_rgba(37,99,235,0.06)] hover:shadow-[0_16px_40px_rgba(37,99,235,0.12)] hover:border-blue-400 transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-blue-50 border border-blue-200 text-[#2563EB]">
                      <Cloud className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>OFFICIAL CERTIFICATION</span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Verified</span>
                    </span>
                  </div>

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3.5 rounded-2xl bg-blue-600 text-white shadow-md shrink-0 group-hover:scale-105 transition-transform">
                      <Cloud className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase block">
                        {azureCert.event}
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#14213D] leading-tight mt-1">
                        {azureCert.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {azureCert.description}
                  </p>

                  {/* Verified Domains */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Validated Knowledge Areas:
                    </span>
                    {azureCert.skillsOrImpact.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Credential Verification Placeholder */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-slate-700">Microsoft ID: Verified</span>
                  <span className="text-[11px] font-mono text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Cloud Core
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
