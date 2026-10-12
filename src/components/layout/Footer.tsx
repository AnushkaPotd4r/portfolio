import React from 'react';
import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/ui/Icons';
import { BackToTop } from '@/components/ui/BackToTop';
import { CurrentYear } from '@/components/ui/CurrentYear';
import { PERSONAL_INFO } from '@/data/portfolioData';

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#030712] py-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-white">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-sm text-cyan-300 font-mono">
                {PERSONAL_INFO.title}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Third-Year AIML • Dr. D. Y. Patil College of Engineering and Technology, Kolhapur
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] text-slate-400 hover:text-purple-300 hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top Client Button */}
          <div>
            <BackToTop />
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © <CurrentYear /> {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-slate-400">
            Designed and built by{' '}
            <span className="text-slate-200 font-medium">Anushka Potdar</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
