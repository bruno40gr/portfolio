import React from "react";
import { FileText, ArrowUpRight } from "lucide-react";

const FileThumbnail = ({ title, fileSize, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="group w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-green)] rounded-2xl relative" 
    aria-label={`Preview PDF: ${title}`}
  >
    {/* White Card Container */}
    <div className="relative bg-white hover:bg-neutral-50 transition-colors duration-200 rounded-2xl p-4 flex items-center gap-4 w-full border border-neutral-200 shadow-sm hover:shadow-md group-hover:-translate-y-0.5 transform ease-out z-0">
      
      {/* Icon Placeholder - Adapts to Neon on Hover */}
      <div className="shrink-0 w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-500 transition-all duration-300 group-hover:bg-[var(--neon-green)] group-hover:border-[var(--neon-green)] group-hover:text-[var(--deep-purple)]">
        <FileText size={24} strokeWidth={1.5} />
      </div>

      {/* Text Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <h3 className="text-neutral-900 font-bold text-[16px] leading-tight truncate font-sans pr-2">
          {title}
        </h3>
        <span className="text-neutral-500 text-[13px] mt-1 font-sans font-medium">
           PDF • {fileSize}
        </span>
      </div>

      {/* Hanging Diagonal Arrow (Bottom Right Edge) */}
      <div className="absolute right-4 bottom-0 translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[var(--deep-purple)] shadow-sm group-hover:bg-[var(--neon-green)] group-hover:border-[var(--neon-green)] transition-all duration-300 z-10">
        <ArrowUpRight size={18} aria-hidden="true" />
      </div>

    </div>
  </button>
);

export default FileThumbnail;