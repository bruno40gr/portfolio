import React from "react";

const DEFAULT_HOVER_SCALE = "group-hover:scale-[1.01]";

const MediaPreviewFrame = ({
  onClick,
  ariaLabel,
  aspectRatio,
  bgClassName = "bg-neutral-100",
  className = "",
  panelClassName = "",
  children,
}) => {
  const panelStyle = aspectRatio ? { aspectRatio } : undefined;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full text-left media-card-focus rounded-xl ${className}`}
      aria-label={ariaLabel}
    >
      <div className="media-card-shell media-card-shell-hover">
        <div
          className={`relative w-full rounded-lg overflow-hidden flex items-center justify-center ${bgClassName} ${panelClassName}`}
          style={panelStyle}
        >
          {children(DEFAULT_HOVER_SCALE)}
        </div>
      </div>
    </button>
  );
};

export default MediaPreviewFrame;
