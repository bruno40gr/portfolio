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
  "alto-internal": "Internal Platform for Intra Pharmacist Communication",
  "alto-assistant": "Alto Assistant App",
  "patreon-creator-tools": "Benefit Delivery Tools for Creators",
  "patreon-pledge-streak-patent": "Pledge Streak Patent",
  "patreon-studio2.0": "Studio 2.0 Design System",
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
    {
      id: "amazon-devices-asset-system",
      company: "Amazon",
      title: CASE_STUDIES_TITLES["amazon-devices-asset-system"],
      impactSummary: "Enabled AI-powered Amazon Devices marketing content generation at a global scale.",
      impactSummarySentence: "I architected an enterprise-scale ecosystem for Amazon Devices to automate workflows for 400 marketers.",
      designerNote: `I architected an enterprise-scale ecosystem for Amazon Devices to automate workflows for 400 marketers. This foundational AI framework satisfied a high-level mandate to lead in the emerging tech landscape.\n\nI structured the transformation across four strategic pillars presented here as distinct case studies, delivering the phases that established the platform as a 2026 roadmap cornerstone.\nThis remains the most strategically significant project of my career.`,
      thumbnail: AMAZON_DEVICES_AI_IMAGE,
      status: "IN_BUILD",
      type: "INTERNAL",
      details: {
        heroImage: AMAZON_DEVICES_AI_IMAGE,
        role: "Lead UX Designer",
        timeline: "2024–Today",
        team: "Automate & Scale",
        type: "INTERNAL",
        services: [SERVICES.STRATEGY, SERVICES.SYSTEMS_DESIGN, SERVICES.AI_WORKFLOWS],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "impact-box",
            metrics: [
              { value: "45-50", label: "Marketer/Designer Workflows Replaced" },
              { value: "8,000+", label: "Assets Generated for Prime Day 2025" }
            ],
            description: [
              `The Asset System was designed to automate the work of a 45-50 person cross-functional team. For Prime Day 2025 alone, its deployed workflows generated over <b>8,000 assets</b>, accounting for an estimated <b>48,000 hours</b> of previously manual work.`
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
  title: CASE_STUDIES_TITLES["jas-image-builder"],
  impactSummary: "An automated production system enabling localized asset generation at scale across 23 global marketplaces.",
  impactSummarySentence: "A scalable editor enabling localized marketing asset generation across all global marketplaces.",
  designerNote: "I led the design of this tool to help our marketing teams create device images without needing a designer for every update. Before this, we had a massive bottleneck where designers had to manually place product photos onto backgrounds for thousands of different language and size combinations. I wanted to make the editor easy to use while building in the smart logic needed to keep every image on-brand automatically. This work gave our global teams the speed they needed for major launches and served as the foundation for our entire automation system.",
  thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
  status: "LAUNCHED",
  type: "INTERNAL",
  details: {
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
    role: "Lead UX Designer",
    timeline: "September 2024 – Feb 2025",
    team: "Automate & Scale",
    type: "INTERNAL",
    services: [SERVICES.SYSTEMS_DESIGN, SERVICES.PROTOTYPING, SERVICES.UI_DESIGN],
    blocks: [
      { type: "heading", title: "Overview", hasDivider: false },
      {
        type: "callout-box",
        content:
          "The Image Builder is a scalable production tool that allows merchandisers to compose hero images, ads, and banners across various cultural contexts and dimensions. It replaced a patchwork of creative tools with one consistent, automated workflow."
      },
      {
        type: "text",
        content: [
          "<b>The Manual Bottleneck:</b> Before this system, merchandisers created assets across dozens of marketplaces using Photoshop, Illustrator, and inconsistent regional templates. Teams worked in silos, assets were rebuilt multiple times, and simple variations required hours of manual labor. To scale globally, Amazon Devices needed a predictable, automated way to create localized imagery.",
          "One of the most valuable asset types in this ecosystem is lifestyle imagery, which shows devices in real environments. These assets consistently increase click-through rates by more than 40%, yet they historically required 40,000+ hours of manual CGI and graphic design work annually."
        ]
      },
      { type: "heading", title: "Design Strategy" },
      {
        type: "text",
        content: [
          "While the product strategy was collaborative, I owned the <b>end-to-end UX/UI</b>. I focused on replacing a fragmented toolchain with a WYSIWYG builder that merchandisers could trust. I designed a <b>dynamic layout engine</b> that managed spacing, copy placement, and visual balance across dozens of dimensions automatically.",
          "The system supports structured templates for consistency but allows for flexibility when teams need it. Under the hood, I introduced <b>intelligent guardrails</b>: the system automatically checks for pricing inconsistencies, device availability, and brand constraints by \'reading\' image attributes through a robust metadata library.",
          "The goal was never to build another design tool: it was to build a production system that handled the mechanical steps so users could focus on content and clarity. I prioritized features like drag-and-drop editing and smart filters to ensure the tool felt fast and approachable for non-designers."
        ]
      },
      { type: "heading", title: "Process" },
      {
        type: "list",
        items: [
          {
            content:
              `<span class="process-step-title"><b>Discovery & User Insights</b></span><p class="mt-2">I adopted a user-centric discovery phase, utilizing agile research methodologies and \'scrappy\' usability testing with global merchandisers to map the friction in current workflows and define the product roadmap.</p>`,
            visuals: [
              {
                kind: "embed",
                src: "https://player.cloudinary.com/embed/?cloud_name=diy08lj9x&public_id=JAS_-_Metadata_Photoshop_1_mstvm3",
                caption: "Agile research session: Learning how brand designers manually crafted image assets."
              }
            ]
          },
          {
            content:
              `<span class="process-step-title"><b>Information Architecture & Iteration</b></span><p class="mt-2">Solving for 23+ marketplaces required a robust IA. I iterated on various interaction models to handle the high density of configuration options (marketplaces x languages) until I arrived at a scalable UI that prioritized clarity.</p>`,
            visuals: [
              {
                kind: "image",
                src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1769731424/175c5a76-0e29-4787-a5c9-0eb3c11a870b.png",
                caption: "Early iteration of top-level form fields and live preview logic."
              },
              {
                kind: "image",
                src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1769731833/1fa69945-d723-433e-a7c8-0bab74c87d8e.png",
                caption: "Exploring segmented controls vs. nested filters for marketplace selection."
              }
            ]
          },
          {
            content:
              `<span class="process-step-title"><b>Stress-Testing & Guardrails</b></span><p class="mt-2">To ensure the tool was \'incompatibility-proof,\' I designed intelligent guardrails and smart defaults that managed seasonal availability and regional legal requirements, guiding the user toward a \'correct-by-construction\' design.</p>`,
            visuals: [{ src: ASSETS.testImage, caption: "UI guardrails and smart selection logic for global compliance." }]
          },
          {
            content:
              `<span class="process-step-title"><b>Prototyping for Alignment</b></span><p class="mt-2">I utilized high-fidelity prototypes to validate the interaction model and secure stakeholder alignment. These were critical in communicating complex logic to engineering and gaining the trust of marketing leadership.</p>`,
            visuals: [{ src: ASSETS.testImage, caption: "Functional prototype used for stakeholder and engineering alignment." }]
          },
          {
  content:
    `<span class="process-step-title"><b>Handoff and Evolving Meridian</b></span>
    <p class="mt-2">
      Design was not a linear path: it was a cyclical process. Once the interaction model was finalized, I moved into a rigorous documentation phase to cover edge cases and ensure a seamless technical handoff to engineering.
    </p>
    <p class="mt-2">
      Internally, we leveraged Meridian, which is Amazon\'s dedicated enterprise design system that powers a unified language and human-centered designs for all internal-facing digital products at scale. While the system provided a robust foundation that covered most of our needs, the unique complexity of the Image Builder necessitated custom extensions. I designed these bespoke components where gaps existed and contributed our patterns back to the core system to help evolve the library for other internal teams.
    </p>`,
  visuals: [{ src: ASSETS.testImage, caption: "Meridian component specifications and edge-case documentation." }]
}
        ]
      },
      {
        type: "image-full",
        src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1737482813/Main_Builder_q8vj9z.png",
        caption: "The Final Image Builder Interface"
      },
      { type: "heading", title: "Final Shipped Product" },
      {
        type: "text",
        content: [
          "The first MVP launched in February 2025 to a targeted beta group, followed by a full-scale release in April 2025, strategically timed for the Prime Day production cycle. This version covered the entire Amazon Devices catalog across North America and EMEA, supporting 70% of high-traffic marketing placements, including homepage banners (Herotators), Quad cards, and Single Image cards. By focusing on these high-volume use cases first, the system delivered maximum operational ROI from day one."
        ]
      },
      { type: "heading", title: "Impact & Operational ROI" },
      {
        type: "impact-box",
        metrics: [
          { value: "100k+ hours", label: "Projected Annual Savings" },
          { value: "45-50", label: "Marketer/Designer Workflows Replaced" }
        ],
        description: [
          "For Prime Day 2025 alone, the deployed workflows produced <b>8,000 lifestyle images</b>, accounting for an estimated <b>48,000 hours</b> of previously manual work. This reclaimed time allowed creative and marketing teams to shift from repetitive production to high-level creative strategy."
        ]
      }
    ]
  }
},
    {
  id: "jas-asset-manager",
  parentId: "amazon-devices-asset-system",
  company: "Amazon Devices",
  title: "Devices Component Asset Manager",
  impactSummary: "A centralized library for the Amazon Devices catalog that enables AI automation and makes marketing images easy to find across global markets.",
  impactSummarySentence: "A centralized asset library that simplifies image discovery and enables AI powered automation.",
  designerNote: "Once we launched the Image Builder, it was clear that a centralized asset library had to be the next step. This project creates the foundation we need for an AI powered system by making sure our data is clean and easy to manage. Currently, our device and marketing images are scattered across different cloud systems, which makes them hard to track and find. With this manager, we are solving that dependency to make campaign creation intuitive and save our teams thousands of hours of manual work.",
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
        content:
          "The Asset Manager serves as the visual library for Amazon Devices. It is the operational layer that allows for AI training, metadata organization, and automated image generation across our entire system."
      },
      {
        type: "text",
        content: [
          "<b>The Problem:</b> Our organization had no single source of truth for visual assets. Currently, teams find it difficult to locate the right images, which leads to outdated assets being used or work being duplicated. The Image Builder can only scale if it is powered by a reliable system of device photos, backgrounds, and confidential prototypes.",
          "Marketing images are currently scattered across multiple internal systems, requiring heavy manual tracking and off-site management. This tool, known internally as DCAM, aims to solve this dependency and simplify how our teams interact with our product catalog."
        ]
      },
      { type: "heading", title: "Design Strategy" },
      {
        type: "text",
        content: [
          "I designed the Asset Browser to be a simple discovery tool that handles complex logic under the hood. The goal was to let a user find the right asset in seconds while the system managed the rules for confidentiality, region availability, and AI requirements.",
          "By focusing on a clean and familiar interface, I ensured that the tool felt intuitive for merchandisers while still supporting the strict governance and automation workflows that touch every part of the broader Asset System."
        ]
      },
      { type: "heading", title: "Process" },
      {
        type: "list",
        items: [
          {
            content:
              `<span class="process-step-title"><b>UX Research: Learning How Teams Search</b></span><p class="mt-2">I met with merchandisers in different markets to see how they manage images today. I found that inconsistent naming, scattered storage, and varied access patterns were the biggest blockers to speed. These insights helped me shape the browser's navigation and information architecture.</p>`,
            visuals: [
              {
                kind: "image",
                src: ASSETS.testImage,
                caption: "Researching asset retrieval habits and naming inconsistencies across global markets."
              }
            ]
          },
          {
            content:
              `<span class="process-step-title"><b>Managing Complexity with Smart Filtering</b></span><p class="mt-2">With hundreds of product IDs and multiple generations of devices to track, I focused on a powerful but simple filtering UI. I added clear visual cues for unreleased prototypes and restricted content to prevent accidental leaks and reduce legal risk.</p>`,
            visuals: [
              {
                kind: "image",
                src: "https://res.cloudinary.com/diy08lj9x/image/upload/v1769731424/175c5a76-0e29-4787-a5c9-0eb3c11a870b.png",
                caption: "Designing visual guardrails and access controls for restricted assets."
              }
            ]
          },
          {
  content:
    `<span class="process-step-title"><b>Streamlining the Approval Workflow</b></span><p class="mt-2">Our marketing partners needed a reliable way to approve, reject, or request changes to images without leaving the platform. Previously, these reviews happened offline and required multiple layers of manual follow-up. I worked closely with the QA and design teams to build a lean approval flow directly into the tool. This simplified the review process and was a major factor in getting teams to adopt the new system quickly.</p>`,
  visuals: [
    { 
      src: ASSETS.testImage, 
      caption: "UX flow for the integrated QA and approval process." 
    }
  ]
},
          {
            content:
              `<span class="process-step-title"><b>Evolving the System</b></span><p class="mt-2">This project required new UI patterns that our internal design system, Meridian, did not have yet. I designed these new components, such as batch management dashboards and metadata panels, and contributed them back to the system for other internal teams to use.</p>`,
            visuals: [{ src: ASSETS.testImage, caption: "Component extensions and improvements contributed back to Meridian." }]
          }
        ]
      },
      { type: "heading", title: "Functional Blueprint" },
      {
        type: "text",
        content: [
          "This developer ready blueprint is the source of truth for the build. The clickable prototype covers core features that we researched and validated, including batch management and smart filtering. It clearly defines the interaction logic and edge cases to make sure the final tool works exactly as intended."
        ]
      },
      {
            type: "figma",
            src: "https://www.figma.com/proto/PG1SSc8aZlpS9atMCvKg3M/Genie---Product-Demo-Day?page-id=174%3A13910&node-id=2243-25245&p=f&viewport=226%2C732%2C0.04&t=s3IjMY4Gl6tH4KiA-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2243%3A25245&show-proto-sidebar=1",
            caption: "Clickable prototype for batch management and smart filtering."
          },
          
      { type: "heading", title: "Outcome" },
      {
        type: "text",
        content: [
          "Although still in development, this browser is already the foundation for the Image Builder. It has turned our massive catalog into a searchable, automation ready library that serves as the operational layer for our AI engine. By centralizing our assets, we are not only saving production time but also ensuring that every marketing image used globally is current and brand compliant."
        ]
      }
    ]
  }
},
    {
      id: "jas-metadata-studio",
      parentId: "amazon-devices-asset-system",
      company: "Amazon Devices",
      title: CASE_STUDIES_TITLES["jas-metadata-studio"],
      impactSummary: "Designed an AI-assisted configuration flow that automates metadata ingestion, acting as the intelligence layer for high-scale image generation.",
      impactSummarySentence: "Designed an AI-assisted configuration flow that transforms manual data entry into intelligent automated verification.",
      designerNote: "I approached this as a critical systems challenge. Recognizing that manual entry was being accepted as the unavoidable cost of automation, I pushed beyond the original requirements to test unapproved AI capabilities. By validating these 'scrappy' prototypes early, I was able to prove that 90% of the workload could be automated, shifting the project from simple data entry to a high-leverage intelligence tool.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      status: "IN_BUILD",
      type: "INTERNAL",
      details: {
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
        role: "Lead UX Designer",
        timeline: "August 2025 –Today",
        team: "Automate & Scale",
        type: "INTERNAL",
        services: [SERVICES.UX_RESEARCH, SERVICES.SYSTEMS_DESIGN, SERVICES.AI_WORKFLOWS],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "callout-box",
            content:
              "The Metadata Studio serves as the intelligence layer for Amazon Devices. It is the configuration engine that compiles the complex metadata required to power AI training and automated image generation."
          },
          {
            type: "text",
            content: [
              "<b>The Problem:</b> Our automation pipeline had a critical flaw: it required massive amounts of data that we didn't have a scalable way to collect. Currently, System Designers must manually input up to 90 metadata fields for every single asset to ensure it works with our AI models. This manual tax created a bottleneck that threatened to stall our entire automation roadmap.",
              "The new image generation engine can only scale if it is fed precise, validated data. We needed a tool that could gather this intelligence without turning designers into data entry clerks, ensuring our AI systems have the fuel they need to operate."
            ]
          },
          { type: "heading", title: "Design Strategy" },
          {
            type: "text",
            content: [
              "I owned the research, UX, and product direction. My strategy was to move from 'manual entry' to 'intelligent verification.' I audited every metadata field and classified them into three categories: Inferred (data the system sees), Suggested (data the AI guesses), and Manual (data requiring human judgment).",
              "I ran multiple stress tests with AI models to validate this approach. While general image sorting proved non-essential, other tests showed incredible promise. We proved that AI could reliably identify product colors and angles with high precision. These experiments allowed us to design a UI that felt like a partner rather than a form, using 'correct-by-construction' logic to ensure every asset was ready for the engine."
            ]
          },
          { type: "heading", title: "Process" },
          {
            type: "list",
            items: [
              {
                content:
                  `<span class="process-step-title"><b>Discovery & Workflow Mapping.</b></span><p class="mt-2">I partnered with the Devices Brand Studio to shadow their current Photoshop and script-based workflows. This research helped me identify exactly where metadata was being 'born' and where we could intercept it automatically to reduce manual re-entry.</p>`,
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption: "Shadowing Photoshop automations and mapping where metadata is created in the existing pipeline."
                  }
                ]
              },
              {
                content:
                  `<span class="process-step-title"><b>The Heavy Lifting: Classification.</b></span><p class="mt-2">Working with engineering and data science, I built a taxonomy model to decide which fields to hide and which to show. We moved from a model where everything was manual to a taxonomy that prioritizes intelligent defaults.</p>`,
                visuals: []
              }
            ]
          },
          {
            type: "table",
            title: "Metadata Taxonomy",
            columns: ["Category", "Metadata Fields", "How It’s Handled"],
            rows: [
              [
                "Inferred",
                "Color identification, product angle detection, and image type categorization.",
                "Fully Automated: AI vision models extract this data directly from the uploaded file without user input."
              ],
              [
                "AI-Suggested",
                "Screen warping, visual variant matching, and proportional scaling.",
                "Augmented: The system calculates these values or generates the visual effect, then asks the user for a quick confirmation."
              ],
              [
                "Manual",
                "Regional compatibility, legal expiration dates, and screen coordinate mapping.",
                "Human-in-the-loop: These fields require high-level judgment or specific legal knowledge that cannot be safely automated."
              ]
            ]
          },
          {
            type: "list",
            items: [
              {
                content:
                  `<span class="process-step-title"><b>Validation Experiments.</b></span><p class="mt-2">I ran AI experiments to test feasibility. We found that specific tasks like color detection were 100% accurate, and angle detection was 90% accurate. I also prototyped a 'Screen Mapper' where a user draws a simple boundary, allowing the AI to handle complex perspective warping and glare application automatically.</p>`,
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption: "Early AI experiments validating what could be inferred: color detection, angle detection, screen mapping, and variant classification."
                  }
                ]
              },
              {
                content:
                  `<span class="process-step-title"><b>Prototyping & Refining.</b></span><p class="mt-2">I built low-fidelity prototypes to show the team how a 'reduced-input' workflow would actually feel. The final workflow focused on speed, clarity, and preparing assets for future AI-driven automation.</p>`,
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption: "Low fidelity prototype focused on speed: fewer fields, stronger defaults, and clearer validation states."
                  }
                ]
              }
            ]
          },
          { type: "heading", title: "Outcome & Impact" },
          {
            type: "text",
            content:
              "We proved that the system will handle the heavy lifting. By shipping this in Q3, we are moving from a theoretical bottleneck to a validated automated workflow. Our research confirmed that 3D artists and System Designers can stop acting as data entry clerks and focus on creative quality, knowing the system will handle the rest."
          },
          {
            type: "impact-box",
            size: "large",
            metrics: [
               { value: "3 Steps", label: "Down from ~50 manual inputs per component image" },
    { value: "99% accuracy", label: "In automated image composition validation" },
    { value: "90% accuracy", label: "In photography angle detection" },
               { value: "0.5% risk", label: "Of leaks vs. manual, spreadsheet-dependent handoffs" }
            ]
          }
        ]
      }
    },
   
     {
      id: "jas-ai-generator",
      parentId: "amazon-devices-asset-system",
      company: "Amazon Devices",
      title: "Asset System AI Agent",
      impactSummary: "Developed a specialized AI utility to automate product placement and layout rules, accelerating asset production for Amazon Devices.",
      impactSummarySentence: "Developed a generative AI utility that automates complex product placement and learns from human design feedback.",
      designerNote: "This project was a reality check. We proved that AI could generate high-quality composites, but we also discovered that human review is a massive bottleneck. The 'red flag' of a 4-minute review cycle is exactly what pushed us to build the automated Metadata Studio.",
      thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
      status: "LAUNCHED",
      type: "INTERNAL",
      details: {
        heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
        role: "Lead UX Designer",
        timeline: "December 2024 – March 2025",
        team: "Automate & Scale",
        type: "INTERNAL",
        services: [SERVICES.PRODUCT_STRATEGY, SERVICES.AI_WORKFLOWS, SERVICES.UX_DESIGN],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "callout-box",
            content:
              "JASAI is a generative sandbox designed to automate the creation of lifestyle imagery. It functions as a specialized compositing agent that understands how Amazon hardware should behave physically and aesthetically within real-world environments."
          },
          {
            type: "text",
            content: [
              "<b>The Challenge:</b> Lifestyle images are the most complex assets we produce. They require placing a proprietary device image—already cropped and measured—into a generated or photographed environment. The composite must respect camera angles, lighting volume, depth, perspective, and copy space.",
              "Creating these manually is unscalable. We needed an agent that could generate these images in batches while adhering to our rigid design bar. The goal was not just to generate images but to create a system where every output, pass or fail, served a purpose."
            ]
          },
          { type: "heading", title: "Design Strategy" },
          {
            type: "text",
            content: [
              "My strategy focused on the 'Human-in-the-Loop.' We knew the AI would not be perfect on day one, so the design challenge was creating a feedback loop that could translate subjective design direction into objective training data.",
              "I designed a qualification interface for Creative Directors and 3D Artists. Instead of a simple approval, the UI required specific reasoning for rejections—flagging issues like 'shadow quality,' 'choppiness,' or 'perspective mismatch.' This structured data was fed directly back to the science team to adjust the algorithm, ensuring the model got smarter with every batch."
            ]
          },
          { type: "heading", title: "Process" },
          {
            type: "list",
            items: [
              {
                content:
                  `<span class="process-step-title"><b>Defining "Correct" Placement.</b></span><p class="mt-2">I worked with the Brand Studio to codify the rules for angles, shadows, and screen behavior. We had to teach the model that a Fire TV in a living room behaves differently than an Echo Show in a kitchen, establishing a 'ground truth' for the AI to aim for.</p>`,
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption: "Codifying physical rules for device placement in varied environments."
                  }
                ]
              },
              {
                content:
                  `<span class="process-step-title"><b>Designing the Feedback Loop.</b></span><p class="mt-2">I built the 'micro-tool' used by directors to review batches of hundreds of images. The interface allowed them to rapidly approve market-ready assets or reject failures with specific tags. This ensured that rejected data was just as valuable as approved data for training purposes.</p>`,
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption: "The qualification interface used to tag failures and train the model."
                  }
                ]
              },
              {
                content:
                  `<span class="process-step-title"><b>Stress-Testing the Workflow.</b></span><p class="mt-2">We discovered that reviewing a batch took approximately 4 minutes, which leadership flagged as a scalability risk. This 'red flag' was a critical insight. It proved that while the AI could generate the visuals, the metadata input and review process needed the heavy automation I eventually built in the Metadata Studio project.</p>`,
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
            ]},
            {
            type: "figma",
            src: "https://www.figma.com/proto/PG1SSc8aZlpS9atMCvKg3M/Genie---Product-Demo-Day?page-id=174%3A13910&node-id=2243-25245&p=f&viewport=226%2C732%2C0.04&t=s3IjMY4Gl6tH4KiA-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2243%3A25245&show-proto-sidebar=1",
            caption: "The batch review dashboard showing the selection and rejection feedback flow."
          },
            
    
          { type: "heading", title: "Outcome & Impact" },
          {
            type: "text",
            content:
              "Since launch in December 2024, the agent has generated over 12,000 variations. Through the review process, we successfully added 3,000 fully validated, market-ready assets to the system—all created without a graphic designer moving a single pixel."
          },
          {
            type: "impact-box",
            size: "large",
            metrics: [
               { 
                 value: "3,000 Assets", 
                 label: "Created with zero manual design work" 
               },
               { 
                 value: "99.5% approved", 
                 label: "Q1 2026 target for GenAI images meeting the design bar" 
               },
               { 
                 value: "100% of rejects reused", 
                 label: "Every rejected image becomes training data" 
               }
            ]
          }
        ]
      }
    },
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
        timeline: "Late 2022 – Early 2025",
        team: "Core Shopping",
        type: "MOBILE",
        services: [SERVICES.STRATEGY, SERVICES.UI_DESIGN, SERVICES.PROTOTYPING],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "callout-box",
            content:
              "Inspire was a company-level initiative inside the Amazon app designed to become a primary destination for recreational shopping and product discovery. The feature originated with the Community Shopping team. My team, on the Devices and Smart Home side, collaborated with them to customize and adapt Inspire specifically for our devices shopping experience."
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
            content: [
              "Inspire pulled from three creator types, each with different needs and different failure modes for Smart Home."
            ]
          },
          {
            type: "list",
            items: [
              {
                content: `<span class="process-step-title"><b>Influencers.</b></span><p class="mt-2">Creators participating in Amazon's Influencer Program (AIP) who uploaded shoppable photos and videos. I designed the tooling that let them attach ASINs to their content, and worked with Smart Home influencers directly to improve product association accuracy.</p>`
              },
              {
                content: `<span class="process-step-title"><b>Brands.</b></span><p class="mt-2">Brand-registered vendors and sellers with Brand Store pages. Their content tended to be more controlled, but ecosystem and compatibility context still needed to be right.</p>`
              },
              {
                content: `<span class="process-step-title"><b>Customers.</b></span><p class="mt-2">Everyday customers posting shoppable videos and photos through a Create workflow, as well as content surfaced from product reviews. Not my primary focus, but a meaningful share of feed volume and a source of catalog noise.</p>`
              }
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
                content:
                  `<span class="process-step-title"><b>Defining what relevant discovery meant for Smart Home.</b></span><p class="mt-2">I worked with product and data science to establish shared criteria for what a correct, trustworthy Smart Home recommendation looked like in a feed context: device type hierarchy, ecosystem tags, compatibility constraints, and the conditions under which a device could surface as a hero recommendation without additional context. These became the foundation for everything downstream.</p>`,
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption: "Placeholder: framework or taxonomy notes defining safe and accurate Smart Home discovery in a feed."
                  }
                ]
              },
              {
                content:
                  `<span class="process-step-title"><b>Shaping metadata inputs that supported ML ranking.</b></span><p class="mt-2">I partnered closely with data science to tune how device metadata informed ranking and content association, balancing engagement signals with catalog correctness. Ecosystem compatibility and device type classification became hard constraints. Content engagement scores remained signals, but secondary ones for high-risk device types. This work involved mapping which catalog attributes were reliable enough to trust as ranking inputs and which were too sparse or inconsistent to use.</p>`,
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
                  `<span class="process-step-title"><b>Making device content feel deliberate in the feed.</b></span><p class="mt-2">I drove feed-level CX decisions to ensure Smart Home content surfaced with clearer product identification, device type cues, and context that reduced misinterpretation. This included defining when and how compatibility signals should appear in the feed card, how product groupings should be handled when a creator attached multiple related ASINs, and what guardrails should reduce wrong-click behavior before it reached the PDP.</p>`,
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption: "Placeholder: feed scannability explorations showing product context, clarity, and interaction patterns."
                  }
                ]
              },
              {
                content:
                  `<span class="process-step-title"><b>Tightening the creator-to-product association workflow.</b></span><p class="mt-2">A significant source of catalog error was upstream: creators attaching the wrong ASINs at upload time. I designed the influencer tooling that let creators link products to their videos and photos, worked directly with Smart Home creators to understand where misattribution happened, and introduced guardrails and feedback loops so creators understood the downstream consequences of loose product associations at Amazon scale.</p>`,
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
          { type: "image-full", src: ASSETS.testImage, caption: "Creator Tools" },
          { type: "image-full", src: ASSETS.testImage, caption: "Main Feed Experience" },
          { type: "heading", title: "Outcome" },
          { type: "impact-box", metrics: [{ value: "~2%", label: "Lift in Total Units Sold" }, { value: "13.5M", label: "Devices Worldwide" }] },
          {
            type: "text",
            content: [
              "Inspire launched on December 8, 2022. Success was measured primarily through customer attention minutes, with secondary signals tied to units sold and customer satisfaction. At launch, Inspire delivered a ~2% lift in total units sold, representing roughly 13.5M devices worldwide, validating feed-based discovery as a meaningful commerce surface at Amazon scale."
            ]
          },
          { type: "heading", title: "Reflection" },
          {
            type: "callout-box",
            content:
              "In high-stakes categories like Smart Home, relevance is not only behavioral, it is structural. Compatibility, ecosystem rules, and customer intent must shape discovery as much as engagement does. You can't tune your way out of a bad taxonomy."
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
        {
      id: "amazon-core-ai-review-highlights",
      company: "Amazon Core Shopping",
      title: "AI-powered Customer Review Highlights",
      impactSummary: "When Amazon launched AI-generated review highlights, I explored how to make social proof a discovery driver across Smart Home, not just a detail page feature.",
      impactSummarySentence: "When Amazon launched AI-generated review highlights, I explored how to make social proof a discovery driver across Smart Home, not just a detail page feature.",
      designerNote: "Amazon launched AI-generated review highlights as a company-wide capability. Leadership asked me to figure out what that could mean specifically for Smart Home customers. This kind of work sits in an interesting space: you're not building from scratch, and you're not just implementing someone else's spec. You're identifying where a new capability creates real value for a specific customer and business context, then designing the applications that prove it. One shipped. Two moved to roadmap. All three came from asking where review data could reduce friction at the right moment in the journey.",
      thumbnail: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80",
      status: "LEGACY",
      type: "MOBILE",
      details: {
        heroImage: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80",
        role: "UX Lead, Smart Home Devices",
        timeline: "2023 – 2024",
        team: "Core Shopping",
        type: "MOBILE",
        services: [SERVICES.STRATEGY, SERVICES.UI_DESIGN, SERVICES.PROTOTYPING],
        blocks: [
          { type: "heading", title: "Overview", hasDivider: false },
          {
            type: "callout-box",
            content:
              "Amazon launched AI-generated review highlights as a platform-wide capability, surfacing a short AI-written paragraph on product detail pages that summarized common themes across customer reviews. Leadership asked me to explore how our Smart Home Devices team could leverage this feature for our specific customers and business goals. I designed three distinct applications across different surfaces and different moments in the customer journey."
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
            content: [
              "I designed three applications of the AI review highlights feature for Smart Home, each targeting a different surface and a different moment in the customer journey: the homepage, the video shopping feed, and individual product cards."
            ]
          },
          {
            type: "list",
            items: [
              {
                content:
                  `<span class="process-step-title"><b>Concept 1: Homepage widget — AI review highlights for top devices.</b></span><p class="mt-2">The idea was to bring AI-generated review sentiment upstream into the homepage, before a customer had even selected a product. Top-selling Smart Home devices surfaced alongside an LLM-generated headline and the most praised attributes across that product line, turning social proof into a discovery driver. Tapping a device card revealed the full customer review highlights with the most frequently mentioned attributes identified by the AI. The goal was to reduce the gap between browsing and confident enough to click through, using review data as the signal. This concept shipped.</p>`,
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption: "Deck row 1, frames 1-2 — Early homepage widget explorations showing Fire TV cards with AI-generated headline and attribute pills in light theme. Row 2, frame 3 — Closeup of the shipped homepage widget layout with product line attribute summary."
                  },
                  {
                    src: ASSETS.testImage,
                    caption: "Deck row 2, frames 1 and 4 — 'Concept design' and 'Customer-led recommendations' presentation slides showing the three core UX principles: top devices on homepage, AI attribute amplification, and summarized attribute list on tap."
                  }
                ]
              },
              {
                content:
                  `<span class="process-step-title"><b>Concept 2: Video shopping — review highlights inside the immersive feed.</b></span><p class="mt-2">Our Smart Home team had already built an experience surfacing brand-owned and expert videos for products relevant to a customer's interests, embedded within their shopping journey. I designed a method to merge top video reviews with our propensity models to generate video recommendations across category levels, then explored how AI-generated review highlights could be layered into that immersive surface. The concept included labeled, color-coded attribute summaries accessible directly from the video experience, making review signals available at the moment of highest engagement. This concept moved to roadmap and was in active consideration when I left the company.</p>`,
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption: "Deck row 1, frame 3 — Dark-mode video shopping feed mock showing the immersive experience context where review highlights would surface."
                  },
                  {
                    src: ASSETS.testImage,
                    caption: "Deck row 3, frame 3 and row 4, frame 1 — 'Video Shopping on Mobile Homepage' concept slides showing the immersive review highlights integration, with Customer Experience, Automate & Scale, and Research Scoping tracks identified."
                  }
                ]
              },
              {
                content:
                  `<span class="process-step-title"><b>Concept 3: ASIN cards — customer voice as the value message.</b></span><p class="mt-2">A third concept applied AI review highlights at the product card level, earlier in the funnel than the detail page. Each card surfaced an LLM-generated "better together" message, curated customer quotes that reinforced the product's benefit, and a CTA that took customers directly to the full ASIN page. The framing was that the voice of the customer generates the value message, removing the need for marketing copy to do that work. I explored both light and dark variants. This concept advanced to roadmap.</p>`,
                visuals: [
                  {
                    src: ASSETS.testImage,
                    caption: "Deck row 3, frames 5-6 — 'Customer benefit ASIN Cards' concept slide alongside the light-theme card mock, showing the LLM-generated benefit message, curated customer quotes, and CTA structure."
                  },
                  {
                    src: ASSETS.testImage,
                    caption: "Deck rows 4-6 — ASIN card iteration across light and dark themes. Row 4 frames 3-5 show the 'Customer Highlights ASIN Cards' concept slide and dark-theme variants. Rows 5-6 show the refined final card layout with tighter quote formatting and updated CTA styling."
                  }
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
              "The video shopping and ASIN card concepts both advanced to roadmap with stakeholder buy-in. Customer Review Highlights also expanded company-wide during this period. The video shopping integration had not yet shipped when I left the company, but remained in active consideration."
            ]
          },
          { type: "heading", title: "Reflection" },
          {
            type: "callout-box",
            content:
              "The most useful thing a designer can do with a new platform capability is ask who it actually helps and where. Not every feature belongs on every surface. The work here was less about visual design and more about identifying the right moments in the Smart Home customer journey where AI-summarized social proof could meaningfully reduce friction."
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
    {
      id: "alto-internal",
      company: "Alto Pharmacy",
      title: CASE_STUDIES_TITLES["alto-internal"],
      impactSummary: "Improved pharmacist collaboration workflows by centralizing context and streamlining internal communication.",
      impactSummarySentence: "",
      designerNote: "This project was about empowering healthcare professionals with intuitive tools to manage complex patient interactions, directly impacting care quality and efficiency.",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      status: "LEGACY",
      type: "INTERNAL",
      details: {
        heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        role: "Staff Product Designer",
        timeline: "2020–2021",
        team: "Internal Tools Team",
        type: "INTERNAL",
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
      title: CASE_STUDIES_TITLES["alto-assistant"],
      impactSummary: "Reduced inbound patient messaging by 38% with a smarter triage experience that improved care efficiency.",
      impactSummarySentence: "",
      designerNote: "Designing for patient communication in healthcare required a delicate balance of clarity, empathy, and operational efficiency to truly enhance the patient experience.",
      thumbnail: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
      status: "LEGACY",
      type: "MOBILE",
      details: {
        heroImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
        role: "Staff Product Designer",
        timeline: "2020–2021",
        team: "Internal Tools Team",
        type: "MOBILE",
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
                  `<span class="process-step-title"><b>Exploration 1: Multi-select to capture intent.</b></span><p class="mt-2">Patients frequently raised multiple concerns in a single message. Multi-select let patients express intent naturally while giving the system richer upstream context.</p>`,
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
                  `<span class="process-step-title"><b>Exploration 2: Setting expectations upfront.</b></span><p class="mt-2">We explored clarifying pharmacist involvement earlier in the flow. This reduced ambiguity but risked feeling blunt and over-filtering valid medical questions.</p>`,
                visuals: [
                  {
                    src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cbb33b13-4fa7-4ffd-9441-39a3b78e78ea/Untitled.png",
                    caption: "Expectation setting improved clarity but introduced risk around false negatives and perceived access barriers."
                  }
                ]
              },
              {
                content:
                  `<span class="process-step-title"><b>Exploration 3: Minimal intervention.</b></span><p class="mt-2">A low-friction approach allowed free-form questions with little guidance. It was fast for patients but pushed complexity downstream and increased operational cost.</p>`,
                visuals: [
                  {
                    src: "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8614fd55-bb94-4e9b-befa-ed196009928f/Untitled.png",
                    caption: "Minimal structure reduced friction but increased downstream triage and escalation effort."
                  }
                ]
              },
              {
                content:
                  `<span class="process-step-title"><b>Pre-exploration validation: two variants.</b></span><p class="mt-2">We pressure-tested how much structure we could introduce while preserving trust.</p>`,
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
                  `<span class="process-step-title"><b>Prototypes explored three paths.</b></span><p class="mt-2">These options explored different ways to balance clarity, flexibility, and operational cost.</p>`,
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
                  `<span class="process-step-title"><b>Prototype library.</b></span><p class="mt-2"><a href='https://www.figma.com/proto/EuDrnvOQOZx8Wrc4beLGTB/AA-Direct-to-Pharmacist?page-id=10888%3A142839&node-id=10894%3A435574&viewport=614%2C-1252%2C0.19&scaling=scale-down&starting-point-node-id=10894%3A435574&show-proto-sidebar=1' target='_blank' rel='noopener noreferrer'>View prototypes in detail</a>.</p>`
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
              "<b>30000+ weekly visits</b> by <b>11000+ users</b>, preventing tens of thousands of unstructured inbound messages that previously required manual handling."
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
      id: "patreon-creator-tools",
      company: "Patreon",
      title: CASE_STUDIES_TITLES["patreon-creator-tools"],
      impactSummary: "Empowered creators with better benefit delivery tools that improved scale, clarity, and consistency.",
      impactSummarySentence: "",
      designerNote: "This work focused on enhancing the creator experience by providing intuitive tools that streamline the delivery of member benefits, fostering a more robust creator economy.",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      status: "LAUNCHED",
      type: "INTERNAL",
      details: {
        heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        role: "Sr. Product Designer",
        timeline: "October 2020",
        team: "Creator Team",
        type: "INTERNAL",
        services: [SERVICES.STRATEGY, SERVICES.UI_DESIGN, SERVICES.PROTOTYPING],
        blocks: [{ type: "text", content: "Case study coming soon." }]
      }
    },
    {
      id: "patreon-pledge-streak-patent",
      company: "Patreon",
      title: CASE_STUDIES_TITLES["patreon-pledge-streak-patent"],
      impactSummary: "Case study coming soon.",
      impactSummarySentence: "",
      designerNote: "Case study coming soon.",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      status: "IN_BUILD",
      type: "INTERNAL",
      details: {
        heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        role: "Sr. Product Designer",
        timeline: "2021",
        team: "Creator Team",
        type: PRODUCT_TYPES.INTERNAL,
        services: [SERVICES.STRATEGY, SERVICES.PRODUCT_DESIGN],
        blocks: [{ type: "text", content: "Case study coming soon." }]
      }
    },
    {
      id: "patreon-studio2.0",
      company: "Patreon",
      title: CASE_STUDIES_TITLES["patreon-studio2.0"],
      impactSummary: "Modernized Patreon’s design system to streamline creator workflows and improve product consistency.",
      impactSummarySentence: "",
      designerNote: "Leading the evolution of a design system involved not just visual and component work, but deeply understanding developer needs and advocating for design consistency across the platform.",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      status: "DEPRECATED",
      type: "MOBILE",
      services: [SERVICES.SYSTEMS_DESIGN, SERVICES.UI_DESIGN, SERVICES.PROTOTYPING],
      blocks: [{ type: "text", content: "Case study for Patreon creator hub." }]
    },
    {
      id: "portfolio-systems",
      company: "Bespoke Portfolio",
      title: CASE_STUDIES_TITLES["portfolio-systems"],
      impactSummary: "A live demonstration of full-stack design thinking and iterative product development.",
      impactSummarySentence: "A bespoke portfolio built to demonstrate staff-level systems thinking and engineering precision.",
      designerNote: "This portfolio itself is a project in iterative refinement. Every interaction—from the hover stability of the mega-menu to the lazy-loading of interactive prototypes—was designed and built to respect the user's time while proving technical craft.",
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
          { type: "heading", title: "Engineering the 'Invisible Bridge'" },
          {
            type: "text",
            content: "One common frustration with mega-menus is their sensitivity to mouse movement. I implemented a 'buffer bridge' container to ensure hover stability when transitioning from the navigation trigger to the dropdown, ensuring a fluid, frustration-free experience."
          },
          { type: "heading", title: "Responsive Performance" },
          {
            type: "text",
            content: "To showcase complex interactive prototypes without sacrificing load times, I engineered a lazy-loading Figma integration. Prototypes are responsive and 'scale-to-fit' their containers, providing an interactive preview that can be expanded into a dedicated workspace with a single click."
          }
        ]
      }
    },
  ]
};

export const WORK_GROUPS = [
  {
    company: "Amazon Devices",
    logo: "Amazon",
    roleLine: "Sr. UX Designer · Sep 2022 – Jan 2026",
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
    roleLine: "Staff Product Designer · 2021–2022",
    projectIds: ["alto-internal", "alto-assistant"]
  },
  {
    company: "Patreon",
    logo: "Patreon",
    roleLine: "Sr. Product Designer · Creator Tools · 2020–2021",
    projectIds: ["patreon-creator-tools", "patreon-pledge-streak-patent", "patreon-studio2.0"]
  },
  {
    company: "Prox",
    roleLine: "Founding Designer · 2019–2020",
    projectIds: ["prox-1"]
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