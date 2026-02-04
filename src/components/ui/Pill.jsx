import React from "react";
const Pill = ({ label, theme = "bg-white text-neutral-800 border-neutral-200", size = "sm", className = "" }) => {
  const sizes = {
    sm: "px-3 py-1.5",
    md: "px-3 py-1.5"
  };

  return (
    <span
      className={[
        "inline-flex items-center rounded-full border type-caption leading-none",
        theme === "bg-white text-neutral-800 border-neutral-200" ? "text-neutral-800" : "",
        "font-medium",
        sizes[size] || sizes.sm,
        theme,
        className
      ].join(" ")}
    >
      {label}
    </span>
  );
};

export default Pill;
