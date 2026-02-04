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

// ------------------------------------------
// Global data (moved from App.jsx)
// ------------------------------------------

const AMAZON_DEVICES_AI_IMAGE =
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80";

export const PORTFOLIO_DATA = {
  profile: {
    name: "Bruno",
    subName: "Wong M.",
    email: "hello@brunowong.me",
    location: "Sacramento, CA"
  },
  projects: [
    {
      id: "amazon-devices-asset-system",
      company: "Amazon",
      title: "Amazon Devices Asset System",
      impactSummary:
        "Built a 0-to-1 platform enabling AI-powered global marketing image generation at scale.",
      thumbnail: AMAZON_DEVICES_AI_IMAGE,
      summary:
        "As Lead Designer, I led the 0-to-1 build of a four-phase AI platform designed to automate and scale global marketing image production for Amazon Devices. While the full rollout continues, the initial phases I delivered established the core architectural framework and have already driven significant operational impact.",
      details: {
        heroImage: AMAZON_DEVICES_AI_IMAGE,
        role: "Lead UX Designer",
        timeline: "2024–Today",
        team: "Automate & Scale",
        status: PROJECT_STATUS.IN_BUILD,
        type: PRODUCT_TYPES.INTERNAL,
        services: [SERVICES.STRATEGY, SERVICES.SYSTEMS_DESIGN, SERVICES.AI_WORKFLOWS],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "impact-box",
            metrics: [
              { value: "5,000", label: "Hours Saved / Month" },
              { value: "48,000", label: "Prime Day Hours Saved" }
            ],
            description: [
              'Amazon Devices Asset System launched in March 2025 and now saves an estimated <b>5,000 hours of manual production work per month</b> across design, 3D, and content creation teams. For Prime Day July 2025 alone, the system replaced more than <b>48,000 hours</b> of labor that would have been required to create 8,000 lifestyle images by hand.'
            ]
          },
          {
            type: "text",
            content:
              "I was the lead UX designer on the Automate & Scale team inside Amazon Devices and Services. Our team supported 800 merchandisers globally across 22 marketplaces, launching and managing the Amazon family of Devices, including Echo, Ring, Blink, Fire TV, Eero, Tablets, and more."
          },
          { type: "heading", title: "The Workflow Problem" },
          {
            type: "text",
            content:
              "I mapped the end-to-end workflow required to build a campaign, from landing pages and detail pages to all supporting imagery. The map revealed a fragmented process spanning spreadsheets, legacy tools, creative software, and multiple teams owning different pieces of the same asset."
          },
          {
            type: "image-full",
            src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1600&q=80",
            caption: "Journey map designed to align stakeholders and identify core process bottlenecks."
          },
          { type: "heading", title: "The Four Phases of the Asset System" },
          {
            type: "text",
            content:
              "The system was designed as a framework rather than a single tool. The approach was to break down a fragmented, manual workflow into four connected pillars."
          },
          { type: "pillar-grid" },
          { type: "heading", title: "North star vision: End-to-End Creative Automation" },
          {
            type: "text",
            content:
              "This prototype illustrates the future state. A merchandiser enters a single prompt, and the system generates campaign imagery, places copy, selects devices, and propagates the output across global marketplaces."
          },
          {
            type: "video",
            src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            caption: "Vision prototype illustrating end-to-end creative automation for device launches."
          }
        ]
      }
    },
    {
      id: "jas-image-builder",
      parentId: "amazon-devices-asset-system",
      company: "Amazon Devices",
      impactSummary:
        "Designed a WYSIWYG image system that lets merchandisers generate thousands of campaign assets in minutes across global marketplaces.",
      ImpactSummarySentence: "Powerful component image editor that generates marketing assets at a global scale.",
      title: "1. Image Builder",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
      summary: "A powerful image compositor that allows global teams to build thousands of device campaign assets in minutes.",
      details: {
        heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
        role: "Lead UX Designer",
        timeline: "September 2024 – Feb 2025",
        team: "Automate & Scale",
        status: PROJECT_STATUS.LAUNCHED,
        type: PRODUCT_TYPES.INTERNAL,
        services: [SERVICES.SYSTEMS_DESIGN, SERVICES.PROTOTYPING, SERVICES.UI_DESIGN],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "callout-box",
            content:
              "A scalable image-creation tool that lets merchandisers compose hero images, ads, and banners across marketplaces, languages, cultural contexts, and dimensions. This replaced a patchwork of creative tools with one consistent production workflow."
          },
          {
            type: "callout-box",
            content:
              'Amazon Devices Asset System launched in March 2025 and now saves an estimated <b>5,000 hours of manual production work per month</b> across design, 3D, and content creation teams. For Prime Day July 2025 alone, the system replaced more than <b>48,000 hours</b> of labor that would have been required to create 8,000 lifestyle images by hand.'
          },
          {
            type: "text",
            content: [
              "Before JAS, merchandisers had to create hero images, ads, banners, and promo assets across dozens of marketplaces using Photoshop, Illustrator, spreadsheets, and inconsistent regional templates. Every team worked differently, assets were rebuilt multiple times, and simple variations turned into hours of manual production. If Amazon Devices wanted launches to move faster globally, we needed a predictable, scalable way to create images.",
              "One of the most valuable asset types in JAS is lifestyle imagery. These are the images that show our devices in real environments like living rooms, kitchens, or porches. They consistently perform better than flat backgrounds and can increase click-through by more than 40 percent.",
              "Today these images require photoshoots, 3D rendering, CGI and manual graphic design. Across all contributing teams, this results in roughly 40,000 hours of production work every year."
            ]
          },
          { type: "heading", title: "Design Strategy" },
          {
            type: "text",
            content: [
              "The design strategy was shaped collaboratively, but I owned the UX and UI for the Image Asset Builder end-to-end. As a team, we aligned on replacing a fragmented toolchain with one WYSIWYG builder that merchandisers could trust. From there, I designed a dynamic layout engine that understood spacing, copy placement, text hierarchy, and visual balance across dozens of dimensions.",
              "The tool supported structured templates for consistency, but also allowed free placement of devices, backgrounds, and secondary elements when teams needed flexibility. Under the hood, the system checked for pricing inconsistencies, device availability, cultural sensitivities, and brand constraints so users didn’t have to.",
              "I also designed the practical features that made the tool feel fast and approachable: drag-and-drop editing, smart filters, preview modes, and guardrails driven by Catalog data and AI metadata. The goal was never to build another design tool. It was to build a production system that handled the mechanical steps while letting merchandisers focus on judgment and clarity."
            ]
          },
          {
            type: "list",
            items: [
              {
                content:
                  "<b>Starting with users.</b><br/>I built relationships with merchandisers across regions and ran informal, scrappy testing sessions. This helped surface real pain points early and shaped the direction of the tool.",
                visuals: [
                  {
                    kind: "embed",
                    src: "https://player.cloudinary.com/embed/?cloud_name=diy08lj9x&public_id=JAS_-_Metadata_Photoshop_1_mstvm3",
                    caption: "Fragment of a screen capture of a conversation as I learned how brand designers crafted images assets."
                  }
                ]
              },
              {
                content:
                  "<b>Finding the right layout.</b><br/>Separating inputs from outputs while supporting up to 60 marketplace and language combinations took several iterations. I explored different models until the UI felt both simple and scalable.",
                visuals: [
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1769731424/175c5a76-0e29-4787-a5c9-0eb3c11a870b.png",
                    caption: "Early iteration of a top-level form field and lower level previewed images."
                  },
                  {
                    kind: "image",
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1769731833/1fa69945-d723-433e-a7c8-0bab74c87d8e.png",
                    caption: "Exploring different ways to showcase Marketplaces as segmented controls / filters."
                  }
                ]
              },
              {
                content:
                  "<b>Handling complexity with clarity.</b><br/>Users needed to choose the right device, background, and seasonal elements without feeling lost. I designed guardrails and smart defaults that guided decisions without limiting flexibility.",
                visuals: [{ src: ASSETS.testImage, caption: "UI guardrails and smart selection logic." }]
              },
              {
                content:
                  "<b>Using prototypes to align quickly.</b><br/>I created fast, functional prototypes to communicate ideas to leadership and engineering. These helped unblock decisions and kept the team moving even when details were still forming.",
                visuals: [{ src: ASSETS.testImage, caption: "Lo-fi prototype used for stakeholder alignment." }]
              },
              {
                content:
                  "<b>Handoff and evolving Meridian.</b><br/>After landing the interaction model, I documented edge cases and handed designs to engineering. Meridian covered most needs, but I extended components where required and contributed improvements back to the system.",
                visuals: [{ src: ASSETS.testImage, caption: "Meridian component specifications and edge-case documentation." }]
              }
            ]
          },
          {
            type: "image-full",
            src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1737482813/Main_Builder_q8vj9z.png",
            caption: "Main Builder"
          },
          { type: "heading", title: "Impact" },
          {
            type: "impact-box",
            metrics: [
              { value: "100,000", label: "Hours Saved" },
              { value: "~120,000", label: "Images Generated in 2025" }
            ]
          },
          {
            type: "table",
            columns: ["Scope", "Images", "Manual time required"],
            rows: [
              ["Prime Day 2025", "~8,000", "~50,000 hours"],
              ["Seasonal sales", "~4,500", "~30,000 hours"],
              ["New product launch", "~6,500", "~36,000 hours"],
              ["Average month", "~1,100", "~6,000 hours"],
              ["Full year 2025", "~120,000 images across 23 marketplaces", "100k+ hours of manual work removed annually"]
            ]
          },
          {
            type: "text",
            content: [
              "Across 2025, the Builder and JASAI turned what used to be a manual, cross-team production grind into a repeatable system. Prime Day alone produced ~8,000 lifestyle and campaign images and eliminated ~50,000 hours of work, but the impact held across the entire calendar: seasonal sales generated ~4,500 images (saving ~30,000 hours), new product launches produced ~6,500 images (saving ~36,000 hours), and a typical month averaged ~1,100 images (removing ~6,000 hours). In total, the platform supported roughly ~120,000 images across 23 marketplaces and removed 100k+ hours of manual production work annually across design, 3D, and copy.",
              "I’m genuinely proud of what this system is already proving. JAS is now doing the kind of work that used to take entire design and 3D teams weeks to deliver, and it’s doing it across 23 marketplaces without adding more people or slowing anything down. The hours saved are real, the impact is visible, and this is just the first version of the platform."
            ]
          }
        ]
      }
    },
    {
      id: "jas-asset-manager",
      parentId: "amazon-devices-asset-system",
      company: "Amazon Devices",
      title: "2. Devices Asset Browser",
      impactSummary:
        "Built a centralized asset library that standardizes Amazon Devices imagery and enables AI-ready metadata at scale.",
      ImpactSummarySentence: "One centralized asset library platform to manage all Amazon Devices Catalog.",
      thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=80",
      summary: "A centralized visual library and metadata engine providing a single source of truth for Amazon Devices assets.",
      details: {
        heroImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=80",
        role: "Lead UX Designer",
        timeline: "August 2025 –Today",
        team: "Automate & Scale",
        status: PROJECT_STATUS.IN_BUILD,
        type: PRODUCT_TYPES.INTERNAL,
        services: [SERVICES.PRODUCT_DESIGN, SERVICES.UX_RESEARCH, SERVICES.UI_DESIGN],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "callout-box",
            content:
              "The Asset Browser served as the visual library for Amazon Devices and the operational layer that enabled AI training, metadata governance, and automated generation across the entire JAS ecosystem."
          },
          {
            type: "text",
            content: [
              "The Amazon Devices organization had no true source of truth for visual assets. Before images reached Media Central, they passed through a basic Images section inside Journeys that lacked metadata, organization, and browseability, which made it hard for teams to find the right assets and often led to outdated or duplicated work.",
              "From the start, we knew that after launching the Image Asset Builder, a centralized asset library had to come next. The Builder could only scale if it was powered by clean, searchable, well-governed inputs. A reliable system for device images, variants, backgrounds, and confidential prototypes was mandatory for global consistency and for reducing manual production work.",
              "This is why the Asset Browser became the foundation for everything that followed. It served as the visual library for Amazon Devices and the operational layer that enabled AI training, metadata governance, and automated generation across the entire JAS ecosystem."
            ]
          },
          { type: "heading", title: "Design Strategy" },
          {
            type: "text",
            content:
              "I owned the UX and UI for the Asset Browser, designing it as both a simple discovery tool and a scalable metadata engine. The goal was to let users find the right asset in seconds while the system quietly handled complex rules around confidentiality, device lifecycle, region availability, and metadata requirements for AI. The Browser needed to feel familiar and intuitive, but under the hood it had to support strict governance and automation workflows that touched every JAS pillar."
          },
          { type: "heading", title: "Process" },
          {
            type: "list",
            items: [
              {
                content:
                  "<b>Learning how teams actually searched.</b><br/>I met with merchandisers across markets to understand their retrieval habits and frustrations. This revealed inconsistencies in naming, taxonomy, and access patterns that shaped the Browser’s IA.",
                visuals: [{ src: ASSETS.testImage, caption: "Researching asset retrieval habits across global markets." }]
              },
              {
                content:
                  "<b>Designing search and filtering for scale.</b><br/>With hundreds of SKUs, device generations, and regional rules, the challenge was creating filters that felt powerful but not overwhelming. I tested different models until users could reliably find what they needed.",
                visuals: [{ src: ASSETS.testImage, caption: "Designing powerful filters for a growing SKU catalog." }]
              },
              {
                content:
                  "<b>Managing confidentiality and device lifecycle.</b><br/>I added clear visual cues and access controls for prototype assets, unreleased devices, region-restricted content, and deprecated imagery to reduce risk.",
                visuals: [{ src: ASSETS.testImage, caption: "Visual guardrails for unreleased and restricted assets." }]
              },
              {
                content:
                  "<b>Integrating AI metadata.</b><br/>I designed the flows for uploading images, reviewing AI-generated metadata, and assigning standardized tags. This became the backbone for training JASAI and powering automation in the Builder.",
                visuals: [
                  { src: ASSETS.testImage, caption: "Reviewing AI-generated tags for accuracy." },
                  { src: ASSETS.testImage, caption: "Bulk tag management and governance dashboard." }
                ]
              },
              {
                content:
                  "<b>Rapid prototyping to align the team.</b><br/>I created quick prototypes for search flows, batch actions, and metadata panels to get early alignment with leadership and engineering.",
                visuals: [{ src: ASSETS.testImage, caption: "Prototype explorations for search + batch actions." }]
              },
              {
                content:
                  "<b>Evolving Meridian.</b><br/>The Browser required patterns that Meridian did not yet support. I extended components and contributed improvements back to the system.",
                visuals: [{ src: ASSETS.testImage, caption: "Component extensions and system improvements." }]
              }
            ]
          },
          { type: "heading", title: "Outcome" },
          {
            type: "text",
            content:
              "The Asset Browser centralized all Amazon Devices visual assets into a single, governed library that teams can search, filter, and trust. It eliminated outdated folders, reduced duplication, and dramatically improved asset discoverability."
          }
        ]
      }
    },
    {
      id: "jas-metadata-studio",
      parentId: "amazon-devices-asset-system",
      company: "Amazon Devices",
      title: "3. Metadata Admin Tool",
      impactSummary:
        "Created a metadata engine that reduces manual input and powers AI-assisted automation across the asset ecosystem.",
      ImpactSummarySentence: "Metadata engine reducing manual input through AI assistance.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      summary: "A scalable metadata engine that reduced manual input and unlocked AI-assisted automation across the JAS ecosystem.",
      details: {
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
        role: "Lead UX Designer",
        timeline: "August 2025 –Today",
        team: "Automate & Scale",
        status: PROJECT_STATUS.IN_BUILD,
        type: PRODUCT_TYPES.INTERNAL,
        services: [SERVICES.UX_RESEARCH, SERVICES.SYSTEMS_DESIGN, SERVICES.AI_WORKFLOWS],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "callout-box",
            content:
              "Over four weeks and one focused offsite, product, design, engineering, and the Devices Brand Studio aligned on the full metadata requirements for every component image in the system. We identified six core asset types: devices, screen images, backgrounds, lifestyle backgrounds, and logos. Each required extensive metadata, sometimes up to 90 fields, covering elements like device allocation, compatibility rules, cultural relevance, physical proportions, angles, shadow behavior, and screen placement."
          },
          {
            type: "text",
            content: [
              "System Designers already had a reliable workflow that combined Photoshop automations and strict file naming conventions. The issue was not quality. The challenge was scale. Too many people were involved across too many steps, and the volume of metadata needed for future automation kept increasing. We needed a single administrative tool that could gather, structure, and validate metadata in a more efficient and scalable way.",
              "Leadership also pushed on using AI to reduce the manual load, which introduced a tension. This system needed to train the AI, but the AI was also expected to eventually assist or replace parts of the process. Finding a solution that supported both goals became the core challenge of this pillar."
            ]
          },
          { type: "heading", title: "Design Strategy" },
          {
            type: "text",
            content: [
              "I owned the user research, UX, and product direction for the metadata system. The strategy was to design a seamless UI that could gather all required metadata while reducing manual effort as much as possible. To do this, I first classified every metadata field into three groups: information that could be inferred from the asset itself, information that required human input, and information that could realistically be generated or suggested by AI.",
              "I ran multiple experiments with AI models to validate what could be automated. Many early results were not Amazon compliant, but they proved an important point. AI could identify colors, detect angles, locate screens, classify variants, and reduce the total number of inputs required from users. These experiments helped define where AI would play a role and where human judgment was still necessary.",
              "The UI needed to guide system designers through a workflow that felt simple, reduced the number of fields they touched, and prepared every asset for future AI training. The design strategy focused on clarity, strong defaults, and a metadata structure that could support both current needs and the automated pipelines we were building toward."
            ]
          },
          { type: "heading", title: "Process" },
          {
            type: "list",
            items: [
              {
                content:
                  "<b>Understanding real workflows.</b><br/>I partnered with System Designers to study how they used Photoshop automations, file naming conventions, and batch tools to produce component images. This gave me a grounded view of where metadata was created and which parts of the process could be simplified.",
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption: "Shadowing Photoshop automations and mapping where metadata is created in the existing pipeline."
                  }
                ]
              },
              {
                content:
                  "<b>Classifying metadata inputs.</b><br/>Working with engineering, design, and brand partners, I defined which metadata fields should be inferred, which required human judgment, and which could be suggested or generated by AI.",
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption: "Field taxonomy model separating inferred, manual, and AI-assisted metadata inputs."
                  }
                ]
              },
              {
                content:
                  "<b>Validating AI feasibility.</b><br/>I ran AI experiments that explored automated classification, visual variant detection, screen mapping, image warping, proportional scaling, and metadata extraction. These tests showed that many of the required metadata fields could be inferred rather than manually entered, which shaped the upload flow, UI, and underlying data model.",
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption:
                      "Early AI experiments validating what could be inferred: color detection, angle detection, screen mapping, and variant classification."
                  }
                ]
              },
              {
                content:
                  "<b>Prototyping to align direction.</b><br/>I built low fidelity prototypes to show how a streamlined metadata workflow could function. These were shared across product, design, engineering, and Devices Brand Studio to build confidence and align expectations around what automation could realistically support.",
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption: "Lo-fi prototypes used to align teams on a reduced-input workflow and AI validation checkpoints."
                  }
                ]
              },
              {
                content:
                  "<b>Refining for clarity and scale.</b><br/>I iterated on layouts and validation flows and removed anything that introduced noise. The final workflow focused on speed, clarity, and preparing assets for future AI-driven automation.",
                visuals: [
                  {
                    src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1769461141/admintool_r23r8u.gif",
                    caption: "Low fidelity prototype focused on speed: fewer fields, stronger defaults, and clearer validation states."
                  }
                ]
              }
            ]
          },
          { type: "heading", title: "Outcome" },
          {
            type: "text",
            content: [
              "The metadata system created a scalable foundation that changed how Amazon Devices prepares images for automation. 3D artists can now embed essential physical details directly into device renders, which removes guesswork later in the workflow. System Designers can continue using their Photoshop pipelines to bulk-generate device PNGs, but the major shift is that an AI agent can now infer most metadata fields with minimal human input.",
              "This opened the door for automated image composition. For example, an Echo Show can be placed into a lifestyle scene with the correct angle, shadows, and screen content, then instantly regenerated for another locale without touching the Image Builder. The aha moment was seeing an Echo Show displaying a Netflix release on a kitchen counter, then generating the same image in Spanish, fully automated. This pillar established the metadata intelligence that makes future creative automation possible."
            ]
          }
        ]
      }
    },
    {
      id: "jas-ai-generator",
      parentId: "amazon-devices-asset-system",
      company: "Amazon Devices",
      title: "4. Journeys AI Agent",
      impactSummary:
        "Prototyped an AI lifestyle-image generator that trained automated placement rules for Amazon Devices campaigns.",
      ImpactSummarySentence: "Teaching AI to generate lifestyle images using the proprietary Amazon Devices catalog.",
      thumbnail: AMAZON_DEVICES_AI_IMAGE,
      summary: "Integrating generative AI into the creative workflow for rapid lifestyle image variation.",
      details: {
        heroImage: AMAZON_DEVICES_AI_IMAGE,
        role: "Lead UX Designer",
        timeline: "December 2024 – March 2025",
        team: "Automate & Scale",
        status: PROJECT_STATUS.LAUNCHED,
        type: PRODUCT_TYPES.INTERNAL,
        services: [SERVICES.PRODUCT_DESIGN, SERVICES.STRATEGY, SERVICES.AI_WORKFLOWS],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "text",
            content: [
              "Lifestyle images were the most complex assets the Amazon Devices organization produced. They required correct device angles, shadows, lighting, screen behavior, and placement across a wide range of backgrounds and room types. This level of craft made them slow to produce and impossible to scale manually. To move toward automated content creation, we needed an AI model that could understand how Amazon hardware should appear in real environments.",
              "JASAI was created as a sandbox to explore whether AI could generate these images at the quality bar we needed. It served two goals: to prove that AI could match our design expectations and to train an in-house Amazon Devices model using structured metadata and human feedback. Once the model matured, the plan was to embed JASAI directly into the Image Builder so users could generate lifestyle images and local variations through simple prompts."
            ]
          },
          { type: "heading", title: "Design Strategy" },
          {
            type: "text",
            content: [
              "The strategy focused on training an in-house Amazon Devices AI agent to understand how our hardware behaves in real environments. Using the metadata frameworks from Pillar 3, we defined the inputs the model needed: device proportions, angles, shadows, screen behavior, and background attributes such as room type and lighting. Training the model demanded close collaboration with designers, who provided manual inputs and clarified the placement rules that define a correct Amazon Devices lifestyle image.",
              "I partnered with science and design to build the training and review loops that would shape the model. These loops were created for the AI, not for users. When outputs missed the bar, a designer corrected them so the system could learn from the feedback. Once trained, JASAI would integrate directly into the Image Builder, enabling on-demand lifestyle image generation and localized variations through simple prompts."
            ]
          },
          {
            type: "heading",
            title: "Process"
          },
          {
            type: "list",
            items: [
              "<b>Defining what correct placement meant.</b><br/>I worked with Brand Studio and 3D teams to establish the rules for angles, shadows, proportions, and screen behavior. This gave the model a clear standard to learn from.",
              "<b>Designing and prototyping the AI training loop.</b><br/>I built the workflow where designers reviewed AI outputs and corrected mistakes. This included reshaping metadata into simple controls, writing clear labels, and creating small widgets and interactions that made feedback fast and consistent.",
              "<b>Running placement and composition tests.</b><br/>I partnered with science to evaluate early results, check cutout quality, verify device placement in backgrounds, and understand how well the model handled lighting and perspective.",
              "<b>Preparing integration with the Image Builder.</b><br/>I designed how approved AI outputs flow into the Builder so teams can generate lifestyle images and local variations without manual reconstruction."
            ]
          },
          { type: "heading", title: "JAS Metadata AI Automation" },
          {
            type: "callout-box",
            content:
              "Those experiments became the foundation for a minimal-input, AI-assisted ingestion approach that will eventually eliminate most manual steps in the upload process. The results were strong enough that I’m thinking on dedicating a case study to it, and elaborate how we built this agent and expand on automation, metadata strategy, and human-in-the-loop design inside large-scale internal systems."
          },
          {
            type: "image-full",
            src: "https://prod-files-secure.s3.us-west-2.amazonaws.com/e3d5fd0b-e2f1-4690-a852-73c6368c13a2/1f8c9dcf-a5c8-47ef-9385-c75d8c2514b1/image.png",
            caption:
              "Example of a technical document where we study how we plan to insert metadata so the engine can smartly place devices on top of furniture."
          },
          {
            type: "image-full",
            src: "https://prod-files-secure.s3.us-west-2.amazonaws.com/e3d5fd0b-e2f1-4690-a852-73c6368c13a2/ea6c51d6-f996-40c3-9036-839ac760e57e/image.png"
          },
          {
            type: "image-full",
            src: "https://prod-files-secure.s3.us-west-2.amazonaws.com/e3d5fd0b-e2f1-4690-a852-73c6368c13a2/5045814d-d2a4-423b-aeab-371b5f8614fc/image.png"
          },
          { type: "heading", title: "Outcome" },
          {
            type: "impact-box",
            metrics: [
              { value: "12,000", label: "Lifestyle Variations Generated" },
              { value: "5%", label: "Outputs Reviewed" },
              { value: "~4 min", label: "Review Time / Output" }
            ]
          },
          {
            type: "text",
            content: [
              "We released JASAI in August 2025. The model generated roughly 12,000 lifestyle image variations across multiple devices and backgrounds to build the training library. About 5 percent of these outputs were reviewed by creative directors to evaluate whether the AI met our quality bar. Each review took about four minutes, which helped us validate the model’s strengths but also revealed the limits of our approach.",
              "While JASAI proved that automated lifestyle generation was possible, adoption was low. The human review required to train the model made the workflow harder to scale, and the outputs did not reach the level of consistency needed for full deployment. The team used these learnings to shift toward new AI strategies and explore other technologies better suited for production-level automation."
            ]
          }
        ]
      }
    },
    {
      id: "amazon-core-inspire-tab",
      company: "Amazon Core Shopping",
      title: "Inspire Tab",
      impactSummary:
        "Led Smart Home discovery strategy for Amazon’s feed experience, driving a measurable lift in device sales.",
      thumbnail: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80",
      summary: "Developing the foundational content-discovery tab for the global Amazon Shopping experience.",
      details: {
        heroImage: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80",
        role: "UX Lead for Smart Home Devices",
        timeline: "Late 2022-Late 2023",
        team: "Core Shopping",
        status: PROJECT_STATUS.DEPRECATED,
        type: PRODUCT_TYPES.MOBILE,
        services: [SERVICES.STRATEGY, SERVICES.UI_DESIGN, SERVICES.PROTOTYPING],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "callout-box",
            content:
              "Inspire was a company-level initiative inside the Amazon app designed to become a primary destination for recreational shopping and product discovery. I owned the Smart Home Devices slice of the experience where trust, relevance, and catalog correctness were non-negotiable."
          },
          {
            type: "text",
            content: [
              "I worked on Inspire while on the Core Shopping Smart Home Devices team at Amazon. The feature launched in December 2022 and contributed to a ~2% lift in total units sold, representing roughly 13.5M devices worldwide, before being deprecated in early 2024 as Amazon shifted focus toward newer AI-driven discovery experiences.",
              "My scope focused on making Inspire work for Smart Home at Amazon scale. The challenge was not content volume. The challenge was ensuring the right devices surfaced with the right context, without manual curation, and without eroding customer trust in a category where compatibility and correctness matter."
            ]
          },
          { type: "heading", title: "The Problem" },
          {
            type: "text",
            content: [
              "Inspire introduced a feed-based, creator-driven discovery model to Amazon. That model worked well for many categories, but Smart Home devices behave differently. Customers are not just browsing, they are evaluating compatibility, ecosystems, and intent.",
              "The risk was not lack of engagement. The risk was misleading discovery: showing the wrong device, at the wrong time, to the wrong customer, and eroding trust in a high-intent category."
            ]
          },
          { type: "heading", title: "Design Strategy" },
          {
            type: "text",
            content: [
              "My strategy was to make Smart Home discovery feel intentional inside a feed experience that was not built for that level of catalog complexity.",
              "For Smart Home, Inspire could not optimize on engagement alone. It needed ranking and presentation logic that respected device type, ecosystem compatibility, and customer intent, while still operating inside an ML-driven personalized feed.",
              "I partnered with science and product to shape how Smart Home taxonomy and device metadata informed ranking, and I supported CX decisions that made device content feel scannable, shoppable, and trustworthy at feed speed."
            ]
          },
          {
            type: "list",
            items: [
              {
                content:
                  "<b>Defining what relevant discovery meant for Smart Home.</b><br/>I helped define what good looked like for Smart Home devices inside a creator-driven feed, aligning on constraints that were not needed for softer categories. Compatibility cues, correct device grouping, and avoiding accessory mis-matches became foundational expectations.",
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption: "Placeholder: framework or taxonomy notes defining safe and accurate Smart Home discovery in a feed."
                  }
                ]
              },
              {
                content:
                  "<b>Shaping metadata inputs that supported ML ranking.</b><br/>I partnered closely with data science to tune how device metadata informed ranking and content association, balancing engagement signals with catalog correctness. This included identifying what needed to be treated as a hard constraint versus what could remain flexible or learned.",
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption:
                      "Placeholder: ranking and metadata signal map showing where correctness overrode engagement-driven recommendations."
                  }
                ]
              },
              {
                content:
                  "<b>Making device content feel deliberate in the feed.</b><br/>I influenced feed-level experience decisions so Smart Home content did not feel incidental or randomly injected. The focus was product identification, clearer context, and guardrails that reduced misinterpretation and wrong-click behavior.",
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption: "Placeholder: feed scannability explorations showing product context, clarity, and interaction patterns."
                  }
                ]
              },
              {
                content:
                  "<b>Supporting creator tools for commerce attachment.</b><br/>I contributed to the creator workflow that enabled influencers and brands to attach ASINs to short-form videos and photos. The goal was to reduce cool video, wrong product outcomes and strengthen product-to-content association.",
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption: "Placeholder: creator tool flow showing ASIN attachment and product association controls."
                  }
                ]
              }
            ]
          },
          { type: "heading", title: "Key Surfaces" },
          {
            type: "text",
            content: [
              "Inspire surfaced shoppable media primarily through influencer and brand content. My focus was on ensuring Smart Home devices had stronger product associations and clearer context so customers could trust what they were seeing and move from discovery to purchase without uncertainty."
            ]
          },
          { type: "image-full", src: ASSETS.testImage, caption: "Creator Tools (Placeholder)" },
          { type: "image-full", src: ASSETS.testImage, caption: "Main Feed Experience (Placeholder)" },
          { type: "heading", title: "Outcome" },
          { type: "impact-box", metrics: [{ value: "~2%", label: "Lift in Total Units Sold" }, { value: "13.5M", label: "Devices Worldwide" }] },
          {
            type: "text",
            content: [
              "Inspire launched broadly in December 2022. Success was measured primarily through customer attention minutes, with secondary signals tied to units sold and customer satisfaction.",
              "At launch, Inspire delivered a ~2% lift in total units sold, representing roughly 13.5M devices worldwide, validating feed-based discovery as a meaningful commerce surface at Amazon scale."
            ]
          },
          { type: "heading", title: "Reflection" },
          {
            type: "callout-box",
            content:
              "This work reinforced a core lesson: in high-stakes categories like Smart Home, relevance is not only behavioral, it is structural. Compatibility, ecosystem rules, and customer intent must shape discovery as much as engagement does."
          },
          {
            type: "text",
            content: [
              "In early 2024, Inspire was deprecated as Amazon’s strategic focus shifted toward AI-driven discovery and conversational shopping experiences. While Inspire itself was sunset, the work shaped how I think about integrating massive catalogs into ML-driven discovery systems where small decisions have outsized downstream impact.",
              "My role required judgment more than control: knowing where to push, where to adapt, and where to align with decisions already in motion. That experience sharpened how I operate in high-stakes, cross-org environments where scale amplifies every decision."
            ]
          }
        ]
      }
    },
    {
      id: "amazon-core-ai-review-highlights",
      company: "Amazon Core Shopping",
      title: "AI-powered Customer Review Highlights",
      impactSummary:
        "Designed AI-driven review highlights that distilled thousands of reviews into clear, actionable product insights.",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      summary: "Leveraging GenAI to synthesize thousands of customer reviews into actionable highlights.",
      details: {
        heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
         role: "UX Lead for Smart Home Devices",
        timeline: "Late 2023",
        team: "Core Shopping",
        status: PROJECT_STATUS.LAUNCHED,
        type: PRODUCT_TYPES.CONSUMER,
        services: [SERVICES.STRATEGY, SERVICES.UI_DESIGN, SERVICES.PROTOTYPING],
        blocks: [{ type: "text", content: "Case study coming soon." }]
      }
    },
    {
      id: "alto-internal",
      company: "Alto Pharmacy",
      title: "Internal Platform for Intra Pharmacist Communication",
      impactSummary:
        "Improved pharmacist collaboration workflows by centralizing context and streamlining internal communication.",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      summary: "Improving context gathering for Care Ops message handling within Alto's internal toolkit.",
      details: {
        heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        role: "Staff Product Designer",
        timeline: "2020–2021",
        team: "Internal Tools Team",
        status: PROJECT_STATUS.LEGACY,
        type: PRODUCT_TYPES.INTERNAL,
        services: [
          SERVICES.PRODUCT_DESIGN,
          SERVICES.UX_RESEARCH,
          SERVICES.SYSTEMS_DESIGN,
          SERVICES.PROTOTYPING,
          SERVICES.STRATEGY
        ],
        blocks: [{ type: "text", content: "Case study for Alto internal tools development." }]
      }
    },
    {
      id: "alto-assistant",
      company: "Alto Pharmacy",
      title: "Alto Assistant App",
      impactSummary:
        "Reduced inbound patient messaging by 38% with a smarter triage experience that improved care efficiency.",
      thumbnail: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
      summary: "Reducing incoming message volume by 38% and improving patient experience through a smart triage system.",
      details: {
        heroImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
        role: "Staff Product Designer",
        timeline: "2020–2021",
        team: "Internal Tools Team",
        status: PROJECT_STATUS.LEGACY,
        type: PRODUCT_TYPES.MOBILE,
        services: [
          SERVICES.PRODUCT_DESIGN,
          SERVICES.UX_RESEARCH,
          SERVICES.SYSTEMS_DESIGN,
          SERVICES.PROTOTYPING,
          SERVICES.STRATEGY
        ],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "callout-box",
            content:
              "Alto Assistant is a patient support platform that reduces avoidable inbound messages and escalations by gathering better context upfront. This work reduced incoming messages by <b>38%</b>, improving operational efficiency and patient confidence across the Alto app and internal care workflows."
          },
          { type: "heading", title: "Problem" },
          {
            type: "text",
            content: [
              "In 2022, Alto’s mobile app received an average of 3,200 patient messages per day. Each message created a support ticket, even when the question was non-clinical or could have been resolved through self-service. This increased operational load and pulled pharmacists into avoidable escalations.",
              "Patients had many entry points to message support, but little guidance on how to ask for help. Messages arrived as unstructured text with limited context, categorization, or expectation setting. This slowed triage, increased back-and-forth, and reduced confidence around response timing and outcomes.",
              "Medical questions were the most expensive category. They often required a Care Specialist handoff and then dedicated time from a Specialty Pharmacist, with duplicated effort due to context gathering and escalation workflow overhead."
            ]
          },
          {
            type: "image-full",
            src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e97c2dad-8a7d-46a7-981a-a0b7969a7626/Untitled.png",
            caption: "Unstructured inbound messages created tickets without reliable context, increasing triage time and escalation load."
          },
          { type: "heading", title: "Goals" },
          {
            type: "callout-box",
            content:
              "Reduce <b>Care Cost per Shipment (CPS)</b> by decreasing unnecessary inbound messages, without compromising patient trust or clinical quality."
          },
          {
            type: "text",
            content: [
              "<b>Operational goals</b><br/>Reduce avoidable escalations to pharmacists through better upfront context. Minimize handoffs between Care Ops and Pharmacy. Reduce time spent per inbound message.",
              "<b>Patient goals</b><br/>Help patients ask medical questions confidently and understand what happens next. Reduce unnecessary back-and-forth. Set clearer expectations for response time and next steps."
            ]
          },
          { type: "heading", title: "Design Strategy" },
          {
            type: "text",
            content: [
              "After auditing a week of inbound messages, I grouped them into six core topics so we could tackle problems independently instead of treating every message the same. For this case study, I focused on <b>Medical Questions</b>, the most expensive and operationally complex category.",
              "The strategy centered on improving context collection before routing and reducing ambiguity without blocking access to care. This meant gathering better structured inputs upstream, filtering non-clinical questions through self-service where possible, and setting expectations clearly for response time and next steps."
            ]
          },
          {
            type: "image-full",
            src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ff75f08c-8f5a-4d80-bc07-7543399574e1/Untitled.png",
            caption: "Message audit synthesis: inbound questions bucketed into six core topics so we could solve them independently."
          },
          {
            type: "image-full",
            src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5b48d16b-5d3d-4fe4-b073-f8780c73935e/AA_drect_to_pharmacist.gif",
            caption: "Early concept: reframing the problem from categorization toward context and routing clarity for medical questions."
          },
          { type: "heading", title: "Research" },
          {
            type: "text",
            content: [
              "Research revealed a consistent tension between patient uncertainty and internal operational risk. Patients often did not know how to classify their medical questions, frequently raised more than one concern at a time, and defaulted to messaging as a catch-all. Internally, Ops and Pharmacy worried about being overwhelmed by unfiltered messages or becoming bottlenecks when volume spiked.",
              "The key insight was that asking patients to self-diagnose or pick the right category would add friction and undermine trust. The system needed to capture intent and context without requiring patients to understand Alto’s internal model."
            ]
          },
          {
            type: "image-full",
            src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/115f3bc2-a673-4811-9536-2b38efcae5a5/Untitled.png",
            caption: "Research synthesis artifact capturing recurring themes across interviews and internal discussions."
          },
          { type: "video", src: "https://www.youtube.com/embed/_qnZwrZqppM", caption: "Moderated usability sessions and validation work." },
          {
            type: "image-full",
            src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8947bf5d-acbc-4bcf-9962-af1e1aeb9668/Ui_Explorations.png",
            caption: "Broad visual exploration covering tone, hierarchy, and interaction density."
          },
          { type: "heading", title: "Explorations" },
          {
            type: "list",
            items: [
              {
                content:
                  "<b>Exploration 1: Multi-select to capture intent.</b><br/>Patients frequently raised multiple concerns in a single message. Multi-select let patients express intent naturally while giving the system richer upstream context.",
                visuals: [
                  {
                    src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b0484998-57a5-4e24-82db-f93be547e3c6/Untitled.png",
                    caption: "Multi-select captured multiple concerns without forcing patients to self-categorize."
                  },
                  {
                    src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2251b454-fb2d-46bc-a820-70af244d2f33/Untitled.png",
                    caption: "Early UI iteration exploring intent selection and context capture."
                  }
                ]
              },
              {
                content:
                  "<b>Exploration 2: Setting expectations upfront.</b><br/>We explored clarifying pharmacist involvement earlier in the flow. This reduced ambiguity but risked feeling blunt and over-filtering valid medical questions.",
                visuals: [
                  {
                    src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cbb33b13-4fa7-4ffd-9441-39a3b78e78ea/Untitled.png",
                    caption: "Expectation setting improved clarity but introduced risk around false negatives and perceived access barriers."
                  }
                ]
              },
              {
                content:
                  "<b>Exploration 3: Minimal intervention.</b><br/>A low-friction approach allowed free-form questions with little guidance. It was fast for patients but pushed complexity downstream and increased operational cost.",
                visuals: [
                  {
                    src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8614fd55-bb94-4e9b-befa-ed196009928f/Untitled.png",
                    caption: "Minimal structure reduced friction but increased downstream triage and escalation effort."
                  }
                ]
              },
              {
                content:
                  "<b>Pre-exploration validation: two variants.</b><br/>We pressure-tested how much structure we could introduce while preserving trust.",
                visuals: [
                  {
                    src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0088ec04-3183-4281-8646-9fdf5324247c/Untitled.png",
                    caption: "Option 1: Minimal structure reduced handoffs but created uncertainty around response timing."
                  },
                  {
                    src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/64112a43-8c56-4b6f-8c84-1188338f8fa4/Untitled.png",
                    caption: "Option 2: Lightweight guidance added reassurance and clarity."
                  }
                ]
              },
              {
                content:
                  "<b>Prototypes explored three paths.</b><br/>These options explored different ways to balance clarity, flexibility, and operational cost.",
                visuals: [
                  {
                    src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e15cbff2-13a1-4b76-abe9-e7024ff64b41/AA_option_1.gif",
                    caption: "Option 1: Start with medication context to anchor the question."
                  },
                  {
                    src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4f3c008f-01d7-4540-bc7d-85c279b571ac/AA_option_2.gif",
                    caption: "Option 2: Support multiple medications and questions at the cost of complexity."
                  },
                  {
                    src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da497c8d-8565-4490-856c-eb311811f2f0/AA_option_3.gif",
                    caption: "Option 3: Ask for medication first, then guide the question through relevant subtopics."
                  }
                ]
              },
              {
                content:
                  "<b>Prototype library.</b><br/><a href='https://www.figma.com/proto/EuDrnvOQOZx8Wrc4beLGTB/AA-Direct-to-Pharmacist?page-id=10888%3A142839&node-id=10894%3A435574&viewport=614%2C-1252%2C0.19&scaling=scale-down&starting-point-node-id=10894%3A435574&show-proto-sidebar=1' target='_blank' rel='noopener noreferrer'>View prototypes in detail</a>."
              }
            ]
          },
          { type: "heading", title: "Launch" },
          {
            type: "text",
            content: [
              "Following Alto’s release protocol, the feature was rolled out to a 10% controlled cohort. This allowed us to monitor behavior, validate impact, and quickly gate or roll back changes if issues emerged, which is critical in a medical context."
            ]
          },
          { type: "heading", title: "Impact" },
          {
            type: "text",
            content: [
              "We did not ship a full redesign of the medical questions flow. Instead, the work led to meaningful improvements in how Care Specialists handled patient conversations. We focused on simplifying and cleaning up Marcia Notes, reducing cognitive load and making patient history easier to scan and understand."
            ]
          },
          {
            type: "image-full",
            src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/71592f3f-f161-4f87-badb-1279437eb0ee/AA_final.gif",
            caption: "Shipped improvements reduced cognitive load for Care Specialists and improved clarity when reviewing patient history."
          },
          { type: "impact-box", metrics: [{ value: "18%", label: "Reduction in Communications / Shipment" }, { value: "0.93", label: "Communications / Shipment (Late July)" }] },
          {
            type: "callout-box",
            content:
              "<b>30,000+ weekly visits</b> by <b>11,000+ users</b>, preventing tens of thousands of unstructured inbound messages that previously required manual handling."
          },
          {
            type: "image-full",
            src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/740c4b95-cb34-4539-b292-bdc37f36c8c8/Untitled.png",
            caption: "North Star: anchor medical consultation around medication selection, then layer guidance, subtopics, and self-service content on top."
          }
        ]
      }
    },
    {
      id: "amazon-core-ai-review-highlights",
      company: "Amazon Core Shopping",
      title: "AI-powered Customer Review Highlights",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      summary: "Leveraging GenAI to synthesize thousands of customer reviews into actionable highlights.",
      details: {
        heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        role: "UX Lead for Smart Home Devices",
        timeline: "Late 2023",
        team: "Core Shopping",
        status: PROJECT_STATUS.LAUNCHED,
        type: PRODUCT_TYPES.CONSUMER,
        services: [SERVICES.STRATEGY, SERVICES.UI_DESIGN, SERVICES.PROTOTYPING],
        blocks: [{ type: "text", content: "Case study coming soon." }]
      }
    },
    {
      id: "patreon-creator-tools",
      company: "Patreon",
      title: "Benefit Delivery Tools for Creators",
      impactSummary:
        "Empowered creators with better benefit delivery tools that improved scale, clarity, and consistency.",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      summary: "Empowering creators with better tools for benefit delivery and establishing a unified design studio framework.",
      details: {
        heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        role: "Sr. Product Designer",
        timeline: "October 2020",
        team: "Creator Team",
        status: PROJECT_STATUS.LAUNCHED,
        type: PRODUCT_TYPES.INTERNAL,
        services: [SERVICES.STRATEGY, SERVICES.UI_DESIGN, SERVICES.PROTOTYPING],
        blocks: [{ type: "text", content: "Case study coming soon." }]
        
      }
    },
    {
      id: "patreon-studio2.0",
      company: "Patreon",
      title: "Studio 2.0 Design System",
      impactSummary:
        "Modernized Patreon’s design system to streamline creator workflows and improve product consistency.",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      summary: "Design System overhaul to streamline creator workflows and enhance platform consistency.",
      details: {
        heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        role: "Sr. Product Designer",
        timeline: "October 2020",
        team: "Creator Team",
        status: PROJECT_STATUS.DEPRECATED,
        type: PRODUCT_TYPES.MOBILE,
        services: [SERVICES.SYSTEMS_DESIGN, SERVICES.UI_DESIGN, SERVICES.PROTOTYPING],
        blocks: [{ type: "text", content: "Case study for Patreon creator hub." }]
      }
    },
  ]
};

export const WORK_GROUPS = [
  {
    company: "Amazon Devices",
    roleLine: "Sr. UX Designer · Internal Tools · 2023–Today",
    projectIds: [
      "amazon-devices-asset-system",
      "jas-image-builder",
      "jas-asset-manager",
      "jas-metadata-studio",
      "jas-ai-generator"
    ]
  },
  {
    company: "Amazon Core Shopping",
    roleLine: "Sr. UX Designer · 2022–2023",
    projectIds: ["amazon-core-inspire-tab", "amazon-core-ai-review-highlights"]
  },
  {
    company: "Alto Pharmacy",
    roleLine: "Staff Product Designer · 2021–2022",
    projectIds: ["alto-internal", "alto-assistant"]
  },
  {
    company: "Patreon",
    roleLine: "Sr. Product Designer · Creator Tools · 2020–2021",
    projectIds: ["patreon-creator-tools", "patreon-studio2.0"]
  },
  {
    company: "Prox",
    roleLine: "Founding Designer · 2019–2020",
    projectIds: ["prox-1"]
  },
  {
    company: "Instapage",
    roleLine: "Sr. UX Designer · Growth & Dashboard · 2017–2019",
    projectIds: ["instapage-1"]
  }
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