import React, { useState, useEffect, useRef } from "react";

// Grain overlay — reusable, same as App.jsx hero but tunable per opacity
const GrainOverlay = ({ opacity = 0.28 }) => (
  <>
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <filter id="hero-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#hero-grain)" />
    </svg>
  </>
);

/*
  All colors harmonized to #231f44 (deep blue-violet, HSL ~244°, 36%, 19%)
  Strategy:
    - Dark slides: analogous indigo/navy/violet family (210–280°)
    - Light slides: pale violet-whites or cool sage (desaturated split-comp)
    - Avoided: warm browns, oranges, pure reds, lime greens
*/
const HERO_DATA = {
  'jas-image-builder': {
    caption: "Echo Show 8 launch campaign across 4 markets. September 2025.",
    layout: {
      containerHeight: "h-[48vh] md:h-[66vh]",
      containerWidth: "w-[260px] md:w-[420px]",
    },
    slides: [
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0003_USEN_zpplaz.png",
        colors: ["#2a2850", "#231f44"],   // deep indigo → deep purple (core)
        market: "US, English",
        flag: "🇺🇸",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0000_CAFR_lvfrh1.png",
        colors: ["#5c3566", "#4a2a55"],   // deep violet-mauve (split-comp, desaturated)
        market: "Canada, French",
        flag: "🇨🇦",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0001_BRPOR_zajgs8.png",
        colors: ["#edeaf6", "#ddd8f0"],   // pale lavender-white (analogous light)
        market: "Brazil, Portuguese",
        flag: "🇧🇷",
        theme: "light"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042483/mobile-echoshow-_0002_USES_yj4oji.png",
        colors: ["#1e3d6e", "#162d55"],   // cool navy-indigo (analogous)
        market: "US, Spanish",
        flag: "🇺🇸",
        theme: "dark"
      }
    ]
  },
  'alto-internal': {
    caption: "Internal pharmacy ops tooling. Action-first patterns for fulfillment teams. 2021.",
    layout: {
      containerHeight: "h-[48vh] md:h-[66vh]",
      containerWidth: "w-[320px] md:w-[640px]",
    },
    slides: [
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144381/flow_action_card_ktzpav.gif",
        colors: ["#eceaf8", "#e2dff4"],   // pale violet-white
        market: "Action Cards",
        flag: "✅",
        theme: "light"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144386/AAWB_message-action_nen3sq.gif",
        colors: ["#eceaf8", "#e2dff4"],
        market: "Message to Action",
        flag: "💬",
        theme: "light"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144385/AAWB_-_Cards_jmhdzy.gif",
        colors: ["#eceaf8", "#e2dff4"],
        market: "Action Card System",
        flag: "🃏",
        theme: "light"
      }
    ]
  },
  'patreon-creator-tools': {
    caption: "Creator-facing membership tools. Benefit management and audience filtering. 2020–2021.",
    layout: {
      containerHeight: "h-[48vh] md:h-[66vh]",
      containerWidth: "w-[90%] md:w-[720px]",
    },
    slides: [
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169709/benefits-config_wpuj3r.gif",
        colors: ["#ede8f5", "#ddd5ee"],   // pale violet (analogous light)
        market: "Benefit Configuration",
        flag: "⚙️",
        theme: "light"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169684/benefit_categorie_eqwjwd.png",
        colors: ["#2d1f44", "#231540"],   // dark violet (darker sibling of deep-purple)
        market: "Benefit Categories",
        flag: "🎨",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169704/saved_filters_xgzc9c.gif",
        colors: ["#3d2a5a", "#2e1f47"],   // deep plum-violet
        market: "Smart Filters",
        flag: "🔍",
        theme: "dark"
      }
    ]
  },
  'patreon-studio2.0': {
    caption: "Patreon's unified design system and creator profile redesign. 2021.",
    layout: {
      containerHeight: "h-[48vh] md:h-[66vh]",
      containerWidth: "w-[90%] md:w-[720px]",
    },
    slides: [
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772238558/SS1_wbi5xq.png",
        colors: ["#f5f4fc", "#ebe8f8"],   // cool near-white with violet tint
        market: "Creator Profiles",
        flag: "👤",
        theme: "light"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772238558/SS3_gzembm.png",
        colors: ["#2e1f47", "#231f44"],   // deep plum → deep purple
        market: "Content & Interactive Feeds",
        flag: "📱",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772238558/SS2_mj5jli.png",
        colors: ["#1a2d5e", "#131f44"],   // deep blue-indigo
        market: "Creator Tools UI",
        flag: "🛠️",
        theme: "dark"
      }
    ]
  },
  'amazon-core-inspire-tab': {
    caption: "Inspire shoppable feed adapted for Smart Home devices. Amazon app, 2023.",
    layout: {
      containerHeight: "h-[48vh] md:h-[66vh]",
      containerWidth: "w-[80%] md:w-[340px]",
    },
    slides: [
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772311186/1A_01_A-1_m8vqcf.png",
        colors: ["#1a5fbf", "#1550a8"],   // vivid blue (analogous, ~225°)
        market: "Shoppable Feeds",
        flag: "📱",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772311186/product_tagging_jsevmd.png",
        colors: ["#1a3f8f", "#132f75"],   // deeper indigo-blue
        market: "Creator Tooling",
        flag: "🛠️",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772311186/1A_01_A-2_jnyfjt.png",
        colors: ["#1e2f6e", "#17245a"],   // navy-indigo
        market: "Ecosystem Compatibility",
        flag: "🔗",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772311186/1A_01_A_jycg58.png",
        colors: ["#231f55", "#1c1944"],   // deepest violet-navy, close to deep-purple
        market: "ML-Driven Ranking",
        flag: "🤖",
        theme: "dark"
      }
    ]
  }
};

const AnimatedHero = ({ projectId }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);
  const [isZooming, setIsZooming] = useState(false);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const initialPinchDist = useRef(null);
  const lastScale = useRef(1);

  const projectData = HERO_DATA[projectId] || HERO_DATA['jas-image-builder'];
  const { slides, layout, caption } = projectData;

  const isDarkTheme = slides[currentSlide]?.theme === 'dark';
  const textColorClass = isDarkTheme ? "text-white" : "text-slate-900";
  const subTextColorClass = isDarkTheme ? "text-white/60" : "text-slate-900/60";
  const dotActiveClass = isDarkTheme ? "bg-white" : "bg-slate-900";
  const dotInactiveClass = isDarkTheme ? "bg-white/30 hover:bg-white/50" : "bg-slate-900/20 hover:bg-slate-900/40";

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setScale(1);
    lastScale.current = 1;
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setScale(1);
    lastScale.current = 1;
  };

  useEffect(() => {
    const timer = setInterval(() => {
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
    if (distance > minSwipeDistance) nextSlide();
    else if (distance < -minSwipeDistance) prevSlide();
  };

  return (
    <div
      className="w-full overflow-hidden relative transition-colors duration-[1500ms] ease-in-out touch-pan-y flex items-center justify-center"
      style={{
        backgroundColor: slides[currentSlide]?.colors[0] || "#231f44",
        paddingTop: "clamp(5rem, 10vw, 8rem)",
        paddingBottom: "clamp(4rem, 8vw, 6rem)",
        minHeight: "100vh",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Grain texture — same filter as hero, tuned per theme */}
      <GrainOverlay opacity={isDarkTheme ? 0.30 : 0.15} />

      {/* Side-by-side: image + text */}
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-6 md:px-12 w-full max-w-5xl relative z-10"
        style={{ opacity: scale > 1.2 ? 0 : 1, transition: "opacity 0.3s" }}
      >
        {/* LEFT — Image */}
        <div
          className={`relative ${layout.containerHeight} ${layout.containerWidth} flex items-center justify-center flex-shrink-0`}
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
              className={`absolute h-full w-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.35)] rounded-xl transition-all duration-[1200ms]
              ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            />
          ))}
        </div>

        {/* RIGHT — Text + dots */}
        <div className={`flex flex-col items-center md:items-start text-center md:text-left flex-shrink-0 transition-colors duration-300 ${textColorClass}`}>
          <p className={`meta-label mb-3 leading-snug ${isDarkTheme ? '!text-white/50' : '!text-slate-900/50'}`}>
            {caption}
          </p>

          <div className="relative h-9 md:h-11 w-[220px] md:w-[260px] mb-5">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center md:justify-start gap-2 transition-opacity duration-[1200ms] ease-in-out
                ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <span className="text-xl md:text-2xl leading-none">{slide.flag}</span>
                <span className="text-xl md:text-2xl font-semibold tracking-tight leading-none whitespace-nowrap">
                  {slide.market}
                </span>
              </div>
            ))}
          </div>

          <nav className="flex items-center gap-2.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-500
                  ${index === currentSlide ? `${dotActiveClass} scale-125` : dotInactiveClass}`}
              />
            ))}
          </nav>
        </div>
      </div>

      {scale > 1 && (
        <button
          onClick={() => { setScale(1); lastScale.current = 1; setIsZooming(false); }}
          className="absolute top-4 right-4 bg-black/40 text-white text-[10px] px-3 py-1 rounded-full backdrop-blur-sm z-50"
        >
          Reset Zoom
        </button>
      )}
    </div>
  );
};

export default AnimatedHero;