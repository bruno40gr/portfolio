import React from "react";

export const ImpactBox = ({ metrics = [], description = [], size = "small" }) => {
  const isSmall = size === "small";

  if (isSmall) {
    return (
      <div className="flex flex-col gap-3 font-sans mt-2 w-full">
        <div className="flex flex-wrap gap-2">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="flex flex-col justify-center p-3 bg-slate-100 rounded-sm flex-1 min-w-[110px] max-w-[200px]"
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
        {description?.length > 0 && (
          <div className="flex flex-col gap-1">
            {description.map((line, i) => (
              <p key={i} className="text-[13px] text-slate-400 leading-snug" dangerouslySetInnerHTML={{ __html: line }} />
            ))}
          </div>
        )}
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
      {description?.length > 0 && (
        <div className="mt-4 flex flex-col gap-1.5">
          {description.map((line, i) => (
            <p key={i} className="text-sm text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: line }} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ImpactBox;