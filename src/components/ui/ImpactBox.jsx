import React from "react";

const ImpactBox = ({ metrics, description = [] }) => {
  const hasDescription = Array.isArray(description) && description.length > 0;

  return (
    <section className="mb-8 md:mb-10 w-full">
      <div className="bg-neutral-100 border border-neutral-200 p-6 md:p-10 rounded-xl shadow-sm">
        <div className={`grid gap-8 ${hasDescription ? "mb-8" : ""} ${metrics.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`flex flex-col ${i === 0 && metrics.length > 1 ? "sm:border-r sm:border-neutral-300" : ""}`}
            >
              <span className="text-4xl md:text-[2.75rem] text-slate-900 mb-1 font-[600] tracking-tight leading-none">
                {m.value}
              </span>
              <span className="text-[11px] md:text-xs font-bold tracking-widest uppercase text-neutral-500">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {hasDescription && (
          <>
            <div className="h-px w-full bg-neutral-300 mb-8" />
            <div className="space-y-4">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg text-neutral-800 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ImpactBox;
