'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  Layers,
  ChevronRight,
  Bot,
  Truck,
  Shield,
  TrendingUp,
  Cpu,
  Code2,
  FileText,
  Mic,
  Image as ImageIcon,
  Workflow,
  CheckCircle2,
} from 'lucide-react';
import { PROJECTS } from '@/data/portfolioData';
import { Project } from '@/types';
import ProjectIllustration from '@/components/ui/ProjectIllustration';
import ProjectModal from '@/components/sections/ProjectModal';
import { revealDelay } from '@/lib/motion';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'featured' | 'all' | 'pocs'>('featured');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = PROJECTS.filter((p) => p.isFeatured);
  const pocProjects = PROJECTS.filter((p) => p.isPoc);

  const displayedProjects =
    activeTab === 'featured'
      ? featuredProjects
      : activeTab === 'pocs'
      ? pocProjects
      : PROJECTS;

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#FAF8FF] relative overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-100/50 blur-3xl pointer-events-none -z-0 animate-blob" />
      <div
        className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-cyan-100/50 blur-3xl pointer-events-none -z-0 animate-blob"
        style={{ animationDelay: '-9s' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching Figma Title "Portfolio" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div
              data-reveal="up"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-[#583FBC] text-xs font-semibold uppercase tracking-wider mb-3"
            >
              Case Studies &amp; Systems
            </div>
            <h2
              data-reveal="blur"
              style={revealDelay(100)}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
            >
              <span className="text-gradient-animated">Portfolio</span>
            </h2>
            <p data-reveal="up" style={revealDelay(200)} className="mt-3 text-base text-slate-600 max-w-2xl leading-relaxed">
              Explore 10 production enterprise applications, multi-tenant architectures, mission-critical
              logistics systems, and cutting-edge Generative AI proof-of-concepts.
            </p>
          </div>

          {/* Tab Filter Pills */}
          <div
            data-reveal="left"
            style={revealDelay(300)}
            className="flex items-center gap-2 p-1.5 bg-white rounded-full border border-slate-200 shadow-2xs self-start md:self-auto"
          >
            <button
              type="button"
              onClick={() => setActiveTab('featured')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
                activeTab === 'featured'
                  ? 'bg-[#583FBC] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Featured Systems (5)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('pocs')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
                activeTab === 'pocs'
                  ? 'bg-[#583FBC] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              AI Innovations &amp; POCs (5)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#583FBC] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Projects (10)
            </button>
          </div>
        </div>

        {/* Featured Projects: Big Signature Cards matching Figma Visuals */}
        <div key={activeTab} className="space-y-10 sm:space-y-12">
          {displayedProjects.map((project, idx) => (
            <div
              key={project.id}
              data-reveal="up"
              className={`spotlight group rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 transition-[box-shadow,translate] duration-500 border shadow-md hover:shadow-2xl hover:shadow-purple-200/40 hover:-translate-y-1 bg-gradient-to-br ${project.gradientTheme.bgGradient}`}
              style={{ borderColor: project.gradientTheme.borderColor }}
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Left Column: Project Meta & Details */}
                <div className="lg:col-span-5 flex flex-col items-start justify-between">
                  <div data-reveal={idx % 2 === 0 ? 'left' : 'right'} style={revealDelay(150)}>
                    {/* Category Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className={`px-3 py-1 text-xs font-bold rounded-full border ${project.gradientTheme.pillBg}`}
                      >
                        {project.categoryBadge}
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/80 text-slate-700 border border-white/60">
                        {project.category}
                      </span>
                      {project.isPoc && (
                        <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-amber-100 text-amber-800">
                          POC
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Key Metrics or Highlights */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-5 pt-4 border-t border-slate-900/10 w-full">
                        {project.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-white/80">
                            <div className="text-[10px] text-slate-500 font-medium truncate">
                              {metric.label}
                            </div>
                            <div className="text-xs sm:text-sm font-extrabold text-[#583FBC] truncate">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {project.techStack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-medium bg-white/90 text-slate-700 rounded-full border border-slate-200/60 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 6 && (
                        <span className="px-2 py-1 text-[11px] font-semibold text-slate-500">
                          +{project.techStack.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Read Case Study Button matching Figma Signature Pill */}
                  <div className="mt-8 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      data-magnetic="0.2"
                      className={`btn-shine inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow-lg active:scale-95 cursor-pointer ${project.gradientTheme.buttonBg}`}
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-4 h-4 nudge-x" />
                    </button>

                    <span className="text-xs font-semibold text-slate-500">
                      {project.isPoc ? 'POC Details & Architecture' : 'Full Architecture & Metrics'}
                    </span>
                  </div>
                </div>

                {/* Right Column: Visual Dashboard Mockup */}
                <div
                  className="lg:col-span-7 flex items-center justify-center"
                  data-reveal="scale"
                  style={revealDelay(250)}
                >
                  <div
                    onClick={() => setSelectedProject(project)}
                    data-tilt-max="5"
                    className="tilt w-full cursor-pointer rounded-2xl"
                    title="Click to view full case study"
                  >
                    <ProjectIllustration type={project.visualType} title={project.title} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Case Study Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
