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
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-slate-50 text-[#14213D] border border-slate-200 hover:border-blue-300 shadow-2xs transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
      aria-label="Back to top of page"
    >
      <span>Back to Top</span>
      <ArrowUp className="w-3.5 h-3.5 text-[#2563EB]" />
    </button>
  );
}
