"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type TransitionEvent,
} from "react";

export type RevealDirection = "left" | "right" | "up";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  immediate?: boolean;
  direction?: RevealDirection;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  immediate = false,
  direction = "up",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (immediate) {
      const timer = window.setTimeout(() => setVisible(true), 50);
      return () => window.clearTimeout(timer);
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [immediate]);

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName === "transform" && visible) {
      setDone(true);
    }
  };

  return (
    <div
      ref={ref}
      onTransitionEnd={handleTransitionEnd}
      className={`reveal reveal--${direction} ${visible ? "reveal--visible" : ""} ${done ? "reveal--done" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
