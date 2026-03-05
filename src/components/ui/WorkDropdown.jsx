import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, ChevronDown } from 'lucide-react';
import LogoIcon from './logoIcon';

// ─── Flappy Bird ──────────────────────────────────────────────────────────────
const W = 60, H = 36, PX = 5;
const GRAVITY = 0.28, FLAP_VEL = -4.2, PIPE_V = 1.1;
const GAP = 10, PW = 5, PIPE_EVERY = 80;
const FLOOR = H - 4;

const BIRD_PX = [
  [0,1,1,0,0],
  [1,1,1,1,0],
  [1,1,0,1,1],
  [1,1,1,1,0],
  [0,1,1,0,0],
];

function makeGame(best = 0, startPlaying = false) {
  return {
    phase:  startPlaying ? 'playing' : 'idle',
    bx: 12, by: H / 2 - 2,
    vy: startPlaying ? FLAP_VEL : 0,
    pipes: [], frame: 0, score: 0, best,
  };
}

const FlappyBird = () => {
  const canvasRef = useRef(null);
  const gRef      = useRef(makeGame());
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // helpers
    const fillPx = (x, y, w, h, col = '#1a1a1a') => {
      ctx.fillStyle = col;
      ctx.fillRect(Math.floor(x) * PX, Math.floor(y) * PX, w * PX, h * PX);
    };

    const txt = (str, cx, cy, size, col) => {
      ctx.fillStyle = col;
      ctx.font = `bold ${size * PX}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(str, cx * PX, cy * PX);
    };

    const drawBird = (bx, by, dead) => {
      if (dead) ctx.globalAlpha = 0.35;
      BIRD_PX.forEach((row, ry) =>
        row.forEach((on, rx) => { if (on) fillPx(bx + rx, by + ry, 1, 1); })
      );
      ctx.globalAlpha = 1;
    };

    const draw = () => {
      const g = gRef.current;

      // background
      ctx.fillStyle = '#f9f9f9';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ground
      fillPx(0, FLOOR, W, 1, '#c0c0c0');
      for (let x = 0; x < W; x += 3) fillPx(x, FLOOR + 1, 2, H - FLOOR - 1, '#e4e4e4');

      // pipes
      g.pipes.forEach(p => {
        fillPx(p.x,     0,           PW,       p.top,           '#1a1a1a');
        fillPx(p.x - 1, p.top - 2,   PW + 2,   2,               '#1a1a1a');
        const bot = p.top + GAP;
        fillPx(p.x - 1, bot,         PW + 2,   2,               '#1a1a1a');
        fillPx(p.x,     bot + 2,     PW,       FLOOR - bot - 2, '#1a1a1a');
      });

      // bird
      drawBird(g.bx, g.by, g.phase === 'dead');

      // score
      if (g.phase !== 'idle') txt(String(g.score), W / 2, 4, 2.5, '#1a1a1a');

      // overlay: idle
      if (g.phase === 'idle') {
        ctx.fillStyle = 'rgba(0,0,0,0.03)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        txt('CLICK TO PLAY', W / 2, H / 2 - 3, 1.9, '#555');
        txt('tap or click to flap', W / 2, H / 2 + 3, 1.3, '#aaa');
      }

      // overlay: dead
      if (g.phase === 'dead') {
        ctx.fillStyle = 'rgba(0,0,0,0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        txt('GAME OVER', W / 2, H / 2 - 5, 2.2, '#1a1a1a');
        txt(`score ${g.score}   best ${g.best}`, W / 2, H / 2, 1.6, '#555');
        txt('click to retry', W / 2, H / 2 + 5, 1.5, '#aaa');
      }
    };

    const tick = () => {
      const g = gRef.current;

      if (g.phase === 'playing') {
        g.frame++;
        g.vy += GRAVITY;
        g.by += g.vy;

        // spawn pipe
        if (g.frame % PIPE_EVERY === 1) {
          const top = 3 + Math.floor(Math.random() * (H - GAP - 8));
          g.pipes.push({ x: W, top, passed: false });
        }

        // move & cull
        g.pipes.forEach(p => { p.x -= PIPE_V; });
        g.pipes = g.pipes.filter(p => p.x > -PW - 2);

        // score
        g.pipes.forEach(p => {
          if (!p.passed && p.x + PW < g.bx) { p.passed = true; g.score++; }
        });

        // floor / ceiling
        if (g.by + 4 >= FLOOR || g.by <= 0) {
          g.best = Math.max(g.best, g.score);
          g.phase = 'dead';
        } else {
          // pipe collision (bird hitbox: x+1..x+3, y+1..y+3)
          const bx1 = g.bx + 1, bx2 = g.bx + 3;
          const by1 = g.by + 1, by2 = g.by + 3;
          for (const p of g.pipes) {
            if (bx2 > p.x && bx1 < p.x + PW) {
              if (by1 < p.top || by2 > p.top + GAP) {
                g.best = Math.max(g.best, g.score);
                g.phase = 'dead';
                break;
              }
            }
          }
        }
      }

      draw();
      rafRef.current = requestAnimationFrame(tick);
    };

    const flap = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const g = gRef.current;
      if (g.phase === 'idle') {
        g.phase = 'playing';
        g.vy = FLAP_VEL;
      } else if (g.phase === 'playing') {
        g.vy = FLAP_VEL;
      } else if (g.phase === 'dead') {
        gRef.current = makeGame(g.best, true);
      }
    };

    canvas.addEventListener('mousedown', flap);
    canvas.addEventListener('touchstart', flap, { passive: false });

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousedown', flap);
      canvas.removeEventListener('touchstart', flap);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 py-6 select-none">
      <p className="text-[10px] text-slate-300 tracking-widest uppercase mb-1">
        nothing to see here
      </p>
      <canvas
        ref={canvasRef}
        width={W * PX}
        height={H * PX}
        style={{
          imageRendering: 'pixelated',
          borderRadius: 2,
          border: '1px solid #ebebeb',
          display: 'block',
          cursor: 'pointer',
        }}
      />
    </div>
  );
};

// ─── WorkDropdown ─────────────────────────────────────────────────────────────
const WorkDropdown = ({ onProjectClick, closeMenu, workGroups = [], portfolioData = { projects: [] } }) => {
  const [activeCompany, setActiveCompany] = useState(null);
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
          className="w-full text-left flex flex-col px-4 py-3 rounded-sm bg-slate-100 mb-2 group active:bg-slate-200 transition-colors"
        >
          <h4 className="text-[17px] font-semibold text-[#231f44] leading-tight group-hover:underline underline-offset-2">
            {project.title}
          </h4>
          <p className="text-sm text-slate-600 mt-1.5">{project.impactSummary}</p>
        </button>
      );
    }

    return (
      <button
        onClick={() => handleProjectClick(project)}
        className="w-full text-left rounded-sm hover:bg-slate-100 px-4 pt-4 pb-5 mb-2 transition-colors duration-200 group outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14]"
      >
        <h4 className="text-[17px] font-semibold text-[#231f44] leading-tight group-hover:underline underline-offset-2 decoration-[var(--neon-green)] decoration-2">
          {project.title}
        </h4>
        <p className="text-[14px] leading-relaxed text-slate-500 mt-2">
          {project.impactSummarySentence}
        </p>
      </button>
    );
  };

  return (
    <>
      {/* DESKTOP */}
      <div className={"hidden md:flex absolute top-full left-0 md:-left-12 pt-10 w-[768px] z-[100] " + fontClass}>
        <div className="absolute top-0 left-0 w-full h-10 bg-transparent" />
        <div className="flex w-full bg-white rounded-sm shadow-[0_25px_60px_rgba(35,31,68,0.15)] ring-1 ring-[#231f44]/5 overflow-hidden">

          {/* Left: company list */}
          <div className="w-[220px] bg-[#FBFBFB] border-r border-slate-100 p-5 flex-shrink-0">
            <nav className="flex flex-col gap-1.5">
              {workGroups.map((group) => {
                const isActive = activeCompany === group.company;
                return (
                  <button
                    key={group.company}
                    onClick={() => handleCompanyClick(group.company)}
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

          {/* Right: project panel */}
          <div className="flex-1 bg-white p-3 pt-3 pb-6 mt-1 min-h-0">
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
              className="flex flex-col gap-1 overflow-y-auto max-h-[860px] pr-2 custom-scrollbar"
              style={{ animation: activeCompany ? 'panelFadeIn 220ms ease both' : 'none' }}
            >
              {!activeCompany ? (
                <FlappyBird />
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
                  <Briefcase size={24} className="text-slate-200 mb-4" />
                  <p className="text-sm font-medium text-slate-400 italic">No public case studies.</p>
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
                className="w-full flex items-center justify-between py-4 px-1 text-[#231f44] transition-colors active:bg-slate-50"
              >
                <div className="flex items-center gap-4">
                  <LogoIcon theme={isExpanded ? 'light' : 'dark'} company={group.logo} />
                  <span className={"text-[24px] tracking-tight " + (isExpanded ? "font-bold text-[#231f44]" : "font-semibold text-slate-700")}>
                    {group.company}
                  </span>
                </div>
                <ChevronDown
                  size={20}
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