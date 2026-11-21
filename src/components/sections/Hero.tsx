"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Code2,
  CheckCircle,
} from "lucide-react";
import { LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO, calculateExperience } from "@/data/portfolioData";
import { animDelay } from "@/lib/motion";

const SOCIAL_CLASS =
  "w-11 h-11 rounded-full border border-slate-300/80 bg-white hover:border-[#583FBC] hover:text-[#583FBC] hover:shadow-md hover:shadow-purple-200/60 text-slate-700 flex items-center justify-center shadow-xs";

export default function Hero() {
  const [exp, setExp] = useState(calculateExperience());

  useEffect(() => {
    setExp(calculateExperience(new Date()));
  }, []);

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8FF] via-white to-white"
    >
      {/* Decorative Wave Lines from Figma (LInes.svg) */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl pointer-events-none opacity-40 select-none -z-0 hero-in"
        style={animDelay(600)}
      >
        <Image
          src="/assets/LInes.svg"
          alt=""
          width={1169}
          height={321}
          className="w-full h-auto object-cover wave-drift"
          priority
        />
      </div>

      {/* Morphing ambient blobs */}
      <div className="absolute -top-24 left-[-10%] w-[500px] h-[500px] bg-cyan-100/60 blur-3xl pointer-events-none -z-0 animate-blob" />
      <div
        className="absolute top-10 right-[-10%] w-[550px] h-[550px] bg-purple-200/50 blur-3xl pointer-events-none -z-0 animate-blob"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-[-20%] left-1/3 w-[380px] h-[380px] bg-violet-100/60 blur-3xl pointer-events-none -z-0 animate-blob"
        style={{ animationDelay: "-12s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Dynamic Experience Badge */}
            <div
              className="hero-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/90 backdrop-blur border border-purple-200/80 text-[#583FBC] text-xs font-semibold mb-6 shadow-2xs"
              style={animDelay(100)}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping-soft" />
                <span className="relative w-2 h-2 rounded-full bg-emerald-500" />
              </span>
              <span>{exp.formatted} Experience</span>
            </div>

            {/* Main Greeting — masked line reveal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              <span className="line-mask">
                <span style={animDelay(200)}>
                  HEY! I&apos;m{" "}
                  <span className="text-gradient-animated">Shital,</span>
                </span>
              </span>
              <span className="line-mask">
                <span style={animDelay(340)} className="text-slate-900">
                  Fullstack Developer
                </span>
              </span>
            </h1>

            {/* Headline */}
            <h2
              className="hero-in mt-4 text-lg sm:text-xl font-bold text-slate-700"
              style={animDelay(500)}
            >
              Building Scalable Web Experiences with React.js, Next.js &amp;
              Nest.js
            </h2>

            {/* Bio paragraph */}
            <p
              className="hero-in mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl"
              style={animDelay(620)}
            >
              Fullstack Developer at Sankey Solutions specializing in enterprise
              SaaS platforms, real-time logistics dashboards, Nest.js backend
              APIs, and Generative AI integrations. Turning complex business
              requirements into intuitive, performant full-stack products.
            </p>

            {/* Social Pill Circles */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${SOCIAL_CLASS} pop-in`}
                style={animDelay(760)}
                data-magnetic="0.35"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`${SOCIAL_CLASS} pop-in`}
                style={animDelay(840)}
                data-magnetic="0.35"
                aria-label="Send Email"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/shital0701"
                target="_blank"
                rel="noopener noreferrer"
                className={`${SOCIAL_CLASS} pop-in font-bold text-sm`}
                style={animDelay(920)}
                data-magnetic="0.35"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Code2 className="w-5 h-5" />
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div
              className="hero-in flex flex-wrap items-center gap-3.5 mt-8"
              style={animDelay(980)}
            >
              <Link
                href="#portfolio"
                data-magnetic="0.2"
                className="btn-shine inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#583FBC] hover:bg-[#4730A3] active:scale-95 shadow-md shadow-purple-300/50 hover:shadow-xl hover:shadow-purple-300/60 rounded-full"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 nudge-x" />
              </Link>

              <Link
                href="#contact"
                data-magnetic="0.2"
                className="btn-shine inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-900 bg-[#54D5E4] hover:bg-[#3ec4d4] active:scale-95 shadow-sm hover:shadow-lg hover:shadow-cyan-200/70 rounded-full"
              >
                <span>Get in Touch</span>
              </Link>

              <a
                href="/Shital_Lanke_Resume.pdf"
                download="Shital_Lanke_Resume.pdf"
                data-magnetic="0.2"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 active:scale-95 rounded-full shadow-2xs"
              >
                <Download className="w-4 h-4 text-[#583FBC]" />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500 font-medium">
              {[
                "Next.js & React.js Specialist",
                "Multi-Tenant SaaS",
              ].map((label, i) => (
                <span
                  key={label}
                  className="hero-in flex items-center gap-1.5"
                  style={animDelay(1100 + i * 100)}
                >
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Portrait with pointer-parallax layers */}
          <div
            className="lg:col-span-5 flex items-center justify-center relative"
            data-parallax-root
          >
            <div className="relative w-[320px] h-[380px] sm:w-[380px] sm:h-[450px] flex items-center justify-center">
              {/* Soft purple circular backdrop */}
              <div
                className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] portrait-in -z-0"
                style={animDelay(200)}
              >
                <div
                  data-depth="-0.015"
                  className="w-full h-full rounded-full bg-gradient-to-tr from-[#DDD6FE] to-[#EDE9FE] shadow-inner transition-[translate] duration-700 ease-out"
                />
              </div>

              {/* Orbital Ellipse Lines — slowly rotating */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 select-none">
                <Image
                  src="/assets/Circles.png"
                  alt=""
                  width={380}
                  height={380}
                  className="w-full h-full object-contain animate-orbit-slow"
                />
              </div>

              {/* Floating Decorative Geometrics */}
              <div
                data-depth="0.06"
                className="absolute top-6 left-2 sm:left-4 transition-[translate] duration-500 ease-out pop-in"
                style={animDelay(900)}
              >
                <div
                  className="w-12 h-12 rounded-xl bg-[#583FBC] shadow-lg shadow-purple-300/60 animate-float-slow"
                  style={{ rotate: "-30deg" }}
                />
              </div>

              <div
                data-depth="0.05"
                className="absolute top-28 right-0 sm:-right-2 transition-[translate] duration-500 ease-out pop-in"
                style={animDelay(1000)}
              >
                <div
                  className="w-10 h-10 rounded-lg bg-[#54D5E4] shadow-md shadow-cyan-200 animate-float-slow"
                  style={{ rotate: "34deg", animationDelay: "1.5s" }}
                />
              </div>

              <div
                data-depth="0.09"
                className="absolute top-4 right-16 transition-[translate] duration-500 ease-out pop-in"
                style={animDelay(1100)}
              >
                <div className="w-3.5 h-3.5 rounded-full bg-[#7B55EC] animate-float-y" />
              </div>

              <div
                data-depth="0.08"
                className="absolute bottom-20 right-4 transition-[translate] duration-500 ease-out pop-in"
                style={animDelay(1150)}
              >
                <div
                  className="w-5 h-5 rounded-full bg-[#63B8E7] animate-float-y"
                  style={animDelay(800)}
                />
              </div>

              <div
                data-depth="0.1"
                className="absolute bottom-10 left-6 transition-[translate] duration-500 ease-out pop-in"
                style={animDelay(1200)}
              >
                <div
                  className="w-3 h-3 rounded-full bg-[#583FBC] animate-float-y"
                  style={animDelay(1600)}
                />
              </div>

              {/* Hero Portrait */}
              <div
                className="relative z-10 flex items-end justify-center portrait-in"
                style={animDelay(350)}
              >
                <div
                  data-depth="0.02"
                  className="transition-[translate] duration-700 ease-out"
                >
                  <Image
                    src="/assets/profile.png"
                    alt="Shital Lanke - Fullstack Developer"
                    width={300}
                    height={399}
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </div>
              </div>

              {/* Floating Glassmorphic Card */}
              <div
                className="absolute -bottom-4 -left-4 sm:left-0 z-20 hero-in"
                style={animDelay(1300)}
              >
                <div
                  data-depth="0.045"
                  className="transition-[translate] duration-500 ease-out"
                >
                  <div className="animate-float-y bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl shadow-purple-200/50 border border-white flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-100 to-cyan-100 text-[#583FBC] flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">
                        Potential Bar Raiser
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        Core Team • Sankey Solutions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
