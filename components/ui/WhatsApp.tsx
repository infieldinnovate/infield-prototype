// components/WhatsApp/WhatsApp.tsx

"use client";

import React, { useEffect, useRef, useState } from "react";
import useSound from "../../hooks/useSound";
import styles from "./WhatsApp.module.scss";
import { FaWhatsapp } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi2";
import { MdOutlineClose } from "react-icons/md";
import { ChatOption, chatOptions } from "@/data/whatsappOptions";

export default function WhatsApp() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const { play: playPop } = useSound("/sounds/notification.mp3", {
    volume: 0.5,
  });

  // Close when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        open &&
        panelRef.current &&
        !panelRef.current.contains(e.target as Node)
      ) {
        playPop();
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open, playPop]);

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        playPop();
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, playPop]);

  const toggleOpen = () => {
    playPop();
    setOpen((o) => !o);
  };

  // Open WhatsApp in new tab with proper rel attributes
  const handleOption = (option: ChatOption) => {
    playPop();

    // Normalize phone digits, keep leading country code
    const phone = option.customerCare.replace(/\D/g, "");
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(option.message)}`;

    // Use an anchor to ensure rel="noopener noreferrer"
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    // some browsers block programmatic clicks without adding to DOM
    document.body.appendChild(a);
    a.click();
    a.remove();

    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      {open && (
        <div
          ref={panelRef}
          className={styles.panel}
          role="dialog"
          aria-modal="true"
          aria-labelledby="whatsapp-panel-title"
        >
          <div className={styles.header}>
            <div>
              <h3 id="whatsapp-panel-title">How can we help you?</h3>
              <p>Select a service to start a WhatsApp chat</p>
            </div>
            <button
              onClick={toggleOpen}
              className={styles.closeBtn}
              aria-label="Close chat panel"
            >
              <MdOutlineClose size={20} />
            </button>
          </div>

          <div className={styles.options}>
            <ul>
              {chatOptions.map((opt) => (
                <li key={opt.label}>
                  <button
                    onClick={() => handleOption(opt)}
                    aria-label={`Chat: ${opt.label}`}
                  >
                    <span>
                      <strong>{opt.label}</strong>
                    </span>
                    <HiChevronRight size={20} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footer}>
            <span>
              <FaWhatsapp size={20} className={styles.footerIcon} />
              Powered by{" "}
              <a
                href={
                  // process.env.NEXT_PUBLIC_COMPANY_WEBSITE ||
                  "https://aztechnos.co.ke"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                aztechnos.co.ke
              </a>
            </span>
          </div>
        </div>
      )}

      <button
        onClick={toggleOpen}
        className={styles.fab}
        aria-label="Chat with Infield Innovations on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
}
