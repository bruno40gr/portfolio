import React from "react";
import { ArrowUpRight, AlertCircle } from "lucide-react";
import { PROJECT_STATUS, PRODUCT_TYPES } from "../../data/tokens";
import Pill from "../ui/Pill";
import { CalloutBox } from "../ui/CalloutBox";
import { ImpactBox } from "../ui/ImpactBox";
import AnimatedThumbnail from "./AnimatedThumbnail";

const ProjectCard = ({ project, onClick }) => {
  if (!project) return null;

  const { title, thumbnail: image, impactSummary, type: productType, status, details = {}, blocks = [] } = project;
  const statusConfig = PROJECT_STATUS[status] || PROJECT_STATUS.IN_BUILD;

  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && onClick) {
      e.preventDefault();
      onClick(project);
    }
  };

  // Helper to render blocks without the messy inline IIFE
  const renderBlocks = () => {
    const allBlocks = [
      ...(details.blocks || []),
      ...blocks.map(b => ({ ...b, type: b.type === 'callout' ? 'callout-box' : b.type === 'impact' ? 'impact-box' : b.type }))
    ];

    const impactBlock = allBlocks.find(block => block.type === 'impact-box');
    if (impactBlock) {
      return <ImpactBox size="small" metrics={impactBlock.metrics} />;
    }

    const calloutBlock = allBlocks.find(block => block.type === 'callout-box');
    if (calloutBlock) {
      return <CalloutBox size="small" content={calloutBlock.content || calloutBlock.text} />;
    }

    return null;
  };

  const heroType = details.hero?.type;

  return (
    <div className="bg-white overflow-hidden text-left w-full rounded-xl">
      {/* Clickable Visual Area */}
      <div 
        role="button"
        tabIndex={0}
        onClick={() => onClick?.(project)}
        onKeyDown={handleKeyDown}
        className="group relative mb-5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-green)] focus-visible:ring-offset-4 rounded-xl"
      >
        <div className="relative aspect-[9/7] md:aspect-[16/10] overflow-hidden rounded-xl bg-slate-50 border border-slate-100">
          {heroType === 'animated' ? (
            <AnimatedThumbnail projectId={project.id} />
          ) : (
            <img 
              src={image} 
              alt="" 
              className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 
                ${status === 'IN_BUILD' ? 'saturate-[0.7]' : ''} 
                ${(status === 'LEGACY' || status === 'DEPRECATED') ? 'saturate-[0.6] opacity-90' : ''}`}
            />
          )}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <Pill label={statusConfig.label} theme={statusConfig.theme} icon={statusConfig.icon} size="sm" />
            <span className="px-2.5 py-1 bg-white/90 text-[var(--deep-purple)] text-xs font-bold rounded-md backdrop-blur-md shadow-sm border border-slate-100/50">
              {PRODUCT_TYPES[productType] || productType}
            </span>
          </div>
        </div>

        <div className="absolute right-4 bottom-0 translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[var(--deep-purple)] shadow-sm group-hover:bg-[var(--neon-green)] group-hover:border-[var(--neon-green)] transition-all duration-300 z-10">
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Static Content Area */}
      <div className="flex flex-col gap-2 px-1">
        <h3 className="text-2xl font-bold text-[var(--deep-purple)] leading-tight tracking-tight">{title}</h3>
        <p className="text-lg text-slate-600 leading-normal max-w-[95%]">{impactSummary}</p>
        <div className="space-y-3">{renderBlocks()}</div>
      </div>
    </div>
  );
};

export default ProjectCard;