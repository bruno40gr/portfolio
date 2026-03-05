import React from "react";
import { ArrowRight, AlertCircle } from "lucide-react";
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
    <div className="bg-white text-left w-full rounded-md">
      {/* Clickable Visual Area */}
      <div 
        role="button"
        tabIndex={0}
        onClick={() => onClick?.(project)}
        onKeyDown={handleKeyDown}
        // Removed overflow-hidden from here so the arrow can hang outside!
        className="group relative mb-5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-green)] focus-visible:ring-offset-4 rounded-xl aspect-[9/7] md:aspect-[16/10] isolate"
      >
        
        {/* INNER WRAPPER: Keeps the image and background clipped to the rounded corners */}
        <div className="absolute inset-0 w-full h-full rounded-md overflow-hidden border border-slate-100">
          {/* LAYER 1: The Background */}
          <div 
            className={`absolute inset-0 w-full h-full ${project.thumbnailBg ? '' : (project.thumbnailBgColor || 'bg-slate-50')}`}
            style={project.thumbnailBg ? { backgroundImage: project.thumbnailBg } : undefined}
          />

          {/* LAYER 2: The Media */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            {heroType === 'animated' ? (
              <AnimatedThumbnail projectId={project.id} />
            ) : (
              <img 
                src={image} 
                alt={title} 
                className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02] 
                  ${project.thumbnailPadding ? `object-contain ${project.thumbnailPadding}` : 'object-cover'} 
                  ${status === 'IN_BUILD' ? 'saturate-[0.7]' : ''} 
                  ${(status === 'LEGACY' || status === 'DEPRECATED') ? 'saturate-[0.6] opacity-90' : ''}`}
              />
            )}
          </div>
        </div>

        {/* LAYER 3: The Overlay (Pills) */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 pointer-events-none">
          <Pill label={statusConfig.label} theme={statusConfig.theme} icon={statusConfig.icon} size="sm" />
          <span className="uppercase tracking-wider px-2.5 py-1 bg-white/90 text-[var(--deep-purple)] text-xs font-bold rounded-sm backdrop-blur-md shadow-sm border border-slate-100/50">
            {PRODUCT_TYPES[productType] || productType}
          </span>
        </div>

        {/* Hover Arrow - Free from overflow-hidden, it can now hang properly */}
<div className="absolute right-4 bottom-0 translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#231f44] shadow-[0_4px_12px_rgba(35,31,68,0.2)] group-hover:bg-[#a6fa4e] group-hover:text-[#13102e] group-hover:shadow-[0_6px_16px_rgba(166,250,78,0.5)] group-hover:-translate-y-[calc(-50%+4px)] transition-all duration-300 ease-out z-20">
  <ArrowRight size={22} className="-rotate-45 transition-transform duration-300" />
</div>
      </div>

      {/* Static Content Area */}
      <div className="flex flex-col gap-2 px-1">
        <h3 className="text-2xl font-bold text-neutral-900 leading-tight tracking-tight">{title}</h3>
        <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4 md:mb-6 max-w-[95%]">{impactSummary}</p>
        <div className="space-y-3">{renderBlocks()}</div>
      </div>
    </div>
  );
};

export default ProjectCard;