import React, { useState, useEffect } from "react";

const AnimatedThumbnail = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0000_CAFR_lvfrh1.png", colors: ["#ff5f45", "#ff9a8b"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0001_BRPOR_zajgs8.png", colors: ["#dfa84a", "#f3d4a0"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042483/mobile-echoshow-_0002_USES_yj4oji.png", colors: ["#1e4e71", "#4682b4"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0003_USEN_zpplaz.png", colors: ["#4a341e", "#8b6e4d"] }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out"
         style={{ background: `linear-gradient(160deg, ${slides[currentSlide].colors[0]}, ${slides[currentSlide].colors[1]})` }}>
      {slides.map((slide, index) => (
        <img key={index} src={slide.img} alt=""
             className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000
             ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} />
      ))}
    </div>
  );
};

export default AnimatedThumbnail;