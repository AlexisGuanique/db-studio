"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { industriesIntroCarousel } from "@/lib/industries";

export function IndustriesIntroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = industriesIntroCarousel.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [total]);

  return (
    <div className="industries-carousel">
      <div className="industries-carousel__viewport section-image">
        {industriesIntroCarousel.map((slide, index) => (
          <div
            key={slide.src}
            className={`industries-carousel__slide${
              index === activeIndex ? " industries-carousel__slide--active" : ""
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={slide.width}
              height={slide.height}
              className="industries-carousel__photo section-image__photo"
              sizes="(max-width: 1024px) 100vw, 560px"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="industries-carousel__controls">
        <button
          type="button"
          className="industries-carousel__arrow"
          aria-label="Previous slide"
          onClick={() => goTo(activeIndex - 1)}
        >
          ‹
        </button>

        <div className="industries-carousel__dots">
          {industriesIntroCarousel.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className={`industries-carousel__dot${
                index === activeIndex ? " industries-carousel__dot--active" : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>

        <button
          type="button"
          className="industries-carousel__arrow"
          aria-label="Next slide"
          onClick={() => goTo(activeIndex + 1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
