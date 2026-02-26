import React, { useMemo } from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Maximize2 } from "lucide-react";

import { PORTFOLIO_DATA } from "../../data/portfolioData";

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

import "./GalleryStyles.css";

const CaseStudy = ({ project, onNavigateToProject, onExit }) => {
  const contentRef = useRef(null);
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const isPillar = !!project.parentId;
  const rootProject = isPillar ? PORTFOLIO_DATA.projects.find((p) => p.id === project.parentId) : null;
  const subPillars = PORTFOLIO_DATA.projects.filter((p) => p.parentId === project.id);

  const allCaseStudies = PORTFOLIO_DATA.projects.filter((p) => p.status !== "coming-soon");
  const currentIdx = allCaseStudies.findIndex((p) => p.id === project.id);
  const prevProject = currentIdx > 0 ? allCaseStudies[currentIdx - 1] : null;
  const nextProject = currentIdx >= 0 && currentIdx < allCaseStudies.length - 1 ? allCaseStudies[currentIdx + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  const allMediaItems = useMemo(() => {
    const media = [];
    let lastHeading = 'Assets in this case study';
    project.details?.blocks?.forEach(block => {
      if (block.type === 'heading') {
        lastHeading = block.title;
      }
      if (block.type === 'video') {
        const caption = block.caption || '';
        const isCaptionObj = typeof caption === 'object' && caption !== null && caption.short;
        const captionShort = isCaptionObj ? caption.short : caption;
        const captionVerbose = isCaptionObj ? caption.verbose : '';
        media.push({
          type: 'video',
          src: block.src,
          title: captionShort || 'Visual',
          captionShort,
          captionVerbose,
          fileSize: 'N/A',
          processStepTitle: lastHeading,
        });
      } else if (block.type === 'figma') {
        const caption = block.caption || '';
        const isCaptionObj = typeof caption === 'object' && caption !== null && caption.short;
        const captionShort = isCaptionObj ? caption.short : caption;
        const captionVerbose = isCaptionObj ? caption.verbose : '';
        media.push({
          type: 'figma',
          src: block.src,
          title: captionShort || 'Visual',
          captionShort,
          captionVerbose,
          fileSize: 'N/A',
          processStepTitle: lastHeading,
          aspectRatio: block.aspectRatio,
        });
      } else if (block.type === 'image-full') {
        const imageCaption = typeof block.caption === 'object' && block.caption !== null ? block.caption.short : block.caption;
        const imageCaptionVerbose = typeof block.caption === 'object' && block.caption !== null ? block.caption.verbose : '';
        media.push({
          type: 'image',
          src: block.src,
          title: imageCaption || 'Visual',
          captionShort: imageCaption || '',
          captionVerbose: imageCaptionVerbose || '',
          fileSize: 'N/A',
          processStepTitle: lastHeading,
        });
      } else if (block.type === 'list' && block.items) {
        block.items.forEach(item => {
          const itemContent = (item && typeof item === 'object' && !Array.isArray(item)) ? item.content : item;
          const processStepTitleMatch = itemContent.match(/<span class="process-step-title"><b>(.*?)<\/b><\/span>/);
          const processStepTitle = processStepTitleMatch ? processStepTitleMatch[1] : 'Assets in this case study';

          if (item.visuals) {
            item.visuals.forEach(visual => {
              let type = 'image';
              if (visual.kind === 'embed') type = 'video';
              else if (visual.src && visual.src.includes('.pdf')) type = 'pdf';
              else if (visual.kind === 'figma') type = 'figma';

              const caption = visual.caption || '';
              const isCaptionObj = typeof caption === 'object' && caption !== null && caption.short;
              const captionShort = isCaptionObj ? caption.short : caption;
              const captionVerbose = isCaptionObj ? caption.verbose : '';

              media.push({
                type,
                src: visual.src,
                title: captionShort || 'Visual',
                captionShort,
                captionVerbose,
                fileSize: visual.fileSize || 'N/A',
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
        const textClass = block.subtype === "designer-note" ? "designer-note" : "text-lg text-neutral-700 leading-relaxed";
        return (
          <section key={index} className="mb-10 text-left">
            {block.title && (
              <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                {block.title}
              </h3>
            )}
            {Array.isArray(block.content) ? (
              block.content.map((p, i) => (
                <p key={i} className={`${textClass} mb-4 md:mb-6`} dangerouslySetInnerHTML={{ __html: p }} />
              ))
            ) : (
              <p className={textClass} dangerouslySetInnerHTML={{ __html: block.content }} />
            )}
          </section>
        );
      }

      case "callout-box":
        return <CalloutBox key={index} content={block.content} size="large" />;

      case "impact-box":
        return <ImpactBox key={index} metrics={block.metrics} size="large" />;

      case "heading": {
        if (block.title === "Overview") return null;
        const slug = block.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const showBorder = block.hasDivider !== false;
        return (
          <section
            id={slug}
            key={index}
            className={`mb-4 text-left case-anchor-target ${showBorder ? "mt-10 pt-10" : ""}`}
          >
            <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">{block.title}</h2>
          </section>
        );
      }

      case "image-full": {
        const globalIndex = allMediaItems.findIndex(item => item.src === block.src);
        const imageCaption = typeof block.caption === 'object' && block.caption !== null ? block.caption.short : block.caption;
        return (
          <div key={index} className="mb-10 px-6 md:px-0">
            <button
              type="button"
              onClick={() => { if (globalIndex !== -1) setLightbox({ open: true, index: globalIndex }); }}
              className="group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-green)] rounded-xl"
              aria-label="Expand image"
            >
              <div className="relative w-full bg-white border border-neutral-200 rounded-xl transition-all duration-300 ease-out p-2 shadow-sm group-hover:shadow-md group-hover:border-neutral-300">
                <div className="relative rounded-lg overflow-hidden w-full">
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

      case "video": {
        const globalIndex = allMediaItems.findIndex(item => item.src === block.src);
        const videoCaption = typeof block.caption === 'object' && block.caption !== null ? block.caption.short : block.caption;
        return (
          <div key={index} className="mb-10">
            <VideoThumbnail
              src={block.src}
              caption={videoCaption}
              onClick={() => setLightbox({ open: true, index: globalIndex })}
            />
            {videoCaption && <Caption>{videoCaption}</Caption>}
          </div>
        );
      }

      case "table":
        return <DataTable key={index} columns={block.columns} rows={block.rows} />;

      case "figma": {
        const globalIndex = allMediaItems.findIndex(item => item.src === block.src);
        const figmaCaption = typeof block.caption === 'object' && block.caption !== null ? block.caption.short : block.caption;
        return (
          <div key={index} className="mb-10">
            <FigmaThumbnail
              src={block.src}
              caption={figmaCaption}
              coverImage={block.coverImage}
              aspectRatio={block.aspectRatio}
              onClick={() => setLightbox({ open: true, index: globalIndex })}
            />
            {figmaCaption && <Caption>{figmaCaption}</Caption>}
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
          <section key={index} className="mb-8 md:mb-12 text-left font-sans">
            <ul className="space-y-10 md:space-y-16 font-sans">
              {block.items.map((item, i) => {
                const isObj = item && typeof item === "object" && !Array.isArray(item);
                const itemContent = isObj ? item.content : item;
                const visuals = isObj ? item.visuals : null;
                const mediaItems = visuals ? visuals.map(visual => {
                  const caption = visual.caption || '';
                  const isCaptionObj = typeof caption === 'object' && caption !== null && caption.short;
                  const captionShort = isCaptionObj ? caption.short : caption;
                  const captionVerbose = isCaptionObj ? caption.verbose : '';
                  return {
                    type: visual.kind === 'embed' ? 'video' : (visual.src && visual.src.includes('.pdf') ? 'pdf' : (visual.kind === 'figma' ? 'figma' : 'image')),
                    src: visual.src,
                    title: captionShort || 'Visual',
                    captionShort,
                    captionVerbose,
                    fileSize: visual.fileSize || 'N/A',
                    coverImage: visual.coverImage,
                    aspectRatio: visual.aspectRatio,
                  };
                }) : [];

                return (
                  <li
                    key={i}
                    className="process-list-item flex gap-3 md:gap-4 items-start text-lg text-neutral-700 leading-relaxed"
                  >
                    <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-[var(--green-process)] shrink-0">
                      <ArrowRight size={14} strokeWidth={3} className="text-[#231F45]" />
                    </div>

                    <div className="flex-1">
                      <div dangerouslySetInnerHTML={{ __html: itemContent }} />

                      {mediaItems.length > 0 && (
                        <div className="mt-6">
                          <div className={mediaItems.length === 1 ? "grid grid-cols-1" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
                            {mediaItems.map((mediaItem, vi) => {
                              const globalIndex = allMediaItems.findIndex(item => item.src === mediaItem.src);
                              return (
                                <div key={vi}>
                                  {mediaItem.type === 'video' ? (
                                    <VideoThumbnail
                                      src={mediaItem.src}
                                      caption={mediaItem.captionShort}
                                      onClick={() => setLightbox({ open: true, index: globalIndex })}
                                    />
                                  ) : mediaItem.type === 'pdf' ? (
                                    <FileThumbnail
                                      title={mediaItem.title}
                                      fileSize={mediaItem.fileSize}
                                      onClick={() => setLightbox({ open: true, index: globalIndex })}
                                    />
                                  ) : mediaItem.type === 'figma' ? (
                                    <FigmaThumbnail
                                      src={mediaItem.src}
                                      caption={mediaItem.captionShort}
                                      coverImage={mediaItem.coverImage}
                                      aspectRatio={mediaItem.aspectRatio}
                                      onClick={() => setLightbox({ open: true, index: globalIndex })}
                                    />
                                  ) : (
                                    <ImageThumbnail
                                      src={mediaItem.src}
                                      alt={mediaItem.title}
                                      onClick={() => setLightbox({ open: true, index: globalIndex })}
                                    />
                                  )}
                                  <p className="type-caption text-left text-neutral-600 text-[14px] font-normal leading-relaxed mt-2 md:mt-3 font-serif">
                                    {mediaItem.captionShort}
                                  </p>
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
        id: b.title === "Overview" ? "overview" : b.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
      })) || [];

  const heroSrc = project.details?.heroImage || project.thumbnail;
  const heroType = project.details?.hero?.type;

  return (
    <article className="bg-white min-h-screen w-full relative text-left font-sans">
      {heroType === 'animated' ? (
        <AnimatedHero />
      ) : (
        <div className="w-full h-[60vh] md:h-[80vh] bg-neutral-100 border-b border-neutral-200 overflow-hidden relative shadow-sm text-center">
          <img src={heroSrc} alt={project.title} className="w-full h-full object-cover" />
        </div>
      )}

      <div
        ref={contentRef}
        className="w-full pt-12 md:pt-[calc(var(--header-h)+40px)] font-sans"
      >
        <div className="lg:grid lg:grid-cols-[20rem_1fr] lg:gap-12 pb-10 case-study-layout">
          <aside className="hidden lg:block pl-8 md:pl-14 case-study-anchor">
            <div className="sticky top-[calc(var(--header-h)+24px)]">
              <div className="max-h-[calc(100vh-var(--header-h)-48px)] overflow-auto">
                <CaseStudyAnchorNav sections={sections} onBack={isPillar ? () => onNavigateToProject(rootProject) : onExit} />
              </div>
            </div>
          </aside>

          <div className="px-6 md:px-12 max-w-[1400px] mx-auto text-left case-study-content">
            <div className="flex-1 w-full lg:pb-12 max-w-4xl text-left">
              <div id="overview" className="case-anchor-target">
                <ProjectHeader company={project.company} title={project.title} services={project.details?.services} />
              </div>
              <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] text-slate-900 mb-5 md:mb-6 font-[500] tracking-tight leading-[3rem] md:!leading-[4.5rem] text-left">
                {project.impactSummarySentence || project.impactSummary}
              </h1>

              {project.designerNote && (
                <div className="designer-note mb-8 max-w-full">
                  {project.designerNote.split('\n').map((line, i) => (
                    <p key={i} className="mb-4 last:mb-0">
                      {line}
                    </p>
                  ))}
                </div>
              )}

              <ProjectMetadata
                role={project.details?.role || "Role TBD"}
                timeline={project.details?.timeline || "Timeline TBD"}
                status={project.status}
                type={project.type || project.details?.type}
                services={project.details?.services || []}
              />

              {isPillar && (
                <SystemContextBanner
                  pillars={PORTFOLIO_DATA.projects.filter((p) => p.parentId === project.parentId)}
                  currentId={project.id}
                  onPillarClick={onNavigateToProject}
                />
              )}

              {project.details?.blocks && project.details.blocks.map((block, index) => renderBlock(block, index))}

              {(prevProject || nextProject) && (
                <CaseStudyPager prevProject={prevProject} nextProject={nextProject} onNavigate={onNavigateToProject} />
              )}
            </div>
          </div>
        </div>
      </div>
      <ImageLightbox
        open={lightbox.open}
        initialIndex={lightbox.index}
        mediaItems={allMediaItems}
        onClose={() => setLightbox({ ...lightbox, open: false })}
      />
    </article>
  );
};

export default CaseStudy;