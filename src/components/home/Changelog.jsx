import React from "react";
import { CHANGELOG_DATA } from "../../data/changelogData";

const renderFormattedText = (text) => {
  // Simple bold parsing for markdown-style **text**
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      // Keep color same as rest of text, just bold and code-y font
      return <strong key={index} className="font-semibold font-mono tracking-tight text-slate-400">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

export default function Changelog() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-16 max-w-[1000px] mx-auto min-h-screen bg-[#13102e] text-left font-mono animate-fade-in relative z-10">
      
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1]" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(20, 15, 45, 1) 0%, rgba(10, 8, 20, 1) 80%)' }}/>
      <svg className="fixed -top-[5%] -left-[5%] w-[110%] h-[110%] pointer-events-none opacity-[0.25] z-[-1] animate-grain" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain-changelog">
          <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-changelog)" />
      </svg>
      <div className="fixed inset-0 pointer-events-none z-[-1]" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(136,255,0,0.05) 0%, transparent 70%)' }} />

      <div className="mb-16 md:mb-24">
        <h1 className="text-[#88FF00] text-sm md:text-base font-mono tracking-[0.4em] mb-4">
          Development Log
        </h1>
        <h2 className="font-serif text-3xl md:text-5xl text-slate-100 font-bold leading-tight tracking-tight">
          Iterative Refinement
        </h2>
        <p className="text-slate-400 text-lg md:text-xl mt-6 max-w-2xl font-light leading-relaxed">
          Here is the running log of how I built this.
        </p>
      </div>

      {/* Center line for desktop, left line for mobile */}
      <div className="space-y-16 md:space-y-24 relative before:absolute before:inset-0 before:left-2 md:before:left-1/2 md:before:-ml-px before:h-full before:w-px before:bg-gradient-to-b before:from-[#88FF00]/40 before:via-white/10 before:to-transparent">
        {CHANGELOG_DATA.map((entry, index) => (
          <div key={index} className="relative flex flex-col md:flex-row items-start group">
            
            {/* Timeline Node - precisely positioned over the line */}
            <div className="absolute left-2 md:left-1/2 top-1.5 md:top-2 -ml-[5px] w-3 h-3 rounded-full bg-[#13102e] border-2 border-[#88FF00] z-10 group-hover:bg-[#88FF00] group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(136,255,0,0.3)]"></div>
            
            {/* Desktop Week (Left side) */}
            <div className="hidden md:block w-1/2 text-right pr-12 mt-1">
              <span className="text-slate-400 text-normal tracking-normal font-mono">
                {entry.week}
              </span>
            </div>

            {/* Content (Right side on desktop, indented on mobile) */}
            <div className="w-full md:w-1/2 pl-10 md:pl-12">
              {/* Mobile Week */}
              <div className="md:hidden mb-2">
                <span className="text-[#88FF00] text-xs tracking-widest font-mono">
                  {entry.week}
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl text-slate-200 font-normal mb-4 tracking-normal leading-snug">
                {entry.title}
              </h3>
              
              <ul className="space-y-4">
                {entry.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-slate-400 text-[15px] md:text-base leading-relaxed font-thin flex items-start gap-3">
                    <span className="text-white/20 mt-1.5 text-[10px]">■</span>
                    <span className="text-slate-400 text-sm tracking-normal font-mono mr-2">{item.day}</span>
                    <span className="flex-1">{renderFormattedText(item.text)}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}