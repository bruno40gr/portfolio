import React from "react";
import { PROJECT_STATUS, PRODUCT_TYPES } from "../../data/tokens";
import Pill from "./Pill";

const MetaLabel = ({ children, mb = 2 }) => (
  <div className={`meta-label mb-${mb}`}>{children}</div>
);

export default function ProjectMetadata({ role, timeline, status, type }) {
  const safeStatus = PROJECT_STATUS[status] || PROJECT_STATUS.IN_BUILD;
  const typeLabel = PRODUCT_TYPES[type] || type;

  return (
    <div className="w-full mb-6 md:mb-8 py-3 md:py-4">
      <div className="grid grid-cols-2 md:grid-cols-[140px_140px_140px_1fr] gap-y-4 md:gap-y-6 gap-x-4">
        <div>
          <MetaLabel>Status</MetaLabel>
          <Pill label={safeStatus.label} theme={safeStatus.theme} icon={safeStatus.icon} size="md" />
        </div>
        <div className="min-w-0">
          <MetaLabel mb={4}>Product Type</MetaLabel>
          <div className="text-neutral-900 text-lg font-semibold leading-tight truncate ">
            {Array.isArray(typeLabel) ? typeLabel.join(", ") : typeLabel}
          </div>
        </div>
        <div className="min-w-0">
          <MetaLabel mb={4}>Role</MetaLabel>
          <div className="text-neutral-900 text-lg font-semibold leading-tight">{role}</div>
        </div>
        <div className="min-w-0">
          <MetaLabel mb={4}>Timeline</MetaLabel>
          <div className="text-neutral-900 text-lg font-semibold leading-tight">{timeline}</div>
        </div>
      </div>
    </div>
  );
}