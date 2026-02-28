// src/components/caseStudy/FigmaEmbed.jsx
import React from "react";
import { toFigmaEmbedUrl } from "../../utils/figma";

export function FigmaEmbed({
  src,
  title = "Figma prototype",
  scaling = null,
  className = "",
}) {
  const embedSrc = toFigmaEmbedUrl(src, scaling);

  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm ${className}`}
    >
      <div className="relative w-full aspect-video">
        <iframe
          title={title}
          src={embedSrc}
          className="absolute inset-0 h-full w-full"
          style={{ border: "none", background: "white" }}
          allow="fullscreen"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default FigmaEmbed;