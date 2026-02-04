import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CaseStudyPager = ({ prevProject, nextProject, onNavigate }) => {
  const Card = ({ target, eyebrow, isRight = false }) => {
    if (!target) return <div className="flex-1 hidden md:block" />;

    return (
      <button
        onClick={() => onNavigate(target)}
        aria-label={`${eyebrow}: ${target.title}`}
        className={`flex-1 group flex flex-col gap-2 py-6 md:py-8 transition-all duration-300 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 ${
          isRight ? "items-end text-right" : "items-start text-left"
        }`}
      >
        <div
          className={`flex items-center gap-2 text-neutral-500 transition-colors group-hover:text-black ${
            isRight ? "flex-row-reverse" : ""
          }`}
        >
          {isRight ? (
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          ) : (
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          )}
          <span className="type-nav">{eyebrow}</span>
        </div>

        <h2 className="font-bold text-neutral-900 text-base md:text-xl leading-tight transition-colors group-hover:text-black">
          {target.title}
        </h2>
      </button>
    );
  };

  return (
    <nav
      aria-label="Case study navigation"
      className="flex flex-col md:flex-row gap-8 w-full mt-20 pt-10 border-t border-neutral-200"
    >
      <Card target={prevProject} eyebrow="Previous case study" />
      <Card target={nextProject} eyebrow="Next case study" isRight />
    </nav>
  );
};

export default CaseStudyPager;
