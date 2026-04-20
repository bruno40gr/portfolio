import React from "react";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const handleClick = () => {
    const el = document.getElementById("work");
    // "smooth" creates a nice glide down to the work section. 
    // You can change it to "instant" if you prefer an immediate jump.
    if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to work"
      className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 group cursor-pointer bg-transparent border-none p-0 focus:outline-none"
    >
      <style>{`
        @keyframes chevron-glitch {
          0%, 92%, 96%, 100% { 
            transform: translateY(0); 
            filter: none; 
            opacity: 0.7; 
          }
          93% { 
            transform: translateY(2px) skewX(15deg); 
            filter: drop-shadow(-2px 0 0 #00ffff) drop-shadow(2px 0 0 #ff0055); 
            opacity: 1; 
          }
          94% { 
            transform: translateY(-2px) skewX(-15deg); 
            filter: drop-shadow(2px 0 0 #00ffff) drop-shadow(-2px 0 0 #ff0055); 
            opacity: 0.8; 
          }
          95% { 
            transform: translateY(0) skewX(5deg); 
            filter: drop-shadow(-1px 0 0 #88FF00); 
            opacity: 1; 
          }
        }
        .glitch-chevron {
          animation: chevron-glitch 4s infinite;
          color: #88FF00; /* Neon green matching your palette */
        }
      `}</style>

      {/* Text Label */}
      <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors duration-500 font-light">
        View work
      </span>

      {/* Glitching Chevron */}
      <div className="mt-0.5">
        <ChevronDown 
          size={20} 
          strokeWidth={1.5} 
          className="glitch-chevron group-hover:opacity-100 transition-opacity duration-300" 
        />
      </div>
    </button>
  );
};

export default ScrollIndicator;