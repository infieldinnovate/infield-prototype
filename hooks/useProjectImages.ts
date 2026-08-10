// hooks/useProjectImages.ts

"use client";

import { useEffect, useState } from "react";
import type { ImageData, ImagesSource } from "@/types/imageTypes";

function encodePathForFetch(folder: string) {
  return folder.split("/").map(encodeURIComponent).join("/");
}

export function useProjectImages({
  imagesSource,
  images,
}: {
  imagesSource?: ImagesSource;
  images?: string[];
}) {
  const [data, setData] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        // Static image URLs
        if (images?.length && !imagesSource) {
          if (!cancelled) {
            setData(
              images.map((src) => ({
                src,
                placeholder: undefined,
              })),
            );
          }
          return;
        }

        // Local folder
        if (imagesSource?.type === "local") {
          const encoded = encodePathForFetch(imagesSource.folder);

          const res = await fetch(`/api/images/public/${encoded}`);
          if (!res.ok) throw new Error(`Failed to load images`);

          const json = await res.json();
          const imgs = Array.isArray(json) ? json : (json.data ?? []);

          if (!cancelled) setData(imgs);
          return;
        }

        // Supabase
        if (imagesSource?.type === "supabase") {
          const bucket = encodeURIComponent(imagesSource.bucket);
          const folder = imagesSource.folder
            ? `/${encodePathForFetch(imagesSource.folder)}`
            : "";

          const res = await fetch(`/api/images/supabase/${bucket}${folder}`);

          if (!res.ok) throw new Error(`Failed to load images`);

          const json = await res.json();
          const imgs = Array.isArray(json) ? json : (json.data ?? []);

          if (!cancelled) setData(imgs);
          return;
        }

        if (!cancelled) setData([]);
      } catch (e: any) {
        if (!cancelled) setError(e.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [imagesSource, images]);

  return { images: data, loading, error };
}
