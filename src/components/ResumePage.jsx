import React from "react";
import { RESUME_DATA } from "../data/resumeData";

const ResumePage = () => {
  const { personalInfo, summary, skills, experience, education } = RESUME_DATA;

  const renderContactInfo = () => (
    <div className="flex flex-col items-start gap-1 mb-6 text-sm text-gray-700">
      <p>{personalInfo.phone}</p>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.linkedin}</p>
      <p>{personalInfo.website}</p>
    </div>
  );

  const renderSection = (title, content, isSkills = false) => (
    <section className="mb-8 last:mb-0">
      <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
        {title}
      </h2>
      {isSkills ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Product</h3>
            <ul className="space-y-1 text-gray-700 pl-5">
              {content.product.map((item, index) => (
                <li key={index} className="list-disc">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Technical</h3>
            <ul className="space-y-1 text-gray-700 pl-5">
              {content.technical.map((item, index) => (
                <li key={index} className="list-disc">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        typeof content === "string" ? (
          <p className="text-gray-700 leading-relaxed">{content}</p>
        ) : (
          content.map((item, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <h3 className="font-semibold text-lg text-gray-900 leading-tight">{item.role || item.degree}</h3>
              <p className="text-gray-700 text-base">{item.company || item.institution}{item.dates ? ` | ${item.dates}` : ''}</p>
              {item.description && (
                <ul className="space-y-1 text-gray-700 mt-2 pl-5">
                  {item.description.map((desc, i) => (
                    <li key={i} className="list-disc">{desc}</li>
                  ))}
                </ul>
              )}
              {item.additional && <p className="text-gray-600 text-sm mt-2">{item.additional}</p>}
            </div>
          ))
        )
      )}
    </section>
  );

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-16 max-w-[1000px] mx-auto min-h-screen bg-white text-left font-sans animate-fade-in relative z-10">
      <header className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl text-gray-900 font-bold leading-tight tracking-tight mb-4">
          {personalInfo.name}
        </h1>
        <p className="text-gray-600 text-lg md:text-xl font-light mb-6">
          {personalInfo.location}
        </p>
        {renderContactInfo()}
      </header>

      {renderSection("Summary", summary)}
      {renderSection("Skills", skills, true)}
      {renderSection("Professional Experience", experience)}
      {renderSection("Education", education)}
    </div>
  );
};

export default ResumePage;