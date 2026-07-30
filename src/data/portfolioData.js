import { PROJECT_STATUS, PRODUCT_TYPES, SERVICES } from "./tokens";

// ------------------------------------------
// Small helpers + data normalization
// ------------------------------------------
function isRealUrl(url) {
  if (!url) return false;
  if (typeof url !== "string") return false;
  if (!url.startsWith("http")) return false;
  if (url.includes("https://...")) return false;
  return true;
}

// ------------------------------------------
// Global data
// ------------------------------------------

export const CASE_STUDIES_TITLES = {
  "amazon-image-builder": "Image Builder",
  "amazon-asset-manager": "Devices Component Asset Manager",
  "amazon-metadata-studio": "Devices Metadata Studio",
  "amazon-ai-compositor": "AI Lifestyle Compositor",
  "amazon-inspire-tab": "Inspire Tab",
  "amazon-ai-review-highlights": "AI-powered Customer Review Highlights",
  "alto-internal-tools": "Alto Pharmacy Internal Tools",
  "alto-assistant": "Alto Assistant App",
  "patreon-creator-tools": "Benefit Delivery Tools for Creators",
  "patreon-pledge-streak": "Pledge Streak Patent",
  "patreon-studio-2": "Studio 2.0 Design System",
  "prox": "Prox",
};

export const PORTFOLIO_DATA = {
  gatekeeperEnabled: false, // Set to false to disable the gatekeeper page
  profile: {
    name: "Bruno",
    subName: "Wong M.",
    email: "hello@brunowong.me",
    location: "Sacramento, CA"
  },
  projects: [

    // PILLAR 1: IMAGE BUILDER
    {
      id: "amazon-image-builder",
      parentId: "amazon-asset-system",
      company: "Amazon Devices",
      title: CASE_STUDIES_TITLES["amazon-image-builder"],
      impactSummary: "A production tool for non-designers that replaced a multi-team, multi-tool campaign workflow with a single, guarded editing surface.",
      impactSummarySentence: "A production system that lets non-designers build, localize, and export marketing assets across 23 global market and language combinations, with compliance logic built in.",
      designerNote: "This project is the most direct demonstration of how I think about designing for non-designers. The interface hides far more than it shows. Every guardrail, every locked layout, every automated translation was a deliberate choice to remove judgment from the user and put it in the system. Giving 600 people without design training the ability to publish globally meant the product had to be the expert, not the user.",
      thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0003_USEN_zpplaz.png",
      thumbnailPadding: "p-12",
      status: "LAUNCHED",
      type: "INTERNAL",
      blocks: [
        {
          type: "impact-box",
          metrics: [
            { value: "~8,000", label: "Lifestyle images generated for Prime Day 2025" },
            { value: "45–50 FTE", label: "Operational capacity freed in 2025" }
          ]
        }
      ],
      details: {
        hero: {
          type: 'editorial',
          heroSlides: [
            { src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0003_USEN_zpplaz.png", colors: ["#2a2850", "#231f44"], market: "US, English", theme: "dark" },
            { src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0000_CAFR_lvfrh1.png", colors: ["#5c3566", "#4a2a55"], market: "Canada, French", theme: "dark" },
            { src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0001_BRPOR_zajgs8.png", colors: ["#edeaf6", "#ddd8f0"], market: "Brazil, Portuguese", theme: "light" },
            { src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042483/mobile-echoshow-_0002_USES_yj4oji.png", colors: ["#1e3d6e", "#162d55"], market: "US, Spanish", theme: "dark" },
          ],
        },
        heroImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772042482/mobile-echoshow-_0003_USEN_zpplaz.png",
        role: "Lead UX Designer",
        timeline: "September 2024 to February 2025",
        collaborators: "PM, 6 Engineers, Brand Studio",
        type: "INTERNAL",
        blocks: [

          // ── THE PROBLEM ──────────────────────────────────────────────
          { type: "heading", title: "The Problem", hasDivider: false },
          {
            type: "text",
            content: [
              "Image Builder was built for about 600 people across marketing, merchandising, product line strategy, and content. None of them were designers.",
              "Before this, producing a campaign image meant moving work through designers, copywriters, translators, and marketing operations. At Amazon's scale, every new market and language multiplied the work.",
              "The goal was to let a merchandiser select a template, configure their markets, and produce a campaign without opening Photoshop or relying on someone else to finish it. The system also had to prevent the mistakes that came with giving non-designers more control: an unavailable device in the wrong market, incorrect pricing, a translation that violated regional requirements, or a product that hadn't launched yet."
            ]
          },
          {
            type: "figma",
            src: "https://www.figma.com/proto/Hm4V3LSFtdcJKC1e5UWYls/JAS-Image-Builder-Final-Build-Spec?page-id=0%3A1&node-id=163-36427&scaling=min-zoom&t=PcpidMXEz6GOqzKf-1&content-scaling=fixed&p=f",
            caption: {
              short: "The shipped product. Select markets, dimensions, background, device, and logo. Copy generation and translation are automatic.",
              verbose: "This is a close representation of the shipped product. You select marketplaces and dimensions, add a background image, select a product composition, and add a logo. From there, the system generates marketing copy and auto-translates it into all corresponding languages. Finally, you export and the images are ready for Amazon."
            },
            coverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772062490/Screenshot_2026-02-25_at_3.34.36_PM_dwqrvv.png",
            aspectRatio: "4/3"
          },

          // ── THE SYSTEM ────────────────────────────────────────────────
          { type: "heading", title: "The System" },
          {
            type: "text",
            content: [
              "Image Builder turned a multi-step production workflow into a single controlled surface.",
              "Users selected a template, configured their markets and languages, and assembled their campaign. The system handled dimensions, copy generation, translation, and compliance behind the scenes.",
              "The interface deliberately hid most of that complexity. Users didn't need to understand the rules. They needed to make the right decisions and know when something was wrong."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1773289976/layers-nometadata_nloelx.png",
            noLightbox: true,
            caption: {
              short: "Three layers assemble into a campaign: device, background, and copy. The system handles dimensions, localization, and compliance without the user touching the rules.",
              verbose: "This diagram shows the layered composition model at the core of Image Builder. A marketing operative selects a background gradient from a pre-organized folder, places a device PNG, and adds copy. The platform enforces brand rules: correct dimensions per format, character limits per market, compliant layouts. Non-designers can assemble market-ready campaign images without touching the underlying composition logic. Text generation and auto-translation are built into the same flow."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772133252/1326499e-dd49-4bbf-9d7e-0a82f84787e2.png",
            caption: { short: "Desktop and mobile variants generated from the same campaign configuration.", verbose: "" }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772062999/82224a14-60f5-4a43-8eae-4691b725ef61.png",
            caption: {
              short: "Device compositions assembled automatically. Previously a Photoshop task, now part of the same flow.",
              verbose: "For the first launch we built an interaction that allowed the system to assemble device compositions accurately. Previously this was done in Photoshop and shared async, making it impossible to automate."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772081260/1f882db6-e8bd-45c9-9514-7b4546850089.png",
            caption: {
              short: "Copy generated and translated across all active markets. Regeneration and manual edits are available when needed.",
              verbose: "We studied how marketers managed localized copy. We built a flow where the tool instantly generates copy that matches character limits and cultural context. A human can always regenerate or manually edit the text."
            }
          },

          // ── DESIGN AND BUILD ──────────────────────────────────────────
          { type: "heading", title: "Design and Build" },
          {
            type: "text",
            content: [
              "The first constraint was the audience. These weren't designers, so the interface couldn't behave like a stripped-down version of Photoshop. I kept layouts fixed and rules-based, automated copy and translation, and made the editing surface deliberately opinionated.",
              "The harder problem was scale. A campaign could span 23 markets, multiple languages, device families, and formats. I went through multiple rounds of layout and navigation exploration to find a structure that stayed understandable as those combinations multiplied.",
              "The guardrails took as much design work as the interface itself. I worked with Brand Studio and product line leads to map the ways a campaign could go wrong: a device that wasn't available in a market, a pricing conflict, a regional copy violation, or an unreleased product appearing where it shouldn't.",
              "Those rules became part of the product rather than something users had to remember. The system checked the work before export and surfaced problems while they could still be fixed.",
              "The project also resulted in three new components contributed to Meridian, Amazon's internal design system: an interactive editing canvas, a multi-select locale filter, and a warning input state."
            ]
          },
          {
            type: "image-full",
            layout: "side",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1771907702/layout_iterations_bwvimg.jpg",
            caption: { short: "Structuring multi-market configuration so the interface stayed clear regardless of how many combinations were active.", verbose: "" }
          },
          {
            type: "image-full",
            layout: "side",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1771893728/image_builder_contraintst_d4ha0z.jpg",
            caption: { short: "Export validation caught regional conflicts and spec violations before images reached a reviewer.", verbose: "" }
          },
          {
            type: "image-full",
            layout: "side",
            noLightbox: true,
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772130218/pg1_a1macp.png",
            caption: { short: "Interactive editing canvas. Built for Image Builder, contributed to Amazons design system.", verbose: "" }
          },
          {
            type: "image-full",
            layout: "side",
            noLightbox: true,
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772132465/pg1_uhrgx3.png",
            caption: { short: "Multi-select locale filter. Handles 23-market combinations in a compact control.", verbose: "" }
          },
          {
            type: "image-full",
            layout: "side",
            noLightbox: true,
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772132455/pg3_ygvgls.png",
            caption: { short: "Warning input state. Flags export-blocking issues inline instead of at a final validation step.", verbose: "" }
          },

          // ── LAUNCH AND ITERATION ──────────────────────────────────────
          { type: "heading", title: "Launch and Iteration" },
          {
            type: "text",
            content: [
              "We launched in March 2025 with two banner formats. The narrow scope helped us ship, but it also exposed problems we hadn't fully anticipated.",
              "The two formats required very different data inputs, and we hadn't accounted for all of that friction until users were working with them in production. We also made the deliberate decision to ship without drag-and-drop canvas support to hit the deadline. Users were locked into fixed layouts, which made the first version more frustrating than it needed to be.",
              "Those tradeoffs had a cost. By Prime Day, drag-and-drop was live and the tool had reached full adoption across all supported formats."
            ]
          },

          // ── RESULT ────────────────────────────────────────────────────
          { type: "heading", title: "Result" },
          {
            type: "impact-box",
            metrics: [
              { value: "~8,000", label: "Images generated for Prime Day 2025" },
              { value: "~48,000 hours", label: "Estimated production work replaced for one event" },
              { value: "45–50 FTE", label: "Estimated operational capacity freed in 2025" }
            ],
            description: [
              "8,000 images. 48,000 hours of production work replaced for a single event. 45 to 50 FTE of operational capacity freed.",
              "The numbers were clear enough to secure continued funding for the broader Asset System platform."
            ]
          }

        ]
      }
    },

    // PILLAR 2: ASSET MANAGER
    {
      id: "amazon-asset-manager",
      parentId: "amazon-asset-system",
      company: "Amazon Devices",
      title: CASE_STUDIES_TITLES["amazon-asset-manager"],
      impactSummary: "A centralized internal library that makes Amazon Devices marketing images easy to find, QA, and place across global markets. Shipping Q2 2026.",
      impactSummarySentence: "A centralized digital asset library that brought the entire Amazon Devices creative catalog under governance, making automated campaign publishing possible at global scale.",
      designerNote: "The UI is not the interesting part of this project. The interesting part is the systems thinking underneath: understanding how two fragmented global workflows actually operated, building the metadata structure and governance model they needed, then designing a platform both regions would trust enough to migrate to. The surface is the simplest layer. The architecture, the research, and the stakeholder alignment are where the real design work happened.",
      thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1785167948/hero_asset_browser_ee1vwu.png",
      status: "IN_BUILD",
      type: "INTERNAL",
      blocks: [
        {
          type: "callout-box",
          content: "Slated to ship Q2 2026. Replaces external QA tooling and gives NA and Europe a single, governed catalog for the first time."
        }
      ],
      details: {
        hero: {
          type: 'editorial',
          heroLeftImage: '', // TODO: upload left-cropped hero image
          heroRightImage: '', // TODO: upload right-cropped (taller) hero image
        },
        heroImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1785167948/hero_asset_browser_ee1vwu.png",
        role: "Lead UX Designer",
        timeline: "Ongoing (Estimated Q2 2026)",
        collaborators: "PM, 8 Engineers, Designer Ops, Brand leaders",
        type: "INTERNAL",
        blocks: [

          

          // 2. THE PROBLEM
          { type: "heading", title: "The Problem" },
          {
            type: "text",
            content: [
              "Marketing images for Amazon Devices were scattered across internal systems with no consistent naming, no access control, and QA handled through third-party tools outside the platform. The library feeding Image Builder was manually curated by a single person, so every asset in the pipeline depended on them getting it right."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772556411/asset-management-old_dpjrc3.png",
            caption: {
              short: "No metadata, no access control, external QA. One person manually curated the library feeding Image Builder."
            },
            deepDive: "Marketing images for Amazon Devices were scattered across multiple internal systems with no consistent naming and no access control. Teams reused outdated files, duplicated work across regions, and ran QA through third-party tools outside the platform. North America had built their entire workflow on Smartsheets because nothing inside the system was reliable enough to use. The library feeding the Image Builder was manually curated and uploaded by a single person — every asset in the pipeline depended on that person getting it right. It sounds chaotic, but for them it was actually quite efficient, which made the biggest challenge convincing teams to migrate to our system."
          },
          {
            type: "text",
            content: [
              "I interviewed marketers across EMEA and North America and brought working prototypes into the sessions. Their workflows were different, but both teams had stopped trusting the existing system. EMEA had built workarounds around missing features; North America had moved its asset workflow into Smartsheets entirely."
            ]
          },
          {
            type: "video",
            src: "https://res.cloudinary.com/diy08lj9x/video/upload/v1772557269/Meeting_Recording_-_JAS_Asset_Manager_UX_Walkthrough_u0mzb7.mp4",
            href: "https://res.cloudinary.com/diy08lj9x/video/upload/v1772556262/Meeting_Recording_-_JAS_Asset_Manager_UX_Walkthrough_u0mzb7.mp4",
            coverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772556370/Screenshot_2026-03-03_at_8.45.50_AM_qetqty.png",
            caption: {
              short: "Watching Luxemburg merchandisers work exposed problems interviews never would. The gap between EMEA and NA shaped the architecture.",
              verbose: "Sessions revealed EMEA's four hard blockers and North America's complete dependency on Smartsheets. The gap between the two regions shaped every architectural decision that followed."
            },
            aspectRatio: "16/9"
          },
          {
            type: "file-thumbnail",
            title: "UXR Report: Asset Browser Research",
            fileSize: "PDF",
            href: "https://drive.google.com/file/d/1aiyJ8up5Q85KTNIEU6Iyb4fiuKY4sY3G/view?usp=sharing"
          },

          // 3. THE SYSTEM
          { type: "heading", title: "The System" },
          {
            type: "text",
            content: [
              "The architecture separates Image Builder assets from manual uploads because the two needed different ways of being managed. Tile and table views support visual browsing and metadata-heavy work, while filters make it possible to narrow thousands of assets by device, campaign, locale, template, or QA status."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772585962/architecture_xw17mw.png",
            caption: { short: "The two-tab architecture. EMEA pushed for the split; mixing asset types forced users to track which rules applied when." },
            deepDive: "The core decision was how to handle two fundamentally different asset types: Asset system-generated images with rich metadata, and manually uploaded files with none. EMEA pushed for this separation. Their argument: the filter criteria differed enough between sources that mixing them forced users to track which rules applied when. The solution was two tabs with different interaction patterns."
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772586379/Views_shuapy.png",
            caption: { short: "Tile for visual scanning. Table for metadata density. EMEA gravitated toward the spreadsheet; designers preferred the gallery." },
            deepDive: "Two ways to look at the same catalog, built for different needs. Tile view puts the images front and center, useful when scanning for a specific visual or QAing image quality at a glance. Table view trades that for data: locale, template, dimensions, and QA status all sortable in columns, closer to a spreadsheet than a gallery. EMEA gravitated toward the table for metadata density. North America responded well to it too. Designers, naturally preferred the Tile view."
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772586894/Filters_tnevnj.png",
            caption: { short: "Once metadata was in place, filtering became the primary navigation. Finding an image went from asking someone to a few clicks." },
            deepDive: "Once assets had proper metadata, filtering became the main way people moved through the catalog. You could narrow by device type, campaign, locale, date, template type, and QA status simultaneously. For a global team managing thousands of images across 22 markets, that meant finding the right image for a specific campaign in seconds instead of scrolling through everything or asking someone who remembered where it lived."
          },

          // 4. DESIGN AND BUILD
          { type: "heading", title: "Design and Build" },
          {
            type: "text",
            content: [
              "Four rounds of exploration led to the current architecture. The final design brought the asset detail view and QA workflow into the same place, so marketers could find an image, understand its context, and review it without jumping between projects or tools."
            ]
          },
          {
            type: "image-full",
            layout: "side",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772558345/Explorations-old_amgyt0.png",
            caption: { short: "Early exploration. Persistent filters handled volume but mixed asset types without enough distinction.", verbose: "An early iteration with filters in a persistent right panel alongside a dense 4-column tile grid. The layout handled volume well but mixed system-generated and manually uploaded assets in the same view without enough visual distinction, creating confusion about which filter rules applied to which content." }
          },
          {
            type: "image-full",
            layout: "side",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772558344/Old_Exploration_2_agvjar.png",
            caption: { short: "Filter drawer. Cleaner, but the side panel ran out of room as requirements grew.", verbose: "Filter panel moved to a right-side drawer with locale chips surfaced on each asset group card. Cleaner than the flat tile approach, but the side panel ran out of space as filtering requirements grew and the drawer pattern added an extra step to every filter operation." }
          },
          {
            type: "image-full",
            layout: "side",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772558344/old_exploration_3_apwk1b.png",
            caption: { short: "Group detail view. Actions were buried and approval logic was unclear.", verbose: "Early group detail view with a side panel for asset metadata and approval. Actions were buried and the panel required too many clicks to reach from the main browser. Approval logic was also unclear about who could check what." }
          },
          {
            type: "image-full",
            layout: "side",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772558346/Exploration_4_wjsedf.png",
            caption: { short: "Flat tile vs grouped. The grouped model was a step forward but tiles were visually identical across both.", verbose: "Flat tile view on the left, grouped asset view on the right. The grouped model was a step forward for navigating related assets, but tiles were visually identical across both states and users could not tell what they were looking at without reading the labels." }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772587676/Detail_Panel_qlnlym.png",
            caption: { short: "Click an image, see everything: program, locales, dimensions, QA status, edit history. Actions live in the same view." },
            deepDive: "Clicking any image opens a full, immersive view of it alongside everything known about that asset: group, program, locales, creative type, dimensions, QA status, who uploaded it, and when it was last edited. Actions sit directly in this panel. It's designed to be a complete picture in one place, so you're not bouncing between tabs or tools to make a decision. For manually uploaded images, program name and locale are editable here, which unlocks filtering for that content type."
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772591484/178a10cd-4d5d-4b70-8066-a1cbfa73689c.png",
            caption: { short: "QA workflow. Filters pull assets from across groups into a single review panel. No more opening Image Builder one marketplace at a time." },
            deepDive: "Before this tool, reviewing images meant opening the Image Builder one marketplace at a time. There was no way to look across groups or consolidate assets for a batch review. The QA workflow we built moves that into the asset browser: apply filters for locale, template, or status, and the review panel pulls matching assets from across groups into a single view so a reviewer can work through them without context-switching between projects."
          },
          {
            type: "figma",
            src: "https://www.figma.com/proto/RalVHLTD2GOTo3DY91Ow8k/JAS-ASSET-MANAGER?page-id=85%3A22371&node-id=85-22884&viewport=-1498%2C-1342%2C0.07&t=PgdR2ntUXOpXVKPs-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=85%3A22884&show-proto-sidebar=1",
            caption: {
              short: "Build spec covering the full browsing, filtering, and QA flows, validated through EMEA and NA sessions.",
              verbose: "Developer-ready blueprint covering interaction logic, edge cases, and component states validated through EMEA and NA research."
            },
            coverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772592239/5958a787-a37d-410e-8821-1f8584a6a20c.png",
            aspectRatio: "16/9"
          },

          // 5. RESULT
          { type: "heading", title: "Result" },
          {
            type: "callout-box",
            content: "Slated to ship Q2 2026. The structure, metadata model, and governance framework are in place. When it launches, approved assets move directly into automated campaign publishing."
          }
        ]
      }
    },

    // PILLAR 3: METADATA STUDIO
    {
      id: "amazon-metadata-studio",
      parentId: "amazon-asset-system",
      company: "Amazon Devices",
      title: CASE_STUDIES_TITLES["amazon-metadata-studio"],
      impactSummary: "Proved AI could automate the 30 to 90 metadata inputs required per image for global compliance, changing the product direction from manual entry to AI-assisted workflows.",
      impactSummarySentence: "An AI-first internal tool that automatically extracts image metadata to enforce global legal, cultural, and regional compliance at scale.",
      thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772414317/Background_metadata-thumbnail_pgfkp6.png",
      status: "IN_BUILD",
      type: "INTERNAL",
      blocks: [],
      details: {
        hero: { type: "editorial" },
        heroImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772414394/Background_metadata-wide_vbd1rh.png",
        role: "Lead UX Designer",
        timeline: "August 2025 to Today",
        collaborators: "PM, ML Engineers, Data Science, Compliance",
        type: "INTERNAL",
        blocks: [

          // ── DESIGNER NOTE ───────────────────────────────────────────
          {
            type: "text",
            subtype: "designer-note",
            content: [
              "We all knew that entering 30 to 90 metadata points for every image was tedious. But this was proprietary Amazon data, and we couldn't use external AI tools to do the work for us. The manual effort was the tradeoff we'd accepted to build a system around knowledge that only Amazon had.",
              "I wanted to see where that tradeoff was actually necessary. I built a series of small experimental tools to test what AI could infer from images, what it couldn't, and where it was reliable enough to be useful. The results weren't always successful, but they gave me enough evidence to start separating the work AI could take on from the work that still needed a person."
            ]
          },

          // ── THE PROBLEM ──────────────────────────────────────────────
          { type: "heading", title: "The Problem", hasDivider: false },
          {
            type: "text",
            content: [
              "Every component image uploaded to the system required between 30 and 90 metadata points. This metadata was necessary for global legal, cultural, and regional compliance. An EU asset legally needed to show the correct power plug. UAE marketing could not feature dogs. A US-licensed movie UI could not appear on a Brazilian Echo Show. Without the right metadata, a single wrong image in the wrong market created an immediate legal or brand incident.",
              "The work was manual, the team was small, the data was proprietary, and external AI tools were not an option. The manual metadata requirement had become the single largest bottleneck in the asset pipeline."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772412234/Background_metadata_cphwlh.png",
            layout: "side",
            caption: {
              short: "The manual upload UI for an AI-ready background image. A single asset could require up to 90 metadata inputs before it was ready for the system."
            }
          },

          // ── THE BET ──────────────────────────────────────────────────
          { type: "heading", title: "The Bet" },
          {
            type: "text",
            content: [
              "We all knew that entering 30 to 90 metadata points for every image was tedious. But this was proprietary Amazon data, and we couldn't use external AI tools to do the work for us. The manual effort was the tradeoff we'd accepted to build a system around knowledge that only Amazon had.",
              "I wanted to see where that tradeoff was actually necessary. I built a series of small experimental tools to test what AI could infer from images, what it couldn't, and where it was reliable enough to be useful. The results weren't always successful, but they gave me enough evidence to start separating the work AI could take on from the work that still needed a person."
            ]
          },

          // ── DESIGN AND BUILD ──────────────────────────────────────────
          { type: "heading", title: "Design and Build" },
          {
            type: "text",
            content: [
              "To focus engineering efforts, I mapped the various component image types against their metadata requirements and potential for AI automation. This matrix became my framework for deciding where AI could replace manual metadata work, where it couldn't, and where engineering effort was worth investing."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772411473/metadata-chart_nrud3c.png",
            layout: "side",
            caption: {
              short: "My framework for prioritizing where AI could replace manual metadata work, and where it couldn't."
            }
          },
          {
            type: "text",
            content: [
              "With the matrix identifying the highest-value opportunities, I tested specific possibilities through small, experiments and prototypes. Not everything worked. A mini-tool I built to blindly classify raw component images failed. But another prototype successfully matched component images to predefined visual variants, proving the concept was viable. These weren't abstract explorations — they were concrete, hands-on tools built to make the argument with evidence before asking Engineering to invest in production functionality. This was early 2025, when AI capabilities were significantly less mature than they are now."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772411602/Screenshot_2026-03-01_at_4.32.55_PM_zlbqvz.png",
            layout: "side",
            caption: {
              short: "A failed experiment: an AI tool I built to classify raw component images without relying on existing metadata."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772411765/fa9dccd2-7490-4215-b420-35251e6044b7.png",
            layout: "side",
            caption: {
              short: "A small prototype that successfully matched component images to predefined visual variants."
            }
          },
          {
            type: "text",
            content: [
              "The experiments established what was technically feasible, and the resulting product direction reduced the metadata users needed to provide manually. Critical metadata is shown first. Deeper metadata is available through progressive disclosure when needed. The user is not overwhelmed by 30–90 fields at once. AI is used where it can reliably infer information, and human input remains where it is still necessary.",
              "A screen mapper tool was introduced to give the AI the spatial information needed to place screen content correctly on physical devices. Users define the digital boundary on a physical device, and the system translates that into coordinate data for dynamic composition."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772411818/7e25e02b-1a0c-4458-81f8-e22044a1df9c.png",
            layout: "side",
            caption: {
              short: "Users drew boundaries on devices. The system translated those into spatial coordinates the AI could use."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772412003/8fc680db-a6b5-4c46-ba00-f12af55faab4.png",
            layout: "side",
            caption: {
              short: "A concept for the Admin Tool. The question: how much metadata could AI handle so users didn't have to?"
            }
          },

          // ── RESULT ────────────────────────────────────────────────────
          { type: "heading", title: "Result" },
          {
            type: "text",
            content: [
              "The experiments proved AI could handle enough of the metadata burden to change the product direction. Product, Engineering, Data Science, Compliance, and Brand aligned around a shared roadmap. Three capabilities greenlit: Visual Variant Attribution, Devices Screen Mapper, and AI-First Screen Image Uploader.",
              "The screen mapper and AI composition work proved localized screen content can be placed into device imagery correctly. The remaining work, the UI for mechanized metadata ingestion, is in build."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772411928/4553de5d-0c9d-41d0-b126-bf3db07e532d.png",
            layout: "side",
            caption: {
              short: "Lord of the Rings placed inside an Echo Show via AI composition. Same process localizes screen content while preserving perspective, shadows, and glare."
            }
          }
        ]
      }
    },
    
    
   
    // PILLAR 4: AI LIFESTYLE COMPOSITOR
    {
  id: "amazon-ai-compositor",
  parentId: "amazon-asset-system",
  company: "Amazon Devices",
  title: CASE_STUDIES_TITLES["amazon-ai-compositor"],
  impactSummary: "Built an in-house AI compositor trained on proprietary device data, then designed the human-in-the-loop system that taught the model what success looked like.",
  impactSummarySentence: "Built an in-house AI compositor trained on proprietary Amazon device data, and designed the review system that turned Creative Director judgment into training signal.",
  designerNote: "This project sits at the intersection of AI systems and design craft. Teaching a model what 'good' looks like required a feedback taxonomy, a sampling model, and a review interface that Creative Directors would actually use. It was also the first time I shipped production UI using an AI-assisted coding workflow, building directly with Engineering instead of handing off static files.",
  thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1785079389/hero-image_h61hdi.png",
  status: "LAUNCHED",
  type: "INTERNAL",
  blocks: [
    
  ],
  details: {
    hero: {
      type: 'editorial',
      heroLeftImage: 'https://res.cloudinary.com/diy08lj9x/image/upload/v1785086067/hero-left_zlmffw.png',
      heroRightImage: 'https://res.cloudinary.com/diy08lj9x/image/upload/v1785086066/hero-right_lrgz9e.png',
    },
    heroImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1785079389/hero-image_h61hdi.png",
    role: "Lead UX Designer",
    timeline: "December 2024 to March 2025",
    collaborators: "1 PM, 2 ML Engineers, 1 Creative Director, 2 Engineers",
    type: "INTERNAL",
    blocks: [

      // ── DESIGNER'S NOTE ───────────────────────────────────────────
      {
        type: "text",
        content: [
          "3D lifestyle imagery is one of the most complex image types to produce. Once GenAI made it possible to generate them at scale, the challenge became teaching the model what 'good' looked like. I designed the human-in-the-loop system that turned Creative Director feedback into training signal, defining the feedback taxonomy, sampling model, and review interface. This was also my first time shipping code, using an MCP-powered Figma-to-code workflow to build directly with Engineering."
        ],
        subtype: "designer-note"
      },
      {
        type: "figma",
        src: "https://www.figma.com/proto/u5gNazpXiOCPbn8tiH5ACU/JASAI?page-id=1438%3A5102&node-id=40000015-16958&viewport=324%2C-1055%2C0.14&t=LvK2dm3PYrsudLBc-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=40000015%3A16958",
        caption: {
          short: "Review and approval experience.",
          verbose: ""
        },
        coverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772665456/a7ec2337-4f73-4b0c-932f-b66e6b73190d.png",
        aspectRatio: "16/9"
      },

      // ── THE PROBLEM ──────────────────────────────────────────────
      { type: "heading", title: "The Problem", hasDivider: false },
      {
        type: "text",
        content: [
  "Lifestyle imagery converted about 70% better than gradient backgrounds (source: internal). Image Builder produced gradients at scale. Lifestyle imagery required 3D artists, photographers, and editors. Across thousands of device families, markets, and languages, that was unsustainable.",
  
  "Amazon devices are confidential hardware, so external AI tools weren't an option. We first tested an internal image generation tool built by the Amazon Home team to place furniture in home environments. But the model had no knowledge of our devices, and the results were off: an Echo Pop placed in a room had the wrong perspective, scale, and shadows."
]
      },
      {
        type: "image-full",
        src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1785165421/comparisong-vertical_ww0kcw.png",
        layout: "side",
        caption: {
          short: "Gradient backgrounds scaled easily. Lifestyle backgrounds converted about 40 percent better. The production cost was the barrier.",
          verbose: ""
        },
        deepDive: "This Fire TV campaign built in Image Builder compares a standard gradient background against an AI-generated lifestyle scene. By placing the device in a realistic setting, the campaign aims for the 40% higher CTR typically seen with lifestyle imagery over basic product shots."
      },
      {
        type: "image-full",
                src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772667460/1273f947-b73f-4af2-b036-dee49ef913f0.png",
                layout: "side",
                caption: {
          short: "The furniture tool placed an Echo Pop in a room. Wrong perspective, flat device, mismatched shadows. The model simply did not understand our hardware.",
          verbose: ""
        },
        deepDive: "We put an Echo Pop into a room scene, but the results were off: the perspective was wrong, the device looked flat, and the shadows didn't match. The model simply didn't understand Amazon devices. Our proprietary device data, including camera angles, surface materials, shadow behavior, and screen reflections for each device family, only exists inside Amazon. No external tool could be trained on that data at the scale we needed, so we had to build the model in-house from scratch."
      },

      // ── THE SYSTEM ────────────────────────────────────────────────
      { type: "heading", title: "The System" },
      {
        type: "text",
        content: [
  "We built an in-house AI compositor trained on Amazon's proprietary device data: camera angles, materials, shadows, and screen reflections specific to each device family. Design technologists prepared background scenes with structured metadata, while Creative Directors reviewed generated variations and approved or rejected them with tagged reasons.",
]
      },
      {
        type: "image-full",
        src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1773290008/layers-metadata_sfcohu.png",
        layout: "side",
        caption: {
          short: "Every layer carries structured metadata. The device knows its product family. The background knows its environment type. The screen knows its campaign.",
          verbose: ""
        },
        deepDive: "This diagram shows what changes between Image Builder v1 and the AI Lifestyle Compositor. In v1, layers were static files: a device PNG, a gradient, copy. In the compositor, every layer carries structured metadata. The device image knows its product family and brand-mandated camera angle. The background scene knows its environment type. The screen image knows which campaign it belongs to. That metadata is what allows the system to assemble contextually correct lifestyle images automatically, across thousands of SKUs, without a designer directing each one."
      },

    
      
      {
        type: "list",
        items: [
          {
            content: "",
            visuals: [
              {
                kind: "image",
                src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772664107/techinical_doc_jrqkte.png",
                layout: "side",
                caption: { short: "Brand-mandated camera angles, shadow rules, and copy space documented per device family. Turned into training data.", verbose: "" },
                deepDive: "Before anything could be generated, the model needed rules. How a TV sits in a living room is not the same as how a smart speaker sits on a kitchen counter. Also, camera angles are brand-mandated per device family — Blink vs Ring have their own set of rules, for example. Taking account of basic physics, shadows and reflections depend on surface material. Copy space has to be preserved. We worked with Brand Studio and engineering to write them down and turn them into training data."
              },
              {
                kind: "image",
                src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772663942/Echo_show_-_nightstand_udihhr.png",
                layout: "side",
                caption: { short: "Echo Show in a defined scene with copy space. The model needed to know where text belonged before placing it.", verbose: "" }
              }
            ]
          }
        ]
      },
      {
        type: "text",
        content: [
  
  "However, the model still needed a feedback loop to gauge what good looked like. I worked with Brand Studio, Engineering, and Data Science to translate device-specific knowledge into training data and define the feedback taxonomy. I then designed the human-in-the-loop review system that captured Creative Director judgment, with each round of feedback improving the model and reducing the human review needed for the next."
]
      },
      {
        type: "list",
        items: [
          {
            content: "",
            visuals: [
              {
                kind: "image",
                src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772670917/rejection_reasons_cyhn9l.png",
                layout: "side-lightbox",
                caption: { short: "Each rejection carried a tagged reason. Bad shadow, wrong perspective, device unrecognizable. Categories defined with Data Science before the form existed.", verbose: "" },
                deepDive: "Working with Data Science, we had to define what a rejection meant before we could build the form to capture it. Bad shadow, incorrect perspective, wrong environment, device unrecognizable, lighting mismatch, etc. Those categories came out of sessions mapping what went wrong in early outputs. The copy was harder than the categories. We were asking Creative Directors to tag images they were already skipping. I went through several versions and landed in something similar to this image."
              }
            ]
          }
        ]
      },

      // ── DESIGN AND BUILD ──────────────────────────────────────────
      { type: "heading", title: "Design and Build" },
      {
        type: "text",
        content: [
  "The review experience had to feel natural for Creative Directors while capturing feedback useful enough to improve the model. Early explorations relied on ambiguous color-coded status controls, eventually shifting to explicit rejection reasons defined with Data Science and Creative.",
  "The same interface was also a chance to rethink how design and engineering could work together. The batch review experience was built directly with Engineering using an MCP-powered Figma-to-code workflow, and the process was later shared with 14 designers in a hands-on workshop."
]
      },
      {
        type: "list",
        items: [
          {
            content: "",
            visuals: [
              {
                kind: "image",
                src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772671746/565c0c1b-f554-49f5-a4ce-ef5739234bf8.png",
                layout: "side-lightbox",
                caption: { short: "Color-coded toggles. Ambiguous, not accessible, and violated Meridian compliance. The concept taught us what not to build.", verbose: "" },
                deepDive: "A few explorations where I went wide and unconventional to design a flow that seemed useful for science and non-intrusive for design directors. The early color-coded status toggles made rejection states ambiguous. Reviewers couldn't tell at a glance whether something was approved, rejected, or pending. The colors also violated Meridian compliance requirements, which meant the component couldn't ship inside Amazon's design system."
              },
              {
                kind: "image",
                src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772670918/confusing_kxavxq.png",
                layout: "side-lightbox",
                caption: { short: "Explicit labels replaced colors. Every state readable at a glance, Meridian compliant, no decoding required.", verbose: "" },
                deepDive: "I shifted to explicit labels and reason-based feedback. The revised design removed color dependency entirely — every state was communicated through text labels, making it accessible and Meridian-compliant. This also solved a deeper UX problem: Creative Directors could now see exactly why something was rejected without having to decode a color system."
              }
            ]
          }
        ]
      },
      {
        type: "figma",
        src: "https://www.figma.com/board/AyhfswFqoiE1YRpW18tPly/figma-to-AI?node-id=0-1&t=4gIRsk4ka32ItUTC-1",
        caption: {
          short: "Shared the MCP-powered Figma-to-code workflow with 14 designers in a hands-on workshop after shipping the review interface.",
          verbose: "In August 2025, I started experimenting with Figma-to-code through MCP, feeding design files into an AI-assisted process that generated working React. This project was where the experiment became real product code. The batch review interface was built directly with Engineering using that workflow, with plenty of terminal crashes and angry GitHub comments along the way. It fundamentally changed how I work with engineers from that point forward."
        },
        coverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772669102/6474aa06-edba-41a6-9eee-195d7fe8930b.png",
        aspectRatio: "16/9"
      },

      // ── RESULT ────────────────────────────────────────────────────
      { type: "heading", title: "Result" },
      {
        type: "text",
        content: [
          "12,000 variations per batch. Creative Directors reviewed a 5 percent sample. As the model improved, review decreased. Batch one: 3,000 market-ready lifestyle assets, about 10 hours of human review."
        ]
      },
      {
        type: "impact-box",
        metrics: [
          { value: "3,000", label: "Market-ready lifestyle assets generated by AI and curated by Creative Directors" },
          { value: "~10 hours", label: "Human review for 12,000 generated variations" }
        ],
        description: []
      },
      {
        type: "image-full",
        src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772662326/firetv-lifestyle_dlyenh.png",
        caption: {
          short: "End-to-end: four variations per prompt, 5 percent sample per batch, tagged rejection reasons fed back as training signal.",
          verbose: ""
        },
        deepDive: "The system generated four variations per prompt. Creative Directors reviewed batches and either selected the best option or rejected the set with a tagged reason. A 5% random sample was enough to represent a full batch. Creative Directors were averaging 4 minutes per review session. Leadership flagged it, but what looked slow was the model learning — each calibrated batch reduced how much review the next one needed.\n\nBatch 1: 12,000 variations generated, 600 images reviewed (5% sample), 150 review sessions, ~10 hours\nBatch 2: 12,000 variations generated, 300 images reviewed, 75 review sessions, ~5 hours\nBatch 3: 12,000 variations generated, 150 images reviewed, 38 review sessions, ~2.5 hours\nBatch 4+: 12,000 variations generated, 75 images reviewed, 19 review sessions, ~1.25 hours"
      }

    ]
  }
},

    // INSPIRE TAB
    {
  id: "amazon-inspire-tab",
  company: "Amazon Devices",
  title: CASE_STUDIES_TITLES["amazon-inspire-tab"],
  impactSummary: "Led the Smart Home vertical on Amazon Inspire, owning the ranking strategy, feed CX, and creator tooling that made device discovery trustworthy at scale.",
  impactSummarySentence: "Led the Smart Home vertical on Amazon Inspire, owning the ranking strategy, feed CX, and creator tooling that made device discovery trustworthy at scale.",
  designerNote: "Recommendations in the Smart Home category have to be accurate. A badly informed purchase erodes trust in the entire discovery surface. I owned the interaction patterns, content strategy, and the ranking logic I built with data science. My background from Patreon and Prox made the creator side natural because I had a clear understanding on how creators think about monetization and audience.",
  thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772307603/main_feed_cx_vc0uaq.png",
  thumbnailPadding: "p-8",
  status: "DEPRECATED",
  type: "MOBILE",
  blocks: [
    {
      type: "impact-box",
      metrics: [
        { value: "13.5M", label: "Lift of units sold worldwide attributed to the feature" }
      ]
    }
  ],
  details: {
    hero: { type: "animated" },
    heroImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772307603/main_feed_cx_vc0uaq.png",
    role: "UX Lead, Smart Home Devices",
    timeline: "Late 2022 to Early 2025",
    collaborators: "PM, Data Science, ML Engineers, Creator Partnerships",
    type: "MOBILE",
    blocks: [
      { type: "heading", title: "Overview", hasDivider: false },
      {
        type: "text",
        content: [
          "Inspire was Amazon's TikTok-style shopping feed, built inside the main app. Photo and video content from influencers and verified buyers, all shoppable. I led the Smart Home Devices vertical: the interaction system, what surfaces in the feed and how, and the creator tooling, a space I knew well from Patreon and building Prox.",
          "Smart Home is not a category you can rank by engagement alone. A customer buying the wrong smart bulb because a video looked good is a trust problem, not a conversion win. The feed needed to know device type, ecosystem compatibility, and customer context before surfacing anything."
        ]
      },
      
      {
        type: "video",
        src: "https://www.youtube.com/embed/ULOuVqjdy3c",
        href: "https://www.youtube.com/watch?v=ULOuVqjdy3c",
        coverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772307603/main_feed_cx_vc0uaq.png",
        caption: { short: "Interactive prototype for the Smart Home Devices vertical on Amazon Inspire.", verbose: "" },
        aspectRatio: "16/9"
      },

      { type: "heading", title: "The Problem" },
      {
        type: "text",
        content: [
          "While for most categories, optimizing for engagement generally worked, for Smart Home, a bad recommendation had severe implications. To show the customer relevant products, the ML ranking needed to account for device type, ecosystem compatibility, and customer context/ownership."
        ]
      },

      { type: "heading", title: "Strategy" },
      {
        type: "text",
        content: [
          "I worked with data science to shape how Smart Home taxonomy fed into ranking. Compatibility and device type signals had to carry real weight in the algorithm. On the surface, I owned the CX decisions that determined how device content read at feed speed."
        ]
      },

      { type: "heading", title: "Interaction System" },
      {
        type: "text",
        content: [
          "I designed the full interaction spec across five distinct views: landing, two sub-feed states, and two tag-drilled states. Each has its own navigation behavior, back-stack rules, and configurable layout variables.",
          "Tag navigation drives the sub-feed architecture. Some concepts explored testing tag placement at top vs. bottom of screen."
        ]
      },
      {
        type: "image-full",
        src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1778772693/Navigation_interactions_vjgv2e.png",
        caption: {
          short: "Feed architecture across five views: landing, sub-feed landing, sub-feed immersive, and tag-drilled states.",
          verbose: ""
        }
      },

      { type: "heading", title: "Component Specs" },
      {
        type: "text",
        content: [
          "I documented each component interaction states. The main container responds to swipe up/down and tap to toggle chrome. Product thumbnails scroll as carousels and tap to a quick view sheet. Video controls appear only when media type is video."
        ]
      },
      {
        type: "image-full",
        src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1778773220/basic_interactions_fvgvua.png",
        caption: {
          short: "Basic interactions spec: component anatomy, gesture map, and chrome behavior for the main feed view.",
          verbose: ""
        }
      },
      {
        type: "text",
        content: [
          "Creator text truncates to one line by default. Tapping expands in an overlay. When text is scrolling, gesture zones split: inside scrolls the description, outside advances to the next piece of content. That required explicit touch area documentation to hand off without ambiguity."
        ]
      },
      {
        type: "image-full",
        src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1778773523/creator_lookup_expanded_tyrxhs.png",
        caption: {
          short: "Creator lockup expanded state: touch areas and behavior when navigating away and returning.",
          verbose: ""
        }
      },
      {
        type: "image-full",
        src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1778773487/creator_lookup_scrolling_logic_bcub6k.png",
        caption: {
          short: "Gesture zone logic for scrolling vs. non-scrolling text states.",
          verbose: ""
        }
      },

      { type: "heading", title: "Creator and Reviewer Trust System" },
      {
        type: "text",
        content: [
          "Two distinct content types, different trust signals. Verified creators show a blue checkmark, Earns Commissions label, and link to a creator storefront. CGC reviewers show star rating, verified purchase status, and link to a customer profile.",
          "Tapping Earns Commissions triggers a bottom sheet disclosure. I designed this flow to meet the requirement without interrupting the shopping experience."
        ]
      },
      {
        type: "image-full",
        src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1778773688/earns_comission_influecner_program_eom1nn.png",
        caption: {
          short: "Earns Commissions disclosure flow: trigger, bottom sheet, and handoff to Amazon Influencer Program.",
          verbose: ""
        }
      },

      { type: "heading", title: "Working with Creators" },
      {
        type: "text",
        content: [
          "Amazon has the Influencer Program. And this feature amplified their revenue stream. The opportunity for creators was a direct commission path on one of the highest-traffic shopping surfaces in the world. I designed the tooling that let them attach products to content, structure their offers, and identify their top sellers. In sessions with creator partners, the work was helping them treat the feature as a storytelling opportunity and build content around what was actually converting."
        ]
      },
      {
        type: "image-full",
        src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772307600/creator_tool_bfammp.png",
        caption: {
          short: "Creator tool flow: ASIN attachment and product association controls.",
          verbose: ""
        }
      },

      { type: "heading", title: "Impact" },
      {
        type: "impact-box",
        metrics: [
          { value: "2.5%", label: "Lift in total Amazon Devices units sold worldwide attributed to the Inspire tab" },
          { value: "13.5M", label: "Device units sold worldwide attributed to the feature" }
        ],
        description: [
          "At Amazon's device sales volume, a 2.5% lift represents roughly 13.5M units."
        ]
      },
      {
        type: "text",
        content: [
          "On the creator side, Amazon Influencer commissions range from 1% to 10% per sale, with dedicated creators earning $1,000 to $5,000+ per month. Our top creators saw measurable income growth after we restructured how they attached products to content.",
          "Inspire was deprecated in early 2024 as Amazon shifted toward conversational search. The interaction system and creator tooling informed how the org approached catalog integrity on later projects."
        ]
      }
    ]
  }
},

    // AI-POWERED CUSTOMER REVIEW HIGHLIGHTS
    {
      id: "amazon-ai-review-highlights",
      company: "Amazon Core Shopping",
      title: CASE_STUDIES_TITLES["amazon-ai-review-highlights"],
      impactSummary: "Explored and designed new applications for Amazon's AI-generated review highlights to drive product discovery across the Smart Home category.",
      impactSummarySentence: "Explored and designed new applications for Amazon's AI-generated review highlights to drive product discovery across the Smart Home category.",
      designerNote: "Amazon launched AI-generated review highlights as a company-wide capability. Leadership asked me to figure out what that could mean specifically for Smart Home customers. This kind of work sit in an interesting space because we wouldn't be building from scratch nor implementing someone else's spec with all the baggage that that implies. Thankfully, our org had always had certain room and influence to break away from company-level initiatives, so we were asked to ideate yet new ways to showcase this technology.  The artifacts shown below are the exact slides I used to pitch these concepts to leadership, reflecting how product strategy and design communication actually happen at Amazon. One concept shipped, and two moved to the roadmap upstream at the org and company level.",
      thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772333741/aihighlights-stockimage_tfee9p.jpg",
      status: "LEGACY",
      type: "MOBILE",
      blocks: [
        {
          type: "callout-box",
          content: "Contributed to the global AI-powered review highlights feature."
        }
      ],
      details: {
        hero: { 
          type: 'static', 
          bgColor: '#0f1319',
          // Notice there is no base "pt-" class. It only kicks in on tablet/desktop.
          topPadding: 'md:pt-[80px] lg:pt-[120px]' 
        }, // Switched to static, added dark background
        heroImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772333749/videohighlights-hero_pww6ch.png",
        role: "UX Lead, Smart Home Devices",
        timeline: "2023 to 2024",
        collaborators: "PM, Data Science,3 UX Designers, Brand leaders, VPs",
        type: "MOBILE",
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "text",
            content: [
              "Amazon launched AI-generated review highlights as a platform-wide capability, surfacing a short AI-written paragraph on product detail pages that summarized common themes across customer reviews. Leadership asked me to explore how our Smart Home Devices team could leverage this feature for our specific customers and business goals.",
              "Customer reviews are one of the most important inputs to a purchase decision, but at Amazon's scale, they create their own problem. Customers want social proof, but not the work of reading through hundreds of reviews to find it. My job was to figure out where AI summarization could create the most value for Smart Home customers specifically."
            ]
          },
          { type: "heading", title: "The Problem" },
          {
            type: "text",
            content: [
              "Internal data showed customers felt overwhelmed by large numbers of reviews and wished the information was summarized for them. For Smart Home specifically, this problem was compounded: customers were not just evaluating sentiment, they were trying to extract compatibility and use-case signals from unstructured review text.",
              "The platform's new AI capability solved the summarization problem globally on the product detail page. The open question was how to bring it into other Smart Home surfaces in a way that served our customers and supported our commercial goals."
            ]
          },
          { type: "heading", title: "Exploration Concepts" },
          {
            type: "text",
            content: ["I designed three applications of the AI review highlights feature for Smart Home, each targeting a different surface and a different moment in the customer journey."]
          },
          {
            type: "list",
            items: [
              {
                content: `<b>Concept 1: Homepage Widget</b><p class="mt-2">The idea was to bring AI-generated review sentiment upstream into the homepage, before a customer had even selected a product. Top-selling Smart Home devices surfaced alongside an LLM-generated headline and the most praised attributes across that product line, turning social proof into a discovery driver. This concept successfully shipped.</p>`,
                visuals: [
                  { kind: "image", src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772333744/Customer-led_recomm_zjzr4k.png", isPresentation: true, caption: { short: "Leadership pitch slide detailing the Homepage Widget concept and AI attribute mapping.", verbose: "" } },
                  { kind: "image", src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772333746/earlier_exploratios_ayvho7.png", isPresentation: true, caption: { short: "Earlier explorations for integrating AI highlights.", verbose: "" } },
                  { kind: "image", src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772333745/concept_designs_cimw0c.png", isPresentation: true, caption: { short: "Shipped homepage widget layout with product line attribute summary.", verbose: "" } }
                ]
              },
              {
                content: `<b>Concept 2: Immersive Video Feed</b><p class="mt-2">Our Smart Home team had built an experience surfacing videos for products relevant to a customer's interests. I designed a method to merge top video reviews with our propensity models, then explored how AI-generated review highlights could be layered into that immersive surface.</p>`,
                visuals: [
                  { kind: "image", src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772333748/video_shopping_lg1kzn.png", isPresentation: true, caption: { short: "Pitch slide showing the immersive video feed context where review highlights would surface.", verbose: "" } }
                ]
              },
              {
                content: `<b>Concept 3: ASIN Cards</b><p class="mt-2">A third concept applied AI review highlights at the product card level, earlier in the funnel than the detail page. Each card surfaced an LLM-generated benefit message and curated customer quotes. The framing was that the voice of the customer generates the value message, removing the need for standard marketing copy.</p>`,
                visuals: [
                  { kind: "image", src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772333743/Asin_Cards_slide_komzef.png", isPresentation: true, caption: { short: "Customer benefit ASIN Cards concept pitched to leadership.", verbose: "" } },
                  { kind: "image", src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772333747/ASIN_CArds_sjoxpd.png", isPresentation: true, caption: { short: "Finalized ASIN card UI designs.", verbose: "" } }
                ]
              }
            ]
          },
          { type: "heading", title: "Outcome & Reflection" },
          {
            type: "callout-box",
            content: "Contributed to the global Ai-powered review highlights feature."
          },
          {
            type: "text",
            content: [
              "The most useful thing a designer can do with a new platform capability is ask who it actually helps and where. Not every feature belongs on every surface. Designing three applications of the same capability forced a useful discipline: each concept had to justify itself on its own terms.",
              "This project reinforced how much leverage there is in being the person who translates a broad platform capability into a specific team's context. The AI feature existed, allthough was new to everyone. My design work was finding where they intersected with enough precision to be worth building."
            ]
          }
        ]
      }
    },

    // ALTO INTERNAL TOOLS
    {
      id: "alto-internal-tools",
      company: "Alto Pharmacy",
      title: CASE_STUDIES_TITLES["alto-internal-tools"],
      impactSummary: "Redesigned the internal messaging and action system for a scaling digital pharmacy, reducing communications per shipment below 1.0 for the first time.",
      impactSummarySentence: "A redesigned internal platform that helped a pharmacy operations team resolve patient requests faster, with less friction and fewer workarounds.",
      designerNote: "Alto was scaling fast, but the internal tools hadn't kept up. Pharmacists and care specialists were stitching together Wunderbar, Marcia Notes, Notion, spreadsheets, and Slack just to resolve a single patient request. The system worked, but it placed the burden on people instead of the product. The goal was to change that: surface the right context, reduce the time it took to act, and give the team tools that matched how they actually worked. The most honest outcome was an MVP that improved Marcia Notes and got action cards onto the roadmap, with a North Star that aligned the org around where to go next.",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      status: "LEGACY",
      type: "INTERNAL",
      blocks: [
        {
          type: "impact-box",
          metrics: [
            { value: "18%", label: "Reduction in communications per shipment vs control groups" },
            { value: "11,000+", label: "Patients across the platform" }
          ]
        }
      ],
      details: {
        hero: { type: 'animated' },
        heroImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144386/AAWB_message-action_nen3sq.gif",
        heroCoverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144384/Untitled_3_ajvo9r.png",
        role: "Product Designer",
        timeline: "2020 to 2022",
        collaborators: "PM, 5 Engineers, Operations, Fulfillment team",
        type: "INTERNAL",
        services: [
          SERVICES.PRODUCT_DESIGN,
          SERVICES.UX_RESEARCH,
          SERVICES.SYSTEMS_DESIGN,
          SERVICES.PROTOTYPING,
          SERVICES.STRATEGY
        ],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          { type: "heading", title: "The Product" },
          {
            type: "text",
            content: [
              "Alto Assistant is an internal platform built to help Care Specialists resolve patient requests faster and with more confidence. The work centered on Wunderbar, Alto's operational backbone, and its legacy messaging interface, Marcia Notes."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144386/Marcia_Notes__d4kfqz.gif",
            caption: {
              short: "Wunderbar and Marcia Notes, Alto's internal pharmacy operating system.",
              verbose: "Marcia Notes was originally built in 2015 and had become the central interface for turning inbound patient messages into actions. Over time, features were layered on without a cohesive interaction model, and resolving a single issue often meant scrolling through a prescription's full lifecycle to reconstruct context. The system worked, but it placed a heavy cognitive burden on the people using it."
            }
          },

          { type: "heading", title: "The Problem" },
          {
            type: "text",
            content: [
              "By 2021, internal teams were navigating a fragmented toolchain, Wunderbar, Marcia Notes, Notion, spreadsheets, and Slack, just to complete day-to-day work. The system wasn't broken. It just didn't help users understand what mattered, what needed action, or how to resolve a task confidently. That gap increased handling time, slowed onboarding, and eroded trust in the tools."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144387/scattered_docs_tc6wtq.png",
            caption: {
              short: "The fragmented toolchain teams were navigating to complete a single task.",
              verbose: "Critical information lived outside the system, forcing pharmacists and fulfillment teams to context-switch constantly, rely on tribal knowledge, and improvise their own coordination methods. At the time, it took roughly eight months for someone to feel proficient in the tools, in a role with an average tenure of thirteen months."
            }
          },

          { type: "heading", title: "Goals" },
          {
            type: "text",
            content: [
              "Three priorities shaped the direction: improve first-contact resolution so Care Specialists could act without follow-up; reduce time to resolution while preserving the ability to handle complex cross-functional cases; and maintain a consistent patient experience without relying on heroics or external coordination tools.",
              "Alto also lacked reliable instrumentation to track metrics like first-contact resolution or time-to-resolution, actions weren't clearly structured in the system, so none of it was measurable yet. Establishing that baseline became part of the work."
            ]
          },

          { type: "heading", title: "Research" },
          {
            type: "text",
            content: [
              "The team ran foundational research alongside early wireframe testing to identify which capabilities a redesigned system would actually need. Twelve usability sessions were conducted with pharmacists and operations staff across departments, tenure levels, and seniority."
            ]
          },
          {
            type: "figma",
            src: "https://www.figma.com/proto/mec6VArSZvtpfrbp0ZUg6b/Alto-Assistant-Wunderbar?page-id=399%3A64080&node-id=399-65346&viewport=772%2C560%2C0.13&t=AA5tliTi8OqZo81U-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=399%3A65346&show-proto-sidebar=1",
            caption: {
              short: "Prototype flows used during usability testing, click through to explore.",
              verbose: "These prototypes were built to test foundational interaction models with Care Specialists before any significant engineering investment. Sessions focused on validating which structural approaches reduced cognitive load."
            },
            coverImage:"https://res.cloudinary.com/diy08lj9x/image/upload/v1773182595/81ffa1c1-3fc8-4cad-8076-a4131388d848.png",
            aspectRatio: "4/3"
          },
          {
            type: "video",
            src: "https://www.loom.com/share/fc0be3c402344b59bfa541c359070582",
            href: "https://www.loom.com/share/fc0be3c402344b59bfa541c359070582",
            coverImage:"https://res.cloudinary.com/diy08lj9x/image/upload/v1773182684/f13a0390-953d-4261-9744-001039cb63c4.png",
            caption: {
              short: "Usability session recording, observing a Care Specialist working through the existing system.",
              verbose: "One of 12 sessions conducted with pharmacists and operations staff. Watching people work through the existing process in real time, noting where time was lost, where errors crept in, and where the system forced workarounds, shaped the core priorities more than any survey or interview could have."
            },
            aspectRatio: "16/9"
          },
          {
            type: "text",
            content: [
              "Sessions surfaced four consistent patterns: deep distrust in the existing system; confusion around prioritization and urgency; the realization that message threading wasn't the core issue, patients shifted topics freely and enforcing structure added friction; and strong early reactions to action-based patterns, where creating actions directly from messages consistently outperformed abstract task lists."
            ]
          },
          {
            type: "file-thumbnail",
            title: "Hypothesis Tracker",
            fileSize: "1.2 MB",
            href: "https://collection.cloudinary.com/diy08lj9x/76844c63e311cdd1d960d9208a8a833e",
          },

          { type: "heading", title: "Conversation Model" },
          {
            type: "text",
            content: [
              "Defining what a 'conversation' meant inside the system was a systems problem that had to be solved before any interface work could begin. The model that emerged treated conversations as time-bound sessions based on activity, not topic completion, with patients able to shift freely between subjects. That definition became the foundation every design decision was built on."
            ]
          },

          { type: "heading", title: "Design Explorations" },
          {
            type: "list",
            items: [
              {
                content: `<span class="process-step-title"><b>Action-First Patterns</b></span><p class="mt-2">The first direction tested generating operational actions directly from patient messages and resolving them within context. Action-first patterns aligned with how internal teams already thought about their work, reducing context switching and making progress visible. Early testing reactions were strong across the board.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144381/flow_action_card_ktzpav.gif",
                    caption: { short: "Action cards: creating and resolving actions directly within a patient conversation.", verbose: "" }
                  },
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144386/AAWB_message-action_nen3sq.gif",
                    caption: { short: "Turning a patient message into a structured action without leaving the conversation view.", verbose: "This was one of the earliest micro-interactions tested. The concept, converting a message directly into a trackable action, received some of the strongest reactions across all usability sessions. It matched the mental model Care Specialists already had for how work should flow." }
                  },
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144386/AAWB_-_text_expander_cz4ogu.gif",
                    caption: { short: "Programmable responses, templated replies to reduce time on common patient communications.", verbose: "The team studied how Care Specialists were already building and maintaining their own personal snippet libraries outside the system. This exploration brought that behavior into the product, reducing time spent on routine communications while keeping the human in the loop for anything requiring judgment." }
                  },
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144385/AAWB_-_Cards_jmhdzy.gif",
                    caption: { short: "Action card system, a structured format for surfacing, tracking, and resolving patient requests.", verbose: "" }
                  },
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144384/Untitled_jffcum.png",
                    caption: { short: "Anatomy of an action card.", verbose: "Each card was designed to carry enough context to act without leaving the conversation, status, ownership, urgency, and the originating message all visible in one place." }
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Contextual Stacking</b></span><p class="mt-2">These explorations tested keeping actions visually close to message history, stacking them beneath or alongside conversations. Borrowing familiar patterns reduced friction and helped users maintain context, though long scroll depth remained a concern in complex cases.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144381/flow_2_qfqrjo.gif",
                    caption: { short: "Marcia Notes, improved, refining the existing interface with better context and visual hierarchy.", verbose: "" }
                  },
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144381/flow_3_dxkf7h.gif",
                    caption: { short: "Full vertical layout, actions stacked in sequence with the conversation.", verbose: "" }
                  },
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144383/Untitled_1_urcnld.png",
                    caption: { short: "A real patient message sequence sent within a five-minute window.", verbose: "This sequence was pulled from actual usage data to stress-test the contextual stacking model. Patients regularly sent multiple messages about different topics in quick succession, and any threading model that assumed topic continuity would break against real behavior like this. It became a key artifact for convincing stakeholders that structural threading wasn't the right answer." }
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Structural Rethinking</b></span><p class="mt-2">The third direction questioned whether conversations and actions needed to share the same view at all. These explorations tested thread-based models and multi-panel layouts that separated message history from operational work, trading familiarity for greater structural clarity at scale.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144382/image_gkadqr.png",
                    caption: { short: "How a simple message could become a structured thread.", verbose: "" }
                  },
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144383/Untitled_2_o3txfk.png",
                    caption: { short: "Triple panel view, separating conversation, context, and action into distinct workspaces.", verbose: "This was the most structurally ambitious direction explored. Separating the three concerns into distinct panels created cleaner organization at the cost of a steeper learning curve and higher implementation complexity. The tradeoff wasn't worth it at this stage of the product, but it informed the longer-term North Star thinking." }
                  }
                ]
              }
            ]
          },

          { type: "heading", title: "Direction & Tradeoffs" },
          {
            type: "text",
            content: [
              "The design direction focused on keeping actions tightly coupled to conversation context, not restructuring conversations or enforcing threading, but prioritizing clarity and fast action creation within existing workflows. Action-based patterns consistently resonated in reviews with Care Ops leadership, product, and engineering. Larger structural changes raised concerns around complexity, training cost, and delivery risk.",
              "Two constraints shaped the final scope: the system still lacked instrumentation to forecast impact, and engineering capacity limited how much could be rebuilt. The team aligned on an incremental approach, improving Marcia Notes while deferring larger structural changes."
            ]
          },

          { type: "heading", title: "MVP & North Star" },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144384/Untitled_3_ajvo9r.png",
            caption: {
              short: "MVP: a refactored Marcia Notes with improved context, hierarchy, and inline action creation.",
              verbose: "The MVP improved the existing Wunderbar experience without disrupting core workflows. Marcia Notes was refactored for better context and visual hierarchy, with support for a small set of common actions created directly within the conversation, the minimum needed to move the resolution metrics without requiring a full rebuild."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144382/PROPOSED_ws3gnx.png",
            caption: {
              short: "North Star: dynamic action cards adapting to patient context alongside the conversation view.",
              verbose: "The North Star envisioned conversations on the left and programmable action cards on the right, adapting in real time to patient context. While not built during this phase, it aligned product, engineering, and operations around a clear long-term direction, and gave the team a shared model to pressure-test near-term decisions against."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144382/MVP_Mapping_ijl3nj.png",
            caption: {
              short: "MVP scope mapping, what shipped, what was deferred, and how each decision mapped to the North Star.",
              verbose: ""
            }
          },

          { type: "heading", title: "Launch & Tradeoffs" },
          {
            type: "text",
            content: [
              "The full North Star didn't ship. Internal tooling improvements consistently lost the resource prioritization argument to patient-facing features with clearer business cases. What did move forward were the workflows with more legible operational ROI: billing improvements and patient case handling inside the Alto app, both of which had measurable downstream effects on cost per shipment.",
              "Marcia Notes was refactored and stabilized. Not the structural overhaul the research pointed toward, but a real improvement to the baseline: better context, clearer hierarchy, and reduced reliance on external tools for common tasks.",
              "The 18% reduction in communications per shipment was real and measurable. The team lacked the instrumentation to tie it directly to a cost-per-shipment figure for internal tooling specifically. The dollar outcome, Care CPS dropping from $16 to $10, is covered in the Alto Assistant case study, which addresses the patient-facing side of the same system. The action cards concept and North Star direction were approved and added to the roadmap before my time there ended."
            ]
          },

          { type: "heading", title: "Impact" },
          {
            type: "impact-box",
            metrics: [
              { value: "18%", label: "Reduction in communications per shipment vs control groups" },
              { value: "11,000+", label: "Patients across the platform" }
            ],
            description: [
              "Communications per shipment dropped 18% compared to control groups, falling below 1.0 for the first time in July 2022. The internal tooling work was one side of the same system: while the patient-facing app reduced inbound volume, these improvements ensured Care Specialists could handle what remained faster and with less friction."
            ]
          }
        ]
      }
    },

    // ALTO ASSISTANT APP
    {
      id: "alto-assistant",
      company: "Alto Pharmacy",
      title: CASE_STUDIES_TITLES["alto-assistant"],
      impactSummary: "Redesigned how patients asked medical questions in a digital pharmacy app, reducing inbound message volume and cutting operational cost per shipment.",
      impactSummarySentence: "A full-service digital pharmacy app covering prescriptions, payments, insurance savings, and human pharmacist care, redesigned around patient confidence and clarity, reducing per-order costs by $2.",
      designerNote: "Alto was building something genuinely different in a category that had resisted change for decades. The product touches nearly every part of a patient's relationship with their medication, from insurance and fulfillment to talking directly with a pharmacist. The work on Alto Assistant was about making that experience feel less like a transaction and more like being taken care of. Designing for clarity and confidence in a medical context is harder than it sounds. Patients are often anxious, the stakes are real, and the operational constraints are tight. The $2 per-order reduction was real and measurable, but the more important outcome was that patients felt guided rather than processed. That is what the design was actually trying to do.",
      thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772157001/herocover_nsmuem.png",
      status: "LEGACY",
      type: "CONSUMER",
      blocks: [
        {
          type: "impact-box",
          metrics: [
            { value: "~$2", label: "Reduction in Per-Order Shipping Cost" },
            { value: "$16 to ~$10", label: "Care Cost Per Shipment" }
          ]
        }
      ],
      details: {
        hero: { type: 'static', bgColor: '#E0F2F1' },
        heroImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772157001/herocover_nsmuem.png",
        heroCoverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772155106/Untitled_9_itrgrm.png",
        role: "Staff Product Designer",
        timeline: "2021 to 2022",
        collaborators: "PM, 3 Engineers, Clinical team, Customer Success",
        type: "CONSUMER",
        services: [
          SERVICES.PRODUCT_DESIGN,
          SERVICES.UX_RESEARCH,
          SERVICES.PROTOTYPING,
          SERVICES.STRATEGY
        ],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          { type: "heading", title: "The Product" },
          {
            type: "text",
            content: [
              "Alto is a full-service digital pharmacy covering prescriptions, payments, insurance savings, fulfillment, and direct pharmacist care. Alto Assistant is the patient-facing layer inside the mobile app where patients ask questions, report concerns, and request help. This project focused on medical questions: the most expensive, most complex, and most clinically sensitive category of inbound message."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772155106/AA_final_xwrbof.gif",
            caption: {
              short: "Alto Assistant, the shipped patient messaging experience.",
              verbose: "The final experience guided patients through medical questions with lightweight structure, setting clearer expectations around response time and pharmacist involvement without adding meaningful friction to the flow."
            }
          },

          { type: "heading", title: "The Problem" },
          {
            type: "text",
            content: [
              "In 2022, Alto's mobile app received an average of 3,200 patient messages per day, each one generating a support ticket. Many were non-clinical or resolvable through self-service, but all of them required Care Ops to triage. Medical questions required pharmacist involvement on top of that. At Alto's shipment volume, every dollar of unnecessary handling cost added up fast.",
              "Messages arrived as unstructured text with no context, no categorization, and no expectation setting. Care Specialists spent time triaging messages that didn't need them. Pharmacists handled expensive escalations without enough upfront context. Patients were left uncertain about response times and next steps.",
              "The business had a clear target: reduce Care Cost per Shipment from $16 to $10. Medical questions were the most expensive category, each escalation required a Care Specialist and then a Specialty Pharmacist, often duplicating effort across handoffs."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772155105/Untitled_zkmynm.png",
            caption: {
              short: "The unstructured message entry point, no context, no routing, no expectation setting.",
              verbose: "Every message arrived as free-form text regardless of urgency or type. This placed the entire burden of triage on Care Specialists, who had to interpret intent before they could act on it."
            }
          },

          { type: "heading", title: "Goals" },
          {
            type: "text",
            content: [
              "Three priorities shaped the work. Reduce Care Cost per Shipment by decreasing unnecessary inbound messages. Limit avoidable escalations to pharmacists through better upfront context. And set clearer expectations for patients around response time and next steps.",
              "For patients, the goal was simpler: make it easier to ask a medical question confidently, understand what happens next, and get qualified help without unnecessary back-and-forth.",
              "After auditing a week of inbound messages, the team grouped them into six core topics. That bucketing made it possible to tackle each problem independently. This case study focuses on medical questions, the most operationally expensive category."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772155104/Untitled_2_ojnjwb.png",
            caption: {
              short: "Six message categories identified from the inbound audit, each with a distinct operational profile.",
              verbose: "Bucketing messages by topic unlocked a more targeted approach. Rather than redesigning the entire messaging system, the team could address each category's specific friction and cost drivers independently."
            }
          },

          { type: "heading", title: "Research" },
          {
            type: "text",
            content: [
              "Research surfaced a consistent tension between patient uncertainty and internal operational risk. Patients often didn't know how to frame medical questions, frequently raised more than one concern at a time, and defaulted to messaging as a catch-all. Internally, Care Ops and Pharmacy worried about being overwhelmed by unfiltered volume or becoming bottlenecks when escalations spiked.",
              "Those findings made one thing clear: asking patients to self-diagnose or pick the right category would add friction and undermine trust. The solution needed to guide without gatekeeping."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772155103/Untitled_1_iise99.png",
            caption: {
              short: "Research synthesis: patient uncertainty mapped against internal operational constraints.",
              verbose: "These artifacts captured recurring themes from patient interviews and internal stakeholder sessions. The synthesis reframed the problem away from categorization and toward context, giving the system enough signal to route correctly without asking patients to do internal triage work."
            }
          },
          {
            type: "video",
            src: "https://youtu.be/_qnZwrZqppM",
            caption: {
              short: "Usability session, patients working through medical question flows.",
              verbose: "Moderated sessions focused on how patients framed medical questions, how often multiple concerns appeared in a single message, and how expectation setting affected confidence. Sessions confirmed that patients valued clarity and reassurance over precision, and that lightweight guidance reduced anxiety without limiting access to care."
            },
            aspectRatio: "16/9"
          },

          { type: "heading", title: "Early Explorations" },
          {
            type: "text",
            content: [
              "Before narrowing into specific interaction patterns, the team explored a wide range of visual and structural directions to understand how guidance, tone, hierarchy, and information density could affect patient confidence."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772155104/Ui_Explorations_c2pkga.png",
            caption: {
              short: "Visual exploration covering tone, hierarchy, and interaction density.",
              verbose: "These early experiments were intentionally broad. The goal was to understand the design space before committing to a direction, testing how much structure felt helpful versus clinical, and where guidance tipped into gatekeeping."
            }
          },

          { type: "heading", title: "Validation" },
          {
            type: "text",
            content: [
              "As concepts narrowed, two variants were tested with 9 patients to pressure-test the boundary between operational efficiency and patient trust."
            ]
          },
          {
            type: "list",
            items: [
              {
                content: `<span class="process-step-title"><b>Option A: Minimal structure</b></span><p class="mt-2">Routed patients more directly to pharmacists. Operationally efficient, but surfaced concerns around clarity and expectation setting. Users often assumed the interaction would be synchronous and were uncertain about response timing.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772155103/Untitled_3_baz7ff.png",
                    caption: {
                      short: "Minimal structure variant, direct routing with limited guidance.",
                      verbose: "This option reduced handoffs but left patients without enough context about what would happen after they submitted. Several users expected a live chat experience and were caught off guard by asynchronous response timing."
                    }
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Option B: Lightweight guidance</b></span><p class="mt-2">Added a medication-focused step to help patients frame their question and set clearer expectations. Slightly more complex, but users found it more reassuring, with fewer mismatched expectations about what would happen next.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772155105/Untitled_4_jpfopt.png",
                    caption: {
                      short: "Lightweight guidance variant, medication context step with expectation setting.",
                      verbose: "The added step improved confidence without meaningfully increasing drop-off. The medication question language tested clearly, and users who went through this flow had more accurate expectations about pharmacist response timing."
                    }
                  }
                ]
              }
            ]
          },
          {
            type: "text",
            content: [
              "Testing confirmed that small interventions could meaningfully improve clarity. A recurring theme also emerged: several patients wanted to see relevant medication information immediately, a capability that already existed in the app but was hard to discover. That insight shaped the North Star direction."
            ]
          },

          { type: "heading", title: "Design Explorations" },
          {
            type: "text",
            content: [
              "Three directions were developed and reviewed with Product, Pharmacy, and Care Ops leadership. Each explored a different balance between structure, flexibility, and clinical risk."
            ]
          },
          {
            type: "list",
            items: [
              {
                content: `<span class="process-step-title"><b>Option 1: Medication context first</b></span><p class="mt-2">Start with medication selection to anchor the question. Gave the system immediate routing context and helped patients frame their concern around a specific medication rather than a general symptom.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772155109/AA_option_1_dvzvaq.gif",
                    caption: { short: "Option 1: medication context anchors the question from the start.", verbose: "" }
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Option 2: Multi-medication support</b></span><p class="mt-2">Allowed patients to raise questions about multiple medications in a single session. More flexible and closer to real patient behavior, but introduced meaningful complexity in routing and Care Specialist triage.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772155108/AA_option_2_xorqmj.gif",
                    caption: { short: "Option 2: multiple medications and questions in a single flow.", verbose: "This direction was closest to how patients actually messaged, rarely about a single medication in isolation. The tradeoff was downstream complexity: routing logic and Care Specialist triage both became harder when a message could span multiple contexts." }
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Option 3: Guided subtopics</b></span><p class="mt-2">Medication selected first, then guided through relevant subtopics. The most structured of the three. Produced the richest upstream context but added the most steps, raising concerns about drop-off and access for patients with complex or ambiguous questions.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772155108/AA_option_3_ajxzrz.gif",
                    caption: { short: "Option 3: medication first, then guided through relevant subtopics.", verbose: "The subtopic guidance reduced escalation risk significantly on paper, but testing showed it could feel clinical and gatekeeping to patients already anxious about their medication. The step count was also a concern in a mobile context where patients often messaged reactively." }
                  }
                ]
              }
            ]
          },
          {
            type: "figma",
            src: "https://www.figma.com/proto/EuDrnvOQOZx8Wrc4beLGTB/Alto-Assistant-Final-Build-Spec?page-id=10888%3A142839&node-id=10894-435574&scaling=scale-down&starting-point-node-id=10894%3A435574&show-proto-sidebar=1",
            caption: {
              short: "View all three options in detail, click through to explore.",
              verbose: "These prototypes were reviewed with Product, Pharmacy, and Care Ops leadership. Rather than selecting one option wholesale, the team aligned on a set of shared principles that informed what could move forward safely given clinical risk, measurement constraints, and available resourcing."
            },
            coverImage:"https://res.cloudinary.com/diy08lj9x/image/upload/v1773182978/e81b0663-c636-40d2-9329-49934c77f62c.png",
            aspectRatio: "4/3"
          },

          { type: "heading", title: "Direct to Pharmacist" },
          {
            type: "text",
            content: [
              "One specific flow explored during this phase was a direct-to-pharmacist routing path for high-confidence medical questions. The goal was to eliminate the Care Ops handoff entirely for cases where pharmacist involvement was clearly required from the start."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772155107/AA_drect_to_pharmacist_e3g608.gif",
            caption: {
              short: "Direct-to-pharmacist routing, bypassing Care Ops for clearly clinical questions.",
              verbose: "This flow was designed to reduce the most expensive handoff in the system. By identifying high-confidence medical questions early and routing them directly, it removed a full triage step from the most costly message category. The challenge was defining the routing logic precisely enough to avoid false positives that would overwhelm pharmacist capacity."
            }
          },

          { type: "heading", title: "What Shipped" },
          {
            type: "text",
            content: [
              "A full redesign of the medical questions flow didn't ship during this phase. What did ship were targeted improvements to how Care Specialists handled patient conversations inside Wunderbar, alongside patient-facing flow improvements that launched in May 2022 to a 10% controlled cohort.",
              "The exploratory work aligned Product, Care Ops, and Pharmacy around shared principles for future iteration, creating clarity on what a safer, more scalable system could look like when instrumentation and resourcing allowed."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772155103/Untitled_5_eusvw7.png",
            caption: { short: "Shipped state: the medical question flow as it went live in May 2022.", verbose: "" }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772155103/Untitled_6_bedfif.png",
            caption: { short: "Care Specialist view, improved context and message clarity inside Wunderbar.", verbose: "" }
          },

          { type: "heading", title: "North Star" },
          {
            type: "text",
            content: [
              "The longer-term vision anchored the medical consultation journey around a medication selector, with clearer guidance, relevant subtopics, and self-service content layered on top. Patients would get help faster and with better context. The system would reduce unnecessary back-and-forth and downstream escalations. Several patients had surfaced this direction during testing, they wanted relevant medication information immediately, and the capability existed in the app but was too hard to find."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772155106/Untitled_9_itrgrm.png",
            caption: {
              short: "North Star: a medication-anchored consultation experience with integrated self-service content.",
              verbose: "This direction would have surfaced the right information at the right moment, reducing the number of questions that needed a pharmacist at all. The foundation was already in the app. The work was connecting it to the right entry point."
            }
          },

          { type: "heading", title: "Launch" },
          {
            type: "text",
            content: [
              "The feature launched in May 2022 following a 10% controlled cohort rollout, in line with Alto's release protocol for medical-context changes. The cohort allowed the team to monitor behavior and validate impact before full release. This case study shares platform-level metrics with the Alto Internal Tools work. Both were part of the same Alto Assistant system, the patient-facing and internal-facing sides of the same operational problem."
            ]
          },

          { type: "heading", title: "Impact" },
          {
            type: "impact-box",
            metrics: [
              { value: "~$2", label: "Reduction in Per-Order Shipping Cost" },
              { value: "$16 to ~$10", label: "Care Cost Per Shipment" }
            ],
            description: [
              "Per-order shipping costs dropped by approximately <b>~$2</b>, a direct result of reducing unnecessary inbound message volume by <b>38%</b> and cutting the escalations that required both Care Ops and Specialty Pharmacist time. Care Cost per Shipment fell from <b>$16 to approximately $10</b> over the course of the project. The platform served <b>11,000+ internal users</b> across <b>30,000+ weekly visits</b>, preventing a significant volume of unstructured messages from entering the care queue."
            ]
          }
        ]
      }
    },

    // PATREON CREATOR TOOLS
    {
      id: "patreon-creator-tools",
      company: "Patreon",
      title: CASE_STUDIES_TITLES["patreon-creator-tools"],
      impactSummary: "Redesigned the creator benefit delivery experience at Patreon, improving creator satisfaction from 49% to 73%, filing a USPTO patent, and laying the foundation for Patreon 2.0.",
      impactSummarySentence: "A ground-up redesign of how creators deliver benefits to their patrons, from fragmented manual workflows to a fully automated system, with a granted patent along the way.",
      designerNote: "Patreon's top earners were running massive businesses on fragile, manual tools. This project was about closing that gap. We started by shipping targeted improvements that moved the needle, which earned us the trust to pitch a much larger structural overhaul. While company restructuring meant my time ended before I could see Patreon 2.0 fully ship, I'm incredibly proud of the foundation we built. My research defined the core roadmap, and a speculative design for tracking loyalty resulted in my first granted USPTO patent. You can see the full architectural vision in my follow-up Patreon 2.0 case study.",
      thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169709/benefits-config_wpuj3r.gif",
      status: "LEGACY",
      type: "INTERNAL",
      blocks: [
        {
          type: "impact-box",
          metrics: [
            { value: "49% to 73%", label: "Creator Satisfaction (Pendo, Feb 2021)" }
          ]
        }
      ],
      details: {
        hero: { type: 'animated' },
        heroImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169709/benefits-config_wpuj3r.gif",
        heroCoverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169704/cohorts_q4hqkk.png",
        role: "Senior Product Designer",
        timeline: "November 2020 to May 2021",
        collaborators: "PM, 4 Engineers, Creator Partnerships, Growth",
        type: "INTERNAL",
        services: [
          SERVICES.PROTOTYPING,
          SERVICES.STRATEGY
        ],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          { type: "heading", title: "The Product" },
          {
            type: "text",
            content: [
              "Patreon is a membership platform where creators offer exclusive content, community access, and perks to paying subscribers. The Creator Tools team owned the systems creators used to configure tiers, set up benefits, and deliver those benefits to the right patrons at the right time.",
              "This project covers two phases of work: an incremental improvement sprint that moved creator satisfaction from 49% to 73%, and a three-week design sprint that reimagined the entire benefit delivery system for Patreon 2.0."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169709/benefits-config_wpuj3r.gif",
            caption: {
              short: "The benefit configuration experience, 28 benefit types, most requiring manual delivery.",
              verbose: "Patreon supported 28 types of benefits at the time. Only exclusive content access could be automated. Everything else, including merch, commissioned art, shoutouts, and event access, required creators to manually track and deliver. This configuration screen was the starting point for understanding why the system was failing."
            }
          },

          { type: "heading", title: "The Problem" },
          {
            type: "text",
            content: [
              "Patreon's top creators, the Mavens earning above $45k per month, had outgrown the platform's tools. They were running real businesses, managing thousands of patrons across complex tier structures, and the delivery experience was not built for that scale.",
              "Creator satisfaction was at 49% in November 2020. The tools they relied on most were broken or barely used: the Patron Relationship Manager accounted for 38% of all bugs filed, and the Benefit Tracker had just 9.5% active usage. Creators were not ignoring the tools out of habit. They genuinely could not rely on them."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169706/screencapture-patreon-AlissaWhiteGluz-2021-05-09-23_49_13_au0vhs.png",
            caption: {
              short: "A real creator's subscription page, the level of granularity the platform was expected to support.",
              verbose: "This is Alissa White-Gluz's Patreon page. The care and creativity in how she structured her tiers and benefits represents what top creators were actually doing. The platform celebrated this complexity publicly but provided almost no tools to help deliver it reliably. Creators were absorbing all of that operational burden themselves."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169706/prm_nyylwr.png",
            caption: { short: "The Patron Relationship Manager, responsible for 38% of all bugs filed. Source: Zendesk.", verbose: "" }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169707/Untitled_iih3rm.png",
            caption: {
              short: "Benefit Tracker active usage at 9.5% as of December 2020. Source: Mode.",
              verbose: "The Benefit Tracker required creators to manually mark rows as complete or pending, without any automated entitlement logic. It added work without reducing any. The low adoption was not a discovery problem. Creators tried it and abandoned it."
            }
          },

          { type: "heading", title: "Research" },
          {
            type: "text",
            content: [
              "A three-week generative research project was run with 12 creators fitting the Maven persona, earnings above $45k per month, identified in partnership with the Data Science team. The goal was to understand how they delivered complex benefits, why they had abandoned the Benefit Tracker, and what tools outside Patreon they relied on to fill the gaps.",
              "Four themes emerged consistently: creators perceived Patreon had stopped innovating; the Benefit Tracker was actively resented, not just ignored; entitlement logic was too tightly coupled to billing status, which was already complicated by multiple billing models; and Patreon was losing ground to platforms like OnlyFans, Clubhouse, and Cameo that moved faster."
            ]
          },

          { type: "heading", title: "Phase 1: Targeted Improvements" },
          {
            type: "text",
            content: [
              "Improving creator satisfaction was an OKR for Q4 2020 and Q1 2021. The constraint was real: solutions needed to move meaningful metrics without requiring an application rewrite. The team focused on four targeted changes that collectively closed the gap between what creators needed day-to-day and what the platform actually provided."
            ]
          },
          {
            type: "list",
            items: [
              {
                content: `<span class="process-step-title"><b>Benefit Tracker Snippet</b></span><p class="mt-2">A lightweight addition that surfaced benefit status directly in context, letting creators quickly check delivery progress and troubleshoot without navigating away. Not a full solution, but a meaningful reduction in friction for a tool that had almost no active users.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169705/Screen_Shot_2021-05-10_at_1.16.04_PM_jf0upy.png",
                    caption: { short: "Benefit tracker snippet, benefit status surfaced in context.", verbose: "" }
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Saved Filters</b></span><p class="mt-2">Creators were building the same complex filter combinations repeatedly every session. Saved filter presets eliminated that manual work without requiring a full overhaul of the filtering system. A small intervention with an outsized effect on daily workflow.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169708/Screen_Shot_2021-05-10_at_1.59.37_PM_uw7bbb.png",
                    caption: { short: "Saved filter presets, eliminating repetitive manual filtering work.", verbose: "" }
                  },
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169704/saved_filters_xgzc9c.gif",
                    caption: { short: "Saved filters in action.", verbose: "" }
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Searchable Note Fields</b></span><p class="mt-2">Creators needed labeling and tagging to manage patron context at scale. Full tagging was too complex to implement in this phase, so note fields were made data-indexable and searchable instead. A technically lightweight change that meaningfully expanded how creators could organize and retrieve patron information.</p>`,
                visuals: []
              },
              {
                content: `<span class="process-step-title"><b>Pledge Streak Filter</b></span><p class="mt-2">An invention for representing membership loyalty through payment history visualization. The pledge streak color-codes successful and declined payments over time, giving creators a way to make informed decisions when rewarding benefits, distinguishing genuinely loyal patrons from those with inconsistent payment history. Patreon filed and was granted a USPTO patent for this invention (No. 12,154,126), co-invented with Jennifer Pugh.</p>`,
                visuals: []
              }
            ]
          },
          {
            type: "figma",
            src: "https://www.figma.com/proto/2n40H4pfL5qhAFns1J9vt6/Patreon-Creator-Tools-V1-Final-Build-Spec?page-id=1%3A8422&node-id=1-8822&scaling=contain&t=OqebCP1j42TMjUba-1",
            caption: {
              short: "Pledge Streak Filter prototype, click through to explore.",
              verbose: "The pledge streak was designed to make loyalty legible at a glance. A creator managing thousands of patrons could not manually assess payment consistency. This visualization surfaced it automatically, letting the system do the judgment work instead of the creator."
            },
            coverImage:"https://res.cloudinary.com/diy08lj9x/image/upload/v1773183272/c1ee526a-7e37-4a2c-a7d0-b967326ad2fa.png",
            aspectRatio: "4/3"
          },

          { type: "heading", title: "Beyond the Brief" },
          {
            type: "text",
            content: [
              "Two explorations happened outside the formal scope of Phase 1, driven by problems that surfaced during research and felt worth pursuing even without a direct mandate."
            ]
          },
          {
            type: "list",
            items: [
              {
                content: `<span class="process-step-title"><b>Audience Chart</b></span><p class="mt-2">Patreon had no way for creators to visualize how their audience was distributed across tiers. This exploration made that visible, showing concentration, drop-off points, and tier health at a glance. Creators responded strongly to it in testing. The Audience Dashboard concept was approved for Patreon 2.0.</p>`,
                visuals: []
              },
              {
                content: `<span class="process-step-title"><b>Mobile Benefit Planner</b></span><p class="mt-2">A mobile-first feature concept that grouped patrons into cohorts proactively, with deeper filtering, delivery tracking, messaging, and automation built in. This became the direct foundation for the Phase 2 design sprint.</p>`,
                visuals: []
              }
            ]
          },
          {
            type: "figma",
            src: "https://www.figma.com/proto/2n40H4pfL5qhAFns1J9vt6/Benefit-Delivery--Short-term?node-id=2-82&t=52ihPrzUwGkkfKdX-1&scaling=min-zoom&content-scaling=fixed&page-id=2%3A53&starting-point-node-id=2%3A82",
            caption: {
              short: "Audience chart exploration, tier distribution visualization.",
              verbose: "This was a speculative exploration that addressed a gap that kept coming up in research: creators knew roughly how many patrons they had, but had no way to understand how those patrons were distributed or where tier structures were underperforming."
            },
            coverImage:"https://res.cloudinary.com/diy08lj9x/image/upload/v1773183764/ffbb6bc0-9099-4324-a11a-e657349a5a7c.png",
            aspectRatio: "4/3"
          },
          {
            type: "figma",
            src: "https://www.figma.com/proto/YDnBckCRWmpHlwY96qpVx3/Patreon-Creator-Tools-V2-Final-Build-Spec?page-id=61%3A8742&node-id=83-0&scaling=scale-down",
            caption: {
              short: "Mobile Benefit Planner prototype, the concept that seeded Phase 2.",
              verbose: ""
            },
            coverImage:"https://res.cloudinary.com/diy08lj9x/image/upload/v1773184070/5cd5a830-8900-4afb-bdb8-b2148d0edc7e.png",
            aspectRatio: "4/3"
          },

          { type: "heading", title: "Phase 1 Impact: Earning the Runway" },
          {
            type: "text",
            content: [
              "By February 2021, these targeted interventions successfully moved creator satisfaction from 49% to 73%, hitting our primary OKR. More importantly, this short-term win proved that reducing operational friction had an immediate positive effect on our top earners.",
              "Fixing the immediate bleeding earned the Creator Tools team the organizational trust and runway needed to pitch a much larger structural overhaul. The research insights and speculative prototypes from this phase became the catalyst for securing executive buy-in to invest heavily in a full 2.0 redesign."
            ]
          },

          { type: "heading", title: "Phase 2: Patreon 2.0 Design Sprint" },
          {
            type: "text",
            content: [
              "With executive backing secured, a three-week product design sprint was run to reimagine benefit delivery from scratch. The goal was a fully automated experience that blurred the line between creating content and delivering benefits, and made room for new monetization channels beyond subscriptions. The outcomes of this sprint became the foundation for a larger Patreon 2.0 initiative covered separately.",
              "The sprint covered five touchpoints: creation, configuration, qualification, delivery, and patron-side consumption. All 28 benefit types were regrouped into 7 color-coded categories to reduce cognitive overhead. The core insight that emerged was that content and benefits are the same thing. Posting exclusive backstage footage and configuring a live event benefit are structurally identical interactions. That realization became a central design principle for Patreon 2.0."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169684/benefit_categorie_eqwjwd.png",
            caption: {
              short: "28 benefit types regrouped into 7 categories, color-coded to reduce cognitive load.",
              verbose: "The categorization was tested with users in the first research round and held up well. People understood the categories immediately and knew what to expect within each. The color coding was not decorative, it carried the navigation logic."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169684/creation_qualification_oljcth.png",
            caption: {
              short: "Benefit creation and qualification flow, one-time events, flexible monetization, and pledge streak integration.",
              verbose: "This screen introduced two structural changes that did not exist before: one-time events as a benefit type, and benefits detached from tier structures. Detaching benefits from tiers made monetization significantly more flexible, creators could offer a single benefit to any combination of patrons without restructuring their whole tier setup."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169683/Automation_wwffsd.png",
            caption: {
              short: "Automation confirmation screens, making it explicit that delivery is handled by the system.",
              verbose: "One of the key research findings was that creators did not trust automation they could not see. These success states were designed to be explicit about what the system had taken over, not just a checkmark, but a clear statement of what would happen next and when."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169685/Delivery_and_consumptio_qim0hm.png",
            caption: {
              short: "Creator feed concept, content, benefits, and merch store as distinct but connected surfaces.",
              verbose: "This was the most structurally ambitious part of the sprint. Separating content, benefits, and one-off merch purchases into distinct feeds turned out to be less intuitive than assumed for users new to Patreon. The concept was sound but the navigation needed another iteration before it would test cleanly."
            }
          },

          { type: "heading", title: "Prototypes" },
          {
            type: "figma",
            src: "https://www.figma.com/proto/HMpKTeNBf6mdo2xO92qdXX/Patreon-2.0-Final-Build-Spec?page-id=0%3A1&node-id=11-293&scaling=min-zoom",
            caption: {
              short: "Round 1 prototype, initial benefit delivery system concept.",
              verbose: "The first round established the core structure: benefit categories, configuration flows, and the automation model. User testing revealed the configuration screens were overwhelming at this level of density, which drove the simplification work in Round 2."
            },
            coverImage:"https://res.cloudinary.com/diy08lj9x/image/upload/v1773184162/800c9f09-543d-4347-832c-371a0703aaf5.png",
            aspectRatio: "4/3"
          },
          {
            type: "figma",
            src: "https://www.figma.com/proto/HMpKTeNBf6mdo2xO92qdXX/Patreon-2.0-Final-Build-Spec?page-id=49%3A0&node-id=104-336&scaling=scale-down",
            caption: {
              short: "Round 2 prototype, refined after user testing. Click through to explore.",
              verbose: "The second round addressed the density and complexity issues from Round 1. Results were overwhelmingly positive. Users grasped the automation model clearly, the merch store one-off purchase concept felt familiar, and loyalty gamification through the pledge streak felt natural rather than pushy."
            },
            coverImage:"https://res.cloudinary.com/diy08lj9x/image/upload/v1773184366/2ccb3c38-c718-463f-9b7a-7a0b2048b443.png",
            aspectRatio: "4/3"
          },
          {
            type: "video",
            src: "https://www.loom.com/share/5926ef35ac1d44c899afea4344018b7c",
            href: "https://www.loom.com/share/5926ef35ac1d44c899afea4344018b7c",
            coverImage:"https://res.cloudinary.com/diy08lj9x/image/upload/v1773184417/b5d0b545-8155-483f-bb1c-9df9a6bdacf1.png",
            caption: { short: "Walkthrough of the Round 2 prototype and research findings.", verbose: "" },
            aspectRatio: "16/9"
          },

          { type: "heading", title: "Research Findings" },
          {
            type: "text",
            content: [
              "Benefit categorization tested positively across both rounds. Users understood the seven categories and knew what to expect within each with minimal guidance. The biggest conceptual shift: content and benefits are the same thing. Posting exclusive footage and configuring a live event benefit are structurally identical interactions. That insight became a central design principle for Patreon 2.0.",
              "Automation was understood and trusted when made explicit. Creators needed to see what the system had taken over, not just that it had. The merch store one-off purchase model felt immediately familiar, and loyalty gamification through the pledge streak felt natural. Physical goods shipping remained manual. The team aligned on supporting it but not automating it without robust e-commerce integrations in place first."
            ]
          },

          { type: "heading", title: "Launch and Tradeoffs" },
          {
            type: "text",
            content: [
              "Phase 1 improvements shipped across Q4 2020 and Q1 2021 within tight engineering constraints. The cohorts feature was designed but did not ship, the predefined condition logic required backend work that fell outside scope.",
              "The Phase 2 sprint secured executive buy-in and resources for the 2.0 build. Shortly after, company-wide restructuring impacted my team. The architecture established here served as the foundational blueprint for what followed. Benefit modularity was a deliberate choice: all seven categories were designed as independent modules so the 2.0 implementation could roll them out selectively. NFTs were explored as an alternative monetization channel during the sprint given the timing. That direction was not prioritized for the 2.0 roadmap."
            ]
          },

          { type: "heading", title: "Impact" },
          {
            type: "impact-box",
            metrics: [
              { value: "49% to 73%", label: "Creator Satisfaction (Pendo, Feb 2021)" },
              
            ],
            description: [
              "Phase 1 improvements moved creator satisfaction from <b>49% to 73%</b> within three months. The pledge streak filter resulted in a <b>granted USPTO patent</b> (No. 12,154,126), co-invented with Jennifer Pugh. The Phase 2 sprint secured the organizational alignment and resources needed to move forward, giving the team a clear architectural foundation to build from."
            ]
          }
        ]
      }
    },

    // PATREON PLEDGE STREAK PATENT
    {
      id: "patreon-pledge-streak",
      company: "Patreon",
      title: "Pledge Streak Patent",
      impactSummary: "Invented a visual system for creators to read patron loyalty at a glance. Granted USPTO Patent No. 12,154,126 in November 2024.",
      impactSummarySentence: "A data visualization pattern that turned months of billing history into a single readable streak. Granted USPTO Patent No. 12,154,126.",
      designerNote: "This one started as a side observation during a much larger project. I was deep in research for the Benefit Delivery redesign when creators kept bringing up the same anxiety: they were mailing expensive, physical merchandise to patrons they couldn't fully trust. Not because patrons were dishonest, but because the billing system was opaque. A card declines, a patron churns involuntarily, and the creator has no way to know if that person was a loyal supporter of three years or someone whose very first payment just failed. I designed the Pledge Streak to solve that specific anxiety. It worked well enough that Patreon's legal team wanted to patent it. I drove the concept from that initial research observation through design, through usability testing, through leadership alignment, and through the patent process itself. Jennifer Pugh was my product partner throughout. The USPTO granted Patent No. US 12,154,126 B2 on November 26, 2024.",
      thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772474135/hero-image_owhyqg.png",
      thumbnailBg: "linear-gradient(160deg, #3d2a5a, #2e1f47)",
      thumbnailPadding: "p-8 md:p-12",
      status: "LEGACY",
      type: "INTERNAL",
      blocks: [
        {
          type: "callout-box",
          content: "USPTO Patent No. US 12,154,126 B2, granted November 26, 2024. Inventors: Bruno Wong and Jennifer Pugh. Assignee: Patreon Inc."
        }
      ],
      details: {
        hero: { type: 'animated' },
        heroImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772474135/hero-image_owhyqg.png",
        role: "Senior Product Designer & Co-Inventor",
        timeline: "2020 to 2021 (Granted Nov 2024)",
        collaborators: "PM, Engineering, Growth, Legal (Patent counsel)",
        type: "INTERNAL",
        blocks: [
          {
            type: "heading",
            title: "The Problem",
            hasDivider: false
          },
          {
            type: "text",
            content: [
              "Patreon creators at the top tier weren't just publishing digital content. They were running small merchandise operations, mailing signed prints, handmade goods, and exclusive physical items to their most loyal supporters. And they were doing it blind.",
              "Billing on Patreon is messy by nature. Cards expire. Banks flag recurring charges. Patrons churn involuntarily all the time, fully intending to come back. The platform had no way to surface that nuance to creators. All they could see was whether a patron was currently active or not. A three-year supporter whose card just declined looked identical to someone whose very first payment had failed.",
              "Creators were asking a reasonable question: before I drive to the post office with a $60 piece of merchandise, can I know if this person actually deserves it? The platform had no answer."
            ]
          },

          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772474137/old_no_ui_sxpto2.png",
            caption: {
              short: "The patron relationship manager before the Pledge Streak.",
              verbose: "The pre-streak patron list view was flat and context-free. A long list of names with no visual signal of loyalty, tenure, or payment history. Active or not active, nothing in between."
            }
          },

          {
            type: "heading",
            title: "The Concept"
          },
          {
            type: "text",
            content: [
              "The idea was to stop hiding billing history inside a database and bring it to the surface of the patron table itself. Instead of requiring creators to click into individual profiles or export CSVs, each patron row would carry its own visual record: a short sequence of nodes, one per billing cycle, each one reflecting what actually happened that month.",
              "A solid node for a successful payment. An outlined node for a failed or declined charge. A blank for a month when the patron wasn't subscribed. Six months at a glance, directly in the table row, right next to the patron's name.",
              "The streak turned billing history into something readable in under a second. Creators didn't need to interpret data anymore. They could see the shape of a relationship."
            ]
          },

          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772474139/pledge-streak-ui_wvufrl.png",
            caption: {
              short: "The Pledge Streak integrated into the patron relationship manager.",
              verbose: "The shipped design showing the streak nodes sitting inline in the patron table row. This contrast allows creators to spot different streak patterns across their audience immediately."
            }
          },

          {
            type: "heading",
            title: "User Research"
          },
          {
            type: "text",
            content: [
              "Testing validated a critical behavioral shift: creators stopped parsing individual billing nodes and immediately began reading the overall texture of the sequence.",
              "We tested the concept by asking creators to filter for patrons with 3+ months of tenure to award a high-value benefit. The visual streak allowed creators to spot loyal edge cases, like mock patron Jefferson Farfan, who missed the hard numerical cutoff but clearly demonstrated long-term support. This validated that visual pattern recognition was more effective than raw data filtering, laying the groundwork for the patent.",
              "The system doesn't just display payment status per billing cycle. It models the likelihood of continued subscribership across the full history, weighting different signals differently. A cancellation workflow carries more weight than a single declined payment. A patron who upgraded their tier then had a card decline reads very differently than a patron in steady decline. The streak visualizes that probability, not just raw transaction data."
            ]
          },

          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772474133/closeup_sfvasd.png",
            caption: {
              short: "Pattern examples showing how creators read streak shapes.",
              verbose: "A loyal patron with one recent decline versus a patron with scattered failures. The visual pattern carries the meaning on its own without requiring creators to decipher tabular billing data."
            }
          },

          {
            type: "heading",
            title: "Interactive Prototype"
          },
          {
            type: "text",
            content: [
              "This prototype demonstrates how creators could hover over individual streak nodes to see exact billing dates and amounts, and use global filters to instantly isolate patrons with perfect streaks."
            ]
          },
          {
            type: "figma",
            src: "https://www.figma.com/proto/2n40H4pfL5qhAFns1J9vt6/Benefit-Delivery--Short-term?page-id=1%3A8422&node-id=1-9099&viewport=783%2C704%2C0.18&t=JhHDRcnys481NYQn-1&scaling=min-zoom&content-scaling=fixed",
            caption: { 
              short: "Interactive prototype of the Pledge Streak filter and tooltip. Click through to explore.", 
              verbose: "" 
            },
            coverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772474141/prototype_cover_pgcjnx.png",
            aspectRatio: "4/3"
          },

          {
            type: "heading",
            title: "The Patent"
          },
          {
            type: "text",
            content: [
              "Patreon's legal team decided the interaction model was novel enough to protect. The filing covered the full system: obtaining subscriber behavior data across billing intervals, determining weighted likelihood values using a trained machine learning model, and presenting those values as sequences of visual interface elements in an account management UI.",
              "The patent is specific about the design layer. Color, shape, size, and indicia are all named as display characteristics. The grid layout with attribute-named columns is described.",
              "The USPTO granted Patent No. US 12,154,126 B2 on November 26, 2024. I am listed as co-inventor alongside Jennifer Pugh, my product partner on the Patreon Creator Tools team."
            ]
          },

          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772474131/closer_look_vfpqgs.png",
            caption: {
              short: "A closer look at the core UI concept that was submitted for Patent No. 12,154,126.",
              verbose: "The grid layout with sequences of interface elements per patron row directly corresponds to the streak design detailed in the patent filing."
            }
          },

          {
            type: "callout-box",
            content: "USPTO Patent No. US 12,154,126 B2, granted November 26, 2024. Inventors: Bruno Wong and Jennifer Pugh. Assignee: Patreon Inc."
          },

          {
            type: "heading",
            title: "Impact & Reflection"
          },
          {
            type: "callout-box",
            content: "The Pledge Streak gave creators a clear, nuanced picture of their audience's subscription behavior. It helped them deliver high-value benefits to truly qualified patrons confidently, while avoiding the unfair punishment of loyal members due to temporary bank freezes or missed payments. This ultimately protected revenue and fostered trust for everyone involved."
          },
          {
            type: "text",
            content: [
              "The thing I keep coming back to is how small the original observation was. One recurring complaint in a research session. Creators frustrated by a very specific moment: standing at a post office, unsure whether a patron had earned the thing they were about to mail.",
              "That anxiety pointed to a real gap between what the platform knew and what it was willing to show. The design work was mostly about closing that gap as simply as possible. Six nodes in a row. The rest followed from that.",
              "Getting a USPTO patent out of a research observation I made mid-project is something I'm genuinely proud of. Not because of the legal credential, but because it confirmed that the insight was real and that the solution was actually novel. That doesn't happen often."
            ]
          },

          {
            type: "file-thumbnail",
            title: "View Official Patent Document",
            fileSize: "USPTO PDF",
            href: "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/12154126"
          }
        ]
      }
    },


    // PATREON STUDIO 2.0 DESIGN SYSTEM
    {
      id: "patreon-studio-2",
      company: "Patreon",
      title: CASE_STUDIES_TITLES["patreon-studio-2"],
      impactSummary: "Co-created Studio 2.0, Patreon's mobile-first design system, establishing a visual language and component library across the entire platform in an 8-week cross-functional sprint.",
      impactSummarySentence: "An 8-week collaborative sprint to build a scalable, mobile-first design system that Patreon's disjointed UI and set the visual foundation for the platform's rebrand.",
      designerNote: "Eight weeks, three designers from different departments, no prior shared system to build from. Studio 2.0 was Patreon's first real attempt at a visual language, built during a period when the product strategy had shifted significantly but the UI hadn't caught up. My contribution came from the Creator Tools side: the design explorations, the shape system, and the component architecture that became the foundation for the 2.0 migration. The system shipped to engineering in January 2021. I didn't see it fully rolled out across the live product, restructuring ended my time at Patreon shortly after. The work held up well enough to be used as the blueprint for what came next.",
      thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772231263/DS_1_lihqgs.png",
      thumbnailPadding: "p-20",
      status: "LEGACY",
      type: "INTERNAL",
      blocks: [
        {
          type: "callout-box",
          content: "Studio 2.0 handed over to engineering in January 2021 with a full rollout plan and executive buy-in. No conversion metrics to point to. What it produced was a shared design language, a four-tier component library, and an implementation plan the team could execute without me."
        }
      ],
      details: {
        hero: { type: 'animated' },
        heroImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772236528/DS20_dxajby.jpg",
        heroCoverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772236528/DS20_dxajby.jpg",
        role: "Senior Product Designer",
        timeline: "Nov 2020 to Jan 2021",
        collaborators: "4 Designers, Engineering, Brand",
        type: "INTERNAL",
        services: [
          SERVICES.DESIGN_SYSTEMS,
          SERVICES.VISUAL_DESIGN,
          SERVICES.PRODUCT_DESIGN,
          SERVICES.PROTOTYPING
        ],
        blocks: [
          { type: "heading", title: "The Result", hasDivider: false },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772236528/DS20_dxajby.jpg",
            caption: { short: "Studio 2.0 final product intro and visual language overview.", verbose: "" }
          },

          { type: "heading", title: "Overview" },
          {
            type: "text",
            content: [
              "Our mobile-first Design System was named Studio 2.0. We built it as a dedicated task force of three designers representing different departments: myself from Creator Tools, Grace from Fan & Patron Experience, and Mary from Growth.",
              "It was an intense 8-week process that included deep collaboration, generative brainstorming, heads-down solo explorations, and rigorous stress-testing, culminating in an engineering implementation and rollout plan alongside new platform features."
            ]
          },
          {
            type: "datatable",
            headers: ["Phase", "Date", "Status"],
            rows: [
              ["Audit, Branding and Discovery", "Nov 16, 2020 → Nov 30, 2020", "Completed"],
              ["Design Sprint 1", "Nov 24, 2020 → Nov 30, 2020", "Completed"],
              ["Sprint 2", "Dec 1, 2020 → Dec 7, 2020", "Completed"],
              ["Sprint 3", "Dec 7, 2020 → Dec 14, 2020", "Completed"],
              ["Sprint 4 (Convergence)", "Dec 15, 2020 → Dec 21, 2020", "Completed"],
              ["Sprint 5 & 6", "Jan 4, 2021 → Jan 15, 2021", "Completed"],
              ["Master File & Presentation", "Jan 18, 2021 → Jan 20, 2021", "Completed"]
            ]
          },

          { type: "heading", title: "Why Build a New Design System?" },
          {
            type: "text",
            content: [
              "We didn't have one. Patreon's product strategy had shifted from being known as the 'Kickstarter for musicians' to a massive, content-first community platform fostering cross-collaboration, creativity, and passion.",
              "Patreon urgently needed a common language to align product, engineering, marketing, and legal—not a disjointed combination of legacy UI components. Tech debt had accumulated across buttons, labels, navigation paradigms, and spacing scales. Truth be told, Patreon was long overdue for a complete visual and structural rebrand."
            ]
          },

          { type: "heading", title: "Early Explorations" },
          {
            type: "text",
            content: [
              "We kicked off by brainstorming with a cross-functional group of 8+ people across design, product, and marketing. We grouped assets into buckets of categories and distinct styles to define our core themes (e.g., Creator tools needing to feel robust and professional, while Patron spaces needed to feel like a cozy, exclusive club).",
              "From there, we diverged. Designers were given total freedom to design 'north star' beautiful interfaces. We shared these within the team, iterating and diving deeper into ideas and conventions."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772239487/Moodboard_1_mp4lj5.png",
            caption: { 
              short: "Initial moodboards and brand inspiration gathering.", 
              verbose: "As a kickoff exercise, the product and design teams jumped into a shared Figma file to jam on ideas, collect inspiration, and establish a foundational moodboard together." 
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772239871/Editorial_d4sflt.png",
            caption: {
              short: "Exploration: Premium & Editorial.",
              verbose: "My initial exploration leaned heavily into solid colors, immersive full-bleed content, and a strong editorial feel. While beautiful, feedback noted it felt a bit too stark for the core brand."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772239961/streamlining_and_shapes_f9hr3z.png",
            caption: {
              short: "Exploration: Streamlining & Shapes.",
              verbose: "This iteration played heavily with circle and rectangle constraints—a direct nod to the geometric shapes in the Patreon logo—to successfully marry the brand identity with creator content."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772240138/Mosaics_evaesa.png",
            caption: {
              short: "Exploration: Art Mosaics.",
              verbose: "I pushed the discovery and layout boundaries by introducing a mosaic grid. This was designed to handle highly visual creators, allowing their portfolios to dominate the screen real estate in a structured, engaging way."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772240136/Simpler_lchukg.png",
            caption: {
              short: "Exploration: Simpler UIs.",
              verbose: "Scaling back from the heavy editorial concepts, this exploration focused on extreme utility. We needed to ensure that highly functional, dense creator tools wouldn't be visually overwhelmed by heavy or distracting UI elements."
            }
          },

          { type: "heading", title: "Team Convergence" },
          {
            type: "text",
            content: [
              "After our individual divergence phases, the task force focused heavily on convergence. We aligned on concepts, typography, the balance of Patreon colors vs. Creator brand colors, and established our core visual treatments."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772244764/Gradients_and_textures_uxac3c.png",
            caption: {
              short: "Creating a library of gradients and textures.",
              verbose: "A common theme that emerged across our individual explorations was the use of gradients and textures. We decided to build a dedicated mini-library of these lo-fi assets to add depth and warmth without overpowering the Creator's own brand."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772245178/Shapes_ep0ubd.png",
            caption: {
              short: "Shapes as structural meaning.",
              verbose: "I introduced the concept of distinct geometric shapes during my initial explorations, and the team brought it forward into our converged approach. We built a subtle system pairing these shapes with user types: Squares for Creators, Circles for Patrons, and Hexagons for hybrid or special moments."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772245292/Magical_Moments_uihgo6.png",
            caption: {
              short: "Defining 'Magical Moments.'",
              verbose: "The intent here was to be celebratory and inject 'magic' whenever someone pledged, subscribed, or established a 'wow' connection with a creator. This concept was agreed upon early on, and these screenshots show the different group explorations we mapped out to capture that feeling."
            }
          },

          { type: "heading", title: "The Studio 2.0 Library" },
          {
            type: "text",
            content: [
              "Studio 2.0 became the single source of truth for all design elements used across Patreon, enabling teams to build efficiently and consistently. We structured the library into four core tiers:",
              "<b>Foundations:</b> Visual attributes like brand elements, color, typography, layout, and spacing.<br><b>Components:</b> Reusable UI building blocks created from foundations.<br><b>Patterns:</b> Solutions to known business cases, focusing on the problem being solved rather than just UI behavior.<br><b>Views:</b> Full page or screen templates reused throughout the application."
            ]
          },
          {
            type: "figma",
            src: "https://www.figma.com/file/kyNnCjYk2XaG21kp5ITQhI/Component-Library-Sample?node-id=1%3A84638",
            caption: { 
              short: "A sample of the resulting Studio 2.0 Component Library.", 
              verbose: "I put together this quick Figma sample containing a small demo of components and elements exactly as they were structured in early 2021. Figma has evolved massively since then, so this serves as a time capsule—built before variables, advanced auto-layout properties, and modern component tokenization were standard practice." 
            },
            coverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772245483/3491f0c6-f019-41e1-9205-e383213af11b.png",
            aspectRatio: "4/3"
          },

          { type: "heading", title: "Implementation & Rollout" },
          {
            type: "text",
            content: [
              "By January 2021, Studio 2.0 was rigorously documented for product and engineering. The immediate next step was defining implementation phases, coordinating the migration to the new system in parallel with shipping Patreon's broader structural changes."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772231263/patreon-sequencing_qqxzih.png",
            caption: { short: "Sequencing and rollout strategy for migration.", verbose: "" }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772245782/studio20_-_creator_tools_hha58f.png",
            caption: { short: "Desktop Creator Tools interface preview, re-skinned utilizing Studio 2.0.", verbose: "" }
          },
          {
            type: "video",
            src: "https://www.youtube.com/embed/NV5lxh0182E",
            href: "https://youtu.be/NV5lxh0182E",
            coverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772236528/DS20_dxajby.jpg",
            caption: { short: "A sneak preview of our ongoing iteration process focused on our core product surfaces.", verbose: "" },
            aspectRatio: "16/9"
          },

          { type: "heading", title: "Impact & Reflections" },
          {
            type: "callout-box",
            content: "Studio 2.0 handed over to engineering in January 2021 with a full rollout plan and executive buy-in. No conversion metrics to point to. What it produced was a shared design language, a four-tier component library, and an implementation plan the team could execute without me."
          }
        ]
      }
    },

    // PROX
    {
      id: "prox",
      company: "Prox",
      title: CASE_STUDIES_TITLES["prox"],
      impactSummary: "Sole designer and co-founder of Prox, a 1:1 expert video platform. Designed the full product from zero, helped raise an $800k seed round, shipped a closed beta with measurable traction, then navigated a COVID shutdown.",
      impactSummarySentence: "Designed the entire product as founding designer, from blank canvas to closed beta. Helped raise $800k. Then COVID happened.",
      designerNote: "This was 2019. I was the only designer, and I was figuring out things nobody had really figured out yet: how to make a structured video call feel better than an in-person conversation, how to give 15 minutes of paid access to an expert a shape that justified the price. Video calls were not a mainstream work tool yet. Zoom fatigue wasn't a phrase. The problems we were solving became widely understood only after a global pandemic made them everyone's daily reality.\n\nThe work looks dated now. The UI has the texture of 2019. But the product decisions underneath it were real, and some of them held up under actual user testing. This is where I learned what it means to be the only designer in the room when the room includes investors, engineers, and paying users.",
      thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772257040/booking-workflow-hero_odxazy.gif",
      thumbnailPadding: "p-8",
      thumbnailBgColor: "bg-blue-50",
      status: "complete",
      type: "product",
      blocks: [
        {
          type: "impact-box",
          metrics: [
            { value: "51%", label: "Rebooking rate across 130+ sessions" },
            { value: "4.3 / 5", label: "Average session rating" }
          ]
        }
      ],
      details: {
        heroImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772256905/1_1session_cbkkc0.gif",
        role: "Founding Designer",
        timeline: "2019 to Early 2020",
        collaborators: "Co-founder, 2 Engineers, Investors",
        type: "product",
        services: [
          SERVICES.PRODUCT_DESIGN,
          SERVICES.UX_RESEARCH,
          SERVICES.PROTOTYPING,
          SERVICES.STRATEGY,
        ],
        blocks: [

          { type: "heading", title: "Overview", hasDivider: false },

          { type: "heading", title: "The Company" },
          {
            type: "text",
            content: [
              "Prox was a 1:1 video platform connecting experts and learners through structured, paid conversations. The premise: high-profile professionals, creators, and entrepreneurs were impossible to reach directly. Their audience could watch a YouTube stream with 10,000 other people, but getting a real answer to a real question was not something those platforms were built to do.",
              "Prox gave experts a complete infrastructure: a personalized landing page, a calendar, payment processing, a booking system, and a structured video session. For learners, it was direct access to people who were otherwise unreachable. I joined as the founding designer and was the only designer on the team throughout the company's life."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772256905/1_1session_cbkkc0.gif",
            caption: {
              short: "The 1:1 session experience, the core of everything Prox was built around.",
              verbose: ""
            }
          },

          { type: "heading", title: "The Problems" },
          {
            type: "text",
            content: [
              "Three problems shaped the product. Experts had no direct monetization channel outside of ad-dependent platforms. Learners had no way to have a real conversation with someone they admired or wanted to learn from. And when those conversations did happen, through Facetime or Skype or a random Zoom link, they had no structure, no agenda, and often ended without the learner getting what they came for.",
              "The third problem was the one that most shaped the design work. A 15-minute conversation with someone charging $1,200 an hour is worth nothing if it goes off the rails in the first 5 minutes. Structure was not a nice-to-have. It was the product."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772257055/Perosna_yufum6.png",
            caption: {
              short: "Learner persona research — Gen Z and millennial users seeking direct access to experts.",
              verbose: "Research included 12 interviews with content creators and professionals, conducted at their consulting rate. We also worked through the angel investor network to reach people with experience in online mentorship and consulting relationships."
            }
          },

          { type: "heading", title: "The Booking Flow" },
          {
            type: "text",
            content: [
              "The booking flow was the first thing a learner experienced, and it needed to do a lot: land on a creator's page, understand the value proposition, pick a time, set up a session, and feel ready for the conversation ahead. Every step was a potential drop-off.",
              "I started with a detailed session request form that asked learners to select duration, choose topics, and add specific questions before submitting. The idea was that a structured request would produce a more structured session. Testing showed the opposite."
            ]
          },
          {
            type: "list",
            items: [
              {
                content: `<span class="process-step-title"><b>Landing Page</b></span><p class="mt-2">Each expert got a personalized URL they could share through their social channels. Early versions embedded a calendar directly on the landing page, which created a conflict with the primary CTA. The final version removed the calendar from this surface entirely and focused on a single action: book a session. Clean, responsive, and fast to set up.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772257051/Landing_page_creator_bys296.png",
                    caption: {
                      short: "Final expert landing page — one CTA, no calendar conflict.",
                      verbose: "Early versions embedded the calendar on the landing page, which competed with the booking CTA. Moving the calendar to a later step in the flow improved conversion clarity."
                    }
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Selecting a Time</b></span><p class="mt-2">Simple on purpose. Only available slots were shown. No friction, no decision fatigue. The calendar surfaced at this step instead of the landing page, where it made logical sense in the flow and didn't compete with anything.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772257044/Calendar_pwaoct.png",
                    caption: {
                      short: "Time selection — available slots only, no visual noise.",
                      verbose: ""
                    }
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>The Request Form, Before Research</b></span><p class="mt-2">The first version asked learners to choose a session duration, select topics, and add specific questions before submitting. Testing quotes were direct: "This is tiring," "I hope I can come back to this screen," "Can I just book and fill these out later?" Users could not establish a clear relationship between topics and questions. The form created friction before the value was established.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772257047/1_on_1_request_form_d7duh7.png",
                    caption: {
                      short: "Original request form — too much friction before booking.",
                      verbose: "The topics and questions distinction confused users across all test sessions. The form length created a decision barrier before learners had committed to the value of the session."
                    }
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>The Request Form, After Research</b></span><p class="mt-2">The research finding drove a real product decision: simplify to a single 15-minute session length, ask only for a time and a custom message, and defer all agenda-setting to after the booking was confirmed. This removed the friction entirely. The agenda would be built inside the session management view, where context made it meaningful rather than arbitrary.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772257057/request_form_interactive_bfpsxb.png",
                    caption: {
                      short: "Simplified request form after research: pick a time, add a message, done.",
                      verbose: "Removing duration selection and front-loading the agenda drove meaningful improvements in form completion. Agenda-setting moved to the sessions view where it had proper context."
                    }
                  },
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772257046/Book_session_desktop_mobile_uujaip.png",
                    caption: {
                      short: "Booking flow on desktop and mobile.",
                      verbose: ""
                    }
                  }
                ]
              }
            ]
          },

          { type: "heading", title: "Sessions and Agenda" },
          {
            type: "text",
            content: [
              "The Sessions page was where both experts and learners managed their upcoming and past engagements. It needed to surface the right actions clearly: launch a session, set an agenda, message the other party, or respond to a pending request.",
              "The session row was a UI component that carried a lot of weight. It needed to communicate who, when, how much, and what to do, all without requiring the user to open a detail view to understand the situation."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772257058/row_component_yake7v.png",
            caption: {
              short: "Session row component iterations — tested with a five-second test to find the clearest information hierarchy.",
              verbose: "The five-second test was used to identify which version communicated cost, date, time, and required action most immediately. The winning version deliberately led with the dollar amount: critical for experts evaluating whether to accept a request, and for learners to feel urgency around preparing their agenda."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772257060/session_requests_creator_side_bwieoo.png",
            caption: {
              short: "Expert-side session management — incoming requests and session queue.",
              verbose: ""
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772257042/agenda_items_and_requests_on_mobile_z0jl6g.png",
            caption: {
              short: "Agenda management on mobile — setting up questions before a session.",
              verbose: "The side panel pattern kept users in context while managing their agenda. A modal would have removed them from the sessions list entirely. The panel let them see both at once."
            }
          },

          { type: "heading", title: "The Video Experience" },
          {
            type: "text",
            content: [
              "The motto was better than in person. That sounds like marketing language but it was actually a design constraint. A 15-minute paid conversation needed to be more focused, more structured, and more productive than a spontaneous call. The video screen was where that promise either held or fell apart.",
              "The challenge was showing two camera feeds, an agenda, a chat, and session controls simultaneously without making the screen feel like a dashboard. Everything competed for attention, and the person across the camera was supposed to win."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772256906/mockup_handwritten_bxp2wx.png",
            caption: {
              short: "Early sketches — two-section layout with camera feeds and agenda space.",
              verbose: "Starting on paper before opening Figma. The two-section layout with separate camera and content areas became the foundational decision that all subsequent iterations built on."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772256901/video_chat_wireframe_wxfkmq.png",
            caption: {
              short: "Early wireframe iterations — working through navigation and information distribution.",
              verbose: "Tabbed navigation was explored and rejected early. Too much cognitive switching while also trying to hold a conversation. The goal became finding a single-screen layout that kept everything visible without feeling cluttered."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772256909/multi_screens_hy5xgi.png",
            caption: {
              short: "Mid-process exploration — dark mode to shift attention toward the video feed.",
              verbose: "The dark mode exploration came from a specific insight: the UI should recede so the camera feed dominates. Dark backgrounds reduced the visual weight of the agenda and controls without hiding them."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772256911/video_chat_sample_xdjlon.png",
            caption: {
              short: "Final video engagement screen — camera feeds, agenda, and session controls.",
              verbose: ""
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772256913/video_chat_queue_questions_isczae.png",
            caption: {
              short: "Agenda in session — questions highlighted as the conversation progresses.",
              verbose: "The decision to highlight rather than cross off answered questions came from a specific debate: who decides when a question is answered? The expert or the learner? Crossing off implied finality and created ownership friction. Highlighting the active question let the conversation flow without forcing either party to make that call."
            }
          },

          { type: "heading", title: "The Lobby" },
          {
            type: "text",
            content: [
              "The lobby is the screen a user sees in the 10 minutes before a session starts. It needed to do several things at once: surface the agenda so it could be reviewed, let users test their mic and camera, and create anticipation without creating anxiety. You paid $150 for 15 minutes with someone. You want to feel ready.",
              "Three iterations got the lobby to a place where it actually accomplished that. The early versions had unclear status communication and controls that felt premature. The final version led with the other person's presence and a countdown, with mic and camera controls accessible but not foregrounded."
            ]
          },
          {
            type: "list",
            items: [
              {
                content: `<span class="process-step-title"><b>V1</b></span><p class="mt-2">Timer as countdown, unclear status labels ("Now" vs "In Queue"), control icons that felt out of place this early in the flow. No strong visual cue about who the session was with.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772256903/waiting_room_lfjgie.png",
                    caption: { short: "Lobby V1 — unclear status, premature controls.", verbose: "" }
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>V2</b></span><p class="mt-2">Proper timer introduced, expert profile photo added, mic and camera testing moved here. The audio config bar felt out of place since it disappeared once the session started. Questions simplified into a single block.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772256899/waiting_room_2_tlrsu8.png",
                    caption: { short: "Lobby V2 — better hierarchy, still some unresolved controls.", verbose: "" }
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>V3</b></span><p class="mt-2">The final version created genuine anticipation. The expert's presence was the dominant element. Mic and camera were off by default (users had expressed that preference in testing) with controls accessible but not in the way. "Agenda" replaced "Questions" based on the same terminology research that informed the booking flow.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772256908/forum_sample_-_future_vision_jt7us5.png",
                    caption: { short: "Lobby V3 — anticipation-first layout, controls out of the way.", verbose: "" }
                  }
                ]
              }
            ]
          },

          { type: "heading", title: "Timers and Engagement Mechanics" },
          {
            type: "text",
            content: [
              "A 15-minute session is short. The UI needed to communicate time without creating pressure that derailed the conversation. Two timer conventions were designed to handle this.",
              "The first was a 60-second ice-breaking stage at the start, explicitly labeled. The naming acknowledged the awkwardness and gave both parties permission to ease in. The second was a gentle time-check at minute 14, surfaced smoothly rather than as an alarm. No interruption, just awareness."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772256900/retention_strategies_rebooking_ddofr2.png",
            caption: {
              short: "Post-session rebooking screen and retention mechanics.",
              verbose: "The post-session experience needed to accomplish three things simultaneously: thank the user, prompt a rebook, and request a rating. These competed visually. The final version prioritized rebooking, with feedback deferred to a follow-up sequence."
            }
          },

          { type: "heading", title: "User Testing" },
          {
            type: "text",
            content: [
              "The original plan was to observe the first live sessions directly. COVID made that impossible. Instead, 11 remote interviews were conducted immediately after sessions completed, while the experience was still fresh.",
              "Key findings: 5 of 9 learners did not notice the agenda was interactive. Conversations flowed well despite this, largely because the experts were skilled facilitators. The non-verbal behavior of the agenda was validated: users naturally implied moving to the next question without clicking anything, and the highlighting convention matched that behavior."
            ]
          },
          {
            type: "video",
            src: "https://www.youtube.com/embed/7HZtA0n1Hio",
            caption: {
              short: "User testing session recording — post-session interviews with beta participants.",
              verbose: "Conducted remotely due to COVID social distancing protocols. 11 interviews total, completed immediately after sessions to capture fresh recall."
            }
          },

          { type: "heading", title: "1:Many and Future Vision" },
          {
            type: "text",
            content: [
              "The 1:1 format validated the core product. The immediate next step was a 1:Many format, capped at 12 participants, where a group with a shared interest could book time with an expert together. More accessible for learners, significantly more profitable for experts.",
              "The standout feature was the question queue with voting. In a room of 12 people, democratic question selection replaced the expert having to manage the conversation manually. The 'on stage' mechanic took it further: when a voted question was selected, the learner who asked it came on screen. The auditorium moment, when someone from the crowd is handed the mic."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772256913/video_chat_queue_questions_isczae.png",
            caption: {
              short: "1:Many question queue with voting mechanic.",
              verbose: "In a group session, the queue let participants vote on which questions should be addressed. The most-voted questions surfaced to the top, giving the expert a clear read on what the room actually wanted to know."
            }
          },

          { type: "heading", title: "Beta Results" },
          {
            type: "text",
            content: [
              "The closed beta launched in April 2020 with two expert ambassadors, each with an established following and a consulting rate above $1,200 an hour. A 15-minute Prox session was a meaningfully lower barrier to access.",
            ]
          },
          {
            type: "impact-box",
            metrics: [
              { value: "51%", label: "Rebooking rate across 130+ sessions" },
              { value: "4.3 / 5", label: "Average session rating" },
            ],
            description: [
              "51% of learners rebooked after their first session. That was the number that mattered: it meant the product delivered enough value to pay for again."
            ]
          },
          {
            type: "impact-box",
            metrics: [
              { value: "$800k", label: "Seed round raised" },
            ],
            description: [
              "Raised before the video session feature shipped. The raise was built on the calendaring, landing pages, and marketplace prototype, and a thesis the investors bought before COVID changed the context entirely."
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772257053/Launch_metrics_2_ytihks.png",
            caption: {
              short: "Beta launch metrics — acquisition and conversion data from April to May 2020.",
              verbose: ""
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772257049/Creators_-_Top_earners_launch_jwhjjm.png",
            caption: {
              short: "Top earners view during the beta period.",
              verbose: ""
            }
          },

          { type: "heading", title: "What We Learned" },
          {
            type: "text",
            content: [
              "16 sessions had no agenda interactions at all, which pointed to a discoverability problem that needed to be addressed. 29 paid users went into sessions without setting up an agenda. 34 support requests came in about payment and scheduling logistics, a clear signal that the product flow was not self-explanatory enough in those areas.",
              "3 expert no-shows and 9 learner no-shows pointed to a gap in commitment mechanics. The platform was collecting money but not yet creating the kind of mutual accountability that would make no-shows feel costly to both parties."
            ]
          },

          { type: "heading", title: "Reflection" },
          {
            type: "text",
            content: [
              "Prox raised an $800k seed round. The product shipped, ran a real beta, and generated real revenue. Then COVID hit, and the world it was built for changed faster than the company could adapt. We shut down in early 2020.",
              "We were building infrastructure for video-based expert access before anyone thought they needed it. Six months after we shut down, remote video was everyone's daily reality and the market we had been targeting exploded. That's a difficult thing to sit with.",
              "What I took from Prox: how to make product decisions under real constraints, how to run research that actually changed what shipped, and what it feels like to be the only designer in a room with investors, engineers, and paying users all wanting different things. That education had a price tag attached to it."
            ]
          }

        ]
      }
    }
  ]
};

export const WORK_GROUPS = [
  {
    company: "Amazon Devices",
    logo: "Amazon",
    roleLine: "UX Designer - Devices · Sep 2022 to Jan 2026",
      projectIds: [
        "amazon-image-builder",
        "amazon-asset-manager",
        "amazon-metadata-studio",
        "amazon-ai-compositor",
        "amazon-inspire-tab",
        "amazon-ai-review-highlights"
      ]
  },
  {
    company: "Alto Pharmacy",
    logo: "Alto Pharmacy",
    roleLine: "Designer · 2021 to 2022",
    projectIds: ["alto-internal-tools", "alto-assistant"]
  },
  {
    company: "Patreon",
    logo: "Patreon",
    roleLine: "Sr. Product Designer · Creator Tools · 2020 to 2021",
    projectIds: ["patreon-creator-tools", "patreon-pledge-streak", "patreon-studio-2"]
  },
  {
    company: "Prox",
    roleLine: "Founding Designer · 2019 to 2020",
    projectIds: ["prox"]
  },
];

export const COMPANY_STRIPE_LOGOS = [
  { name: "Amazon", src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1769037966/amazon_logo_nctitw.png" },
  { name: "Alto Pharmacy", src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1769037966/alto_logo_h0b7wi.png" },
  { name: "Patreon", src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1769037966/patreon_logo_xd7xjw.png" },
  { name: "Carta", src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1769037966/carta_logo_n6po27.png" }
];

// Small normalizer to ensure details.heroImage and services are arrays
PORTFOLIO_DATA.projects.forEach((p) => {
  p.details = p.details || {};
  if (!isRealUrl(p.details.heroImage)) {
    p.details.heroImage = p.thumbnail || "";
  }
  if (p.details.services && !Array.isArray(p.details.services)) {
    p.details.services = [p.details.services];
  }
});