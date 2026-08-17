/** @type {import("tailwindcss").Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          900: '#1A1A1A',
          700: '#333',
          500: '#5A5A5A',
          400: '#777',
        },
      },
      fontFamily: {
        sans: ["\"Source Sans 3\"", "system-ui", "sans-serif"],
        serif: ["\"Source Sans 3\"", "system-ui", "sans-serif"],
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