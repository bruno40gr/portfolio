export const CHANGELOG_DATA = [
  {
    week: "Week of Mar 2, 2026",
    title: "Hero Section Overhaul & UI Polish",
    items: [
      { day: "Mar 6", text: "**Immersive Hero Layout:** Rearchitected the hero section in `App.jsx` to be a full-viewport (`min-h-[100dvh]`) container. Utilized Flexbox properties (`flex`, `flex-col`, `flex-1`, and `mt-auto`) to vertically center the main headline content while pushing the company logo stripe to the absolute bottom of the viewport." },
      { day: "Mar 4", text: "**Integrated Company Stripe:** Relocated the `CompanyStripe` component to be inside the hero section, serving as a sleek footer element and creating a more unified, immersive initial view before the user scrolls." },
      { day: "Mar 3", text: "**Project Thumbnail Padding:** Added `p-8` Tailwind CSS padding to \"Image Builder,\" \"Inspire Tab,\" and \"Studio 2.0\" project thumbnails for improved visual spacing." },
      { day: "Mar 2", text: "**Branding and Asset Updates:** Replaced the hero logo with a new version, added a custom favicon to `index.html`, and updated the main navigation to point to the correct resume URL." }
    ]
  },
  {
    week: "Week of Feb 23, 2026",
    title: "Further Enhancements",
    items: [
      { day: "Feb 27", text: "**Image Lightbox Improvements:** Implemented image lightbox improvements and added many new screenshots." },
      { day: "Feb 26", text: "**Image Builder:** Developed the Image Builder functionality." },
      { day: "Feb 25", text: "**Alto Case Studies & Misc Improvements:** Added Alto case studies and various other improvements." },
      { day: "Feb 24", text: "**Patreon and Prox Case Studies:** Incorporated Patreon and Prox case studies." },
      { day: "Feb 23", text: "**Inspire Tab, AI Highlights, Dropdown Menu:** Introduced Inspire Tab, AI highlights, and dropdown menu enhancements." }
    ]
  },
  {
    week: "Week of Feb 15, 2026",
    title: "UI and Asset Management",
    items: [
      { day: "Feb 20", text: "**Format-Agnostic Hero:** The `CaseStudy.jsx` component now supports different hero types, starting with the new `AnimatedHero`. This allows for more flexibility in how case studies are presented." },
      { day: "Feb 18", text: "**Lightbox for All Media:** All media types (videos, Figma files) now open in the `ImageLightbox` for a consistent experience across all case studies." },
      { day: "Feb 17", text: "**Mobile Zoom:** The lightbox now supports pinch-to-zoom on images for a better mobile experience." },
      { day: "Feb 15", text: "**Menus and Asset Builder:** Menus and asset builder modal integrated." }
    ]
  },
  {
    week: "Week of Feb 9, 2026",
    title: "Iterative Refinement & Systems Thinking",
    items: [
      { day: "Feb 13", text: "**Figma Integration:** Transitioned from static Figma links to live, responsive `<iframe>` embeds. Implemented **Lazy Loading** (`loading=\"lazy\"`) to protect initial page load performance. Engineered a **\"Scale-to-Fit\"** logic within the `FigmaEmbed` component to ensure interactive prototypes remain usable across different viewport sizes. Enhanced UX by making embeds clickable, opening a full-screen dedicated tab for deeper review." },
      { day: "Feb 11", text: "**Responsive Navigation (The Mega-Menu):** Designed and built a custom **Work Dropdown** to replace standard project lists. **Desktop Mega-Menu:** Implemented a two-column layout showing recognition-rich company logos and impact-focused project summaries. **\"The Invisible Bridge\":** Implemented a transparent buffer container to ensure mouse-hover stability when transitioning from the nav trigger to the dropdown menu. **Mobile Accordion:** Adapted the mega-menu into a lean, tap-friendly accordion. Aggressively pruned non-essential information (like impact summaries) on small screens to prioritize speed." },
      { day: "Feb 10", text: "**Data Normalization & Consolidation:** Refactored the `WORK_GROUPS` schema to handle complex career histories. Implemented a \"nested teams\" logic to consolidate multiple roles under a single company entity (e.g., Amazon Devices), maintaining data integrity while simplifying the visual hierarchy." },
      { day: "Feb 9", text: "**Visual Consistency:** Matched the typography and interaction patterns of the global dropdown to the `CaseStudyAnchorNav`. Refined the \"Pill\" component system for status and type indicators. Standardized company branding using a unified `LogoIcon` component with squared-off assets for professional polish." }
    ]
  },
  {
    week: "Week of Feb 4, 2026",
    title: "Foundation & Core Identity",
    items: [
      { day: "Feb 8", text: "**Initial Commit:** Established the React + Tailwind foundation." },
      { day: "Feb 6", text: "**Hero Section:** Developed the initial high-impact hero section with a focus on clean typography (Source Sans 3) and a minimalist aesthetic." },
      { day: "Feb 4", text: "**Project Structure:** Defined the initial `portfolioData.js` schema to drive the site's dynamic content." }
    ]
  }
];