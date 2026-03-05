import React from "react";
const Caption = ({ children }) => (
  <p className="type-caption text-left text-slate-400 text-[16px] font-normal leading-relaxed mt-2 md:mt-3 font-serif">
    {children}
  </p>
);

export default Caption;
