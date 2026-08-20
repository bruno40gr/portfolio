/**
 * Build-time pre-rendering script.
 *
 * Renders every route to static HTML using react-dom/server so that
 * non-JS crawlers (Google, Bing, ChatGPT, Claude, etc.) receive the
 * actual page content in the raw HTML response — not just an empty
 * <div id="root"> shell.
 *
 * Run AFTER `vite build` (see package.json "build" script).
 */

import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./src/App.jsx";
import { PORTFOLIO_DATA } from "./src/data/portfolioData.js";

const DIST_DIR = path.join(process.cwd(), "dist");
const BASE_URL = "https://www.brunowong.me";
const TODAY = new Date().toISOString().slice(0, 10);

// Discover the actual built asset filenames from dist/assets/
// (Vite hashes these, e.g. index-BESEcVnC.js, index-Dma9ixg-.css)
function getBuiltAssets() {
  const assetsDir = path.join(DIST_DIR, "assets");
  let jsFile = "";
  let cssFile = "";
  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    jsFile = files.find((f) => f.endsWith(".js")) || "";
    cssFile = files.find((f) => f.endsWith(".css")) || "";
  }
  return { jsFile, cssFile };
}

// All static routes
const STATIC_ROUTES = ["/", "/about", "/resume", "/changelog", "/styles"];

// All project routes (from portfolio data)
const PROJECT_ROUTES = PORTFOLIO_DATA.projects
  .filter((p) => p.status !== "HIDDEN")
  .map((p) => `/project/${p.id}`);

const ALL_ROUTES = [...STATIC_ROUTES, ...PROJECT_ROUTES];

const ROUTE_METADATA = {
  "/": { changefreq: "weekly", priority: "1.0" },
  "/about": { changefreq: "monthly", priority: "0.8" },
  "/resume": { changefreq: "monthly", priority: "0.8" },
  "/changelog": { changefreq: "weekly", priority: "0.6" },
  "/styles": { changefreq: "monthly", priority: "0.4" },
};

function writeSitemap(routes) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const meta = ROUTE_METADATA[route] || { changefreq: "monthly", priority: "0.8" };
    return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), xml, "utf8");
  console.log("  ✓ sitemap.xml generated from live routes");
}

function renderRoute(route) {
  const context = {};
  const helmetContext = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={route} context={context}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  // Discover the real built asset filenames (hashed by Vite)
  const { jsFile, cssFile } = getBuiltAssets();

  // Build the full HTML document
  const fullHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${helmet.script.toString()}
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}" />` : ""}
    <link rel="icon" href="https://res.cloudinary.com/diy08lj9x/image/upload/v1772603676/favicon-bruno_q7crdh.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root">${html}</div>
    ${jsFile ? `<script type="module" src="/assets/${jsFile}"></script>` : ""}
  </body>
</html>`;

  return fullHtml;
}

function writeRoute(route, html) {
  // Map route to file path
  let filePath;
  if (route === "/") {
    filePath = path.join(DIST_DIR, "index.html");
  } else {
    // e.g. /about -> dist/about/index.html, /project/amazon-inspire-tab -> dist/project/amazon-inspire-tab/index.html
    filePath = path.join(DIST_DIR, route.slice(1), "index.html");
  }

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html, "utf8");
  console.log(`  ✓ ${route} -> ${path.relative(DIST_DIR, filePath)}`);
}

console.log(`Pre-rendering ${ALL_ROUTES.length} routes...\n`);

ALL_ROUTES.forEach((route) => {
  try {
    const html = renderRoute(route);
    writeRoute(route, html);
  } catch (err) {
    console.error(`  ✗ Failed to render ${route}:`, err.message);
  }
});

writeSitemap(ALL_ROUTES);

console.log("\nPre-rendering complete.");