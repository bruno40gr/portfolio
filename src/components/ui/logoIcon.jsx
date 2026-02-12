import React from "react";
import { ASSETS, COMPANY_STRIPE_LOGOSSQUARED } from "../../data/assets";

const normalize = (value) => value?.toLowerCase?.().trim?.() || "";

const findLogo = (company) => {
  const normalized = normalize(company);
  return COMPANY_STRIPE_LOGOSSQUARED.find((logo) => {
    const name = normalize(logo.name);
    return normalized === name || normalized.includes(name) || name.includes(normalized);
  });
};

const LogoIcon = ({ theme = "light", company = null }) => {
  let src;
  const logo = company ? findLogo(company) : null;

  if (logo) {
    src = logo.src;
  } else {
    src = theme === "dark" ? ASSETS.isoWhite : ASSETS.isoGreen;
  }

  return (
    <div className="w-10 h-10 md:w-10 md:h-10 flex items-center justify-center transition-all duration-300">
      <img src={src} alt="Logo" className="w-full h-full object-contain" />
    </div>
  );
};

export default LogoIcon;
