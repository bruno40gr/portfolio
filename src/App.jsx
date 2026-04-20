import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

import { ASSETS, COMPANY_STRIPE_LOGOS } from "./data/assets";
import { PORTFOLIO_DATA, WORK_GROUPS } from "./data/portfolioData";

import WorkDropdown from "./components/ui/WorkDropdown";
import LogoIcon from "./components/ui/logoIcon";

import CompanyStripe from "./components/home/CompanyStripe";
import WorkSection from "./components/home/WorkSection";
import Changelog from "./components/home/Changelog";

import CaseStudy from "./components/caseStudy/CaseStudy";
import CaseStudyStyleGuide from "./components/caseStudy/CaseStudyStyleGuide";
import ResumePage from "./components/ResumePage";
import Presentation from "./components/presentation/Presentation";
import ScrollIndicator from "./components/ui/ScrollIndicator";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !PORTFOLIO_DATA.gatekeeperEnabled || sessionStorage.getItem("portfolio_auth") === "true";
  });
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const view = location.pathname === "/" ? "home"
             : location.pathname === "/about" ? "about"
             : location.pathname === "/resume" ? "resume"
             : location.pathname === "/changelog" ? "changelog"
             : location.pathname.startsWith("/project/") ? "project-view"
             : location.pathname === "/styles" ? "case-styles"
             : location.pathname.startsWith("/presentation") ? "presentation"
             : "home";

  const projectIdMatch = location.pathname.match(/^\/project\/(.+)$/);
  const projectId = projectIdMatch ? projectIdMatch[1] : null;
  const activeProject = projectId ? PORTFOLIO_DATA.projects.find((p) => p.id === projectId) : null;

  const [scrolled, setScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
  const [isMobileWorkExpanded, setIsMobileWorkExpanded] = useState(false);
  const headerRef = useRef(null);
  const workTimeoutRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setIsWorkDropdownOpen(false);
        setIsMobileMenuOpen(false);
        setIsContactOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    const isGatekeeperActive = PORTFOLIO_DATA.gatekeeperEnabled && !isAuthenticated && view !== "changelog";
    if (isGatekeeperActive) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, [isAuthenticated, view]);

  useEffect(() => {
    const update = () => {
      const h = headerRef.current?.offsetHeight || 56;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    update();
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("resize", update);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === "lima") {
      setAuthError("");
      setIsSuccess(true);
      setTimeout(() => {
        setIsAuthenticated(true);
        sessionStorage.setItem("portfolio_auth", "true");
      }, 600);
    } else {
      setAuthError("Incorrect password");
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    if (!location.state?.anchor) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    const cleanPath = location.pathname.endsWith('/') && location.pathname.length > 1
      ? location.pathname.slice(0, -1)
      : location.pathname;
    canonicalLink.setAttribute("href", `https://www.brunowong.me${cleanPath}`);
  }, [location.pathname, location.state]);

  const navigateTo = (page, anchor) => {
    if (page === "home" && anchor === "work") {
      if (location.pathname !== "/") {
        navigate("/", { state: { anchor: "work" } });
        setTimeout(() => {
          const el = document.getElementById("work");
          if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
        }, 100);
      } else {
        const el = document.getElementById("work");
        if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
      }
      return;
    }
    if (page === "home") navigate("/");
    else if (page === "about") navigate("/about");
    else if (page === "resume") navigate("/resume");
    else if (page === "changelog") navigate("/changelog");
    else if (page === "case-styles") navigate("/styles");
  };

  const navProjectIds = new Set(PORTFOLIO_DATA.projects.filter((p) => p.parentId).map((p) => p.parentId));
  const caseStudyProjects = PORTFOLIO_DATA.projects.filter(
    (p) => !p.summary?.includes("Coming soon") && !navProjectIds.has(p.id)
  );
  const activeProjectIndex = caseStudyProjects.findIndex((p) => p.id === activeProject?.id);
  const prevProject = activeProjectIndex > 0 ? caseStudyProjects[activeProjectIndex - 1] : null;
  const nextProject =
    activeProjectIndex >= 0 && activeProjectIndex < caseStudyProjects.length - 1
      ? caseStudyProjects[activeProjectIndex + 1]
      : null;

  const handleBackNavigation = () => {
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  const openProject = (projectOrId) => {
    const pId = typeof projectOrId === "string" ? projectOrId : projectOrId.id;
    if (pId) navigate(`/project/${pId}`);
  };

  const scrollToCompany = (companyKey) => {
    const target = document.querySelector(`[data-company="${companyKey}"]`);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "instant" });
    } else {
      const workEl = document.getElementById("work");
      if (workEl) window.scrollTo({ top: workEl.offsetTop - 100, behavior: "instant" });
    }
  };

  const navTheme = view === "home" && !scrolled ? "dark" : "light";

  const renderFooter = (theme = "light") => {
    const isDark = theme === "dark";
    const footerBg = isDark ? "bg-transparent border-t-0" : "bg-slate-100 border-t border-slate-200";
    const textColor = isDark ? "text-slate-400" : "text-slate-400";
    const hoverColor = isDark ? "hover:text-slate-200" : "hover:text-slate-600";
    const borderColor = isDark ? "border-slate-500 hover:border-slate-300" : "border-slate-300 hover:border-slate-500";
    const yearColor = isDark ? "text-slate-500 hover:text-slate-300" : "text-slate-400 hover:text-slate-600";

    return (
      <footer className={`py-12 md:py-16 font-sans mt-auto relative z-20 ${footerBg}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <div className="mb-6">
            <p className={`${textColor} text-xs md:text-sm font-light tracking-wide leading-relaxed`}>
              Designed and built from the ground up by Bruno Wong. <br className="md:hidden" />
              Coded in VS Code with React, Tailwind, and{" "}
              <button
                onClick={() => navigateTo("changelog")}
                className={`${hoverColor} border-b ${borderColor} transition-all`}
              >
                iterative refinement
              </button>.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className={`${yearColor} font-bold uppercase tracking-[0.2em] text-[10px]`}>
              &copy; {new Date().getFullYear()} Bruno Wong Marchena.
            </span>
            <a
              href="https://www.linkedin.com/in/brunowong"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`${yearColor} transition-colors`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.991V9h3.114v1.561h.046c.434-.823 1.494-1.691 3.076-1.691 3.292 0 3.9 2.167 3.9 4.984v6.598zM5.337 7.433a1.81 1.81 0 1 1 0-3.62 1.81 1.81 0 0 1 0 3.62zm1.559 13.019H3.776V9h3.12v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  };

  if (PORTFOLIO_DATA.gatekeeperEnabled && !isAuthenticated && view !== "changelog") {
    return (
      <div className="h-screen w-screen flex flex-col text-left selection:bg-[#88FF00] selection:text-black bg-[#2d255c] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(circle at 50% 50%, transparent 10%, rgba(10, 8, 20, 0.95) 90%)' }}></div>
        <svg className="absolute -top-[5%] -left-[5%] w-[110%] h-[110%] pointer-events-none opacity-[0.30] z-0 animate-grain" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(136,255,0,0.20) 0%, transparent 65%)' }}></div>
        <main className="flex-grow flex flex-col items-center text-center px-6 relative z-10 w-full">
          <div className="relative w-full max-w-4xl animate-fade-in hero-stack mt-[15vh]">
            <img
              src="https://res.cloudinary.com/diy08lj9x/image/upload/v1772648447/bruno-logo-whitewong_q7cxxn.png"
              alt="Bruno Wong Marchena"
              className="hero-logo glitch-effect"
            />
            <form onSubmit={handleLogin} className="w-full flex flex-col items-center gap-4 mt-2">
              <div className="w-full max-w-[200px]">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setAuthError(""); setIsSuccess(false); }}
                  placeholder="Password"
                  autoComplete="off"
                  className={`w-full px-3 py-2 bg-white border border-transparent rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-[#88FF00] transition-shadow text-slate-900 text-center font-bold tracking-widest placeholder:text-slate-400 placeholder:font-normal placeholder:tracking-normal ${authError ? 'ring-2 ring-red-500' : ''}`}
                />
              </div>
              <button
                type="submit"
                className="w-full max-w-[200px] px-10 py-3 bg-[#88FF00] text-black font-bold rounded-full hover:scale-105 transition-transform text-base"
              >
                Enter
              </button>
              <div className="h-6 flex items-center justify-center mt-2">
                {authError && <p className="text-red-500 text-sm font-bold tracking-wide">{authError}</p>}
                {isSuccess && <p className="text-[#88FF00] text-sm font-bold tracking-wide">Access Granted...</p>}
              </div>
            </form>
          </div>
        </main>
        <div className="fixed inset-x-0 bottom-0 z-20">
          {renderFooter("dark")}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-black selection:text-white relative text-left">
      {view !== "changelog" && view !== "presentation" && (
        <nav
          ref={headerRef}
          className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
            navTheme === "dark" ? "bg-transparent py-4" : "bg-white/95 border-b border-neutral-200 py-3 shadow-sm"
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-[1fr_auto_1fr] items-center">
            <div className={`flex items-center justify-start md:justify-end gap-4 md:gap-14 transition-colors duration-300 ${navTheme === "dark" ? "text-white" : "text-[#231F45]"}`}>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="type-nav md:hidden p-2 rounded-sm transition-colors"
                aria-label="Open menu"
              >
                <Menu size={18} />
              </button>

              <div className="relative h-full flex items-center">
                <button
                  onClick={(e) => { e.stopPropagation(); setIsWorkDropdownOpen(!isWorkDropdownOpen); }}
                  className="type-nav opacity-90 hover:opacity-100 transition-opacity hidden md:inline-flex items-center gap-2 relative z-[101]"
                >
                  Work
                  <ChevronDown size={16} className={"transition-transform duration-300 " + (isWorkDropdownOpen ? "rotate-180" : "")} />
                </button>
                {isWorkDropdownOpen && (
                  <div className="fixed inset-0 bg-black/20 z-[90] transition-opacity duration-300" onClick={() => setIsWorkDropdownOpen(false)} />
                )}
                <div className={`absolute top-0 left-0 transition-all duration-300 ease-in-out z-[100] ${isWorkDropdownOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible pointer-events-none"}`}>
                  <WorkDropdown
                    workGroups={WORK_GROUPS}
                    portfolioData={PORTFOLIO_DATA}
                    onProjectClick={(p) => { openProject(p); setIsWorkDropdownOpen(false); }}
                    closeMenu={() => setIsWorkDropdownOpen(false)}
                  />
                </div>
              </div>

              <button onClick={() => navigateTo("about")} className="type-nav opacity-90 hover:opacity-100 transition-opacity hidden md:inline-flex">
                About
              </button>
            </div>

            <div onClick={() => navigateTo("home")} className="cursor-pointer mx-10 md:mx-16 shrink-0 flex justify-center">
              <LogoIcon theme={navTheme} />
            </div>

            {view === "project-view" && (
              <div className={`flex md:hidden items-center gap-4 ml-auto transition-colors duration-300 ${navTheme === "dark" ? "text-white" : "text-[#231F45]"}`}>
                <button onClick={() => prevProject && openProject(prevProject)} disabled={!prevProject} className={`type-nav flex items-center gap-0.5 transition-opacity ${prevProject ? "opacity-90 hover:opacity-100" : "opacity-25 cursor-default"}`}>
                  <ChevronLeft size={15} /><span>Prev</span>
                </button>
                <button onClick={() => nextProject && openProject(nextProject)} disabled={!nextProject} className={`type-nav flex items-center gap-0.5 transition-opacity ${nextProject ? "opacity-90 hover:opacity-100" : "opacity-25 cursor-default"}`}>
                  <span>Next</span><ChevronRight size={15} />
                </button>
              </div>
            )}

            <div className={`hidden md:flex items-center justify-between w-full transition-colors duration-300 ${navTheme === "dark" ? "text-white" : "text-[#231F45]"}`}>
              <div className="flex items-center gap-10">
                <button onClick={() => navigateTo("resume")} className="type-nav opacity-90 hover:opacity-100 transition-opacity">Resume</button>
                <button onClick={() => setIsContactOpen(true)} className="type-nav opacity-90 hover:opacity-100 transition-opacity">Contact</button>
              </div>
              {view === "project-view" ? (
                <div className="flex items-center gap-10">
                  <button onClick={() => prevProject && openProject(prevProject)} disabled={!prevProject} title={prevProject ? prevProject.title : undefined} className={`type-nav flex items-center gap-0.5 transition-opacity ${prevProject ? "opacity-90 hover:opacity-100" : "opacity-25 cursor-default"}`}>
                    <ChevronLeft size={15} /><span>Prev</span>
                  </button>
                  <button onClick={() => nextProject && openProject(nextProject)} disabled={!nextProject} title={nextProject ? nextProject.title : undefined} className={`type-nav flex items-center gap-0.5 transition-opacity ${nextProject ? "opacity-90 hover:opacity-100" : "opacity-25 cursor-default"}`}>
                    <span>Next</span><ChevronRight size={15} />
                  </button>
                </div>
              ) : <div />}
            </div>
          </div>
        </nav>
      )}

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[180] bg-white text-slate-900 md:hidden flex flex-col">
          <div className="flex items-center justify-between px-6 py-4">
            <button type="button" onClick={() => { setIsMobileMenuOpen(false); navigateTo("home"); }} className="type-nav flex items-center gap-2 text-2xl font-medium text-[#88FF00]" aria-label="Go home">
              <LogoIcon />
            </button>
            <button type="button" onClick={() => setIsMobileMenuOpen(false)} className="type-nav p-2 rounded-sm" aria-label="Close menu">
              <X size={18} />
            </button>
          </div>
          <div className="px-6 py-6 flex flex-col gap-6 flex-1 overflow-y-auto">
            <div className="border-b border-slate-100">
              <button onClick={() => setIsMobileWorkExpanded(!isMobileWorkExpanded)} className="w-full flex items-center justify-between py-2 text-[#231f44]">
                <span className="type-nav text-left text-2xl font-semibold">Work</span>
                <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileWorkExpanded ? 'rotate-180' : ''}`} />
              </button>
              {isMobileWorkExpanded && (
                <div className="pb-4 bg-white">
                  <WorkDropdown workGroups={WORK_GROUPS} portfolioData={PORTFOLIO_DATA} onProjectClick={(p) => { openProject(p); setIsMobileMenuOpen(false); }} closeMenu={() => setIsWorkDropdownOpen(false)} />
                </div>
              )}
            </div>
            <button onClick={() => { setIsMobileMenuOpen(false); navigateTo("about"); }} className="type-nav text-left text-2xl font-semibold border-b border-slate-100 py-2">About</button>
            <button onClick={() => { setIsMobileMenuOpen(false); navigateTo("resume"); }} className="type-nav text-left text-2xl font-semibold border-b border-slate-100 py-2">Resume</button>
            <button onClick={() => { setIsMobileMenuOpen(false); setIsContactOpen(true); }} className="type-nav text-left text-2xl font-semibold border-b border-slate-100 py-2">Contact</button>
          </div>
          {view === "project-view" && (prevProject || nextProject) && (
            <div className="px-6 pb-8 pt-4 flex items-center justify-between mt-auto">
              <button onClick={() => { setIsMobileMenuOpen(false); if (prevProject) openProject(prevProject); }} disabled={!prevProject} className={`type-nav flex items-center gap-0.5 text-base font-semibold ${prevProject ? "" : "opacity-25 cursor-default"}`}>
                <ChevronLeft size={15} /><span>Prev</span>
              </button>
              <button onClick={() => { setIsMobileMenuOpen(false); if (nextProject) openProject(nextProject); }} disabled={!nextProject} className={`type-nav flex items-center gap-0.5 text-base font-semibold ${nextProject ? "" : "opacity-25 cursor-default"}`}>
                <span>Next</span><ChevronRight size={15} />
              </button>
            </div>
          )}
        </div>
      )}

      {isContactOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center p-4 md:p-6 pt-[8vh] md:pt-[10vh] text-center">
          <div className="absolute inset-0 backdrop-blur-md" onClick={() => setIsContactOpen(false)} style={{ background: 'rgba(0,0,0,0.55)' }}>
            <svg className="absolute -top-[5%] -left-[5%] w-[110%] h-[110%] pointer-events-none opacity-[0.25] animate-grain" xmlns="http://www.w3.org/2000/svg">
              <filter id="modal-grain">
                <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              <rect width="100%" height="100%" filter="url(#modal-grain)" />
            </svg>
          </div>
          <div className="relative bg-white border border-slate-200 p-6 md:p-7 rounded-sm shadow-2xl max-w-md w-full text-left font-sans modal-glitch-in" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setIsContactOpen(false)} aria-label="Close" className="absolute top-3 right-3 p-2 rounded-sm hover:bg-slate-100 transition-colors">
              <X size={18} className="text-neutral-500" />
            </button>
            <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 pr-10 text-center">Let's talk</h3>
            <p className="text-sm text-neutral-500 text-center mb-4 md:mb-5">Open to senior IC, lead, and fractional design roles starting Q2 2026.</p>
            <form className="space-y-3" onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = form.elements.namedItem("name")?.value?.trim?.() || "";
              const email = form.elements.namedItem("email")?.value?.trim?.() || "";
              const message = form.elements.namedItem("message")?.value?.trim?.() || "";
              const errorDisplay = form.querySelector("#form-error");
              if (!errorDisplay) return;
              if (!name || !email || !message) { errorDisplay.textContent = "All fields are required."; return; }
              if (!email.includes("@") || !email.includes(".")) { errorDisplay.textContent = "Please provide a valid email address."; return; }
              errorDisplay.textContent = "";
              const subject = `Portfolio inquiry from ${name}`;
              const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
              window.location.href = `mailto:bruwong@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              setIsContactOpen(false);
            }}>
              <div>
                <label htmlFor="form-name" className="block text-neutral-500 mb-1">Your name</label>
                <input id="form-name" name="name" type="text" className="w-full px-3 py-2 bg-white border-2 border-slate-200 rounded-sm text-md focus:outline-none focus:ring-2 focus:ring-[#88FF00] transition-shadow text-slate-900 font-bold tracking-widest placeholder:text-slate-400 placeholder:font-normal placeholder:tracking-normal" />
              </div>
              <div>
                <label htmlFor="form-email" className="block text-neutral-500 mb-1">Email</label>
                <input id="form-email" name="email" type="email" className="w-full px-3 py-2 bg-white border-2 border-slate-200 rounded-sm text-md focus:outline-none focus:ring-2 focus:ring-[#88FF00] transition-shadow text-slate-900 font-bold tracking-widest placeholder:text-slate-400 placeholder:font-normal placeholder:tracking-normal" />
              </div>
              <div>
                <label htmlFor="form-message" className="block text-neutral-500 mb-1">Message</label>
                <textarea id="form-message" name="message" rows={5} placeholder="What are you working on?" className="w-full px-3 py-2 bg-white border-2 border-slate-200 rounded-sm text-md focus:outline-none focus:ring-2 focus:ring-[#88FF00] transition-shadow text-slate-900 font-bold tracking-widest placeholder:text-slate-400 placeholder:font-normal placeholder:tracking-normal" />
              </div>
              <div id="form-error" className="text-red-500 text-[11px] font-bold min-h-[14px]" />
              <div className="pt-1 flex flex-col items-center">
                <button type="submit" className="w-full px-10 py-3 bg-[#88FF00] text-black font-bold rounded-full hover:scale-105 transition-transform text-base">Send message</button>
                <p className="mt-2 text-[14px] text-neutral-400 text-center">I respond within one business day.</p>
              </div>
            </form>
          </div>
        </div>
      )}

      <main className="min-h-screen relative bg-white text-left">
        <Routes>
          <Route path="/" element={
            <div className="bg-white animate-fade-in font-sans">
              <section className="bg-[#2d255c] hero-wrap flex flex-col justify-center items-center text-center px-6 min-h-[calc(100vh-var(--header-h))] flex-grow relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, transparent 10%, rgba(10, 8, 20, 1) 90%)' }} />
                <svg className="absolute -top-[5%] -left-[5%] w-[110%] h-[110%] pointer-events-none opacity-[0.30] z-0 animate-grain" xmlns="http://www.w3.org/2000/svg">
                  <filter id="grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
                    <feColorMatrix type="saturate" values="0" />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#grain)" />
                </svg>
                <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(136,255,0,0.20) 0%, transparent 65%)' }} />

                <div className="max-w-4xl w-full reveal-on-scroll hero-stack relative z-10">
                  <img src="https://res.cloudinary.com/diy08lj9x/image/upload/v1772648447/bruno-logo-whitewong_q7cxxn.png" alt="Bruno Wong Marchena" className="hero-logo glitch-effect" />
                  <div className="max-w-3xl mx-auto">
                    <h1 className="text-slate-300 text-2xl md:text-[1.8rem] font-light md:mt-8 mb-8 leading-snug">
                      14 years in product design, the last few building AI systems that change how large teams work.
                    </h1>
                    <p className="text-slate-400 text-2xl md:text-[1.3rem] mb-4 max-w-2xl mx-auto leading-snug font-light">
                      I've automated the work of global teams at Amazon, cut fulfillment costs in healthcare logistics, and co-invented a patent for subscription systems in the creator economy.
                    </p>
                  </div>

                  {/* FIX 2: Carta (index 3) is non-clickable and dimmed */}
                  <div className="grid grid-cols-2 md:flex md:flex-wrap place-items-center md:justify-center md:items-center gap-x-12 gap-y-10 md:gap-16 mt-12 md:mt-16 mb-24 md:mb-32 z-10 relative w-fit md:w-full max-w-4xl mx-auto">
                    {COMPANY_STRIPE_LOGOS.map((logo, index) => {
                      const companyKeys = ["amazon", "alto", "patreon", null];
                      const key = companyKeys[index];

                      if (!key) {
                        return (
                          <div key={index} className="flex items-center justify-center opacity-80 cursor-default">
                            <img src={logo.src || logo} alt={logo.name || "Company Logo"} className="h-12 sm:h-14 md:h-14 lg:h-16 object-contain brightness-0 invert" />
                          </div>
                        );
                      }

                      return (
                        <button
                          key={index}
                          onClick={() => scrollToCompany(key)}
                          className="cursor-pointer transition-all duration-300 hover:scale-105 opacity-80 hover:opacity-100 focus:outline-none flex items-center justify-center"
                          aria-label={`Jump to ${logo.name || "company"} projects`}
                        >
                          <img src={logo.src || logo} alt={logo.name || "Company Logo"} className="h-12 sm:h-14 md:h-14 lg:h-16 object-contain brightness-0 invert" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Scroll indicator — sibling of hero-stack, anchored to section bottom */}
                <ScrollIndicator />

                {/* --- RAGGED EDGE & GLITCH --- */}
                <div className="absolute bottom-0 left-0 w-full pointer-events-none z-20">
                  <style>{`
                    @keyframes intermittent-glitch {
                      0%, 92%, 96%, 100% { opacity: 0; transform: translateX(0); }
                      93% { opacity: 1; transform: translateX(-15px); }
                      94% { opacity: 0.8; transform: translateX(15px); }
                      95% { opacity: 1; transform: translateX(-5px); }
                    }
                    .glitch-flash { opacity: 0; animation: intermittent-glitch infinite; }
                  `}</style>
                  <div className="absolute bottom-3 md:bottom-5 left-0 w-full flex flex-col justify-end gap-[2px] md:gap-[3px] opacity-90 mix-blend-screen">
                    <div className="w-[45%] h-[2px] md:h-[3px] bg-[#88FF00] glitch-flash mx-auto" style={{ animationDuration: '4s' }}></div>
                    <div className="w-[25%] h-[3px] md:h-[4px] bg-[#00ffff] glitch-flash ml-[20%]" style={{ animationDelay: '1.5s', animationDuration: '6s' }}></div>
                    <div className="w-[15%] h-[2px] md:h-[3px] bg-[#ff0055] glitch-flash ml-[60%]" style={{ animationDelay: '3s', animationDuration: '7s' }}></div>
                  </div>
                  <svg viewBox="0 0 2560 48" preserveAspectRatio="xMidYMax slice" className="w-full h-6 md:h-10 lg:h-14 text-white fill-current block relative z-10">
                    <path d="M0,48 L2560,48 L2560,36 L2200,36 L2160,29 L1800,29 L1760,41 L1300,41 L1260,27 L800,27 L760,38 L400,38 L360,29 L0,29 Z" opacity="0.9" />
                    <path d="M0,48 L2560,48 L2560,32 L2350,32 L2310,41 L1900,41 L1860,27 L1400,27 L1360,39 L900,39 L860,28 L500,28 L460,40 L100,40 L60,31 L0,31 Z" opacity="0.95" />
                    <path d="M0,48 L2560,48 L2560,34 L2450,34 L2410,26 L2000,26 L1960,38 L1500,38 L1460,29 L1000,29 L960,41 L600,41 L560,25 L200,25 L160,38 L0,38 Z" />
                  </svg>
                </div>
              </section>

              <div className="pt-16 md:pt-32 pb-8">
                <WorkSection onProjectClick={openProject} />
              </div>
            </div>
          } />

          <Route path="/about" element={
            <div className="pt-40 px-6 md:px-12 lg:px-16 max-w-none mx-auto min-h-screen bg-white animate-fade-in text-left font-sans">
              <div className="max-w-4xl mx-auto mb-20 text-left">
                <div className="w-full max-w-md mx-auto mb-12 text-center">
                  <div className="aspect-[3/4] bg-neutral-100 border border-neutral-200 overflow-hidden relative rounded-sm p-4 shadow-sm">
                    <div className="w-full h-full relative overflow-hidden bg-white shadow-sm">
                      <img src={ASSETS.aboutPhoto} alt="Bruno Wong Marchena" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="max-w-3xl text-left">
                  <h2 className="font-serif text-2xl md:text-5xl text-neutral-900 mb-6 md:mb-10 font-bold leading-tight tracking-tight text-left">Hi, I'm Bruno.</h2>
                  <div className="space-y-6 md:space-y-8 text-sm md:text-lg text-neutral-600 font-light leading-relaxed text-left">
                    <p>14 years in product design. I work best at the system level, on the behind-the-scenes stuff where workflows are messy, the UX debt is real, and the decisions carry actual downstream consequences. I like that zone. It's where design has to hold up under pressure and still hit the business numbers.</p>
                    <p>I work as a hands-on lead, tight with product and engineering from day one. I'm invested in research and strategy, but equally happy in the weeds debugging a component or tightening the last 10% until it feels right in production. I build design systems structured enough to hand off cleanly and work with how modern teams actually build. I've been told I'm the calm in the room when things get messy. I'll take it.</p>
                    <p>Across Amazon, Alto Pharmacy, Patreon, and earlier at Instapage, Carta, and Webgility, I've led design for systems that automate heavy manual work, cut real operating costs, and shipped at global scale. I've also been a founding designer, taking a product from zero to traction and helping close an $800K seed round. I hold a USPTO patent. I prototype in React.</p>
                    <p>My design roots technically go back to making posters and album art for my punk rock band.</p>
                    <p className="font-semibold text-neutral-900">On AI work</p>
                    <p>I care about what makes it actually hold up: guardrails, fallbacks, human-in-the-loop flows, and catching the moments when the model is wrong but sounds right. Then the craft: the UI, the states, and the details that survive contact with production.</p>
                    <p className="font-semibold text-neutral-900">When I'm not working</p>
                    <p>Bass in a cover band around Sacramento, everything from Blink 182 to Tool. Kettlebell aficionado. Family in Lima and Athens means I travel there whenever life allows. The only time I tolerate being a bum is on a beach.</p>
                  </div>
                </div>
              </div>
            </div>
          } />

          <Route path="/project/:id" element={
            activeProject
              ? <CaseStudy project={activeProject} onNavigateToProject={openProject} onExit={() => navigateTo("home", "work")} />
              : <div className="pt-40 text-center min-h-screen">Project not found</div>
          } />

          <Route path="/styles" element={<CaseStudyStyleGuide onBack={handleBackNavigation} />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/presentation/:id" element={<Presentation />} />
          <Route path="/presentation" element={<Presentation />} />

          <Route path="*" element={
            <div className="pt-40 px-6 text-center min-h-screen font-sans">
              <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
              <p className="text-neutral-500 mb-8">The page you are looking for doesn't exist or has been moved.</p>
              <button onClick={() => navigate("/")} className="px-8 py-3 bg-[#88FF00] text-black font-bold rounded-full hover:scale-105 transition-transform">
                Return Home
              </button>
            </div>
          } />
        </Routes>
      </main>

      {view !== "presentation" && renderFooter(view === "changelog" ? "dark" : "light")}
      <Analytics />
    </div>
  );
}