'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Sparkles, Bot, Layers, Check } from 'lucide-react';
import { LEARNING_TOPICS } from '@/data/portfolioData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';

export function Learning() {
  const getTopicIcon = (id: string) => {
    switch (id) {
      case 'deep-learning':
        return <Network className="w-6 h-6 text-blue-400" />;
      case 'generative-ai':
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'agentic-ai':
        return <Bot className="w-6 h-6 text-cyan-400" />;
      default:
        return <Layers className="w-6 h-6 text-slate-400" />;
    }
  };

  return (
    <section id="learning" className="relative py-24 md:py-32 bg-slate-950/40">
      {/* Background glow accents */}
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Continuous Growth"
          title="Exploring What's Next"
          subtitle="I'm continuously expanding my knowledge of emerging AI technologies and exploring how they can be applied to solve real-world problems."
        />

        {/* 3 Learning Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEARNING_TOPICS.map((topic, index) => {
            const glowColor =
              index === 0 ? 'blue' : index === 1 ? 'purple' : 'cyan';

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="h-full"
              >
                <GlowCard
                  glowColor={glowColor}
                  className="h-full flex flex-col justify-between p-6 sm:p-8"
                >
                  <div>
                    {/* Header badge & icon */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="p-3 rounded-2xl bg-slate-800/80 border border-white/[0.08] shadow-md">
                        {getTopicIcon(topic.id)}
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-white/[0.08]">
                        {topic.badge}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {topic.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                      {topic.description}
                    </p>

                    {/* Focus Areas List */}
                    <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                        Exploration Focus:
                      </span>
                      {topic.focusAreas.map((area) => (
                        <div
                          key={area}
                          className="flex items-start gap-2 text-xs text-slate-300"
                        >
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer status pill */}
                  <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="text-purple-300">Active Study</span>
                    <span className="text-slate-400">Self-Directed</span>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
