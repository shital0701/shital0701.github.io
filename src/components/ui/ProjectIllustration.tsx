'use client';

import React from 'react';
import {
  Users,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Shield,
  FileText,
  TrendingUp,
  Truck,
  MapPin,
  Sparkles,
  Bot,
  Terminal,
  Cpu,
  Layers,
  ArrowRight,
  Radio,
  FileCheck,
  Mic,
  Volume2,
  Image as ImageIcon,
  Workflow,
  KeyRound,
  DollarSign,
  AlertCircle,
} from 'lucide-react';

interface ProjectIllustrationProps {
  type: 'hrms' | 'vehicle-dispatch' | 'audit' | 'ecommerce' | 'vscode-ai' | 'rag-qa' | 'email-assistant' | 'voice-agent' | 'image-gen' | 'mcp-tools';
  title?: string;
}

export default function ProjectIllustration({ type }: ProjectIllustrationProps) {
  switch (type) {
    case 'hrms':
      return (
        <div className="w-full h-full min-h-[300px] max-h-[380px] bg-white/95 rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200/80 flex flex-col justify-between text-xs font-sans overflow-hidden">
          {/* Top Bar: Multi-Tenant Switcher & Active Org */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#583FBC] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                HR
              </div>
              <div>
                <div className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                  <span>Nexus Enterprise HRMS</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-cyan-100 text-cyan-800 font-medium">
                    Multi-Tenant
                  </span>
                </div>
                <div className="text-[10px] text-slate-400">Org: AcroCorp Global • 2,400+ Users</div>
              </div>
            </div>
            {/* Dynamic Color Palette Preview */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-full border border-slate-200/60">
              <span className="text-[10px] text-slate-500 font-medium mr-1">Dynamic Theme:</span>
              <div className="w-2.5 h-2.5 rounded-full bg-[#583FBC]" title="Primary Shade 1" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#7B55EC]" title="Primary Shade 2" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#54D5E4]" title="Accent Shade 1" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#38B6C4]" title="Accent Shade 2" />
              <span className="text-[9px] text-slate-400 font-semibold ml-0.5">+16 shades</span>
            </div>
          </div>

          {/* Middle: Directory Data Grid + Key Metrics */}
          <div className="grid grid-cols-3 gap-2 my-2.5">
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-[10px] text-slate-400 font-medium">Active Headcount</div>
              <div className="text-base font-extrabold text-slate-800">1,842</div>
              <div className="text-[9px] text-emerald-600 font-medium">↑ 98.4% Present Today</div>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-[10px] text-slate-400 font-medium">Pending Approvals</div>
              <div className="text-base font-extrabold text-slate-800">14</div>
              <div className="text-[9px] text-amber-600 font-medium">RBAC Hierarchical Flow</div>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-[10px] text-slate-400 font-medium">Virtual Table</div>
              <div className="text-base font-extrabold text-slate-800">60 FPS</div>
              <div className="text-[9px] text-cyan-600 font-medium">TanStack Virtualization</div>
            </div>
          </div>

          {/* Employee Directory Rows */}
          <div className="space-y-1.5 flex-1 overflow-hidden">
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-1">
              Live Employee Roster
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50/80 border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-200 text-purple-800 font-semibold text-[10px] flex items-center justify-center">
                  AK
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-[11px]">Aarav Kumar</div>
                  <div className="text-[9px] text-slate-400">Senior Systems Architect • Engineering</div>
                </div>
              </div>
              <span className="px-2 py-0.5 text-[9px] font-semibold rounded-full bg-emerald-100 text-emerald-800">
                Verified
              </span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50/80 border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-cyan-200 text-cyan-800 font-semibold text-[10px] flex items-center justify-center">
                  PS
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-[11px]">Priya Sharma</div>
                  <div className="text-[9px] text-slate-400">Product Lead • Enterprise Operations</div>
                </div>
              </div>
              <span className="px-2 py-0.5 text-[9px] font-semibold rounded-full bg-purple-100 text-purple-800">
                On Leave
              </span>
            </div>
          </div>

          {/* Bottom Bar: GenAI Policy Chatbot Preview */}
          <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between bg-gradient-to-r from-purple-50 to-cyan-50 p-2 rounded-xl border border-purple-100/60">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#583FBC] text-white flex items-center justify-center">
                <Bot className="w-3 h-3" />
              </div>
              <span className="text-[10px] font-medium text-slate-700 truncate">
                AI Policy Bot: "Maternity leave policy grants 26 weeks paid..."
              </span>
            </div>
            <span className="text-[9px] font-bold text-[#583FBC] bg-white px-2 py-0.5 rounded-full shadow-2xs">
              Streaming
            </span>
          </div>
        </div>
      );

    case 'vehicle-dispatch':
      return (
        <div className="w-full h-full min-h-[300px] max-h-[380px] bg-slate-900 rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-800 flex flex-col justify-between text-xs font-sans text-slate-100 overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white text-xs flex items-center gap-2">
                  <span>Plant Dispatch Control Center</span>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] bg-emerald-950 text-emerald-400 border border-emerald-800 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live WebSocket
                  </span>
                </div>
                <div className="text-[10px] text-slate-400">Automotive Plant Yard • 24/7 Three-Shift Operations</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[11px] font-extrabold text-cyan-400">~1,000 Vehicles/Day</div>
              <div className="text-[9px] text-slate-400">~2x Dispatch Acceleration</div>
            </div>
          </div>

          {/* Middle: Dispatch Pipeline Stages */}
          <div className="grid grid-cols-4 gap-1.5 my-2.5">
            <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
              <div className="text-[9px] text-slate-400">1. Plant Entry</div>
              <div className="font-bold text-white text-[11px]">PDI Pass</div>
              <div className="text-[8px] text-emerald-400">Scan Verified</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
              <div className="text-[9px] text-slate-400">2. Yard Bay</div>
              <div className="font-bold text-white text-[11px]">Zone C-04</div>
              <div className="text-[8px] text-cyan-400">RFID Located</div>
            </div>
            <div className="p-2 rounded-lg bg-purple-950/60 border border-purple-700/60">
              <div className="text-[9px] text-purple-300">3. Trailer Plan</div>
              <div className="font-bold text-purple-200 text-[11px]">5 km Radar</div>
              <div className="text-[8px] text-purple-300">Google Maps</div>
            </div>
            <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-700/60">
              <div className="text-[9px] text-emerald-300">4. Gate Pass</div>
              <div className="font-bold text-emerald-200 text-[11px]">Dispatched</div>
              <div className="text-[8px] text-emerald-300">Security Sign-off</div>
            </div>
          </div>

          {/* Interactive Yard Map Preview */}
          <div className="relative flex-1 bg-slate-950 rounded-xl border border-slate-800 p-2.5 flex flex-col justify-between overflow-hidden">
            {/* Map Grid Pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px]" />
            {/* Radar Circle */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-cyan-500/30 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-purple-500/40 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-emerald-400 animate-bounce" />
              </div>
            </div>

            <div className="relative z-10">
              <div className="text-[10px] font-semibold text-slate-300">Active Outbound Trailer #TR-9824</div>
              <div className="text-[9px] text-slate-400">Destination: Mumbai Central Distribution Center</div>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-400 bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
              <span>Payload: 8 SUVs Allocated</span>
              <span className="text-emerald-400 font-semibold">Load Plan 100% Balanced</span>
            </div>
          </div>
        </div>
      );

    case 'audit':
      return (
        <div className="w-full h-full min-h-[300px] max-h-[380px] bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200 flex flex-col justify-between text-xs font-sans text-slate-800 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-xs">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-xs">Enterprise Audit Management System</div>
                <div className="text-[10px] text-slate-400">Automotive Compliance & Confidential Vault</div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-teal-100 text-teal-800 border border-teal-200">
              Keycloak RBAC
            </span>
          </div>

          {/* 4-Stage Approval Workflow */}
          <div className="my-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-[10px] font-semibold text-slate-500 mb-2 flex items-center justify-between">
              <span>Multi-Tier Sign-Off Workflow</span>
              <span className="text-teal-700 font-bold">Tier 3 / 4 In Review</span>
            </div>
            <div className="grid grid-cols-4 gap-1 text-center">
              <div className="p-1.5 rounded-lg bg-emerald-100/80 border border-emerald-200 text-emerald-900">
                <div className="font-bold text-[9px]">1. Trainee</div>
                <div className="text-[8px] text-emerald-700">Submitted ✓</div>
              </div>
              <div className="p-1.5 rounded-lg bg-emerald-100/80 border border-emerald-200 text-emerald-900">
                <div className="font-bold text-[9px]">2. Auditor</div>
                <div className="text-[8px] text-emerald-700">Verified ✓</div>
              </div>
              <div className="p-1.5 rounded-lg bg-amber-100/80 border border-amber-200 text-amber-900">
                <div className="font-bold text-[9px]">3. Main Auditor</div>
                <div className="text-[8px] text-amber-700">Reviewing...</div>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-500">
                <div className="font-bold text-[9px]">4. Head Auditor</div>
                <div className="text-[8px] text-slate-400">Pending Sign-off</div>
              </div>
            </div>
          </div>

          {/* Confidential Vault & AI Assistant */}
          <div className="space-y-2 flex-1">
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-600" />
                <span className="text-[10px] font-medium text-slate-700">
                  Encrypted Evidence Vault (AWS S3)
                </span>
              </div>
              <span className="text-[9px] font-mono text-slate-400">Pre-signed URLs</span>
            </div>

            <div className="p-2 rounded-xl bg-teal-50/70 border border-teal-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-teal-700" />
                <div>
                  <div className="text-[10px] font-semibold text-teal-900">Private AI Audit Retrieval</div>
                  <div className="text-[9px] text-teal-700">Queries authorized audit checklists & historical reports</div>
                </div>
              </div>
              <span className="px-1.5 py-0.5 text-[9px] bg-white rounded font-bold text-teal-800 shadow-2xs">
                Private LLM
              </span>
            </div>
          </div>
        </div>
      );

    case 'ecommerce':
      return (
        <div className="w-full h-full min-h-[300px] max-h-[380px] bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200 flex flex-col justify-between text-xs font-sans text-slate-800 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-purple-700 text-white flex items-center justify-center font-bold text-xs">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-xs">Marketplace Seller Intelligence</div>
                <div className="text-[10px] text-slate-400">SKU Profitability, Rankings & Keyword Bidding</div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-100 text-purple-800">
              Next.js SSR
            </span>
          </div>

          {/* Revenue & Metrics Row */}
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-[9px] text-slate-400">Gross 30D Sales</div>
              <div className="font-extrabold text-sm text-slate-900">$142,850</div>
              <div className="text-[8px] text-emerald-600 font-semibold">↑ 18.2% vs Prev</div>
            </div>
            <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-[9px] text-slate-400">Keyword ACOS</div>
              <div className="font-extrabold text-sm text-slate-900">14.6%</div>
              <div className="text-[8px] text-purple-600 font-semibold">Target &lt; 18%</div>
            </div>
            <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-[9px] text-slate-400">Catalog Size</div>
              <div className="font-extrabold text-sm text-slate-900">12,400 SKUs</div>
              <div className="text-[8px] text-cyan-600 font-semibold">Row Virtualized</div>
            </div>
          </div>

          {/* Visual Trend Chart */}
          <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] font-semibold text-slate-600">
              <span>Sales & Conversion Velocity</span>
              <span className="text-[9px] text-slate-400">Daily Aggregations</span>
            </div>
            {/* Vector bar / curve chart */}
            <div className="h-16 flex items-end justify-between gap-1.5 px-2 pt-2">
              {[40, 55, 45, 68, 62, 85, 92, 78, 95, 88, 100].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-gradient-to-t from-[#583FBC] to-[#7B55EC] rounded-t-sm"
                    style={{ height: `${h * 0.55}px` }}
                  />
                  <span className="text-[7px] text-slate-400">{i + 1}d</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'vscode-ai':
      return (
        <div className="w-full h-full min-h-[300px] max-h-[380px] bg-[#1E1E1E] rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-800 flex flex-col justify-between text-xs font-mono text-slate-200 overflow-hidden">
          {/* Editor Header Bar */}
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 text-[11px]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="text-slate-400 text-[10px] ml-1">dataProcessor.ts — VS Code</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-[10px] font-sans font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>Hackathon Winner 2025</span>
            </div>
          </div>

          {/* Main Body: Code Editor + Right Assistant Panel */}
          <div className="grid grid-cols-5 gap-2 my-2 flex-1">
            {/* Left: Code with Warning Highlight */}
            <div className="col-span-3 bg-[#181818] p-2.5 rounded-lg border border-slate-800 text-[10px] space-y-1">
              <div className="text-slate-500">1  export function calculateRoute(data) &#123;</div>
              <div className="text-slate-400">2    const matrix = data.coords;</div>
              <div className="bg-amber-950/60 text-amber-200 px-1 py-0.5 rounded border-l-2 border-amber-400">
                3    // Warning: Potential quadratic re-calculation
              </div>
              <div className="text-slate-400">4    return matrix.map(optimize);</div>
              <div className="text-slate-500">5  &#125;</div>
            </div>

            {/* Right: AI Assistant Panel */}
            <div className="col-span-2 bg-[#252526] p-2.5 rounded-lg border border-slate-700/80 flex flex-col justify-between font-sans">
              <div>
                <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-[10px] mb-1">
                  <Bot className="w-3 h-3" />
                  <span>On-Premises LLM</span>
                </div>
                <div className="text-[9px] text-slate-300 leading-tight">
                  Suggested Fix: Wrap computation in memoized lookup table to reduce time from O(N²) to O(N).
                </div>
              </div>
              <button
                type="button"
                className="w-full mt-2 py-1 bg-[#583FBC] hover:bg-[#4730A3] text-white rounded text-[9px] font-semibold flex items-center justify-center gap-1"
              >
                <span>Apply Diff</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>

          {/* Bottom Bar: Privacy Guarantee */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[9px] text-slate-400 font-sans">
            <span className="flex items-center gap-1 text-emerald-400">
              <Shield className="w-3 h-3" /> 100% Private On-Premises LLM (Zero Data Leakage)
            </span>
            <span className="text-slate-500">Internal Dev Tool</span>
          </div>
        </div>
      );

    case 'rag-qa':
      return (
        <div className="w-full h-full min-h-[300px] max-h-[380px] bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200 flex flex-col justify-between text-xs font-sans text-slate-800 overflow-hidden">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-xs">Policy Document RAG Engine (POC)</div>
                <div className="text-[10px] text-slate-400">LangChain • LangGraph • Guardrails</div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-100 text-indigo-800">
              Retrieval Augmented
            </span>
          </div>

          <div className="space-y-2 my-2 flex-1">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-[9px] font-bold text-slate-500 uppercase">User Question</div>
              <div className="text-[11px] font-medium text-slate-800 mt-0.5">
                "What is the notice period required for sabbatical leave?"
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100">
              <div className="text-[9px] font-bold text-indigo-700 uppercase flex items-center justify-between">
                <span>Retrieved Context (Chunk #84)</span>
                <span className="text-emerald-700 font-bold">Similarity: 0.94</span>
              </div>
              <div className="text-[10px] text-slate-700 mt-1">
                "Sabbatical applications require 60 days written notice to the department head..."
              </div>
              <div className="mt-1 flex gap-1">
                <span className="px-1.5 py-0.5 text-[8px] bg-white rounded font-medium text-indigo-800">
                  Section 4.2 Leave Policy.pdf
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-500">
            <span className="text-emerald-600 font-medium">✓ Input/Output Guardrails Verified</span>
            <span>Proof of Concept</span>
          </div>
        </div>
      );

    case 'email-assistant':
      return (
        <div className="w-full h-full min-h-[300px] max-h-[380px] bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200 flex flex-col justify-between text-xs font-sans text-slate-800 overflow-hidden">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-600 text-white flex items-center justify-center font-bold text-xs">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-xs">AI Support Email Assistant (POC)</div>
                <div className="text-[10px] text-slate-400">Human-in-the-Loop Response Generation</div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-100 text-cyan-800">
              Human Review Gate
            </span>
          </div>

          <div className="space-y-2 my-2 flex-1">
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-[9px] text-slate-400">Incoming Ticket #8491</div>
              <div className="text-[10px] text-slate-700 font-medium mt-0.5">
                "We encountered a timeout when uploading vehicle dispatch logs for Shift B."
              </div>
            </div>

            <div className="p-2.5 bg-cyan-50/70 rounded-xl border border-cyan-100">
              <div className="text-[9px] font-bold text-cyan-800">AI Suggested Draft:</div>
              <div className="text-[10px] text-slate-700 mt-1">
                "Hello Team, Thank you for reporting this. We are investigating the Shift B log ingestion. Could you confirm if scanner terminal ID #04 was involved?"
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[9px] text-amber-600 font-semibold">Mandatory Human Approval Required</span>
            <div className="flex gap-1.5">
              <button
                type="button"
                className="px-2.5 py-1 text-[9px] rounded bg-slate-100 text-slate-700 font-semibold"
              >
                Edit Draft
              </button>
              <button
                type="button"
                className="px-2.5 py-1 text-[9px] rounded bg-[#583FBC] text-white font-semibold"
              >
                Approve & Send
              </button>
            </div>
          </div>
        </div>
      );

    case 'voice-agent':
      return (
        <div className="w-full h-full min-h-[300px] max-h-[380px] bg-slate-950 rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-800 flex flex-col justify-between text-xs font-sans text-slate-100 overflow-hidden">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
                <Mic className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white text-xs">End-to-End Voice Agent (POC)</div>
                <div className="text-[10px] text-slate-400">Speech-to-Text → LLM → Text-to-Speech</div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-950 text-purple-300 border border-purple-800">
              Audio Pipeline
            </span>
          </div>

          {/* Pulsing Audio Waveform Visual */}
          <div className="my-3 flex-1 flex flex-col items-center justify-center bg-slate-900 rounded-xl p-3 border border-slate-800">
            <div className="flex items-center gap-1.5 h-12">
              {[20, 35, 60, 90, 45, 75, 100, 80, 50, 70, 30, 60, 40, 20].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 bg-gradient-to-t from-[#583FBC] to-[#54D5E4] rounded-full animate-pulse"
                  style={{
                    height: `${h * 0.45}px`,
                    animationDelay: `${i * 80}ms`,
                  }}
                />
              ))}
            </div>
            <div className="text-[10px] text-slate-400 mt-2">Listening & Synthesizing Audio Stream...</div>
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[9px] text-slate-400">
            <span>Latency Optimized</span>
            <span className="text-cyan-400 font-semibold">Web Audio API</span>
          </div>
        </div>
      );

    case 'image-gen':
      return (
        <div className="w-full h-full min-h-[300px] max-h-[380px] bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200 flex flex-col justify-between text-xs font-sans text-slate-800 overflow-hidden">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-xs">
                <ImageIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-xs">AI Image Generation Studio (POC)</div>
                <div className="text-[10px] text-slate-400">Text & Voice Dictation → AI Image Model</div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-teal-100 text-teal-800">
              Multimodal Input
            </span>
          </div>

          <div className="my-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-lg border border-slate-200">
              <span className="text-[10px] text-slate-600 truncate">
                "Futuristic automotive logistics yard at dusk, glowing telemetry lines..."
              </span>
              <Mic className="w-3.5 h-3.5 text-teal-600 shrink-0 ml-1" />
            </div>

            <div className="h-24 mt-2 rounded-lg bg-gradient-to-tr from-cyan-900 via-indigo-900 to-purple-900 flex items-center justify-center text-white text-[10px] font-semibold">
              <div className="text-center">
                <Sparkles className="w-5 h-5 mx-auto mb-1 text-cyan-300" />
                <span>Generated Artwork Preview</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-500">
            <span>High-Resolution Export Ready</span>
            <span className="text-teal-700 font-semibold">Proof of Concept</span>
          </div>
        </div>
      );

    case 'mcp-tools':
      return (
        <div className="w-full h-full min-h-[300px] max-h-[380px] bg-slate-900 rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-800 flex flex-col justify-between text-xs font-sans text-slate-100 overflow-hidden">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#583FBC] text-white flex items-center justify-center font-bold text-xs">
                <Workflow className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white text-xs">MCP & AI Tool-Calling Exploration</div>
                <div className="text-[10px] text-slate-400">Model Context Protocol Integration</div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-950 text-purple-300 border border-purple-800">
              AI Engineering
            </span>
          </div>

          {/* Architecture nodes */}
          <div className="my-2.5 space-y-2 flex-1">
            <div className="p-2 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span className="text-[10px] font-bold text-white">LLM Assistant Agent</span>
              </div>
              <span className="text-[9px] text-cyan-400 font-mono">Tool Call Request</span>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-0.5 h-3 bg-purple-500" />
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-center">
                <div className="text-[9px] font-bold text-purple-300">Tool: DB Query</div>
                <div className="text-[8px] text-slate-400">SQL Schema Call</div>
              </div>
              <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-center">
                <div className="text-[9px] font-bold text-cyan-300">Tool: API Fetch</div>
                <div className="text-[8px] text-slate-400">REST Endpoint</div>
              </div>
              <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-center">
                <div className="text-[9px] font-bold text-emerald-300">Tool: Calculator</div>
                <div className="text-[8px] text-slate-400">Exact Arithmetic</div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[9px] text-slate-400">
            <span>JSON Schema Validation</span>
            <span className="text-purple-400 font-semibold">Technical Exploration</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
