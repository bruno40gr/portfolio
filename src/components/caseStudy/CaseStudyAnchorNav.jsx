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

        const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;

        if (nearBottom) {
          current = headingEls[headingEls.length - 1]?.id || current;
        } else {
          for (const el of headingEls) {
            const top = el.getBoundingClientRect().top;
            if (top <= cutoff) current = el.id;
          }
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

    const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 56;
    const top = element.getBoundingClientRect().top + window.scrollY - headerH;
    const start = window.scrollY;
    const distance = top - start;
    const duration = Math.min(Math.abs(distance) * 0.3, 400);
    const startTime = performance.now();

    const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + distance * ease(progress));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
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
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={"#" + section.id}
                title={section.title}
                className={
                  "case-anchor-link block meta-label leading-snug whitespace-normal break-words transition-colors " +
                  (isActive
                    ? "is-active !text-neutral-900 !font-[600]"
                    : "!text-neutral-400 !font-[400] hover:!text-neutral-900")
                }
                onClick={(e) => handleAnchorClick(e, section.id)}
              >
                <span className="case-anchor-bullet-wrap" aria-hidden="true">
                  <span className="case-anchor-bullet" />
                </span>
                <span>{section.title}</span>
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default CaseStudyAnchorNav;