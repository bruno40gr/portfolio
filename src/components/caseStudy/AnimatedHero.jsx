import React, { useState, useEffect, useRef } from "react";

const AnimatedHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);
  const [isZooming, setIsZooming] = useState(false);
  
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const initialPinchDist = useRef(null);
  const lastScale = useRef(1);

  const slides = [
    { 
      img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0003_USEN_zpplaz.png", 
      colors: ["#4a341e", "#63472d"], 
      market: "US, English",
      flag: "🇺🇸"
    },
    { 
      img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0000_CAFR_lvfrh1.png", 
      colors: ["#ff5f45", "#e0543d"], 
      market: "Canada, French",
      flag: "🇨🇦"
    },
    { 
      img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0001_BRPOR_zajgs8.png", 
      colors: ["#dfa84a", "#c79642"], 
      market: "Brazil, Portuguese",
      flag: "🇧🇷"
    },
    { 
      img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042483/mobile-echoshow-_0002_USES_yj4oji.png", 
      colors: ["#1e4e71", "#1a4463"], 
      market: "US, Spanish",
      flag: "🇺🇸"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setScale(1); // Reset zoom on slide change
    lastScale.current = 1;
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setScale(1); // Reset zoom on slide change
    lastScale.current = 1;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // Only auto-advance if not currently being interacted with (zoomed)
      if (scale === 1) nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, scale]);

  const minSwipeDistance = 50;

  const getDistance = (touches) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      setIsZooming(true);
      initialPinchDist.current = getDistance(e.touches);
    } else {
      touchEndX.current = null;
      touchStartX.current = e.targetTouches[0].clientX;
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && initialPinchDist.current) {
      const currentDist = getDistance(e.touches);
      const newScale = lastScale.current * (currentDist / initialPinchDist.current);
      // Bound the zoom between 1x and 3x
      setScale(Math.min(Math.max(1, newScale), 3));
    } else {
      touchEndX.current = e.targetTouches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    if (isZooming) {
      lastScale.current = scale;
      if (scale <= 1.05) {
        setScale(1);
        lastScale.current = 1;
        setIsZooming(false);
      }
      return;
    }

    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div 
      className="w-full h-[80vh] md:h-[85vh] overflow-hidden relative flex items-center justify-center transition-colors duration-[1500ms] ease-in-out touch-pan-y pt-20 md:pt-0"
      style={{ backgroundColor: slides[currentSlide]?.colors[0] || "#333" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-8 gap-6 md:gap-8 relative pb-10 md:pb-0">
        
        {/* Left: Device Animation Area */}
        <div 
          className="relative h-[45vh] md:h-[65vh] w-[240px] md:w-[380px] flex items-center justify-center flex-shrink-0"
          style={{ 
            transform: `scale(${scale})`,
            zIndex: scale > 1 ? 50 : 10,
            transition: isZooming ? 'none' : 'transform 0.3s ease-out'
          }}
        >
          {slides.map((slide, index) => (
            <img 
              key={index} 
              src={slide.img} 
              alt={slide.market}
              className={`absolute h-full w-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1)
              ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`} 
            />
          ))}
        </div>
        
        {/* Right: Text Column */}
        <div 
          className="text-white text-center md:text-left w-full max-w-xs flex flex-col items-center md:items-start justify-start transition-opacity duration-300"
          style={{ opacity: scale > 1.2 ? 0 : 1 }}
        >
          
          {/* Static Legend (Top Line) */}
          <p className="text-white/60 text-[11px] md:text-sm font-light mb-1 md:mb-2 leading-relaxed tracking-wide">
            Sample of promotional material of <br className="hidden md:block"/>Echo Show 8 - November 2025
          </p>

          {/* Dynamic Marketplace Details */}
          <div className="relative h-8 md:h-12 w-full">
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 flex items-center justify-center md:justify-start gap-2 transition-opacity duration-[1200ms] ease-in-out
                ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <span className="text-lg md:text-2xl leading-none">{slide.flag}</span>
                <span className="text-base md:text-2xl font-semibold tracking-tight leading-none whitespace-nowrap">
                  {slide.market}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Slide Indicators (Bottom) */}
      <nav 
        className="absolute bottom-5 md:bottom-10 flex justify-center items-center z-20 space-x-3 transition-opacity duration-300"
        style={{ opacity: scale > 1.2 ? 0 : 1 }}
      >
        {slides.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'}`} 
          />
        ))}
      </nav>

      {/* Helper for zoom reset on tap if zoomed */}
      {scale > 1 && (
        <button 
          onClick={() => { setScale(1); lastScale.current = 1; setIsZooming(false); }}
          className="absolute top-4 right-4 bg-black/40 text-white text-[10px] px-3 py-1 rounded-full backdrop-blur-sm z-50 animate-fade-in"
        >
          Reset Zoom
        </button>
      )}
    </div>
  );
};


export default AnimatedHero;