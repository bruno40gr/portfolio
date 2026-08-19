import React from "react";
import { PROJECT_STATUS } from "../../data/tokens";

const STATUS_TEXT_COLOR = {
  LAUNCHED:   "text-emerald-700",
  IN_BUILD:   "text-blue-700",
  LEGACY:     "text-neutral-500",
  DEPRECATED: "text-rose-700",
};

const MetaField = ({ label, value, valueClassName = "" }) => {
  if (!value) return null;
  return (
    <div className="min-w-0">
      <div className="text-[15px] font-semibold text-neutral-900 mb-1">{label}</div>
      <div className={`text-[15px] font-normal leading-snug ${valueClassName || "text-neutral-600"}`}>
        {value}
      </div>
    </div>
  );
};

export default function ProjectMetadata({ role, timeline, status, collaborators }) {
  const safeStatus = PROJECT_STATUS[status];
  const statusKey = Object.keys(PROJECT_STATUS).find((k) => k === status);
  const statusColor = (statusKey && STATUS_TEXT_COLOR[statusKey]) || "text-neutral-700";

  return (
    <div className="w-full mb-6 md:mb-8 py-3 md:py-4 border-t border-b border-neutral-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-6 pt-4 pb-2">
        <MetaField
          label="Status"
          value={safeStatus?.label}
          valueClassName={statusColor}
        />
        <MetaField label="Role" value={role} />
        <MetaField label="With" value={collaborators} />
        <MetaField label="Timeline" value={timeline} />
      </div>
    </div>
  );
}