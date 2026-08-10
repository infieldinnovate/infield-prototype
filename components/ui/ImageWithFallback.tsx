"use client";

import { useState, useEffect } from "react";
import Image, { type ImageProps } from "next/image";
import clsx from "clsx";
import styles from "./ImageWithFallback.module.scss";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  loading?: "eager" | "lazy";
} & Omit<
  ImageProps,
  | "src"
  | "alt"
  | "fill"
  | "width"
  | "height"
  | "priority"
  | "className"
  | "sizes"
  | "placeholder"
  | "blurDataURL"
  | "loading"
  | "onLoad"
  | "onError"
>;

export function ImageWithFallback({
  src,
  alt,
  fill = false,
  width,
  height,
  priority = false,
  className,
  sizes,
  placeholder = "empty",
  blurDataURL,
  loading,
  ...rest
}: ImageWithFallbackProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading"
  );

  useEffect(() => {
    setStatus("loading");
  }, [src]);

  const showPlaceholder = status !== "loaded";

  return (
    <div
      className={clsx(
        styles.wrapper,
        fill ? styles.fill : styles.dimensions,
        className
      )}
      style={
        !fill && width && height
          ? { aspectRatio: `${width} / ${height}` }
          : undefined
      }
    >
      {status !== "error" && (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          priority={priority}
          sizes={sizes}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          loading={loading}
          className={styles.image}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          {...rest}
        />
      )}

      {showPlaceholder && (
        <div className={styles.placeholder} aria-hidden="true">
          <div className={styles.shimmer} />
        </div>
      )}
    </div>
  );
}
