import React from "react";
import { Layers } from 'lucide-react';

export const CalloutBox = ({ content, size = "small" }) => {
  const isSmall = size === "small";

  if (isSmall) {
    return (
      <div className="w-full mb-4">
        <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 flex gap-3">
          {/* Small Icon - Fixed width to prevent shrinking */}
          <Layers size={18} className="text-slate-400 mt-1 flex-shrink-0" strokeWidth={1.5} />
          <p
            className="text-[13px] leading-snug text-slate-500 font-medium"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    );
  }

  // Large version for case studies
  return (
    <section className="mb-12 w-full">
      <div className="bg-slate-100 p-4 md:p-6 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6">
        {/* Large Icon - Styled to match the light, airy text weight */}
        <Layers 
          size={32} 
          className="text-slate-300 mt-1 md:mt-2 flex-shrink-0" 
          strokeWidth={1.2} 
        />
        <p
          className="font-sans text-xl text-slate-800 leading-normal font-normal"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
};

export default CalloutBox;
