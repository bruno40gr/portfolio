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

const ProjectHeader = ({ company, title, type, compact }) => {
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
    <div className={`flex items-center ${compact ? 'gap-2' : 'gap-4'} ${compact ? '' : 'mb-8'}`}>
      {logo && (
        <img
          src={logo.src}
          alt={`${company} logo`}
          className={`rounded-sm object-cover ${compact ? 'h-8 w-8' : 'h-12 w-12'}`}
          loading="lazy"
        />
      )}
      <div className="text-left">
        {compact ? (
          <span className="text-sm text-neutral-500 font-sans tracking-normal">{company}</span>
        ) : (
          <>
            <h2 className="text-xl md:text-2xl text-neutral-900 font-semibold tracking-tight leading-snug">{title || company}</h2>
            {typeLabel && <div className="text-[15px] text-neutral-500 mt-1">{typeLabel}</div>}
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectHeader;