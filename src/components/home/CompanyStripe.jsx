import React from "react";
const CompanyStripe = ({ logos }) => (
  <section
    className="w-full bg-white"
    style={{
      marginTop: "var(--stripe-gap-top)",
      marginBottom: "var(--space-4)",
      paddingTop: "var(--stripe-pad-y)",
      paddingBottom: "var(--stripe-pad-y)"
    }}
  >
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
      <div className="flex items-center justify-center flex-nowrap gap-3 md:gap-12">
        {logos.map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="h-8 md:h-11 lg:h-12 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  </section>
);

export default CompanyStripe;
