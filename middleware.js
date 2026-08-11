/**
 * Vercel Edge Middleware — injects route-specific <title> and <meta> tags
 * into the static index.html before it reaches the browser.
 *
 * This ensures non-JS crawlers (OpenAI, Bing, social media bots) see
 * the correct per-page metadata instead of the generic SPA shell.
 */

const SITE_NAME = "Bruno Wong";
const BASE_URL = "https://www.brunowong.me";
const DEFAULT_OG_IMAGE = "https://res.cloudinary.com/diy08lj9x/image/upload/v1772648447/bruno-logo-whitewong_q7cxxn.png";

const DEFAULT_DESCRIPTION = "Bruno Wong is a Staff Product Designer specializing in complex systems, AI tools, and enterprise platforms. Previous experience at Amazon, Patreon, and Alto Pharmacy.";

// Route-specific metadata map
const ROUTE_META = {
  "/": {
    title: `Portfolio | ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
  },
  "/about": {
    title: `About | ${SITE_NAME}`,
    description: "14 years in product design. Bruno Wong is a Staff Product Designer who works best at the system level, on the behind-the-scenes stuff where workflows are messy and the UX debt is real.",
  },
  "/resume": {
    title: `Resume | ${SITE_NAME}`,
    description: "Resume of Bruno Wong Marchena, Staff Product Designer with 14 years of experience at Amazon, Patreon, Alto Pharmacy, and more.",
  },
  "/changelog": {
    title: `Changelog | ${SITE_NAME}`,
    description: "Development log and iterative refinement history for Bruno Wong's portfolio site. Built with React, Tailwind, and deployed on Vercel.",
  },
};

// Known project slugs for dynamic project pages
const PROJECT_SLUGS = [
  "amazon-asset-system",
  "amazon-image-builder",
  "amazon-asset-manager",
  "amazon-metadata-studio",
  "amazon-ai-compositor",
  "amazon-inspire-tab",
  "amazon-ai-review-highlights",
  "alto-internal-tools",
  "alto-assistant",
  "patreon-creator-tools",
  "patreon-pledge-streak",
  "patreon-studio-2",
  "prox",
];

// Project-specific metadata
const PROJECT_META = {
  "amazon-asset-system": {
    title: `Amazon Asset System | ${SITE_NAME}`,
    description: "Led design of an AI-powered campaign production system that unified asset generation, localization, and publishing across 23 global markets for Amazon Devices.",
  },
  "amazon-image-builder": {
    title: `Amazon Image Builder | ${SITE_NAME}`,
    description: "Designed an AI-powered image generation tool that automated campaign asset creation for Amazon Devices global marketing.",
  },
  "amazon-asset-manager": {
    title: `Amazon Asset Manager | ${SITE_NAME}`,
    description: "Directed design of a horizontal asset management platform serving five product lines simultaneously at Amazon.",
  },
  "amazon-metadata-studio": {
    title: `Amazon Metadata Studio | ${SITE_NAME}`,
    description: "Designed an internal asset intelligence tool that structured device placement rules as model inputs for AI-powered generation.",
  },
  "amazon-ai-compositor": {
    title: `Amazon AI Compositor | ${SITE_NAME}`,
    description: "Case study on AI-powered image composition and campaign generation at Amazon Devices.",
  },
  "amazon-inspire-tab": {
    title: `Amazon Inspire Tab | ${SITE_NAME}`,
    description: "Contributed to the global launch of Inspire feed and designed an exclusive Smart Home version for Amazon Devices.",
  },
  "amazon-ai-review-highlights": {
    title: `Amazon AI Review Highlights | ${SITE_NAME}`,
    description: "Designed AI-powered review highlights surface for Amazon product pages.",
  },
  "alto-internal-tools": {
    title: `Alto Internal Tools | ${SITE_NAME}`,
    description: "Built internal Care Specialist tooling that reduced communications per shipment by 18% at Alto Pharmacy.",
  },
  "alto-assistant": {
    title: `Alto Assistant | ${SITE_NAME}`,
    description: "Overhauled the patient medical questions flow in the Alto Assistant app, reducing inbound message volume by 38%.",
  },
  "patreon-creator-tools": {
    title: `Patreon Creator Tools | ${SITE_NAME}`,
    description: "Drove improvements to the creator benefit delivery system that moved satisfaction from 49% to 73% in three months.",
  },
  "patreon-pledge-streak": {
    title: `Patreon Pledge Streak | ${SITE_NAME}`,
    description: "Co-invented the Pledge Streak Filter (USPTO Patent), a UI pattern that surfaces patron loyalty using ML-weighted billing history.",
  },
  "patreon-studio-2": {
    title: `Patreon Studio 2 | ${SITE_NAME}`,
    description: "Led a three-week sprint defining the Patreon 2.0 benefit delivery architecture, securing executive buy-in.",
  },
  "prox": {
    title: `Prox | ${SITE_NAME}`,
    description: "Designed the product from zero to launch as Founding Designer, achieving a 51% rebooking rate and helping secure an $800,000 seed round.",
  },
};

function getMetaForPath(pathname) {
  // Normalize: remove trailing slash (except root)
  const cleanPath = pathname.endsWith("/") && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname;

  // Check static routes
  if (ROUTE_META[cleanPath]) {
    return ROUTE_META[cleanPath];
  }

  // Check project routes
  const projectMatch = cleanPath.match(/^\/project\/(.+)$/);
  if (projectMatch) {
    const slug = projectMatch[1];
    if (PROJECT_META[slug]) {
      return PROJECT_META[slug];
    }
    // Generic project fallback
    return {
      title: `Project | ${SITE_NAME}`,
      description: DEFAULT_DESCRIPTION,
    };
  }

  // Fallback for unknown routes
  return {
    title: `${SITE_NAME} | Portfolio`,
    description: DEFAULT_DESCRIPTION,
  };
}

function injectMetaTags(html, meta, pathname) {
  const cleanPath = pathname.endsWith("/") && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname;
  const url = `${BASE_URL}${cleanPath}`;

  // Replace <title>
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${meta.title}</title>`
  );

  // Replace or add meta description
  if (html.includes('<meta name="description"')) {
    html = html.replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${meta.description.replace(/"/g, '"')}">`
    );
  } else {
    html = html.replace(
      "</head>",
      `<meta name="description" content="${meta.description.replace(/"/g, '"')}">\n</head>`
    );
  }

  // Replace og:title
  if (html.includes('<meta property="og:title"')) {
    html = html.replace(
      /<meta property="og:title"[^>]*>/,
      `<meta property="og:title" content="${meta.title.replace(/"/g, '"')}">`
    );
  }

  // Replace og:description
  if (html.includes('<meta property="og:description"')) {
    html = html.replace(
      /<meta property="og:description"[^>]*>/,
      `<meta property="og:description" content="${meta.description.replace(/"/g, '"')}">`
    );
  }

  // Replace og:url
  if (html.includes('<meta property="og:url"')) {
    html = html.replace(
      /<meta property="og:url"[^>]*>/,
      `<meta property="og:url" content="${url}">`
    );
  } else {
    html = html.replace(
      "</head>",
      `<meta property="og:url" content="${url}">\n</head>`
    );
  }

  // Ensure og:image exists
  if (!html.includes('<meta property="og:image"')) {
    html = html.replace(
      "</head>",
      `<meta property="og:image" content="${DEFAULT_OG_IMAGE}">\n<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n</head>`
    );
  }

  // Ensure twitter:card exists
  if (!html.includes('<meta name="twitter:card"')) {
    html = html.replace(
      "</head>",
      `<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:title" content="${meta.title.replace(/"/g, '"')}">\n<meta name="twitter:description" content="${meta.description.replace(/"/g, '"')}">\n<meta name="twitter:image" content="${DEFAULT_OG_IMAGE}">\n</head>`
    );
  }

  // Add canonical link if missing
  if (!html.includes('<link rel="canonical"')) {
    html = html.replace(
      "</head>",
      `<link rel="canonical" href="${url}">\n</head>`
    );
  }

  return html;
}

export default function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Only process HTML page requests (not assets, API calls, etc.)
  const acceptHeader = request.headers.get("accept") || "";
  if (!acceptHeader.includes("text/html")) {
    return;
  }

  const meta = getMetaForPath(pathname);

  // Fetch the original response
  return fetch(request).then((response) => {
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) {
      return response;
    }

    return response.text().then((html) => {
      const modifiedHtml = injectMetaTags(html, meta, pathname);
      return new Response(modifiedHtml, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      });
    });
  });
}

export const config = {
  matcher: [
    // Match all paths except static assets, API routes, and _next
    "/((?!api|_next|_vercel|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\..*).*)",
  ],
};