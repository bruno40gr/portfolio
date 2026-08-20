import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_NAME = "Bruno Wong";
const BASE_URL = "https://www.brunowong.me";
const DEFAULT_OG_IMAGE = "https://res.cloudinary.com/diy08lj9x/image/upload/v1772648447/bruno-logo-whitewong_q7cxxn.png";

/**
 * SEOHead — injects per-route <title>, <meta>, OG, Twitter, and canonical tags.
 *
 * Props:
 *   title       — page title (appended with " | Bruno Wong" automatically)
 *   description — meta description (160 chars ideal)
 *   path        — canonical path, e.g. "/about" or "/project/amazon-asset-system"
 *   ogImage     — override the default social share image
 *   ogType      — "website" (default) or "article"
 *   jsonLd      — optional JSON-LD object for structured data
 */
export default function SEOHead({
  title,
  description,
  path = "/",
  ogImage,
  ogType = "website",
  jsonLd,
  robots = "index,follow",
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Portfolio`;
  const url = `${BASE_URL}${path}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}