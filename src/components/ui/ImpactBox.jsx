import React from "react";

export const ImpactBox = ({ metrics = [], size = "small" }) => {
  const isSmall = size === "small";

  if (isSmall) {
    // "Cozy" Project Card Style: Individual cards row
    return (
      <div className="flex flex-wrap gap-3 font-sans mt-2">
        {metrics.map((m, i) => (
          <div 
            key={i} 
            className="flex flex-col p-3 bg-slate-50 border border-slate-100 rounded-lg min-w-[120px]"
          >
            <span className="text-xl font-black text-[var(--deep-purple)] mb-0.5 tracking-tight font-sans leading-none">
              {m.value}
            </span>
            <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider font-sans">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  // "Hero" Case Study Style: Single container
  return (
    <section className="mb-8 md:mb-10 w-full">
      <div className="bg-slate-50 border border-slate-100 p-6 md:p-10 rounded-xl shadow-sm">
        <div className={`grid gap-8 ${metrics.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`flex flex-col ${i === 0 && metrics.length > 1 ? "sm:border-r sm:border-slate-200" : ""}`}
            >
              <span className="text-4xl md:text-[2.75rem] text-slate-900 mb-1 font-[600] tracking-tight leading-none">
                {m.value}
              </span>
              <span className="text-base">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactBox;
