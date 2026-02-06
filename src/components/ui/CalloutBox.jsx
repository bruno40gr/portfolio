import React from "react";
const CalloutBox = ({ content }) => (
  <section className="mb-8 md:mb-10 w-full">
    <div className="bg-slate-50 border border-slate-100 p-5 md:p-8 rounded-xl shadow-sm">
      <p
        className="font-sans text-lg text-slate-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  </section>
);

export default CalloutBox;
