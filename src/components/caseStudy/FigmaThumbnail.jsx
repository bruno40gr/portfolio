import React from "react";
import { Figma } from "lucide-react";

const FigmaThumbnail = ({ src, caption }) => (
  <a
    href={src}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-green)] rounded-xl"
    aria-label="Open Figma file"
  >
    <div className="relative w-full bg-white border border-neutral-200 rounded-xl transition-all duration-300 ease-out p-2 shadow-sm group-hover:shadow-md group-hover:border-neutral-300">
      <div className="relative rounded-lg overflow-hidden bg-neutral-100 w-full aspect-[4/3] flex items-center justify-center">
        <Figma size={48} className="text-neutral-400 group-hover:text-black transition-colors" />
      </div>
    </div>
    {caption && <p className="type-caption text-left text-neutral-500 text-[16px] font-normal leading-relaxed mt-2 md:mt-3 font-sans">{caption}</p>}
  </a>
);

export default FigmaThumbnail;