'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  ArrowRight,
  Sparkles,
  MapPin,
  GraduationCap,
  Award,
  ExternalLink,
  Brain,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/ui/Icons';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { NeuralBackground } from './NeuralBackground';

export function Hero() {
  const [imgError, setImgError] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  // Cycle animated professional titles smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 md:py-32 overflow-hidden bg-white"
    >
      {/* Interactive Neural Canvas Background */}
      <NeuralBackground />

      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-ai-grid opacity-70 pointer-events-none" />

      {/* Ambient background light gradients */}
      <div
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-sky-100/60 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Small Introductory Label */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/80 text-[#2563EB] text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm mb-6 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2563EB]" />
              </span>
              <span>HELLO, WORLD! I&apos;M</span>
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#14213D] leading-[1.08]"
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            {/* Animated Professional Titles */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 min-h-[44px] flex items-center justify-center lg:justify-start gap-2.5 text-xl sm:text-2xl md:text-3xl font-bold"
            >
              <Brain className="w-6 h-6 text-[#2563EB] shrink-0" />
              <div className="relative overflow-hidden h-9 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="inline-block text-[#2563EB] bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent font-bold"
                  >
                    {PERSONAL_INFO.titles[titleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed font-normal"
            >
              I am a passionate Artificial Intelligence and Machine Learning engineering student who
              enjoys transforming innovative ideas into intelligent real-world solutions.
            </motion.p>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl font-medium"
            >
              Exploring AI, building intelligent applications and creating technology that makes a difference.
            </motion.p>

            {/* CTA Buttons: Explore My Projects & Download Resume */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] shadow-[0_4px_16px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Anushka_Potdar_Resume.pdf"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#14213D] bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/60 shadow-sm hover:shadow-[0_4px_16px_rgba(37,99,235,0.1)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#2563EB] group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Media Icons (GitHub, LinkedIn, Email) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex items-center gap-4"
            >
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Connect:
              </span>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#2563EB] hover:border-blue-300 hover:shadow-[0_4px_12px_rgba(37,99,235,0.15)] transition-all duration-200"
                aria-label="Anushka Potdar on LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-[#2563EB]" />
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#14213D] hover:border-blue-300 hover:shadow-[0_4px_12px_rgba(37,99,235,0.15)] transition-all duration-200"
                aria-label="Anushka Potdar on GitHub"
              >
                <GithubIcon className="w-4 h-4 text-slate-800" />
                <span className="sr-only">GitHub</span>
              </a>

              <div className="h-4 w-px bg-slate-200 ml-1 mr-1" />

              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </motion.div>
          </div>

          {/* Right Column: Premium Profile Photograph Integration */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[380px]"
            >
              {/* Subtle Blue Gradient Accent Aura Behind Frame */}
              <div
                className="absolute -inset-3.5 rounded-[2.5rem] bg-gradient-to-tr from-[#2563EB]/20 via-[#60A5FA]/25 to-blue-300/10 blur-xl opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              {/* Clean, Premium Portrait Frame with Subtle Blue Gradient Borders */}
              <div className="relative rounded-[2rem] p-3 bg-white/90 border border-blue-100/90 shadow-[0_20px_50px_rgba(37,99,235,0.14)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_25px_60px_rgba(37,99,235,0.2)] hover:border-blue-300/80">
                {/* Image Viewport Container */}
                <div className="relative w-full h-[400px] sm:h-[450px] rounded-[1.5rem] overflow-hidden bg-slate-100 flex items-center justify-center">
                  {!imgError ? (
                    <Image
                      src={PERSONAL_INFO.photoUrl}
                      alt="Anushka Potdar - Aspiring AI/ML Engineer"
                      fill
                      priority
                      className="object-cover object-top sm:object-center transition-transform duration-700 ease-out hover:scale-105"
                      onError={() => setImgError(true)}
                      sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 400px"
                    />
                  ) : (
                    /* Fallback avatar if needed */
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2563EB] to-[#60A5FA] flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg">
                        AP
                      </div>
                      <h3 className="text-lg font-bold text-[#14213D]">Anushka Potdar</h3>
                      <p className="text-xs text-slate-500 mt-1">Aspiring AI/ML Engineer</p>
                      <span className="mt-3 px-3 py-1 rounded-full text-xs bg-blue-50 text-[#2563EB] border border-blue-200">
                        DYPCET Kolhapur
                      </span>
                    </div>
                  )}

                  {/* Gentle Soft Light Gradient Overlay at bottom for seamless text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/60 via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* In-Frame Floating Identification Pill */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-semibold text-[#14213D]">
                        AIML • Third Year
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#2563EB] bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-full">
                      CGPA {PERSONAL_INFO.cgpa}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Top-Right Badge: AI/ML Specialization */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 px-3.5 py-1.5 rounded-xl bg-white/95 border border-blue-200 text-[#2563EB] text-xs font-bold shadow-[0_8px_20px_rgba(37,99,235,0.15)] backdrop-blur-md flex items-center gap-1.5"
              >
                <Brain className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>AI &amp; ML</span>
              </motion.div>

              {/* Floating Bottom-Left Badge: IEEE TechForGood Award Recognition */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-3 -left-3 px-3.5 py-1.5 rounded-xl bg-white/95 border border-amber-200 text-amber-700 text-xs font-bold shadow-[0_8px_20px_rgba(217,119,6,0.15)] backdrop-blur-md flex items-center gap-1.5"
              >
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>IEEE Award Winner</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
