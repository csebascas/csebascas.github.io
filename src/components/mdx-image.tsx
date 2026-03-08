"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface ImageProps {
  src: string;
  alt?: string;
}

export function MDXImage({ src, alt }: ImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <span className="mdx-image-wrapper">
        <img
          src={src}
          alt={alt || ""}
          onClick={() => setIsOpen(true)}
          className="mdx-image"
        />
        {alt && <span className="mdx-caption">{alt}</span>}
      </span>

      {mounted && isOpen && createPortal(
        <div className="lightbox" onClick={() => setIsOpen(false)}>
          <button className="lightbox-close" aria-label="Close">×</button>
          <img src={src} alt={alt || ""} className="lightbox-image" />
        </div>,
        document.body
      )}
    </>
  );
}
