'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Award,
  Trophy,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Quote,
  CheckCircle2,
} from 'lucide-react';
import { ACHIEVEMENTS } from '@/data/portfolioData';
import { revealDelay, animDelay } from '@/lib/motion';

export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? ACHIEVEMENTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === ACHIEVEMENTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="achievements" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background dots from Figma */}
      <div className="absolute top-12 left-10 w-4 h-4 rounded-full bg-[#54D5E4] opacity-50 animate-float-y" />
      <div
        className="absolute top-36 right-16 w-3 h-3 rounded-full bg-[#7B55EC] opacity-40 animate-float-y"
        style={animDelay(1200)}
      />
      <div
        className="absolute bottom-16 left-24 w-5 h-5 rounded-full bg-[#583FBC] opacity-30 animate-float-y"
        style={animDelay(2400)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching Figma "Customers reviews" title style */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            data-reveal="up"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-[#583FBC] text-xs font-semibold uppercase tracking-wider mb-3"
          >
            Honors &amp; Impact
          </div>
          <h2
            data-reveal="blur"
            style={revealDelay(100)}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            <span className="text-gradient-animated">Achievements</span> &amp; Leadership
          </h2>
          <p data-reveal="up" style={revealDelay(200)} className="mt-3 text-base text-slate-600">
            Recognitions earned through technical innovation, delivery excellence, and engineering mentorship at Sankey Solutions.
          </p>
        </div>

        {/* 3 Cards Grid matching Figma Review Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={item.id}
              data-reveal="up"
              data-tilt-max="7"
              style={revealDelay(idx * 150)}
              className={`group tilt spotlight p-8 rounded-3xl bg-white border shadow-lg hover:shadow-2xl hover:shadow-purple-200/50 flex flex-col justify-between ${
                idx === currentIndex
                  ? 'border-purple-300 ring-2 ring-purple-100'
                  : 'border-slate-100'
              }`}
            >
              <div>
                {/* Top Avatar / Badge matching Figma Avatar circle */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-purple-100 to-cyan-100 border-2 border-white shadow-md mb-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src="/assets/Avatar.jpg"
                      alt={item.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div
                      className="absolute bottom-0 right-0 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center text-white"
                      style={{ backgroundColor: item.badgeColor }}
                    >
                      {idx === 1 ? (
                        <Trophy className="w-2.5 h-2.5" />
                      ) : (
                        <Award className="w-2.5 h-2.5" />
                      )}
                    </div>
                  </div>

                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 mb-2">
                    {item.year} • {item.organization}
                  </span>

                  <h3 className="text-lg font-extrabold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#583FBC] mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                {/* Quote Text matching Figma */}
                <p className="text-sm text-slate-600 text-center italic leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Detailed Highlights */}
                <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-600">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Buttons matching Figma design */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <button
            type="button"
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shadow-2xs hover:scale-105 transition-all cursor-pointer"
            aria-label="Previous Achievement"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shadow-2xs hover:scale-105 transition-all cursor-pointer"
            aria-label="Next Achievement"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
