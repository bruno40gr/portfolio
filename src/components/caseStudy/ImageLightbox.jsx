import React from "react";
import { useEffect, useState } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

const ImageLightbox = ({ isOpen, onClose, src, alt, caption }) => {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        window.removeEventListener("keydown", handleEsc);
        document.body.style.overflow = "auto";
      };
    }
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => {
    const newScale = Math.max(scale - 0.5, 1);
    setScale(newScale);
    if (newScale === 1) setOffset({ x: 0, y: 0 });
  };
  const handleReset = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const handleDoubleClick = () => {
    if (scale > 1) {
      setScale(1);
      setOffset({ x: 0, y: 0 });
    } else {
      setScale(2);
    }
  };

  const handleWheel = (e) => {
    if (e.deltaY < 0) setScale((prev) => Math.min(prev + 0.1, 4));
    else
      setScale((prev) => {
        const next = Math.max(prev - 0.1, 1);
        if (next === 1) setOffset({ x: 0, y: 0 });
        return next;
      });
  };

  const handleMouseDown = (e) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setStartPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setOffset({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      className="fixed inset-0 z-[500] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300"
      onClick={onClose}
    >
      <div className="absolute top-6 right-6 flex items-center gap-4 z-[510]">
        <div
          className="flex bg-white/10 rounded-full border border-white/20 p-1 backdrop-blur-md"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={handleZoomOut} className="p-2 text-white hover:bg-white/10 rounded-full transition-colors">
            <ZoomOut size={20} />
          </button>
          <button onClick={handleZoomIn} className="p-2 text-white hover:bg-white/10 rounded-full transition-colors">
            <ZoomIn size={20} />
          </button>
          <button onClick={handleReset} className="p-2 text-white hover:bg-white/10 rounded-full transition-colors">
            <RotateCcw size={18} />
          </button>
        </div>
        <button onClick={onClose} className="p-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-colors shadow-2xl">
          <X size={24} />
        </button>
      </div>

      <div
        className="w-full h-full flex items-center justify-center overflow-hidden cursor-move"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          onDoubleClick={handleDoubleClick}
          className={`max-w-[90%] max-h-[85vh] object-contain transition-transform duration-200 ease-out select-none shadow-2xl pointer-events-auto ${
            isDragging ? "transition-none" : ""
          }`}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in"
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
        <div className="max-w-4xl mx-auto flex flex-col gap-1 items-center">
          <span className="text-white/60 text-[11px] font-semibold tracking-wide">Image View</span>
          <p className="text-white text-sm md:text-base text-center leading-relaxed max-w-2xl drop-shadow-sm">{caption}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
