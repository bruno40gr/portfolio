import { PROJECT_STATUS, PRODUCT_TYPES, SERVICES } from "./tokens";
import { ASSETS } from "./assets";

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

// Generic Logos for placeholders
const FIGMA_PLACEHOLDER = "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg";
const LOOM_PLACEHOLDER = "https://cdn.worldvectorlogo.com/logos/loom-1.svg";

// ------------------------------------------
// Global data
// ------------------------------------------

const AMAZON_DEVICES_AI_IMAGE =
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80";

export const CASE_STUDIES_TITLES = {
  "amazon-devices-asset-system": "Amazon Devices Asset System",
  "jas-image-builder": "Image Builder",
  "jas-asset-browser": "Devices Component Asset Manager",
  "jas-metadata-studio": "Devices Metadata Studio",
  "jas-ai-generator": "Asset System AI Agent",
  "amazon-core-inspire-tab": "Inspire Tab",
  "amazon-core-ai-review-highlights": "AI-powered Customer Review Highlights",
  "alto-internal": "Alto Pharmacy Internal Tools",
  "alto-assistant": "Alto Assistant App",
  "patreon-creator-tools": "Benefit Delivery Tools for Creators",
  "patreon-pledge-streak-patent": "Pledge Streak Patent",
  "patreon-studio2.0": "Studio 2.0 Design System",
  "prox": "Prox",
  "portfolio-systems": "Building the Bridge: An Iterative Systems Journey",
};

export const PORTFOLIO_DATA = {
  profile: {
    name: "Bruno",
    subName: "Wong M.",
    email: "hello@brunowong.me",
    location: "Sacramento, CA"
  },
  projects: [

    // AMAZON DEVICES ASSET SYSTEM (umbrella)
    {
      id: "amazon-devices-asset-system",
      company: "Amazon",
      title: CASE_STUDIES_TITLES["amazon-devices-asset-system"],
      impactSummary: "Designed the platform giving Amazon Devices a single place to generate, manage, and publish marketing assets across 22 global marketplaces.",
      impactSummarySentence: "Designed the platform giving Amazon Devices a single place to generate, manage, and publish marketing assets across 22 global marketplaces.",
      designerNote: "Amazon Devices launches campaigns across 22 marketplaces, with hundreds of specialists, marketers, designers, pricing leads, localization teams, product owners, each owning a fragment of the same process, working across different tools, with no shared source of truth. Every campaign paid a coordination tax for that fragmentation. This project was my attempt to design a way out of it: a unified platform where assets could be generated, managed, and published globally without the overhead that was slowing everything down. Two of the four pillars have shipped and shown measurable impact. Two are still in build. This is the most strategically significant work of my career, and it isn't finished yet.",
      thumbnail: AMAZON_DEVICES_AI_IMAGE,
      status: "IN_BUILD",
      type: "INTERNAL",
      details: {
        heroImage: AMAZON_DEVICES_AI_IMAGE,
        role: "Lead UX Designer",
        timeline: "2024 to Today",
        team: "Automate & Scale",
        type: "INTERNAL",
        services: [SERVICES.STRATEGY, SERVICES.SYSTEMS_DESIGN, SERVICES.AI_WORKFLOWS],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "impact-box",
            metrics: [
              { value: "45-50", label: "Specialist Workflows Automated" },
              { value: "8,000+", label: "Assets Generated for Prime Day 2025" }
            ],
            description: [
              "Two of the four platform pillars have shipped. For Prime Day 2025 alone, their deployed workflows generated over <b>8,000 assets</b>, accounting for an estimated <b>48,000 hours</b> of previously manual work across the team."
            ]
          },
          {
            type: "text",
            content:
              "I was the lead UX designer on the Automate & Scale team inside Amazon Devices and Services. Our team supported 800 merchandisers globally across 22 marketplaces, launching and managing the Amazon family of Devices, including Echo, Ring, Blink, Fire TV, Eero, Tablets, and more."
          },
          { type: "heading", title: "The Fragmentation Problem" },
          {
            type: "text",
            content:
              "There was no central place to create, manage, or publish marketing assets for Amazon Devices globally. Campaigns were assembled across spreadsheets, legacy tools, creative software, and off-Amazon systems, with marketers, graphic designers, product leaders, pricing specialists, and localization teams each owning a different fragment of the same asset. Every handoff was a potential failure point. Every permission dependency added latency. Every tool switch introduced version drift."
          },
          {
            type: "text",
            content:
              "I mapped the end-to-end workflow required to build a campaign, from landing pages and detail pages to all supporting imagery, across every team involved. The map made the problem legible to stakeholders and became the foundation for how the platform was scoped and sequenced."
          },
          {
            type: "image-full",
            src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1600&q=80",
            caption: "End-to-end campaign workflow map, designed to surface fragmentation points and align stakeholders on scope."
          },
          { type: "heading", title: "The Platform: Four Pillars" },
          {
            type: "text",
            content:
              "Rather than solving individual pain points in isolation, I designed the system as a connected platform. Each pillar addresses a distinct layer of the asset production problem, visual library, metadata intelligence, automated generation, and AI-assisted composition, and each feeds the next. Two pillars have shipped and are delivering measurable impact. Two are in active build."
          },
          { type: "pillar-grid" },
          { type: "heading", title: "North Star: End-to-End Creative Automation" },
          {
            type: "text",
            content:
              "The four pillars are each valuable independently, but they were designed with a unified end state in mind. The north star is a platform where a merchandiser can brief a campaign, and the system handles generation, copy placement, device selection, and global propagation without requiring a specialist at every step."
          },
          {
            type: "text",
            content:
              "This prototype illustrates that future state. It is not a shipping spec. It is a strategic alignment tool, built to show leadership what becomes possible once all four pillars are in place and connected."
          },
          {
            type: "video",
            src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            caption: "Vision prototype illustrating end-to-end creative automation for Amazon Devices campaign launches."
          }
        ]
      }
    },

    // PILLAR 1: IMAGE BUILDER
    {
      id: "jas-image-builder",
      parentId: "amazon-devices-asset-system",
      company: "Amazon Devices",
      title: CASE_STUDIES_TITLES["jas-image-builder"],
      impactSummary: "An automated production system enabling localized asset generation at scale across 23 global marketplaces.",
      impactSummarySentence: "A scalable editor enabling localized marketing asset generation across all global marketplaces.",
      designerNote: "Before this system, teams were manually compositing assets across dozens of marketplaces using inconsistent regional templates, rebuilding the same work multiple times over. At 23 markets and every major launch, that model couldn't scale. I wanted to design something that absorbed the mechanical work so people could focus on what actually requires judgment. For Prime Day 2025 alone, it produced 8,000 lifestyle images and freed the equivalent of 45 designers and marketers from repetitive production work. This became the first pillar of the Asset System, and the foundation everything else was built on.",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
      status: "LAUNCHED",
      type: "INTERNAL",
      details: {
        hero: { type: 'animated' },
        heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
        role: "Lead UX Designer",
        timeline: "September 2024 to February 2025",
        team: "Automate & Scale",
        type: "INTERNAL",
        services: [SERVICES.SYSTEMS_DESIGN, SERVICES.PROTOTYPING, SERVICES.UI_DESIGN],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },

          { type: "heading", title: "The Product" },
          {
            type: "text",
            content: [
              "A visual editor that lets merchandisers build, localize, and export marketing assets across 23 global marketplaces without touching Photoshop. Teams select a template, configure their markets and languages, and the system handles the rest."
            ]
          },
          {
            type: "figma",
            src: "https://www.figma.com/proto/Hm4V3LSFtdcJKC1e5UWYls/JAS-Image-Builder-Final-Build-Spec?page-id=0%3A1&node-id=163-36427&scaling=min-zoom&t=PcpidMXEz6GOqzKf-1&content-scaling=fixed&p=f",
            caption: {
              short: "Interactive prototype, click through to explore the full flow",
              verbose: "This is a close representation of the shipped product. The core interaction model has been consistent since early prototyping. The flow goes like this: select your marketplaces and dimensions, add a background image, select or generate a product composition (as shown in this example), then add a logo. From there, AI generates marketing copy and auto-translates it into all the corresponding languages. Finally, you export and the images are ready for Amazon. That last step is a big shortcut in the prototype. In the real product, the experience is non-linear. You can break apart any image, edit individual elements, and drag and drop to adjust. Apologies if not everything is clickable."
            },
            coverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772062490/Screenshot_2026-02-25_at_3.34.36_PM_dwqrvv.png",
            aspectRatio: "4/3"
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772133252/1326499e-dd49-4bbf-9d7e-0a82f84787e2.png",
            caption: {
              short: "Sample of creating lifestyle images on both desktop and mobile screens simultaneously",
              verbose: ""
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772062999/82224a14-60f5-4a43-8eae-4691b725ef61.png",
            caption: {
              short: "Screenshot of the bundle image generator, which creates geometrically accurate image compositions of Amazon devices",
              verbose: "For the first launch of the Image Builder we built a micro interaction that allowed the machine, not AI, to assemble compositions that meet the design bar. Previously this was done in Photoshop and shared async, making it impossible to automate."
            }
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772081260/1f882db6-e8bd-45c9-9514-7b4546850089.png",
            caption: {
              short: "Leveraging LLMs to automatically translate marketing copy that is culturally relevant, native, and punchy",
              verbose: "We studied how marketers hired local native speakers to construct, maintain, and share localized copy. By applying our brand voice, we built a flow where the tool could instantly generate copy that matches character requirements and cultural context. Human in the loop could always regenerate, edit, or override the generated copy at any time."
            }
          },

          { type: "heading", title: "Design Strategy" },
          {
            type: "text",
            content: [
              "While the product strategy was a team effort, I owned the end-to-end UX and UI. The focus was on replacing a fragmented, manual toolchain with a visual editor that merchandisers could use without needing design skills. The layout engine was built to handle spacing, copy placement, and visual balance across dozens of size formats automatically.",
              "The system supports structured templates for consistency but allows flexibility when teams need it. Working closely with engineering, we built in guardrails that automatically flag pricing inconsistencies, device availability issues, and brand conflicts by reading each image's metadata.",
              "The goal was never to build another design tool. It was a production system that handled the repetitive steps so users could focus on content and clarity. Features like drag-and-drop editing and smart filters kept the tool fast and usable for non-designers."
            ]
          },

          { type: "heading", title: "Process" },
          {
            type: "list",
            items: [
              {
                content: `<span class="process-step-title"><b>Discovery & User Insights</b></span><p class="mt-2">We ran a hands-on discovery phase, doing scrappy usability sessions with global merchandisers to understand where their workflows broke down and what the tool actually needed to solve.</p>`,
                visuals: [
                  {
                    kind: "embed",
                    src: "https://player.cloudinary.com/embed/?cloud_name=diy08lj9x&public_id=JAS_-_Metadata_Photoshop_1_mstvm3",
                    caption: {
                      short: "Research session: observing how brand designers manually built image assets.",
                      verbose: "During these sessions, we watched designers work through their existing process, noting where time was lost and where errors crept in. That direct observation shaped the core priorities of the Image Builder and made sure we were solving real problems, not assumed ones."
                    }
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Information Architecture & Iteration</b></span><p class="mt-2">Designing for 23+ marketplaces meant handling a lot of configuration options at once. I went through many rounds of iteration on the layout and navigation until landing on a structure that kept things clear even at its most complex.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1771907702/layout_iterations_bwvimg.jpg",
                    caption: {
                      short: "A look into my messy but methodical iteration process for solving complex navigation and multi-market filtering logic.",
                      verbose: "I apologize for the chaos in these mockups as they probably do not make sense at a glance. I wanted to demonstrate how I think and iterate across various fidelities to solve high density UI challenges. These screens represent a deep dive into screen orientation and side nav navigation while trying to fit a massive amount of data into a single cohesive experience. One of the biggest hurdles was making it easy for a user to select from 23+ marketplace and language combinations. I spent a lot of time stress testing scenarios where multiple locales and dimensions are selected at once to ensure the layout remains clear and functional even at its most complex."
                    }
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Stress-Testing & Guardrails</b></span><p class="mt-2">Publishing assets globally meant the stakes for errors were high. We designed guardrails and smart defaults to catch regional conflicts, device mismatches, and legal requirements before anything reached a reviewer, guiding users toward a result that was correct from the start.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1771893728/image_builder_contraintst_d4ha0z.jpg",
                    caption: {
                      short: "Automated guardrails for regional compatibility, device constraints, and visual spec validation.",
                      verbose: "Publishing images globally carried high stakes, from internal leaks to regional mismatches. To be honest, I'd usually rather avoid these kinds of loud warnings, they aren't 'sexy,' they look gnarly, and they clutter a clean UI. However, this was a hard requirement and absolutely necessary to prevent costly mistakes. By implementing 'correct-by-construction' logic, the system anticipates errors by filtering for marketplace-compatible devices and providing real-time feedback on text density, ensuring designs are validated before they ever hit a reviewer's desk."
                    }
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Prototyping for Alignment</b></span><p class="mt-2">I built high-fidelity prototypes to validate the interaction model and get everyone on the same page, from engineering to marketing leadership. Showing the system in motion was the fastest way to build trust and surface gaps before development started.</p>`,
                visuals: [
                  {
                    kind: "embed",
                    src: "https://res.cloudinary.com/diy08lj9x/video/upload/v1772053861/JAS-builder-demo_e7zrhr.mp4",
                    caption: {
                      short: "Prototype presentation where I demo the future stage of the Image Builder",
                      verbose: "Part of my process is to build high-fidelity prototypes that demonstrate the interaction logic and edge cases. This prototype was built to show leadership what becomes possible once all four pillars of the Asset System are in place and connected, with the Image Builder as the foundation. It was also a critical tool for communicating complex logic to engineering and ensuring we were aligned on how the system should function before development began."
                    }
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Contributing to Amazon's Design System</b></span><p class="mt-2">Meridian is Amazon's official design system, used across every internal team. Image Builder was complex enough that it needed components Meridian didn't have. I designed three of them, took each through the formal contribution process, and got them approved. They now live in the system for any team to use.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772132455/pg3_ygvgls.png",
                    caption: {
                      short: "Interactive editing canvas component request submitted to Meridian.",
                      verbose: "This was the most novel of the three submissions. Image Builder needed a live editing canvas where users could select, drag, and resize content layers directly on an image preview, all inside a standard Meridian layout. Nothing like this existed in the system. This component request made the case for a supported approach so teams wouldn't have to bypass Meridian to ship interactive editing surfaces."
                    }
                  },
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772132465/pg1_uhrgx3.png",
                    caption: {
                      short: "Locale filter component request submitted to Meridian.",
                      verbose: "This submission covers the multi-select locale filter: a reusable component for selecting marketplace and language combinations, displaying country flags and grouped entries inline. The existing Meridian dropdown couldn't scale to this level of complexity, so a new component was the only clean path forward."
                    }
                  },
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772130218/pg1_a1macp.png",
                    caption: {
                      short: "Warning input state component request submitted to Meridian.",
                      verbose: "Each new component required a formal pitch to the Meridian team, reviewed by their PMs, engineers, and UX leads. This submission covers the warning (amber) state for input fields: a way to alert users that their edit may overwrite values across other locales or platforms, without implying something has gone wrong."
                    }
                  }
                ]
              }
            ]
          },

          { type: "heading", title: "Launch & Tradeoffs" },
          {
            type: "text",
            content: [
              `<ul class="list-disc pl-5 space-y-3">
                <li>Launched in March 2025 with a focused v1 scope. Scoping to two formats was the right call, though they introduced real UX tension. The Herotator, the prominent carousel on Amazon.com landing pages (desktop only), and Single Creative Cards, a homepage banner format (mobile only), had fundamentally different information architectures. Consolidating both into a single shared template made multi-format input feel cumbersome, and that tradeoff was felt throughout the experience.</li>
                <li>Lifestyle images were the starting point and became the org-wide production standard after the Asset System AI Agent launched in mid-2025, making generation fully automated at scale.</li>
                <li>The absence of drag and drop was the most significant tradeoff at launch. Without it, users were constrained to fixed layouts that frequently fell short of the creative bar, and that friction showed up in adoption numbers during the first two months.</li>
                <li>By Prime Day 2025, drag and drop was live and the tool reached full adoption across all supported formats.</li>
              </ul>`
            ]
          },

          { type: "heading", title: "Impact & Operational ROI" },
          {
            type: "impact-box",
            metrics: [
              { value: "100k+ hours", label: "Projected Annual Savings" },
              { value: "45-50", label: "Specialist Workflows Automated" }
            ],
            description: [
              "For Prime Day 2025 alone, the deployed workflows produced <b>8,000 lifestyle images</b>, accounting for an estimated <b>48,000 hours</b> of previously manual work. This reclaimed time allowed creative and marketing teams to shift from repetitive production to high-level creative work."
            ]
          }
        ]
      }
    },

    // PILLAR 2: ASSET MANAGER
    {
      id: "jas-asset-manager",
      parentId: "amazon-devices-asset-system",
      company: "Amazon Devices",
      title: "Devices Component Asset Manager",
      impactSummary: "A centralized library for the Amazon Devices catalog that enables AI automation and makes marketing images easy to find across global markets.",
      impactSummarySentence: "A centralized asset library that simplifies image discovery and enables AI-powered automation.",
      designerNote: "The Image Builder shipping made one thing immediately clear: the automation pipeline was only as good as the assets feeding it. Device photos, background images, and confidential pre-release prototypes were scattered across multiple cloud systems with no consistent naming, no access governance, and no way to know if what you found was current. Every automation run was only as reliable as the weakest asset in the chain. I designed the Asset Manager to be the source of truth that everything else depends on, simple to navigate on the surface, with the governance and AI-readiness logic handled underneath.",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
      status: "IN_BUILD",
      type: "INTERNAL",
      details: {
        heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
        role: "Lead UX Designer",
        timeline: "Ongoing: Estimated Q2 2026",
        team: "Automate & Scale",
        type: "INTERNAL",
        services: [SERVICES.SYSTEMS_DESIGN, SERVICES.UX_RESEARCH, SERVICES.UI_DESIGN],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "callout-box",
            content: "The Asset Manager serves as the visual library for Amazon Devices. It is the operational layer that allows for AI training, metadata organization, and automated image generation across our entire system."
          },
          {
            type: "text",
            content: [
              "Our organization had no single source of truth for visual assets. Teams struggled to locate the right images, which led to outdated assets being used in production or work being duplicated across markets. The Image Builder could only scale if it was powered by a reliable, well-governed system of device photos, backgrounds, and confidential prototypes.",
              "Marketing images were scattered across multiple internal systems, requiring heavy manual tracking and off-platform management. This tool, known internally as DCAM, was designed to solve that dependency and simplify how teams interact with the product catalog."
            ]
          },
          { type: "heading", title: "Design Strategy" },
          {
            type: "text",
            content: [
              "I designed the Asset Manager to be a simple discovery tool that handles complex logic under the hood. The goal was to let a user find the right asset in seconds while the system managed the rules for confidentiality, regional availability, and AI requirements.",
              "By focusing on a clean and familiar interface, I ensured the tool felt intuitive for merchandisers while still supporting the strict governance and automation workflows that touch every part of the broader Asset System."
            ]
          },
          { type: "heading", title: "Process" },
          {
            type: "list",
            items: [
              {
                content: `<span class="process-step-title"><b>UX Research: Learning How Teams Search</b></span><p class="mt-2">I met with merchandisers across different markets to observe how they managed images today. Inconsistent naming, scattered storage, and varied access patterns were the biggest blockers to speed. These insights shaped the browser's navigation and information architecture.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: ASSETS.testImage,
                    caption: "Researching asset retrieval habits and naming inconsistencies across global markets."
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Managing Complexity with Smart Filtering</b></span><p class="mt-2">With hundreds of product IDs and multiple device generations to track, I focused on a powerful but simple filtering UI. I added clear visual cues for unreleased prototypes and restricted content to prevent accidental leaks and reduce legal risk.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1769731424/175c5a76-0e29-4787-a5c9-0eb3c11a870b.png",
                    caption: "Designing visual guardrails and access controls for restricted assets."
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Streamlining the Approval Workflow</b></span><p class="mt-2">Marketing partners needed a reliable way to approve, reject, or request changes to images without leaving the platform. Previously, these reviews happened offline and required multiple layers of manual follow-up. I worked closely with the QA and design teams to build a lean approval flow directly into the tool, which became a major factor in early team adoption.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: ASSETS.testImage,
                    caption: "UX flow for the integrated QA and approval process."
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Evolving the System</b></span><p class="mt-2">This project required new UI patterns that Meridian did not yet have. I designed these new components, including batch management dashboards and metadata panels, and contributed them back to the system for other internal teams to use.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: ASSETS.testImage,
                    caption: "Component extensions and improvements contributed back to Meridian."
                  }
                ]
              }
            ]
          },
          { type: "heading", title: "Functional Blueprint" },
          {
            type: "text",
            content: [
              "This developer-ready blueprint is the source of truth for the build. The clickable prototype covers core features that we researched and validated, including batch management and smart filtering. It clearly defines the interaction logic and edge cases to make sure the final tool works exactly as intended."
            ]
          },
          {
            type: "figma",
            src: "https://www.figma.com/proto/PG1SSc8aZlpS9atMCvKg3M/DCAM-Final-Build-Spec?page-id=174%3A13910&node-id=2243-25245&scaling=min-zoom&t=s3IjMY4Gl6tH4KiA-1&content-scaling=fixed&p=f",
            caption: "Clickable prototype for batch management and smart filtering.",
            coverImage: FIGMA_PLACEHOLDER,
            aspectRatio: "16/9"
          },
          { type: "heading", title: "Outcome" },
          {
            type: "text",
            content: [
              "Although still in development, this browser is already the foundation for the Image Builder. It has turned our massive catalog into a searchable, automation-ready library that serves as the operational layer for our AI engine. By centralizing our assets, we are not only saving production time but also ensuring that every marketing image used globally is current and brand-compliant."
            ]
          }
        ]
      }
    },

    // PILLAR 3: METADATA STUDIO
    {
      id: "jas-metadata-studio",
      parentId: "amazon-devices-asset-system",
      company: "Amazon Devices",
      title: CASE_STUDIES_TITLES["jas-metadata-studio"],
      impactSummary: "Designed an AI-assisted configuration flow that automates metadata ingestion, acting as the intelligence layer for high-scale image generation.",
      impactSummarySentence: "Designed an AI-assisted configuration flow that transforms manual data entry into intelligent automated verification.",
      designerNote: "I approached this as a critical systems challenge. The team had accepted manual metadata entry as the unavoidable cost of running an AI pipeline. I didn't think that was right. I pushed beyond the original scope to run AI feasibility experiments nobody had formally approved, and those experiments proved that 90% of the metadata burden could be automated. That shifted the project from a data-entry form into something much more interesting: a tool that meets designers where the data is born and extracts it automatically, leaving only the decisions that genuinely require human judgment.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      status: "IN_BUILD",
      type: "INTERNAL",
      details: {
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
        role: "Lead UX Designer",
        timeline: "August 2025 to Today",
        team: "Automate & Scale",
        type: "INTERNAL",
        services: [SERVICES.UX_RESEARCH, SERVICES.SYSTEMS_DESIGN, SERVICES.AI_WORKFLOWS],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "callout-box",
            content: "The Metadata Studio serves as the intelligence layer for Amazon Devices. It is the configuration engine that compiles the complex metadata required to power AI training and automated image generation."
          },
          {
            type: "text",
            content: [
              "Our automation pipeline had a critical flaw: it required massive amounts of data that we had no scalable way to collect. System Designers had to manually input up to 90 metadata fields for every single asset to ensure it worked with our AI models. This manual tax created a bottleneck that threatened to stall the entire automation roadmap.",
              "The image generation engine could only scale if it was fed precise, validated data. We needed a tool that could gather this intelligence without turning designers into data entry clerks."
            ]
          },
          { type: "heading", title: "Design Strategy" },
          {
            type: "text",
            content: [
              "I owned the research, UX, and product direction. My strategy was to move from manual entry to intelligent verification. I audited every metadata field and classified them into three categories: Inferred (data the system can see), Suggested (data the AI can estimate), and Manual (data requiring human judgment).",
              "I ran multiple stress tests with AI models to validate this approach. While general image sorting proved non-essential, other tests showed strong results. We proved that AI could reliably identify product colors and angles with high precision. These experiments let us design a UI that felt like a partner rather than a form, using correct-by-construction logic to ensure every asset was ready for the engine."
            ]
          },
          { type: "heading", title: "Process" },
          {
            type: "list",
            items: [
              {
                content: `<span class="process-step-title"><b>Discovery & Workflow Mapping</b></span><p class="mt-2">I partnered with the Devices Brand Studio to shadow their Photoshop and script-based workflows. This research helped me identify exactly where metadata was being created and where we could intercept it automatically to reduce manual re-entry.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: ASSETS.testImage,
                    caption: "Shadowing Photoshop automations and mapping where metadata is created in the existing pipeline."
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>The Heavy Lifting: Classification</b></span><p class="mt-2">Working with engineering and data science, I built a taxonomy model to decide which fields to hide and which to surface. We moved from a model where everything was manual to one that prioritizes intelligent defaults.</p>`,
                visuals: []
              }
            ]
          },
          {
            type: "table",
            title: "Metadata Taxonomy",
            columns: ["Category", "Metadata Fields", "How It's Handled"],
            rows: [
              ["Inferred", "Color identification, product angle detection, and image type categorization.", "Fully Automated: AI vision models extract this data directly from the uploaded file without user input."],
              ["AI-Suggested", "Screen warping, visual variant matching, and proportional scaling.", "Augmented: The system calculates these values or generates the visual effect, then asks the user for a quick confirmation."],
              ["Manual", "Regional compatibility, legal expiration dates, and screen coordinate mapping.", "Human-in-the-loop: These fields require high-level judgment or specific legal knowledge that cannot be safely automated."]
            ]
          },
          {
            type: "list",
            items: [
              {
                content: `<span class="process-step-title"><b>Validation Experiments</b></span><p class="mt-2">I ran AI experiments to test feasibility. Color detection came in at 100% accuracy and angle detection at 90%. I also prototyped a Screen Mapper where a user draws a simple boundary, letting the AI handle complex perspective warping and glare application automatically.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: ASSETS.testImage,
                    caption: "Early AI experiments validating what could be inferred: color detection, angle detection, screen mapping, and variant classification."
                  }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Prototyping & Refining</b></span><p class="mt-2">I built low-fidelity prototypes to show the team how a reduced-input workflow would actually feel. The final workflow focused on speed, clarity, and preparing assets for future AI-driven automation.</p>`,
                visuals: [
                  {
                    kind: "image",
                    src: ASSETS.testImage,
                    caption: "Low-fidelity prototype focused on speed: fewer fields, stronger defaults, and clearer validation states."
                  }
                ]
              }
            ]
          },
          { type: "heading", title: "Outcome & Impact" },
          {
            type: "text",
            content: "We proved that the system will handle the heavy lifting. By shipping this in Q3, we are moving from a theoretical bottleneck to a validated automated workflow. Our research confirmed that 3D artists and System Designers can stop acting as data entry clerks and focus on creative quality, knowing the system will handle the rest."
          },
          {
            type: "impact-box",
            size: "large",
            metrics: [
              { value: "3 Steps", label: "Down from ~50 manual inputs per component image" },
              { value: "99% accuracy", label: "In automated image composition validation" }
            ]
          },
          {
            type: "text",
            content: "Additional success metrics include 90% accuracy in photography angle detection through AI vision models, and a reduction in leak risk to 0.5% compared to manual, spreadsheet-dependent handoffs."
          }
        ]
      }
    },

    // PILLAR 4: AI GENERATOR
    {
      id: "jas-ai-generator",
      parentId: "amazon-devices-asset-system",
      company: "Amazon Devices",
      title: "Asset System AI Agent",
      impactSummary: "Developed a specialized AI utility to automate product placement and layout rules, accelerating asset production for Amazon Devices.",
      impactSummarySentence: "Developed a generative AI utility that automates complex product placement and learns from human design feedback.",
      designerNote: "This project was a reality check. We proved that AI could generate high-quality composites at scale, but we also discovered that human review was a massive bottleneck. A 4-minute review cycle sounds fast until you multiply it by thousands of images. That finding directly drove the Metadata Studio project, which was designed to eliminate the manual overhead that was slowing the whole pipeline down. Sometimes the most valuable output of a shipped tool is what it teaches you about the next problem to solve.",
      thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
      status: "LAUNCHED",
      type: "INTERNAL",
      details: {
        heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
        role: "Lead UX Designer",
        timeline: "December 2024 to March 2025",
        team: "Automate & Scale",
        type: "INTERNAL",
        services: [SERVICES.PRODUCT_STRATEGY, SERVICES.AI_WORKFLOWS, SERVICES.UX_DESIGN],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "callout-box",
            content: "JASAI is a generative sandbox designed to automate the creation of lifestyle imagery. It functions as a specialized compositing agent that understands how Amazon hardware should behave physically and aesthetically within real-world environments."
          },
          {
            type: "text",
            content: [
              "Lifestyle images are the most complex assets we produce. They require placing a proprietary device image, already cropped and measured, into a generated or photographed environment. The composite must respect camera angles, lighting volume, depth, perspective, and copy space.",
              "Creating these manually is unscalable. We needed an agent that could generate these images in batches while adhering to our rigid design bar. The goal was not just to generate images but to create a system where every output, pass or fail, served a purpose."
            ]
          },
          { type: "heading", title: "Design Strategy" },
          {
            type: "text",
            content: [
              "My strategy focused on the human-in-the-loop. We knew the AI would not be perfect on day one, so the design challenge was creating a feedback loop that could translate subjective design direction into objective training data.",
              "I designed a qualification interface for Creative Directors and 3D Artists. Instead of a simple approval, the UI required specific reasoning for rejections, flagging issues like shadow quality, choppiness, or perspective mismatch. This structured data was fed directly back to the science team to adjust the algorithm, ensuring the model improved with every batch."
            ]
          },
          { type: "heading", title: "Process" },
          {
            type: "list",
            items: [
              {
                content: `<span class="process-step-title"><b>Defining Correct Placement</b></span><p class="mt-2">I worked with the Brand Studio to codify the rules for angles, shadows, and screen behavior. We had to teach the model that a Fire TV in a living room behaves differently than an Echo Show in a kitchen, establishing a ground truth for the AI to aim for.</p>`,
                visuals: [{ kind: "image", src: ASSETS.testImage, caption: "Codifying physical rules for device placement in varied environments." }]
              },
              {
                content: `<span class="process-step-title"><b>Designing the Feedback Loop</b></span><p class="mt-2">I built the micro-tool used by directors to review batches of hundreds of images. The interface allowed them to rapidly approve market-ready assets or reject failures with specific tags. This ensured that rejected data was just as valuable as approved data for training purposes.</p>`,
                visuals: [{ kind: "image", src: ASSETS.testImage, caption: "The qualification interface used to tag failures and train the model." }]
              },
              {
                content: `<span class="process-step-title"><b>Stress-Testing the Workflow</b></span><p class="mt-2">We discovered that reviewing a batch took approximately 4 minutes, which leadership flagged as a scalability risk. This was a critical insight: while the AI could generate the visuals, the metadata input and review process needed the heavy automation I eventually built in the Metadata Studio project.</p>`,
                visuals: []
              }
            ]
          },
          { type: "heading", title: "The Delivered Product" },
          {
            type: "text",
            content: [
              "The final tool was designed for high-velocity review. The system generated 4 variations per prompt, allowing directors to select the best option or reject the set entirely. This 4:1 ratio ensured quality while maintaining speed.",
              "To manage volume, I implemented a statistical significance model: rather than reviewing 100% of the output, the system presented a random 5% sample. If the sample passed, the batch was approved. If it failed, the rejection tags retrained the model. This workflow allowed us to ingest thousands of images without overwhelming the creative team."
            ]
          },
          {
            type: "figma",
            src: "https://www.figma.com/proto/PG1SSc8aZlpS9atMCvKg3M/JASAI-Final-Build-Spec?page-id=174%3A13910&node-id=2243-25245&scaling=min-zoom&t=s3IjMY4Gl6tH4KiA-1&content-scaling=fixed&p=f",
            caption: "The batch review dashboard showing the selection and rejection feedback flow.",
            coverImage: FIGMA_PLACEHOLDER,
            aspectRatio: "16/9"
          },
          { type: "heading", title: "Outcome & Impact" },
          {
            type: "text",
            content: "Since launch in December 2024, the agent has generated over 12,000 variations. Through the review process, we successfully added 3,000 fully validated, market-ready assets to the system, all created without a graphic designer moving a single pixel."
          },
          {
            type: "impact-box",
            size: "large",
            metrics: [
              { value: "3,000 Assets", label: "Created with zero manual design work" },
              { value: "99.5% approved", label: "Q1 2026 target for GenAI images meeting the design bar" }
            ]
          },
          {
            type: "text",
            content: "An additional success metric: 100% of rejected images are reused as training data, ensuring every failure strengthens the model."
          }
        ]
      }
    },

    // INSPIRE TAB
    {
      id: "amazon-core-inspire-tab",
      company: "Amazon Devices",
      title: CASE_STUDIES_TITLES["amazon-core-inspire-tab"],
      impactSummary: "Adapted Amazon's creator-driven shopping feed for Smart Home, shaping the ML ranking, catalog logic, and creator tooling that made device discovery trustworthy at scale.",
      impactSummarySentence: "Adapted Amazon's creator-driven shopping feed for Smart Home, shaping the ML ranking, catalog logic, and creator tooling that made device discovery trustworthy at scale.",
      designerNote: "My team didn't build Inspire. We inherited it from the Community Shopping team and were asked to make it work for Smart Home, a category where a wrong recommendation doesn't just miss, it erodes trust. That meant adapting our design library and components, working directly with Smart Home creators, and collaborating with data science to fine-tune our ML algorithms to prioritize the right products. Operating inside a platform someone else built, at Amazon scale, is its own design discipline. It demands precision about where you push, fluency across functions, and the ability to translate between catalog, ML, and customer experience in the same conversation.",
      thumbnail: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80",
      status: "DEPRECATED",
      type: "MOBILE",
      details: {
        heroImage: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80",
        role: "UX Lead, Smart Home Devices Adaptation",
        timeline: "Late 2022 to Early 2025",
        team: "Core Shopping",
        type: "MOBILE",
        services: [SERVICES.STRATEGY, SERVICES.UI_DESIGN, SERVICES.PROTOTYPING],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "callout-box",
            content: "Inspire was a company-level initiative inside the Amazon app designed to become a primary destination for recreational shopping and product discovery. The feature originated with the Community Shopping team. My team, on the Devices and Smart Home side, collaborated with them to customize and adapt Inspire specifically for our devices shopping experience."
          },
          {
            type: "text",
            content: [
              "Inspire launched on December 8, 2022 and delivered a ~2% lift in total units sold, representing roughly 13.5M devices worldwide. Although we inherited standardized design elements and a platform already in motion, we needed to make several strategic adaptations to make it work for Smart Home.",
              "My focus spanned three areas: adapting our design library and components, establishing partnerships with key Smart Home content creators, and collaborating with data science to fine-tune the ML algorithms to prioritize products that performed well in a social-media-style format. The challenge was not content volume. Inspire drew from a library of over 1.3 million unique content items, all ranked and personalized without manual curation. The challenge was ensuring the right devices surfaced with the right context, without eroding customer trust in a category where compatibility and correctness matter."
            ]
          },
          { type: "heading", title: "The Problem" },
          {
            type: "text",
            content: [
              "Inspire's feed was tailored to each customer based on past shopping and browsing behavior, plus ongoing engagement with content. Like everything at Amazon, it relied on ML-based ranking and personalization. For most categories, optimizing on engagement works. For Smart Home, the cost of a mismatch is high.",
              "A customer who buys the wrong smart bulb because the feed showed them something visually compelling but incompatible doesn't just return the product, they lose trust in the entire discovery surface. Three failure modes defined the problem: ecosystem mismatches surfacing Alexa accessories to Google Home users; accessory versus device confusion leading to wrong-click purchases; and creators attaching loosely associated ASINs to their content, driving clicks to unrelated products.",
              "The risk was not lack of engagement. The risk was misleading discovery: showing the wrong device, at the wrong time, to the wrong customer."
            ]
          },
          { type: "heading", title: "What Content Did We Need to Support?" },
          {
            type: "text",
            content: ["Inspire pulled from three creator types, each with different needs and different failure modes for Smart Home."]
          },
          {
            type: "list",
            items: [
              { content: `<span class="process-step-title"><b>Influencers.</b></span><p class="mt-2">Creators participating in Amazon's Influencer Program (AIP) who uploaded shoppable photos and videos. I designed the tooling that let them attach ASINs to their content, and worked with Smart Home influencers directly to improve product association accuracy.</p>` },
              { content: `<span class="process-step-title"><b>Brands.</b></span><p class="mt-2">Brand-registered vendors and sellers with Brand Store pages. Their content tended to be more controlled, but ecosystem and compatibility context still needed to be right.</p>` },
              { content: `<span class="process-step-title"><b>Customers.</b></span><p class="mt-2">Everyday customers posting shoppable videos and photos through a Create workflow, as well as content surfaced from product reviews. Not my primary focus, but a meaningful share of feed volume and a source of catalog noise.</p>` }
            ]
          },
          { type: "heading", title: "Design Strategy" },
          {
            type: "text",
            content: [
              "My strategy was to treat the Inspire platform as a constraint system I could influence at key leverage points, rather than a surface I could redesign. The goal was not to rebuild the feed. It was to shape it so Smart Home discovery became intentional, not incidental.",
              "For Smart Home, Inspire could not optimize on engagement alone. It needed ranking and presentation logic that respected device type, ecosystem compatibility, and customer intent, while still operating inside an ML-driven personalized feed.",
              "I partnered with science and product to shape how Smart Home taxonomy and device metadata informed ranking, and I drove CX decisions that made device content feel scannable, shoppable, and trustworthy at feed speed."
            ]
          },
          {
            type: "list",
            items: [
              {
                content: `<span class="process-step-title"><b>Defining what relevant discovery meant for Smart Home.</b></span><p class="mt-2">I worked with product and data science to establish shared criteria for what a correct, trustworthy Smart Home recommendation looked like in a feed context: device type hierarchy, ecosystem tags, compatibility constraints, and the conditions under which a device could surface as a hero recommendation without additional context. These became the foundation for everything downstream.</p>`,
                visuals: [{ kind: "image", src: ASSETS.testImage, caption: "Placeholder: framework or taxonomy notes defining safe and accurate Smart Home discovery in a feed." }]
              },
              {
                content: `<span class="process-step-title"><b>Shaping metadata inputs that supported ML ranking.</b></span><p class="mt-2">I partnered closely with data science to tune how device metadata informed ranking and content association, balancing engagement signals with catalog correctness. Ecosystem compatibility and device type classification became hard constraints. Content engagement scores remained signals, but secondary ones for high-risk device types.</p>`,
                visuals: [{ kind: "image", src: ASSETS.testImage, caption: "Placeholder: ranking and metadata signal map showing where correctness overrode engagement-driven recommendations." }]
              },
              {
                content: `<span class="process-step-title"><b>Making device content feel deliberate in the feed.</b></span><p class="mt-2">I drove feed-level CX decisions to ensure Smart Home content surfaced with clearer product identification, device type cues, and context that reduced misinterpretation. This included defining when and how compatibility signals should appear in the feed card, how product groupings should be handled when a creator attached multiple related ASINs, and what guardrails should reduce wrong-click behavior before it reached the PDP.</p>`,
                visuals: [{ kind: "image", src: ASSETS.testImage, caption: "Placeholder: feed scannability explorations showing product context, clarity, and interaction patterns." }]
              },
              {
                content: `<span class="process-step-title"><b>Tightening the creator-to-product association workflow.</b></span><p class="mt-2">A significant source of catalog error was upstream: creators attaching the wrong ASINs at upload time. I designed the influencer tooling that let creators link products to their videos and photos, worked directly with Smart Home creators to understand where misattribution happened, and introduced guardrails and feedback loops so creators understood the downstream consequences of loose product associations at Amazon scale.</p>`,
                visuals: [{ kind: "image", src: ASSETS.testImage, caption: "Placeholder: creator tool flow showing ASIN attachment and product association controls." }]
              }
            ]
          },
          { type: "heading", title: "Key Surfaces" },
          {
            type: "text",
            content: ["Inspire surfaced shoppable media primarily through influencer and brand content. My focus was on ensuring Smart Home devices had stronger product associations and clearer context so customers could trust what they were seeing and move from discovery to purchase without uncertainty."]
          },
          { type: "image-full", src: ASSETS.testImage, caption: "Creator Tools" },
          { type: "image-full", src: ASSETS.testImage, caption: "Main Feed Experience" },
          { type: "heading", title: "Outcome" },
          {
            type: "impact-box",
            metrics: [
              { value: "~2%", label: "Lift in Total Units Sold" },
              { value: "13.5M", label: "Devices Worldwide" }
            ]
          },
          {
            type: "text",
            content: ["Inspire launched on December 8, 2022. Success was measured primarily through customer attention minutes, with secondary signals tied to units sold and customer satisfaction. At launch, Inspire delivered a ~2% lift in total units sold, representing roughly 13.5M devices worldwide, validating feed-based discovery as a meaningful commerce surface at Amazon scale."]
          },
          { type: "heading", title: "Reflection" },
          {
            type: "callout-box",
            content: "In high-stakes categories like Smart Home, relevance is not only behavioral, it is structural. Compatibility, ecosystem rules, and customer intent must shape discovery as much as engagement does. You can't tune your way out of a bad taxonomy."
          },
          {
            type: "text",
            content: [
              "Inspire was deprecated in early 2024. While the feature met its initial design objectives within our organization, ownership ultimately sat with a different Shopping team whose priorities shifted over time. Amazon's strategic focus was moving toward AI-driven discovery and conversational search, and Inspire was sunset in favor of those newer initiatives.",
              "My role required judgment more than control: knowing where to push, where to adapt, and where to align with decisions already in motion. That experience sharpened how I operate in high-stakes, cross-org environments where scale amplifies every decision."
            ]
          }
        ]
      }
    },

    // AI-POWERED CUSTOMER REVIEW HIGHLIGHTS
    {
      id: "amazon-core-ai-review-highlights",
      company: "Amazon Core Shopping",
      title: CASE_STUDIES_TITLES["amazon-core-ai-review-highlights"],
      impactSummary: "When Amazon launched AI-generated review highlights, I explored how to make social proof a discovery driver across Smart Home, not just a detail page feature.",
      impactSummarySentence: "When Amazon launched AI-generated review highlights, I explored how to make social proof a discovery driver across Smart Home, not just a detail page feature.",
      designerNote: "Amazon launched AI-generated review highlights as a company-wide capability. Leadership asked me to figure out what that could mean specifically for Smart Home customers. This kind of work sits in an interesting space: you're not building from scratch, and you're not just implementing someone else's spec. You're identifying where a new capability creates real value for a specific customer and business context, then designing the applications that prove it. One shipped. Two moved to roadmap. All three came from asking where review data could reduce friction at the right moment in the journey.",
      thumbnail: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80",
      status: "LEGACY",
      type: "MOBILE",
      details: {
        heroImage: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80",
        role: "UX Lead, Smart Home Devices",
        timeline: "2023 to 2024",
        team: "Core Shopping",
        type: "MOBILE",
        services: [SERVICES.STRATEGY, SERVICES.UI_DESIGN, SERVICES.PROTOTYPING],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "callout-box",
            content: "Amazon launched AI-generated review highlights as a platform-wide capability, surfacing a short AI-written paragraph on product detail pages that summarized common themes across customer reviews. Leadership asked me to explore how our Smart Home Devices team could leverage this feature for our specific customers and business goals. I designed three distinct applications across different surfaces and different moments in the customer journey."
          },
          {
            type: "text",
            content: [
              "Customer reviews are one of the most important inputs to a purchase decision, but at Amazon's scale they create their own problem. Customers want social proof, but not the work of reading through hundreds of reviews to find it.",
              "The new AI-powered feature addressed this at the platform level. My job was to figure out where it could create the most value for Smart Home customers specifically, and design the applications to prove it."
            ]
          },
          { type: "heading", title: "The Problem" },
          {
            type: "text",
            content: [
              "Research consistently pointed to reviews as a top driver of Amazon visits and purchase decisions. A Detail Page Read Depth Study from October 2021 found that comparing models, reading customer reviews, and comparing prices were the three most common reasons US customers visited Amazon, each cited by over 60% of respondents. Separately, 70% of US consumers reported reading reviews before purchasing.",
              "But volume was working against customers. Internal frustration data showed customers felt overwhelmed by large numbers of reviews and wished the information was summarized for them. For Smart Home specifically, this problem was compounded: customers weren't just evaluating sentiment, they were trying to extract compatibility and use-case signals from unstructured review text.",
              "The platform's new AI capability solved the summarization problem globally. The open question was how to bring it into Smart Home surfaces in a way that served our customers and supported our commercial goals."
            ]
          },
          { type: "heading", title: "Exploration" },
          {
            type: "text",
            content: ["I designed three applications of the AI review highlights feature for Smart Home, each targeting a different surface and a different moment in the customer journey: the homepage, the video shopping feed, and individual product cards."]
          },
          {
            type: "list",
            items: [
              {
                content: `<span class="process-step-title"><b>Concept 1: Homepage widget, AI review highlights for top devices.</b></span><p class="mt-2">The idea was to bring AI-generated review sentiment upstream into the homepage, before a customer had even selected a product. Top-selling Smart Home devices surfaced alongside an LLM-generated headline and the most praised attributes across that product line, turning social proof into a discovery driver. This concept shipped.</p>`,
                visuals: [
                  { kind: "image", src: ASSETS.testImage, caption: "Early homepage widget explorations showing Fire TV cards with AI-generated headline and attribute pills." },
                  { kind: "image", src: ASSETS.testImage, caption: "Shipped homepage widget layout with product line attribute summary." }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Concept 2: Video shopping, review highlights inside the immersive feed.</b></span><p class="mt-2">Our Smart Home team had already built an experience surfacing brand-owned and expert videos for products relevant to a customer's interests. I designed a method to merge top video reviews with our propensity models, then explored how AI-generated review highlights could be layered into that immersive surface. This concept moved to roadmap.</p>`,
                visuals: [
                  { kind: "image", src: ASSETS.testImage, caption: "Dark-mode video shopping feed mock showing the immersive experience context where review highlights would surface." },
                  { kind: "image", src: ASSETS.testImage, caption: "Video Shopping on Mobile Homepage concept slides showing the immersive review highlights integration." }
                ]
              },
              {
                content: `<span class="process-step-title"><b>Concept 3: ASIN cards, customer voice as the value message.</b></span><p class="mt-2">A third concept applied AI review highlights at the product card level, earlier in the funnel than the detail page. Each card surfaced an LLM-generated benefit message, curated customer quotes, and a CTA to the full ASIN page. The framing was that the voice of the customer generates the value message, removing the need for marketing copy to do that work. This concept advanced to roadmap.</p>`,
                visuals: [
                  { kind: "image", src: ASSETS.testImage, caption: "Customer benefit ASIN Cards concept slide alongside the light-theme card mock." },
                  { kind: "image", src: ASSETS.testImage, caption: "ASIN card iteration across light and dark themes showing the refined final card layout." }
                ]
              }
            ]
          },
          { type: "heading", title: "Outcome" },
          {
            type: "impact-box",
            metrics: [
              { value: "1 Shipped", label: "Homepage widget launched" },
              { value: "2 Roadmap", label: "Video shopping and ASIN card concepts advanced" }
            ]
          },
          {
            type: "text",
            content: [
              "The homepage widget shipped. It became one of the first applications of Amazon's AI review highlights capability to surface on the Smart Home homepage, bringing sentiment-driven discovery upstream in the customer journey.",
              "The video shopping and ASIN card concepts both advanced to roadmap with stakeholder buy-in. The video shopping integration had not yet shipped when I left the company, but remained in active consideration."
            ]
          },
          { type: "heading", title: "Reflection" },
          {
            type: "callout-box",
            content: "The most useful thing a designer can do with a new platform capability is ask who it actually helps and where. Not every feature belongs on every surface. The work here was less about visual design and more about identifying the right moments in the Smart Home customer journey where AI-summarized social proof could meaningfully reduce friction."
          },
          {
            type: "text",
            content: [
              "Designing three applications of the same capability across three surfaces forced a useful discipline: each concept had to justify itself on its own terms, not just because the underlying technology was interesting. The homepage widget earned its place by moving discovery upstream. The video concept earned its place by adding signal at peak engagement. The ASIN card earned its place by replacing a job that marketing copy was doing inconsistently.",
              "This project reinforced how much leverage there is in being the person who translates a broad platform capability into a specific team's context. The AI feature existed. The customer need existed. The design work was finding where they intersected with enough precision to be worth building."
            ]
          }
        ]
      }
    },

    // ALTO INTERNAL TOOLS
    {
      id: "alto-internal",
      company: "Alto Pharmacy",
      title: CASE_STUDIES_TITLES["alto-internal"],
      impactSummary: "Redesigned the internal messaging and action system for a scaling digital pharmacy, reducing communications per shipment below 1.0 for the first time.",
      impactSummarySentence: "A redesigned internal platform that helped a pharmacy operations team resolve patient requests faster, with less friction and fewer workarounds.",
      designerNote: "Alto was scaling fast, but the internal tools hadn't kept up. Pharmacists and care specialists were stitching together Wunderbar, Marcia Notes, Notion, spreadsheets, and Slack just to resolve a single patient request. The system worked, but it placed the burden on people instead of the product. The goal was to change that: surface the right context, reduce the time it took to act, and give the team tools that matched how they actually worked. The most honest outcome was an MVP that improved Marcia Notes and got action cards onto the roadmap, with a North Star that aligned the org around where to go next.",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      status: "LEGACY",
      type: "INTERNAL",
      details: {
        hero: { type: 'animated' },
        heroImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144386/AAWB_message-action_nen3sq.gif",
        heroCoverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772144384/Untitled_3_ajvo9r.png",
        role: "Staff Product Designer",
        timeline: "2020 to 2022",
        team: "Internal Tools",
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
            src: "https://www.figma.com/proto/XyqOU2Cu66sT0y4Sza5TcC/Alto-Assistant---Internal-Tools-Final-Build-Spec?page-id=10888%3A142839&node-id=10894-435574&scaling=scale-down&starting-point-node-id=10894%3A435574&show-proto-sidebar=1",
            caption: {
              short: "Prototype flows used during usability testing, click through to explore.",
              verbose: "These prototypes were built to test foundational interaction models with Care Specialists before any significant engineering investment. Sessions focused on validating which structural approaches reduced cognitive load, not surface-level UI preferences."
            },
            coverImage: FIGMA_PLACEHOLDER,
            aspectRatio: "4/3"
          },
          {
            type: "video",
            src: "https://www.loom.com/share/fc0be3c402344b59bfa541c359070582",
            href: "https://www.loom.com/share/fc0be3c402344b59bfa541c359070582",
            coverImage: LOOM_PLACEHOLDER,
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
              "Before exploring interface patterns, the team needed to define what a 'conversation' meant inside the system, a systems problem, not a UI one. The model that emerged treated conversations as time-bound sessions based on activity, not topic completion, with patients able to shift freely between subjects. That definition became the foundation every design decision was built on."
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
              `<ul class="list-disc pl-5 space-y-3">
                <li>The full North Star wasn't built. Resourcing for internal tooling improvements didn't match the ambition of the vision, patient-facing features carried clearer business cases, and engineering capacity was allocated accordingly.</li>
                <li>What did ship were the processes with clearer operational ROI. Billing workflows and improvements to patient case handling within the Alto app moved forward, with measurable downstream effects on the patient experience and cost per shipment.</li>
                <li>Marcia Notes was refactored and stabilized. Not the structural overhaul the research pointed toward, but a meaningful improvement to the baseline, with better context, clearer hierarchy, and reduced reliance on external tools for common tasks.</li>
                <li>The 18% reduction in communications per shipment was real and measurable, but the team lacked the instrumentation to tie it directly to a cost-per-shipment figure for internal tooling specifically. The dollar outcome, Care CPS dropping from $16 to $10, is covered in the Alto Assistant App case study, which addresses the patient-facing side of the same system.</li>
                <li>The action cards concept and the North Star direction were approved and added to the roadmap. What happened after June 2022 is outside the scope of this case study.</li>
              </ul>`
            ]
          },

          { type: "heading", title: "Impact" },
          {
            type: "impact-box",
            metrics: [
              { value: "18%", label: "Reduction in Communications Per Shipment" },
              { value: "0.93", label: "Comms Per Shipment (from ~2.0 in 2020)" }
            ],
            description: [
              "For workflows connected to Alto Assistant, communications per shipment dropped <b>18%</b> compared to control groups, falling below 1.0 for the first time in July 2022, reaching <b>0.93</b> against a baseline of approximately 2.0 in 2020. The internal tooling work was one side of the same system: while the patient-facing app reduced inbound volume, these improvements ensured Care Specialists could handle what remained faster and with less friction. The platform served <b>11,000+ internal users</b> across <b>30,000+ weekly visits</b>."
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
      designerNote: "Alto was building something genuinely different in a category that had resisted change for decades. The product touched nearly every part of a patient's relationship with their medication, from insurance and fulfillment to talking directly with a pharmacist. The work on Alto Assistant was about making that experience feel less like a transaction and more like being taken care of. Designing for clarity and confidence in a medical context is harder than it sounds. Patients are often anxious, the stakes are real, and the operational constraints are tight. The $2 per-order reduction was real and measurable, but the more important outcome was that patients felt guided rather than processed. That is what the design was actually trying to do.",
      thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772157001/herocover_nsmuem.png",
      status: "LEGACY",
      type: "CONSUMER",
      details: {
        hero: { type: 'static', bgColor: '#E0F2F1' },
        heroImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772157001/herocover_nsmuem.png",
        heroCoverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772155106/Untitled_9_itrgrm.png",
        role: "Staff Product Designer",
        timeline: "2021 to 2022",
        team: "Alto Assistant",
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
            type: "video", // ✅ Changed from "embed" to "video"
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
            coverImage: FIGMA_PLACEHOLDER,
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
              `<ul class="list-disc pl-5 space-y-3">
                <li>The feature launched in May 2022 following a 10% controlled cohort rollout, in line with Alto's release protocol for medical-context changes. The cohort allowed the team to monitor behavior and validate impact before full release.</li>
                <li>This case study shares platform-level metrics with the Alto Internal Tools work. Both were part of the same Alto Assistant system, the patient-facing and internal-facing sides of the same operational problem.</li>
              </ul>`
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
      designerNote: "Patreon's top earners were running massive businesses on fragile, manual tools. This project was about closing that gap. We started by shipping targeted improvements that moved the needle, which earned us the trust to pitch a much larger structural overhaul. While company restructuring meant my time ended before I could see Patreon 2.0 fully ship, I’m incredibly proud of the foundation we built. My research defined the core roadmap, and a speculative design for tracking loyalty resulted in my first granted USPTO patent. You can see the full architectural vision in my follow-up Patreon 2.0 case study.",
      thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169709/benefits-config_wpuj3r.gif",
      status: "LEGACY",
      type: "INTERNAL",
      details: {
        hero: { type: 'animated' },
        heroImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169709/benefits-config_wpuj3r.gif",
        heroCoverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772169704/cohorts_q4hqkk.png",
        role: "Senior Product Designer",
        timeline: "November 2020 to May 2021",
        team: "Creator Tools",
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
            coverImage: FIGMA_PLACEHOLDER,
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
            src: "https://www.figma.com/proto/2n40H4pfL5qhAFns1J9vt6/Benefit-Delivery--Short-term?page-id=2%3A53&node-id=2-364&viewport=416%2C713%2C0.39&t=JMD5yGAFr4NUFQEW-1&scaling=contain&content-scaling=fixed&starting-point-node-id=2%3A364",
            caption: {
              short: "Audience chart exploration, tier distribution visualization.",
              verbose: "This was a speculative exploration that addressed a gap that kept coming up in research: creators knew roughly how many patrons they had, but had no way to understand how those patrons were distributed or where tier structures were underperforming."
            },
            coverImage: FIGMA_PLACEHOLDER,
            aspectRatio: "4/3"
          },
          {
            type: "figma",
            src: "https://www.figma.com/proto/YDnBckCRWmpHlwY96qpVx3/Patreon-Creator-Tools-V2-Final-Build-Spec?page-id=61%3A8742&node-id=83-0&scaling=scale-down",
            caption: {
              short: "Mobile Benefit Planner prototype, the concept that seeded Phase 2.",
              verbose: ""
            },
            coverImage: FIGMA_PLACEHOLDER,
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
            coverImage: FIGMA_PLACEHOLDER,
            aspectRatio: "4/3"
          },
          {
            type: "figma",
            src: "https://www.figma.com/proto/HMpKTeNBf6mdo2xO92qdXX/Patreon-2.0-Final-Build-Spec?page-id=49%3A0&node-id=104-336&scaling=scale-down",
            caption: {
              short: "Round 2 prototype, refined after user testing. Click through to explore.",
              verbose: "The second round addressed the density and complexity issues from Round 1. Results were overwhelmingly positive. Users grasped the automation model clearly, the merch store one-off purchase concept felt familiar, and loyalty gamification through the pledge streak felt natural rather than pushy."
            },
            coverImage: FIGMA_PLACEHOLDER,
            aspectRatio: "4/3"
          },
          {
            type: "video",
            src: "https://www.loom.com/share/5926ef35ac1d44c899afea4344018b7c",
            href: "https://www.loom.com/share/5926ef35ac1d44c899afea4344018b7c",
            coverImage: LOOM_PLACEHOLDER,
            caption: { short: "Walkthrough of the Round 2 prototype and research findings.", verbose: "" },
            aspectRatio: "16/9"
          },

          { type: "heading", title: "Research Findings" },
          {
            type: "text",
            content: [
              `<ul class="list-disc pl-5 space-y-3">
                <li>Benefit categorization tested positively across both rounds. Users understood the seven categories and knew what to expect within each with minimal guidance.</li>
                <li>The biggest conceptual breakthrough: content and benefits are the same thing. Posting exclusive footage and configuring a live event benefit are structurally identical. That insight became a central design principle for Patreon 2.0.</li>
                <li>Automation was understood and trusted when made explicit. Creators needed to see what the system had taken over, not just that it had.</li>
                <li>The merch store one-off purchase model felt immediately familiar. Gamifying loyalty through the pledge streak felt natural, not forced.</li>
                <li>Physical goods shipping remained a manual process. The team aligned on continuing to support it but not automating it without robust e-commerce integrations in place first.</li>
              </ul>`
            ]
          },

          { type: "heading", title: "Launch and Tradeoffs" },
          {
            type: "text",
            content: [
              `<ul class="list-disc pl-5 space-y-3">
                <li>Phase 1 improvements shipped across Q4 2020 and Q1 2021 within tight engineering constraints. The cohorts feature was designed but did not ship, the predefined condition logic required backend work that fell outside scope.</li>
                <li>The Phase 2 sprint secured executive buy-in and resources for the 2.0 build. Shortly after, company-wide restructuring impacted my team. While I didn't see Patreon 2.0 cross the finish line, the architecture established here served as its foundational blueprint.</li>
                <li>Benefit modularity was a deliberate choice. All seven categories were designed as independent modules so the 2.0 implementation could roll them out selectively rather than committing to all seven at once.</li>
                <li>NFTs were explored as an alternative monetization channel during the sprint given the timing. That direction was not prioritized for the 2.0 roadmap.</li>
              </ul>`
            ]
          },

          { type: "heading", title: "Impact" },
          {
            type: "impact-box",
            metrics: [
              { value: "49% to 73%", label: "Creator Satisfaction (Pendo, Feb 2021)" },
              { value: "USPTO", label: "Granted Patent No. 12,154,126" }
            ],
            description: [
              "Phase 1 improvements moved creator satisfaction from <b>49% to 73%</b> within three months. The pledge streak filter resulted in a <b>granted USPTO patent</b> (No. 12,154,126), co-invented with Jennifer Pugh. While my time at Patreon ended due to restructuring before 2.0 shipped, the Phase 2 sprint successfully secured the organizational alignment and resources needed to make it happen, leaving behind a definitive blueprint for the platform's next era."
            ]
          }
        ]
      }
    },

    // PATREON PLEDGE STREAK PATENT
    // PATREON PLEDGE STREAK PATENT (1-PAGER)
    {
      id: "patreon-pledge-streak",
      company: "Patreon",
      title: "Pledge Streak Patent",

      impactSummary: "Invented and patented a visual system for creators to evaluate patron loyalty and payment history at a glance. Granted USPTO Patent No. 12,154,126.",
      impactSummarySentence: "A data visualization feature that turned complex billing history into a simple 'streak', earning a USPTO patent along the way.",
      designerNote: "Sometimes the most impactful features aren't explicitly on the roadmap. While conducting research for the broader Benefit Delivery redesign, I noticed creators were deeply frustrated by how hard it was to verify a patron's loyalty. They were giving away expensive, physical merchandise blindly. This 'Pledge Streak' concept started as a quick design exploration to solve that specific anxiety. It worked so well that Patreon decided to patent the interaction model. Getting my name on a USPTO patent was an unexpected, incredibly proud milestone in my career.",
      thumbnail: "https://via.placeholder.com/800x600?text=Pledge+Streak+Thumbnail",
      status: "LEGACY",
      type: "INTERNAL",
      details: {
        hero: { type: 'static' },
        heroImage: "https://via.placeholder.com/1200x800?text=Pledge+Streak+Hero",
        heroCoverImage: "https://via.placeholder.com/1200x800?text=Pledge+Streak+Cover",
        role: "Senior Product Designer & Co-Inventor",
        timeline: "2020 to 2021 (Granted Nov 2024)",
        team: "Creator Tools",
        type: "INTERNAL",
        services: [
          SERVICES.PRODUCT_DESIGN,
          SERVICES.SYSTEMS_DESIGN,
          SERVICES.PROTOTYPING
        ],
        blocks: [
          { type: "heading", title: "The Context", hasDivider: false },
          {
            type: "text",
            content: [
              "This feature was born out of a larger initiative to overhaul Patreon's Benefit Delivery system. During our generative research, a distinct edge case kept surfacing: fulfilling high-value, physical rewards.",
              "Creators were flying blind. When a creator goes to the post office to mail a $50 piece of exclusive merchandise, they want to ensure it is going to a loyal patron. However, patrons frequently experience involuntary churn. A credit card expires, or a bank flags a transaction. Creators had no easy way to differentiate a loyal, multi-year supporter who had a temporary card decline from a brand-new patron whose very first payment failed."
            ]
          },
          
          {
            type: "image-full",
            src: "https://via.placeholder.com/1200x800?text=View+1:+Patron+List+Before",
            caption: { 
              short: "Managing patrons at scale without visual context.", 
              verbose: "Before the pledge streak, creators had to click into individual profiles or download CSVs to manually verify payment history, making bulk fulfillment incredibly tedious." 
            }
          },

          { type: "heading", title: "The Concept: Visualizing Loyalty" },
          {
            type: "text",
            content: [
              "Instead of forcing creators to dig through tabular billing databases or click into individual patron profiles to audit their history, we needed to bring the data to the surface. We needed to make loyalty legible at a single glance.",
              "The solution was the Pledge Streak. I designed a visual sequence of chronological unit graphics attached directly to the patron's row in the relationship manager. Each node represented a billing cycle, and its visual state corresponded directly to the payment status for that month."
            ]
          },
          {
            type: "list",
            items: [
              {
                content: `<span class="process-step-title"><b>Green / Solid</b></span><p class="mt-2">Indicated a successful payment for that billing cycle.</p>`,
                visuals: []
              },
              {
                content: `<span class="process-step-title"><b>Red / Outlined</b></span><p class="mt-2">Indicated a failed or declined payment.</p>`,
                visuals: []
              },
              {
                content: `<span class="process-step-title"><b>Blank</b></span><p class="mt-2">Indicated the patron was not subscribed during that period.</p>`,
                visuals: []
              }
            ]
          },

          {
            type: "image-full",
            src: "https://via.placeholder.com/1200x800?text=View+2:+The+Pledge+Streak+UI",
            caption: { 
              short: "The Pledge Streak UI integrated into the Patron Relationship Manager.", 
              verbose: "By visualizing up to six months of payment history directly in the table row, creators could instantly spot patterns of loyalty or recurring payment failures." 
            }
          },

          { type: "heading", title: "Research Insight: The 'Heatmap' of Loyalty" },
          {
            type: "text",
            content: [
              "During usability testing, a profound behavior emerged: creators weren't just reading the data; they were reading the texture of a patron's history. The pledge streak acted as a visual heatmap.",
              "If a creator saw a long row of historical greens followed by a recent red, they didn't just see a 'failed payment'—they saw a loyal fan who likely just had a credit card expire. This empowered creators to make qualified, empathetic decisions, allowing them to confidently override a rigid, binary billing system to reward genuine, long-term support."
            ]
          },

          { type: "heading", title: "Interactive Prototype" },
          {
            type: "figma",
            src: "https://www.figma.com/proto/YOUR_PROTOTYPE_LINK_HERE",
            caption: { 
              short: "Interactive prototype of the Pledge Streak filter and tooltip.", 
              verbose: "This prototype demonstrates how creators could hover over individual streak nodes to see exact billing dates and amounts, and use the global filters to isolate patrons with perfect streaks." 
            },
            coverImage: "https://via.placeholder.com/1200x800?text=Prototype+Cover",
            aspectRatio: "4/3"
          },

          { type: "heading", title: "The Impact: USPTO Patent" },
          {
            type: "text",
            content: [
              "By turning a complex array of billing statuses into a simple, recognizable pattern, we removed a massive cognitive load from creators managing their own fulfillment. The interaction model proved so novel and effective for the creator economy space that Patreon's legal team filed for a patent.",
              "On November 26, 2024, the United States Patent and Trademark Office officially granted Patent No. US 12,154,126 B2, naming myself and my product partner, Jennifer Pugh, as co-inventors."
            ]
          },

          {
            type: "image-full",
            src: "https://via.placeholder.com/1200x800?text=Patent+Drawing+FIG.+8", 
            caption: { 
              short: "Excerpt from USPTO Patent No. 12,154,126.", 
              verbose: "This drawing from the official patent filing illustrates the core interaction model. It shows how payment history information is displayed via unit graphics arranged in a preset chronological direction to immediately communicate payment status." 
            }
          },

          {
             type: "button",
             label: "View Official Patent Document",
             href: "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/12154126",
             external: true
          }
        ]
      }
    },
 
      // PATREON STUDIO 2.0 DESIGN SYSTEM
    {
      id: "patreon-studio2.0",
      company: "Patreon",
      title: CASE_STUDIES_TITLES["patreon-studio2.0"],

      impactSummary: "Co-created Studio 2.0, Patreon's mobile-first design system, establishing a unified visual language and component library across the entire platform in an 8-week cross-functional sprint.",
      impactSummarySentence: "An 8-week collaborative sprint to build a scalable, mobile-first design system that unified Patreon's disjointed UI and set the visual foundation for the platform's rebrand.",
      designerNote: "Looking back at this work, I am incredibly proud of the visual explorations and the sheer craft we put into establishing Patreon's aesthetic. Back then, the focus was heavily on visual cohesion, finding the right textures, and perfecting component states. Today, my approach to design systems extends much further into AI-readiness, semantic token scaling, and seamless React implementation. While my methodology has evolved to be more heavily integrated with code and AI pipelines, this project remains a cornerstone of my visual design foundation and a masterclass in cross-departmental collaboration.",
      thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772231263/DS_1_lihqgs.png",
      status: "LEGACY",
      type: "INTERNAL",
      details: {
        hero: { type: 'animated' },
        heroImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772236528/DS20_dxajby.jpg",
        heroCoverImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772236528/DS20_dxajby.jpg",
        role: "Senior Product Designer",
        timeline: "Nov 2020 to Jan 2021",
        team: "Cross-functional Design System Taskforce",
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
            coverImage: LOOM_PLACEHOLDER,
            caption: { short: "A sneak preview of our ongoing iteration process focused on our core product surfaces.", verbose: "" },
            aspectRatio: "16/9"
          },

          { type: "heading", title: "Impact & Reflections" },
          {
            type: "text",
            content: [
              "We successfully set the foundation, established the design language, and got the green light for the 2.0 migration. However, tech can be volatile. Company restructuring meant my time at Patreon ended before I could see Studio 2.0 fully implemented across the live product from the inside.",
              "Because of that early exit, the biggest trade-off of this project is the lack of measurable, quantitative metrics. I can't point to a specific conversion lift or internal engineering adoption speed. The real impact here was inherently intangible: aligning fragmented departments under a single visual language, securing executive buy-in for a massive overhaul, and leaving behind a robust, fully documented blueprint for the team that remained.",
              "Looking at the platform today in 2026, the UI has naturally evolved and iterated away from these exact screens. But that is the true lifecycle of a successful design system—it acts as a bridge to the next era, a living organism meant to be adapted and built upon, not frozen in time."
            ]
          }
        ]
      }
    },
{
      id: "prox",
      company: "Prox",
      title: CASE_STUDIES_TITLES["prox"],
      impactSummary: "Sole designer and co-founder of Prox, a 1:1 expert video platform. Designed the full product from zero, helped raise an $800k seed round, shipped a closed beta with measurable traction, then navigated a COVID shutdown.",
      impactSummarySentence: "Designed the entire product as founding designer, from blank canvas to closed beta. Helped raise $800k. Then COVID happened.",
      designerNote: "This was 2019. I was the only designer, and I was figuring out things nobody had really figured out yet: how to make a structured video call feel better than an in-person conversation, how to give 15 minutes of paid access to an expert a shape that justified the price. Video calls were not a mainstream work tool yet. Zoom fatigue wasn't a phrase. The problems we were solving became widely understood only after a global pandemic made them everyone's daily reality.\n\nThe work looks dated now. The UI has the texture of 2019. But the product decisions underneath it were real, and some of them held up under actual user testing. This is where I learned what it means to be the only designer in the room when the room includes investors, engineers, and paying users.",
      thumbnail: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772257040/booking-workflow-hero_odxazy.gif",
      status: "complete",
      type: "product",
      details: {
        heroImage: "https://res.cloudinary.com/diy08lj9x/image/upload/v1772256905/1_1session_cbkkc0.gif",
        role: "Founding Designer",
        timeline: "2019 to Early 2020",
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
              { value: "$2,676", label: "Platform revenue in the first beta month (Prox's 12% cut)" },
              { value: "51%", label: "Rebooking rate across 130+ sessions" },
              { value: "4.3 / 5", label: "Average session star rating" },
              { value: "17 min", label: "Average time to complete a booking" },
            ],
            description: [
              "The beta confirmed the core mechanic worked. Rebooking at 51% was the number that mattered most: it meant learners found enough value to pay again. The average 17-minute booking time was a known friction point flagged for the next iteration."
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
              "In hindsight, the timing was the cruelest kind of irony. We were building infrastructure for video-based expert access before anyone thought they needed it. Six months later, remote video was everyone's daily reality and the market we were targeting exploded. We just weren't there to be part of it.",
              "What I took from Prox: how to make product decisions under real constraints, how to run research that actually changed what shipped, and what it feels like to be the only designer in a room with investors, engineers, and paying users all wanting different things. That education had a price tag attached to it."
            ]
          }

        ]
      }
    },
      

    // PORTFOLIO
    {
      id: "portfolio-systems",
      company: "Bespoke Portfolio",
      title: CASE_STUDIES_TITLES["portfolio-systems"],
      impactSummary: "A live demonstration of full-stack design thinking and iterative product development.",
      impactSummarySentence: "A bespoke portfolio built to demonstrate staff-level systems thinking and engineering precision.",
      designerNote: "This portfolio itself is a project in iterative refinement. Every interaction, from the hover stability of the mega-menu to the lazy-loading of interactive prototypes, was designed and built to respect the user's time while proving technical craft.",
      thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      status: "SHIPPED",
      type: "SYSTEMS",
      details: {
        heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
        role: "Designer & Engineer",
        timeline: "Feb 2026",
        team: "Solo / Ground-Up",
        type: "FULL STACK DESIGN",
        services: [SERVICES.SYSTEMS_DESIGN, SERVICES.PROTOTYPING, SERVICES.AI_WORKFLOWS],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "text",
            content: "Standard templates felt restrictive and failed to communicate the specific nuance of staff-level systems thinking. I needed a platform that mirrored the quality of the work it contained, serving as a live demonstration of my design and engineering process."
          },
          { type: "heading", title: "Strategy: High-Signal Navigation" },
          {
            type: "text",
            content: "Busy hiring managers often have 30 seconds for an initial pass. I replaced standard project lists with a multi-column mega-menu on desktop and a lean accordion on mobile. This ensures immediate recognition of brand names (Amazon, Patreon) while providing impact-focused summaries for targeted review."
          },
          { type: "heading", title: "Engineering the Invisible Bridge" },
          {
            type: "text",
            content: "One common frustration with mega-menus is their sensitivity to mouse movement. I implemented a buffer bridge container to ensure hover stability when transitioning from the navigation trigger to the dropdown, ensuring a fluid, frustration-free experience."
          },
          { type: "heading", title: "Responsive Performance" },
          {
            type: "text",
            content: "To showcase complex interactive prototypes without sacrificing load times, I engineered a lazy-loading Figma integration. Prototypes are responsive and scale-to-fit their containers, providing an interactive preview that can be expanded into a dedicated workspace with a single click."
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
    roleLine: "Sr. UX Designer · Sep 2022 to Jan 2026",
    projectIds: [
      "amazon-devices-asset-system",
      "jas-image-builder",
      "jas-asset-manager",
      "jas-metadata-studio",
      "jas-ai-generator",
      "amazon-core-inspire-tab",
      "amazon-core-ai-review-highlights"
    ]
  },
  {
    company: "Alto Pharmacy",
    logo: "Alto Pharmacy",
    roleLine: "Staff Product Designer · 2021 to 2022",
    projectIds: ["alto-internal", "alto-assistant"]
  },
  {
    company: "Patreon",
    logo: "Patreon",
    roleLine: "Sr. Product Designer · Creator Tools · 2020 to 2021",
    projectIds: ["patreon-creator-tools", "patreon-pledge-streak", "patreon-studio2.0"]
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