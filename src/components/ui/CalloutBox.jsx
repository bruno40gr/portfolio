import React from "react";
import { Layers } from 'lucide-react';

export const CalloutBox = ({ content, size = "small", className = "" }) => {
  const isSmall = size === "small";

  if (isSmall) {
    return (
      <div className="w-full mb-4">
        <div className="bg-slate-100 rounded-sm p-3 flex gap-3 py-4">
          {/* Small Icon - Fixed width to prevent shrinking */}
          <Layers size={18} className="text-slate-400 mt-1 flex-shrink-0" strokeWidth={1.5} />
          <p
            className="text-[13px] leading-relaxed text-slate-500 font-medium"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    );
  }

  // Large version for case studies
  return (
    <section className={`mb-12 w-full ${className}`}>
      <div className="bg-white p-4 md:p-6 rounded-lg border border-neutral-200 flex flex-col md:flex-row gap-6">
        <Layers 
          size={24} 
          className="text-neutral-400 mt-1 md:mt-2 flex-shrink-0"
          strokeWidth={1.5} 
        />
        <p
          className="font-sans text-base md:text-[17px] text-neutral-700 leading-[1.6] font-normal max-w-[680px]"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
};

export default CalloutBox;
