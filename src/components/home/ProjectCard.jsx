import React from "react";
import { ArrowUpRight, AlertCircle } from "lucide-react";
import { PROJECT_STATUS, PRODUCT_TYPES } from "../../data/tokens";
import Pill from "../ui/Pill";
import { CalloutBox } from "../ui/CalloutBox";
import { ImpactBox } from "../ui/ImpactBox";

const ProjectCard = ({ project, onClick }) => {
  if (!project) return null;

  const { 
    title, 
    thumbnail: image, 
    impactSummary, 
    type: productType, 
    status,
    details = {},
    blocks = [] 
  } = project;

  const statusConfig = PROJECT_STATUS[status] || PROJECT_STATUS.IN_BUILD;
  const StatusIcon = statusConfig.icon || AlertCircle;

  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && onClick) {
      e.preventDefault();
      onClick(project);
    }
  };

  return (
    <div 
      role="button"
      tabIndex={0}
      onClick={() => onClick && onClick(project)}
      onKeyDown={handleKeyDown}
      aria-label={`View project: ${title}`}
      className="group cursor-pointer bg-white overflow-hidden transition-all duration-500 text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-green)] focus-visible:ring-offset-4 rounded-xl"
    >
      {/* Visual Area Wrapper */}
      <div className="relative mb-5">
        <div className="relative aspect-[9/7] md:aspect-[16/10] overflow-hidden rounded-xl bg-slate-50 border border-slate-100">

          <img 
            src={image} 
            alt="" 
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 
              ${status === 'IN_BUILD' ? 'saturate-[0.7]' : ''} 
              ${(status === 'LEGACY' || status === 'DEPRECATED') ? 'saturate-[0.6] opacity-90' : ''}`}
          />
          
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <Pill label={statusConfig.label} theme={statusConfig.theme} icon={statusConfig.icon} size="sm" />
            <span className="px-2.5 py-1 bg-white/90 text-[var(--deep-purple)] text-xs font-bold rounded-md backdrop-blur-md shadow-sm border border-slate-100/50">
              {PRODUCT_TYPES[productType] || productType}
            </span>
          </div>
        </div>

        {/* Floating Action Button: Positioned on the seam (half-in/half-out) */}
        <div className="absolute right-4 bottom-0 translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[var(--deep-purple)] shadow-sm group-hover:bg-[var(--neon-green)] group-hover:border-[var(--neon-green)] transition-all duration-300 z-10">
          <ArrowUpRight size={18} aria-hidden="true" />
        </div>
      </div>

      {/* Content Area */}
      <div className="space-y-2 px-1">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-2xl font-bold text-[var(--deep-purple)] leading-tight tracking-tight font-sans">
            {title}
          </h3>
        </div>

        <p className="text-lg md:text-xl text-slate-600 leading-normal max-w-[95%] font-sans">
          {impactSummary}
        </p>

        {/* Narrative Blocks - Forces size="small" for Card Context */}
        <div className="space-y-3">
          {(() => {
            const impactBlock = details.blocks?.find(b => b.type === 'impact-box');
            if (impactBlock) {
              return <ImpactBox size="small" metrics={impactBlock.metrics} />;
            }
            const calloutBlock = details.blocks?.find(b => b.type === 'callout-box');
            if (calloutBlock) {
              return <CalloutBox size="small" content={calloutBlock.content} />;
            }
            return null;
          })()}
          
          {/* Custom Card blocks (callout/impact) */}
          {blocks.map((block, idx) => {
            if (block.type === 'callout') {
              return <CalloutBox key={`custom-callout-${idx}`} size="small" content={block.content} />;
            }
            if (block.type === 'impact') {
              return <ImpactBox key={`custom-impact-${idx}`} size="small" metrics={block.metrics} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
