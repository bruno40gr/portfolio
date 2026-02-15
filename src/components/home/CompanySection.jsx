import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import ProjectCard from "./ProjectCard";
import { SystemContextModal } from "../caseStudy/SystemContextBanner";

// ─────────────────────────────────────────────────────────────────────────────
// SystemGroupBracket
// Left border bracket. "Learn more" opens SystemContextModal (same as pillars).
// No donut on the homepage — just the text strip.
// ─────────────────────────────────────────────────────────────────────────────
const SystemGroupBracket = ({ title, pillars, onPillarClick, children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="relative pl-5 md:pl-6 mb-16 md:mb-20">
        <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-[var(--neon-green)] opacity-50" />

        <div className="flex flex-col gap-0.5 mb-8 md:mb-10">
          <p className="meta-label">
            This section is part of the{" "}
            <span className="font-semibold text-slate-700">{title}</span>
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="meta-label text-[var(--deep-purple)] underline underline-offset-2 hover:opacity-70 transition-opacity text-left font-sans"
          >
            Learn more
          </button>
        </div>

        {children}
      </div>

      <SystemContextModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        pillars={pillars}
        currentId={null}
        onPillarClick={onPillarClick}
      />
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// CompanySection
// ─────────────────────────────────────────────────────────────────────────────
const CompanySection = ({ group, onProjectClick }) => {
  const allProjects = group.projectIds
    .map((id) => PORTFOLIO_DATA.projects.find((p) => p.id === id))
    .filter(Boolean);

  const umbrellaProjects = allProjects.filter(
    (p) => !p.parentId && allProjects.some((child) => child.parentId === p.id)
  );

  const getPillars = (umbrellaId) =>
    allProjects.filter((p) => p.parentId === umbrellaId);

  const standaloneProjects = allProjects.filter(
    (p) => !p.parentId && !umbrellaProjects.includes(p)
  );

  const gridStyle = {
    gap: "var(--work-grid-gap-x)",
    rowGap: "clamp(6rem, 8vw, 8rem)",
  };

  return (
    <section className="w-full reveal-on-scroll" style={{ marginBottom: "var(--space-5)" }}>
      <header
        className="border-b border-neutral-200 flex flex-col md:flex-row md:items-baseline justify-between"
        style={{ marginBottom: "var(--space-4)", paddingBottom: "var(--space-2)" }}
      >
        <h2 className="text-4xl text-[color:var(--deep-purple)] font-bold tracking-tight leading-snug font-sans">
          {group.company}
        </h2>
        <h3 className="text-lg font-medium text-slate-500 font-sans flex flex-col md:flex-row">
          <span>{group.roleLine.split(" · ").slice(0, -1).join(" · ")}</span>
          {group.roleLine.split(" · ").length > 1 && (
            <>
              <span className="hidden md:inline">&nbsp;·&nbsp;</span>
              <span>{group.roleLine.split(" · ").pop()}</span>
            </>
          )}
        </h3>
      </header>

      {umbrellaProjects.map((umbrella) => {
        const pillars = getPillars(umbrella.id);
        return (
          <SystemGroupBracket
            key={umbrella.id}
            title={umbrella.title}
            pillars={pillars}
            onPillarClick={onProjectClick}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 md:items-start" style={gridStyle}>
              {pillars.map((p) => (
                <ProjectCard key={p.id} project={p} onClick={onProjectClick} />
              ))}
            </div>
          </SystemGroupBracket>
        );
      })}

      {standaloneProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-start" style={gridStyle}>
          {standaloneProjects.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={onProjectClick} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CompanySection;