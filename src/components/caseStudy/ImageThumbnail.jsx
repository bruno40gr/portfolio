import React from "react";
import { Maximize2 } from "lucide-react";

const ImageThumbnail = ({ src, alt, onClick, isPresentation = false }) => (
  <button
    type="button"
    onClick={onClick}
    className={`group relative w-full text-left media-card-focus rounded-xl ${
      isPresentation ? "transition-transform duration-300 hover:-translate-y-1" : ""
    }`}
    aria-label="Expand image"
  >
    <div className="media-card-shell media-card-shell-hover">
      
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
           <div className="media-card-action">
             <Maximize2 size={20} aria-hidden="true" />
           </div>
        </div>
      </div>
    </div>
  </button>
);

export default ImageThumbnail;