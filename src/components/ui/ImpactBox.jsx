import React from "react";

export const ImpactBox = ({ metrics = [], size = "small" }) => {
  const isSmall = size === "small";

  if (isSmall) {
    // COZY CARD STYLE (Small)
    return (
      <div className="flex flex-wrap gap-3 font-sans mt-2">
        {metrics.map((m, i) => (
          <div 
            key={i} 
            className="flex flex-col p-4 bg-slate-50 border border-slate-100 rounded-lg min-w-[120px]"
          >
            <span className="text-xl font-semibold text-[var(--deep-purple)] mb-1 font-sans leading-none">
              {m.value}
            </span>
            <span className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider font-sans">
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
            className="flex flex-col justify-center p-6 md:p-10 bg-slate-50 border border-slate-100 rounded-xl shadow-sm"
          >
            <span className="text-3xl md:text-[3.25rem] text-slate-900 mb-2 font-[600] tracking-tight leading-none">
              {m.value}
            </span>
            <span className="text-lg text-slate-600 font-medium">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactBox;
