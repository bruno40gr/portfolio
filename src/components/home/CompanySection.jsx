import React from "react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import ProjectCard from "./ProjectCard";

const CompanySection = ({ group, onProjectClick }) => {
  const projects = group.projectIds
    .map((id) => PORTFOLIO_DATA.projects.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section className="w-full reveal-on-scroll" style={{ marginBottom: "var(--space-5)" }}>
      <header
        className="border-b border-neutral-200 flex flex-col md:flex-row md:items-baseline justify-between"
        style={{ marginBottom: "var(--space-4)", paddingBottom: "var(--space-2)" }}
      >
        <h2 className="text-4xl text-[color:var(--deep-purple)] font-bold tracking-tight leading-snug font-sans">
          {group.company}
        </h2>
        <h3 className="text-base font-medium text-slate-500 font-sans">
          {group.roleLine}
        </h3>
      </header>

      <div
        className="grid grid-cols-1 md:grid-cols-2 md:items-start"
        style={{ 
  gap: "var(--work-grid-gap-x)", 
  rowGap: "clamp(6rem, 8vw, 8rem)" 
}}
      >
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            onClick={onProjectClick}
          />
        ))}
      </div>
    </section>
  );
};

export default CompanySection;
