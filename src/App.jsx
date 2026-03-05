import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ChevronDown, Menu, X } from "lucide-react";

import { ASSETS, COMPANY_STRIPE_LOGOS } from "./data/assets";
import { PORTFOLIO_DATA, WORK_GROUPS } from "./data/portfolioData";

import WorkDropdown from "./components/ui/WorkDropdown";
import LogoIcon from "./components/ui/logoIcon";


import CompanyStripe from "./components/home/CompanyStripe";
import WorkSection from "./components/home/WorkSection";
import Changelog from "./components/home/Changelog";

import CaseStudy from "./components/caseStudy/CaseStudy";
import CaseStudyStyleGuide from "./components/caseStudy/CaseStudyStyleGuide";
import ResumePage from "./components/ResumePage"; // Import new ResumePage component
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // If gatekeeper is disabled, always authenticate. Otherwise, check session storage.
    return !PORTFOLIO_DATA.gatekeeperEnabled || sessionStorage.getItem("portfolio_auth") === "true";
  });
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const [view, setView] = useState("home");
  const [activeProject, setActiveProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
  const [isMobileWorkExpanded, setIsMobileWorkExpanded] = useState(false);
  const headerRef = useRef(null);
  
  // Ref for the hover delay timer
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

  // Effect to manage body overflow for the gatekeeper page
  useEffect(() => {
    const isGatekeeperActive = PORTFOLIO_DATA.gatekeeperEnabled && !isAuthenticated && view !== "changelog";
    if (isGatekeeperActive) {
      document.documentElement.classList.add("overflow-hidden"); // Add to html
      document.body.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden"); // Remove from html
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup function to remove the class when component unmounts or dependencies change
    return () => {
      document.documentElement.classList.remove("overflow-hidden"); // Ensure cleanup for html
      document.body.classList.remove("overflow-hidden");
    };
  }, [isAuthenticated, view]); // Re-run effect when authentication state or view changes


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

  // --- LOGIN LOGIC ---
  const handleLogin = (e) => {
    e.preventDefault();
    
    // CHANGE YOUR PASSWORD HERE
    if (password.toLowerCase() === "lima") {
      setAuthError("");
      setIsSuccess(true);
      // Small artificial delay so the user sees the "Access Granted" message
      setTimeout(() => {
        setIsAuthenticated(true);
        sessionStorage.setItem("portfolio_auth", "true");
      }, 600);
    } else {
      setAuthError("Incorrect password");
      setIsSuccess(false);
    }
  };

  const navigateTo = (page, anchor) => {
    if (page === "home" && anchor === "work") {
      if (view !== "home") {
        setView("home");
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
    setView(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const caseStudyProjects = PORTFOLIO_DATA.projects.filter((p) => !p.summary?.includes("Coming soon"));
  const activeProjectIndex = caseStudyProjects.findIndex((p) => p.id === activeProject?.id);
  const prevProject = activeProjectIndex > 0 ? caseStudyProjects[activeProjectIndex - 1] : null;
  const nextProject =
    activeProjectIndex >= 0 && activeProjectIndex < caseStudyProjects.length - 1
      ? caseStudyProjects[activeProjectIndex + 1]
      : null;

  const handleBackNavigation = () => {
    setIsMobileMenuOpen(false);
    if (view === "project-view") {
      setActiveProject(null);
      setView("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (view === "case-styles") {
      setView("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (view === "about") {
      setView("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (view === "resume") { // Handle back navigation from resume page
      setView("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const openProject = (projectOrId) => {
    const project =
      typeof projectOrId === "string"
        ? PORTFOLIO_DATA.projects.find((p) => p.id === projectOrId)
        : projectOrId;

    if (project) {
      setActiveProject(project);
      setView("project-view");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  const navTheme = view === "home" && !scrolled ? "dark" : "light";

  // Shared footer component extracted so it can be used on both Gatekeeper and Main App
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
                className={`${hoverColor} border-b ${borderColor} transition-all cursor-help`}
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

  // --- PASSWORD GATEKEEPER VIEW ---
  // Allow access to the changelog without authentication, or if gatekeeper is disabled
  if (PORTFOLIO_DATA.gatekeeperEnabled && !isAuthenticated && view !== "changelog") {
    return (
      <div className="h-screen w-screen flex flex-col text-left selection:bg-[#88FF00] selection:text-black bg-[#2d255c] relative overflow-hidden">
        
        {/* Background effects moved to outer wrapper so they underlap the footer */}
        {/* Depth gradient: Increased contrast with a harsher, darker falloff at the edges */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(circle at 50% 50%, transparent 10%, rgba(10, 8, 20, 0.95) 90%)' }}></div>
        
        {/* Grain texture overlay: Bumped opacity up to 0.40 for heavier texture */}
        <svg className="absolute -top-[5%] -left-[5%] w-[110%] h-[110%] pointer-events-none opacity-[0.30] z-0 animate-grain" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
        
        {/* Neon glow: Increased opacity from 0.09 to 0.20 to create a noticeable backlight */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(136,255,0,0.20) 0%, transparent 65%)' }}></div>

        <main className="flex-grow flex flex-col items-center text-center px-6 relative z-10 w-full">
          
          <div className="relative w-full max-w-4xl animate-fade-in hero-stack mt-[15vh]">
            
            {/* Logo */}
            <img 
              src="https://res.cloudinary.com/diy08lj9x/image/upload/v1772648447/bruno-logo-whitewong_q7cxxn.png" 
              alt="Bruno Wong Marchena" 
              className="hero-logo glitch-effect" 
            />
            
            {/* The Form */}
            <form onSubmit={handleLogin} className="w-full flex flex-col items-center gap-4 mt-2">
              
              {/* Stark White Input Field */}
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

              {/* Classic Pill Button matching your existing UI */}
              <button 
                type="submit" 
                className="w-full max-w-[200px] px-10 py-3 bg-[#88FF00] text-black font-bold rounded-full hover:scale-105 transition-transform text-base"
              >
                Enter
              </button>
              
              {/* Error / Loading States */}
              <div className="h-6 flex items-center justify-center mt-2">
                {authError && (
                  <p className="text-red-500 text-sm font-bold tracking-wide">
                    {authError}
                  </p>
                )}
                {isSuccess && (
                  <p className="text-[#88FF00] text-sm font-bold tracking-wide">
                    Access Granted...
                  </p>
                )}
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

  // --- MAIN SITE RENDER ---
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-black selection:text-white relative text-left">
      {view !== "changelog" && (
        <nav
          ref={headerRef}
          className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
            navTheme === "dark" ? "bg-transparent py-4" : "bg-white/95 border-b border-neutral-200 py-3 shadow-sm"
          }`}
        >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-[1fr_auto_1fr] items-center">
          <div
            className={`flex items-center justify-start md:justify-end gap-4 md:gap-14 transition-colors duration-300 ${
              navTheme === "dark" ? "text-white" : "text-[#231F45]"
            }`}
          >
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="type-nav md:hidden p-2 rounded-sm transition-colors"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
            
            {/* --- WORK DROPDOWN WRAPPER --- */}
            <div className="relative h-full flex items-center">
              <button
                onClick={(e) => { e.stopPropagation(); setIsWorkDropdownOpen(!isWorkDropdownOpen); }}
                className="type-nav opacity-90 hover:opacity-100 transition-opacity hidden md:inline-flex items-center gap-2 relative z-[101]"
              >
                Work
                <ChevronDown
                  size={16}
                  className={"transition-transform duration-300 " + (isWorkDropdownOpen ? "rotate-180" : "")}
                />
              </button>

              {/* Click-outside overlay */}
              {isWorkDropdownOpen && (
                <div 
                  className="fixed inset-0 bg-black/20 z-[90] transition-opacity duration-300" 
                  onClick={() => setIsWorkDropdownOpen(false)} 
                />
              )}

              {/* Dropdown panel */}
              <div
                className={`absolute top-0 left-0 transition-all duration-300 ease-in-out z-[100] ${
                  isWorkDropdownOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible pointer-events-none"
                }`}
              >
                <WorkDropdown 
                  workGroups={WORK_GROUPS} 
                  portfolioData={PORTFOLIO_DATA}
                  onProjectClick={(p) => {
                    openProject(p);
                    setIsWorkDropdownOpen(false);
                  }}
                  closeMenu={() => setIsWorkDropdownOpen(false)} 
                />
              </div>
            </div>

            <button
              onClick={() => navigateTo("about")}
              className="type-nav opacity-90 hover:opacity-100 transition-opacity hidden md:inline-flex"
            >
              About
            </button>
          </div>

          <div onClick={() => navigateTo("home")} className="cursor-pointer mx-10 md:mx-16 shrink-0 flex justify-center">
            <LogoIcon theme={navTheme} />
          </div>

          <div
            className={`flex items-center justify-start gap-10 md:gap-14 transition-colors duration-300 ${
              navTheme === "dark" ? "text-white" : "text-[#231F45]"
            }`}
          >
            <button
              onClick={() => navigateTo("resume")}
              className="type-nav opacity-90 hover:opacity-100 transition-opacity"
            >
              Resume
            </button>
            <button
              onClick={() => setIsContactOpen(true)}
              className="type-nav opacity-90 hover:opacity-100 transition-opacity"
            >
              Contact
            </button>
          </div>
        </div>
        </nav>
      )}

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[180] bg-white text-slate-900 md:hidden flex flex-col">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigateTo("home");
              }}
              className="type-nav flex items-center gap-2 text-2xl font-medium text-[#88FF00]"
              aria-label="Go home"
            >
              <LogoIcon company={activeProject?.company} />
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="type-nav p-2 rounded-sm"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>
          <div className="px-6 py-6 flex flex-col gap-6 flex-1 overflow-y-auto">
            <div className="border-b border-slate-100">
              <button 
                onClick={() => setIsMobileWorkExpanded(!isMobileWorkExpanded)}
                className="w-full flex items-center justify-between py-2 text-[#231f44]"
              >
                <span className="type-nav text-left text-2xl font-semibold">Work</span>
                <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileWorkExpanded ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileWorkExpanded && (
                <div className="pb-4 bg-white">
                  <WorkDropdown 
                    workGroups={WORK_GROUPS} 
                    portfolioData={PORTFOLIO_DATA}
                    onProjectClick={(p) => {
                      openProject(p);
                      setIsMobileMenuOpen(false);
                    }}
                    closeMenu={() => setIsWorkDropdownOpen(false)} 
                  />
                </div>
              )}
            </div>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigateTo("about");
              }}
              className="type-nav text-left text-2xl font-semibold border-b border-slate-100 py-2"
            >
              About
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigateTo("resume");
              }}
              className="type-nav text-left text-2xl font-semibold border-b border-slate-100 py-2"
            >
              Resume
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsContactOpen(true);
              }}
              className="type-nav text-left text-2xl font-semibold border-b border-slate-100 py-2"
            >
              Contact
            </button>
          </div>

          {view === "project-view" && (prevProject || nextProject) && (
            <div className="px-6 pb-8 pt-4 flex items-center justify-between mt-auto">
              <div>
                {prevProject && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openProject(prevProject);
                    }}
                    className="type-nav text-left text-base font-semibold"
                  >
                    ← Previous
                  </button>
                )}
              </div>
              <div>
                {nextProject && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openProject(nextProject);
                    }}
                    className="type-nav text-right text-base font-semibold"
                  >
                    Next →
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {isContactOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center p-4 md:p-6 pt-[8vh] md:pt-[10vh] text-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setIsContactOpen(false)}
          />

          <div
            className="relative bg-white border border-slate-200 p-6 md:p-7 rounded-sm shadow-2xl max-w-md w-full text-left font-sans animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsContactOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 p-2 rounded-sm hover:bg-slate-100 transition-colors"
            >
              <X size={18} className="text-neutral-500" />
            </button>

            <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 pr-10 text-center">Let's chat</h3>

            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();

                const form = e.currentTarget;
                const name = form.elements.namedItem("name")?.value?.trim?.() || "";
                const email = form.elements.namedItem("email")?.value?.trim?.() || "";
                const message = form.elements.namedItem("message")?.value?.trim?.() || "";

                const errorDisplay = form.querySelector("#form-error");
                if (!errorDisplay) return;

                if (!name || !email || !message) {
                  errorDisplay.textContent = "All fields are required.";
                  return;
                }
                if (!email.includes("@") || !email.includes(".")) {
                  errorDisplay.textContent = "Please provide a valid email address.";
                  return;
                }

                errorDisplay.textContent = "";

                const subject = `Portfolio inquiry from ${name}`;
                const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
                const mailtoUrl = `mailto:bruwong@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                window.location.href = mailtoUrl;
                setIsContactOpen(false);
              }}
            >
              <div>
                <label htmlFor="form-name" className="block text-neutral-500 mb-1">
                  Your name
                </label>
                <input
                  id="form-name"
                  name="name"
                  type="text"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#88FF00] transition-shadow text-slate-900 font-bold tracking-widest placeholder:text-slate-400 placeholder:font-normal placeholder:tracking-normal"
                />
              </div>

              <div>
                <label htmlFor="form-email" className="block text-neutral-500 mb-1">
                  Email
                </label>
                <input
                  id="form-email"
                  name="email"
                  type="email"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#88FF00] transition-shadow text-slate-900 font-bold tracking-widest placeholder:text-slate-400 placeholder:font-normal placeholder:tracking-normal"
                />
              </div>

              <div>
                <label htmlFor="form-message" className="block text-neutral-500 mb-1">
                  Message
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  rows={5}
                  placeholder={`Be nice`}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#88FF00] transition-shadow text-slate-900 font-bold tracking-widest placeholder:text-slate-400 placeholder:font-normal placeholder:tracking-normal resize-none"
                />
              </div>

              <div id="form-error" className="text-red-500 text-[11px] font-bold min-h-[14px]" />

              <div className="pt-1 flex flex-col items-center">
                <button
                  type="submit"
                  className="w-full px-10 py-3 bg-[#88FF00] text-black font-bold rounded-full hover:scale-105 transition-transform text-base"
                >
                  Send message
                </button>
                <p className="mt-6 text-[14px] text-neutral-400 text-center">
                  Give me 24hrs. Talk soon!
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      <main className="min-h-screen relative bg-white text-left">
        {view === "home" && (
          <div className="bg-white animate-fade-in font-sans">
            <section className="bg-[#2d255c] hero-wrap flex flex-col justify-center items-center text-center px-6 min-h-[calc(100vh-var(--header-h))] flex-grow relative overflow-hidden">
              {/* Depth gradient — darkens edges, keeps center rich */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, transparent 10%, rgba(10, 8, 20, 1) 90%)' }}/>
              {/* Grain texture overlay */}
              <svg className="absolute -top-[5%] -left-[5%] w-[110%] h-[110%] pointer-events-none opacity-[0.30] z-0 animate-grain" xmlns="http://www.w3.org/2000/svg">
                <filter id="grain">
                  <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
                  <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#grain)" />
              </svg>
              {/* Neon glow — slightly stronger to punch through */}
              <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(136,255,0,0.20) 0%, transparent 65%)' }} />
              
              <div className="max-w-4xl w-full reveal-on-scroll hero-stack relative z-10">
                <img src="https://res.cloudinary.com/diy08lj9x/image/upload/v1772648447/bruno-logo-whitewong_q7cxxn.png" alt="Bruno Wong Marchena" className="hero-logo glitch-effect" />
                <div className="max-w-3xl mx-auto">
                  <h1 className="text-slate-300 text-2xl md:text-[1.8rem] font-light md:mt-8 mb-8 leading-snug">
                    I build AI-powered platforms and automation systems that redefine how complex organizations operate.
                  </h1>
                  <p className="text-slate-400 text-2xl md:text-[1.5rem] mb-4 max-w-2xl mx-auto leading-snug font-light">
                    I've automated the work of entire teams at Amazon, cut fulfillment costs in healthcare logistics, and co-invented a patent for subscription systems in the creator economy.
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <button onClick={() => setIsContactOpen(true)} className="px-10 py-4 bg-[#88FF00] text-black font-bold rounded-full hover:scale-105 transition-transform">
                    Let's chat
                  </button>
                  <p className="text-slate-400 text-lg md:text-xl font-light tracking-wide">
                    Available for freelance and contract work
                  </p>
                </div>
              </div>
            </section>

            <CompanyStripe logos={COMPANY_STRIPE_LOGOS} />
            <WorkSection onProjectClick={openProject} />
          </div>
        )}

        {view === "about" && (
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
                  <p>I'm a product designer focused on AI platforms and internal systems, usually the behind-the-scenes stuff where workflows are messy and the UX debt is real. I like that zone. It's where design has to hold up under pressure and still hit the business numbers.</p>
                  <p>Over the last 12 years I've worked across big tech, healthcare logistics, and creator platforms. I've also been a founding designer, taking a product from zero to traction and helping secure funding. Along the way I've designed systems that automate heavy manual work, helped cut operational costs, and co-invented a patent around retention and loyalty. My design roots technically go back to making posters and album art for my punk rock band.</p>
                  <p className="font-semibold text-neutral-900">How I work</p>
                  <p>I work best as a hands-on lead and stay tight with product and engineering from day one. I'm invested in research and strategy, but equally happy in the weeds debugging a component or tightening the last 10% so it feels right in production. I build design systems that are structured enough to hand off cleanly and work with how modern teams actually build. I've been told I'm the calm in the room when things get messy. I'll take it.</p>
                  <p>On AI work, I care about what makes it actually hold up: guardrails, fallbacks, human-in-the-loop flows, and catching the moments when the model is wrong but sounds right. Then the craft: the UI, the states, and the details that survive contact with production.</p>
                  <p>When I'm not working</p>
                  <p>Bass in a cover band around Sacramento, everything from Blink 182 to Tool. Kettlebell aficionado. Family in Lima and Athens means I travel there whenever life allows. The only time I tolerate being a bum is on a beach.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === "project-view" && activeProject && (
          <CaseStudy project={activeProject} onNavigateToProject={openProject} onExit={() => navigateTo("home", "work")} />
        )}

        {view === "case-styles" && (
          <CaseStudyStyleGuide onBack={handleBackNavigation} />
        )}

        {view === "changelog" && (
          <Changelog />
        )}

        {view === "resume" && (
          <ResumePage />
        )}
      </main>

      {/* RENDER FOOTER FOR MAIN SITE */}
      {view !== "project-view" && renderFooter(view === "changelog" ? "dark" : "light")}
      <Analytics />
    </div>
  );
}
