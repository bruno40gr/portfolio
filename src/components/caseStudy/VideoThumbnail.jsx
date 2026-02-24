import React from "react";
import { Play } from "lucide-react";

const VideoThumbnail = ({ src, caption, onClick }) => {
  const getThumbnailUrl = () => {
    if (src.includes("youtube.com") || src.includes("youtu.be")) {
      const videoId = src.split("v=")[1]?.split("&")[0] || src.split("/").pop();
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    if (src.includes("cloudinary.com")) {
      const publicId = src.split("public_id=")[1];
      return `https://res.cloudinary.com/diy08lj9x/video/upload/so_auto,q_auto,w_600/${publicId}.jpg`;
    }
    return "";
  };

  const thumbnailUrl = getThumbnailUrl();

  return (
    <div className="text-left w-full">
      <button 
        className="w-full aspect-video bg-neutral-100 border border-neutral-200 rounded-xl overflow-hidden shadow-sm p-2 relative group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--neon-green)]"
        onClick={onClick}
      >
        {thumbnailUrl ? (
          <>
            <img src={thumbnailUrl} alt={caption || "Video thumbnail"} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <Play size={32} className="text-white fill-white" />
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full rounded-lg bg-white p-4 text-sm text-neutral-600 border border-neutral-200 flex items-center justify-center">
            <p>Unsupported video URL. Please use a YouTube or Cloudinary link.</p>
          </div>
        )}
      </button>
    </div>
  );
};

export default VideoThumbnail;