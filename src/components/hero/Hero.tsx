'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Mail,
  ArrowRight,
  Sparkles,
  Bot,
  BrainCircuit,
  Compass,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/ui/Icons';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { NeuralBackground } from './NeuralBackground';

export function Hero() {
  const [imgError, setImgError] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 md:py-32 overflow-hidden"
    >
      {/* Interactive Neural Canvas Background */}
      <NeuralBackground />

      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium shadow-[0_0_20px_rgba(168,85,247,0.2)] mb-6 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span>{PERSONAL_INFO.statusBadge}</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 ml-0.5" />
            </motion.div>

            {/* Name Greeting */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
            >
              Hi, I&apos;m{' '}
              <span className="text-gradient-purple-cyan inline-block">
                {PERSONAL_INFO.name}
              </span>
              .
            </motion.h1>

            {/* Professional Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 inline-flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200"
            >
              <BrainCircuit className="w-6 h-6 text-cyan-400 shrink-0" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">
                {PERSONAL_INFO.title}
              </span>
            </motion.div>

            {/* Tagline / Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
            >
              &ldquo;{PERSONAL_INFO.tagline}&rdquo;
            </motion.p>

            {/* CTAs: Explore Projects & Let's Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_32px_rgba(56,189,248,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 border border-white/[0.12] hover:border-cyan-500/50 hover:bg-slate-800/80 hover:text-white shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Let&apos;s Connect</span>
                <Compass className="w-4 h-4 text-cyan-400" />
              </button>
            </motion.div>

            {/* Verified Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-9 flex items-center gap-4"
            >
              <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                Connect:
              </span>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 rounded-xl bg-slate-900/80 border border-white/[0.1] text-slate-300 hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-200"
                aria-label="Anushka Potdar on LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 rounded-xl bg-slate-900/80 border border-white/[0.1] text-slate-300 hover:text-white hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-200"
                aria-label="Anushka Potdar on GitHub"
              >
                <GithubIcon className="w-4 h-4 group-hover:text-purple-300 transition-colors" />
                <span className="sr-only">GitHub</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group relative p-2.5 rounded-xl bg-slate-900/80 border border-white/[0.1] text-slate-300 hover:text-white hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-200"
                aria-label="Email Anushka Potdar"
              >
                <Mail className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                <span className="sr-only">Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Profile Photograph Composition */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Outer Glowing Neon Frame */}
              <div
                className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-purple-600/30 via-indigo-600/30 to-cyan-500/30 blur-xl opacity-80"
                aria-hidden="true"
              />

              {/* Card Container */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white/[0.12] to-white/[0.03] border border-white/[0.15] shadow-2xl backdrop-blur-xl">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
                  {!imgError ? (
                    <Image
                      src={PERSONAL_INFO.photoUrl}
                      alt="Anushka Potdar - Aspiring AI/ML Engineer"
                      fill
                      priority
                      className="object-cover object-center transition-transform duration-500 hover:scale-105"
                      onError={() => setImgError(true)}
                      sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                    />
                  ) : (
                    /* Graceful fallback if image is missing */
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                        AP
                      </div>
                      <h3 className="text-lg font-bold text-white">Anushka Potdar</h3>
                      <p className="text-xs text-slate-400 mt-1">Aspiring AI/ML Engineer</p>
                      <span className="mt-3 px-3 py-1 rounded-full text-[11px] bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        Dr. D. Y. Patil College of Eng.
                      </span>
                    </div>
                  )}

                  {/* Gradient Vignette overlay for seamless blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Floating badge inside photo card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/[0.1] shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-medium text-slate-200">
                        AIML • Third Year
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded">
                      Kolhapur
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Orbit Tag (Top Right) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-purple-500/40 text-purple-300 text-xs font-semibold shadow-[0_0_20px_rgba(168,85,247,0.3)] backdrop-blur-md flex items-center gap-1.5"
              >
                <Bot className="w-3.5 h-3.5 text-purple-400" />
                <span>AI / ML</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
