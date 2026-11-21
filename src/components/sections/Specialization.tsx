'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Code,
  Layers,
  Cpu,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Building,
  CheckCircle2,
} from 'lucide-react';
import { SPECIALIZATIONS, PERSONAL_INFO } from '@/data/portfolioData';
import { revealDelay, animDelay } from '@/lib/motion';

const FLOATING_TECH_BADGES = [
  { name: 'React.js', color: '#61DAFB', bg: 'bg-[#61DAFB]/10 text-cyan-700 border-cyan-200' },
  { name: 'Next.js', color: '#000000', bg: 'bg-slate-900 text-white border-slate-700' },
  { name: 'TypeScript', color: '#3178C6', bg: 'bg-[#3178C6]/10 text-blue-700 border-blue-200' },
  { name: 'Tailwind CSS', color: '#38BDF8', bg: 'bg-cyan-50 text-cyan-800 border-cyan-200' },
  { name: 'Keycloak IAM', color: '#583FBC', bg: 'bg-purple-50 text-purple-800 border-purple-200' },
  { name: 'WebSocket', color: '#10B981', bg: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { name: 'Generative AI', color: '#7B55EC', bg: 'bg-violet-50 text-violet-800 border-violet-200' },
];

const ORBIT_BADGES = [
  {
    label: 'TypeScript',
    position: 'top-2 left-1/2 -translate-x-1/2',
    className: 'bg-white border border-slate-200 text-slate-800',
    dot: 'bg-[#3178C6]',
    depth: '0.04',
  },
  {
    label: 'Tailwind CSS',
    position: 'top-16 right-0',
    className: 'bg-[#583FBC] text-white',
    dot: 'bg-white',
    depth: '0.06',
  },
  {
    label: 'WebSocket',
    position: 'bottom-12 right-2',
    className: 'bg-white border border-slate-200 text-slate-800',
    dot: 'bg-emerald-500',
    depth: '0.05',
  },
  {
    label: 'Keycloak RBAC',
    position: 'bottom-8 left-4',
    className: 'bg-[#54D5E4] text-slate-950',
    dot: 'bg-slate-950',
    depth: '0.07',
  },
  {
    label: 'Generative AI',
    position: 'top-20 left-0',
    className: 'bg-white border border-slate-200 text-slate-800',
    dot: 'bg-[#7B55EC]',
    depth: '0.045',
  },
];

export default function Specialization() {
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Introduction Section */}
        <div className="max-w-3xl mb-16">
          <div
            data-reveal="up"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            About My Engineering Philosophy
          </div>
          <h2
            data-reveal="blur"
            style={revealDelay(100)}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Crafting enterprise frontend architecture with{' '}
            <span className="text-gradient-animated">precision and empathy.</span>
          </h2>
          <p data-reveal="up" style={revealDelay(220)} className="mt-4 text-base text-slate-600 leading-relaxed">
            I specialize in turning complex data-intensive business requirements into intuitive,
            maintainable user experiences. From building multi-tenant SaaS platforms with dynamic
            per-tenant branding to 24/7 automotive logistics dashboards handling ~1,000 vehicles
            daily, my focus is always on high performance, clean component boundaries, and robust
            type safety.
          </p>

          {/* Educational & Company Credibility Row */}
          <div className="grid sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100">
            <div
              data-reveal="up"
              style={revealDelay(300)}
              className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-200 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="p-2 rounded-xl bg-purple-100 text-[#583FBC]">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Current Employment</div>
                <div className="text-sm font-bold text-slate-900">{PERSONAL_INFO.company}</div>
                <div className="text-xs text-slate-500">June 2023 – Present • Full-time</div>
              </div>
            </div>

            <div
              data-reveal="up"
              style={revealDelay(400)}
              className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-200 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="p-2 rounded-xl bg-cyan-100 text-cyan-800">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Academic Foundation</div>
                <div className="text-sm font-bold text-slate-900">
                  {PERSONAL_INFO.education.institution}
                </div>
                <div className="text-xs text-slate-500">
                  {PERSONAL_INFO.education.degree} • {PERSONAL_INFO.education.score}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Figma Specialization Section: Orbital Badges on Left, Layered Cards on Right */}
        <div id="specialization" className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
          {/* Left Column: Orbital Rings with Interactive Tech Badges */}
          <div className="lg:col-span-5 flex items-center justify-center" data-parallax-root>
            <div
              data-reveal="scale"
              className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] flex items-center justify-center"
            >
              {/* Orbital Circles from Figma — slowly rotating */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-40">
                <Image
                  src="/assets/Circles.png"
                  alt=""
                  width={380}
                  height={380}
                  className="w-full h-full object-contain animate-orbit-slow"
                />
              </div>
              {/* Dashed inner orbit */}
              <div className="absolute w-[62%] h-[62%] rounded-full border border-dashed border-purple-300/60 animate-orbit-reverse pointer-events-none">
                <span className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full bg-[#54D5E4] shadow-[0_0_12px_#54D5E4]" />
              </div>

              {/* Center Core Badge with pulsing halo */}
              <span className="absolute w-28 h-28 rounded-full bg-[#583FBC]/20 animate-pulse-glow pointer-events-none" />
              <div className="relative z-10 w-24 h-24 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center p-2 shadow-2xl border-4 border-white">
                <span className="font-extrabold text-base tracking-tight text-white">Next.js</span>
                <span className="text-[10px] text-cyan-400 font-mono font-medium">&amp; React</span>
              </div>

              {/* Orbiting Badges — each pops in, then floats and follows the cursor */}
              {ORBIT_BADGES.map((badge, i) => (
                <div key={badge.label} className={`absolute z-20 ${badge.position}`}>
                  <div
                    data-depth={badge.depth}
                    className="transition-[translate] duration-500 ease-out"
                  >
                    <div
                      data-reveal="scale"
                      style={revealDelay(300 + i * 120)}
                    >
                      <div
                        className={`animate-float-y px-3.5 py-1.5 rounded-full shadow-md text-xs font-bold hover:scale-110 transition-[scale] duration-300 flex items-center gap-1.5 cursor-default ${badge.className}`}
                        style={animDelay(i * 700)}
                      >
                        <span className={`w-2 h-2 rounded-full ${badge.dot}`} />
                        <span>{badge.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Figma "I specialize in" Layered Stacked Cards */}
          <div className="lg:col-span-7">
            <h3
              data-reveal="up"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8"
            >
              I specialize in
            </h3>

            <div className="space-y-5">
              {SPECIALIZATIONS.map((spec, index) => {
                const isActive = activeCard === index;
                return (
                  <div
                    key={spec.number}
                    onClick={() => setActiveCard(index)}
                    data-reveal="right"
                    style={revealDelay(120 + index * 140)}
                    className="group relative cursor-pointer"
                  >
                    {/* Layered Background Pill (matching Figma layered card effect) */}
                    <div
                      className={`absolute inset-0 rounded-2xl transition-[translate] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] -z-0 group-hover:translate-x-3 group-hover:translate-y-3 ${
                        isActive ? 'translate-x-3 translate-y-3' : 'translate-x-1.5 translate-y-1.5'
                      } ${
                        index === 0
                          ? 'bg-purple-100/60'
                          : index === 1
                          ? 'bg-cyan-100/60'
                          : 'bg-indigo-100/60'
                      }`}
                    />

                    {/* Front Card */}
                    <div
                      className={`relative z-10 p-6 rounded-2xl bg-white border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 ${
                        isActive
                          ? 'border-[#583FBC] shadow-lg shadow-purple-100 ring-2 ring-purple-100'
                          : 'border-slate-200/90 shadow-sm hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-9 h-9 rounded-xl font-bold text-sm flex items-center justify-center shrink-0 transition-colors ${
                            isActive
                              ? 'bg-[#583FBC] text-white'
                              : 'bg-slate-100 text-slate-600 group-hover:bg-purple-50 group-hover:text-[#583FBC]'
                          }`}
                        >
                          {spec.number}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-base sm:text-lg font-bold text-slate-900">
                              {spec.title}
                            </h4>
                            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 hidden sm:inline-block">
                              {spec.tag}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                            {spec.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
