import React from "react";

export const ImpactBox = ({ metrics = [], size = "small" }) => {
  const isSmall = size === "small";

  if (isSmall) {
    // COZY CARD STYLE (Small)
    // Updated to match the "Asset System AI Agent" reference:
    // 1. Changed to 'bg-slate-50' to provide contrast against the white dropdown background
    // 2. Used 'border-slate-100' for a subtle definition
    // 3. Kept text left-aligned and sentence-case
    return (
      <div className="flex flex-wrap gap-2 font-sans mt-2 w-full">
        {metrics.map((m, i) => (
          <div 
            key={i} 
            className="flex flex-col justify-center p-3 bg-slate-100  rounded-sm flex-1 min-w-[110px] max-w-[200px]"
          >
            <span className="text-[16px] font-bold text-[#231f44] tracking-tight leading-none mb-1">
              {m.value}
            </span>
            <span className="text-[13px] leading-snug text-slate-500 font-medium">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  // HERO CASE STUDY STYLE (Large)
  return (
    <section className="mb-12 w-full">
      <div className={`grid gap-6 ${
        metrics.length > 2 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
      }`}>
        {metrics.map((m, i) => (
          <div
            key={i}
            className="flex flex-col justify-center p-6 md:p-8 bg-slate-100 border border-slate-200 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
          >
            <span className="text-3xl md:text-[36px] text-[#231f44] mb-2 font-bold tracking-tight leading-none">
              {m.value}
            </span>
            <span className="text-lg text-slate-600 font-medium leading-snug">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactBox;