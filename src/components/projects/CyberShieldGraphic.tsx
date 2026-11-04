'use client';

import React from 'react';
import { ShieldCheck, ShieldAlert, Activity, Wifi, Radio, Lock, Binary } from 'lucide-react';

export function CyberShieldGraphic() {
  return (
    <div className="relative w-full h-60 sm:h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50/90 via-indigo-50/70 to-slate-50/90 border border-blue-200/80 p-5 flex flex-col justify-between group-hover:border-blue-400 transition-all duration-300 shadow-inner">
      {/* Background network grid pattern */}
      <div className="absolute inset-0 bg-ai-grid opacity-30 pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-blue-200/60 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
          </div>
          <span className="text-[11px] font-mono font-semibold text-slate-700 pl-2">
            cybershield.ids//cic-ids-2017
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold font-mono bg-amber-100 border border-amber-300 text-amber-900 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
          <span>WORK IN PROGRESS</span>
        </div>
      </div>

      {/* Middle Interactive Simulation Panels */}
      <div className="relative z-10 grid grid-cols-2 gap-3 my-auto">
        {/* Panel 1: Packet Classifier */}
        <div className="rounded-xl bg-white/95 border border-blue-100 p-3 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="text-[11px] font-bold text-slate-800">Traffic Classifier</span>
            </div>
            <Radio className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
          </div>
          <div className="mt-2 text-[10px] text-slate-600 space-y-1">
            <div className="flex justify-between items-center font-mono">
              <span>BENIGN Traffic:</span>
              <span className="font-semibold text-emerald-600">99.2% Match</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-emerald-100 overflow-hidden">
              <div className="w-[99%] h-full bg-emerald-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Panel 2: DDoS Detection Telemetry */}
        <div className="rounded-xl bg-white/95 border border-indigo-100 p-3 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-indigo-600" />
              <span className="text-[11px] font-bold text-slate-800">DDoS Detection</span>
            </div>
            <Activity className="w-3.5 h-3.5 text-indigo-500" />
          </div>
          <div className="mt-2 text-[10px] text-slate-600 space-y-1">
            <div className="flex justify-between items-center font-mono">
              <span>CIC-IDS Telemetry:</span>
              <span className="font-semibold text-indigo-700">Serialized ML</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-indigo-100 overflow-hidden">
              <div className="w-[88%] h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-600 pt-2.5 border-t border-blue-200/60">
        <div className="flex items-center gap-1.5 text-slate-700 font-medium">
          <Binary className="w-3 h-3 text-[#2563EB]" />
          <span>Scikit-learn + Joblib Pipeline</span>
        </div>
        <span className="text-amber-800 font-bold text-[10px] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 shadow-2xs">
          Testing Validation
        </span>
      </div>
    </div>
  );
}
