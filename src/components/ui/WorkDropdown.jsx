import React, { useState, useEffect } from 'react';
import { Briefcase, ChevronDown } from 'lucide-react';
import LogoIcon from './logoIcon';

/**
 * WORK DROPDOWN COMPONENT
 * Features:
 * - Invisible Bridge for hover stability
 * - Source Sans 3 Typography
 * - Flat Mobile Design
 * - Reduced spacing & removed headers
 */
const WorkDropdown = ({ onProjectClick, closeMenu, workGroups = [], portfolioData = { projects: [] } }) => {
  const [activeCompany, setActiveCompany] = useState(workGroups[0]?.company || null);

  const handleProjectClick = (project) => {
    if (onProjectClick) onProjectClick(project);
    if (closeMenu) closeMenu();
  };

  const getProjectsByCompany = (companyName) => {
    const group = workGroups.find(g => g.company === companyName);
    if (!group) return [];
    if (group.teams) {
      return group.teams.flatMap(team => 
        team.projectIds.map(id => portfolioData.projects.find(p => p.id === id)).filter(Boolean)
      );
    }
    return (group.projectIds || [])
      .map(id => portfolioData.projects.find(p => p.id === id))
      .filter(Boolean);
  };

  const activeProjects = activeCompany ? getProjectsByCompany(activeCompany) : [];
  const fontClass = "font-['Source_Sans_3',_sans-serif]";

  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <div 
        className={`hidden md:flex absolute top-full left-0 md:-left-12 pt-10 w-[640px] z-[100] ${fontClass}`}
      >
        {/* INVISIBLE BRIDGE: Fills the gap so hover doesn't break */}
        <div className="absolute top-0 left-0 w-full h-10 bg-transparent" />

        <div className="flex w-full bg-white rounded-2xl shadow-[0_25px_60px_rgba(35,31,68,0.15)] ring-1 ring-[#231f44]/5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
          {/* Left Column: Sidebar */}
          <div className="w-[220px] bg-[#FBFBFB] border-r border-slate-100 p-5">
            <nav className="flex flex-col gap-1.5">
              {workGroups.map((group) => {
                const isActive = activeCompany === group.company;
                return (
                  <button
                    key={group.company}
                    onMouseEnter={() => setActiveCompany(group.company)}
                    className={`case-anchor-link flex items-start text-left transition-colors py-2 ${
                      isActive
                        ? "is-active !text-[#231f44]"
                        : "!text-neutral-400 hover:!text-[#231f44]"
                    }`}
                  >
                    <span className="case-anchor-bullet-wrap" aria-hidden="true">
                      <span className="case-anchor-bullet" />
                    </span>
                    <span className={`type-nav leading-tight ${isActive ? 'font-bold' : ''}`}>
                      {group.company}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Column: Project List (Flattened - No Headers) */}
          <div className="flex-1 bg-white p-5 min-h-[440px]">
            <div className="flex flex-col gap-1 overflow-y-auto max-h-[520px] pr-2 custom-scrollbar">
              {activeProjects.length > 0 ? (
                activeProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => handleProjectClick(project)}
                    className="group w-full text-left p-4 rounded-xl transition-all duration-200 hover:bg-slate-50"
                  >
                    <h4 className="text-[17px] font-bold text-slate-600 group-hover:text-[#231F45] transition-colors leading-tight mb-1">
                      {project.title}
                    </h4>
                    <p className="text-[14px] leading-relaxed text-neutral-400 group-hover:text-neutral-500 transition-colors line-clamp-2">
                      {project.impactSummarySentence}
                    </p>
                  </button>
                ))
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

      {/* --- MOBILE VIEW (Flat Design) --- */}
      <div className={`flex md:hidden flex-col w-full bg-white ${fontClass}`}>
        {workGroups.map((group) => {
          const isExpanded = activeCompany === group.company;
          const projects = getProjectsByCompany(group.company);

          return (
            <div key={group.company} className="border-b border-slate-50 last:border-b-0">
              <button
                onClick={() => setActiveCompany(isExpanded ? null : group.company)}
                className="w-full flex items-center justify-between py-5 px-1 text-[#231f44] transition-colors active:bg-slate-50"
              >
                <div className="flex items-center gap-4">
                   <LogoIcon theme={isExpanded ? 'light' : 'dark'} company={group.logo} />
                   <span className={`text-[24px] tracking-tight ${isExpanded ? 'font-bold text-[#231f44]' : 'font-semibold text-slate-700'}`}>
                    {group.company}
                   </span>
                </div>
                <ChevronDown 
                  size={20} 
                  className={`text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                />
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pb-6 pl-4 ml-4 border-l border-slate-200">
                  {projects.map((project, index) => (
                    <div key={project.id} className="relative">
                      <div className="absolute -left-4 top-1/2 h-px w-4 bg-slate-200" />
                      <button
                        onClick={() => handleProjectClick(project)}
                        className="w-full text-left py-2 px-5 rounded-xl transition-all active:bg-slate-50"
                      >
                        <h4 className="text-[17px] font-regular text-[#231f44] leading-tight">{project.title}</h4>
                      </button>
                    </div>
                  ))}
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