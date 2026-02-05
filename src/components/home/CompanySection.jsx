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
        <h2 className="!text-[2rem] md:text-2xl text-[color:var(--deep-purple)] font-bold tracking-tight leading-snug">{group.company}</h2>
        <h3 className="text-base font-medium text-neutral-800">{group.roleLine}</h3>
      </header>

      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: "var(--work-grid-gap-x)", rowGap: "var(--work-grid-gap-y)" }}
      >
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            onClick={onProjectClick}
            showCompany={false}
            showImpactSummarySentence
          />
        ))}
      </div>
    </section>
  );
};

export default CompanySection;
