'use client';

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Download, Mail } from 'lucide-react';
import { LinkedinIcon } from '@/components/ui/Icons';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sliding active-section pill
  const navRef = useRef<HTMLElement>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  useLayoutEffect(() => {
    const measure = () => {
      const nav = navRef.current;
      const link = nav?.querySelector<HTMLElement>(`[data-nav="${activeSection}"]`);
      if (!nav || !link) return;
      setIndicator({ left: link.offsetLeft, width: link.offsetWidth });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [activeSection]);

  return (
    <header
      className={`animate-nav-in fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="#home"
            className="group flex items-center gap-2.5 text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#583FBC] rounded-lg p-1"
            aria-label="Shital Lanke Portfolio Home"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#583FBC] to-[#7B55EC] flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
              SL
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-slate-900 group-hover:text-[#583FBC] transition-colors">
                Shital Lanke
              </span>
              <span className="text-[11px] font-medium text-slate-500 -mt-1 hidden sm:inline-block">
                Fullstack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            ref={navRef}
            className="relative hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
          >
            {indicator && (
              <span
                aria-hidden="true"
                className="absolute top-0 bottom-0 rounded-full bg-purple-50 ring-1 ring-purple-100 transition-[left,width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ left: indicator.left, width: indicator.width }}
              />
            )}
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  data-nav={item.href.substring(1)}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 ${
                    isActive
                      ? 'text-[#583FBC] font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/Shital_Lanke_Resume.pdf"
              download="Shital_Lanke_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-[#583FBC] bg-slate-100 hover:bg-purple-50 border border-slate-200/80 rounded-full transition-all duration-200"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              <span>Resume</span>
            </a>

            {/* Signature Figma Cyan Pill CTA */}
            <Link
              href="#contact"
              data-magnetic="0.25"
              className="btn-shine inline-flex items-center gap-1.5 px-5 py-2 text-xs sm:text-sm font-semibold text-slate-900 bg-[#54D5E4] hover:bg-[#3ec4d4] active:scale-95 shadow-sm hover:shadow-lg hover:shadow-cyan-200/70 rounded-full"
            >
              <span>Contact</span>
              <ArrowRight className="w-3.5 h-3.5 nudge-x" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <Link
              href="#contact"
              className="px-3 py-1.5 text-xs font-semibold text-slate-900 bg-[#54D5E4] rounded-full"
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#583FBC] rounded-lg"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="animate-drawer-in sm:hidden fixed inset-x-0 top-[60px] bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl px-5 py-6">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item, i) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ '--d': `${80 + i * 45}ms` } as React.CSSProperties}
                  className={`hero-in px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'text-[#583FBC] bg-purple-50 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="/Shital_Lanke_Resume.pdf"
                download="Shital_Lanke_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-slate-800 bg-slate-100 rounded-full"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <div className="flex justify-center items-center gap-4 pt-2 text-slate-600">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-100 rounded-full hover:text-[#583FBC]"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 bg-slate-100 rounded-full hover:text-[#583FBC]"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
