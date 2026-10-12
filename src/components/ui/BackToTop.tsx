'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/[0.08] hover:border-purple-500/40 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
      aria-label="Back to top of page"
    >
      <span>Back to Top</span>
      <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
    </button>
  );
}
