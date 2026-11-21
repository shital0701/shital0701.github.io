'use client';

import React, { useEffect } from 'react';
import {
  X,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Award,
  Layers,
  Sparkles,
  ExternalLink,
  Shield,
  Clock,
} from 'lucide-react';
import { Project } from '@/types';
import ProjectIllustration from '@/components/ui/ProjectIllustration';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="animate-modal-in relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="relative px-6 py-5 border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-purple-50/40 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-purple-100 text-[#583FBC] border border-purple-200">
                {project.categoryBadge}
              </span>
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-slate-100 text-slate-700">
                {project.category}
              </span>
              <span
                className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                  project.isPoc
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-emerald-100 text-emerald-800'
                }`}
              >
                {project.isPoc ? 'Proof of Concept (POC)' : 'Production Enterprise Platform'}
              </span>
            </div>
            <h2 id="case-study-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#583FBC]"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 text-sm text-slate-700">
          {/* Visual Showcase Preview */}
          <div className="rounded-2xl overflow-hidden shadow-inner border border-slate-100">
            <ProjectIllustration type={project.visualType} title={project.title} />
          </div>

          {/* Metrics Row (if available) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                  <div className="text-xs text-slate-500 font-medium">{metric.label}</div>
                  <div className="text-base sm:text-lg font-extrabold text-[#583FBC] mt-0.5">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Project Overview */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#583FBC]" />
              <span>Project Overview</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* My Role & Key Contributions */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>My Role & Engineering Contributions</span>
            </h3>
            <ul className="space-y-2">
              {project.roleAndContributions.map((contrib, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#583FBC] mt-2 shrink-0" />
                  <span className="text-slate-600 leading-relaxed">{contrib}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Challenges & Solutions Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Challenges */}
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
              <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>Technical Challenges</span>
              </h4>
              <ul className="space-y-2">
                {project.technicalChallenges.map((ch, idx) => (
                  <li key={idx} className="text-xs text-amber-950/80 leading-relaxed flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
              <h4 className="text-xs font-bold text-[#583FBC] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-[#583FBC]" />
                <span>Implemented Solutions</span>
              </h4>
              <ul className="space-y-2">
                {project.solutions.map((sol, idx) => (
                  <li key={idx} className="text-xs text-purple-950/80 leading-relaxed flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#583FBC] mt-1.5 shrink-0" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Business Value & Impact (if present) */}
          {project.businessImpact && project.businessImpact.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2.5 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#7B55EC]" />
                <span>Business Value & Delivery Impact</span>
              </h3>
              <ul className="space-y-1.5">
                {project.businessImpact.map((impact, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              Technologies & Libraries
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            {project.isPoc ? 'Proof of Concept Experiment' : 'Internal Enterprise Production System'}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-full transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
