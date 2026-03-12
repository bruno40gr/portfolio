import React, { useState, useEffect, useRef } from "react";
import "./AnimatedHero.css";

const GrainOverlay = ({ opacity = 0.28 }) => (
  <>
    <svg
      // Made it 110% wide/tall, shifted it back 5%, and added the animate-grain class
      className="absolute -top-[5%] -left-[5%] w-[110%] h-[110%] pointer-events-none animate-grain z-0"
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
  'amazon-image-builder': {
    caption: "Echo Show 8 launch campaign across 4 markets, built at once. September 2025.",
    layout: {
      containerHeight: "h-[48vh] md:h-[66vh]",
      containerWidth: "w-[260px] md:w-[420px]",
      containerGap: "gap-6 md:gap-12",
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

  'amazon-asset-manager': {
    caption: "Centralized asset browser for Amazon Devices.",
    layout: {
      containerHeight: "h-[28vh] md:h-[60vh]",
      containerWidth: "w-[90%] md:w-[780px]",
      containerGap: "gap-2 md:gap-16",
    },
    slides: [
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1773094784/Asset_library_1_afidgt.png",
        colors: ["#1a2d5e", "#131f44"],
        market: "Asset Browser",
        flag: "🗂️",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1773094921/Asset_library_2_wpmrih.png",
        colors: ["#2a2850", "#231f44"],
        market: "Filtering options",
        flag: "🔍",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1773094785/Asset_library_3_dlyfq2.png",
        colors: ["#1e3d6e", "#162d55"],
        market: "Bulk actions",
        flag: "🖼️",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1773094785/Asset_library_4_vrol06.png",
        colors: ["#231f55", "#1c1944"],
        market: "QA Workflow and Detail panel",
        flag: "✅",
        theme: "dark"
      }
    ]
  },

  'alto-internal-tools': {
    caption: "Internal pharmacy ops tooling. Action-first patterns for fulfillment teams. 2021.",
    layout: {
      containerHeight: "h-[48vh] md:h-[66vh]",
      containerWidth: "w-[320px] md:w-[640px]",
      containerGap: "gap-6 md:gap-16",
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
      containerHeight: "h-[28vh] md:h-[66vh]",
      containerWidth: "w-[90%] md:w-[720px]",
      containerGap: "gap-2 md:gap-16",
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

  'patreon-studio-2': {
    caption: "Patreon's unified design system and creator profile redesign. 2021.",
    layout: {
      containerHeight: "h-[48vh] md:h-[66vh]",
      containerWidth: "w-[90%] md:w-[720px]",
      containerGap: "gap-6 md:gap-16",
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

  'patreon-pledge-streak': {
    caption: "Data visualization pattern that turned months of billing history into a readable streak.",
    layout: {
      containerHeight: "h-[30vh] md:h-[50vh]",
      containerWidth: "w-[90vw] md:w-[720px]",
      containerGap: "gap-4 md:gap-8",
    },
    slides: [
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772474139/pledge-streak-ui_wvufrl.png",
        colors: ["#3d2a5a", "#2e1f47"],
        market: "Integrated Streak UI",
        flag: "🌟",
        theme: "dark"
      },
      {
        img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772474131/closer_look_vfpqgs.png",
        colors: ["#2d1f44", "#231540"],
        market: "Patent-Pending Interface",
        flag: "📜",
        theme: "dark"
      }
    ]
  },

  'amazon-inspire-tab': {
    caption: "Inspire shoppable feed adapted for Smart Home devices. Amazon app, 2023.",
    layout: {
      containerHeight: "h-[48vh] md:h-[66vh]",
      containerWidth: "w-[80%] md:w-[340px]",
      containerGap: "gap-6 md:gap-12",
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

  'amazon-metadata-studio': {
    caption: "AI-powered metadata extraction for global compliance. Amazon Devices, 2025.",
    layout: {
      containerHeight: "h-[48vh] md:h-[66vh]",
      containerWidth: "w-[70vw]",
      containerGap: "gap-6 md:gap-16",
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
  'amazon-ai-compositor': {
    caption: "This Fire TV campaign built in Image Builder compares a standard gradient background against an AI-generated lifestyle scene. By placing the device in a realistic setting, the campaign aims for the 40% higher CTR typically seen with lifestyle imagery over basic product shots.",
    layout: {
      containerHeight: "h-[40vh] md:h-[70vh]",
      containerWidth: "w-[90vw] md:w-[75vw]",
      containerGap: "gap-4 md:gap-8",
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

  const projectData = HERO_DATA[projectId] || HERO_DATA['amazon-image-builder'];
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
      // Removed transitions entirely for instant cut
      className="w-full overflow-hidden relative touch-pan-y flex items-center justify-center"
      style={{
        backgroundColor: slides[currentSlide]?.colors[0] || "#231f44",
        paddingTop: "clamp(5rem, 10vw, 8rem)",
        paddingBottom: "clamp(4rem, 8vw, 6rem)",
        minHeight: "80vh",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <GrainOverlay opacity={isDarkTheme ? 0.30 : 0.15} />

      <div
        className={`flex flex-col md:flex-row items-center justify-center ${layout.containerGap || 'gap-6 md:gap-12'} px-6 md:px-8 w-full max-w-8xl relative z-10`}
        style={{ opacity: scale > 1.2 ? 0 : 1, transition: "opacity 0.3s" }}
      >
        <div
          className={`relative ${layout.containerHeight} ${layout.containerWidth} flex items-center justify-center flex-shrink-0`}
          style={{
            transform: `scale(${scale})`,
            zIndex: scale > 1 ? 50 : 10,
            transition: isZooming ? 'none' : 'transform 0.3s ease-out'
          }}
        >
          <img
            key={currentSlide}
            src={slides[currentSlide].img}
            alt={slides[currentSlide].market}
            className="absolute h-full w-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.35)] rounded-xl tv-zap-active"
          />
        </div>

        {/* Removed text color transition */}
        <div className={`flex flex-col items-center md:items-start text-center md:text-left flex-shrink-0 ${layout.textMaxWidth || 'max-w-md'} ${textColorClass} w-full md:w-auto`}>
          <p className={`meta-label mb-2 leading-snug ${isDarkTheme ? '!text-white/50' : '!text-slate-900/50'} text-balance`}>
            {caption}
          </p>

          <div className="relative h-7 mb-4 w-full">
            <span
              key={currentSlide}
              className={`block whitespace-normal text-lg md:text-xl font-semibold tracking-tight w-full
              ${isDarkTheme ? 'text-white' : 'text-slate-900'}`}
            >
              {slides[currentSlide]?.market}
            </span>
          </div>

          <nav className="flex items-center gap-2.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300
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