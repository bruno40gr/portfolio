/** @type {import("tailwindcss").Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["\"DM Sans\"", "system-ui", "sans-serif"],
        serif: ["\"Fraunces\"", "serif"],
        mono: ["\"Source Code Pro\"", "monospace"],
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        ".md\\:before\\:separator-dot::before": {
          content: "\" - \"",
          display: "inline-block",
        },
      }, ["responsive"]);
    }),
  ],
}