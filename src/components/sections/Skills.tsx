'use client';

import React, { useState } from 'react';
import {
  Layout,
  Database,
  Gauge,
  ShieldCheck,
  Activity,
  Sparkles,
  Server,
  Cloud,
  Wrench,
  Check,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { revealDelay } from '@/lib/motion';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Gauge: <Gauge className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
};

const FILTER_TABS = [
  'All Skills',
  'Frontend & UI',
  'State & Performance',
  'Security & Real-Time',
  'Generative AI',
  'Backend & Cloud',
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('All Skills');

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeTab === 'All Skills') return true;
    if (activeTab === 'Frontend & UI') return cat.title === 'Frontend Development';
    if (activeTab === 'State & Performance')
      return cat.title === 'State Management & Data' || cat.title === 'Frontend Performance';
    if (activeTab === 'Security & Real-Time')
      return cat.title === 'Authentication & Security' || cat.title === 'Real-Time & Visualization';
    if (activeTab === 'Generative AI') return cat.title === 'Generative AI & LLMs';
    if (activeTab === 'Backend & Cloud')
      return cat.title === 'Backend & Databases' || cat.title === 'Cloud & DevOps' || cat.title === 'Tools & Workflows';
    return true;
  });

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div
            data-reveal="up"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-[#583FBC] text-xs font-semibold uppercase tracking-wider mb-3"
          >
            Technical Proficiency
          </div>
          <h2
            data-reveal="blur"
            style={revealDelay(100)}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Technical Skills &amp; <span className="text-gradient-animated">Core Competencies</span>
          </h2>
          <p data-reveal="up" style={revealDelay(200)} className="mt-3 text-base text-slate-600 leading-relaxed">
            A comprehensive overview of my fullstack engineering stack, enterprise integration
            tools, and architectural knowledge. Cleanly structured without arbitrary proficiency percentages.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {FILTER_TABS.map((tab, i) => {
            const isSelected = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                data-reveal="up"
                style={revealDelay(250 + i * 60)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer active:scale-95 ${
                  isSelected
                    ? 'bg-[#583FBC] text-white shadow-md shadow-purple-200 scale-105'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:-translate-y-0.5 border border-slate-200/80'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid — keyed by tab so cards re-animate on filter change */}
        <div key={activeTab} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, i) => (
            <div
              key={category.title}
              data-reveal="up"
              style={revealDelay((i % 3) * 110 + Math.floor(i / 3) * 60)}
              className="group tilt spotlight p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-purple-100/60 hover:border-purple-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#583FBC] flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-[#583FBC] group-hover:text-white group-hover:rotate-[-8deg] group-hover:scale-110">
                    {CATEGORY_ICONS[category.iconName] || <Layout className="w-5 h-5" />}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-[#583FBC] border border-slate-200/70 hover:border-purple-200 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <Check className="w-3 h-3 text-emerald-500" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
