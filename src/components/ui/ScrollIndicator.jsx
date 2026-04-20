import React from "react";

const ScrollIndicator = () => {
  const handleClick = () => {
    const el = document.getElementById("work");
    if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to work"
      className="absolute bottom-16 md:bottom-24 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 group cursor-pointer bg-transparent border-none p-0"
    >
      <style>{`
        @keyframes scrollDrop {
          0% { 
            transform: scaleY(0); 
            transform-origin: top; 
          }
          45% { 
            transform: scaleY(1); 
            transform-origin: top; 
          }
          55% { 
            transform: scaleY(1); 
            transform-origin: bottom; 
          }
          100% { 
            transform: scaleY(0); 
            transform-origin: bottom; 
          }
        }
        .scroll-line {
          animation: scrollDrop 1.8s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
      `}</style>

      {/* Text Label */}
      <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors duration-500 font-light">
        View Work
      </span>

      {/* Track */}
      <div className="relative w-[1px] h-12 md:h-16 bg-white/20 overflow-hidden">
        {/* Animated Drop Line */}
        <div className="scroll-line absolute top-0 left-0 w-full h-full bg-[#88FF00]" />
      </div>
    </button>
  );
};

export default ScrollIndicator;