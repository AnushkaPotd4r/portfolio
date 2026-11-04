'use client';

import React from 'react';
import { ArrowUpRight, ExternalLink, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Project } from '@/data/portfolioData';
import { KrishiMitraGraphic } from './KrishiMitraGraphic';
import { CyberShieldGraphic } from './CyberShieldGraphic';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const isKrishiMitra = project.id === 'krishimitra-ai';

  return (
    <div className="rounded-3xl p-6 sm:p-8 bg-white border border-blue-100/90 shadow-[0_8px_30px_rgba(37,99,235,0.06)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] hover:border-blue-300 transition-all duration-300 flex flex-col justify-between h-full group">
      <div>
        {/* Project Graphic / Visual Illustration */}
        <div className="mb-6 overflow-hidden rounded-2xl">
          {isKrishiMitra ? <KrishiMitraGraphic /> : <CyberShieldGraphic />}
        </div>

        {/* Badges Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-blue-50 text-[#2563EB] border border-blue-200">
            {project.highlightBadge}
          </span>

          {project.isWorkInProgress ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-300 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              WORK IN PROGRESS
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Featured Solution
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#14213D] group-hover:text-[#2563EB] transition-colors leading-tight">
          {project.fullTitle}
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Key Features Overview */}
        <div className="mt-5 space-y-2">
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
            Key Architecture Features:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.keyFeatures.slice(0, 4).map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Badges */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#F4F8FF] text-slate-700 border border-blue-100"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="px-2 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-[#2563EB]">
              +{project.technologies.length - 6} more
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons: View Details & GitHub */}
      <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#2563EB] bg-blue-50 hover:bg-blue-100/80 border border-blue-200 transition-colors cursor-pointer"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 hover:text-[#14213D] bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-colors"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <GithubIcon className="w-4 h-4 text-slate-800" />
            <span>GitHub</span>
          </a>
        )}
      </div>
    </div>
  );
}
