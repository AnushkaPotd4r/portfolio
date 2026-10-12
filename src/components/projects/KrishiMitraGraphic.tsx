'use client';

import React from 'react';
import { Sprout, Activity, Languages, Sparkles, Droplets, SunMedium, CheckCircle } from 'lucide-react';

export function KrishiMitraGraphic() {
  return (
    <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-[#071714] border border-white/[0.08] p-4 flex flex-col justify-between group-hover:border-emerald-500/40 transition-colors duration-300">
      {/* Background ambient agricultural glow */}
      <div
        className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Header telemetry bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500/80" />
          </div>
          <span className="text-[11px] font-mono text-slate-300 pl-2">
            krishimitra.ai//telemetry-model
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-mono bg-emerald-950/70 border border-emerald-800/50 text-emerald-300">
          <Sprout className="w-3 h-3 text-emerald-400" />
          <span>AgriTech Vision</span>
        </div>
      </div>

      {/* Agri AI Preview Content */}
      <div className="relative z-10 grid grid-cols-2 gap-3 my-auto">
        {/* Metric 1: Soil & Crop Health Analysis */}
        <div className="rounded-lg bg-slate-900/90 border border-white/[0.08] p-3 flex flex-col justify-between h-24">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[11px] font-medium text-slate-200">Soil Health</span>
            </div>
            <Droplets className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="pt-2">
            <div className="flex items-center justify-between text-[10px] text-slate-300 font-mono mb-1">
              <span>Nitrogen / Moisture</span>
              <span className="text-emerald-400">Optimal</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div className="w-4/5 h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
            </div>
          </div>
        </div>

        {/* Metric 2: Multilingual Farmer Intelligence */}
        <div className="rounded-lg bg-slate-900/90 border border-white/[0.08] p-3 flex flex-col justify-between h-24">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Languages className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-[11px] font-medium text-slate-200">Multilingual</span>
            </div>
            <SunMedium className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
            <CheckCircle className="w-3 h-3 text-emerald-400" />
            <span>Regional Guidance NLP</span>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/[0.05]">
        <div className="flex items-center gap-1 text-slate-300">
          <Sparkles className="w-3 h-3 text-emerald-400" />
          <span>Intelligent Crop Planning</span>
        </div>
        <span className="text-emerald-400 font-semibold">AI Assistant</span>
      </div>
    </div>
  );
}
