import React from "react";
import { ArrowRight } from "lucide-react";

import { ASSETS } from "../../data/assets";

import Caption from "../ui/Caption";
import CalloutBox from "../ui/CalloutBox";
import ImpactBox from "../ui/ImpactBox";
import DataTable from "../ui/DataTable";
import ProjectMetadata from "../ui/ProjectMetadata";
import Pill from "../ui/Pill";

const sampleTableColumns = ["Scope", "Images", "Manual time required"];
const sampleTableRows = [
  ["Prime Day 2025", "~8,000", "~50,000 hours"],
  ["Seasonal sales", "~4,500", "~30,000 hours"],
  ["New product launch", "~6,500", "~36,000 hours"],
  ["Average month", "~1,100", "~6,000 hours"],
  ["Full year 2025", "~120,000 images", "100k+ hours removed"]
];

const CaseStudyStyleGuide = ({ onBack }) => (
  <article className="bg-white min-h-screen w-full relative text-left">
    <div className="w-full h-[45vh] md:h-[50vh] bg-neutral-100 border-b border-neutral-200 overflow-hidden relative shadow-sm text-center">
      <img
        src={ASSETS.testImage}
        alt="Case study style guide hero"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="w-full pt-12 md:pt-[calc(var(--header-h)+40px)]">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto text-left">
        <div className="flex-1 w-full lg:pb-12 max-w-4xl text-left">
          <button
            type="button"
            onClick={onBack}
            className="type-nav text-sm md:text-base text-neutral-500 hover:text-neutral-900 transition-colors mb-6"
          >
            ← Back to home
          </button>

          <div className="mb-8">
            <h1 className="text-3xl md:text-[2.5rem] text-slate-900 mb-5 md:mb-6 font-[600] tracking-tight !leading-snug md:!leading-[3.5rem] text-left">
              Case Study Style Guide
            </h1>
            <h3 className="text-[1.05rem] md:text-[1.2rem] text-neutral-700 font-light leading-relaxed md:leading-[1.9] mb-6">
              This internal page previews all case-study typography and UI blocks.
            </h3>
          </div>

          <ProjectMetadata
            role="Lead UX Designer"
            timeline="2024–Today"
            status={{ label: "In Build", theme: "dark" }}
            type="Internal"
          />

          <section className="mb-10 text-left">
            <h2 className="text-lg md:text-xl text-slate-900 mb-2 md:mb-3 font-bold leading-snug">Text block</h2>
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4 md:mb-6">
              I led the 0-to-1 build of a four-phase AI platform designed to automate and scale global marketing
              image production. The rollout established core architecture and delivered measurable impact.
            </p>
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
              This paragraph demonstrates the default case study body style across sections and lists.
            </p>
          </section>

          <section className="mb-6 text-left case-anchor-target mt-10 pt-10">
            <h2 className="text-xl md:text-2xl text-slate-900 font-bold tracking-tight leading-snug">
              Heading section with divider
            </h2>
          </section>

          <CalloutBox content="A scalable image-creation tool that lets merchandisers compose hero images, ads, and banners across marketplaces, languages, and dimensions." />

          <ImpactBox
            metrics={[
              { value: "5,000", label: "Hours Saved / Month" },
              { value: "48,000", label: "Prime Day Hours Saved" }
            ]}
            description={[
              "Amazon Devices Asset System now saves an estimated <b>5,000 hours of manual production work per month</b> across design, 3D, and content teams.",
              "For Prime Day July 2025 alone, the system replaced more than <b>48,000 hours</b> of labor." 
            ]}
          />

          <section className="mb-8 md:mb-12 text-left font-body">
            <ul className="space-y-10 md:space-y-16">
              {[
                {
                  title: "Starting with users.",
                  body: "Built relationships with merchandisers across regions and ran scrappy testing sessions.",
                  caption: "Research and insight gathering" 
                },
                {
                  title: "Finding the right layout.",
                  body: "Separated inputs from outputs while supporting 60+ marketplace configurations.",
                  caption: "Layout experimentation" 
                }
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 md:gap-4 items-start text-sm md:text-lg leading-relaxed text-neutral-700"
                >
                  <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-[var(--green-process)] shrink-0">
                    <ArrowRight size={14} strokeWidth={3} className="text-[#231F45]" />
                  </div>
                  <div className="flex-1">
                    <div>
                      <b>{item.title}</b>
                      <br />
                      {item.body}
                    </div>
                    <div className="mt-6">
                      <div className="bg-neutral-100 border border-neutral-200 rounded-sm overflow-hidden shadow-sm p-3 cursor-zoom-in w-full">
                        <img
                          src={ASSETS.testImage}
                          alt={item.caption}
                          loading="lazy"
                          decoding="async"
                          className="w-full aspect-[16/10] object-cover rounded-sm"
                        />
                      </div>
                      <Caption>{item.caption}</Caption>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <DataTable columns={sampleTableColumns} rows={sampleTableRows} />

          <div className="mb-8">
            <div className="text-left">
              <div className="meta-label mb-2">Meta label + pill</div>
              <div className="flex flex-wrap items-center gap-2">
                <Pill label="In Build" theme="dark" size="md" />
                <Pill label="Internal" size="md" />
              </div>
            </div>
          </div>

          <section className="mb-10 text-left">
            <div className="w-full bg-neutral-100 border border-neutral-200 overflow-hidden mb-4 rounded-sm shadow-sm p-4 md:p-8">
              <img
                src={ASSETS.testImage}
                alt="Full bleed example"
                className="w-full h-auto object-cover rounded-sm"
              />
            </div>
            <Caption>Example caption below a full-width image block.</Caption>
          </section>
        </div>
      </div>
    </div>
  </article>
);

export default CaseStudyStyleGuide;