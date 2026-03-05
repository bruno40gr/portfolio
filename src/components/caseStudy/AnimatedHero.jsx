import React, { useState, useEffect, useRef } from "react";

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

const HERO_DATA = {
  'jas-image-builder': {
    caption: "Echo Show 8 launch campaign across 4 markets, built at once. September 2025.",
    layout: {
      containerHeight: "h-[48vh] md:h-[66vh]",
      containerWidth: "w-[260px] md:w-[420px]",
    },
    slides: [
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0003_USEN_zpplaz.png",
        colors: ["#2a2850", "#231f44"],
        market: "US, English",
        flag: "🇺🇸",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0000_CAFR_lvfrh1.png",
        colors: ["#5c3566", "#4a2a55"],
        market: "Canada, French",
        flag: "🇨🇦",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0001_BRPOR_zajgs8.png",
        colors: ["#edeaf6", "#ddd8f0"],
        market: "Brazil, Portuguese",
        flag: "🇧🇷",
        theme: "light"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042483/mobile-echoshow-_0002_USES_yj4oji.png",
        colors: ["#1e3d6e", "#162d55"],
        market: "US, Spanish",
        flag: "🇺🇸",
        theme: "dark"
      }
    ]
  },

  'jas-asset-manager': {
    caption: "Centralized asset browser for Amazon Devices.",
    layout: {
      containerHeight: "h-[44vh] md:h-[60vh]",
      containerWidth: "w-[90%] md:w-[780px]",
    },
    slides: [
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772596156/1_xrlcq0.png",
        colors: ["#1a2d5e", "#131f44"],
        market: "Asset Browser",
        flag: "🗂️",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772596156/2_h3xok9.png",
        colors: ["#2a2850", "#231f44"],
        market: "Filtering options",
        flag: "🔍",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772596156/3_omv1qd.png",
        colors: ["#1e3d6e", "#162d55"],
        market: "Bulk actions",
        flag: "🖼️",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772596156/4_ngo0ba.png",
        colors: ["#231f55", "#1c1944"],
        market: "QA Workflow and Detail panel",
        flag: "✅",
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
        colors: ["#eceaf8", "#e2dff4"],
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
        colors: ["#ede8f5", "#ddd5ee"],
        market: "Benefit Configuration",
        flag: "⚙️",
        theme: "light"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169684/benefit_categorie_eqwjwd.png",
        colors: ["#2d1f44", "#231540"],
        market: "Benefit Categories",
        flag: "🎨",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169704/saved_filters_xgzc9c.gif",
        colors: ["#3d2a5a", "#2e1f47"],
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
        colors: ["#f5f4fc", "#ebe8f8"],
        market: "Creator Profiles",
        flag: "👤",
        theme: "light"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772238558/SS3_gzembm.png",
        colors: ["#2e1f47", "#231f44"],
        market: "Content & Interactive Feeds",
        flag: "📱",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772238558/SS2_mj5jli.png",
        colors: ["#1a2d5e", "#131f44"],
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
        colors: ["#1a5fbf", "#1550a8"],
        market: "Shoppable Feeds",
        flag: "📱",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772311186/product_tagging_jsevmd.png",
        colors: ["#1a3f8f", "#132f75"],
        market: "Creator Tooling",
        flag: "🛠️",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772311186/1A_01_A-2_jnyfjt.png",
        colors: ["#1e2f6e", "#17245a"],
        market: "Ecosystem Compatibility",
        flag: "🔗",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772311186/1A_01_A_jycg58.png",
        colors: ["#231f55", "#1c1944"],
        market: "ML-Driven Ranking",
        flag: "🤖",
        theme: "dark"
      }
    ]
  },

  'jas-metadata-studio': {
    caption: "AI-powered metadata extraction for global compliance. Amazon Devices, 2025.",
    layout: {
      containerHeight: "h-[48vh] md:h-[66vh]",
      containerWidth: "w-[90%] md:w-[720px]",
    },
    slides: [
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772414394/Background_metadata-wide_vbd1rh.png",
        colors: ["#1e2f6e", "#17245a"],
        market: "Metadata Studio",
        flag: "🤖",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772414317/Background_metadata-thumbnail_pgfkp6.png",
        colors: ["#f5f4fc", "#ebe8f8"],
        market: "AI Feasibility Testing",
        flag: "🧪",
        theme: "light"
      }
    ]
  },
  'jas-ai-generator': {
    caption: "Fire TV campaign assets. Both built in Image Builder — one drops the device onto a gradient, one places it in a real scene. The difference is what this tool makes possible.",
    layout: {
      containerHeight: "h-[48vh] md:h-[60vh]",
      containerWidth: "w-[260px] md:w-[420px]",
    },
    slides: [
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772662326/firetv-lifestyle_dlyenh.png",
        colors: ["#1a2a1a", "#0f1f0f"],
        market: "Device placed inside a realistic scene",
        flag: "",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772662326/firetv-gradient_dfwvl0.png",
        colors: ["#1a1a2e", "#13102e"],
        market: "Device on a gradient",
        flag: "",
        theme: "dark"
      },
      
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
      className="w-full overflow-hidden relative transition-colors duration-[1500ms] ease-in-out touch-pan-y"
      style={{
        backgroundColor: slides[currentSlide]?.colors[0] || "#231f44",
        paddingTop: "calc(var(--header-h) + clamp(2rem, 5vw, 4rem))",
        paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
        minHeight: "100svh",
        boxSizing: "border-box",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <GrainOverlay opacity={isDarkTheme ? 0.30 : 0.15} />

      {projectId === 'jas-ai-generator' ? (
        /* jas-ai-generator: vertical stack — image on top, caption below */
        <div
          className="flex flex-col items-start gap-4 px-6 md:px-12 w-full max-w-6xl mx-auto relative z-10"
          style={{ opacity: scale > 1.2 ? 0 : 1, transition: "opacity 0.3s" }}
        >
          <div
            className="w-full"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              zIndex: scale > 1 ? 50 : 10,
              transition: isZooming ? 'none' : 'transform 0.3s ease-out'
            }}
          >
            <div className={`relative ${layout.containerHeight} w-full`}>
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.img}
                  alt={slide.market}
                  className={`absolute inset-0 h-full w-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.35)] rounded-2xl transition-all duration-[1200ms]
                  ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                />
              ))}
            </div>
          </div>

          <div className={`w-full flex flex-col items-start text-left transition-colors duration-300 ${textColorClass}`}>
            <div className="relative w-full mb-2" style={{ minHeight: "1.5rem" }}>
              {slides.map((slide, index) => (
                <span
                  key={index}
                  className={`absolute top-0 left-0 w-full text-base font-semibold tracking-tight transition-opacity duration-[1200ms]
                  ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                  ${isDarkTheme ? 'text-white' : 'text-slate-900'}`}
                >
                  {slide.market}
                </span>
              ))}
            </div>
            <p className={`text-sm leading-relaxed mb-3 ${isDarkTheme ? 'text-white/50' : 'text-slate-900/50'}`}>
              {caption}
            </p>
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
      ) : (
        /* All other projects: horizontal — image left 70%, caption right 30% */
        <div
          className="flex flex-col md:flex-row items-start gap-6 md:gap-10 px-6 md:px-12 w-full max-w-6xl mx-auto relative z-10"
          style={{ opacity: scale > 1.2 ? 0 : 1, transition: "opacity 0.3s" }}
        >
          <div
            className="w-full md:w-[70%] flex-shrink-0"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              zIndex: scale > 1 ? 50 : 10,
              transition: isZooming ? 'none' : 'transform 0.3s ease-out'
            }}
          >
            <div className={`relative ${layout.containerHeight} w-full`}>
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.img}
                  alt={slide.market}
                  className={`absolute inset-0 h-full w-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.35)] rounded-2xl transition-all duration-[1200ms]
                  ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                />
              ))}
            </div>
          </div>

          <div className={`w-full md:w-[30%] flex flex-col items-start text-left pt-2 transition-colors duration-300 ${textColorClass}`}>
            <p className={`text-sm leading-relaxed mb-4 ${isDarkTheme ? 'text-white/50' : 'text-slate-900/50'}`}>
              {caption}
            </p>
            <div className="relative w-full mb-4" style={{ minHeight: "2rem" }}>
              {slides.map((slide, index) => (
                <span
                  key={index}
                  className={`absolute top-0 left-0 w-full text-base font-semibold tracking-tight transition-opacity duration-[1200ms]
                  ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                  ${isDarkTheme ? 'text-white' : 'text-slate-900'}`}
                >
                  {slide.market}
                </span>
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
      )}

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