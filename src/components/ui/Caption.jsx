import React from "react";
const Caption = ({ children }) => (
  <p className="type-caption text-left text-neutral-500 text-[16px] font-normal leading-relaxed mt-2 md:mt-3">
    {children}
  </p>
);

export default Caption;
