"use client";

// ============================================
// DownloadCard Component
// ============================================

import { motion } from "framer-motion";
import { Download as DownloadIcon, FileText, File } from "lucide-react";
import type { Download } from "@/data/downloads";
import { formatDateShort } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import styles from "./DownloadCard.module.scss";

interface DownloadCardProps {
  download: Download;
  index?: number;
}

const fileTypeColors: Record<string, string> = {
  PDF: "#dc2626",
  DOCX: "#2563eb",
  XLSX: "#16a34a",
  ZIP: "#9333ea",
};

export function DownloadCard({ download, index = 0 }: DownloadCardProps) {
  const Icon = download.icon;

  const fileTypeColor = fileTypeColors[download.fileType] || "#64748b";

  const handleDownload = () => {
    // Simulated download — in production this would link to the actual file
    const link = document.createElement("a");
    link.href = "#";
    link.download = `${download.title}.${download.fileType.toLowerCase()}`;
    link.click();
  };

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className={styles.topRow}>
        <div
          className={styles.iconWrapper}
          style={{
            background: `${fileTypeColor}15`,
            color: fileTypeColor,
          }}
        >
          <Icon size={28} strokeWidth={1.8} />
        </div>

        <span className={styles.fileType} style={{ background: fileTypeColor }}>
          {download.fileType}
        </span>
      </div>

      <h3 className={styles.title}>{download.title}</h3>

      <p className={styles.description}>{download.description}</p>

      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <File size={14} />
          {download.fileSize}
        </span>

        {download.pages && (
          <span className={styles.metaItem}>
            <FileText size={14} />
            {download.pages} pages
          </span>
        )}

        <span className={styles.metaItem}>
          Updated {formatDateShort(download.updatedAt)}
        </span>
      </div>

      <Button
        variant="outline"
        fullWidth
        onClick={handleDownload}
        leftIcon={<DownloadIcon size={18} />}
        className={styles.downloadButton}
      >
        Download
      </Button>
    </motion.div>
  );
}
