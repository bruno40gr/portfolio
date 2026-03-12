import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, HandMetal, ChevronDown } from 'lucide-react';
import LogoIcon from './logoIcon';

// ─── WorkDropdown ─────────────────────────────────────────────────────────────
const WorkDropdown = ({ onProjectClick, closeMenu, workGroups = [], portfolioData = { projects: [] } }) => {
  const [activeCompany, setActiveCompany] = useState('Amazon');
  const [panelKey, setPanelKey] = useState(0);

  const handleProjectClick = (project) => {
    if (closeMenu) closeMenu();
    if (onProjectClick) onProjectClick(project);
  };

  const handleCompanyClick = (company) => {
    if (activeCompany === company) {
      setActiveCompany(null);
    } else {
      setActiveCompany(company);
      setPanelKey(k => k + 1);
    }
  };

  const getProjectsByCompany = (companyName) => {
    const group = workGroups.find(g => g.company === companyName);
    if (!group) return [];
    const ids = group.teams
      ? group.teams.flatMap(t => t.projectIds)
      : (group.projectIds || []);
    return ids
      .map(id => portfolioData.projects.find(p => p.id === id))
      .filter(Boolean);
  };

  const classifyProjects = (projects) => {
    const umbrellas = projects.filter(
      p => !p.parentId && projects.some(c => c.parentId === p.id)
    );
    const pillars = projects.filter(p => p.parentId);
    const standalones = projects.filter(
      p => !p.parentId && !umbrellas.includes(p)
    );
    return { umbrellas, pillars, standalones };
  };

  const activeGroup = workGroups.find(g => g.company === activeCompany);
  const activeYears = activeGroup?.roleLine?.match(/\d{4}[^·]*/)?.[0]?.trim().replace(/\s+to\s+/g, ' – ') || null;
  const allActiveProjects = activeCompany ? getProjectsByCompany(activeCompany) : [];
  const { umbrellas, pillars, standalones } = classifyProjects(allActiveProjects);

  const fontClass = "font-['Source_Sans_3',_sans-serif]";

  const ProjectCard = ({ project, isMobile = false }) => {
    if (isMobile) {
      return (
        <button
          onClick={() => handleProjectClick(project)}
          className="w-full text-left flex flex-col px-3 py-2.5 rounded-sm bg-slate-100 mb-2 group active:bg-slate-200 transition-colors"
        >
          <h4 className="text-[15px] font-semibold text-[#231f44] leading-tight group-hover:underline underline-offset-2">
            {project.title}
          </h4>
          <p className="text-[13px] text-slate-600 mt-1">{project.impactSummary}</p>
        </button>
      );
    }

    return (
      <button
        onClick={() => handleProjectClick(project)}
        className="w-full text-left rounded-sm hover:bg-slate-100 px-3 pt-3 pb-4 mb-2 transition-colors duration-200 group outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14]"
      >
        <h4 className="text-[14px] font-semibold text-[#231f44] leading-tight group-hover:underline underline-offset-2 decoration-[var(--neon-green)] decoration-2">
          {project.title}
        </h4>
        <p className="text-[12px] leading-relaxed text-slate-500 mt-1.5">
          {project.impactSummarySentence}
        </p>
      </button>
    );
  };

  return (
    <>
      {/* DESKTOP */}
      <div className={"hidden md:flex absolute top-full left-0 pt-8 w-[600px] z-[100] " + fontClass}>
        <div className="absolute top-0 left-0 w-full h-8 bg-transparent" />
        <div className="flex w-full bg-white rounded-md shadow-[0_30px_80px_rgba(0,0,0,0.4),0_15px_20px_rgba(0,0,0,0.2)] ring-1 ring-[#231f44]/5 overflow-hidden">

          {/* Left: company list */}
          <div className="w-[175px] bg-[#FBFBFB] border-r border-slate-100 py-4 pr-4 pl-2 flex-shrink-0">
            <nav className="flex flex-col gap-1">
              {workGroups.map((group) => {
                const isActive = activeCompany === group.company;
                return (
                  <button
                    key={group.company}
                    onClick={() => handleCompanyClick(group.company)}
                    className={
                      "case-anchor-link flex items-start text-left transition-colors py-1.5 " +
                      (isActive ? "is-active !text-[#231f44]" : "!text-slate-400 hover:!text-[#231f44]")
                    }
                  >
                    <span className="case-anchor-bullet-wrap mt-0.5" aria-hidden="true">
                      <span className="case-anchor-bullet" />
                    </span>
                    <span className={"type-nav text-[13px] leading-tight " + (isActive ? "font-semibold" : "")}>
                      {group.company}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right: project panel */}
          <div className="flex-1 bg-white p-2 pt-2 pb-4 mt-1 min-h-0">
            {activeYears && (
              <div
                key={panelKey + '-years'}
                className="flex justify-end px-1 mb-1"
                style={{ animation: 'panelFadeIn 300ms ease both' }}
              >
                <span className="text-[10px] text-slate-400 font-normal tracking-wide">{activeYears}</span>
              </div>
            )}
            <div
              key={panelKey}
              className="flex flex-col gap-1 overflow-y-auto max-h-[60vh] overscroll-contain pr-2 custom-scrollbar"
              style={{ animation: activeCompany ? 'panelFadeIn 220ms ease both' : 'none' }}
            >
              {!activeCompany ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-32 opacity-60">
                  <HandMetal size={32} className="text-slate-300 mb-4" />
                  <p className="text-sm font-medium text-slate-500">Select a company to view projects.</p>
                </div>
              ) : allActiveProjects.length > 0 ? (
                <>
                  {umbrellas.map(umbrella => (
                    <div key={umbrella.id} className="relative pl-4 mb-3">
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-[var(--neon-green)] opacity-70" />
                      <p className="text-xs text-slate-400 mb-2 px-1">{umbrella.title}</p>
                      {pillars
                        .filter(p => p.parentId === umbrella.id)
                        .map(project => <ProjectCard key={project.id} project={project} />)
                      }
                    </div>
                  ))}
                  {standalones.map(project => <ProjectCard key={project.id} project={project} />)}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <HandMetal size={32} className="text-slate-200 mb-4" />
                  <p className="text-sm font-medium text-slate-400">Select a case study.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className={"flex md:hidden flex-col w-full " + fontClass}>
        {workGroups.map((group) => {
          const isExpanded = activeCompany === group.company;
          const projects = getProjectsByCompany(group.company);
          const { umbrellas: groupUmbrellas, pillars: groupPillars, standalones: groupStandalones } = classifyProjects(projects);

          return (
            <div key={group.company} className="border-b border-slate-100 last:border-b-0">
              <button
                onClick={() => handleCompanyClick(group.company)}
                className="w-full flex items-center justify-between py-3 px-1 text-[#231f44] transition-colors active:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <div className="scale-90 transform origin-left">
                    <LogoIcon theme={isExpanded ? 'light' : 'dark'} company={group.logo} />
                  </div>
                  <span className={"text-[19px] tracking-tight " + (isExpanded ? "font-bold text-[#231f44]" : "font-semibold text-slate-700")}>
                    {group.company}
                  </span>
                </div>
                <ChevronDown
                  size={18}
                  className={"text-slate-400 transition-transform duration-300 " + (isExpanded ? "rotate-180" : "")}
                />
              </button>

              <div
                className="grid transition-all duration-500 ease-in-out"
                style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <div className="pb-8 pt-1">
                    {groupUmbrellas.map(umbrella => (
                      <div key={umbrella.id} className="relative pl-5 ml-4 mb-3">
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-[var(--neon-green)] opacity-70" />
                        <p className="text-xs text-slate-400 mb-2">{umbrella.title}</p>
                        {groupPillars
                          .filter(p => p.parentId === umbrella.id)
                          .map(project => <ProjectCard key={project.id} project={project} isMobile />)
                        }
                      </div>
                    ))}
                    {groupStandalones.length > 0 && (
                      <div className="ml-4">
                        {groupStandalones.map(project => <ProjectCard key={project.id} project={project} isMobile />)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes panelFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </>
  );
};

export default WorkDropdown;