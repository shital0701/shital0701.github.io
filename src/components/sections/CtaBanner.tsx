"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { revealDelay, animDelay } from "@/lib/motion";

export default function CtaBanner() {
  return (
    <section className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-reveal="clip"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#583FBC] via-[#4F36C9] to-[#3F25B5] bg-gradient-animated p-8 sm:p-12 md:p-16 shadow-2xl shadow-purple-300/40 text-white"
        >
          {/* Glow orbs drifting behind content */}
          <div className="absolute -top-20 -right-16 w-72 h-72 bg-[#54D5E4]/25 blur-3xl animate-blob pointer-events-none" />
          <div
            className="absolute -bottom-24 left-1/4 w-80 h-80 bg-[#7B55EC]/40 blur-3xl animate-blob pointer-events-none"
            style={{ animationDelay: "-8s" }}
          />

          {/* Self-drawing Vector Wave Ornament */}
          <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
            <svg
              className="w-full h-full object-cover wave-drift"
              viewBox="0 0 1000 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                className="draw-line"
                d="M-50 150 C 200 50, 400 250, 700 100 C 900 0, 1050 150, 1100 200"
                stroke="white"
                strokeWidth="2"
              />
              <path
                className="draw-line"
                style={animDelay(400)}
                d="M-50 200 C 250 120, 500 280, 800 180 C 950 120, 1050 250, 1100 220"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div
                data-reveal="up"
                style={revealDelay(300)}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-cyan-300 text-xs font-semibold mb-3"
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Open to Full-Time Fullstack Roles</span>
              </div>
              <h2
                data-reveal="blur"
                style={revealDelay(400)}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight"
              >
                Looking for a skilled Fullstack Developer?
              </h2>
              <p
                data-reveal="up"
                style={revealDelay(500)}
                className="mt-3 text-sm sm:text-base text-purple-100/90 leading-relaxed"
              >
                From React.js &amp; Next.js interfaces to Nest.js APIs—scalable
                SaaS platforms, mission-critical real-time dashboards, and
                Generative AI integrations. Let&apos;s build it together.
              </p>
            </div>

            {/* Signature Cyan CTA Pill matching Figma button */}
            <div
              data-reveal="right"
              style={revealDelay(600)}
              className="shrink-0 flex flex-col sm:flex-row items-start sm:items-center gap-3"
            >
              <Link
                href="#contact"
                data-magnetic="0.3"
                className="btn-shine inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-slate-900 bg-[#54D5E4] hover:bg-[#3ec4d4] active:scale-95 shadow-lg hover:shadow-xl hover:shadow-cyan-400/40"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 nudge-x" />
              </Link>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                data-magnetic="0.3"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Email Directly</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
