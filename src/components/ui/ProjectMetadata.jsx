import React from "react";
import { PROJECT_STATUS, PRODUCT_TYPES } from "../../data/tokens";
import Pill from "./Pill";

const MetaLabel = ({ children }) => (
  <div className="meta-label mb-2">{children}</div>
);

export default function ProjectMetadata({ role, timeline, status, type }) {
  const safeStatus = PROJECT_STATUS[status] || PROJECT_STATUS.IN_BUILD;
  const typeLabel = PRODUCT_TYPES[type] || type;

  return (
    <div className="w-full mb-6 md:mb-8 py-3 md:py-4">
  {/* The change is in the md:grid-cols-... below */}
  <div className="grid grid-cols-2 md:grid-cols-[160px_160px_160px_1fr] gap-y-4 md:gap-y-6 gap-x-4">
    
    {/* This column will be exactly 200px on desktop */}
    <div>
      <MetaLabel className="!mb-1">Status</MetaLabel>
      <Pill label={safeStatus.label} theme={safeStatus.theme} icon={safeStatus.icon} size="md" />
    </div>

    {/* The following columns will divide the remaining space equally */}
    <div className="min-w-0">
      <MetaLabel>Product Type</MetaLabel>
      <div className="text-neutral-900 text-xl font-semibold leading-tight truncate">
        {Array.isArray(typeLabel) ? typeLabel.join(", ") : typeLabel}
      </div>
    </div>

    <div className="min-w-0">
      <MetaLabel>Role</MetaLabel>
      <div className="text-neutral-900 text-xl font-semibold leading-tight">{role}</div>
    </div>

    <div className="min-w-0">
      <MetaLabel>Timeline</MetaLabel>
      <div className="text-neutral-900 text-xl font-semibold leading-tight">{timeline}</div>
    </div>
    
  </div>
</div>
  );
}
