import React from 'react';
import { Mail, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/ui/Icons';
import { BackToTop } from '@/components/ui/BackToTop';
import { CurrentYear } from '@/components/ui/CurrentYear';
import { PERSONAL_INFO } from '@/data/portfolioData';

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200/90 bg-[#F4F8FF] py-12 overflow-hidden">
      {/* Background ambient soft light */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-blue-200/30 rounded-full blur-[80px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="font-extrabold text-lg text-[#14213D]">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-xs sm:text-sm font-bold text-[#2563EB]">
                AI/ML Engineer | AI Innovator
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
              &ldquo;Turning Ideas Into Intelligent Solutions.&rdquo;
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              Dr. D. Y. Patil College of Engineering and Technology, Kolhapur
            </p>
          </div>

          {/* Social Links (GitHub, LinkedIn, Email) */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#2563EB] hover:border-blue-300 hover:shadow-xs transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-[#2563EB]" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#14213D] hover:border-blue-300 hover:shadow-xs transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4 text-slate-800" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#2563EB] hover:border-blue-300 hover:shadow-xs transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-[#2563EB]" />
            </a>
          </div>

          {/* Back to Top Client Button */}
          <div>
            <BackToTop />
          </div>
        </div>

        {/* Bottom Credits & Dynamically Updated Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © <CurrentYear /> {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-slate-500">
            <span>Designed &amp; Developed with precision by</span>
            <span className="text-[#14213D] font-bold">Anushka Potdar</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
