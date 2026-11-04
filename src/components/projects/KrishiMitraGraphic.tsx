'use client';

import React from 'react';
import { Sprout, Activity, Languages, Sparkles, Mic, BrainCircuit, Database, Cpu } from 'lucide-react';

export function KrishiMitraGraphic() {
  return (
    <div className="relative w-full h-60 sm:h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50/90 via-sky-50/70 to-blue-50/80 border border-emerald-100 p-5 flex flex-col justify-between group-hover:border-emerald-300 transition-all duration-300 shadow-inner">
      {/* Background AI grid pattern */}
      <div className="absolute inset-0 bg-ai-grid opacity-30 pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-emerald-200/60 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          </div>
          <span className="text-[11px] font-mono font-semibold text-slate-700 pl-2">
            krishimitra.edge//farmer-brain
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold font-mono bg-emerald-100/90 border border-emerald-300 text-emerald-800 shadow-2xs">
          <Sprout className="w-3 h-3 text-emerald-600" />
          <span>OFFLINE EDGE AI</span>
        </div>
      </div>

      {/* Middle Interactive Simulation Panels */}
      <div className="relative z-10 grid grid-cols-2 gap-3 my-auto">
        {/* Panel 1: Offline Edge LLM & Voice */}
        <div className="rounded-xl bg-white/95 border border-emerald-100 p-3 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Mic className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[11px] font-bold text-slate-800">Voice Assistance</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-600 font-semibold">Vosk + Piper</span>
          </div>
          <div className="mt-2 text-[10px] text-slate-600 space-y-1">
            <div className="flex justify-between items-center">
              <span>On-Device Speech:</span>
              <span className="font-semibold text-emerald-700">Offline Active</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-emerald-100 overflow-hidden">
              <div className="w-[90%] h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Panel 2: Qwen 2.5 + Vision OCR */}
        <div className="rounded-xl bg-white/95 border border-sky-100 p-3 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <BrainCircuit className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="text-[11px] font-bold text-slate-800">Qwen 2.5 LLM</span>
            </div>
            <Cpu className="w-3.5 h-3.5 text-[#2563EB]" />
          </div>
          <div className="mt-2 text-[10px] text-slate-600 space-y-1">
            <div className="flex justify-between items-center">
              <span>Disease &amp; Soil OCR:</span>
              <span className="font-semibold text-[#2563EB]">TensorFlow Lite</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-blue-100 overflow-hidden">
              <div className="w-[85%] h-full bg-gradient-to-r from-[#2563EB] to-sky-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-600 pt-2.5 border-t border-emerald-200/60">
        <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
          <Database className="w-3 h-3 text-emerald-600" />
          <span>Room DB + Firestore Sync</span>
        </div>
        <span className="text-[#2563EB] font-bold text-[10px] bg-white px-2 py-0.5 rounded-full border border-blue-100 shadow-2xs">
          16 AI Capabilities
        </span>
      </div>
    </div>
  );
}
