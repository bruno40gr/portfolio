import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, X, Sun, Moon, Layers, ExternalLink, ArrowRight } from "lucide-react";

import ImpactBox from "../ui/ImpactBox";
import LogoIcon from "../ui/logoIcon";
import { COMPANY_STRIPE_LOGOSSQUARED } from "../../data/assets";

const getLogo = (name) => {
  const match = COMPANY_STRIPE_LOGOSSQUARED.find(
    (l) => l.name.toLowerCase().includes(name.toLowerCase())
  );
  return match ? match.src : null;
};

// ─── Slide Templates ──────────────────────────────────────────────────────────

const SlideTemplates = {

  // Overview: title + vision/problem/role left, impact right
  Overview: ({ title, company, vision, problem, role, impactMetrics, impactDesc, isDark }) => {
    const logoSrc = getLogo(company);
    return (
      <div className="flex flex-col justify-center h-full max-w-4xl mx-auto px-6 w-full relative z-10">
        <div className="mb-6 flex items-center gap-4">
          {logoSrc && (
            <img
              src={logoSrc}
              alt={company}
              className={`w-12 h-12 rounded-md object-cover ${!isDark ? "shadow-sm border border-slate-200" : ""}`}
            />
          )}
        </div>

        <h1 className={`text-4xl md:text-5xl xl:text-6xl font-bold mb-12 tracking-tight leading-tight ${
          isDark ? "text-white" : "text-slate-900"
        }`}>
          {title}
        </h1>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className={`text-sm font-bold uppercase tracking-widest mb-3 ${
                isDark ? "text-[#88FF00]" : "text-slate-900"
              }`}>The Vision</h2>
              <p className={`text-lg md:text-xl font-light leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>{vision}</p>
            </div>

            <div>
              <h2 className={`text-sm font-bold uppercase tracking-widest mb-3 ${
                isDark ? "text-[#88FF00]" : "text-slate-900"
              }`}>The Problem</h2>
              <p className={`text-lg font-light leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>{problem}</p>
            </div>

            <div>
              <h2 className={`text-sm font-bold uppercase tracking-widest mb-2 ${
                isDark ? "text-[#88FF00]" : "text-slate-900"
              }`}>My Role</h2>
              <p className={`text-lg font-light leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>{role}</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className={`text-sm font-bold uppercase tracking-widest mb-4 ${
              isDark ? "text-[#88FF00]" : "text-slate-900"
            }`}>The Impact</h2>
            <ImpactBox
              size="large"
              metrics={impactMetrics}
              description={impactDesc}
            />
          </div>
        </div>
      </div>
    );
  },

  // SplitMedia: text left, image/video right
  SplitMedia: ({ title, pill, role, problem, shipped, impactMetrics, impactDesc, callout, mediaUrl, mediaLink, isDark }) => (
    <div className="flex flex-col lg:flex-row h-full w-full max-w-[1800px] mx-auto relative z-10">
      <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 lg:px-16 xl:px-20 py-10 lg:py-0 overflow-y-auto">
        <div className="flex flex-col gap-8 w-full mx-auto lg:mx-0">
          <div>
            {pill && (
              <div className="mb-4 inline-block">
                <span className={`px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full border ${
                  isDark
                    ? "bg-[#88FF00]/10 text-[#88FF00] border-[#88FF00]/20"
                    : "bg-white border-slate-300 text-slate-700 shadow-sm"
                }`}>{pill}</span>
              </div>
            )}
            <h2 className={`text-3xl md:text-5xl xl:text-6xl font-bold tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}>{title}</h2>
          </div>

          {role && (
            <div>
              <h3 className={`text-sm font-bold uppercase tracking-widest mb-2 ${
                isDark ? "text-[#88FF00]" : "text-slate-900"
              }`}>My Role</h3>
              <p className={`text-lg font-light leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>{role}</p>
            </div>
          )}

          {problem && (
            <div>
              <h3 className={`text-sm font-bold uppercase tracking-widest mb-2 ${
                isDark ? "text-[#88FF00]" : "text-slate-900"
              }`}>The Problem</h3>
              <p className={`text-lg font-light leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>{problem}</p>
            </div>
          )}

          {shipped && (
            <div>
              <h3 className={`text-sm font-bold uppercase tracking-widest mb-2 ${
                isDark ? "text-[#88FF00]" : "text-slate-900"
              }`}>Shipped Product</h3>
              <p className={`text-lg font-light leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>{shipped}</p>
            </div>
          )}

          {impactMetrics && impactMetrics.length > 0 && (
            <div>
              <h3 className={`text-sm font-bold uppercase tracking-widest mb-4 ${
                isDark ? "text-[#88FF00]" : "text-slate-900"
              }`}>Impact</h3>
              <ImpactBox size="large" metrics={impactMetrics} description={impactDesc} />
            </div>
          )}

          {callout && (
            <div>
              <h3 className={`text-sm font-bold uppercase tracking-widest mb-4 ${
                isDark ? "text-[#88FF00]" : "text-slate-900"
              }`}>Status</h3>
              <div className={`rounded-xl px-6 py-4 border flex items-center gap-4 ${
                isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"
              }`}>
                <span className={`text-[10px] font-bold uppercase tracking-widest flex-shrink-0 ${
                  isDark ? "text-[#88FF00]" : "text-slate-500"
                }`}>Note</span>
                <p className={`text-sm font-light leading-snug ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}>{callout}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full lg:w-[55%] h-[50vh] lg:h-full p-4 lg:p-12 flex items-center justify-center">
        <div className="w-full h-full bg-slate-900/40 rounded-xl overflow-hidden shadow-2xl relative border border-white/5 group">
          {mediaLink ? (
            <a href={mediaLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative cursor-pointer overflow-hidden">
              <img
                src={mediaUrl}
                alt={title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/30 backdrop-blur-[2px]">
                <div className="bg-white/10 px-5 py-3 rounded-full backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-wide shadow-xl flex items-center gap-2">
                  <ExternalLink size={16} /> Open Prototype
                </div>
              </div>
            </a>
          ) : (
            <img src={mediaUrl} alt={title} className="w-full h-full object-cover" />
          )}
        </div>
      </div>
    </div>
  ),

  // FullMedia: full-bleed image or video with caption bar
  // caption: { text, link, linkLabel } — all optional
  FullMedia: ({ src, type = "image", isDark, caption }) => (
    <div className="h-full w-full max-w-[1800px] mx-auto p-6 md:p-12 relative z-10 flex items-center justify-center">
      <div className={`w-full h-full rounded-xl overflow-hidden shadow-2xl border flex flex-col relative ${
        isDark ? "bg-slate-900/50 border-white/10" : "bg-white border-slate-200"
      }`}>
        {/* Media area */}
        <div className="flex-grow w-full overflow-hidden flex items-center justify-center p-4">
          {type === "image" && (
            <img src={src} alt="Presentation media" className="w-full h-full object-contain" />
          )}
          {type === "video" && (
            <video src={src} autoPlay loop muted playsInline className="w-full h-full object-contain" />
          )}
        </div>

        {/* Caption bar — always rendered if caption prop exists */}
        {caption && (
          <div className={`w-full flex-shrink-0 border-t ${
            isDark ? "bg-slate-900/90 border-white/10 backdrop-blur-md" : "bg-slate-50 border-slate-200"
          }`}>
            <div className="px-6 py-4 flex items-start justify-between gap-8">
              {/* Left: label + description */}
              <div className="flex flex-col gap-1 min-w-0">
                {caption.label && (
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${
                    isDark ? "text-[#88FF00]" : "text-slate-500"
                  }`}>{caption.label}</span>
                )}
                {caption.text && (
                  <p className={`text-sm font-light leading-snug ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}>{caption.text}</p>
                )}
              </div>

              {/* Right: optional Figma link */}
              {caption.link && (
                <a
                  href={caption.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-shrink-0 flex items-center gap-2 text-sm font-bold tracking-wide hover:opacity-80 transition-opacity ${
                    isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {/* Figma logo */}
                  <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89474 17.6842C8.51105 17.6842 10.6316 15.5637 10.6316 12.9474C10.6316 10.331 8.51105 8.21051 5.89474 8.21051V17.6842Z" fill="#0ACF83"/>
                    <path d="M1.1579 8.21051C3.77421 8.21051 5.89474 10.331 5.89474 12.9474C5.89474 15.5637 3.77421 17.6842 1.1579 17.6842V8.21051Z" fill="#A259FF"/>
                    <path d="M1.1579 0C3.77421 0 5.89474 2.12053 5.89474 4.73684H1.1579V0Z" fill="#F24E1E"/>
                    <path d="M5.89474 0H10.6316V4.73684H5.89474V0Z" fill="#FF7262"/>
                    <path d="M1.1579 4.73684C3.77421 4.73684 5.89474 6.85737 5.89474 9.47368H1.1579V4.73684Z" fill="#1ABCFE"/>
                  </svg>
                  <span className="hover:underline">{caption.linkLabel || "See in Figma"}</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  ),

  // Pipeline: horizontal step-by-step system diagram (text-only, no image needed)
  Pipeline: ({ title, pill, subtitle, steps, callout, isDark }) => (
    <div className="flex flex-col justify-center h-full max-w-5xl mx-auto px-6 w-full relative z-10">
      <div className="mb-10">
        {pill && (
          <div className="mb-4 inline-block">
            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full border ${
              isDark
                ? "bg-[#88FF00]/10 text-[#88FF00] border-[#88FF00]/20"
                : "bg-white border-slate-300 text-slate-700 shadow-sm"
            }`}>{pill}</span>
          </div>
        )}
        <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-3 ${
          isDark ? "text-white" : "text-slate-900"
        }`}>{title}</h2>
        {subtitle && (
          <p className={`text-lg font-light max-w-2xl ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}>{subtitle}</p>
        )}
      </div>

      {/* Steps row */}
      <div className="flex items-stretch gap-0 mb-10 overflow-x-auto pb-2">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div className={`flex-1 min-w-[130px] rounded-xl p-5 flex flex-col gap-2 border ${
              step.highlight
                ? (isDark ? "bg-[#88FF00]/10 border-[#88FF00]/30" : "bg-slate-900 border-slate-900")
                : (isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200 shadow-sm")
            }`}>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${
                step.highlight
                  ? (isDark ? "text-[#88FF00]" : "text-[#88FF00]")
                  : (isDark ? "text-slate-500" : "text-slate-400")
              }`}>{String(i + 1).padStart(2, "0")}</span>
              <span className={`text-sm font-bold leading-tight ${
                step.highlight
                  ? (isDark ? "text-white" : "text-white")
                  : (isDark ? "text-white" : "text-slate-900")
              }`}>{step.name}</span>
              <span className={`text-xs font-light leading-snug mt-1 ${
                step.highlight
                  ? (isDark ? "text-slate-300" : "text-slate-300")
                  : (isDark ? "text-slate-400" : "text-slate-500")
              }`}>{step.desc}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center px-1">
                <ArrowRight size={14} className={isDark ? "text-slate-600" : "text-slate-300"} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Callout bar */}
      {callout && (
        <div className={`rounded-xl px-6 py-4 border flex items-center gap-4 ${
          isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"
        }`}>
          <span className={`text-[10px] font-bold uppercase tracking-widest flex-shrink-0 ${
            isDark ? "text-[#88FF00]" : "text-slate-500"
          }`}>Key insight</span>
          <p className={`text-sm font-light leading-snug ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}>{callout}</p>
        </div>
      )}
    </div>
  ),

  // Closing: full-width statement slide — draws the explicit line between Amazon work and Bond
  Closing: ({ headline, body, connectionItems, isDark }) => (
    <div className="flex flex-col justify-center h-full max-w-4xl mx-auto px-6 w-full relative z-10">
      <h1 className={`text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] mb-10 ${
        isDark ? "text-white" : "text-slate-900"
      }`}>{headline}</h1>

      <p className={`text-xl font-light leading-relaxed mb-12 max-w-4xl ${
        isDark ? "text-slate-300" : "text-slate-600"
      }`}>{body}</p>

      <div className={`grid ${connectionItems.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-4`}>
        {connectionItems.map((item, i) => (
          <div key={i} className={`rounded-xl p-5 border flex flex-col gap-2 ${
            isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200 shadow-sm"
          }`}>
            <div className="flex items-center gap-3">
              <span className={`text-xs font-bold uppercase tracking-widest ${
                isDark ? "text-[#88FF00]" : "text-slate-600"
              }`}>{item.title || item.from}</span>
              {item.to && (
                <>
                  <ArrowRight size={12} className={isDark ? "text-slate-600" : "text-slate-300"} />
                  <span className={`text-xs font-bold uppercase tracking-widest ${
                    isDark ? "text-slate-400" : "text-slate-400"
                  }`}>{item.to}</span>
                </>
              )}
            </div>
            <p className={`text-sm font-light leading-snug ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  ),
};

// ─── Presentation Data ────────────────────────────────────────────────────────

const PRESENTATIONS = {
  amazon: {
    title: "Amazon Case Study",
    slides: [

      // ── 1. Project Overview ──────────────────────────────────────────────
      {
        id: "amazon-overview",
        name: "Project Overview",
        render: (isDark) => SlideTemplates.Overview({
          isDark,
          company: "Amazon",
          title: "Amazon Devices Asset System",
          vision: "A unified, AI-powered platform to generate, manage, and publish marketing assets across 22 global marketplaces — with no manual handoffs.",
          problem: "AI can generate images at scale. The hard part is making them trustworthy. We had to solve metadata, reference constraints, quality gates, and feedback loops before scale was even possible.",
          role: "Led end-to-end system architecture and hands-on UX/UI across four interconnected pillars, from data ingestion through AI generation and human review.",
          impactMetrics: [
            { value: "~100k", label: "Hours saved in 2025" },
            { value: "22", label: "Global marketplaces" },
          ],
          impactDesc: ["The system eliminated over ~100,000 hours of manual work in 2025 alone, removing critical bottlenecks across the entire asset pipeline."],
        }),
      },

      // ── 2. Pillar 1: Image Builder ───────────────────────────────────────
      {
        id: "amazon-pillar-1",
        name: "Pillar 1: Image Builder",
        render: (isDark) => SlideTemplates.SplitMedia({
          isDark,
          title: "Image Builder",
          pill: "Pillar 1 · Launched",
          role: "Designed the visual editor and underlying component structure so non-designers could generate strict, brand-compliant assets globally without needing a creative team in the loop.",
          problem: "Merchandisers needed to build localized assets across 23 market/language combinations without violating brand or legal compliance. There was no shared tooling — just Photoshop templates and email threads.",
          shipped: "Image Builder — a production system with a visual editor that handles layout, copy generation, and auto-translation end to end.",
          impactMetrics: [
            { value: "~8,000", label: "Images generated" },
            { value: "~48k", label: "Hours replaced" },
          ],
          impactDesc: ["Achieved during Prime Day 2025 alone — a single campaign cycle."],
          mediaUrl: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772062490/Screenshot_2026-02-25_at_3.34.36_PM_dwqrvv.png",
          mediaLink: "https://www.figma.com/proto/Hm4V3LSFtdcJKC1e5UWYls/JAS-Image-Builder-Final-Build-Spec?page-id=0%3A1&node-id=163-36427&scaling=min-zoom&t=PcpidMXEz6GOqzKf-1&content-scaling=fixed&p=f",
        }),
      },

      // ── 3. Pillar 1 Full Diagram ─────────────────────────────────────────
      {
        id: "amazon-pillar-1-img",
        name: "Pillar 1 (System Diagram)",
        render: (isDark) => SlideTemplates.FullMedia({
          isDark,
          type: "image",
          // EMBED: Full-width system architecture diagram showing Image Builder's
          // layer structure — inputs (product data, locale rules, brand tokens) →
          // editor canvas → compliance checks → output pipeline.
          // Ideal: the "layers-nometadata" Cloudinary image you already have,
          // or a Figma export of your component/layer breakdown.
          src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1773289976/layers-nometadata_nloelx.png",
          caption: {
            label: "System Architecture",
            text: "Image Builder processes product metadata, locale rules, and brand tokens through a layered composition engine — outputting compliant, translated assets without human intervention per locale.",
            link: "https://www.figma.com/proto/Hm4V3LSFtdcJKC1e5UWYls/JAS-Image-Builder-Final-Build-Spec?page-id=0%3A1&node-id=163-36427&scaling=min-zoom&t=PcpidMXEz6GOqzKf-1&content-scaling=fixed&p=f",
            linkLabel: "Open in Figma",
          },
        }),
      },

      // ── 4. Pillar 2: Asset Manager ───────────────────────────────────────
      {
        id: "amazon-pillar-2",
        name: "Pillar 2: Asset Manager",
        render: (isDark) => SlideTemplates.SplitMedia({
          isDark,
          title: "Asset Manager",
          pill: "Pillar 2 · In Build",
          role: "Designed the catalog logic and UX to replace fragmented internal systems and the Smartsheet workarounds teams had built around them.",
          problem: "Marketing images were scattered across internal systems with no consistent naming or governance, forcing teams to track creative work in external spreadsheets. The AI pipeline had no reliable source of truth to pull from.",
          shipped: "Asset Manager — a centralized internal library that brings the entire creative catalog under governance and provides the structured metadata foundation the AI compositor depends on.",
          callout: "Slated to ship Q2 2026. Once live, this will eliminate the dependency on external tooling, giving NA and Europe total control of the Devices catalog. This will provide the metadata foundation for complete AI content generation.",
          mediaUrl: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772592239/5958a787-a37d-410e-8821-1f8584a6a20c.png",
          mediaLink: "https://www.figma.com/proto/RalVHLTD2GOTo3DY91Ow8k/JAS-ASSET-MANAGER?page-id=85%3A22371&node-id=85-22884&viewport=-1498%2C-1342%2C0.07&t=PgdR2ntUXOpXVKPs-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=85%3A22884&show-proto-sidebar=1",
        }),
      },

      // ── 5. Pillar 3: Metadata Studio ─────────────────────────────────────
      {
        id: "amazon-pillar-3",
        name: "Pillar 3: Metadata Studio",
        render: (isDark) => SlideTemplates.SplitMedia({
          isDark,
          title: "Metadata Studio",
          pill: "Pillar 3 · In Build",
          role: "Prototyped and proved AI viability for complex visual classification, shifting the org from a feasibility debate to a committed roadmap.",
          problem: "Manual metadata entry — up to 90 data points per image for regional and legal compliance — was the single largest bottleneck in the pipeline. Nothing downstream could move without it.",
          shipped: "Metadata Studio — an AI-first tool that automatically extracts image attributes (color variant, camera angle, scene type) to enforce global compliance without manual tagging.",
          callout: "Leadership, Product, and Brand teams unified around a strategic roadmap to launch a sophisticated AI tool designed to aggregate metadata from diverse Amazon-owned sources.",
          mediaUrl: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772412003/8fc680db-a6b5-4c46-ba00-f12af55faab4.png",
        }),
      },

      // ── 5a. Metadata Studio: Manual Upload UI ─────────────────────────────
      {
        id: "amazon-pillar-3-img1",
        name: "Pillar 3 (Manual Upload)",
        render: (isDark) => SlideTemplates.FullMedia({
          isDark,
          type: "image",
          src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772412234/Background_metadata_cphwlh.png",
          caption: {
            label: "The Problem",
            text: "The manual upload UI for an AI-ready background image. This illustrates the massive volume of metadata that users had to enter manually to prepare a single asset for the system.",
          },
        }),
      },

      // ── 5b. Metadata Studio: Screen Mapper ────────────────────────────────
      {
        id: "amazon-pillar-3-img2",
        name: "Pillar 3 (Screen Mapper)",
        render: (isDark) => SlideTemplates.FullMedia({
          isDark,
          type: "image",
          src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772411818/7e25e02b-1a0c-4458-81f8-e22044a1df9c.png",
          caption: {
            label: "Screen Mapper",
            text: "The screen mapper tool interface, allowing users to define the digital boundary on a physical device. Translating a physical boundary into coordinate data the AI can use for dynamic composition.",
          },
        }),
      },

      // ── 5c. Metadata Studio: Automated Composition ────────────────────────
      {
        id: "amazon-pillar-3-img3",
        name: "Pillar 3 (Automated Composition)",
        render: (isDark) => SlideTemplates.FullMedia({
          isDark,
          type: "image",
          src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772411928/4553de5d-0c9d-41d0-b126-bf3db07e532d.png",
          caption: {
            label: "Final Outcome",
            text: "Successfully placing a The Lord of the Rings screen inside an Echo Show automatically. The platform can now instantly generate accurate, localized, and compliant marketing assets on the fly without a designer opening Photoshop.",
          },
        }),
      },

      // ── 6. Pillar 4: AI Compositor (Overview) ────────────────────────────
      // ── 6. Pillar 4: AI Compositor (Overview) ────────────────────────────
      {
        id: "amazon-pillar-4",
        name: "Pillar 4: AI Compositor",
        render: (isDark) => SlideTemplates.SplitMedia({
          isDark,
          title: "AI Lifestyle Compositor",
          pill: "Pillar 4 · Launched",
          role: "Designed the human-in-the-loop review system — defining how structured feedback was captured, how reference images and device positioning constraints were encoded, and how the model improved over time.",
          problem: "Lifestyle images convert 70% better than product-on-white. But producing them manually at a global scale across thousands of SKUs was impossible. The bottleneck wasn't generation — it was getting the AI to produce outputs that met Amazon's bar consistently.",
          shipped: "AI Lifestyle Compositor — a tool trained on proprietary Amazon device data that generates photorealistic 3D lifestyle imagery and routes outputs through a structured review and retraining loop.",
          impactMetrics: [
            { value: "3,000", label: "Market-ready lifestyle assets generated by AI and curated by Creative Directors" },
            { value: "~Only 10hrs", label: "Total human review time spent for 12,000 market ready images" },
          ],
          impactDesc: [],
          mediaUrl: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772665456/a7ec2337-4f73-4b0c-932f-b66e6b73190d.png",
          mediaLink: "https://www.figma.com/proto/u5gNazpXiOCPbn8tiH5ACU/JASAI?page-id=1438%3A5102&node-id=40000015-16958&viewport=324%2C-1055%2C0.14&t=LvK2dm3PYrsudLBc-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=40000015%3A16958",
        }),
      },

      // ── 7. Compositor: Full System Diagram ───────────────────────────────
      {
        id: "amazon-pillar-4-img",
        name: "Pillar 4 (System Diagram)",
        render: (isDark) => SlideTemplates.FullMedia({
          isDark,
          type: "image",
          // EMBED: Your "layers-metadata" Cloudinary image — the full pipeline
          // diagram showing how metadata feeds into the compositor.
          // Ideal: a Figma export showing all four pillars as an interconnected
          // system, with the compositor at the end of the chain.
          src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1773290008/layers-metadata_sfcohu.png",
          caption: {
            label: "Full Pipeline",
            text: "Asset Manager provides the catalog layer. Metadata Studio tags and classifies. The Compositor ingests structured product data and reference constraints to generate compliant lifestyle imagery at scale.",
          },
        }),
      },

      // ── 7a. Compositor: Gradient Output ────────────────────────────────────
      {
        id: "amazon-compositor-gradient",
        name: "Pillar 4 (Gradient Output)",
        render: (isDark) => SlideTemplates.FullMedia({
          isDark,
          type: "image",
          src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772662326/firetv-gradient_dfwvl0.png",
          caption: {
            label: "Standard Pipeline",
            text: "Device on a gradient. The previous scalable solution, but missing the 40% higher CTR typically seen with lifestyle imagery.",
          },
        }),
      },

      // ── 7b. Compositor: AI Lifestyle Output ────────────────────────────────
      {
        id: "amazon-compositor-lifestyle",
        name: "Pillar 4 (AI Lifestyle Output)",
        render: (isDark) => SlideTemplates.FullMedia({
          isDark,
          type: "image",
          src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772662326/firetv-lifestyle_dlyenh.png",
          caption: {
            label: "AI Compositor Pipeline",
            text: "Device placed inside a realistic scene. A more sophisticated AI-generated image brings the impact of a lifestyle shot automatically at scale.",
          },
        }),
      },

      // ── 8. Compositor: How It Actually Works ─────────────────────────────
      {
        id: "amazon-compositor-pipeline",
        name: "Pillar 4 (System Deep-Dive)",
        render: (isDark) => SlideTemplates.Closing({
          isDark,
          headline: "Making sure we met the Design Bar.",
          body: "Image generation, while challenging, was not the hardest part. We had to earn trust and ensure quality standards were met. The Bar Raising tool was the best way to secure Creative Director and brand approval across all product lines. It ensured we always met design standards and could effectively replace the manual labor of photography and 3D artists. The mechanism that makes outputs trustworthy at scale.",
          connectionItems: [
            {
              title: "Defining Constraints",
              desc: "Ingesting product metadata and defining physics rules, photography angles, surface constraints, and realism.",
            },
            {
              title: "Controlled Generation",
              desc: "Setting up the guardrails. The model produces lifestyle variants using structured inputs, provided by a human in the loop.",
            },
            {
              title: "Structured Review",
              desc: "Human reviewers evaluate if the produced images meet the design bar, and if not, provide feedback to train the AI. Highly manual effort at first, but with a cadence that reduced human input as the AI became more intelligent.",
            },
          ],
        }),
      },

    ],
  },

  patreon: {
    title: "Patreon Case Study",
    slides: [

      // ── 1. Project Overview ──────────────────────────────────────────────
      {
        id: "patreon-overview",
        name: "Project Overview",
        render: (isDark) => SlideTemplates.Overview({
          isDark,
          company: "Patreon",
          title: "Patreon Studio 2.0",
          vision: "Establish a unified visual language and component library across the entire platform in an 8-week cross-functional sprint.",
          problem: "Patreon's UI was disjointed across surfaces. No common design language meant every team was solving the same problems differently, creating compounding inconsistency.",
          role: "Co-created Studio 2.0 — shaping the visual foundation, token structure, and component architecture that became Patreon's single source of truth.",
          impactMetrics: [
            { value: "8 weeks", label: "Delivery time" },
            { value: "4 Tiers", label: "Component Library" },
          ],
          impactDesc: ["Studio 2.0 became the single source of truth for all design elements across Patreon, enabling teams to build efficiently and consistently from day one."],
        }),
      },

      // ── 2. Exploration: Premium & Editorial ─────────────────────────────
      {
        id: "patreon-premium",
        name: "Exploration: Premium & Editorial",
        render: (isDark) => SlideTemplates.FullMedia({
          isDark,
          type: "image",
          // EMBED: Your "Editorial" Cloudinary image — the premium/editorial
          // direction exploration showing rich typography, large imagery,
          // and high-contrast layouts.
          src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772239871/Editorial_d4sflt.png",
          caption: {
            label: "Direction Exploration",
            text: "Editorial direction — tested a premium, publication-inspired voice with large type, high-contrast surfaces, and creator-first imagery. Pushed the brand toward cultural legitimacy.",
            link: "https://www.figma.com/design/cIMs03Alo3SmHsg0jwFVg9/Sprints-1-3?node-id=1-5&t=XJrvmUQ3jbX1TffN-1",
            linkLabel: "See in Figma",
          },
        }),
      },

      // ── 3. Exploration: Streamlining & Shapes ───────────────────────────
      {
        id: "patreon-shapes",
        name: "Exploration: Streamlining & Shapes",
        render: (isDark) => SlideTemplates.FullMedia({
          isDark,
          type: "image",
          // EMBED: Your "streamlining_and_shapes" Cloudinary image — geometric
          // and structural direction exploration, testing shape systems and
          // simplified UI components.
          src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772239961/streamlining_and_shapes_f9hr3z.png",
          caption: {
            label: "Direction Exploration",
            text: "Streamlining direction — tested a more structural, geometry-driven language. Simplified components, purposeful shape usage, and tighter information density.",
            link: "https://www.figma.com/design/WUqILSYhwsT0UPHUcAfsY0/Patreon-%E2%80%A2-Sprint-1-2?node-id=61-1786&t=kJ3hKXclKPpShKbd-1",
            linkLabel: "See in Figma",
          },
        }),
      },

      // ── 4. Exploration: Art Mosaics ──────────────────────────────────────
      {
        id: "patreon-mosaics",
        name: "Exploration: Art Mosaics",
        render: (isDark) => SlideTemplates.FullMedia({
          isDark,
          type: "image",
          // EMBED: Your "Mosaics" Cloudinary image — the art mosaic direction
          // showing creator artwork arranged in collage-style compositions
          // as a design language element.
          src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772240138/Mosaics_evaesa.png",
          caption: {
            label: "Direction Exploration",
            text: "Mosaic direction — used creator artwork itself as the design material. Collage compositions that put community at the center of the visual language, not product chrome.",
            link: "https://www.figma.com/design/tuMGvaJv3os80Ei5qVMxNw/Patreon-%E2%80%A2-Sprint-3?node-id=7-23&t=2wKH63v5kryNA8vo-1",
            linkLabel: "See in Figma",
          },
        }),
      },

      // ── 5. Exploration: Simpler UIs ──────────────────────────────────────
      {
        id: "patreon-simpler",
        name: "Exploration: Simpler UIs",
        render: (isDark) => SlideTemplates.FullMedia({
          isDark,
          type: "image",
          // EMBED: Your "Simpler" Cloudinary image — the minimal, reduced
          // UI direction showing stripped-back interfaces that prioritize
          // content over decoration.
          src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772240136/Simpler_lchukg.png",
          caption: {
            label: "Direction Exploration",
            text: "Simplified UI direction — stripped decoration to test the core information architecture. Revealed which components actually needed visual weight and which were just habit.",
            link: "https://www.figma.com/design/9nkZ73oKDOMMoO3LWRx6SO/Patreon-MetaCollective?node-id=7-2&t=1EEgEaPGF1ipj2MD-1",
            linkLabel: "See in Figma",
          },
        }),
      },

      // ── 6. Studio 2.0 Component Library ─────────────────────────────────
      {
        id: "patreon-studio",
        name: "Studio 2.0 Component Library",
        render: (isDark) => SlideTemplates.FullMedia({
          isDark,
          type: "image",
          // EMBED: Your Studio 2.0 component library Cloudinary image — a
          // wide Figma export showing the full component library: tokens,
          // atoms, molecules, organisms across the 4-tier structure.
          src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772245483/3491f0c6-f019-41e1-9205-e383213af11b.png",
          caption: {
            label: "Shipped System",
            text: "Studio 2.0 component library — 4-tier structure covering tokens, atoms, molecules, and organisms. Built in 8 weeks, adopted across product, engineering, and marketing from launch.",
            link: "https://www.figma.com/design/kyNnCjYk2XaG21kp5ITQhI/Component-Library-Sample?node-id=0-1&p=f&t=QaHINMfNHeVKXvi9-0",
            linkLabel: "See in Figma",
          },
        }),
      },
    ],
  },
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Presentation() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const presentationKey = id && PRESENTATIONS[id] ? id : "amazon";
  const presentationData = PRESENTATIONS[presentationKey];
  const slides = presentationData.slides;
  const isDark = theme === "dark";
  const activeSlideIndex = currentSlide >= slides.length ? 0 : currentSlide;

  useEffect(() => { setCurrentSlide(0); }, [presentationKey]);

  const handleNext = () => { if (activeSlideIndex < slides.length - 1) setCurrentSlide(activeSlideIndex + 1); };
  const handlePrev = () => { if (activeSlideIndex > 0) setCurrentSlide(activeSlideIndex - 1); };
  const handleClose = () => navigate("/");
  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "m") { setIsMenuOpen((prev) => !prev); return; }
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); handleNext(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); handlePrev(); }
      else if (e.key === "Escape") {
        e.preventDefault();
        if (isMenuOpen) setIsMenuOpen(false);
        else handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, isMenuOpen, slides.length]);

  return (
    <div className={`h-screen w-screen flex flex-col text-left relative overflow-hidden font-sans transition-colors duration-500 ${
      isDark ? "bg-[#2d255c] selection:bg-[#88FF00] selection:text-black" : "bg-[#E6E7E8] selection:bg-blue-200 selection:text-black"
    }`}>

      {/* Background Effects */}
      {isDark && (
        <>
          <div className="absolute inset-0 pointer-events-none z-0" style={{ background: "radial-gradient(circle at 50% 50%, transparent 10%, rgba(10,8,20,0.95) 90%)" }} />
          <svg className="absolute -top-[5%] -left-[5%] w-[110%] h-[110%] pointer-events-none opacity-[0.30] z-0 animate-grain" xmlns="http://www.w3.org/2000/svg">
            <filter id="grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain)" />
          </svg>
          <div className="absolute inset-0 pointer-events-none z-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(136,255,0,0.15) 0%, transparent 65%)" }} />
        </>
      )}

      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50 pointer-events-auto">
        <div className="flex items-center gap-6">
          <div className={`opacity-50 hover:opacity-100 transition-opacity cursor-pointer ${isDark ? "" : "grayscale mix-blend-multiply"}`} onClick={() => navigate("/")} title="Go Home">
            <LogoIcon theme={isDark ? "dark" : "light"} />
          </div>
          <button
            onClick={toggleTheme}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isDark ? "bg-white/10 hover:bg-white/20 text-slate-300" : "bg-white border border-slate-300 shadow-sm text-slate-600 hover:text-slate-900"
            }`}
            title="Toggle Theme"
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`w-8 h-8 rounded-full flex items-center justify-center opacity-20 hover:opacity-100 transition-all ${
              isDark ? "text-slate-300 hover:bg-white/10" : "text-slate-600 hover:bg-white border border-transparent hover:border-slate-300"
            }`}
            title="Presenter Menu (M)"
          >
            <Layers size={14} />
          </button>
          <button
            onClick={handleClose}
            className={`flex items-center gap-3 transition-colors group ${
              isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span className="font-medium text-sm tracking-wide hidden sm:inline">Close</span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isDark ? "bg-white/10 group-hover:bg-white/20" : "bg-white border border-slate-300 shadow-sm"
            }`}>
              <X size={16} />
            </div>
          </button>
        </div>
      </header>

      {/* Presenter Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 right-6 z-[60] animate-fade-in w-64 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <div className={`p-3 rounded-xl shadow-2xl backdrop-blur-xl border flex flex-col gap-4 ${
            isDark ? "bg-slate-900/95 border-slate-700/50" : "bg-white/95 border-slate-200"
          }`}>
            <div>
              <div className={`px-2 py-1 text-[10px] font-bold uppercase tracking-widest mb-1 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                Decks
              </div>
              <div className="flex flex-col gap-1">
                {Object.keys(PRESENTATIONS).map((key) => (
                  <button
                    key={key}
                    onClick={() => { navigate(`/presentation/${key}`); if (presentationKey === key) setIsMenuOpen(false); }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      presentationKey === key
                        ? (isDark ? "bg-[#88FF00]/10 text-[#88FF00]" : "bg-slate-100 text-slate-900")
                        : (isDark ? "text-slate-300 hover:bg-white/5" : "text-slate-600 hover:bg-slate-50")
                    }`}
                  >
                    {PRESENTATIONS[key].title}
                  </button>
                ))}
              </div>
            </div>

            <div className={`pt-3 border-t ${isDark ? "border-slate-800" : "border-slate-100"}`}>
              <div className={`px-2 py-1 text-[10px] font-bold uppercase tracking-widest mb-1 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                Slides Index
              </div>
              <div className="flex flex-col gap-0.5">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => { setCurrentSlide(idx); setIsMenuOpen(false); }}
                    className={`w-full flex items-center gap-3 text-left px-3 py-1.5 rounded-md text-[13px] transition-colors ${
                      activeSlideIndex === idx
                        ? (isDark ? "text-white bg-white/5" : "text-slate-900 bg-slate-50 font-bold")
                        : (isDark ? "text-slate-400 hover:text-slate-200 hover:bg-white/5" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50")
                    }`}
                  >
                    <span className={`text-[10px] font-mono ${activeSlideIndex === idx ? (isDark ? "text-[#88FF00]" : "text-blue-600") : "opacity-50"}`}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{slide.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide Content */}
      <main className="flex-grow w-full h-full relative overflow-hidden flex items-center z-10">
        <div key={`${presentationKey}-${activeSlideIndex}`} className="w-full h-full animate-fade-in flex items-center pt-20 pb-24 lg:py-16">
          {slides[activeSlideIndex].render(isDark)}
        </div>
      </main>

      {/* Footer / Controls */}
      <footer className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-center z-50 pointer-events-auto">
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeSlideIndex
                  ? (isDark ? "w-8 bg-[#88FF00]" : "w-8 bg-slate-900")
                  : (isDark ? "w-2 bg-slate-600 hover:bg-slate-400" : "w-2 bg-slate-300 hover:bg-slate-400")
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            disabled={activeSlideIndex === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all ${
              activeSlideIndex === 0
                ? (isDark ? "text-slate-600 bg-transparent cursor-not-allowed" : "text-slate-400 bg-transparent cursor-not-allowed")
                : (isDark ? "text-slate-200 bg-white/5 hover:bg-white/10" : "text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 shadow-sm")
            }`}
          >
            <ChevronLeft size={16} /> Prev
          </button>
          <button
            onClick={handleNext}
            disabled={activeSlideIndex === slides.length - 1}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-bold text-sm transition-all ${
              activeSlideIndex === slides.length - 1
                ? (isDark ? "text-slate-600 bg-transparent cursor-not-allowed" : "text-slate-400 bg-transparent cursor-not-allowed")
                : (isDark ? "text-black bg-[#88FF00] hover:scale-105" : "text-white bg-slate-900 hover:scale-105 shadow-md")
            }`}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </footer>
    </div>
  );
}