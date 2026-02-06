import React from "react";
import Pill from "../ui/Pill";



const ProjectCard = ({
  project,
  onClick,
  showCompany = false,
  showImpactSummary = false,
  showImpactSummarySentence = false,
  showPills = true
}) => {
  const isPlaceholder = project.status === "coming-soon";

  const statusObj = project.details?.status || project.status;
  const typeLabel = project.details?.type || project.type;

  const content = (
    <div className="w-full flex flex-col">
      <div
        className={`relative overflow-hidden rounded-md bg-neutral-100 border transition-all duration-500 ${
          !isPlaceholder
            ? "border-neutral-100 group-hover:border-[var(--neon-green)] group-hover:shadow-[0_0_20px_rgba(166,250,78,0.45)] group-hover:-translate-y-1"
            : "border-neutral-200 grayscale opacity-60"
        } aspect-[9/7] md:aspect-[16/10]`}
        style={{ marginBottom: "var(--space-1)" }}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
            !isPlaceholder ? "group-hover:scale-105" : "grayscale opacity-50"
          }`}
        />
        {!isPlaceholder && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--neon-green)]/5 via-transparent to-transparent" />
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-all duration-1000 group-hover:left-[100%]" />
          </div>
        )}
        {isPlaceholder && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-[2px]">
            <span className="bg-neutral-900 text-white px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-md">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      <div className="px-1 text-left flex flex-col gap-0.5">
        {showCompany && (
          <span className="text-[12px] font-medium text-neutral-500 block">{project.company}</span>
        )}

        <h2
          className={`text-[color:var(--deep-purple)] text-2xl md:text-2xl text-slate-900 font-bold tracking-tight leading-snug ${
            !isPlaceholder ? "group-hover:text-[#1B1537]" : ""
          }`}
        >
          {project.title}
        </h2>
        <p className="type-caption text-neutral-500 leading-snug mb-1">
          {project.impactSummary}
        </p>
        {showPills && (
          <div className="flex flex-wrap items-center gap-2">
            {statusObj && <Pill label={statusObj.label} theme={statusObj.theme} icon={statusObj.icon} size="md" />}
            {typeLabel && <Pill label={typeLabel} size="md" />}
          </div>
        )}
      </div>
    </div>
  );

  if (isPlaceholder) return <div className="w-full" aria-label="Coming soon">{content}</div>;

  return (
    <button
      className="w-full group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10 rounded-xl"
      onClick={() => onClick(project)}
      aria-label={`View ${project.title}`}
    >
      {content}
    </button>
  );
};

export default ProjectCard;
