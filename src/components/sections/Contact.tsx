'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Download,
  Copy,
  Check,
  Send,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import { LinkedinIcon } from '@/components/ui/Icons';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { revealDelay } from '@/lib/motion';

/** Public Web3Forms access key (safe to expose — it only allows sending to your inbox). */
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const CONTACT_CARD =
  'group p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-4 hover:bg-white hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/50 hover:-translate-y-0.5 transition-all duration-300';
const CONTACT_ICON = 'transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6';

export default function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const copyToClipboard = async (text: string, type: string) => {
    try {
      // Clipboard API is unavailable on non-HTTPS pages and some in-app browsers
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    } catch {
      window.prompt('Copy this:', text);
    }
  };

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Fallback: open the visitor's email app with a pre-filled draft
  const openMailDraft = () => {
    const subject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name || 'Visitor'}`
    );
    const body = encodeURIComponent(
      `Hello Shital,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // No key configured yet → keep the old email-app behaviour
    if (!WEB3FORMS_KEY) {
      openMailDraft();
      return;
    }

    // Honeypot: real visitors never see or tick this field
    const botcheck = new FormData(e.currentTarget).get('botcheck');
    if (botcheck) return;

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: 'Portfolio Contact Form',
          subject: `Portfolio: ${formData.subject}`,
          name: formData.name,
          email: formData.email, // lets you hit "Reply" in Gmail to answer the visitor
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'Request failed');

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5">
            <div
              data-reveal="up"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-[#583FBC] text-xs font-semibold uppercase tracking-wider mb-3"
            >
              Get in Touch
            </div>
            <h2
              data-reveal="blur"
              style={revealDelay(100)}
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
            >
              Let&apos;s build <span className="text-gradient-animated">impactful software</span> together.
            </h2>
            <p data-reveal="up" style={revealDelay(200)} className="mt-4 text-base text-slate-600 leading-relaxed">
              I&apos;m always excited to discuss fullstack product engineering, high-performance
              web applications, and Generative AI integrations. Reach out through any channel below.
            </p>

            <div className="mt-8 space-y-4">
              {/* Email Card */}
              <div data-reveal="left" style={revealDelay(250)} className={CONTACT_CARD}>
                <div className="flex items-center gap-3.5">
                  <div className={`w-10 h-10 rounded-xl bg-purple-100 text-[#583FBC] flex items-center justify-center shrink-0 ${CONTACT_ICON}`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-bold text-slate-900 hover:text-[#583FBC] transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 text-slate-500 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy Email"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div data-reveal="left" style={revealDelay(350)} className={CONTACT_CARD}>
                <div className="flex items-center gap-3.5">
                  <div className={`w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0 ${CONTACT_ICON}`}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Phone &amp; WhatsApp</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm font-bold text-slate-900 hover:text-cyan-700 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 text-slate-500 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                  title="Copy phone number"
                  aria-label="Copy Phone"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div data-reveal="left" style={revealDelay(450)} className={CONTACT_CARD}>
                <div className="flex items-center gap-3.5">
                  <div className={`w-10 h-10 rounded-xl bg-blue-100 text-[#0A66C2] flex items-center justify-center shrink-0 ${CONTACT_ICON}`}>
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">LinkedIn Profile</div>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-slate-900 hover:text-[#0A66C2] transition-colors inline-flex items-center gap-1"
                    >
                      <span>shital-lanke</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form (Web3Forms, mailto fallback) */}
          <div
            data-reveal="right"
            style={revealDelay(200)}
            className="spotlight lg:col-span-7 bg-slate-50/80 rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-md hover:shadow-xl hover:shadow-purple-100/50 transition-shadow duration-500"
          >
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              {WEB3FORMS_KEY
                ? 'Fill out the form below and your message will land straight in my inbox.'
                : 'Fill out the form below to immediately open a pre-addressed email draft with your inquiry.'}
            </p>

            {status === 'success' ? (
              <div
                aria-live="polite"
                className="animate-modal-in flex flex-col items-center text-center py-10 px-4 rounded-2xl bg-white border border-emerald-200"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 pop-in">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-extrabold text-slate-900">Message sent!</h4>
                <p className="mt-1 text-sm text-slate-600 max-w-sm">
                  Thanks for reaching out. I&apos;ll get back to you at the email you provided.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Spam honeypot — hidden from people, filled in by bots */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#583FBC] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#583FBC] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Fullstack Developer Opportunity at Your Company"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#583FBC] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your team, technology stack, or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#583FBC] focus:border-transparent transition-all resize-none"
                />
              </div>

              {status === 'error' && (
                <div
                  role="alert"
                  className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-800"
                >
                  Sorry, the message couldn&apos;t be sent. Please try again, or{' '}
                  <button
                    type="button"
                    onClick={openMailDraft}
                    className="font-bold underline cursor-pointer"
                  >
                    send it from your email app
                  </button>
                  .
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  data-magnetic="0.2"
                  className="group btn-shine inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#583FBC] hover:bg-[#4730A3] active:scale-95 shadow-md shadow-purple-200 hover:shadow-xl hover:shadow-purple-300/60 cursor-pointer disabled:opacity-70 disabled:cursor-wait"
                >
                  {status === 'sending' ? (
                    <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12" />
                  )}
                  <span>
                    {status === 'sending'
                      ? 'Sending…'
                      : WEB3FORMS_KEY
                        ? 'Send Message'
                        : 'Send via Email Client'}
                  </span>
                </button>
              </div>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
