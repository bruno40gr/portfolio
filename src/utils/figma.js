// src/utils/figma.js

export function normalizeFigmaUrl(raw) {
  if (!raw) return "";

  // Normalize inner url if this is already an embed link
  if (raw.includes("figma.com/embed")) {
    try {
      const embed = new URL(raw);
      const inner = embed.searchParams.get("url");
      if (!inner) return raw;

      // inner might already be encoded or not, try both safely
      let decodedInner = inner;
      try {
        decodedInner = decodeURIComponent(inner);
      } catch {
        // ignore
      }

      embed.searchParams.set("url", normalizeFigmaUrl(decodedInner));
      return embed.toString();
    } catch {
      return raw;
    }
  }

  let u;
  try {
    u = new URL(raw);
  } catch {
    return raw;
  }

  if (!u.hostname.includes("figma.com")) return raw;

  // We are no longer stripping the 't' token or forcing 'starting-point-node-id'.
  // Let Figma's native player handle the raw routing.

  return u.toString();
}

export function toFigmaEmbedUrl(raw, scaling = null) {
  if (!raw) return "";

  const normalized = normalizeFigmaUrl(raw);

  // If already embed URL, just apply scaling
  if (normalized.includes("figma.com/embed")) {
    const embedUrl = new URL(normalized);
    if (scaling) embedUrl.searchParams.set("scaling", scaling);
    return embedUrl.toString();
  }

  // Wrap normalized URL into an embed
  const embedUrl = new URL("https://www.figma.com/embed");
  embedUrl.searchParams.set("embed_host", "share");
  embedUrl.searchParams.set("url", normalized);
  if (scaling) embedUrl.searchParams.set("scaling", scaling);

  return embedUrl.toString();
}