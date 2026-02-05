import React from "react";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

const CaseStudyAnchorNav = ({ sections, onBack }) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headingEls = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    let raf = null;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 56;
        const cutoff = headerH + 40;
        let current = headingEls[0]?.id || "";

        for (const el of headingEls) {
          const top = el.getBoundingClientRect().top;
          if (top <= cutoff) current = el.id;
          else break;
        }
        setActiveId(current);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [sections]);

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    setActiveId(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="flex flex-col gap-10 w-full">
      <button
        onClick={onBack}
        className="type-nav flex items-center gap-2 transition-colors text-sm font-medium group"
      >
        <ArrowLeft size={16} />
        <span className="type-nav">Back</span>
      </button>

      {sections.length > 0 && (
        <div className="flex flex-col gap-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              title={section.title}
              className={`case-anchor-link block meta-label leading-snug whitespace-normal break-words transition-colors ${
                activeId === section.id
                  ? "is-active !text-neutral-900 !font-[600]"
                  : "!text-neutral-400 !font-[400] hover:!text-neutral-900"
              }`}
              onClick={(e) => handleAnchorClick(e, section.id)}
            >
              <span className="case-anchor-bullet-wrap" aria-hidden="true">
                <span className="case-anchor-bullet" />
              </span>
              <span>{section.title}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default CaseStudyAnchorNav;
