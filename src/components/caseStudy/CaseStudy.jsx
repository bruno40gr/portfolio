import React from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { PROJECT_STATUS, PRODUCT_TYPES } from "../../data/tokens";

import Caption from "../ui/Caption";
import CalloutBox from "../ui/CalloutBox";
import ImpactBox from "../ui/ImpactBox";
import DataTable from "../ui/DataTable";
import ProjectMetadata from "../ui/ProjectMetadata";

import ProjectCard from "../home/ProjectCard";

import ImageLightbox from "./ImageLightbox";
import CaseStudyPager from "./CaseStudyPager";
import CaseStudyAnchorNav from "./CaseStudyAnchorNav";
import ProjectHeader from "./ProjectHeader";

const CaseStudy = ({ project, onNavigateToProject, onExit }) => {
  const contentRef = useRef(null);
  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "", caption: "" });

  const isPillar = !!project.parentId;
  const rootProject = isPillar ? PORTFOLIO_DATA.projects.find((p) => p.id === project.parentId) : null;
  const subPillars = PORTFOLIO_DATA.projects.filter((p) => p.parentId === project.id);

  const allCaseStudies = PORTFOLIO_DATA.projects.filter((p) => !p.summary?.includes("Coming soon"));
  const currentIdx = allCaseStudies.findIndex((p) => p.id === project.id);
  const prevProject = currentIdx > 0 ? allCaseStudies[currentIdx - 1] : null;
  const nextProject = currentIdx >= 0 && currentIdx < allCaseStudies.length - 1 ? allCaseStudies[currentIdx + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  const renderBlock = (block, index) => {
    switch (block.type) {
      case "text":
        return (
          <section key={index} className="mb-10 text-left">
            {block.title && (
              <h3 className="text-lg md:text-xl text-slate-900 mb-2 md:mb-3 font-bold leading-snug">
                {block.title}
              </h3>
            )}
            {Array.isArray(block.content) ? (
              block.content.map((p, i) => (
                <p key={i} className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4 md:mb-6">
                  {p}
                </p>
              ))
            ) : (
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed">{block.content}</p>
            )}
          </section>
        );

      case "callout-box":
        return <CalloutBox key={index} content={block.content} />;

      case "impact-box":
        return <ImpactBox key={index} metrics={block.metrics} description={block.description} />;

      case "heading": {
        if (block.title === "Overview") return null;
        const slug = block.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const showBorder = block.hasDivider !== false;
        return (
          <section
            id={slug}
            key={index}
            className={`mb-6 text-left case-anchor-target ${showBorder ? "mt-10 pt-10" : ""}`}
          >
            <h2 className="text-xl md:text-2xl text-slate-900 font-bold tracking-tight leading-snug">{block.title}</h2>
          </section>
        );
      }

      case "image-full":
        return (
          <div key={index} className="mb-24 px-6 md:px-0">
            <div
              className="w-full bg-neutral-100 overflow-hidden mb-4 rounded-sm shadow-sm p-4 md:p-8 cursor-zoom-in group"
              onClick={() => setLightbox({ open: true, src: block.src, alt: block.caption, caption: block.caption })}
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

        const isSafeEmbedUrl = (url) => {
          if (!url || typeof url !== "string") return false;
          if (!url.startsWith("http")) return false;

          const allowedHosts = [
            "www.youtube.com",
            "youtube.com",
            "www.youtube-nocookie.com",
            "player.cloudinary.com"
          ];

          try {
            const u = new URL(url);
            return allowedHosts.includes(u.hostname);
          } catch {
            return false;
          }
        };

        const inferVisualKind = (v) => {
          if (v?.kind === "embed" || v?.kind === "image") return v.kind;
          const src = v?.src || "";
          if (src.includes("player.cloudinary.com/embed")) return "embed";
          if (src.includes("youtube.com/embed") || src.includes("youtube-nocookie.com/embed")) return "embed";
          return "image";
        };

        return (
          <section key={index} className="mb-8 md:mb-12 text-left font-body">
            <ul className="space-y-10 md:space-y-16">
              {block.items.map((item, i) => {
                const isObj = item && typeof item === "object" && !Array.isArray(item);
                const itemContent = isObj ? item.content : item;
                const visuals = isObj ? item.visuals : null;

                return (
                  <li
                    key={i}
                    className="flex gap-3 md:gap-4 items-start text-sm md:text-lg leading-relaxed text-neutral-700"
                  >
                    <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-[var(--green-process)] shrink-0">
                      <ArrowRight size={14} strokeWidth={3} className="text-[#231F45]" />
                    </div>

                    <div className="flex-1">
                      <div dangerouslySetInnerHTML={{ __html: itemContent }} />

                      {Array.isArray(visuals) && visuals.filter((v) => v && v.src).length > 0 && (() => {
                        const safeVisuals = visuals.filter((v) => v && v.src);
                        const isSingle = safeVisuals.length === 1;

                        return (
                          <div className="mt-6">
                            <div className={isSingle ? "grid grid-cols-1" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
                              {safeVisuals.map((v, vi) => {
                                const kind = inferVisualKind(v);

                                if (kind === "embed") {
                                  const ok = isSafeEmbedUrl(v.src);

                                  return (
                                    <div key={vi} className="text-left w-full">
                                      <div className="bg-neutral-100 border border-neutral-200 rounded-sm overflow-hidden shadow-sm p-3 w-full">
                                        {ok ? (
                                          <div className="w-full aspect-video rounded-sm overflow-hidden bg-black">
                                            <iframe
                                              src={v.src}
                                              title={v.caption || "Embedded video"}
                                              className="w-full h-full"
                                              frameBorder="0"
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                              allowFullScreen
                                            />
                                          </div>
                                        ) : (
                                          <div className="w-full rounded-sm bg-white p-4 text-sm text-neutral-600 border border-neutral-200">
                                            Embed blocked (untrusted URL). Use a YouTube or Cloudinary embed link.
                                          </div>
                                        )}
                                      </div>
                                      {v.caption && <Caption>{v.caption}</Caption>}
                                    </div>
                                  );
                                }

                                return (
                                  <button
                                    key={vi}
                                    type="button"
                                    className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10 w-full"
                                    onClick={() =>
                                      setLightbox({
                                        open: true,
                                        src: v.src,
                                        alt: v.caption || "Process visual",
                                        caption: v.caption || ""
                                      })
                                    }
                                    aria-label={v.caption ? `Open image: ${v.caption}` : "Open image"}
                                  >
                                    <div className="bg-neutral-100 border border-neutral-200 rounded-sm overflow-hidden shadow-sm p-3 cursor-zoom-in w-full">
                                      <img
                                        src={v.src}
                                        alt={v.caption || "Process visual"}
                                        loading="lazy"
                                        decoding="async"
                                        className={
                                          isSingle
                                            ? "w-full h-auto object-contain rounded-sm"
                                            : "w-full aspect-[16/10] object-cover rounded-sm"
                                        }
                                      />
                                    </div>
                                    {v.caption && <Caption>{v.caption}</Caption>}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })()}
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
    <article className="bg-white min-h-screen w-full relative text-left">
      <div className="w-full h-[60vh] md:h-[80vh] bg-neutral-100 border-b border-neutral-200 overflow-hidden relative shadow-sm text-center">
        <img src={heroSrc} alt={project.title} className="w-full h-full object-cover" />
      </div>

      <div
        ref={contentRef}
        className="w-full pt-12 md:pt-[calc(var(--header-h)+40px)]"
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
            <h1 className="text-3xl md:text-[2.5rem] text-slate-900 mb-5 md:mb-6 font-[600] tracking-tight !leading-snug md:!leading-[3.5rem] text-left">
              {project.impactSummary || project.summary}
            </h1>
            <h3 className="text-[1.05rem] md:text-[1.2rem] text-neutral-700 font-light leading-relaxed md:leading-[1.9] mb-6">
              {project.summary}
            </h3>

            <ProjectMetadata
              role={project.details?.role || "Role TBD"}
              timeline={project.details?.timeline || "Timeline TBD"}
              status={project.details?.status || PROJECT_STATUS.IN_BUILD}
              type={project.details?.type || PRODUCT_TYPES.INTERNAL}
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
        isOpen={lightbox.open}
        src={lightbox.src}
        alt={lightbox.alt}
        caption={lightbox.caption}
        onClose={() => setLightbox({ open: false, src: "", alt: "", caption: "" })}
      />
    </article>
  );
};

export default CaseStudy;
