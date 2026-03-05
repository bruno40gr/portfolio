import React, { useMemo } from "react";
import { Figma } from "lucide-react";
import { toFigmaEmbedUrl } from "../../utils/figma";

const FigmaThumbnail = ({ src, caption, onClick, coverImage, aspectRatio, isFigJam }) => {
  const embedSrc = useMemo(() => toFigmaEmbedUrl(src), [src]);

  const handleClick = (e) => {
    if (onClick) return onClick(e, { src, embedSrc });
    window.open(src, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      style={{ aspectRatio: aspectRatio || "16/9" }}
      className="group relative block w-full text-left overflow-hidden rounded-lg bg-[#1a1a1a] cursor-pointer"
      aria-label={`Open Figma prototype: ${caption || "prototype"}`}
    >
      {coverImage && (
        <img
          src={coverImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-80 group-hover:scale-[1.02] transition-all duration-700"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 p-8">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
          <Figma size={22} className="text-white" />
        </div>
        <div className="text-center">
          <p className="text-white font-medium text-base">{isFigJam ? "View FigJam Board" : "Interactive Prototype"}</p>
        </div>
      </div>

      <div className="absolute inset-0 rounded-lg ring-1 ring-white/10 group-hover:ring-white/25 transition-all duration-300" />
    </button>
  );
};

export default FigmaThumbnail;