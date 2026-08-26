import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, X, Sun, Moon, Layers, ExternalLink, ArrowRight, House } from "lucide-react";

import ImpactBox from "../ui/ImpactBox";
import LogoIcon from "../ui/logoIcon";
import Button from "../ui/button";
import { COMPANY_STRIPE_LOGOS, COMPANY_STRIPE_LOGOSSQUARED } from "../../data/assets";

const getLogo = (name) => {
  const match = COMPANY_STRIPE_LOGOSSQUARED.find(
    (l) => l.name.toLowerCase().includes(name.toLowerCase())
  );
  return match ? match.src : null;
};

const PRESENTATION_BODY_TEXT_CLASS = "text-lg md:text-2xl font-light leading-relaxed";
const PRESENTATION_PROBLEM_TEXT_CLASS = "text-lg md:text-2xl leading-relaxed";

const SectionHeading = ({ title, signifier, variant = "pillar", isDark }) => (
  <div className="flex flex-col gap-3">
    {signifier && (
      <div className="flex items-center gap-3">
        <span className={`text-xs font-semibold tracking-[0.28em] uppercase ${
          isDark ? "text-[#88FF00]" : "text-slate-500"
        }`}>
          {signifier}
        </span>
        <div className={`h-px flex-1 ${isDark ? "bg-white/10" : "bg-slate-300"}`} />
      </div>
    )}

    <h2 className={`${variant === "supporting" ? "project-title--supporting" : "project-title--feature"} ${
      isDark ? "text-white" : "text-slate-900"
    }`}>
      {title}
    </h2>
  </div>
);

// ─── Slide Templates ──────────────────────────────────────────────────────────

const SlideTemplates = {

  // Intro: minimal personal opener with compact anchor cards
  Intro: ({ eyebrow, title, body, anchors = [], actions = [], isDark }) => (
    <div className="flex flex-col justify-center h-full max-w-4xl mx-auto px-6 w-full relative z-10">
      {eyebrow && (
        <div className="mb-5 inline-block">
          <span className={`px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full border ${
            isDark
              ? "bg-[#88FF00]/10 text-[#88FF00] border-[#88FF00]/20"
              : "bg-white border-slate-300 text-slate-700 shadow-sm"
          }`}>{eyebrow}</span>
        </div>
      )}

      <h1 className={`text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.02] mb-6 ${
        isDark ? "text-white" : "text-slate-900"
      }`}>
        {title}
      </h1>

      {body && (
        <p className={`text-xl md:text-2xl font-light leading-relaxed max-w-3xl mb-10 ${
          isDark ? "text-slate-300" : "text-slate-600"
        }`}>
          {body}
        </p>
      )}

      {anchors.length > 0 && (
        <div className={`grid ${anchors.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-4`}>
          {anchors.map((item, i) => (
            <div key={i} className={`rounded-xl p-5 border ${
              isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${
                isDark ? "text-[#88FF00]" : "text-slate-500"
              }`}>{item.label}</div>
              <p className={`text-sm font-light leading-snug ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>{item.text}</p>
            </div>
          ))}
        </div>
      )}

      {actions.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-3">
          {actions.map((action, i) => (
            action.href ? (
              <Button
                key={i}
                href={action.href}
                variant={action.variant || "outline"}
                size="sm"
                className={action.className || "rounded-full"}
              >
                {action.label}
              </Button>
            ) : (
              <Button
                key={i}
                onClick={action.onClick}
                variant={action.variant || "outline"}
                size="sm"
                className={action.className || "rounded-full"}
                disabled={action.disabled}
              >
                {action.label}
              </Button>
            )
          ))}
        </div>
      )}
    </div>
  ),

  PortfolioHeroIntro: ({ onAmazonClick, onHeyCohenClick, isDark }) => (
    <div className="flex flex-col justify-center items-center h-full w-full text-center px-6 relative z-10">
      <div className="max-w-4xl w-full hero-stack relative z-10">
        <img
          src="https://res.cloudinary.com/diy08lj9x/image/upload/v1772648447/bruno-logo-whitewong_q7cxxn.png"
          alt="Bruno Wong Marchena"
          className="hero-logo glitch-effect mx-auto w-full max-w-[240px] md:w-[25vw] md:max-w-[430px]"
        />

        <div className="max-w-3xl mx-auto mt-6 md:mt-[clamp(1.5rem,2.5vh,2.5rem)]">
          <h1 className={`font-light leading-snug text-[1.6rem] md:text-[clamp(1.15rem,2vw,1.75rem)] mb-4 md:mb-[clamp(0.75rem,1.5vh,1.5rem)] ${
            isDark ? "text-slate-300" : "text-slate-800"
          }`}>
            Usually the only designer in the room. Lead design on engineering-heavy SaaS and B2B products.
          </h1>
          <p className={`font-light leading-relaxed max-w-xl mx-auto text-[1.4rem] md:text-[clamp(0.9rem,1.3vw,1.2rem)] ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}>
            I&apos;ve automated global team workflows at Amazon, made medicine delivery more affordable for patients in healthcare logistics, and helped creators monetize their expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:flex md:flex-wrap place-items-center md:justify-center md:items-center gap-x-8 gap-y-10 md:gap-[clamp(1.5rem,3vw,4rem)] mt-5 md:mt-[clamp(1.5rem,3vh,3rem)] mb-12 md:mb-[clamp(1.2rem,3vh,2.5rem)] z-10 relative w-fit md:w-full max-w-4xl mx-auto px-4 md:px-0">
          {COMPANY_STRIPE_LOGOS.map((logo, index) => (
            <div key={index} className="flex items-center justify-center opacity-80 cursor-default">
              <img
                src={logo.src}
                alt={logo.name}
                className={`object-contain h-10 sm:h-12 md:h-[clamp(2rem,2.8vw,3.85rem)] ${
                  isDark ? "brightness-0 invert" : ""
                }`}
              />
            </div>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <Button onClick={onAmazonClick} variant="primary" size="md" className="rounded-full">
            View Amazon Devices project
          </Button>
          <Button onClick={onHeyCohenClick} variant="outline" size="md" className="rounded-full">
            View Hey, Cohen project
          </Button>
        </div>
      </div>
    </div>
  ),

  ProjectHero: ({ title, meta, body, metric, metricLabel, metrics = [], src, isDark, onImageClick, actions = [], detailList = [] }) => (
    <div className="h-full w-full max-w-[1800px] mx-auto px-6 md:px-10 lg:px-16 py-10 relative z-10 flex items-center">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center w-full">
        <div className="flex flex-col justify-center">
          {meta && (
            <p className={`text-sm md:text-base font-light leading-relaxed mb-4 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}>
              {meta}
            </p>
          )}

          <h1 className={`text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.02] mb-6 ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {title}
          </h1>

          {body && (
            <p className={`text-lg md:text-2xl font-light leading-relaxed max-w-2xl ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}>
              {body}
            </p>
          )}

          {detailList.length > 0 && (
            <div className="mt-6 space-y-4 max-w-2xl">
              {detailList.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-xl border px-5 py-4 ${
                    isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <h3 className={`text-base md:text-lg font-semibold mb-1 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm md:text-base font-light leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {metrics.length > 0 && (
            <div className="mt-8 flex flex-col gap-3 max-w-xl">
              {metrics.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-xl border px-5 py-4 ${
                    isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <div className={`text-3xl md:text-4xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                    {item.value}
                  </div>
                  <div className={`text-sm md:text-base font-light leading-snug mt-2 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {metrics.length === 0 && (metric || metricLabel) && (
            <div className="mt-8">
              {metric && (
                <div className={`text-3xl md:text-5xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                  {metric}
                </div>
              )}
              {metricLabel && (
                <div className={`text-sm md:text-base font-light leading-snug mt-2 max-w-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  {metricLabel}
                </div>
              )}
            </div>
          )}

          {actions.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  onClick={action.onClick}
                  href={action.href}
                  variant={action.variant || "outline"}
                  size="md"
                  className="rounded-full"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="min-h-[320px] lg:min-h-[60vh] flex items-center justify-center">
          <button
            type="button"
            onClick={() => onImageClick?.(src, title)}
            className="block w-full h-full bg-transparent border-0 p-0 cursor-zoom-in"
          >
            <img src={src} alt={title} className="w-full h-full object-contain" />
          </button>
        </div>
      </div>
    </div>
  ),

  PortfolioHero: ({ label, body, metric, metricLabel, src, isDark, onImageClick }) => (
    <div className="h-full w-full max-w-[1800px] mx-auto p-6 md:p-12 relative z-10 flex items-center justify-center">
      <div className={`w-full h-full rounded-xl overflow-hidden shadow-2xl relative ${
        isDark ? "bg-transparent" : "bg-transparent"
      }`}>
        <div className="grid lg:grid-cols-[1.3fr_0.9fr] h-full">
          <div className={`p-8 md:p-10 lg:p-12 flex flex-col justify-center ${
            isDark ? "bg-slate-950" : "bg-white"
          }`}>
            <div className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${
              isDark ? "text-[#88FF00]" : "text-slate-700"
            }`}>{label}</div>
            <p className={`text-2xl md:text-3xl xl:text-4xl font-light leading-tight mb-6 ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              {body}
            </p>
            {(metric || metricLabel) && (
              <div className={`inline-flex flex-col rounded-xl border px-5 py-4 self-start ${
                isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-50"
              }`}>
                {metric && <span className={`text-3xl md:text-4xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>{metric}</span>}
                {metricLabel && <span className={`text-sm font-light leading-snug mt-1 ${isDark ? "text-slate-300" : "text-slate-600"}`}>{metricLabel}</span>}
              </div>
            )}
          </div>

          <div className="min-h-[280px] lg:min-h-0">
            <button
              type="button"
              onClick={() => onImageClick?.(src, label || "Presentation media")}
              className="block w-full h-full bg-transparent border-0 p-0 cursor-zoom-in"
            >
              <img src={src} alt="Presentation media" className="w-full h-full object-contain" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ),

  PortfolioSplit: ({ title, problem, body, mediaUrl, mediaLink, metrics = [], actions = [], isDark, onImageClick, signifier, titleVariant = "pillar", mediaLayout = "showcase" }) => (
    <div className={`flex h-full w-full max-w-[1800px] mx-auto relative z-10 ${mediaLayout === "content-only-centered" ? "items-center justify-center" : "flex-col lg:flex-row"}`}>
      <div className={`${mediaLayout === "content-only-centered" ? "w-full max-w-5xl px-8 lg:px-16 xl:px-20 py-8" : "w-full lg:w-[42%] flex flex-col justify-center px-8 lg:px-16 xl:px-20 py-8 lg:py-0 overflow-y-auto"} ${mediaLayout === "content-only-centered" ? "flex flex-col justify-center" : ""}`}>
        <div className={`flex flex-col gap-5 w-full ${mediaLayout === "content-only-centered" ? "mx-auto items-center text-center" : "mx-auto lg:mx-0"}`}>
          <SectionHeading
            title={title}
            signifier={signifier}
            variant={titleVariant}
            isDark={isDark}
          />

          {problem && (
            <p className={`${PRESENTATION_PROBLEM_TEXT_CLASS} ${
              isDark ? "text-[#88FF00]" : "text-slate-900"
            }`}>
              {problem}
            </p>
          )}

          {body && (
            <p className={`${PRESENTATION_BODY_TEXT_CLASS} ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}>
              {body}
            </p>
          )}

          {actions.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-1">
              {actions.map((action, index) => (
                <a
                  key={index}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    action.variant === "primary"
                      ? (isDark
                        ? "bg-[var(--brand-accent)] text-black hover:bg-[#76E600]"
                        : "bg-slate-900 text-white hover:bg-slate-700")
                      : (isDark
                        ? "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                        : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50")
                  }`}
                >
                  {action.label}
                </a>
              ))}
            </div>
          )}

          {metrics.length > 0 && (
            <div className={`pt-1 ${mediaLayout === "content-only-centered" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full" : "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3"}`}>
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`rounded-xl border px-4 py-3 min-w-0 ${
                    isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <div className={`text-2xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                    {metric.value}
                  </div>
                  <div className={`text-xs font-light leading-snug mt-1 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {mediaLayout !== "content-only-centered" && (
      <div className="w-full lg:w-[58%] h-[48vh] lg:h-full p-4 lg:p-12 flex items-center justify-center">
        <div className="w-full h-full relative group">
          {mediaLink ? (
            <div className="block w-full h-full relative overflow-hidden">
              <img
                src={mediaUrl}
                alt={title}
                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/30 backdrop-blur-[2px]">
                <button
                  type="button"
                  onClick={() => onImageClick?.(mediaUrl, title)}
                  className="bg-white/10 px-5 py-3 rounded-full backdrop-blur-sm border border-white/20 text-white font-bold text-sm tracking-wide shadow-card"
                >
                  View Full Image
                </button>
                <a
                  href={mediaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 px-5 py-3 rounded-full backdrop-blur-sm border border-white/20 text-white font-bold text-sm tracking-wide shadow-card flex items-center gap-2"
                >
                  <ExternalLink size={16} /> Open Prototype
                </a>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => onImageClick?.(mediaUrl, title)}
              className="block w-full h-full bg-transparent border-0 p-0 cursor-zoom-in"
            >
              <img src={mediaUrl} alt={title} className="w-full h-full object-contain" />
            </button>
          )}
        </div>
      </div>
      )}
    </div>
  ),

  PortfolioConnector: ({ title, problem, body, src, caption, isDark, onImageClick, signifier, titleVariant = "supporting" }) => (
    <div className="flex flex-col lg:flex-row h-full w-full max-w-[1800px] mx-auto relative z-10">
      <div className="w-full lg:w-[40%] flex flex-col justify-center px-8 lg:px-16 xl:px-20 py-8 lg:py-0 overflow-y-auto">
        <div className="flex flex-col gap-5 w-full mx-auto lg:mx-0">
          <SectionHeading
            title={title}
            signifier={signifier}
            variant={titleVariant}
            isDark={isDark}
          />

          {problem && (
            <p className={`${PRESENTATION_PROBLEM_TEXT_CLASS} ${
              isDark ? "text-[#88FF00]" : "text-slate-900"
            }`}>
              {problem}
            </p>
          )}

          {body && (
            <p className={`${PRESENTATION_BODY_TEXT_CLASS} ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}>
              {body}
            </p>
          )}
        </div>
      </div>

      <div className="w-full lg:w-[60%] h-[48vh] lg:h-full p-4 lg:p-12 flex items-center justify-center">
        <div className="w-full h-full flex flex-col">
          <div className="flex-grow w-full flex items-center justify-center">
            <button
              type="button"
              onClick={() => onImageClick?.(src, title)}
              className="block w-full h-full bg-transparent border-0 p-0 cursor-zoom-in"
            >
              <img src={src} alt={title} className="w-full h-full object-contain" />
            </button>
          </div>
          {caption && (
            <div className="w-full flex-shrink-0">
              <div className="px-6 py-4">
                <p className={`text-sm font-light leading-snug ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}>{caption}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  ),

  PortfolioComparison: ({ title, items, isDark, onImageClick, signifier, titleVariant = "supporting" }) => (
    <div className="flex flex-col justify-center h-full w-full max-w-[1800px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
      <div className="mb-8 md:mb-10">
        <SectionHeading
          title={title}
          signifier={signifier}
          variant={titleVariant}
          isDark={isDark}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden ${
              isDark ? "bg-transparent" : "bg-transparent"
            }`}
          >
            <div className="aspect-[16/10] bg-transparent overflow-hidden">
              <button
                type="button"
                onClick={() => onImageClick?.(item.src, item.label)}
                className="block w-full h-full bg-transparent border-0 p-0 cursor-zoom-in"
              >
                <img src={item.src} alt={item.label} className="w-full h-full object-contain" />
              </button>
            </div>
            <div className="p-5 md:p-6">
              <h3 className={`text-xl md:text-2xl font-semibold leading-tight mb-3 ${
                isDark ? "text-white" : "text-slate-900"
              }`}>{item.title || item.label}</h3>
              <p className={`text-lg font-light leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>
                {item.text}
              </p>
              {item.impact && (
                <div className={`mt-4 inline-flex flex-col rounded-xl border px-4 py-3 ${
                  isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-50"
                }`}>
                  <span className={`text-2xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                    {item.impact.value}
                  </span>
                  <span className={`text-sm font-light leading-snug mt-1 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {item.impact.label}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

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
  SplitMedia: ({ title, pill, role, problem, shipped, shippedLabel = "Shipped Product", impactMetrics, impactDesc, callout, mediaUrl, mediaLink, isDark }) => (
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
              }`}>{shippedLabel}</h3>
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
        <div className="w-full h-full relative group">
          {mediaLink ? (
            <a href={mediaLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative cursor-pointer overflow-hidden">
              <img
                src={mediaUrl}
                alt={title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/30 backdrop-blur-[2px]">
                <div className="bg-white/10 px-5 py-3 rounded-full backdrop-blur-sm border border-white/20 text-white font-bold text-sm tracking-wide shadow-card flex items-center gap-2">
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
  FullMedia: ({ src, type = "image", isDark, caption, onImageClick }) => (
    <div className="h-full w-full max-w-[1800px] mx-auto p-6 md:p-12 relative z-10 flex items-center justify-center">
      <div className="w-full h-full flex flex-col relative">
        {/* Media area */}
        <div className="flex-grow w-full flex items-center justify-center p-4">
          {type === "image" && (
            <button
              type="button"
              onClick={() => onImageClick?.(src, caption?.label || "Presentation media")}
              className="block w-full h-full bg-transparent border-0 p-0 cursor-zoom-in"
            >
              <img src={src} alt="Presentation media" className="w-full h-full object-contain" />
            </button>
          )}
          {type === "video" && (
            <video src={src} autoPlay loop muted playsInline className="w-full h-full object-contain" />
          )}
        </div>

        {/* Caption bar — always rendered if caption prop exists */}
        {caption && (
          <div className={`w-full flex-shrink-0 ${
            isDark ? "bg-slate-900/90 backdrop-blur-md" : "bg-slate-50"
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
    title: "Amazon Devices Asset Manager",
    slides: [
      {
        id: "amazon-intro",
        name: "Amazon Devices Asset System",
        render: (isDark, _goToAmazon, goToHeyCohen, onImageClick) => SlideTemplates.ProjectHero({
          isDark,
          title: "Amazon Devices Asset System",
          meta: "Lead Designer · 16+ Engineers, 2 Product Managers",
          body: "The device is placed inside a realistic scene generated by the model, bringing the impact of lifestyle imagery to a much larger volume of creative. This is a real campaign running on Amazon.com. The creative came through a set of tools my team had been building to handle a huge amount of campaign production.",
          metric: "~8,000",
          metricLabel: "Images generated for Prime Day 2025",
          src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772662326/firetv-lifestyle_dlyenh.png",
          onImageClick,
          
        }),
      },
      // Speaker hook: There was a lot underneath this. The first problem was simple. We could not keep producing this amount of creative manually.
      {
        id: "portfolio-image-builder",
        name: "Image Builder",
        render: (isDark) => SlideTemplates.PortfolioSplit({
          isDark,
          signifier: "Project I",
          title: "Image Builder",
          problem: "A promotional image required  thousands of images across products, countries, languages, and placements. That work moved through Photoshop, designers, copywriters, translators, and manual handoffs.",
          body: "I designed Image Builder around reusable components and rules so marketers could generate those variations themselves. ",
          
          metrics: [
            { value: "~8,000", label: "Images generated" },
            { value: "~48k", label: "Hours replaced" },
          ],
          mediaUrl: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772062490/Screenshot_2026-02-25_at_3.34.36_PM_dwqrvv.png",
          mediaLink: "https://www.figma.com/proto/Hm4V3LSFtdcJKC1e5UWYls/JAS-Image-Builder-Final-Build-Spec?page-id=0%3A1&node-id=163-36427&scaling=min-zoom&t=PcpidMXEz6GOqzKf-1&content-scaling=fixed&p=f",
          actions: [
            { label: "View Figma File", href: "https://www.figma.com/design/Hm4V3LSFtdcJKC1e5UWYls/JAS-Image-Builder-Final-Build-Spec?page-id=0%3A1&node-id=163-36427", variant: "secondary" },
            { label: "Play with Prototype", href: "https://www.figma.com/proto/Hm4V3LSFtdcJKC1e5UWYls/JAS-Image-Builder-Final-Build-Spec?page-id=0%3A1&node-id=163-36427&scaling=min-zoom&t=PcpidMXEz6GOqzKf-1&content-scaling=fixed&p=f", variant: "primary" },
          ],
        }),
      },
      {
        id: "portfolio-image-builder-connector",
        name: "Structured Composition",
        render: (isDark) => SlideTemplates.PortfolioConnector({
          isDark,
          titleVariant: "supporting",
          title: "All of this depended on having the right product and asset information.",
          body: "The builder needed to know which product was being used, which version was correct for each market, and how that asset should behave inside the composition.",
          src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1773289976/layers-nometadata_nloelx.png",
        }),
      },
      // Speaker hook: Once we could create thousands of images, we had thousands of images to keep track of. The way we were managing them was pretty messy.
      {
        id: "portfolio-asset-manager",
        name: "Asset Manager",
        render: (isDark) => SlideTemplates.PortfolioSplit({
          isDark,
          signifier: "Project II",
          title: "Asset Manager",
          problem: "Images were spread across different internal tools, and teams had built spreadsheets around them to fill in the gaps.",
          body: "I designed a centralized experience and solved how teams could find assets, understand what they were looking at, review them, and track where they were being used.",
          actions: [
            { label: "View Figma Project", href: "https://www.figma.com/design/RalVHLTD2GOTo3DY91Ow8k/JAS-ASSET-MANAGER?page-id=85%3A22371&node-id=85-22884", variant: "secondary" },
            { label: "Play with Prototype", href: "https://www.figma.com/proto/RalVHLTD2GOTo3DY91Ow8k/JAS-ASSET-MANAGER?page-id=85%3A22371&node-id=85-22884&viewport=-1498%2C-1342%2C0.07&t=PgdR2ntUXOpXVKPs-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=85%3A22884&show-proto-sidebar=1", variant: "primary" },
          ],
          mediaUrl: "https://res.cloudinary.com/diy08lj9x/image/upload/v1785167948/hero_asset_browser_ee1vwu.png",
          mediaLink: "https://www.figma.com/proto/RalVHLTD2GOTo3DY91Ow8k/JAS-ASSET-MANAGER?page-id=85%3A22371&node-id=85-22884&viewport=-1498%2C-1342%2C0.07&t=PgdR2ntUXOpXVKPs-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=85%3A22884&show-proto-sidebar=1",
        }),
      },
      // Speaker hook: Having the images in one place helped. Then we ran into another problem. Storing an image does not mean the software knows much about what is inside it.
      {
        id: "portfolio-metadata-studio",
        name: "Metadata Studio",
        render: (isDark) => SlideTemplates.PortfolioSplit({
          isDark,
          signifier: "Project III",
          title: "Metadata Studio",
          problem: "Images of devices, backgrounds, logos, needed dozens of pieces of information to be automated. Design technologists were entering a lot of that information by hand.",
          body: "I worked on (AI) ways for the model to read more of that information from the images themselves, effectively removing the human from the mechanical process.",
          actions: [
            { label: "View Figma File", href: "https://www.figma.com/design/u5gNazpXiOCPbn8tiH5ACU/JASAI?node-id=1536-16654&t=BC39GQWaw7Yk0f3h-1", variant: "secondary" },
          ],
          // TODO: Replace this fallback with Bruno's strongest screenshot showing the pink reference-image regions.
          mediaUrl: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772412003/8fc680db-a6b5-4c46-ba00-f12af55faab4.png",
        }),
      },
      {
        id: "portfolio-metadata-connector",
        name: "Structured Inputs",
        render: (isDark) => SlideTemplates.PortfolioConnector({
          isDark,
          titleVariant: "supporting",
          title: "We could now assemble lifestyle images",
          body: "Metadata Studio gave the system a structured understanding of every part of the composition, including product, screen, logo, copy, layout rules, and background.",
          src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1773290008/layers-metadata_sfcohu.png",
        }),
      },
      // Speaker hook: Better inputs helped. The next question was whether we could trust the generated work enough to use it in real campaigns.
      {
        id: "portfolio-ai-compositor",
        name: "AI Lifestyle Compositor",
        render: (isDark) => SlideTemplates.PortfolioSplit({
          isDark,
          signifier: "Project IV",
          title: "AI Lifestyle Compositor",
          problem: "How do we trust AI to produce campaign-ready creative without requiring a Creative Director to inspect every single output?",
          body: "I designed a review flow that captured why Creative Directors approved or rejected generated images, turning their judgment into structured feedback the model improved from.",
          actions: [
            { label: "View Figma File", href: "https://www.figma.com/design/u5gNazpXiOCPbn8tiH5ACU/JASAI?page-id=1438%3A5102&node-id=40000015-16958", variant: "secondary" },
            { label: "Play with Prototype", href: "https://www.figma.com/proto/u5gNazpXiOCPbn8tiH5ACU/JASAI?page-id=1438%3A5102&node-id=40000015-16958&viewport=324%2C-1055%2C0.14&t=LvK2dm3PYrsudLBc-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=40000015%3A16958", variant: "primary" },
          ],
          metrics: [
            { value: "12,000", label: "Variations per batch" },
            { value: "3,000", label: "Director-approved assets shipped" },
            { value: "30 days → 10 hrs → 1.25 hrs", label: "Creative Director review time" },
          ],
          mediaUrl: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772665456/a7ec2337-4f73-4b0c-932f-b66e6b73190d.png",
          mediaLink: "https://www.figma.com/proto/u5gNazpXiOCPbn8tiH5ACU/JASAI?page-id=1438%3A5102&node-id=40000015-16958&viewport=324%2C-1055%2C0.14&t=LvK2dm3PYrsudLBc-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=40000015%3A16958",
        }),
      },
      {
        id: "portfolio-ai-compositor-comparison",
        name: "Before and After",
        render: (isDark) => SlideTemplates.PortfolioComparison({
          isDark,
          titleVariant: "supporting",
          title: "Simple asset to lifestyle asset",
          items: [
            {
              title: "Simple Image Builder-produced asset",
              src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772662326/firetv-gradient_dfwvl0.png",
              text: "This was the scalable baseline: a clean device asset generated quickly, but without the contextual storytelling that usually drives stronger engagement.",
            },
            {
              title: "Lifestyle asset",
              src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772662326/firetv-lifestyle_dlyenh.png",
              text: "The device is placed inside a realistic scene generated by the model, bringing the performance advantage of lifestyle imagery into a scalable production system.",
              impact: {
                value: "+40% CTR",
                label: "Lifestyle imagery typically outperformed the simpler asset treatment",
              },
            },
          ],
        }),
      },
      {
        id: "portfolio-complete-system",
        name: "Where This Was Heading",
        render: (isDark) => SlideTemplates.PortfolioSplit({
          isDark,
          titleVariant: "supporting",
          title: "Northstar Vision",
          problem: "The complete Asset System automated content generation and facilitated campaign placement.",
          body: "This concept brought those pieces together into one workflow. Teams could define the project, business goals, and deadlines, then use prompting to generate campaign assets, target the right audiences, and place the creative into live campaigns.",
          actions: [
            { label: "View Figma File", href: "https://www.figma.com/design/WxJPjefTZtuwf8TF2yWDYM/MArketing-Automation-Plan?node-id=131-11829&t=e4cTm7U3TNsMrZRM-1", variant: "secondary" },
          ],
          mediaUrl: "https://res.cloudinary.com/diy08lj9x/image/upload/v1787609704/Screenshot_2026-08-24_at_3.13.11_PM_m21oii.png",
          mediaLink: "https://www.figma.com/design/WxJPjefTZtuwf8TF2yWDYM/MArketing-Automation-Plan?node-id=131-11392&t=e4cTm7U3TNsMrZRM-1",
        }),
      },
      // Speaker close: By this point I had worked on the editor, the asset library, metadata, and the review process around generated imagery. The work kept pulling me deeper into how the product actually behaved behind the interface.
    ],
  },

  heycohen: {
    title: "Hey, Cohen",
    slides: [
      {
        id: "hey-cohen-overview",
        name: "Hey, Cohen",
        render: (isDark, goToAmazon, _goToHeyCohen, onImageClick) => SlideTemplates.ProjectHero({
          isDark,
          title: <><b>Hey, Cohen</b></>,
          meta: <>Built for <a href="https://headlinermusicacademy.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Headliner</a> · ~250 students</>,
          body: <>I built <b>Hey, Cohen</b> for <a href="https://headlinermusicacademy.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Headliner</a>, a music academy with around 250 students. It brings together the information already sitting in our class software and spreadsheets, then helps staff figure out who they should reach out to and why.</>,
          
          
          src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1787116212/3998a50a-9895-49a2-8eed-81cb05e374d1.png",
          onImageClick,
          
          metrics: [
            { value: "6 hrs → 10 min", label: "Time to message students" },
            { value: "68%", label: "Summer re-enrollment improvement" },
          ],
          
          
  
        }),
      },
      {
        id: "hey-cohen-cohen",
        name: "Cohen",
        render: (isDark, _goToAmazon, _goToHeyCohen, onImageClick) => SlideTemplates.PortfolioSplit({
          isDark,
          titleVariant: "supporting",
          title: "Cohen is the face of the school",
          problem: <>Parents know him and most of the staff by name.</>,
          body: <>I wanted to retain that level of comfort. The product needed to help staff act on context and follow through at the right moment, without flattening the warmth that already made the music school 'vibe' work.</>,
          mediaUrl: "https://res.cloudinary.com/diy08lj9x/image/upload/v1787758377/e1553540-685b-41fe-943b-c22c213e95d5.png",
          onImageClick,
        }),
      },
      {
        id: "hey-cohen-lobby",
        name: "The lobby",
        render: (isDark, _goToAmazon, _goToHeyCohen, onImageClick) => SlideTemplates.PortfolioSplit({
          isDark,
          titleVariant: "supporting",
          title: "A lot of the business happens in this lobby",
          problem: <>Parents wait while their kids take lessons at Headliner. They talk to Cohen about schedules, missed classes, new programs, or whatever else is going on.</>,
          mediaUrl: "https://res.cloudinary.com/diy08lj9x/image/upload/v1787757615/5fd64a97-b859-41fa-87c3-0b7aa541182c.png",
          onImageClick,
        }),
      },
      
      {
        id: "hey-cohen-manual-work",
        name: "Insights",
        render: (isDark, _goToAmazon, _goToHeyCohen, onImageClick) => SlideTemplates.PortfolioSplit({
          isDark,
          titleVariant: "supporting",
          title: "What I noticed",
          problem: <>A lot of that communication work happened in small follow-up moments that never neatly lived inside software.</>,
          body: <>While the business already ran on warm, highly contextual relationships, the information needed to support those relationships was scattered across class software, spreadsheets, notes, email, and conversations.</>,
          mediaUrl: "https://res.cloudinary.com/diy08lj9x/image/upload/v1787761744/8c22d07a-77b1-452f-bbe9-b632093ba6ef.png",
          onImageClick,
        }),
      },
      {
        id: "hey-cohen-sms-first",
        name: "SMS first",
        render: (isDark, _goToAmazon, _goToHeyCohen, onImageClick) => SlideTemplates.PortfolioSplit({
          isDark,
          titleVariant: "supporting",
          title: "SMS as the starting point",
          problem: <>I treated SMS as the MVP wedge.</>,
          body: <>Surprisingly, the channel most likely to reach parents, and the one they were the most open to, was text messaging. Parents and students would reply with things like, &ldquo;Hey, yeah, great timing sending this.&rdquo; With email, that learning loop would have been slower, bumpier, and easier to miss.</>,
          mediaUrl: "https://res.cloudinary.com/diy08lj9x/image/upload/v1787109029/Screenshot_2026-08-18_at_7.54.49_PM_n4sgo1.png",
          onImageClick,
        }),
      },
      {
        id: "hey-cohen-from-prototype",
        name: "From prototype to product",
        render: (isDark, _goToAmazon, _goToHeyCohen, onImageClick) => SlideTemplates.PortfolioSplit({
          isDark,
          titleVariant: "supporting",
          title: "From prototype to product",
          
          
          mediaUrl: "https://res.cloudinary.com/diy08lj9x/image/upload/v1787113304/814f84d8-3692-4cb9-9a91-4a5e8a1533e9.png",
          onImageClick,
        }),
      },
      {
        id: "hey-cohen-demo",
        name: "Demo",
        render: (isDark, _goToAmazon, _goToHeyCohen, onImageClick) => SlideTemplates.ProjectHero({
          isDark,
          title: "View demo",
          meta: "This is where I'd stop talking through slides and show the actual product.",
          
          detailList: [
            { title: "Import the data", text: "Enrollment, attendance, billing, and notes." },
            { title: "See what needs attention", text: "Hey Cohen surfaces students and opportunities worth looking at." },
            { title: "Find the right people", text: "Use filters or just describe who you're looking for." },
            { title: "Write the message", text: "AI can help with wording, context, and brand voice. The person still decides what gets sent." },
            { title: "Keep the conversation going", text: "Replies come back into the inbox." },
          ],
          actions: [
            { label: "Play with demo", href: "https://pulse-zeta-ruddy.vercel.app/demo", variant: "primary" },
          ],
          src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1787109029/Screenshot_2026-08-18_at_7.54.49_PM_n4sgo1.png",
          onImageClick,
        }),
      },
      {
        id: "hey-cohen-outcome",
        name: "Impact",
        render: (isDark, _goToAmazon, _goToHeyCohen, onImageClick) => SlideTemplates.PortfolioSplit({
          isDark,
          titleVariant: "supporting",
          mediaLayout: "content-only-centered",
          title: "Impact",
          problem: <>We first used <b>Hey, Cohen</b> for summer re-enrollment.</>,
          body: "52 of 76 students came back. Re-enrollment reached 68%, compared with a historical 12% baseline, while campaign preparation dropped from hours to minutes.",
          metrics: [
            { value: "52 of 76", label: "Students came back" },
            { value: "68%", label: "Re-enrollment vs. a historical 12%" },
            { value: "6 hrs → 10 min", label: "Campaign preparation" },
            { value: "$8.3K–$10.4K", label: "Estimated monthly tuition retained" },
          ],
          onImageClick,
        }),
      },
      {
        id: "hey-cohen-next",
        title: "What's next",
        render: (isDark, _goToAmazon, _goToHeyCohen, onImageClick) => SlideTemplates.PortfolioSplit({
          isDark,
          titleVariant: "supporting",
          title: "What's next",
          body: <><b>Hey, Cohen</b> is becoming part of Odeon, a broader class management platform. This slide will become the <b>Hey, Cohen</b> + Odeon infographic.</>,
          mediaUrl: "https://res.cloudinary.com/diy08lj9x/image/upload/v1787698223/cf0d0ab4-a60d-4ab6-975a-1d5a18742ce9.png",
          onImageClick,
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
  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });

  const hasPresentationId = Boolean(id && PRESENTATIONS[id]);
  const presentationKey = hasPresentationId ? id : null;
  const presentationData = presentationKey ? PRESENTATIONS[presentationKey] : null;
  const slides = presentationData?.slides || [];
  const isChooserView = !presentationKey;
  const isDark = theme === "dark";
  const activeSlideIndex = currentSlide >= slides.length ? 0 : currentSlide;

  useEffect(() => { setCurrentSlide(0); }, [presentationKey]);

  const handleNext = () => { if (!isChooserView && activeSlideIndex < slides.length - 1) setCurrentSlide(activeSlideIndex + 1); };
  const handlePrev = () => { if (!isChooserView && activeSlideIndex > 0) setCurrentSlide(activeSlideIndex - 1); };
  const handleHome = () => {
    setIsMenuOpen(false);
    if (lightbox.open) closeLightbox();
    if (isChooserView) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide(0);
    navigate("/presentation");
  };
  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const openLightbox = (src, alt = "Presentation image") => setLightbox({ open: true, src, alt });
  const closeLightbox = () => setLightbox({ open: false, src: "", alt: "" });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "m") { setIsMenuOpen((prev) => !prev); return; }
      if (!isChooserView && (e.key === "ArrowRight" || e.key === " ")) { e.preventDefault(); handleNext(); }
      else if (!isChooserView && e.key === "ArrowLeft") { e.preventDefault(); handlePrev(); }
      else if (e.key === "Escape") {
        e.preventDefault();
        if (lightbox.open) closeLightbox();
        else if (isMenuOpen) setIsMenuOpen(false);
        else handleHome();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, isMenuOpen, slides.length, lightbox.open, isChooserView]);

  return (
    <div className={`h-screen w-screen flex flex-col text-left relative overflow-x-hidden overflow-y-auto lg:overflow-hidden font-sans transition-colors duration-500 ${
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
            onClick={handleHome}
            className={`flex items-center gap-3 transition-colors group ${
              isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span className="font-medium text-sm tracking-wide hidden sm:inline">Home</span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isDark ? "bg-white/10 group-hover:bg-white/20" : "bg-white border border-slate-300 shadow-sm"
            }`}>
              <House size={16} />
            </div>
          </button>
        </div>
      </header>

      {/* Presenter Menu */}
      {isMenuOpen && !isChooserView && (
        <div className="absolute top-20 right-6 z-[60] animate-fade-in w-64 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <div className={`p-3 rounded-xl shadow-card-strong backdrop-blur-md border flex flex-col gap-4 ${
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

      {lightbox.open && (
        <div
          className="absolute inset-0 z-[80] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6 md:p-10"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center"
            aria-label="Close image preview"
          >
            <X size={18} />
          </button>

          <div className="w-full h-full max-w-[95vw] max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* Slide Content */}
      <main className="flex-grow w-full h-full relative overflow-visible lg:overflow-hidden flex items-start lg:items-center z-10 pt-20 pb-28 lg:py-0">
        <div key={isChooserView ? "presentation-chooser" : `${presentationKey}-${activeSlideIndex}`} className="w-full min-h-full animate-fade-in flex items-start lg:items-center lg:h-full lg:pt-20 lg:pb-24 lg:py-16">
          {isChooserView
            ? SlideTemplates.PortfolioHeroIntro({
                isDark,
                onAmazonClick: () => navigate("/presentation/amazon"),
                onHeyCohenClick: () => navigate("/presentation/heycohen"),
              })
            : slides[activeSlideIndex].render(
                isDark,
                () => setCurrentSlide(1),
                () => navigate("/presentation/heycohen"),
                openLightbox
              )}
        </div>
      </main>

      {/* Footer / Controls */}
      {!isChooserView && (
      <footer className="absolute bottom-0 left-0 w-full p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 z-50 pointer-events-auto">
        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
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

        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <Button
            onClick={handlePrev}
            disabled={activeSlideIndex === 0}
            variant={isDark ? "ghost" : "outline"}
            size="sm"
            className={isDark ? "text-slate-200 border-white/10 bg-white/5 hover:bg-white/10" : ""}
          >
            <ChevronLeft size={16} /> Prev
          </Button>
          <Button
            onClick={handleNext}
            disabled={activeSlideIndex === slides.length - 1}
            variant="primary"
            size="sm"
            className={isDark ? "bg-[var(--brand-accent)] text-black border-[var(--brand-accent)] hover:bg-[#76E600] hover:border-[#76E600]" : ""}
          >
            Next <ChevronRight size={16} />
          </Button>
        </div>
      </footer>
      )}
    </div>
  );
}