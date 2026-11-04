'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlowCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'sky' | 'indigo' | 'emerald';
}

export function GlowCard({
  children,
  className = '',
  glowColor = 'blue',
  ...props
}: GlowCardProps) {
  const glowMap = {
    blue: 'hover:border-blue-400 hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)]',
    sky: 'hover:border-sky-400 hover:shadow-[0_12px_30px_rgba(56,189,248,0.14)]',
    indigo: 'hover:border-indigo-400 hover:shadow-[0_12px_30px_rgba(99,102,241,0.12)]',
    emerald: 'hover:border-emerald-400 hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)]',
  };

  return (
    <motion.div
      className={`relative rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(37,99,235,0.05)] transition-all duration-300 ${glowMap[glowColor]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
