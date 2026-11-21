'use client';

import { useEffect, useRef, useState } from 'react';
import { Briefcase, Layers, Truck, Sparkles } from 'lucide-react';
import { PROJECTS, calculateExperience } from '@/data/portfolioData';
import { revealDelay } from '@/lib/motion';

/** Counts from 0 to `to` once the number scrolls into view. */
function CountUp({ to, duration = 1800 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setValue(0);
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - 2 ** (-10 * t); // ease-out-expo
          setValue(Math.round(to * (t === 1 ? 1 : eased)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString('en-US')}
    </span>
  );
}

export default function ImpactStats() {
  const [years, setYears] = useState(calculateExperience().years);

  useEffect(() => {
    setYears(calculateExperience(new Date()).years);
  }, []);

  const stats = [
    {
      icon: Briefcase,
      value: years,
      suffix: '+',
      label: 'Years Experience',
      note: 'Fullstack @ Sankey Solutions',
      accent: 'from-[#583FBC] to-[#7B55EC]',
    },
    {
      icon: Layers,
      value: PROJECTS.length,
      suffix: '',
      label: 'Projects Delivered',
      note: 'Enterprise apps & AI POCs',
      accent: 'from-[#7B55EC] to-[#54D5E4]',
    },
    {
      icon: Truck,
      value: 1000,
      suffix: '+',
      label: 'Vehicles Tracked Daily',
      note: '24/7 logistics platform',
      accent: 'from-[#38B6C4] to-[#54D5E4]',
    },
    {
      icon: Sparkles,
      value: PROJECTS.filter((p) => p.isPoc).length,
      suffix: '',
      label: 'GenAI Prototypes',
      note: 'RAG, MCP & tool calling',
      accent: 'from-[#583FBC] to-[#54D5E4]',
    },
  ];

  return (
    <section aria-label="Impact at a glance" className="relative py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                data-reveal="up"
                data-tilt-max="8"
                style={revealDelay(i * 120)}
                className="group tilt spotlight overflow-hidden p-5 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-purple-100/70 hover:border-purple-200"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${stat.accent} text-white flex items-center justify-center shadow-md mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                    <CountUp to={stat.value} />
                    <span className="text-gradient-animated">{stat.suffix}</span>
                  </div>

                  <div className="mt-2 text-sm sm:text-base font-bold text-slate-800">
                    {stat.label}
                  </div>
                  <div className="mt-0.5 text-xs text-slate-500">{stat.note}</div>

                  {/* Accent bar that grows on hover */}
                  <div className="mt-5 h-1 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={`h-full w-1/4 rounded-full bg-gradient-to-r ${stat.accent} transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
