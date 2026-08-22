import React from "react";
import { Play } from "lucide-react";
import MediaPreviewFrame from "./MediaPreviewFrame";

const VideoThumbnail = ({ src, caption, onClick, coverImage }) => {
  const getThumbnailUrl = () => {
    // If a custom coverImage is provided, use it directly.
    if (coverImage) {
      return coverImage;
    }

    if (src.includes("youtube.com") || src.includes("youtu.be")) {
      const videoId = src.split("v=")[1]?.split("&")[0] || src.split("/").pop();
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    if (src.includes("loom.com")) {
      const loomId = src.split("/").pop().split("?")[0];
      return `https://cdn.loom.com/sessions/thumbnails/${loomId}-with-play.gif`;
    }
    if (src.includes("cloudinary.com")) {
      let publicId;
      if (src.includes("public_id=")) {
        publicId = src.split("public_id=")[1];
      } else {
        publicId = src.split("/").pop().split(".")[0];
      }
      return `https://res.cloudinary.com/diy08lj9x/video/upload/so_auto,q_auto,w_600/${publicId}.jpg`;
    }
    return "";
  };

  const getEmbedUrl = () => {
    if (src.includes("youtube.com/embed/") || src.includes("youtu.be")) {
      return src;
    }
    if (src.includes("youtube.com/watch")) {
      const videoId = src.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (src.includes("loom.com/share/")) {
      const loomId = src.split("/").pop().split("?")[0];
      return `https://www.loom.com/embed/${loomId}`;
    }
    return src;
  };

  const thumbnailUrl = getThumbnailUrl();
  const isLoom = src.includes("loom.com");

  return (
    <div className="text-left w-full">
      <MediaPreviewFrame
        onClick={onClick}
        aspectRatio="16/9"
        bgClassName="bg-neutral-100"
        ariaLabel={caption || "Open video"}
        panelClassName="border border-neutral-200 shadow-sm p-2"
      >
        {(defaultHoverScale) =>
          thumbnailUrl ? (
            <>
              {isLoom ? (
                <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={thumbnailUrl}
                    alt={caption || "Video thumbnail"}
                    className={`w-full h-full object-contain rounded-lg ${defaultHoverScale} transition-transform duration-700`}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              ) : (
                <img
                  src={thumbnailUrl}
                  alt={caption || "Video thumbnail"}
                  className={`w-full h-full object-contain rounded-lg ${defaultHoverScale} transition-transform duration-700`}
                />
              )}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                  <Play size={32} className="text-white fill-white" />
                </div>
              </div>
            </>
          ) : (
            <div className="w-full h-full rounded-lg bg-white p-4 text-sm text-neutral-600 border border-neutral-200 flex items-center justify-center">
              <p>Unsupported video URL. Please use a YouTube, Loom, or Cloudinary link.</p>
            </div>
          )
        }
      </MediaPreviewFrame>
    </div>
  );
};

export { VideoThumbnail as default };
export function toLoomEmbedUrl(src) {
  if (src.includes("loom.com/share/")) {
    const loomId = src.split("/").pop().split("?")[0];
    return `https://www.loom.com/embed/${loomId}`;
  }
  return src;
}