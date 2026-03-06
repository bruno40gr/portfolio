import React, { useState } from "react";
import { Download } from "lucide-react";

// ─── Resume data ──────────────────────────────────────────────────────────────
const RESUME = {
  personalInfo: {
    name: "Bruno Wong Marchena",
    location: "Roseville, CA",
    phone: "415-529-0642",
    email: "bruwong@gmail.com",
    linkedin: "linkedin.com/in/bruwong",
    linkedinHref: "https://linkedin.com/in/bruwong",
    website: "brunowong.me",
    websiteHref: "https://brunowong.me",
  },
  summary: `14 years in product design, the last few building AI systems that changed how large teams work. My work sits at the intersection of product strategy, systems thinking, and close partnership with engineering, where design decisions carry real downstream consequences. I prototype in React and Tailwind to close execution gaps, pressure-test interactions, and ensure what ships matches intent. I hold a USPTO patent from Patreon, cut pharmacy operating costs at Alto, and led the design of a global campaign production system at Amazon.`,
  skills: {
    product: [
      "Product strategy",
      "Interaction design",
      "Information architecture",
      "Service design",
      "UX research",
      "Cross-functional leadership",
    ],
    technical: [
      "Production-level prototyping in React and Tailwind CSS",
      "Design-to-code workflows",
      "LLM-assisted systems",
      "Figma",
    ],
  },
  experience: [
    {
      role: "UX Designer, Devices",
      company: "Amazon",
      dates: "September 2022 to January 2026",
      bullets: [
        "Led design for an AI-powered campaign production system built to give Amazon Devices a single place to generate, manage, and publish marketing assets across 22 global marketplaces. Aligned product, engineering, brand, and marketing teams around a unified direction that replaced a fragmented manual workflow used by hundreds of specialists worldwide.",
        "Defined the interaction model for a production tool that lets non-designers build, localize, and export marketing assets across 23 global markets. AI generates and translates copy automatically with compliance and brand guardrails built in. Generated 8,000+ images for Prime Day 2025, replacing an estimated 48,000 hours of manual work. Contributed three components to Meridian, Amazon's internal design system.",
        "Led the design of a review system for an AI pipeline that enabled marketers to generate campaign-ready lifestyle scenes without a designer or 3D artist. Codified device-specific placement rules as the training foundation, then structured a sampling model and rejection taxonomy that improved output quality batch-over-batch.",
        "Directed the design of a governed asset library built to enable automated campaign publishing at global scale. Ran AI feasibility testing that proved automated metadata classification could replace up to 90 manual inputs per asset, securing resources to build the capability in-house. Shipping Q2 2026.",
        "Shaped device discovery across the Inspire feed and AI review highlights surfaces. Contributed to a ~2% lift in units sold. One AI review highlights concept shipped to the homepage.",
      ],
    },
    {
      role: "Product Designer, Pharmacy Systems",
      company: "Alto Pharmacy",
      dates: "August 2021 to August 2022",
      bullets: [
        "Overhauled the patient medical questions flow in the Alto Assistant app, reducing inbound message volume by 38% and cutting per-order shipping costs by approximately $2. Care cost per shipment fell from $16 to approximately $10.",
        "Built internal Care Specialist tooling that reduced communications per shipment by 18%, pushing the metric below 1.0 for the first time.",
        "Rearchitected supply chain and fulfillment workflows, increasing inventory accuracy from 82% to 99%.",
      ],
    },
    {
      role: "Senior Product Designer, Creator Tools",
      company: "Patreon",
      dates: "October 2020 to April 2021",
      bullets: [
        "Drove improvements to the creator benefit delivery system that moved satisfaction from 49% to 73% in three months.",
        "Co-invented the Pledge Streak Filter (USPTO Patent No. 12,154,126, granted November 2024), a UI pattern that surfaces patron loyalty using ML-weighted billing history.",
        "Led a three-week sprint defining the Patreon 2.0 benefit delivery architecture, securing executive buy-in and forming the foundation for Studio 2.0 and the 2022 roadmap.",
      ],
    },
    {
      role: "Founding Designer",
      company: "Prox",
      dates: "August 2019 to September 2020",
      bullets: [
        "Designed the product from zero to launch, achieving a 51% rebooking rate and 4.3/5 session rating in closed beta.",
        "Led product storytelling and live demos that helped secure an $800,000 seed round.",
        "Scaled design from a solo function to a team of six, establishing quality standards during rapid growth.",
      ],
    },
    {
      role: "Product Designer",
      company: "Instapage",
      dates: "2016 to 2019",
      bullets: [
        "Designed core product features for a SaaS landing page and conversion optimization platform serving thousands of marketing teams.",
      ],
    },
    {
      role: "Product Designer",
      company: "Carta",
      dates: "2016",
      bullets: [
        "Contributed to product design for equity management workflows during an early growth stage.",
      ],
    },
    {
      role: "Product Designer, promoted to Design Manager",
      company: "Webgility",
      dates: "2013 to 2016",
      bullets: [
        "Started as a product designer and was promoted to design manager, leading a small team building ecommerce automation and accounting integration tools.",
      ],
    },
  ],
  education: [
    { degree: "Master of Digital Marketing", institution: "Hult International Business School", year: "2012" },
    { degree: "BS in Social Communications", institution: "Universidad de Lima" },
  ],
};

// ─── PDF generator ────────────────────────────────────────────────────────────
const generatePDF = async () => {
  await new Promise((resolve, reject) => {
    if (window.jspdf) return resolve();
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "letter" });

  const PAGE_H = 792;
  const ML = 54;
  const CONTENT_W = 612 - ML * 2;
  const BOTTOM_MARGIN = 54;
  let y = 54;

  const checkPage = (needed = 14) => {
    if (y + needed > PAGE_H - BOTTOM_MARGIN) { doc.addPage(); y = 54; }
  };

  const rule = () => {
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.5);
    doc.line(ML, y, ML + CONTENT_W, y);
    y += 8;
  };

  const sectionHeader = (title) => {
    checkPage(22);
    y += 10;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(110, 110, 110);
    doc.text(title.toUpperCase(), ML, y);
    y += 5;
    rule();
  };

  // Name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(17, 17, 17);
  doc.text(RESUME.personalInfo.name, ML, y);
  y += 16;

  // Contact
  const { phone, email, linkedin, website, location } = RESUME.personalInfo;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(110, 110, 110);
  const contactLines = doc.splitTextToSize(
    `${location}  |  ${phone}  |  ${email}  |  ${linkedin}  |  ${website}`,
    CONTENT_W
  );
  contactLines.forEach((line) => { doc.text(line, ML, y); y += 12; });
  y += 4;
  rule();

  // Summary
  sectionHeader("Summary");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(60, 60, 60);
  const summaryLines = doc.splitTextToSize(RESUME.summary, CONTENT_W);
  summaryLines.forEach((line) => { checkPage(13.5); doc.text(line, ML, y); y += 13.5; });
  y += 4;

  // Skills
  sectionHeader("Skills");
  const colW = CONTENT_W / 2 - 10;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(120, 120, 120);
  doc.text("PRODUCT", ML, y);
  doc.text("TECHNICAL", ML + CONTENT_W / 2, y);
  y += 14; // enough space so text starts below the labels
  const pLines = doc.splitTextToSize(RESUME.skills.product.join("  /  "), colW);
  const tLines = doc.splitTextToSize(RESUME.skills.technical.join("  /  "), colW);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  for (let i = 0; i < Math.max(pLines.length, tLines.length); i++) {
    checkPage(13);
    if (pLines[i]) doc.text(pLines[i], ML, y);
    if (tLines[i]) doc.text(tLines[i], ML + CONTENT_W / 2, y);
    y += 13;
  }
  y += 2;

  // Experience
  sectionHeader("Professional Experience");
  RESUME.experience.forEach((job) => {
    checkPage(30);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(17, 17, 17);
    doc.text(job.role, ML, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(140, 140, 140);
    doc.text(job.dates, ML + CONTENT_W - doc.getTextWidth(job.dates), y);
    y += 14;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(120, 120, 120);
    doc.text(job.company, ML, y);
    y += 13;
    job.bullets.forEach((bullet) => {
      const lines = doc.splitTextToSize(bullet, CONTENT_W - 12);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(60, 60, 60);
      doc.text("\u2022", ML, y);
      lines.forEach((line) => { checkPage(13); doc.text(line, ML + 10, y); y += 13; });
    });
    y += 4;
  });

  // Education
  sectionHeader("Education");
  RESUME.education.forEach((edu) => {
    checkPage(26);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(17, 17, 17);
    doc.text(edu.degree, ML, y);
    if (edu.year) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(140, 140, 140);
      doc.text(edu.year, ML + CONTENT_W - doc.getTextWidth(edu.year), y);
    }
    y += 13;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(120, 120, 120);
    doc.text(edu.institution, ML, y);
    y += 16;
  });

  doc.save("Bruno_Wong_Marchena_Resume.pdf");
};

// ─── Section wrapper ──────────────────────────────────────────────────────────
const Section = ({ title, children }) => (
  <section className="mb-8 last:mb-0">
    <h2 className="font-serif text-base font-bold text-gray-900 uppercase tracking-widest mb-1">
      {title}
    </h2>
    <hr className="border-gray-200 mb-4" />
    {children}
  </section>
);

// ─── Main ─────────────────────────────────────────────────────────────────────
const ResumePage = () => {
  const { personalInfo: p, summary, skills, experience, education } = RESUME;
  const [generating, setGenerating] = useState(false);

  const handleDownload = async () => {
    if (generating) return;
    setGenerating(true);
    try { await generatePDF(); } finally { setGenerating(false); }
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-16 max-w-[800px] mx-auto min-h-screen bg-white text-left font-sans animate-fade-in relative z-10">

      <div className="mb-10 flex justify-end">
        <button
          onClick={handleDownload}
          disabled={generating}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#88FF00] text-black text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Download size={15} />
          {generating ? "Generating..." : "Download PDF"}
        </button>
      </div>

      <header className="mb-8">
        <h1 className="font-serif text-4xl md:text-5xl text-gray-900 font-bold leading-tight tracking-tight mb-1">
          {p.name}
        </h1>
        <p className="text-gray-500 text-sm mb-3">{p.location}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
          <span>{p.phone}</span>
          <a href={`mailto:${p.email}`} className="hover:text-gray-900 transition-colors">{p.email}</a>
          <a href={p.linkedinHref} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">{p.linkedin}</a>
          <a href={p.websiteHref} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">{p.website}</a>
        </div>
      </header>

      <Section title="Summary">
        <p className="text-gray-700 leading-relaxed text-sm">{summary}</p>
      </Section>

      <Section title="Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Product</p>
            <p className="text-sm text-gray-700 leading-relaxed">{skills.product.join("  /  ")}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Technical</p>
            <p className="text-sm text-gray-700 leading-relaxed">{skills.technical.join("  /  ")}</p>
          </div>
        </div>
      </Section>

      <Section title="Professional Experience">
        <div className="space-y-6">
          {experience.map((job, i) => (
            <div key={i}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-0.5">
                <h3 className="font-semibold text-gray-900 text-sm">{job.role}</h3>
                <span className="text-xs text-gray-400 shrink-0">{job.dates}</span>
              </div>
              <p className="text-xs text-gray-500 mb-2">{job.company}</p>
              <ul className="space-y-1.5">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                    <span className="text-gray-300 mt-0.5 shrink-0">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="space-y-3">
          {education.map((edu, i) => (
            <div key={i}>
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-semibold text-gray-900 text-sm">{edu.degree}</p>
                {edu.year && <span className="text-xs text-gray-400 shrink-0">{edu.year}</span>}
              </div>
              <p className="text-xs text-gray-500">{edu.institution}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ResumePage;