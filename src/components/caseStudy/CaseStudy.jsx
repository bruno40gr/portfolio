// src/components/caseStudy/CaseStudy.jsx
import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { ArrowRight, Maximize2 } from "lucide-react";

import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { toFigmaEmbedUrl } from "../../utils/figma";

import Caption from "../ui/Caption";
import CalloutBox from "../ui/CalloutBox";
import ImpactBox from "../ui/ImpactBox";
import DataTable from "../ui/DataTable";
import ProjectMetadata from "../ui/ProjectMetadata";
import ProjectCard from "../home/ProjectCard";

import ImageLightbox from "./ImageLightbox";
import ImageThumbnail from "./ImageThumbnail";
import FileThumbnail from "./FileThumbnail";
import VideoThumbnail from "./VideoThumbnail";
import FigmaThumbnail from "./FigmaThumbnail";

import CaseStudyPager from "./CaseStudyPager";
import CaseStudyAnchorNav from "./CaseStudyAnchorNav";
import ProjectHeader from "./ProjectHeader";
import SystemContextBanner from "./SystemContextBanner";
import AnimatedHero from "./AnimatedHero";
import SEOHead from "../ui/SEOHead";

import "./GalleryStyles.css";

const CaseStudy = ({ project, onNavigateToProject, onExit }) => {
  const contentRef = useRef(null);
  const heroRef = useRef(null);
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const [heroScrollProgress, setHeroScrollProgress] = useState(0);
  const maxHeroProgress = useRef(0);

  const isPillar = !!project.parentId;

  const subPillars = PORTFOLIO_DATA.projects.filter((p) => p.parentId === project.id);

  const allCaseStudies = PORTFOLIO_DATA.projects.filter((p) => p.status !== "coming-soon" && p.status !== "HIDDEN");
  const currentIdx = allCaseStudies.findIndex((p) => p.id === project.id);
  const prevProject = currentIdx > 0 ? allCaseStudies[currentIdx - 1] : null;
  const nextProject =
    currentIdx >= 0 && currentIdx < allCaseStudies.length - 1
      ? allCaseStudies[currentIdx + 1]
      : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  // Scroll-driven animation for editorial hero split panel
  // Tracks the wrapper's position to derive scroll progress through the residency zone
  // Scroll-driven animation for editorial hero split panel
  // The wrapper has minHeight = 100vh + scrollResidency (200vh default)
  useEffect(() => {
    if (!heroRef.current) return;

    const handleScroll = () => {
      const wrapper = heroRef.current;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const wrapperHeight = rect.height;
      const residencyZone = wrapperHeight - viewportHeight;
      if (residencyZone <= 0) {
        setHeroScrollProgress(0);
        return;
      }
      const scrolledIntoResidency = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolledIntoResidency / residencyZone));
      maxHeroProgress.current = Math.max(maxHeroProgress.current, progress);
      setHeroScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [project.id]);

  const allMediaItems = useMemo(() => {
    const media = [];
    let lastHeading = "Assets in this case study";

    project.details?.blocks?.forEach((block) => {
      if (block.type === "heading") {
        lastHeading = block.title;
      }

      if (block.type === "video") {
        const caption = block.caption || "";
        const isCaptionObj = typeof caption === "object" && caption !== null && caption.short;
        const captionShort = isCaptionObj ? caption.short : caption;
        const captionVerbose = isCaptionObj ? caption.verbose : "";

        media.push({
          type: "video",
          src: block.src,
          title: captionShort || "Visual",
          captionShort,
          captionVerbose,
          fileSize: "N/A",
          processStepTitle: lastHeading,
        });
      } else if (block.type === "figma") {
        const caption = block.caption || "";
        const isCaptionObj = typeof caption === "object" && caption !== null && caption.short;
        const captionShort = isCaptionObj ? caption.short : caption;
        const captionVerbose = isCaptionObj ? caption.verbose : "";

        media.push({
          type: "figma",
          src: block.src,
          embedSrc: toFigmaEmbedUrl(block.src),
          title: captionShort || "Visual",
          captionShort,
          captionVerbose,
          fileSize: "N/A",
          processStepTitle: lastHeading,
          aspectRatio: block.aspectRatio,
        });
      } else if (block.type === "image-full") {
        const imageCaption =
          typeof block.caption === "object" && block.caption !== null ? block.caption.short : block.caption;
        const imageCaptionVerbose =
          typeof block.caption === "object" && block.caption !== null ? block.caption.verbose : "";

        media.push({
          type: "image",
          src: block.src,
          title: imageCaption || "Visual",
          captionShort: imageCaption || "",
          captionVerbose: imageCaptionVerbose || "",
          deepDive: block.deepDive || "",
          fileSize: "N/A",
          processStepTitle: lastHeading,
        });
      } else if (block.type === "image-grid" && block.images) {
        block.images.forEach((img) => {
          const captionShort = typeof img.caption === "object" ? img.caption.short : img.caption;
          const captionVerbose = typeof img.caption === "object" ? img.caption.verbose : "";
          media.push({
            type: "image",
            src: img.src,
            title: captionShort || "Visual",
            captionShort: captionShort || "",
            captionVerbose: captionVerbose || "",
            deepDive: img.deepDive || "",
            fileSize: "N/A",
            processStepTitle: lastHeading,
          });
        });


      } else if (block.type === "list" && block.items) {
        block.items.forEach((item) => {
          const itemContent = item && typeof item === "object" && !Array.isArray(item) ? item.content : item;
          const processStepTitleMatch = itemContent.match(
            /<span class="process-step-title"><b>(.*?)<\/b><\/span>/
          );
          const processStepTitle = processStepTitleMatch ? processStepTitleMatch[1] : "Assets in this case study";

          if (item.visuals) {
            item.visuals.forEach((visual) => {
              let type = "image";
              if (visual.kind === "embed") type = "video";
              else if (visual.src && visual.src.includes(".pdf")) type = "pdf";
              else if (visual.kind === "figma") type = "figma";

              const caption = visual.caption || "";
              const isCaptionObj = typeof caption === "object" && caption !== null && caption.short;
              const captionShort = isCaptionObj ? caption.short : caption;
              const captionVerbose = isCaptionObj ? caption.verbose : "";

              media.push({
                type,
                src: visual.src,
                embedSrc: type === "figma" ? toFigmaEmbedUrl(visual.src) : undefined,
                title: captionShort || "Visual",
                captionShort,
                captionVerbose,
                deepDive: visual.deepDive || "",
                fileSize: visual.fileSize || "N/A",
                processStepTitle,
              });
            });
          }
        });
      }
    });

    return media;
  }, [project]);

  const renderBlock = (block, index) => {
    switch (block.type) {
      case "text": {
        const textClass =
          block.subtype === "designer-note"
            ? "designer-note"
            : "text-lg md:text-xl text-warm-700 font-light leading-relaxed";

        return (
          <section key={index} className="mb-10 text-left">
            {block.title && (
              <h3 className="text-lg md:text-xl font-normal text-warm-900 mb-4 leading-snug">
                {block.title}
              </h3>
            )}

            {Array.isArray(block.content) ? (
              block.content.map((p, i) => (
                <p
                  key={i}
                  className={`${textClass} mb-4 md:mb-6`}
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))
            ) : (
              <p className={textClass} dangerouslySetInnerHTML={{ __html: block.content }} />
            )}
          </section>
        );
      }

      case "callout-box":
        return <CalloutBox key={index} content={block.content} size="large" className="mb-12 md:mb-16" />;

      case "impact-box":
        return <ImpactBox key={index} metrics={block.metrics} description={block.description} size="large" variant={isEditorial ? "editorial" : "default"} className="mb-12 md:mb-16" />;

      case "heading": {
        if (block.title === "Overview") return null;

        const slug = block.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const showBorder = block.hasDivider !== false;

        return (
          <section
            id={slug}
            key={index}
            className={`mb-8 text-left case-anchor-target ${showBorder ? "mt-16 md:mt-20 pt-10" : ""}`}
          >
            <h2 className="text-3xl md:text-4xl font-sans font-semibold text-warm-900 tracking-normal leading-[1.1]">{block.title}</h2>
          </section>
        );
      }

      case "image-full": {
        const globalIndex = allMediaItems.findIndex((item) => item.src === block.src);
        const imageCaption =
          typeof block.caption === "object" && block.caption !== null ? block.caption.short : block.caption;
        const layout = block.layout || (block.noLightbox ? "full" : "lightbox");
        const isSide = layout === "side";
        const isSideLightbox = layout === "side-lightbox";
        const isFull = layout === "full";
        const isLightbox = layout === "lightbox";

        // Shared side-layout image component
        const renderSideImage = (clickable, globalIdx) => {
          const imgEl = (
            <div className="bg-white border border-neutral-200 rounded-sm p-2 shadow-sm">
              <img
                src={block.src}
                alt={imageCaption}
                className="w-full h-auto"
              />
            </div>
          );
          if (clickable && globalIdx !== -1) {
            return (
              <button
                type="button"
                onClick={() => setLightbox({ open: true, index: globalIdx })}
                className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-green)] rounded-sm"
                aria-label="Expand image"
              >
                {imgEl}
              </button>
            );
          }
          return imgEl;
        };

        const renderSideLayout = (clickable) => (
          <div key={index} className="mb-10 px-6 md:px-0">
            <div className="flex flex-col md:flex-row md:gap-14 md:items-center">
              <div className="md:w-[62%] md:shrink-0">
                {renderSideImage(clickable, globalIndex)}
              </div>
              {imageCaption && (
                <div className="mt-3 md:mt-0 md:w-[38%] md:pt-1">
                  <Caption>{imageCaption}</Caption>
                </div>
              )}
            </div>
          </div>
        );

        // SIDE LAYOUT — no lightbox
        if (isSide) return renderSideLayout(false);

        // SIDE + LIGHTBOX LAYOUT
        if (isSideLightbox) return renderSideLayout(true);

        // FULL LAYOUT — full width, no lightbox, no zoom
        if (isFull) {
          return (
            <div key={index} className="mb-10 px-6 md:px-0">
              <div className="relative w-full bg-white border border-neutral-200 rounded-sm p-2 shadow-sm">
                <img
                  src={block.src}
                  alt={imageCaption}
                  className="w-full h-auto"
                />
              </div>
              {imageCaption && <Caption>{imageCaption}</Caption>}
            </div>
          );
        }

        // LIGHTBOX LAYOUT (default) — full width, clickable lightbox, zoom hover
        return (
          <div key={index} className="mb-10 px-6 md:px-0">
            <button
              type="button"
              onClick={() => {
                if (globalIndex !== -1) setLightbox({ open: true, index: globalIndex });
              }}
              className="group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-green)] rounded-xl"
              aria-label="Expand image"
            >
              <div className="relative w-full bg-white border border-neutral-200 rounded-sm transition-all duration-300 ease-out p-2 shadow-sm group-hover:shadow-md group-hover:border-neutral-300">
                <div className="relative rounded-sm overflow-hidden w-full">
                  <img
                    src={block.src}
                    alt={imageCaption}
                    className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.01]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[var(--deep-purple)] shadow-lg opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-[var(--neon-green)] group-hover:border-[var(--neon-green)] transition-all duration-300 transform scale-90 group-hover:scale-100">
                      <Maximize2 size={20} aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </button>
            {imageCaption && <Caption>{imageCaption}</Caption>}
          </div>
        );
      }

      case "image-grid": {
        const cols = block.columns || 2;
        return (
          <div key={index} className={`mb-12 md:mb-16 grid grid-cols-1 sm:grid-cols-${cols} gap-6`}>
            {block.images.map((img, i) => {
              const globalIndex = allMediaItems.findIndex((item) => item.src === img.src);
              const captionShort = typeof img.caption === "object" ? img.caption.short : img.caption;
              return (
                <div key={i}>
                  <button
                    type="button"
                    onClick={() => { if (globalIndex !== -1) setLightbox({ open: true, index: globalIndex }); }}
                    className="group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-green)] rounded-xl"
                  >
                    <div className="relative w-full bg-white border border-neutral-200 rounded-sm transition-all duration-300 ease-out p-2 shadow-sm group-hover:shadow-md group-hover:border-neutral-300">
                      <div className="relative rounded-sm overflow-hidden w-full">
                        <img
                          src={img.src}
                          alt={captionShort}
                          className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.01]"
                        />
                      </div>
                    </div>
                  </button>
                  {captionShort && <Caption>{captionShort}</Caption>}
                </div>
              );
            })}
          </div>
        );
      }

      case "video": {
        const globalIndex = allMediaItems.findIndex((item) => item.src === block.src);
        const videoCaption =
          typeof block.caption === "object" && block.caption !== null ? block.caption.short : block.caption;

        return (
          <div key={index} className="mb-12 md:mb-16">
            <VideoThumbnail
              src={block.src}
              caption={videoCaption}
              coverImage={block.coverImage}
              onClick={() => { if (globalIndex !== -1) setLightbox({ open: true, index: globalIndex }); }}
            />
            {videoCaption && <Caption>{videoCaption}</Caption>}
          </div>
        );
      }

      case "table":
        return <DataTable key={index} columns={block.columns} rows={block.rows} />;

      case "figma": {
        const globalIndex = allMediaItems.findIndex((item) => item.src === block.src);
        const figmaCaption =
          typeof block.caption === "object" && block.caption !== null ? block.caption.short : block.caption;

        const embedSrc = toFigmaEmbedUrl(block.src);

        return (
          <div key={index} className="mb-12 md:mb-16">
            <FigmaThumbnail
              src={block.src}
              caption={figmaCaption}
              coverImage={block.coverImage}
              aspectRatio={block.aspectRatio}
              isFigJam={block.src?.includes("figma.com/board")}
              onClick={() => setLightbox({ open: true, index: globalIndex, embedSrc })}
            />
            {figmaCaption && <Caption>{figmaCaption}</Caption>}
          </div>
        );
      }

      case "file-thumbnail": {
        return (
          <div key={index} className="mb-10 max-w-sm">
            <FileThumbnail
              title={block.title || block.label}
              fileSize={block.fileSize || "External Link"}
              onClick={() => window.open(block.href, "_blank")}
            />
          </div>
        );
      }
      case "pillar-grid":
        return (
          <div key={index} className="mt-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 text-left">
              {subPillars.map((child) => (
                <ProjectCard
                  key={child.id}
                  project={child}
                  onClick={onNavigateToProject}
                  showCompany={false}
                  showImpactSummarySentence
                  showPills={false}
                />
              ))}
            </div>
          </div>
        );

      case "list": {
        if (!block.items || !Array.isArray(block.items)) return null;

        return (
          <section key={index} className="mb-12 md:mb-20 text-left font-sans">
            <ul className="space-y-14 md:space-y-20 font-sans">
              {block.items.map((item, i) => {
                const isObj = item && typeof item === "object" && !Array.isArray(item);
                const itemContent = isObj ? item.content : item;
                const visuals = isObj ? item.visuals : null;
                const hasContent = itemContent && itemContent.trim() !== "";

                const mediaItems = visuals
                  ? visuals.map((visual) => {
                      const caption = visual.caption || "";
                      const isCaptionObj =
                        typeof caption === "object" && caption !== null && caption.short;
                      const captionShort = isCaptionObj ? caption.short : caption;
                      const captionVerbose = isCaptionObj ? caption.verbose : "";

                      const type =
                        visual.kind === "embed"
                          ? "video"
                          : visual.src && visual.src.includes(".pdf")
                          ? "pdf"
                          : visual.kind === "figma"
                          ? "figma"
                          : "image";

                      return {
                        type,
                        src: visual.src,
                        embedSrc: type === "figma" ? toFigmaEmbedUrl(visual.src) : undefined,
                        title: captionShort || "Visual",
                        captionShort,
                        captionVerbose,
                        fileSize: visual.fileSize || "N/A",
                        coverImage: visual.coverImage,
                        aspectRatio: visual.aspectRatio,
                        isPresentation: visual.isPresentation || false,
                        noLightbox: visual.noLightbox || false,
                        layout: visual.layout || null,
                      };
                    })
                  : [];

                return (
                  <li
                    key={i}
                    className="process-list-item flex gap-4 md:gap-6 items-start text-lg md:text-xl text-warm-700 font-light leading-relaxed"
                  >
                    {hasContent && (
                      <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-sm bg-[var(--green-process)] shrink-0">
                        <ArrowRight size={14} strokeWidth={3} className="text-black" />
                      </div>
                    )}

                    <div className="flex-1">
                      {hasContent && <div dangerouslySetInnerHTML={{ __html: itemContent }} />}

                      {mediaItems.length > 0 && (
                        <div className="mt-8 md:mt-12 w-full">
                          <div className="flex flex-col gap-8 w-full">
                            {mediaItems.map((mediaItem, vi) => {
                              const globalIndex = allMediaItems.findIndex(
                                (it) => it.src === mediaItem.src
                              );

                              // Side layout for list visuals
                              if (mediaItem.type === "image" && (mediaItem.layout === "side" || mediaItem.layout === "side-lightbox")) {
                                const isClickable = mediaItem.layout === "side-lightbox" && globalIndex !== -1;
                                const imgEl = (
                                  <div className="bg-white border border-neutral-200 rounded-sm p-2 shadow-sm">
                                    <img src={mediaItem.src} alt={mediaItem.title} className="w-full h-auto" />
                                  </div>
                                );
                                return (
                                  <div key={vi}>
                                    <div className="flex flex-col md:flex-row md:gap-14 md:items-center">
                                      <div className="md:w-[62%] md:shrink-0">
                                        {isClickable ? (
                                          <button
                                            type="button"
                                            onClick={() => setLightbox({ open: true, index: globalIndex })}
                                            className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-green)] rounded-sm"
                                            aria-label="Expand image"
                                          >
                                            {imgEl}
                                          </button>
                                        ) : imgEl}
                                      </div>
                                      {mediaItem.captionShort && (
                                        <div className="mt-3 md:mt-0 md:w-[38%] md:pt-1">
                                          <Caption>{mediaItem.captionShort}</Caption>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                );
                              }

                              return (
                                <div key={vi}>
                                  {mediaItem.type === "video" ? (
                                    <VideoThumbnail
                                      src={mediaItem.src}
                                      caption={mediaItem.captionShort}
                                      coverImage={mediaItem.coverImage}
                                      onClick={() => setLightbox({ open: true, index: globalIndex })}
                                    />
                                  ) : mediaItem.type === "pdf" ? (
                                    <FileThumbnail
                                      title={mediaItem.title}
                                      fileSize={mediaItem.fileSize}
                                      onClick={() => setLightbox({ open: true, index: globalIndex })}
                                    />
                                  ) : mediaItem.type === "figma" ? (
                                    <FigmaThumbnail
                                      src={mediaItem.src}
                                      caption={mediaItem.captionShort}
                                      coverImage={mediaItem.coverImage}
                                      aspectRatio={mediaItem.aspectRatio}
                                      onClick={() =>
                                        setLightbox({
                                          open: true,
                                          index: globalIndex,
                                          embedSrc: mediaItem.embedSrc || toFigmaEmbedUrl(mediaItem.src),
                                        })
                                      }
                                    />
                                  ) : mediaItem.noLightbox ? (
                                    <div className="relative w-full bg-white border border-neutral-200 rounded-sm p-2 shadow-sm">
                                      <img
                                        src={mediaItem.src}
                                        alt={mediaItem.title}
                                        className="w-full h-auto"
                                      />
                                    </div>
                                  ) : (
                                    <ImageThumbnail
                                      src={mediaItem.src}
                                      alt={mediaItem.title}
                                      onClick={() => setLightbox({ open: true, index: globalIndex })}
                                      isPresentation={mediaItem.isPresentation}
                                    />
                                  )}

                                  {mediaItem.captionShort && (
                                    <Caption>{mediaItem.captionShort}</Caption>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      }

      default:
        return null;
    }
  };

  const sections =
    project.details?.blocks
      ?.filter((b) => b.type === "heading")
      .map((b) => ({
        title: b.title,
        id: b.title === "Overview" ? "overview" : b.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      })) || [];

  const heroSrc = project.details?.heroImage || project.thumbnail;
  const heroType = project.details?.hero?.type;
  const heroBgColor = project.details?.hero?.bgColor || "#f5f5f5";
  const heroPadding = project.details?.hero?.heroPadding || "";
  const heroGradient = project.details?.hero?.gradient;
  const heroLeftImage = project.details?.hero?.heroLeftImage;
  const heroRightImage = project.details?.hero?.heroRightImage;
  const heroSlides = project.details?.hero?.heroSlides;
  const hasHeroSlides = !!(heroSlides && heroSlides.length > 0);
  const hasHeroSplit = !!(heroLeftImage && heroRightImage);
  const isEditorial = heroType === "editorial";

  const heroStyle = heroGradient
    ? { backgroundImage: `linear-gradient(to bottom, ${heroGradient[0]}, ${heroGradient[1]})` }
    : { backgroundColor: heroBgColor };

  // Right image is taller (3 screens stacked) — pan it vertically as user scrolls
  // Use a generous fixed overflow estimate; the wrapper minHeight handles residency
  const rightImageTranslateY = heroScrollProgress * 600;

  return (
    <article className={`min-h-screen w-full relative text-left font-sans ${isEditorial ? "bg-white" : "bg-white"}`}>
      <SEOHead
        title={project.title}
        description={project.impactSummarySentence || project.impactSummary || `${project.title} — a case study by Bruno Wong`}
        path={`/project/${project.id}`}
        ogType="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": project.title,
          "description": project.impactSummarySentence || project.impactSummary || "",
          "author": {
            "@type": "Person",
            "name": "Bruno Wong Marchena"
          },
          "url": `https://www.brunowong.me/project/${project.id}`
        }}
      />
      {heroType === "animated" ? (
        <AnimatedHero projectId={project.id} />
      ) : isEditorial ? (
        <>
          {/* Header metadata (non-sticky, scrolls away immediately) */}
          <div className="w-full border-b border-neutral-200 relative shadow-sm bg-white">
            <div className="px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-12 md:pb-16 max-w-[1800px] mx-auto">
              <div className="mb-4">
                <ProjectHeader
                  company={project.company}
                  title={project.title}
                  type={project.details?.type || project.type}
                  compact
                />
              </div>
              <div className="mb-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight text-black max-w-4xl mb-6">
                  {project.title}
                </h1>
                <div className="flex flex-col md:flex-row md:items-start md:gap-12">
                  <p className="text-xl md:text-xl text-warm-400 font-light leading-relaxed max-w-2xl font-sans">
                    {project.impactSummarySentence || project.impactSummary}
                  </p>
                  {isEditorial && project.blocks && project.blocks.filter(b => b.type === "impact-box").length > 0 && (
                    <div className="flex flex-wrap gap-x-8 gap-y-4 mt-4 md:mt-0 md:shrink-0">
                      {project.blocks.filter(b => b.type === "impact-box").slice(0, 1).map((ib, i) =>
                        ib.metrics.map((m, j) => (
                          <div key={`${i}-${j}`} className="flex items-baseline gap-2">
                            <span className="text-3xl md:text-4xl font-serif text-black tabular-nums tracking-[-0.03em]">{m.value}</span>
                            <span className="text-sm text-warm-500 leading-snug max-w-[140px] font-sans">{m.label}</span>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {hasHeroSlides ? (
            <>
              {/* Desktop: sticky crossfade hero with scroll-driven opacity */}
              <section
                ref={heroRef}
                className="w-full border-b border-neutral-200"
                style={{ minHeight: "240vh" }}
              >
                <div
                  className="sticky top-0 z-0 w-full overflow-hidden flex items-center justify-center"
                  style={{ height: "100vh", backgroundColor: heroSlides[0].colors?.[0] || "#231f44" }}
                >
                  {heroSlides.map((slide, i) => {
                    const zoneStart = i / heroSlides.length;
                    const zoneEnd = (i + 1) / heroSlides.length;
                    const clamped = Math.min(heroScrollProgress, maxHeroProgress.current);
                    let opacity = 0;
                    if (clamped >= zoneStart && clamped <= zoneEnd) {
                      const zonePos = (clamped - zoneStart) / (zoneEnd - zoneStart);
                      opacity = zonePos < 0.15 ? zonePos / 0.15
                        : zonePos > 0.85 ? (1 - zonePos) / 0.15
                        : 1;
                    }
                    if (clamped < 0.02 && i === 0) opacity = 1;
                    if (clamped > 0.98 && i === heroSlides.length - 1) opacity = 1;
                    const isDark = slide.theme !== "light";
                    const textColorClass = isDark ? "text-white" : "text-slate-900";

                    return (
                      <div
                        key={i}
                        className="absolute inset-0 transition-opacity duration-300 ease-out"
                        style={{ opacity, backgroundColor: slide.colors?.[0] || "#231f44", paddingTop: "clamp(5rem, 10vw, 8rem)", paddingBottom: "clamp(4rem, 8vw, 6rem)" }}
                      >
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-6 md:px-8 w-full h-full max-w-8xl mx-auto relative z-10">
                          <div className="relative h-[48vh] md:h-[66vh] w-[260px] md:w-[420px] flex items-center justify-center flex-shrink-0">
                            <img
                              src={slide.src}
                              alt={slide.market || ""}
                              className="absolute h-full w-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.35)] rounded-xl"
                            />
                          </div>
                          <div className={`flex flex-col items-center md:items-start text-center md:text-left flex-shrink-0 max-w-md w-full md:w-auto ${textColorClass}`}>
                            <p className={`meta-label mb-2 leading-snug ${isDark ? '!text-white/50' : '!text-slate-900/50'}`}>
                              A single campaign image generated simultaneously for four different marketplaces.
                            </p>
                            <div className="relative h-7 mb-4 w-full">
                              <span className={`block whitespace-normal text-lg md:text-xl font-semibold tracking-tight w-full ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                {slide.market}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </>
          ) : hasHeroSplit ? (
            <>
              {/* Desktop: sticky split-panel hero with scroll-driven right panel */}
              <section
                ref={heroRef}
                className="hidden md:block w-full border-b border-neutral-200"
                style={{ minHeight: "200vh" }}
              >
                <div
                  className="sticky top-0 z-0 w-full bg-white"
                  style={{ height: "100vh" }}
                >
                  <div className="flex w-full h-full">
                    <div className="w-[68.125%] h-full overflow-hidden relative bg-neutral-100">
                      <img
                        src={heroLeftImage}
                        alt={project.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-[31.875%] h-full overflow-hidden relative bg-neutral-100 border-l border-neutral-200">
                      <img
                        src={heroRightImage}
                        alt={project.title}
                        className="absolute top-0 left-0 w-full object-cover"
                        style={{
                          minHeight: "100vh",
                          transform: `translateY(-${rightImageTranslateY}px)`,
                          transition: "transform 0.1s linear",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Mobile: stacked full-width images */}
              <div className="md:hidden w-full border-b border-neutral-200 bg-neutral-100">
                <img
                  src={heroLeftImage}
                  alt={project.title}
                  className="w-full h-auto"
                />
                <img
                  src={heroRightImage}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
            </>
          ) : (
            /* Single-image hero (no split panels) */
            <div className="w-full border-b border-neutral-200 bg-neutral-100">
              <img
                src={heroSrc}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Metadata (Role / Timeline / Team) — sits below the hero */}
          <div className="w-full border-b border-neutral-200 bg-white">
            <div className="px-6 md:px-12 lg:px-20 py-8 md:py-12 max-w-[1800px] mx-auto">
              <div className="flex flex-col md:flex-row md:flex-wrap gap-x-16 gap-y-6 font-sans">
                <div>
                  <h3 className="text-[11px] font-bold text-warm-400 tracking-[0.25em] uppercase mb-2">Role</h3>
                  <p className="text-[15px] text-warm-700 leading-relaxed">{project.details?.role}</p>
                </div>
                <div>
                  <h3 className="text-[11px] font-bold text-warm-400 tracking-[0.25em] uppercase mb-2">Timeline</h3>
                  <p className="text-[15px] text-warm-700 leading-relaxed">{project.details?.timeline}</p>
                </div>
                <div>
                  <h3 className="text-[11px] font-bold text-warm-400 tracking-[0.25em] uppercase mb-2">Team</h3>
                  <p className="text-[15px] text-warm-700 leading-relaxed">{project.details?.collaborators}</p>
                </div>
              </div>
            </div>
          </div>

        </>
      ) : (
        <div
          className="w-full h-[80vh] border-b border-neutral-200 overflow-hidden relative shadow-sm text-center flex items-center justify-center"
          style={{ backgroundColor: heroBgColor }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={heroSrc}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      <div ref={contentRef} className={`w-full pt-16 md:pt-[calc(var(--header-h)+40px)] font-sans ${isEditorial ? "bg-white" : ""}`}>
        <div className="lg:grid lg:grid-cols-[20rem_1fr] lg:gap-12 pb-10 case-study-layout">
          <aside className="hidden lg:block pl-8 md:pl-14 case-study-anchor">
            <div className="sticky top-[calc(var(--header-h)+24px)]">
              <div className="max-h-[calc(100vh-var(--header-h)-48px)] overflow-auto">
                <CaseStudyAnchorNav
                  sections={sections}
                  onBack={onExit}
                />
              </div>
            </div>
          </aside>

          <div className="px-6 md:px-12 max-w-[1400px] mx-auto text-left case-study-content">
            <div className={`flex-1 w-full lg:pb-12 text-left ${isEditorial ? 'max-w-6xl' : 'max-w-4xl'}`}>
              {!isEditorial && (
                <>
                  <div id="overview" className="case-anchor-target">
                    <ProjectHeader
                      company={project.company}
                      title={project.title}
                      type={project.details?.type || project.type}
                    />
                  </div>

                  <h1 className="font-serif text-[2.5rem] md:text-[3rem] text-warm-900 mb-5 md:mb-6 font-[500] tracking-tight leading-[3rem] md:!leading-[4.2rem] text-left">
                    {project.impactSummarySentence || project.impactSummary}
                  </h1>
                </>
              )}

              {project.designerNote && (
                <div className={`designer-note max-w-full ${isEditorial ? 'mb-14 md:mb-20' : 'mb-8'}`}>
                  {project.designerNote.split("\n").map((line, i) => (
                    <p key={i} className="mb-4 last:mb-0">
                      {line}
                    </p>
                  ))}
                </div>
              )}

              {!isEditorial && (
                <>
                  <ProjectMetadata
                    role={project.details?.role || "Role TBD"}
                    timeline={project.details?.timeline || "Timeline TBD"}
                    status={project.status}
                    collaborators={project.details?.collaborators}
                  />

                  {isPillar && (
                    <SystemContextBanner
                      pillars={PORTFOLIO_DATA.projects.filter((p) => p.parentId === project.parentId)}
                      currentId={project.id}
                      onPillarClick={onNavigateToProject}
                    />
                  )}
                </>
              )}

              {project.details?.blocks && project.details.blocks.map((block, idx) => renderBlock(block, idx))}

              {(prevProject || nextProject) && (
                <CaseStudyPager
                  prevProject={prevProject}
                  nextProject={nextProject}
                  onNavigate={onNavigateToProject}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <ImageLightbox
        open={lightbox.open}
        initialIndex={lightbox.index}
        mediaItems={allMediaItems}
        onClose={() => setLightbox(prev => ({ ...prev, open: false }))}
      />
    </article>
  );
};

export default CaseStudy;