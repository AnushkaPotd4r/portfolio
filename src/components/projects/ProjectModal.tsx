'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, Layers, Sparkles, AlertCircle } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#14213D]/60 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-[#14213D] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#2563EB] border border-blue-200">
              {project.highlightBadge}
            </span>
            {project.isWorkInProgress ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                WORK IN PROGRESS
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                {project.status || 'Active Project'}
              </span>
            )}
            <span className="text-xs text-slate-500 font-medium">
              {project.category}
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14213D] leading-tight">
            {project.fullTitle}
          </h2>

          {/* Description */}
          <div className="mt-4 p-4 rounded-2xl bg-[#F4F8FF] border border-blue-100 text-slate-700 text-sm sm:text-base leading-relaxed">
            {project.detailedOverview}
          </div>

          {/* Key Features Section */}
          <div className="mt-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#2563EB]" />
              <span>Core Architectural Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="mt-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#2563EB]" />
              <span>Technologies &amp; Frameworks</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-50 text-[#14213D] border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#14213D] hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>View Repository</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
                  <span>Repository configured on request</span>
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Close Overview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
