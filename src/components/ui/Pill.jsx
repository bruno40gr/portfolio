import React from "react";

const Pill = ({ label, theme = "bg-white text-neutral-800 border-neutral-200", size = "sm", icon: Icon = null, className = "" }) => {
  const sizes = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-base"
  };

  return (
    <span
      className={[
        "inline-flex items-center rounded-md border font-semibold shadow-sm transition-colors gap-1.5",
        theme,
        sizes[size] || sizes.sm,
        className
      ].join(" ")}
    >
      {Icon && <Icon size={13} aria-hidden="true" />}
      {label}
    </span>
  );
};

export default Pill;
