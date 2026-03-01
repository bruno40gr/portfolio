import React from "react";
import { Maximize2 } from "lucide-react";

const ImageThumbnail = ({ src, alt, onClick, isPresentation = false }) => (
  <button
    type="button"
    onClick={onClick}
    className={`group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-green)] rounded-xl ${
      isPresentation ? "transition-transform duration-300 hover:-translate-y-1" : ""
    }`}
    aria-label="Expand image"
  >
    <div className="relative w-full bg-white border border-neutral-200 rounded-xl transition-all duration-300 ease-out p-2 shadow-sm group-hover:shadow-md group-hover:border-neutral-300">
      
      {/* Conditionally apply the aspect ratio and background */}
      <div className={`relative rounded-lg overflow-hidden flex items-center justify-center ${
        isPresentation ? "bg-neutral-50 w-full" : "bg-neutral-100 w-full aspect-[4/3]"
      }`}>
        
        <img
          src={src}
          alt={alt || "Process visual"}
          loading="lazy"
          // Conditionally apply zoom and object-fit
          className={`w-full transition-transform duration-500 ease-in-out ${
            isPresentation 
              ? "h-auto object-contain max-h-[600px]" 
              : "h-full object-cover group-hover:scale-105"
          }`}
        />
        
        {/* CENTERED Expand Arrow */}
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