import React from "react";
import { Maximize2 } from "lucide-react";
import MediaPreviewFrame from "./MediaPreviewFrame";

const ImageThumbnail = ({
  src,
  alt,
  onClick,
  isPresentation = false,
  preserveAspectRatio = true,
  hoverScaleClass,
}) => {
  return (
    <MediaPreviewFrame
      onClick={onClick}
      className={isPresentation ? "transition-transform duration-300 hover:-translate-y-1" : ""}
      ariaLabel="Expand image"
      bgClassName={isPresentation ? "bg-neutral-50" : "bg-neutral-100"}
      aspectRatio={!isPresentation && !preserveAspectRatio ? "4 / 3" : undefined}
    >
      {(defaultHoverScale) => (
        <>
          <img
            src={src}
            alt={alt || "Process visual"}
            loading="lazy"
            className={`w-full transition-transform duration-500 ease-in-out ${
              isPresentation
                ? "h-auto object-contain max-h-[600px]"
                : preserveAspectRatio
                  ? `h-auto object-contain ${hoverScaleClass || defaultHoverScale}`
                  : `h-full object-cover ${hoverScaleClass || defaultHoverScale}`
            }`}
          />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="media-card-action">
              <Maximize2 size={20} aria-hidden="true" />
            </div>
          </div>
        </>
      )}
    </MediaPreviewFrame>
  );
};

export default ImageThumbnail;