'use client';

import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Award,
  Users,
  Code2,
} from 'lucide-react';
import { WORK_EXPERIENCE, PERSONAL_INFO, calculateExperience } from '@/data/portfolioData';
import { revealDelay } from '@/lib/motion';

export default function Experience() {
  const [exp, setExp] = useState(calculateExperience());

  useEffect(() => {
    setExp(calculateExperience(new Date()));
  }, []);

  return (
    <section id="experience" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div
            data-reveal="up"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            Career Journey
          </div>
          <h2
            data-reveal="blur"
            style={revealDelay(100)}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Professional Experience &amp;{' '}
            <span className="text-gradient-animated">Engineering Impact</span>
          </h2>
          <p data-reveal="up" style={revealDelay(200)} className="mt-3 text-base text-slate-600 leading-relaxed">
            Leading frontend architecture, shipping mission-critical client applications, and
            driving engineering standards at Sankey Solutions.
          </p>
        </div>

        {/* Experience Card */}
        <div
          data-reveal="clip"
          className="spotlight relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-purple-50/30 border border-slate-200/90 shadow-md hover:shadow-xl hover:shadow-purple-100/50 transition-shadow duration-500"
        >
          {/* Top Banner Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#583FBC] text-white">
                  Current Role
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Full-Time Employment
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-[#583FBC] border border-purple-200">
                  {exp.formatted}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {WORK_EXPERIENCE.role}
              </h3>
              <div className="text-base font-bold text-[#583FBC] mt-0.5">
                {WORK_EXPERIENCE.company}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-1.5 text-xs text-slate-500 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#583FBC]" />
                {WORK_EXPERIENCE.period}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#583FBC]" />
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Key Engineering Responsibilities */}
          <div className="mt-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Key Contributions &amp; Scope of Work
            </h4>
            <div className="grid sm:grid-cols-2 gap-3.5">
              {WORK_EXPERIENCE.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  data-reveal="up"
                  style={revealDelay(200 + (idx % 2) * 90 + Math.floor(idx / 2) * 70)}
                  className="group p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-purple-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3"
                >
                  <span className="relative w-2 h-2 rounded-full bg-[#583FBC] mt-2 shrink-0 transition-transform duration-300 group-hover:scale-150" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Bar Raiser Spotlight */}
          <div
            data-reveal="up"
            className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-purple-100/60 via-purple-50/40 to-cyan-50/60 bg-gradient-animated border border-purple-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#583FBC] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">
                  Potential Bar Raiser Core Team Member (2025)
                </div>
                <div className="text-xs text-slate-600">
                  Selected for team leadership, engineering mentorship, client requirement solutioning, and technical standards.
                </div>
              </div>
            </div>
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-white text-[#583FBC] shadow-2xs border border-purple-100 shrink-0">
              Core Leadership
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
