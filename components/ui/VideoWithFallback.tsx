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

function getYouTubeId(url: string): string | null {
  if (url.includes("youtu.be/")) {
    return url.split("youtu.be/")[1].split("?")[0] || null;
  }
  try {
    const u = new URL(url);
    return u.searchParams.get("v");
  } catch {
    return null;
  }
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
      const id = getYouTubeId(url);
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

function getThumbnailUrl(
  url: string,
  platform?: "youtube" | "tiktok" | "facebook" | "local",
): string | null {
  if (platform === "youtube") {
    const id = getYouTubeId(url);
    return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
  }
  if (platform === "local" || (!platform && url.match(/\.(mp4|webm|mov|mkv)(\?.*)?$/i))) {
    return url;
  }
  return null;
}

export function VideoWithFallback({
  url,
  alt,
  platform,
  className,
}: VideoWithFallbackProps) {
  const [status, setStatus] = useState<"idle" | "playing">("idle");
  const embedUrl = getEmbedUrl(url, platform);
  const thumbnailUrl = getThumbnailUrl(url, platform);
  const isLocalVideo =
    platform === "local" ||
    (!platform && !!embedUrl?.match(/\.(mp4|webm|mov|mkv)(\?.*)?$/i));

  if (status === "playing" && embedUrl) {
    if (isLocalVideo) {
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

  // Local video: render the actual <video> element paused at first frame
  if (isLocalVideo && thumbnailUrl) {
    return (
      <button
        type="button"
        className={`${styles.placeholder} ${className ?? ""}`}
        onClick={() => setStatus("playing")}
        aria-label={`Play video: ${alt}`}
      >
        <video
          src={thumbnailUrl}
          preload="metadata"
          muted
          playsInline
          className={styles.thumbnailVideo}
          onLoadedMetadata={(e) => {
            const v = e.currentTarget;
            try {
              v.currentTime = 0.1;
            } catch {
              // some browsers may not allow seeking
            }
          }}
        />
        <div className={styles.playIcon}>
          <Play size={36} fill="currentColor" />
        </div>
      </button>
    );
  }

  // YouTube: use the platform thumbnail as a cover image
  if (platform === "youtube" && thumbnailUrl) {
    return (
      <button
        type="button"
        className={`${styles.placeholder} ${className ?? ""}`}
        onClick={() => setStatus("playing")}
        aria-label={`Play video: ${alt}`}
        style={{ backgroundImage: `url(${thumbnailUrl})` }}
      >
        <div className={styles.playIcon}>
          <Play size={36} fill="currentColor" />
        </div>
      </button>
    );
  }

  // Fallback: gradient placeholder (TikTok / Facebook / unknown)
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
