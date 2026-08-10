"use client";
import { useEffect, useRef } from "react";

/**
 * Simple hook to load an audio file and play it on demand.
 *
 * @param {string} url     – path to your .mp3 (e.g. '/sounds/pop.mp3')
 * @param {Object} options – { volume: 0.0–1.0 }
 */
export default function useSound(url, options = {}) {
  const { volume = 1 } = options;
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(url);
    audio.volume = volume;
    audioRef.current = audio;
  }, [url, volume]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // swallow any play() promise errors (autoplay policies)
      });
    }
  };

  return { play };
}
