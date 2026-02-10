import React, { useMemo } from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

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
    project.details?.blocks?.forEach(block => {
      if (block.type === 'list' && block.items) {
        block.items.forEach(item => {
          if (item.visuals) {
            item.visuals.forEach(visual => {
              let type = 'image';
              if (visual.kind === 'embed') type = 'video';
              else if (visual.src && visual.src.includes('.pdf')) type = 'pdf';
              else if (visual.kind === 'figma') type = 'figma';

              media.push({
                type,
                src: visual.src,
                title: visual.caption || 'Visual',
                captionShort: visual.caption || '',
                captionParagraph: '',
                fileSize: visual.fileSize || 'N/A',
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
        <h3 className="text-lg md:text-xl text-slate-900 mb-2 md:mb-3 font-bold leading-snug">
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
            <h2 className="text-[2.75rem] md:text-[3rem] text-slate-900 font-[600] tracking-tight leading-normal">{block.title}</h2>
          </section>
        );
      }

      case "image-full":
        return (
          <div key={index} className="mb-24 px-6 md:px-0">
      <div
        ref={contentRef}
        className="w-full pt-12 md:pt-[calc(var(--header-h)+40px)]"
      >
              <img
                src={block.src}
                alt={block.caption}
                className="w-full h-auto object-cover rounded-sm group-hover:scale-[1.01] transition-transform duration-1000"
              />
            </div>
            {block.caption && <Caption>{block.caption}</Caption>}
          </div>
        );

      case "video":
        return (
          <div key={index} className="mb-10">
            <div className="w-full aspect-video bg-neutral-100 border border-neutral-200 overflow-hidden mb-2 rounded-sm shadow-sm p-4">
              <iframe
                src={block.src}
                title="Video content"
                className="w-full h-full shadow-sm rounded-sm"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {block.caption && <Caption>{block.caption}</Caption>}
          </div>
        );

      case "table":
        return <DataTable key={index} columns={block.columns} rows={block.rows} />;

            case "figma":
        return (
          <div key={index} className="mb-10">
            <FigmaThumbnail src={block.src} caption={block.caption} />
            {block.caption && <Caption>{block.caption}</Caption>}
          </div>
        );
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
                const mediaItems = visuals ? visuals.map(visual => ({
                  type: visual.kind === 'embed' ? 'video' : (visual.src && visual.src.includes('.pdf') ? 'pdf' : (visual.kind === 'figma' ? 'figma' : 'image')),
                  src: visual.src,
                  title: visual.caption || 'Visual',
                  captionShort: visual.caption || '',
                  captionParagraph: '',
                  fileSize: visual.fileSize || 'N/A',
                })) : [];

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
                                      <VideoThumbnail src={mediaItem.src} caption={mediaItem.captionShort} onClick={() => setLightbox({ open: true, index: globalIndex })} />
                                    ) : mediaItem.type === 'pdf' ? (
                                      <FileThumbnail 
                                        title={mediaItem.title}
                                        fileSize={mediaItem.fileSize}
                                        onClick={() => setLightbox({ open: true, index: globalIndex })}
                                      />
                                    ) : mediaItem.type === 'figma' ? (
                                      <FigmaThumbnail src={mediaItem.src} caption={mediaItem.captionShort} />
                                    ) : (
                                      <ImageThumbnail 
                                        src={mediaItem.src}
                                        alt={mediaItem.title}
                                        onClick={() => setLightbox({ open: true, index: globalIndex })}
                                      />
                                    )}
                                    <p className="type-caption text-left text-neutral-500 text-[16px] font-normal leading-relaxed mt-2 md:mt-3 font-sans">
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

  return (
    <article className="bg-white min-h-screen w-full relative text-left font-sans">
      <div className="w-full h-[60vh] md:h-[80vh] bg-neutral-100 border-b border-neutral-200 overflow-hidden relative shadow-sm text-center">
        <img src={heroSrc} alt={project.title} className="w-full h-full object-cover" />
      </div>

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
        mediaItems={allMediaItems.filter(item => item.type !== 'figma')} 
        onClose={() => setLightbox({ ...lightbox, open: false })} 
      />
    </article>
  );
};

export default CaseStudy;