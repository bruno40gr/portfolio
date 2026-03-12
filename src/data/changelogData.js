export const CHANGELOG_DATA = [
  {
    week: "Week of Mar 9, 2026",
    title: "Routing & URL Architecture",
    items: [
      { day: "Mar 11", text: "**Content Consistency & Bug Fix:** Standardized the nomenclature for Pillar 4 across the portfolio to 'AI Lifestyle Compositor' for clarity. Resolved a broken component mapping in `SystemContextBanner` to restore the project description in the context modal." },
      { day: "Mar 10", text: "**Client-Side Routing:** Migrated the app from a state-based single-page architecture to real URL routing using `react-router-dom`. Each section and case study now has its own dedicated URL, enabling standard browser back-button functionality and direct deep-linking." },
      { day: "Mar 10", text: "**Clean URLs & ID Normalization:** Refactored project IDs across the data schema to generate clean, readable URL slugs (e.g., `/project/amazon-image-builder`), and updated dependent components (`AnimatedThumbnail`, `AnimatedHero`) to properly sync with the new architecture." },
      { day: "Mar 10", text: "**Media & Interaction Fixes:** Resolved missing Figma and Video preview thumbnails by deprecating fragile external placeholders. Also resolved a React Router reconciliation issue that was preventing the 'Let's chat' contact overlay from rendering." },
      { day: "Mar 10", text: "**Case Study Refinements:** Debugged layout rendering for Impact Boxes, fixed typos across the Image Builder case study, and implemented the dynamic JAS AI animated hero component." },
      { day: "Mar 9", text: "**Navigation & Hero Upgrades:** Deployed structural improvements to the `AnimatedHero` component, refined general navigation routing, and pushed copy updates for the Image Builder case study." }
    ]
  },
  {
    week: "Week of Mar 2, 2026",
    title: "Design Updates & Functionality",
    items: [
      { day: "Mar 6", text: "**Mobile Layout & Navigation:** Resolved layout issues on the mobile `CompanyStripe` component and fixed persistent back-button navigation bugs." },
      { day: "Mar 5", text: "**Copywriting & Resume Features:** Executed a 'kill jargon' pass to tighten case study copy and finalized the downloadable resume implementation." },
      { day: "Mar 5", text: "**Vercel Analytics Integration:** Installed Vercel Analytics and integrated the `Analytics` component into `src/App.jsx` for tracking." },
      { day: "Mar 5", text: "**Tailwind Typography Refinement:** Adjusted the color palette from `text-neutral-*` back to `text-slate-*` for `ImpactBox`, `CalloutBox`, `WorkDropdown`, and the Hero Sections (`App.jsx` and `AnimatedHero.jsx`) to resolve coloring issues." },
      { day: "Mar 4", text: "**Tailwind Typography Update:** Standardized text colors by replacing `text-slate-*` instances with `text-neutral-*` across `.jsx`, `.tsx`, and `.css` files in the `src` directory." },
      { day: "Mar 4", text: "**Final Case Study Added:** Integrated the final case study into the portfolio, completing the core content." },
      { day: "Mar 4", text: "**Gatekeeper Screen & Metadata Stripe:** Implemented a new `gatekeeperEnabled` flag in `src/data/portfolioData.js` to quickly activate/deactivate the portfolio's gatekeeper page; also refined gatekeeper screen styling and metadata stripe." },
      { day: "Mar 3", text: "**Hero Animation Improvements:** Made several enhancements to the animated hero components for a smoother and more engaging user experience." },
      { day: "Mar 3", text: "**Immersive Hero Layout:** Rearchitected the hero section in `App.jsx` to be a full-viewport container, vertically centering content and integrating the `CompanyStripe` component." },
      { day: "Mar 3", text: "**Project Thumbnail Padding:** Added `p-8` Tailwind CSS padding to project thumbnails for improved visual spacing." },
      { day: "Mar 3", text: "**Branding and Asset Updates:** Replaced the hero logo with a new version, added a custom favicon to `index.html`, and updated the main navigation to point to the correct resume URL." }
    ]
  },
  {
    week: "Week of Feb 26, 2026",
    title: "Portfolio Infrastructure Updates",
    items: [
      { day: "Feb 28", text: "**Inspire Tab, AI Highlights, Dropdown Menu:** Introduced Inspire Tab, AI highlights, and dropdown menu enhancements." },
      { day: "Feb 27", text: "**Patreon and Prox Case Studies:** Incorporated Patreon and Prox case studies." },
      { day: "Feb 26", text: "**Alto Case Studies & Misc Improvements:** Added Alto case studies and various other improvements." },
      { day: "Feb 25", text: "**Image Builder:** Developed the Image Builder functionality." },
      { day: "Feb 23", text: "**Image Lightbox Improvements:** Implemented image lightbox improvements and added many new screenshots." }
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