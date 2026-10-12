'use client';

import React from 'react';
import { Video, Mic, MessageSquare, Radio, Users, ShieldCheck, Zap } from 'lucide-react';

export function RealtimeConnectGraphic() {
  return (
    <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-[#070d1e] border border-white/[0.08] p-4 flex flex-col justify-between group-hover:border-cyan-500/40 transition-colors duration-300">
      {/* Background cyber grid & glow */}
      <div
        className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Header bar of the simulation */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] font-mono text-slate-400 pl-2">
            realtime-connect.room//live-session
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-mono bg-cyan-950/70 border border-cyan-800/50 text-cyan-300">
          <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
          <span>WebRTC P2P</span>
        </div>
      </div>

      {/* Collaboration Preview Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-3 my-auto">
        {/* Stream Tile 1 */}
        <div className="rounded-lg bg-slate-900/90 border border-white/[0.08] p-3 flex flex-col justify-between h-24">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-medium text-slate-200">Local Stream</span>
            </div>
            <Video className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="flex items-center gap-2 pt-2">
            <div className="flex-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div className="w-4/5 h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
            </div>
            <Mic className="w-3 h-3 text-cyan-400" />
          </div>
        </div>

        {/* Stream Tile 2 */}
        <div className="rounded-lg bg-slate-900/90 border border-white/[0.08] p-3 flex flex-col justify-between h-24">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[11px] font-medium text-slate-200">Connected Peer</span>
            </div>
            <Zap className="w-3.5 h-3.5 text-yellow-400" />
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>JWT Auth Valid</span>
          </div>
        </div>
      </div>

      {/* Socket Activity Pill footer */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/[0.05]">
        <div className="flex items-center gap-1 text-slate-300">
          <MessageSquare className="w-3 h-3 text-blue-400" />
          <span>Socket.IO Sync Active</span>
        </div>
        <span className="text-cyan-400">Lat: &lt;28ms</span>
      </div>
    </div>
  );
}
