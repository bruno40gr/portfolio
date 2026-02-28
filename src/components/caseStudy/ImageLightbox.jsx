import React, { useState, useEffect } from "react";
import { FileText, ChevronLeft, ChevronRight, X, Loader2, Figma } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// ✅ Ensure this points to the corrected FigmaEmbed file
// If your fixed FigmaEmbed is in ../ui keep it; if it's in the same folder, use "./FigmaEmbed"
import { FigmaEmbed } from "../ui/FigmaEmbed";

const ImageLightbox = ({ open, initialIndex, mediaItems, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (open) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      const originalTouchAction = window.getComputedStyle(document.body).touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      return () => {
        document.body.style.overflow = originalStyle;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [open]);

  useEffect(() => {
    if (open) setCurrentIndex(initialIndex);
  }, [open, initialIndex]);

  useEffect(() => {
    if (open) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 400);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, open]);

  const nextItem = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevItem = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextItem();
      if (e.key === "ArrowLeft") prevItem();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const activeItem = mediaItems?.[currentIndex];
  if (!open || !activeItem) return null;

  const isFigma = activeItem.type === "figma";

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-[#050505]/98 backdrop-blur-2xl animate-in fade-in duration-300 font-sans text-white select-none overscroll-none"
      style={{ overscrollBehavior: "contain" }}
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="flex justify-between items-center px-4 py-2.5 md:px-6 md:py-4 z-20 border-b border-white/10 shrink-0 bg-[#050505]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-4">
          <span className="text-[10px] md:text-[11px] font-medium tracking-widest text-neutral-500 tabular-nums">
            {currentIndex + 1} / {mediaItems.length}
          </span>
          <div className="w-[1px] h-3 bg-neutral-800" />
          <span className="text-[14px] md:text-[16px] text-neutral-400 font-medium truncate max-w-[180px] md:max-w-none">
            {activeItem.processStepTitle || "Gallery"}
          </span>
        </div>

        <button
          className="p-1.5 md:p-2 text-neutral-500 hover:text-white hover:bg-white/10 rounded-full transition-all"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <X size={18} className="md:w-5 md:h-5" />
        </button>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden">
        {/* Left Stage */}
        <div className="h-[60vh] md:h-auto md:flex-1 relative flex items-center justify-between group/nav bg-black/40 shrink-0 touch-none">
          <button
            className="absolute left-3 md:left-4 p-3 md:p-4 text-neutral-500 hover:text-white hover:bg-white/5 rounded-full transition-all focus:outline-none z-30 opacity-0 group-hover/nav:opacity-100"
            onClick={prevItem}
          >
            <ChevronLeft size={28} className="md:w-8 md:h-8" strokeWidth={1.5} />
          </button>

          <div
            className={`w-full h-full flex items-center justify-center ${
              isFigma ? "p-2 md:p-6" : "p-4 md:p-12"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading ? (
              <div className="flex flex-col items-center justify-center gap-4">
                <Loader2 size={32} className="animate-spin text-neutral-600 md:w-10 md:h-10" />
              </div>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                {activeItem.type === "pdf" ? (
                  <div className="w-full h-full max-w-5xl bg-[#1E1E1E] border border-white/10 rounded-lg shadow-2xl overflow-hidden p-1 animate-in zoom-in-95 duration-300">
                    <iframe
                      src={activeItem.src}
                      className="w-full h-full bg-white rounded-sm"
                      title="PDF Preview"
                    />
                  </div>
                ) : activeItem.type === "video" ? (
                  <div className="w-full max-w-5xl aspect-video bg-black border border-white/10 rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                    <iframe
                      src={
                        activeItem.src.includes("loom.com/share/")
                          ? activeItem.src.replace("loom.com/share/", "loom.com/embed/")
                          : activeItem.src
                      }
                      title={activeItem.title || "Video content"}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                ) : activeItem.type === "figma" ? (
                  <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                    {/* ✅ Let FigmaEmbed normalize/wrap every time */}
                    <FigmaEmbed src={activeItem.src} title={activeItem.title} scaling="contain" />
                  </div>
                ) : (
                  <TransformWrapper
                    limitToBounds={false}
                    minScale={0.5}
                    maxScale={8}
                    centerOnInit
                    doubleClick={{ mode: "zoomIn", step: 1.5 }}
                  >
                    <TransformComponent
                      wrapperStyle={{ width: "100%", height: "100%" }}
                      contentStyle={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={activeItem.src}
                        alt={activeItem.captionShort}
                        className="max-h-full max-w-full object-contain drop-shadow-[0_15px_45px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-300"
                      />
                    </TransformComponent>
                  </TransformWrapper>
                )}
              </div>
            )}
          </div>

          <button
            className="absolute right-3 md:right-4 p-3 md:p-4 text-neutral-500 hover:text-white hover:bg-white/5 rounded-full transition-all focus:outline-none z-30 opacity-0 group-hover/nav:opacity-100"
            onClick={nextItem}
          >
            <ChevronRight size={28} className="md:w-8 md:h-8" strokeWidth={1.5} />
          </button>
        </div>

        {/* Sidebar */}
        <div
          className="flex-1 md:flex-none md:w-[25%] md:min-w-[320px] bg-[#0a0a0a] border-t md:border-t-0 md:border-l border-white/10 flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-5 md:p-8 pb-3 md:pb-6 shrink-0 space-y-2.5">
            <h2 className="text-white text-lg md:text-2xl font-semibold font-serif leading-tight flex items-start gap-3">
              {activeItem.type === "pdf" && (
                <FileText size={18} className="mt-1 text-blue-400 shrink-0 md:w-5 md:h-5" />
              )}
              {activeItem.type === "figma" && (
                <Figma size={18} className="mt-1 text-pink-500 shrink-0 md:w-5 md:h-5" />
              )}
              {activeItem.captionShort || activeItem.title}
            </h2>
            <div className="h-px w-6 md:w-10 bg-neutral-700" />
          </div>

          <div
            className="flex-1 overflow-y-auto px-5 md:px-8 pb-6 md:pb-8 custom-scrollbar"
            style={{ overscrollBehavior: "contain" }}
          >
            {activeItem.captionVerbose && (
              <p className="text-neutral-400 text-[14px] md:text-[16px] font-sans leading-relaxed">
                {activeItem.captionVerbose}
              </p>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default ImageLightbox;