import React from 'react';

function toFigmaEmbedUrl(url, scaling) {
  // Accepts either a normal Figma URL or an existing embed URL
  if (url.includes("figma.com/embed")) {
    const embedUrl = new URL(url);
    if (scaling) {
      embedUrl.searchParams.set('scaling', scaling);
    }
    return embedUrl.toString();
  }

  // If they pasted a share link, wrap it
  const baseUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
  return scaling ? `${baseUrl}&scaling=${scaling}` : baseUrl;
}

export function FigmaEmbed({
  src,
  title = "Figma prototype",
  scaling = null,
}) {
  const embedSrc = toFigmaEmbedUrl(src, scaling);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="relative w-full aspect-video">
        <iframe
          title={title}
          src={embedSrc}
          className="absolute inset-0 h-full w-full"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
