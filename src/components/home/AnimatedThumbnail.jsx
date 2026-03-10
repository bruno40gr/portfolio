import React, { useState, useEffect } from "react";

const THUMBNAIL_DATA = {
  'amazon-image-builder': [
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0000_CAFR_lvfrh1.png", colors: ["#5c3566", "#4a2a55"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0001_BRPOR_zajgs8.png", colors: ["#edeaf6", "#ddd8f0"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042483/mobile-echoshow-_0002_USES_yj4oji.png", colors: ["#1e3d6e", "#162d55"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0003_USEN_zpplaz.png", colors: ["#2a2850", "#231f44"] },
  ],
  'alto-internal-tools': [
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144381/flow_action_card_ktzpav.gif",       colors: ["#eceaf8", "#e2dff4"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144386/AAWB_message-action_nen3sq.gif",   colors: ["#eceaf8", "#e2dff4"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144385/AAWB_-_Cards_jmhdzy.gif",          colors: ["#eceaf8", "#e2dff4"] },
  ],
  'patreon-creator-tools': [
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169709/benefits-config_wpuj3r.gif",      colors: ["#ede8f5", "#ddd5ee"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169684/benefit_categorie_eqwjwd.png",    colors: ["#2d1f44", "#231540"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169704/saved_filters_xgzc9c.gif",        colors: ["#3d2a5a", "#2e1f47"] },
  ],
  'patreon-studio-2': [
    
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772238558/SS3_gzembm.png", colors: ["#2e1f47", "#231f44"] },
  
  ],
  'amazon-inspire-tab': [
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772311186/1A_01_A-1_m8vqcf.png",    colors: ["#1a5fbf", "#1550a8"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772311186/product_tagging_jsevmd.png", colors: ["#1a3f8f", "#132f75"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772311186/1A_01_A-2_jnyfjt.png",    colors: ["#1e2f6e", "#17245a"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772311186/1A_01_A_jycg58.png",      colors: ["#231f55", "#1c1944"] },
  ],
  'amazon-ai-compositor': [
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772662326/firetv-lifestyle_dlyenh.png", colors: ["#1a2a1a", "#0f1f0f"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772662326/firetv-gradient_dfwvl0.png", colors: ["#1a1a2e", "#13102e"] },
    

  ],
  'amazon-asset-manager': [
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772596156/1_xrlcq0.png", colors: ["#1a2d5e", "#131f44"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772596156/2_h3xok9.png", colors: ["#2a2850", "#231f44"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772596156/3_omv1qd.png", colors: ["#1e3d6e", "#162d55"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772596156/4_ngo0ba.png", colors: ["#231f55", "#1c1944"] },
  ],
  'amazon-ai-review-highlights': [
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772333741/aihighlights-stockimage_tfee9p.jpg", colors: ["#1a2d5e", "#131f44"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772333742/aihighlights_banner_b6o4ad.png", colors: ["#2e1f47", "#231f44"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772333751/hero-banner_l8mdrz.webp", colors: ["#1e3d6e", "#162d55"] },
  ],
};

const AnimatedThumbnail = ({ projectId }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = THUMBNAIL_DATA[projectId] || Object.values(THUMBNAIL_DATA);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div
      className="absolute inset-0 w-full h-full transition-colors duration-[1500ms] ease-in-out"
      style={{ background: `linear-gradient(160deg, ${slides[currentSlide].colors}, ${slides[currentSlide].colors})` }}
    >
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.img}
          alt=""
          className={`absolute inset-0 w-full h-full object-contain p-6 md:p-8 transition-transform duration-700 ease-out group-hover:scale-[1.02]
          ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};

export default AnimatedThumbnail;