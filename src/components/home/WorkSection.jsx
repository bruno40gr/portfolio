import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, HandMetal } from "lucide-react";
import { PARTITIONED_GROUPS, PORTFOLIO_DATA } from "../../data/portfolioData";
import { COMPANY_STRIPE_LOGOSSQUARED, ASSETS } from "../../data/assets";
import Button from "../ui/button";

// Map a company name to its logo (squared logos look good on any background)
const getCompanyLogo = (company) => {
  if (!company) return ASSETS.isoGreen;
  const norm = company.toLowerCase();
  const match = COMPANY_STRIPE_LOGOSSQUARED.find((logo) => {
    const name = logo.name.toLowerCase();
    return norm.includes(name) || name.includes(norm);
  });
  return match ? match.src : ASSETS.isoGreen;
};

// Reusable scroll-reveal hook (IntersectionObserver) for progressive disclosure
const useRevealOnScroll = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

// Hey Cohen hero card copy — homepage-specific presentation labels, not part of
// the full case study content in portfolioData.js. Named here so they're
// discoverable instead of buried as inline strings deep in the JSX.
const heyCohenBadge = "Zero to One";
// Amazon Collection section header — homepage-specific summary copy for the
// 4-pillar system. Same reasoning as above: named constant instead of inline strings.
const amazonCollectionHeader = {
  badge: "Global Scale",
  title: "The Devices Asset System",
  intro:
    "I led design across a new asset platform that automated the creation, localization, governance, and review of Amazon Devices marketing assets. The system launched across 23 marketplaces and produced thousands of assets for Prime Day.",
  statValue: "4",
  statLabelLine1: "Interconnected",
  statLabelLine2: "Projects",
};

const WorkSection = ({ onProjectClick }) => {
  const aiGroup = PARTITIONED_GROUPS.find((g) => g.id === "ai");
  const traditionalGroup = PARTITIONED_GROUPS.find((g) => g.id === "traditional");

  // Hey Cohen
  
  const heyCohen = PORTFOLIO_DATA.projects.find((p) => p.id === "hey-cohen");
  const heyCohenMetrics = heyCohen?.blocks?.find((b) => b.type === "impact-box")?.metrics || [];

  // Amazon Collection — curated 4-pillar cards (presentation-specific)
  const amazonCollectionCards = [
    {
      id: "amazon-image-builder",
      status: "Launched",
      title: "Image Builder",
      thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0003_USEN_zpplaz.png",
      description:
        "Designed the production system that let non-designers create and localize Amazon Devices marketing assets across 23 global marketplaces, replacing a workflow that previously depended on designers, translators, and manual production.",
      metricValue: "~8,000",
      metricLabel: "Lifestyle images generated (Prime Day 2025)",
    },
    {
      id: "amazon-ai-compositor",
      status: "AI Systems",
      title: "AI Lifestyle Compositor",
      thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1785079389/hero-image_h61hdi.png",
      description:
        "Trained a generative AI model on Amazon Devices' own product photography, then built a human-in-the-loop review process to ensure every image met the bar. Lifestyle images convert 4x better than gradient backgrounds, and I designed the system that made them usable at scale.",
      metricValue: "4x Better",
      metricLabel: "Conversion rate vs. gradient backgrounds",
    },
    {
      id: "amazon-asset-manager",
      status: "In Build",
      title: "Devices Component Asset Manager",
      thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1785167948/hero_asset_browser_ee1vwu.png",
      description:
        "Designed a central system for Amazon Devices' entire marketing image catalog, bringing search, QA, and metadata into one place. The product was shaped by research into how teams across North America and Europe actually managed their assets.",
      metricValue: "Single source of truth",
      metricLabel: "Replaces external QA tooling for NA and Europe",
    },
    {
      id: "amazon-metadata-studio",
      status: "AI Systems",
      title: "Devices Metadata Studio",
      thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772414317/Background_metadata-thumbnail_pgfkp6.png",
      description:
        "Every image asset needed metadata to be usable by AI. The assumption was that entry had to stay manual, so I ran experiments on my own to prove it could be automated, shifting the roadmap toward AI-assisted workflows and reducing manual entry for design technologists.",
      metricValue: "Automated Workflows",
      metricLabel: "Proven reduction in manual entry overhead",
    },
  ];

  // Archives — group traditional projects by company (Option A: company header + one row per project)
  const archiveProjects = (traditionalGroup?.projectIds || [])
    .map((id) => PORTFOLIO_DATA.projects.find((p) => p.id === id))
    .filter(Boolean);

  const archiveByCompany = {};
  archiveProjects.forEach((p) => {
    const key = p.company || "Other";
    if (!archiveByCompany[key]) archiveByCompany[key] = [];
    archiveByCompany[key].push(p);
  });

  // Curated archive descriptions + project sub-links per company
  const archiveMeta = {
    "Amazon Devices": {
      blurb: "Inspire feed & AI review highlights",
      links: { "amazon-inspire-tab": "Inspire Tab", "amazon-ai-review-highlights": "AI Review Highlights" },
    },
    "Amazon Core Shopping": {
      blurb: "AI review highlights",
      links: { "amazon-ai-review-highlights": "AI Review Highlights" },
    },
    "Alto Pharmacy": {
      blurb: "Internal Operations Tools & Patient Assistant App",
      links: { "alto-internal-tools": "Internal Tools", "alto-assistant": "Assistant App" },
    },
    Patreon: {
      blurb: "Benefit Delivery Tools, Studio 2.0 Design System, USPTO Patent",
      links: {
        "patreon-creator-tools": "Benefit Delivery Tools",
        "patreon-pledge-streak": "Pledge Streak",
        "patreon-studio-2": "Studio 2.0",
      },
    },
    Prox: {
      blurb: "Founding Designer for live-video expert marketplace",
      links: { prox: "Prox" },
    },
  };

  const archiveRows = Object.entries(archiveByCompany).map(([company, projects]) => {
    const meta = archiveMeta[company] || { blurb: "", links: {} };
    const years = projects.map((p) => p.year).filter(Boolean);
    const yearRange = years.length ? `${Math.min(...years)}-${Math.max(...years)}` : "";
    return { company, projects, meta, yearRange };
  });

  const reveal = useRevealOnScroll();

  return (
    <div
      id="work"
      className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 pb-24 md:pb-32 relative scroll-mt-24 bg-white text-left"
    >
      {/* ===== Building with AI section header ===== */}
      <div className="mb-12 max-w-2xl">
        <h3 className="text-[#059669] font-semibold text-sm tracking-wide mb-3">
          {aiGroup?.meta || "Building with AI"}
        </h3>
        <h2 className="text-4xl font-black text-slate-900 tracking-tight">
          {aiGroup?.title || "How I design with (and for) AI"}
        </h2>
      </div>

      {/* ===== Hey Cohen (featured, white hero) ===== */}
      <section className="bg-white p-8 lg:p-16 shadow-sm border border-gray-200 transition-all hover:shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50 to-transparent opacity-50 pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold tracking-widest">
                {heyCohenBadge}
              </span>
              <span className="text-sm font-medium text-slate-400">{heyCohen?.year || "2026"}</span>
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Hey Cohen</h3>

            <div className="w-full overflow-hidden relative group mb-6 lg:hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#11131E]/10 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
              <button
                type="button"
                onClick={() => onProjectClick(heyCohen)}
                className="block w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14]"
                aria-label="Open Hey Cohen case study"
              >
                <img
                  src={heyCohen?.thumbnail}
                  alt="Hey Cohen Interface Mockups"
                  className="w-full h-auto object-cover shadow-2xl"
                />
              </button>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              A communications platform for small businesses that know their
              customers by name. It tells you who's worth a message before you'd think to check, like a family that's gone quiet or a milestone worth celebrating. I own the product strategy, design, engineering, support, and delivery end to end. Demo
              environment available.
            </p>

            <div className="pt-6 pb-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {heyCohenMetrics.map((metric, i) => (
                <div key={i} className="flex items-start gap-3">
                  <HandMetal className="w-6 h-6 text-[#10B981] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-slate-900 font-bold text-lg leading-none">{metric.value}</span>
                    <span className="text-slate-500 text-xs leading-snug">{metric.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                type="button"
                onClick={() => onProjectClick(heyCohen)}
                variant="primary"
                size="md"
              >
                View full case study
              </Button>
              <a
                href="https://pulse-zeta-ruddy.vercel.app/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-700 font-semibold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-soft"
              >
                <div className="w-2 h-2 bg-[#39FF14]"></div>
                Live Demo
              </a>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="hidden lg:block w-full lg:w-1/2 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#11131E]/10 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
            <button
              type="button"
              onClick={() => onProjectClick(heyCohen)}
              className="block w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14]"
              aria-label="Open Hey Cohen case study"
            >
              <img
                src={heyCohen?.thumbnail}
                alt="Hey Cohen Interface Mockups"
                className="w-full h-auto object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </button>
          </div>
        </div>
      </section>

      {/* ===== "and" divider ===== */}
      <div className="flex items-center justify-center py-8">
        <div className="h-px w-16 bg-gray-300"></div>
        <div className="mx-4 text-gray-400 font-serif italic">and</div>
        <div className="h-px w-16 bg-gray-300"></div>
      </div>

      {/* ===== Amazon Collection (substantial, dark) ===== */}
      <section
        ref={reveal.ref}
        className={`bg-[var(--surface-dark)] p-8 lg:p-16 text-white relative overflow-hidden transition-all duration-700 ${
          reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10">
          {/* Collection header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-gray-800 pb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={getCompanyLogo("Amazon")}
                    alt="Amazon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-bold tracking-widest mb-2 inline-block">
                    {amazonCollectionHeader.badge}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                    {amazonCollectionHeader.title}
                  </h3>
                </div>
              </div>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                {amazonCollectionHeader.intro}
              </p>
            </div>

            <div className="flex-shrink-0 text-right">
              <p className="text-5xl font-black text-white">{amazonCollectionHeader.statValue}</p>
              <p className="text-md text-gray-400 tracking-widest font-semibold">
                {amazonCollectionHeader.statLabelLine1}
                <br />
                {amazonCollectionHeader.statLabelLine2}
              </p>
            </div>
          </div>

          {/* 2x2 pillar grid with thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {amazonCollectionCards.map((card) => (
              <div
                key={card.id}
                className="bg-[#1A1D2D] border border-gray-800 flex flex-col h-full relative overflow-hidden"
              >
                {/* Thumbnail — the only clickable part of the card */}
                <button
                  type="button"
                  onClick={() => onProjectClick(PORTFOLIO_DATA.projects.find((p) => p.id === card.id))}
                  className="group relative w-full aspect-[16/9] bg-gray-900 overflow-hidden text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14]"
                  aria-label={`Open ${card.title} case study`}
                >
                  <img
                    src={card.thumbnail}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3 left-3 flex items-center justify-between w-[calc(100%-1.5rem)]">
                    <span className="px-2 py-1 bg-gray-800 text-gray-200 text-[10px] font-bold tracking-widest">
                      {card.status}
                    </span>
                    <div className="w-8 h-8 bg-gray-800 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={16} className="-rotate-45" />
                    </div>
                  </div>
                </button>

                <div className="p-8 flex flex-col flex-1">
                  <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">{card.description}</p>
                  <div className="pt-6 border-t border-gray-800 flex items-center gap-3">
                    <HandMetal className="w-6 h-6 text-[#39FF14] shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-white font-bold text-lg leading-none">{card.metricValue}</span>
                      <span className="text-gray-400 text-xs">{card.metricLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Selected Work (archives) ===== */}
      <section className="max-w-4xl mx-auto pt-32 pb-8">
        <div className="flex items-end justify-between gap-8 mb-8 border-b border-gray-200 pb-4">
          <div>
            <h3 className="text-[#059669] font-semibold text-sm tracking-wide mb-3">
              {traditionalGroup?.meta || "Selected Work"}
            </h3>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">
              {traditionalGroup?.title || "The work that honed my process"}
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              {traditionalGroup?.intro}
            </p>
          </div>
          <span className="text-sm text-slate-400 hidden sm:block shrink-0">2019 — 2022</span>
        </div>

        <div className="space-y-8">
          {archiveRows.map((row) => (
            <div key={row.company}>
              {/* Company header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                  <img src={getCompanyLogo(row.company)} alt={row.company} className="w-6 h-6 object-contain" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900">{row.company}</h4>
                <span className="text-sm font-medium text-slate-400">{row.yearRange}</span>
              </div>

              {row.meta.blurb && (
                <p className="text-sm text-slate-500 mb-3 ml-[52px]">{row.meta.blurb}</p>
              )}

              {/* One row per project */}
              <div className="border-l border-gray-200 ml-5 pl-5 space-y-1">
                {row.projects.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => onProjectClick(p)}
                    className="group w-full flex items-center justify-between py-3 text-left hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-gray-200 transition-all duration-200 cursor-pointer px-2 -mx-2"
                  >
                    <span className="text-base font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                      {row.meta.links[p.id] || p.title}
                    </span>
                    <span className="text-base font-medium text-slate-500 group-hover:text-slate-900 flex items-center gap-1.5 transition-colors">
                      View <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkSection;