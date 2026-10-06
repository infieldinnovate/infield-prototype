"use client";

import styles from "./VideoWithFallback.module.scss";

interface VideoWithFallbackProps {
  url: string;
  alt: string;
  platform?: "youtube" | "tiktok" | "facebook";
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
  platform?: "youtube" | "tiktok" | "facebook",
): string | null {
  if (!platform) return null;

  switch (platform) {
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

export function VideoWithFallback({
  url,
  alt,
  platform,
  className,
}: VideoWithFallbackProps) {
  const embedUrl = getEmbedUrl(url, platform);

  if (embedUrl) {
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
    <div className={`${styles.videoFrame} ${className ?? ""}`}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          color: "white",
          fontSize: "0.875rem",
          fontWeight: 600,
          textDecoration: "underline",
        }}
      >
        Watch on{" "}
        {platform
          ? platform.charAt(0).toUpperCase() + platform.slice(1)
          : "external site"}
      </a>
    </div>
  );
}

export default VideoWithFallback;
