import React from "react";
import { PROJECT_STATUS } from "../../data/tokens";
import Pill from "./Pill";

const MetaLabel = ({ children }) => (
  <div className="meta-label mb-2">{children}</div>
);

export default function ProjectMetadata({ role, timeline, status, type }) {
  const safeStatus = status || PROJECT_STATUS.IN_BUILD;

  return (
    <div className="w-full mb-6 md:mb-8 py-3 md:py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 md:gap-y-6 gap-x-4">
        <div>
          <MetaLabel>Role</MetaLabel>
          <div className="text-neutral-900 text-base font-semibold leading-tight">{role}</div>
        </div>

        <div>
          <MetaLabel>Timeline</MetaLabel>
          <div className="text-neutral-900 text-base font-semibold leading-tight">{timeline}</div>
        </div>

        <div>
          <MetaLabel className="!mb-1">Status</MetaLabel>
          <Pill label={safeStatus.label} theme={safeStatus.theme} size="md" />
        </div>

        <div>
          <MetaLabel>Product Type</MetaLabel>
          <div className="text-neutral-900 text-base font-semibold leading-tight">
            {Array.isArray(type) ? type.join(", ") : type}
          </div>
        </div>
      </div>

    </div>
  );
}
