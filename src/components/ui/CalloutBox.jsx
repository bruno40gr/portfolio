import React from "react";
const CalloutBox = ({ content }) => (
  <section className="mb-8 md:mb-10 w-full">
    <div className="bg-neutral-100 border border-neutral-200 p-5 md:p-8 rounded-xl shadow-sm">
      <p
        className="text-base md:text-lg text-neutral-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  </section>
);

export default CalloutBox;
