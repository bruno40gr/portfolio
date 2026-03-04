import React from "react";
import { COMPANY_STRIPE_LOGOSSQUARED } from "../../data/assets";
import { PRODUCT_TYPES } from "../../data/tokens";

const normalize = (value) => value?.toLowerCase?.().trim?.() || "";
const findLogo = (company) => {
  const normalized = normalize(company);
  return COMPANY_STRIPE_LOGOSSQUARED.find((logo) => {
    const name = normalize(logo.name);
    return normalized === name || normalized.includes(name) || name.includes(normalized);
  });
};

const ProjectHeader = ({ company, title, type }) => {
  if (!company && !title) return null;
  const logo = company ? findLogo(company) : null;
  
  let typeLabel = "";
  if (type) {
     if (Array.isArray(type)) {
         typeLabel = type.map(t => PRODUCT_TYPES[t] || t).join(" · ");
     } else {
         typeLabel = PRODUCT_TYPES[type] || type;
     }
  }

  return (
    <div className="flex items-center gap-4 mb-8">
      {logo && (
        <img
          src={logo.src}
          alt={`${company} logo`}
          className="h-12 w-12 rounded-sm object-cover"
          loading="lazy"
        />
      )}
      <div className="text-left">
        <h2 className="text-xl md:text-2xl text-slate-900 font-bold tracking-tight leading-snug">{title || company}</h2>
        {typeLabel && <div className="meta-label mt-1">{typeLabel}</div>}
      </div>
    </div>
  );
};

export default ProjectHeader;