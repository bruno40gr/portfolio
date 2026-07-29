export const CHANGELOG_DATA = [
  {
    week: "Week of Jul 29, 2026",
    title: "Editorial Case Study Overhaul",
    items: [
      { day: "Jul 29", text: "**Image Builder Editorial Hero:** Converted Image Builder from animated hero to editorial layout with a scroll-driven crossfade carousel. Four campaign variants crossfade as the user scrolls, with per-slide background colors, dark/light text treatment, and a persistent caption. One-way scroll clamping prevents slides from reversing." },
      { day: "Jul 29", text: "**Side Image Layouts:** Introduced `layout: 'side'` and `layout: 'side-lightbox'` props for `image-full` blocks. Images display at 62% width alongside captions on the right, vertically centered. Added side layout support to list visuals. Applied across Image Builder, AI Compositor, and Asset Manager case studies." },
      { day: "Jul 29", text: "**About Page Photo Collage:** Replaced single about photo with a two-image overlapping collage with white borders matching the editorial image treatment." },
      { day: "Jul 29", text: "**Typography Refinements:** Changed deep purple `#231F45` to black for editorial case study titles and impact metrics. Reduced serif numeric kerning. Tightened impact summary spacing in editorial headers." },
      { day: "Jul 29", text: "**List Layout Simplification:** Removed two-column grid from list visuals. All list images now stack vertically in a single column." },
    ]
  },
  {
    week: "Week of Jul 22, 2026",
    title: "Content & Editorial Polish",
    items: [
      { day: "Jul 27", text: "**Editorial Case Study Infrastructure:** Converted AI Lifestyle Compositor and Devices Component Asset Manager from static layouts to the new editorial case study format, with header/title/hero/metadata architecture reused across all four Amazon Devices case studies." },
      { day: "Jul 25", text: "**AI Lifestyle Compositor Optimization:** Refined the AI Lifestyle Compositor case study copy and visuals. Audited and fixed broken image placeholders." },
      { day: "Jul 24", text: "**Meridian Component Images:** Added Meridian design system component screenshots to the Image Builder case study." },
      { day: "Jul 22", text: "**About Page Updates:** Replaced the umbrella-section hero with an improved about hero layout. Updated bio copy across the about page." },
    ]
  },
  {
    week: "Week of May 14, 2026",
    title: "Inspire Tab & Homepage Polish",
    items: [
      { day: "May 18", text: "**Layout Reshuffling:** Reorganized component structure and spacing across case study pages." },
      { day: "May 14", text: "**Inspire Tab:** Integrated the Inspire Tab case study with interactive prototype and revised copy." },
      { day: "May 14", text: "**Homepage & Copy Updates:** Switched homepage layout structure. Tightened copy across multiple case studies for brevity. Fixed paragraph formatting issues." },
    ]
  },
  {
    week: "Week of Apr 20, 2026",
    title: "Hero & Navigation Refinements",
    items: [
      { day: "Apr 20", text: "**Hero Polish:** Refined hero logo sizing and alignment across breakpoints. Removed CTA elements from the hero section for a cleaner editorial feel." },
    ]
  },
  {
    week: "Week of Apr 5, 2026",
    title: "SEO, Metrics & Presentation",
    items: [
      { day: "Apr 8", text: "**Narrative & Progressive Disclosure:** Updated case study copy to emphasize progressive disclosure as a core design strategy. Troubleshot Google indexing for the portfolio site." },
      { day: "Apr 6", text: "**Metrics Fix:** Corrected impact metric formatting across case studies." },
      { day: "Apr 5", text: "**Presentation & Meta:** Updated presentation component and `metadescription` tags for SEO." },
    ]
  },
  {
    week: "Week of Mar 9, 2026",
    title: "Routing & URL Architecture",
    items: [
      { day: "Mar 12", text: "**Dropdown Polish:** Refined work dropdown sizing and layout." },
      { day: "Mar 11", text: "**Case Study & Visual Enhancements:** Upgraded case studies with new infographics and layout improvements. Standardized the nomenclature for Pillar 4 across the portfolio to 'AI Lifestyle Compositor' and resolved a broken component mapping in the `SystemContextBanner` modal." },
      { day: "Mar 10", text: "**UI Polish:** Fine-tuned visual assets by fixing glitches, adjusting glitch effect variance, and smoothing out jagged borders across UI elements." },
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