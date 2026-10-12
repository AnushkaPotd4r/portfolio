'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';

export function Resume() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="resume" className="relative py-24 md:py-32">
      {/* Background glow accent */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Credentials"
          title="My Resume"
          subtitle="Explore my academic background, technical skills, projects, and professional development."
        />

        <div className="max-w-4xl mx-auto">
          <GlowCard glowColor="purple" className="p-8 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Document icon & title preview */}
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-300">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {PERSONAL_INFO.name} — Curriculum Vitae
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-mono mt-0.5">
                      B.Tech AIML • Third Year • Dr. D. Y. Patil CET Kolhapur
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Detailed resume containing coursework in Artificial Intelligence & Machine Learning, Data Structures & Algorithms (Java, Python), SQL databases, and featured engineering projects.
                </p>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-white/[0.08]">
                    <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                    B.Tech AIML (2026)
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-white/[0.08]">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    DSA (Java & Python)
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-white/[0.08]">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    Verified Document
                  </span>
                </div>
              </div>

              {/* Action Buttons: Download and View */}
              <div className="md:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Anushka_Potdar_Resume.pdf"
                  onClick={handleDownload}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_32px_rgba(56,189,248,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>

                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800/90 hover:bg-slate-700/80 text-slate-200 hover:text-white border border-white/[0.1] hover:border-cyan-500/40 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
                >
                  <span>View in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>

                {downloadSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-medium"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Download initiated!</span>
                  </motion.div>
                )}

                <p className="text-[11px] text-center text-slate-400 font-mono">
                  Format: PDF (Official Academic CV)
                </p>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
