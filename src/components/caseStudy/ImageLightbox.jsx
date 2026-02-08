import React, { useState, useEffect } from "react";
import { 
  FileText, Maximize2, ChevronLeft, ChevronRight, X, Loader2, Download, ArrowUpRight
} from "lucide-react";

const ImageLightbox = ({ open, initialIndex, mediaItems, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (open) setCurrentIndex(initialIndex);
  }, [open, initialIndex]);

  useEffect(() => {
    if (open) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 600);
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

  const activeItem = mediaItems[currentIndex];
  const nextItem = () => setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  const prevItem = () => setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);

  if (!open || !activeItem) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex flex-col bg-[#050505]/95 backdrop-blur-xl animate-in fade-in duration-200 font-sans"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4 z-10 border-b border-[#333] shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold tracking-widest text-neutral-400">
            {currentIndex + 1} / {mediaItems.length}
          </span>
          <span className="text-neutral-700">|</span>
          <span className="text-xs font-bold tracking-widest uppercase text-neutral-500">
             Assets in this case study
          </span>
        </div>
        
        <div className="flex gap-3">
          <button 
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Main Content Stage */}
      <div className="flex-1 flex items-center justify-between px-2 md:px-6 relative min-h-0 overflow-hidden group/nav">
        
        <button 
          className="p-4 text-neutral-500 hover:text-white hover:bg-white/5 rounded-full transition-all focus:outline-none -ml-2 md:ml-0 z-20"
          onClick={(e) => { e.stopPropagation(); prevItem(); }}
        >
          <ChevronLeft size={40} strokeWidth={1.5} />
        </button>

        <div 
          className="relative flex-1 h-full mx-2 md:mx-8 flex items-center justify-center overflow-hidden py-4" 
          onClick={(e) => e.stopPropagation()}
        >
          {isLoading ? (
            <div className="flex flex-col items-center justify-center gap-4">
               <Loader2 size={48} className="animate-spin text-[var(--neon-green)]" />
            </div>
          ) : (
            activeItem.type === 'pdf' ? (
              <div className="w-full h-full max-w-5xl bg-[#1E1E1E] border border-[#333] rounded-lg shadow-2xl overflow-hidden p-1">
                <iframe 
                  src={activeItem.src} 
                  className="w-full h-full bg-white rounded" 
                  title="PDF Preview"
                />
              </div>
            ) : activeItem.type === 'video' ? (
              <div className="w-full h-full max-w-5xl bg-[#1E1E1E] border border-[#333] rounded-lg shadow-2xl overflow-hidden p-1">
                <iframe
                  src={activeItem.src}
                  title={activeItem.title || "Embedded video"}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <img 
                src={activeItem.src} 
                alt={activeItem.title} 
                className="max-h-full max-w-full object-contain drop-shadow-2xl animate-in zoom-in-95 duration-300"
              />
            )
          )}
        </div>

        <button 
          className="p-4 text-neutral-500 hover:text-white hover:bg-white/5 rounded-full transition-all focus:outline-none -mr-2 md:mr-0 z-20"
          onClick={(e) => { e.stopPropagation(); nextItem(); }}
        >
          <ChevronRight size={40} strokeWidth={1.5} />
        </button>
      </div>

      {/* Bottom Caption Panel */}
      <div 
        className="w-full bg-[#0a0a0a] border-t border-[#333] p-6 md:px-12 shrink-0 max-h-[35vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-lg font-bold mb-2 flex items-center gap-3 font-sans">
            {activeItem.type === 'pdf' && <FileText size={18} className="text-[var(--neon-green)]" />}
            {activeItem.title}
          </h2>
          
          <div className="space-y-2 font-sans">
            {/* Caption Short */}
            <p className="text-[#A8C7FA] text-sm md:text-[15px] font-semibold">
              {activeItem.captionShort}
            </p>
            {/* Caption Paragraph */}
            <p className="text-neutral-400 text-sm md:text-[15px] leading-relaxed max-w-prose">
              {activeItem.captionParagraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;