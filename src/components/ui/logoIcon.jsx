import React from "react";
import { ASSETS } from "../../data/assets";

const LogoIcon = ({ theme = "light" }) => {
  const src = theme === "dark" ? ASSETS.isoWhite : ASSETS.isoGreen;
  return (
    <div className="w-12 h-12 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300">
      <img src={src} alt="Logo" className="w-full h-full object-contain" />
    </div>
  );
};

export default LogoIcon;
