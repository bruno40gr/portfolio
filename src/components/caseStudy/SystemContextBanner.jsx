import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { PROJECT_STATUS } from "../../data/tokens";
import AnimatedThumbnail from "../home/AnimatedThumbnail";

// ─────────────────────────────────────────────────────────────────────────────
// SegmentedDonut
// ─────────────────────────────────────────────────────────────────────────────
const polarToCartesian = (cx, cy, r, angleDeg) => {
  const rad = (angleDeg - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

const describeArc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end   = polarToCartesian(x, y, radius, startAngle);
  const large = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${large} 0 ${end.x} ${end.y}`;
};

const SegmentedDonut = ({
  activeIndex = 1,
  totalSteps = 4,
  size = 40,
  strokeWidth = 7,
  activeColor = "#231f44",
  inactiveColor = "#E5E7EB",
}) => {
  const center       = size / 2;
  const radius       = (size - strokeWidth) / 2;
  const gapSize      = 4;
  const segmentAngle = 360 / totalSteps;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block -rotate-90">
      {Array.from({ length: totalSteps }).map((_, i) => {
        const start    = i * segmentAngle + gapSize / 2;
        const end      = (i + 1) * segmentAngle - gapSize / 2;
        const isActive = i + 1 === activeIndex;
        return (
          <path
            key={i}
            d={describeArc(center, center, radius, start, end)}
            fill="none"
            stroke={isActive ? activeColor : inactiveColor}
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
            className="transition-colors duration-300 ease-out"
          />
        );
      })}
    </svg>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SystemContextModal — shared between homepage bracket and pillar case studies
// ─────────────────────────────────────────────────────────────────────────────
export const SystemContextModal = ({ open, onClose, pillars = [], currentId, onPillarClick }) => {
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const PILLAR_ROLES = {
    "jas-image-builder":   "Lets non-designers build and localize assets across 23 markets.",
    "jas-asset-manager":   "Governed library that makes assets findable, QA-able, and publishable.",
    "jas-metadata-studio": "AI-powered metadata extraction that makes the library machine-readable.",
    "jas-ai-generator":    "Generates realistic lifestyle scenes from structured human feedback.",
  };

  const isLaunched = (status) => status === "LAUNCHED" || status === "SHIPPED";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />

      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 transition-colors text-neutral-400 hover:text-neutral-700"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="px-7 md:px-9 pt-8 pb-10">

          {/* What is this */}
<p className="meta-label mb-3">Amazon Devices Asset System</p>

<h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug mb-5">
  Devices Catalog-to-Campaign Automation Platform.
</h2>

<div className="mb-8 space-y-4">
  <p className="text-base text-slate-600 leading-relaxed">
    Across dozens of device families and 23 market-and-language combinations, Amazon Devices depends on a constant stream
    of marketing imagery to support seasonal promotions, major device launches, partnerships, and flagship technology
    moments like Alexa+. Historically, that work was produced and shipped through manual, labor-heavy workflows, with
    designers assembling files, people uploading and routing assets, and teams handling translation while verifying prices
    and active offers.
  </p>

  <p className="text-base text-slate-600 leading-relaxed">
    The Asset System is a suite of four connected internal tools that cover the full production chain: building assets,
    managing them, tagging them with metadata that makes them machine-readable, and generating them with AI. It serves the
    same core pool of teams across different moments of the workflow. The pillars can progress in parallel while still
    reinforcing each other. A governed library keeps inputs consistent, consistent inputs make metadata automation
    dependable, and dependable automation is what makes AI generation reliable at scale.
  </p>

  <p className="text-base text-slate-600 leading-relaxed">
    The longer-term vision extends beyond asset production into full marketing automation and performance reporting across
    the Amazon Devices org. Vision mocks for that broader system are available on request.
  </p>
</div>

          {/* Four pillar cards */}
          <h3 className="text-lg font-bold text-slate-900 mb-4">The four pillars</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pillars.map((pillar, i) => {
              const isCurrent = pillar.id === currentId;
              const launched  = isLaunched(pillar.status);
              const statusLabel = PROJECT_STATUS[pillar.status]?.label || "In build";
              const roleLine  = PILLAR_ROLES[pillar.id] || pillar.impactSummary;

              return (
                <button
                  key={pillar.id}
                  onClick={() => {
                    if (!isCurrent && onPillarClick) {
                      onClose();
                      onPillarClick(pillar);
                    }
                  }}
                  disabled={isCurrent}
                  className={`
                    text-left flex items-center gap-3 px-3 py-3 rounded-xl border transition-all duration-200
                    ${isCurrent
                      ? "border-slate-200 bg-slate-50 cursor-default opacity-60"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm cursor-pointer"
                    }
                  `}
                >
                  <div className="shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-slate-100 border border-slate-100 relative">
  {pillar.details?.hero?.type === "animated" ? (
    <AnimatedThumbnail projectId={pillar.id} />
  ) : (
    <img
      src={pillar.thumbnail}
      alt=""
      className={`w-full h-full ${pillar.thumbnailPadding ? `object-contain ${pillar.thumbnailPadding}` : "object-cover"}`}
    />
  )}
</div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-800 leading-snug mb-0.5 font-sans">
                      {pillar.title}
                    </p>
                    <p className="text-xs text-slate-400 leading-snug font-sans">{roleLine}</p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SystemContextBanner
// Used inside pillar case studies. Donut + strip + modal.
// ─────────────────────────────────────────────────────────────────────────────
const SystemContextBanner = ({ pillars = [], currentId, onPillarClick }) => {
  const [modalOpen, setModalOpen] = useState(false);

  if (!pillars.length) return null;

  const currentIndex = pillars.findIndex((p) => p.id === currentId);
  const position     = currentIndex >= 0 ? currentIndex + 1 : null;

  return (
    <>
      <div className="flex items-center gap-3 mb-8 font-sans">
  <div className="shrink-0">
    <SegmentedDonut
      activeIndex={position}
      totalSteps={pillars.length}
      size={40}
      strokeWidth={7}
      activeColor="#231f44"
      inactiveColor="#E5E7EB"
    />
  </div>

  {/* One line on desktop, wraps to two lines on mobile */}
  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 min-w-0">
    <p className="meta-label m-0 min-w-0">
      This project is{" "}
      <span className="font-semibold text-slate-700">
        {position}/{pillars.length}
      </span>{" "}
      part of the{" "}
      <span className="font-semibold text-slate-700">Amazon Devices Asset System</span>
    </p>

    <button
      onClick={() => setModalOpen(true)}
      className="meta-label text-[var(--deep-purple)] underline underline-offset-2 hover:opacity-70 transition-opacity font-sans whitespace-nowrap"
    >
      Learn more
    </button>
  </div>
</div>

      <SystemContextModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        pillars={pillars}
        currentId={currentId}
        onPillarClick={onPillarClick}
      />
    </>
  );
};

export default SystemContextBanner;