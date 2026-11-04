'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, Project } from '@/data/portfolioData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#F4F8FF]">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-ai-grid opacity-50 pointer-events-none" />

      {/* Ambient background soft light */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Engineering"
          title="Turning Ideas Into Intelligent Solutions."
          subtitle="Production-grade AI/ML architectures designed for offline rural agricultural support and real-time network anomaly detection."
        />

        {/* STRICTLY TWO PROJECTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="h-full"
            >
              <ProjectCard
                project={project}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
