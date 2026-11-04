'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Sparkles,
  CheckCircle,
  Eye,
  EyeOff,
  Brain,
  Award,
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Resume() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showEmbeddedPdf, setShowEmbeddedPdf] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="resume" className="relative py-24 md:py-32 bg-[#F4F8FF]">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-ai-grid opacity-50 pointer-events-none" />

      {/* Ambient background soft light */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-100/50 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Curriculum Vitae"
          title="Want to Know More About My Journey?"
          subtitle="Review my verified academic record, AI engineering implementations, competitive honors, and technical skillsets."
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Resume Presentation Card */}
          <div className="rounded-3xl p-7 sm:p-10 bg-white border border-blue-200/90 shadow-[0_12px_40px_rgba(37,99,235,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Document Icon & Overview */}
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-[#2563EB] shadow-2xs">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#14213D]">
                      {PERSONAL_INFO.name} — Curriculum Vitae
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-mono mt-0.5">
                      B.Tech AIML • CGPA {PERSONAL_INFO.cgpa} • DYPCET Kolhapur
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Official resume highlighting practical engineering in Artificial Intelligence, Machine Learning, Deep Learning, core Data Structures &amp; Algorithms in Java, and featured projects including KrishiMitra AI and CyberShieldAI.
                </p>

                {/* Verification Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-[#F4F8FF] text-slate-700 border border-blue-100">
                    <GraduationCap className="w-3.5 h-3.5 text-[#2563EB]" />
                    B.Tech AIML (Class of 2028)
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-[#F4F8FF] text-slate-700 border border-blue-100">
                    <Brain className="w-3.5 h-3.5 text-sky-500" />
                    AI/ML Systems
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-[#F4F8FF] text-slate-700 border border-blue-100">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    IEEE TechForGood Winner
                  </span>
                </div>
              </div>

              {/* Action Buttons: Download, View & Embedded Preview Toggle */}
              <div className="md:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Anushka_Potdar_Resume.pdf"
                  onClick={handleDownload}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer text-center"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>

                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-white hover:bg-slate-50 text-slate-700 hover:text-[#14213D] border border-slate-200 shadow-2xs hover:border-blue-300 transition-all text-center"
                >
                  <span>View in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#2563EB]" />
                </a>

                <button
                  type="button"
                  onClick={() => setShowEmbeddedPdf(!showEmbeddedPdf)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-50 hover:bg-blue-100 text-[#2563EB] border border-blue-200 transition-colors cursor-pointer"
                >
                  {showEmbeddedPdf ? (
                    <>
                      <EyeOff className="w-3.5 h-3.5" />
                      <span>Hide Document Preview</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-3.5 h-3.5" />
                      <span>Live PDF Preview</span>
                    </>
                  )}
                </button>

                {downloadSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-1.5 text-xs text-emerald-600 font-semibold"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Download initiated successfully!</span>
                  </motion.div>
                )}

                <p className="text-[11px] text-center text-slate-400 font-mono">
                  Official Academic Document (PDF)
                </p>
              </div>
            </div>

            {/* Embedded Live PDF Viewer */}
            <AnimatePresence>
              {showEmbeddedPdf && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-8 pt-8 border-t border-slate-100 overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-3 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Embedded Document Viewer:</span>
                    <a
                      href={PERSONAL_INFO.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2563EB] hover:underline flex items-center gap-1"
                    >
                      <span>Open fullscreen</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="w-full h-[650px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                    <iframe
                      src={`${PERSONAL_INFO.resumeUrl}#toolbar=0`}
                      title="Anushka Potdar Resume PDF Preview"
                      className="w-full h-full border-0"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
