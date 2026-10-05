"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import styles from "./VideoWithFallback.module.scss";

interface VideoWithFallbackProps {
  url: string;
  alt: string;
  platform?: "youtube" | "tiktok" | "facebook" | "local";
  className?: string;
}

function getEmbedUrl(
  url: string,
  platform?: "youtube" | "tiktok" | "facebook" | "local",
): string | null {
  if (!platform) {
    if (url.match(/\.(mp4|webm|mov|mkv)(\?.*)?$/i)) return url;
    return null;
  }

  switch (platform) {
    case "local":
      return url;
    case "youtube": {
      let id = "";
      if (url.includes("youtu.be/")) {
        id = url.split("youtu.be/")[1].split("?")[0];
      } else {
        id = new URL(url).searchParams.get("v") ?? "";
      }
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    case "tiktok": {
      const id = url.split("/video/")[1]?.split("?")[0];
      return id ? `https://www.tiktok.com/embed/v2/${id}` : null;
    }
    case "facebook":
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false`;
    default:
      return null;
  }
}

export function VideoWithFallback({
  url,
  alt,
  platform,
  className,
}: VideoWithFallbackProps) {
  const [status, setStatus] = useState<"idle" | "playing">("idle");
  const embedUrl = getEmbedUrl(url, platform);

  if (status === "playing" && embedUrl) {
    if (platform === "local" || (!platform && embedUrl.match(/\.(mp4|webm|mov|mkv)(\?.*)?$/i))) {
      return (
        <div className={`${styles.videoFrame} ${className ?? ""}`}>
          <video
            src={embedUrl}
            title={alt}
            controls
            autoPlay
            playsInline
            preload="metadata"
          />
        </div>
      );
    }
    return (
      <div className={`${styles.videoFrame} ${className ?? ""}`}>
        <iframe
          src={embedUrl}
          title={alt}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`${styles.placeholder} ${className ?? ""}`}
      onClick={() => setStatus("playing")}
      aria-label={`Play video: ${alt}`}
    >
      <div className={styles.playIcon}>
        <Play size={36} fill="currentColor" />
      </div>
    </button>
  );
}

export default VideoWithFallback;
