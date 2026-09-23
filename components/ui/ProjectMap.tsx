"use client";

import { useState } from "react";
import { countiesServed } from "@/data/serviceAreas";
import styles from "./ProjectMap.module.scss";

export default function ProjectMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className={styles.mapWrap}>
      <svg
        className={styles.mapSvg}
        viewBox="0 0 100 70"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Simplified Kenya outline */}
        <path
          d="M 20,20 L 30,15 L 45,12 L 55,15 L 65,12 L 75,18 L 82,25 L 85,35 L 82,45 L 78,52 L 72,58 L 65,62 L 55,60 L 48,55 L 40,52 L 35,48 L 28,42 L 22,35 L 18,28 Z"
          fill="rgba(255,255,255,0.4)"
          stroke="rgba(6,78,59,0.3)"
          strokeWidth="0.3"
        />

        {/* Decorative grid lines */}
        <line
          x1="0"
          y1="35"
          x2="100"
          y2="35"
          stroke="rgba(6,78,59,0.08)"
          strokeWidth="0.2"
        />
        <line
          x1="50"
          y1="0"
          x2="50"
          y2="70"
          stroke="rgba(6,78,59,0.08)"
          strokeWidth="0.2"
        />
      </svg>

      {countiesServed.map((county) => (
        <div
          key={county.countyName}
          className={styles.mapPin}
          style={{
            position: "absolute",
            left: `${county.coordinates.x}%`,
            top: `${county.coordinates.y}%`,
          }}
          onMouseEnter={() => setHovered(county.countyName)}
          onMouseLeave={() => setHovered(null)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="6" className={styles.mapPinDot} />
          </svg>

          {hovered === county.countyName && (
            <div className={styles.mapPinTooltip}>
              {county.countyName} ({county.projectsCount}{" "}
              {county.projectsCount === 1 ? "project" : "projects"})
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
