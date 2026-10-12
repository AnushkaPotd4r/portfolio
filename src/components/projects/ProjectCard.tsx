'use client';

import React from 'react';
import { ExternalLink, Sparkles, Lock } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Project } from '@/data/portfolioData';
import { RealtimeConnectGraphic } from './RealtimeConnectGraphic';
import { KrishiMitraGraphic } from './KrishiMitraGraphic';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isRealtimeConnect = project.id === 'realtime-connect';

  return (
    <div className="group relative rounded-2xl bg-slate-900/60 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.18] hover:shadow-[0_0_35px_rgba(0,0,0,0.6)] flex flex-col justify-between h-full">
      <div>
        {/* Project Graphic / Visual Preview */}
        <div className="mb-6">
          {isRealtimeConnect ? (
            <RealtimeConnectGraphic />
          ) : (
            <KrishiMitraGraphic />
          )}
        </div>

        {/* Category & Badge */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
            {project.category}
          </span>
          {project.featuredTag && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
              <Sparkles className="w-3 h-3 text-purple-400" />
              {project.featuredTag}
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Technology Stack Tags */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-white/[0.06] hover:border-slate-600 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons: Live Demo & GitHub */}
      <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
        {/* Live Demo Button */}
        {project.liveDemoUrl ? (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_22px_rgba(6,182,212,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            aria-label={`Open Live Demo for ${project.title}`}
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : null}

        {/* GitHub Repository Button */}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700/80 text-slate-200 hover:text-white border border-white/[0.1] hover:border-purple-500/40 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            aria-label={`Open GitHub repository for ${project.title}`}
          >
            <GithubIcon className="w-4 h-4 text-purple-400" />
            <span>GitHub Repository</span>
          </a>
        ) : (
          <div
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-slate-800/50 text-slate-400 border border-white/[0.05] cursor-not-allowed"
            title="Repository link pending configuration"
          >
            <Lock className="w-3.5 h-3.5 text-slate-500" />
            <span>Repo Link Pending</span>
          </div>
        )}
      </div>
    </div>
  );
}
