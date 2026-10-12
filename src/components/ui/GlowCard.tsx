'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlowCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'purple' | 'cyan' | 'blue' | 'emerald';
}

export function GlowCard({
  children,
  className = '',
  glowColor = 'purple',
  ...props
}: GlowCardProps) {
  const glowMap = {
    purple: 'hover:border-purple-500/40 hover:shadow-[0_0_28px_rgba(168,85,247,0.18)]',
    cyan: 'hover:border-cyan-500/40 hover:shadow-[0_0_28px_rgba(6,182,212,0.18)]',
    blue: 'hover:border-blue-500/40 hover:shadow-[0_0_28px_rgba(59,130,246,0.18)]',
    emerald: 'hover:border-emerald-500/40 hover:shadow-[0_0_28px_rgba(16,185,129,0.18)]',
  };

  return (
    <motion.div
      className={`relative rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] p-6 transition-all duration-300 ${glowMap[glowColor]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
