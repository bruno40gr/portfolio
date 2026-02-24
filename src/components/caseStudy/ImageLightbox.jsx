import React, { useState, useEffect } from "react";
import { 
  FileText, ChevronLeft, ChevronRight, X, Loader2, Figma
} from "lucide-react";
import { FigmaEmbed } from "../ui/FigmaEmbed";

const ImageLightbox = ({ open, initialIndex, mediaItems, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(false);

  // 1. STRICTOR BODY LOCKING
  useEffect(() => {
    if (open) {
      // Prevent background scrolling
      const originalStyle = window.getComputedStyle(document.body).overflow;
      const originalTouchAction = window.getComputedStyle(document.body).touchAction;
      
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // Prevents pull-to-refresh and bounce
      
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

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextItem();
      if (e.key === 'ArrowLeft') prevItem();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, currentIndex]);

  const activeItem = mediaItems?.[currentIndex];
  
  const nextItem = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };
  
  const prevItem = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  if (!open || !activeItem) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex flex-col bg-[#050505]/98 backdrop-blur-2xl animate-in fade-in duration-300 font-sans text-white select-none overscroll-none"
      style={{ overscrollBehavior: 'contain' }} // Prevent scroll chaining to background
      onClick={onClose}
    >
      {/* Top Bar - More compact on mobile */}
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
          onClick={(e) => { e.stopPropagation(); onClose(); }}
        >
          <X size={18} className="md:w-5 md:h-5" />
        </button>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden">
        
        {/* Left Stage: Media - Height fixed at 60vh on mobile */}
        <div className="h-[60vh] md:h-auto md:flex-1 relative flex items-center justify-between group/nav overflow-hidden bg-black/40 shrink-0 touch-none">
          <button 
            className="absolute left-3 md:left-4 p-3 md:p-4 text-neutral-500 hover:text-white hover:bg-white/5 rounded-full transition-all focus:outline-none z-30 opacity-0 group-hover/nav:opacity-100"
            onClick={prevItem}
          >
            <ChevronLeft size={28} className="md:w-8 md:h-8" strokeWidth={1.5} />
          </button>

          <div 
            className="w-full h-full flex items-center justify-center p-4 md:p-12" 
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading ? (
              <div className="flex flex-col items-center justify-center gap-4">
                 <Loader2 size={32} className="animate-spin text-neutral-600 md:w-10 md:h-10" />
              </div>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                {activeItem.type === 'pdf' ? (
                  <div className="w-full h-full max-w-5xl bg-[#1E1E1E] border border-white/10 rounded-lg shadow-2xl overflow-hidden p-1 animate-in zoom-in-95 duration-300">
                    <iframe 
                      src={activeItem.src} 
                      className="w-full h-full bg-white rounded-sm" 
                      title="PDF Preview"
                    />
                  </div>
                ) : activeItem.type === 'video' ? (
                  /* Fixed: aspect-video container for 16:9 ratio */
                  <div className="w-full max-w-5xl aspect-video bg-black border border-white/10 rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                    <iframe
                      src={activeItem.src}
                      title={activeItem.title || "Video content"}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                ) : activeItem.type === 'figma' ? (
                  <div className="w-full max-w-5xl bg-black border border-white/10 rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                    <FigmaEmbed src={activeItem.src} title={activeItem.title} scaling="contain" />
                  </div>
                ) : (
                  <img 
                    src={activeItem.src} 
                    alt={activeItem.captionShort} 
                    className="max-h-full max-w-full object-contain drop-shadow-[0_15px_45px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-300 pointer-events-none"
                  />
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

        {/* Sidebar / Caption Area */}
        <div 
          className="flex-1 md:flex-none md:w-[25%] md:min-w-[320px] bg-[#0a0a0a] border-t md:border-t-0 md:border-l border-white/10 flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Static Header - captionShort in serif font, increased size for desktop */}
          <div className="p-5 md:p-8 pb-3 md:pb-6 shrink-0 space-y-2.5">
            <h2 className="text-white text-lg md:text-2xl font-semibold font-serif leading-tight flex items-start gap-3">
              {activeItem.type === 'pdf' && <FileText size={18} className="mt-1 text-blue-400 shrink-0 md:w-5 md:h-5" />}
              {activeItem.type === 'figma' && <Figma size={18} className="mt-1 text-pink-500 shrink-0 md:w-5 md:h-5" />}
              {activeItem.captionShort || activeItem.title}
            </h2>
            <div className="h-px w-6 md:w-10 bg-neutral-700" />
          </div>
          
          {/* Scrollable Body - verbose text increased to 16px (text-base) on desktop */}
          <div 
            className="flex-1 overflow-y-auto px-5 md:px-8 pb-6 md:pb-8 custom-scrollbar"
            style={{ overscrollBehavior: 'contain' }} 
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