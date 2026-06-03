"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const VIDEO_SRC = "/videos/hero-video.mov";
const POSTER_SRC = "/images/hero-video-poster.png";

export function HeroVideo() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    modalVideoRef.current?.pause();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    const timer = window.setTimeout(() => {
      modalVideoRef.current?.play().catch(() => {});
    }, 150);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeModal]);

  const modal =
    isOpen && mounted
      ? createPortal(
          <div
            className="hero-video-modal"
            role="dialog"
            aria-modal="true"
            aria-label="DB Studio video player"
          >
            <button
              type="button"
              className="hero-video-modal__backdrop"
              onClick={closeModal}
              aria-label="Close video"
            />
            <div className="hero-video-modal__dialog">
              <div className="hero-video-modal__header">
                <button
                  type="button"
                  className="hero-video-modal__close"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <div className="hero-video-modal__frame">
                <video
                  ref={modalVideoRef}
                  className="hero-video-modal__player"
                  src={VIDEO_SRC}
                  controls
                  playsInline
                  poster={POSTER_SRC}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <div className="hero-video">
        <div className="hero-video__frame">
          <button
            type="button"
            className="hero-video__trigger"
            onClick={openModal}
            aria-label="Play DB Studio Media introduction video"
          >
            <Image
              src={POSTER_SRC}
              alt="DB Studio Media — Stop improvising. Build with structure. Play agency video."
              width={781}
              height={439}
              className="hero-video__poster"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
            <span className="hero-video__overlay hero-video__overlay--poster" aria-hidden />
          </button>
        </div>
      </div>
      {modal}
    </>
  );
}
