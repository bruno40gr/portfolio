import React from "react";

const VideoThumbnail = ({ src, caption }) => {
  const isSafeEmbedUrl = (url) => {
    if (!url || typeof url !== "string") return false;
    if (!url.startsWith("http")) return false;

    const allowedHosts = [
      "www.youtube.com",
      "youtube.com",
      "www.youtube-nocookie.com",
      "player.cloudinary.com"
    ];

    try {
      const u = new URL(url);
      return allowedHosts.includes(u.hostname);
    } catch {
      return false;
    }
  };

  const ok = isSafeEmbedUrl(src);

  return (
    <div className="text-left w-full">
      <div className="bg-neutral-100 border border-neutral-200 rounded-xl overflow-hidden shadow-sm p-2 w-full">
        {ok ? (
          <div className="w-full aspect-video rounded-lg overflow-hidden bg-black">
            <iframe
              src={src}
              title={caption || "Embedded video"}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="w-full rounded-lg bg-white p-4 text-sm text-neutral-600 border border-neutral-200">
            Embed blocked (untrusted URL). Use a YouTube or Cloudinary embed link.
          </div>
        )}
      </div>
      {caption && <p className="type-caption text-left text-neutral-500 text-[16px] font-normal leading-relaxed mt-2 md:mt-3 font-sans">{caption}</p>}
    </div>
  );
};

export default VideoThumbnail;