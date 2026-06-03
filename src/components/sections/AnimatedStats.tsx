"use client";

import { useEffect, useRef, useState } from "react";
import { agencyStats } from "@/lib/site";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let start: number | null = null;
    let frame = 0;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.round(easeOutCubic(progress) * target));

      if (progress < 1) {
        frame = window.requestAnimationFrame(step);
      }
    };

    frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return count;
}

function StatItem({
  target,
  suffix,
  label,
  active,
  delay,
}: {
  target: number;
  suffix: string;
  label: string;
  active: boolean;
  delay: number;
}) {
  const count = useCountUp(target, active);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!active) {
      setRevealed(false);
      return;
    }

    const timer = window.setTimeout(() => setRevealed(true), delay);
    return () => window.clearTimeout(timer);
  }, [active, delay]);

  return (
    <div
      className={`agency-stat${revealed ? " agency-stat--visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="agency-stat__value tabular-nums">
        {count}
        <span className="agency-stat__suffix">{suffix}</span>
      </p>
      <p className="agency-stat__label">{label}</p>
    </div>
  );
}

export function AnimatedStats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="agency-stats border-y border-burgundy/10 bg-cream py-8 md:py-10">
      <div className="agency-stats__grid mx-auto max-w-5xl px-6">
        {agencyStats.map((stat, index) => (
          <StatItem
            key={stat.label}
            target={stat.target}
            suffix={stat.suffix}
            label={stat.label}
            active={active}
            delay={index * 120}
          />
        ))}
      </div>
    </section>
  );
}
