import React from "react";
import { Maximize2 } from "lucide-react";

const ImageThumbnail = ({ src, alt, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-green)] rounded-xl"
    aria-label="Expand image"
  >
    <div className="relative w-full bg-white border border-neutral-200 rounded-xl transition-all duration-300 ease-out p-2 shadow-sm group-hover:shadow-md group-hover:border-neutral-300">
      {/* Image Wrapper */}
      <div className="relative rounded-lg overflow-hidden bg-neutral-100 w-full aspect-[4/3]">
        <img
          src={src}
          alt={alt || "Process visual"}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        
        {/* CENTERED Expand Arrow (Maximize2) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[var(--deep-purple)] shadow-lg opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-[var(--neon-green)] group-hover:border-[var(--neon-green)] transition-all duration-300 transform scale-90 group-hover:scale-100">
             <Maximize2 size={20} aria-hidden="true" />
           </div>
        </div>
      </div>
    </div>
  </button>
);

export default ImageThumbnail;