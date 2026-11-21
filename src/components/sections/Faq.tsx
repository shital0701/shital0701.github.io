'use client';

import React, { useState } from 'react';
import { ChevronDown, Mail, ArrowRight } from 'lucide-react';
import { FAQS, PERSONAL_INFO } from '@/data/portfolioData';
import { revealDelay } from '@/lib/motion';

export default function Faq() {
  const [openId, setOpenId] = useState<string>(FAQS[0]?.id || 'faq-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8FF] relative overflow-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column matching Figma FAQ Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span data-reveal="up" className="text-xs font-bold uppercase tracking-wider text-[#54D5E4] block mb-2">
              FAQ
            </span>
            <h2
              data-reveal="blur"
              style={revealDelay(100)}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              Frequently Asked
              <br />
              <span className="text-gradient-animated">Questions</span>
            </h2>
            <p data-reveal="up" style={revealDelay(200)} className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              If you have any other technical or collaboration questions, feel free to contact me directly by email at{' '}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-bold text-[#583FBC] hover:underline"
              >
                {PERSONAL_INFO.email}
              </a>
              .
            </p>

            <div data-reveal="up" style={revealDelay(300)} className="mt-8">
              <a
                href="#contact"
                data-magnetic="0.25"
                className="btn-shine inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-900 bg-[#54D5E4] hover:bg-[#3ec4d4] shadow-sm hover:shadow-lg hover:shadow-cyan-200/70"
              >
                <span>Ask a Question</span>
                <ArrowRight className="w-3.5 h-3.5 nudge-x" />
              </a>
            </div>
          </div>

          {/* Right Column matching Figma Accordion List */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQS.map((item, i) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  data-reveal="up"
                  style={revealDelay(i * 80)}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isOpen
                      ? 'bg-white border-purple-200 shadow-lg shadow-purple-100/60 ring-1 ring-purple-100'
                      : 'bg-white/80 border-slate-200/80 hover:border-purple-200 hover:bg-white hover:translate-x-1 shadow-2xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-sm sm:text-base font-bold transition-colors ${
                        isOpen ? 'text-[#583FBC]' : 'text-slate-800'
                      }`}
                    >
                      {item.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen
                          ? 'bg-purple-100 text-[#583FBC] rotate-180'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Smooth height animation (grid-rows 0fr → 1fr) */}
                  <div className="accordion-panel" data-open={isOpen} aria-hidden={!isOpen}>
                    <div>
                      <div className="px-6 pb-6 pt-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
