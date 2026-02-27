import React, { useState, useRef, useEffect } from 'react';
import { Briefcase, ChevronDown, ArrowUpRight } from 'lucide-react';
import LogoIcon from './logoIcon';
import Pill from './Pill';
import { PROJECT_STATUS, PRODUCT_TYPES } from '../../data/tokens';

const WorkDropdown = ({ onProjectClick, closeMenu, workGroups = [], portfolioData = { projects: [] } }) => {
  const [activeCompany, setActiveCompany] = useState(workGroups[0]?.company || null);
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const handleProjectClick = (project) => {
    if (onProjectClick) onProjectClick(project);
    if (closeMenu) closeMenu();
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

  const allActiveProjects = activeCompany ? getProjectsByCompany(activeCompany) : [];
  const { umbrellas, pillars, standalones } = classifyProjects(allActiveProjects);

  const fontClass = "font-['Source_Sans_3',_sans-serif]";

  // Measures the real pixel height of children and animates to it
  const ExpandingContent = ({ isExpanded, children }) => {
    const innerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
      if (innerRef.current) {
        setHeight(innerRef.current.scrollHeight);
      }
    });

    return (
      <div
        style={{
          height: isExpanded ? height : 0,
          overflow: 'hidden',
          transition: 'height 400ms cubic-bezier(0.25, 1, 0.5, 1)',
        }}
      >
        <div ref={innerRef}>{children}</div>
      </div>
    );
  };

  const ProjectRow = ({ project, isMobile = false }) => {
    const isExpanded = expandedProjectId === project.id;

    if (isMobile) {
      return (
        <div className="relative">
          <div className="absolute -left-4 top-4 h-px w-4 bg-slate-200" />
          <div className={"flex flex-col items-start px-4 rounded-xl transition-all group hover:bg-slate-100 " + (isExpanded ? 'pt-3 pb-2' : 'py-2')}>
            <button
              onClick={() => setExpandedProjectId(isExpanded ? null : project.id)}
              className="w-full text-left"
            >
              <h4 className="text-[17px] font-medium text-[#231f44] leading-tight group-hover:font-semibold">
                {project.title}
              </h4>
            </button>
            <ExpandingContent isExpanded={isExpanded}>
              <div className="mt-2 pb-2 pr-10">
                <div className="flex items-center gap-2 mb-2">
                  <Pill label={PROJECT_STATUS[project.status]?.label || project.status} theme={PROJECT_STATUS[project.status]?.theme} icon={PROJECT_STATUS[project.status]?.icon} size="sm" />
                  <Pill label={PRODUCT_TYPES[project.type] || project.type} size="sm" />
                </div>
                <p className="text-sm text-slate-500">{project.impactSummary}</p>
                <button
                  onClick={() => handleProjectClick(project)}
                  className="mt-3 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[var(--deep-purple)] shadow-sm hover:bg-[var(--neon-green)] transition-all duration-300"
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </ExpandingContent>
          </div>
        </div>
      );
    }

    // Desktop
    return (
      <div
        className={
          "relative w-full text-left rounded-xl cursor-default group " +
          (isExpanded
            ? "bg-slate-100 px-4 pt-4 pb-14 mb-2 shadow-sm"
            : "px-4 py-3 hover:bg-slate-50")
        }
        style={{ transition: 'background-color 250ms ease, box-shadow 250ms ease, padding 250ms ease' }}
      >
        {/* Green accent bar — visible on hover only, hidden when expanded */}
        <div
          className="absolute left-2 w-[3px] rounded-full bg-[var(--neon-green)]"
          style={{
            top: '50%',
            transform: 'translateY(-50%)',
            height: isExpanded ? '0%' : undefined,
            opacity: isExpanded ? 0 : undefined,
            transition: 'height 200ms ease, opacity 150ms ease',
          }}
        />

        {/* Title */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpandedProjectId(isExpanded ? null : project.id);
          }}
          className="w-full text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#39FF14] rounded-md"
        >
          <h4
            className={
              "text-[17px] leading-tight " +
              (isExpanded
                ? "font-semibold text-[#231f44]"
                : "font-medium text-slate-700 group-hover:text-[#231f44] group-hover:translate-x-2")
            }
            style={{ transition: 'transform 300ms cubic-bezier(0.25,1,0.5,1), color 200ms ease' }}
          >
            {project.title}
          </h4>
        </button>

        {/* Expanding section — measured real height */}
        <ExpandingContent isExpanded={isExpanded}>
          <div className="pt-3">
            {/* Pills */}
            <div
              className="flex items-center gap-2 mb-2"
              style={{
                opacity: isExpanded ? 1 : 0,
                transform: isExpanded ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 280ms ease 60ms, transform 280ms cubic-bezier(0.25,1,0.5,1) 60ms',
              }}
            >
              <Pill
                label={PROJECT_STATUS[project.status]?.label || project.status}
                theme={PROJECT_STATUS[project.status]?.theme}
                icon={PROJECT_STATUS[project.status]?.icon}
                size="sm"
              />
              <Pill label={PRODUCT_TYPES[project.type] || project.type} size="sm" />
            </div>

            {/* Description */}
            <p
              className="text-[15px] leading-relaxed text-slate-600 pr-14"
              style={{
                opacity: isExpanded ? 1 : 0,
                transform: isExpanded ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 280ms ease 120ms, transform 280ms cubic-bezier(0.25,1,0.5,1) 120ms',
              }}
            >
              {project.impactSummarySentence}
            </p>
          </div>
        </ExpandingContent>

        {/* Arrow — floats at bottom right, animates last */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleProjectClick(project);
          }}
          className="absolute right-4 bottom-4 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[var(--deep-purple)] shadow-sm hover:bg-[var(--neon-green)] hover:border-[var(--neon-green)] cursor-pointer"
          style={{
            opacity: isExpanded ? 1 : 0,
            transform: isExpanded ? 'translateY(0) scale(1)' : 'translateY(6px) scale(0.88)',
            transition: 'opacity 280ms ease 180ms, transform 280ms cubic-bezier(0.25,1,0.5,1) 180ms, background-color 200ms ease, border-color 200ms ease',
            pointerEvents: isExpanded ? 'auto' : 'none',
          }}
        >
          <ArrowUpRight size={18} />
        </button>
      </div>
    );
  };

  const PillarGroupLabel = ({ umbrella, isMobile = false }) => (
    <div className={"pl-3 mb-1 " + (isMobile ? 'mt-3' : 'mt-1 px-4')}>
      <p className="text-xs text-slate-400 font-sans leading-snug">
        {umbrella.title}
      </p>
    </div>
  );

  return (
    <>
      {/* DESKTOP */}
      <div className={"hidden md:flex absolute top-full left-0 md:-left-12 pt-10 w-[640px] z-[100] " + fontClass}>
        <div className="absolute top-0 left-0 w-full h-10 bg-transparent" />
        <div className="flex w-full bg-white rounded-2xl shadow-[0_25px_60px_rgba(35,31,68,0.15)] ring-1 ring-[#231f44]/5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">

          <div className="w-[220px] bg-[#FBFBFB] border-r border-slate-100 p-5">
            <nav className="flex flex-col gap-1.5">
              {workGroups.map((group) => {
                const isActive = activeCompany === group.company;
                return (
                  <button
                    key={group.company}
                    onMouseEnter={() => setActiveCompany(group.company)}
                    className={
                      "case-anchor-link flex items-start text-left transition-colors py-2 " +
                      (isActive ? "is-active !text-[#231f44]" : "!text-slate-400 hover:!text-[#231f44]")
                    }
                  >
                    <span className="case-anchor-bullet-wrap" aria-hidden="true">
                      <span className="case-anchor-bullet" />
                    </span>
                    <span className={"type-nav leading-tight " + (isActive ? "font-bold" : "")}>
                      {group.company}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="flex-1 bg-white p-3 mt-1">
            <div className="flex flex-col gap-1 overflow-y-auto max-h-[650px] pr-2 custom-scrollbar">
              {allActiveProjects.length > 0 ? (
                <>
                  {umbrellas.map(umbrella => (
                    <div key={umbrella.id} className="relative pl-3 mb-2">
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-[var(--neon-green)] opacity-60" />
                      <PillarGroupLabel umbrella={umbrella} />
                      {pillars
                        .filter(p => p.parentId === umbrella.id)
                        .map(project => <ProjectRow key={project.id} project={project} />)
                      }
                    </div>
                  ))}
                  {standalones.map(project => <ProjectRow key={project.id} project={project} />)}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <Briefcase size={24} className="text-slate-200 mb-4" />
                  <p className="text-sm font-medium text-slate-400 italic">No public case studies.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className={"flex md:hidden flex-col w-full bg-white " + fontClass}>
        {workGroups.map((group) => {
          const isExpanded = activeCompany === group.company;
          const projects = getProjectsByCompany(group.company);
          const { umbrellas: groupUmbrellas, pillars: groupPillars, standalones: groupStandalones } = classifyProjects(projects);

          return (
            <div key={group.company} className="border-b border-slate-50 last:border-b-0">
              <button
                onClick={() => setActiveCompany(isExpanded ? null : group.company)}
                className="w-full flex items-center justify-between py-4 px-1 text-[#231f44] transition-colors active:bg-slate-50"
              >
                <div className="flex items-center gap-4">
                  <LogoIcon theme={isExpanded ? 'light' : 'dark'} company={group.logo} />
                  <span className={"text-[24px] tracking-tight " + (isExpanded ? "font-bold text-[#231f44]" : "font-semibold text-slate-700")}>
                    {group.company}
                  </span>
                </div>
                <ChevronDown size={20} className={"text-slate-400 transition-transform duration-300 " + (isExpanded ? "rotate-180" : "")} />
              </button>

              <div className={"overflow-hidden transition-all duration-500 ease-in-out " + (isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0")}>
                <div className="pb-6">
                  {groupUmbrellas.map(umbrella => (
                    <div key={umbrella.id} className="pl-4 ml-4 border-l-[3px] border-[var(--neon-green)] mb-3">
                      <PillarGroupLabel umbrella={umbrella} isMobile />
                      {groupPillars
                        .filter(p => p.parentId === umbrella.id)
                        .map(project => <ProjectRow key={project.id} project={project} isMobile />)
                      }
                    </div>
                  ))}
                  {groupStandalones.length > 0 && (
                    <div className="pl-4 ml-4 border-l border-slate-200">
                      {groupStandalones.map(project => <ProjectRow key={project.id} project={project} isMobile />)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </>
  );
};

export default WorkDropdown;