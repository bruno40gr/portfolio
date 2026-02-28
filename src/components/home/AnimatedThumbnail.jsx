import React, { useState, useEffect } from "react";

const THUMBNAIL_DATA = {
  'jas-image-builder': [
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0000_CAFR_lvfrh1.png", colors: ["#ff5f45", "#ff9a8b"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0001_BRPOR_zajgs8.png", colors: ["#dfa84a", "#f3d4a0"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042483/mobile-echoshow-_0002_USES_yj4oji.png", colors: ["#1e4e71", "#4682b4"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0003_USEN_zpplaz.png", colors: ["#4a341e", "#8b6e4d"] }
  ],
  'alto-internal': [
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144381/flow_action_card_ktzpav.gif", colors: ["#EAF6BA", "#D8E6A9"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144386/AAWB_message-action_nen3sq.gif", colors: ["#EAF6BA", "#D8E6A9"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144385/AAWB_-_Cards_jmhdzy.gif", colors: ["#EAF6BA", "#D8E6A9"] },
  ],
  'patreon-creator-tools': [
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169709/benefits-config_wpuj3r.gif", colors: ["#FF424D", "#052D49"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169684/benefit_categorie_eqwjwd.png", colors: ["#052D49", "#FF424D"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169704/saved_filters_xgzc9c.gif", colors: ["#FF424D", "#052D49"] },
  ],
  'patreon-studio2.0': [
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772238558/SS1_wbi5xq.png", colors: ["#F5F4F2", "#EAE9E7"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772238558/SS3_gzembm.png", colors: ["#FF424D", "#E53B45"] },
    { img: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772238558/SS2_mj5jli.png", colors: ["#052D49", "#141414"] },
  ],
};

const AnimatedThumbnail = ({ projectId }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = THUMBNAIL_DATA[projectId] || THUMBNAIL_DATA['jas-image-builder'];

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