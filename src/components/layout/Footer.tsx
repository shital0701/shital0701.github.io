'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';
import { LinkedinIcon } from '@/components/ui/Icons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row matching Figma bottom section */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column matching Figma "Let's build it together." */}
          <div
            data-reveal="left"
            className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <div className="relative w-14 h-14 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-purple-300 via-cyan-200 to-violet-300 bg-gradient-animated shadow-sm shrink-0">
              <Image
                src="/assets/Avatar.jpg"
                alt="Shital Lanke"
                width={56}
                height={56}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Let&apos;s build it together.
              </h3>

              {/* Dark Pill Buttons matching Figma */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <span>My Linkedin</span>
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>

                <a
                  href="/Shital_Lanke_Resume.pdf"
                  download="Shital_Lanke_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <span>Download my resume</span>
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column matching Figma mini purple card */}
          <div data-reveal="right" style={{ '--reveal-delay': '150ms' } as React.CSSProperties} className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#583FBC] via-[#6A4BD8] to-[#472CA8] bg-gradient-animated text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl shadow-purple-200/60 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500">
              <div>
                <div className="text-base font-extrabold text-white">
                  Looking for a specialist?
                </div>
                <div className="text-xs text-purple-200 mt-1">
                  Let&apos;s build something great together.
                </div>
              </div>

              <Link
                href="#contact"
                data-magnetic="0.3"
                className="btn-shine inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-slate-900 bg-[#54D5E4] hover:bg-[#3ec4d4] active:scale-95 shadow-sm shrink-0"
              >
                <span>Contact</span>
                <ArrowRight className="w-3.5 h-3.5 nudge-x" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
