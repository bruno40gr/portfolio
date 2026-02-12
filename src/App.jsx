import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ChevronDown, Menu, X } from "lucide-react";

import { ASSETS, COMPANY_STRIPE_LOGOS } from "./data/assets";
import { PORTFOLIO_DATA, WORK_GROUPS } from "./data/portfolioData";

import WorkDropdown from "./components/ui/WorkDropdown";
import LogoIcon from "./components/ui/logoIcon";
import Button from "./components/ui/Button";

import CompanyStripe from "./components/home/CompanyStripe";
import WorkSection from "./components/home/WorkSection";

import CaseStudy from "./components/caseStudy/CaseStudy";
import CaseStudyStyleGuide from "./components/caseStudy/CaseStudyStyleGuide";

export default function App() {
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

  // Smooth hover handlers for the Work Dropdown
  const handleWorkEnter = () => {
    if (workTimeoutRef.current) clearTimeout(workTimeoutRef.current);
    setIsWorkDropdownOpen(true);
  };

  const handleWorkLeave = () => {
    // 200ms grace period allows mouse to travel across the gap
    workTimeoutRef.current = setTimeout(() => {
      setIsWorkDropdownOpen(false);
    }, 200);
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

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-black selection:text-white relative text-left">
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
                onMouseEnter={handleWorkEnter}
                onMouseLeave={handleWorkLeave}
                onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
                className="type-nav opacity-90 hover:opacity-100 transition-opacity hidden md:inline-flex items-center gap-2"
              >
                Work
                <ChevronDown size={16} />
              </button>
              
              {/* This container persists so it can animate opacity/transform */}
              <div 
                onMouseEnter={handleWorkEnter}
                onMouseLeave={handleWorkLeave}
                className={`absolute top-0 left-0 transition-all duration-300 ease-in-out ${
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
            className={`hidden md:flex items-center justify-start gap-10 md:gap-14 transition-colors duration-300 ${
              navTheme === "dark" ? "text-white" : "text-[#231F45]"
            }`}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="type-nav opacity-90 hover:opacity-100 transition-opacity"
            >
              Resume
            </a>
            <button
              onClick={() => setIsContactOpen(true)}
              className="type-nav opacity-90 hover:opacity-100 transition-opacity"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

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
          <div className="px-6 py-6 flex flex-col gap-6 flex-1">
            <div className="border-b border-slate-100">
              <button 
                onClick={() => setIsMobileWorkExpanded(!isMobileWorkExpanded)}
                className="w-full flex items-center justify-between py-2 text-[#231f44]"
              >
                <span className="type-nav text-left text-2xl font-semibold">Work</span>
                <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileWorkExpanded ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileWorkExpanded && (
                <div className="pb-4">
                  <WorkDropdown 
                    workGroups={WORK_GROUPS} 
                    portfolioData={PORTFOLIO_DATA}
                    onProjectClick={(p) => {
                      openProject(p);
                      setIsMobileMenuOpen(false);
                    }}
                    closeMenu={() => setIsMobileMenuOpen(false)} 
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
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="type-nav text-left text-2xl font-semibold border-b border-slate-100 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </a>
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
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 text-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setIsContactOpen(false)}
          />

          <div
            className="relative bg-white p-6 md:p-7 rounded-sm shadow-2xl max-w-md w-full text-left font-sans animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsContactOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 p-2 rounded-sm hover:bg-neutral-100 transition-colors"
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
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-sm text-sm focus:outline-none focus:border-[#88FF00] transition-colors"
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
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-sm text-sm focus:outline-none focus:border-[#88FF00] transition-colors"
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
                  placeholder={`Do you think AI will replace UX designers?

No. It’ll replace designers who mostly produce deliverables. If I truly believed that, I’d be a full-time bass player already and making it work.`}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-sm text-sm focus:outline-none focus:border-[#88FF00] transition-colors resize-none"
                />
              </div>

              <div id="form-error" className="text-red-500 text-[11px] font-bold min-h-[14px]" />

              <div className="pt-1 flex flex-col items-center">
                <div className="w-full flex justify-center">
                  <Button className="w-full justify-center">Send message</Button>
                </div>
                <p className="mt-2 text-[10px] text-neutral-400 text-center">
                  This sends via your email client.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      <main className="min-h-screen relative bg-white text-left">
        {view === "home" && (
          <div className="bg-white animate-fade-in font-sans">
            <section className="bg-[#231F45] hero-wrap flex flex-col justify-center items-center text-center px-6 min-h-[calc(100vh-var(--header-h))] flex-grow">
              <div className="max-w-4xl w-full reveal-on-scroll hero-stack">
                <img src={ASSETS.mainLogo} alt="Bruno Wong Marchena" className="hero-logo" />
                <div className="max-w-3xl mx-auto">
                  <h1 className="text-slate-200 text-3xl md:text-4xl font-light tracking-tight mb-8 leading-snug">
                    <span className="font-semibold">Staff-level product designer</span> with <span className="font-semibold">14+ years</span> experience crafting complex systems.
                  </h1>
                  <p className="text-slate-400 text-2xl md:text-3xl mb-12 max-w-2xl mx-auto leading-snug font-light">
                      I embrace AI for speed, while keeping the creative direction fully owned.
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                  <Button onClick={() => setIsContactOpen(true)} className="px-10 py-4 bg-[#88FF00] text-black font-bold rounded-full hover:scale-105 transition-transform">
                    Let’s chat
                  </Button>
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
                  <p>With 14+ years across big tech and early-stage teams, I’ve worked on internal tools, B2B platforms, and AI-enabled systems where clarity, speed, and craft all matter.</p>
                  <p>I operate like a founding designer: shaping direction early, reducing ambiguity, and executing with precision. I build with AI assistance, but design with humans.</p>
                  <p>Visual craft is a core part of the work. Pixel-level precision is genuinely therapeutic to me. I’m fluent across tools, obsessive about hierarchy and spacing, and disciplined about clean, hygienic files that scale with teams.</p>
                  <p>I’m currently focused on freelance and retainer work on high-impact projects. I’m open to the right full-time role if the problem and ownership are compelling.</p>
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
      </main>

      {view !== "project-view" && (
        <footer className="bg-neutral-100 py-12 md:py-16 border-t border-neutral-200 font-sans">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
            <div className="mb-6">
              <p className="text-neutral-400 text-xs md:text-sm font-light tracking-wide leading-relaxed">
                Designed and built from the ground up by Bruno Wong. <br className="md:hidden" />
                Coded in VS Code with React, Tailwind, and{" "}
                <button 
                  onClick={() => openProject("portfolio-systems")}
                  className="hover:text-neutral-600 border-b border-neutral-300 hover:border-neutral-500 transition-all cursor-help"
                >
                  iterative refinement
                </button>.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigateTo("case-styles")}
              className="text-stone-400 font-bold uppercase tracking-[0.2em] text-[10px] hover:text-stone-600 transition-colors"
              aria-label="Open case study style guide"
            >
              &copy; {new Date().getFullYear()} Bruno Wong Marchena.
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}