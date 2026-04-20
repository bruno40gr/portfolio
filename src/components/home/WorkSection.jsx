import React from "react";
import { WORK_GROUPS } from "../../data/portfolioData";
import CompanySection from "./CompanySection";
 
const WorkSection = ({ onProjectClick }) => (
  <div
    id="work"
    className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pb-24 md:pb-32 relative scroll-mt-24 bg-white text-left"
  >
    {WORK_GROUPS.map((group, idx) => (
      <div key={idx} data-company={group.company.toLowerCase().split(" ")[0]}>
        <CompanySection group={group} onProjectClick={onProjectClick} />
      </div>
    ))}
  </div>
);
 
export default WorkSection;
 
