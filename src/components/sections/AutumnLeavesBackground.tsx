"use client";

import type { CSSProperties } from "react";

type LeafConfig = {
  id: number;
  left: string;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  spin: number;
  tilt: number;
  opacity: number;
  variant: 1 | 2 | 3;
  color: string;
  animation: 1 | 2 | 3;
};

const LEAF_COLORS = ["#5b1b1f", "#8f4a2e", "#b8860b", "#a0522d", "#c49a6c"] as const;
const LEAF_VARIANTS = [1, 2, 3] as const;
const LEAF_ANIMATIONS = [1, 2, 3] as const;

const BASE_LEAF_DATA: Omit<LeafConfig, "id">[] = [
  { left: "5%", size: 20, delay: 0, duration: 9, drift: 42, spin: 120, tilt: 72, opacity: 0.38, variant: 1, color: "#5b1b1f", animation: 1 },
  { left: "12%", size: 16, delay: 0.8, duration: 10, drift: -38, spin: 105, tilt: -68, opacity: 0.34, variant: 2, color: "#8f4a2e", animation: 2 },
  { left: "18%", size: 18, delay: 1.6, duration: 8.5, drift: 55, spin: 135, tilt: 78, opacity: 0.36, variant: 3, color: "#b8860b", animation: 3 },
  { left: "25%", size: 22, delay: 2.2, duration: 9.5, drift: -48, spin: 115, tilt: -62, opacity: 0.4, variant: 1, color: "#a0522d", animation: 1 },
  { left: "31%", size: 14, delay: 0.4, duration: 11, drift: 35, spin: 95, tilt: 58, opacity: 0.3, variant: 2, color: "#c49a6c", animation: 2 },
  { left: "37%", size: 19, delay: 3, duration: 8, drift: -52, spin: 140, tilt: -82, opacity: 0.35, variant: 3, color: "#5b1b1f", animation: 3 },
  { left: "43%", size: 17, delay: 1.2, duration: 10.5, drift: 46, spin: 110, tilt: 66, opacity: 0.33, variant: 1, color: "#8f4a2e", animation: 1 },
  { left: "49%", size: 15, delay: 3.8, duration: 9, drift: -44, spin: 125, tilt: -74, opacity: 0.32, variant: 2, color: "#b8860b", animation: 2 },
  { left: "55%", size: 21, delay: 2.6, duration: 8.8, drift: 50, spin: 130, tilt: 84, opacity: 0.37, variant: 3, color: "#a0522d", animation: 3 },
  { left: "61%", size: 13, delay: 4.4, duration: 10.2, drift: -36, spin: 100, tilt: -56, opacity: 0.28, variant: 1, color: "#c49a6c", animation: 1 },
  { left: "67%", size: 23, delay: 5, duration: 9.2, drift: 58, spin: 145, tilt: 70, opacity: 0.39, variant: 2, color: "#5b1b1f", animation: 2 },
  { left: "73%", size: 18, delay: 1.8, duration: 8.4, drift: -50, spin: 118, tilt: -86, opacity: 0.35, variant: 3, color: "#8f4a2e", animation: 3 },
  { left: "79%", size: 12, delay: 5.6, duration: 11.5, drift: 32, spin: 92, tilt: 54, opacity: 0.26, variant: 1, color: "#b8860b", animation: 1 },
  { left: "85%", size: 20, delay: 0.6, duration: 9.8, drift: -54, spin: 138, tilt: -76, opacity: 0.36, variant: 2, color: "#a0522d", animation: 2 },
  { left: "91%", size: 16, delay: 4.8, duration: 8.2, drift: 40, spin: 112, tilt: 64, opacity: 0.31, variant: 3, color: "#c49a6c", animation: 3 },
  { left: "8%", size: 24, delay: 2.4, duration: 10.8, drift: -60, spin: 150, tilt: -88, opacity: 0.41, variant: 1, color: "#5b1b1f", animation: 1 },
  { left: "22%", size: 15, delay: 6.2, duration: 9.4, drift: 48, spin: 108, tilt: 60, opacity: 0.29, variant: 2, color: "#8f4a2e", animation: 2 },
  { left: "35%", size: 17, delay: 3.4, duration: 8.6, drift: -42, spin: 128, tilt: -70, opacity: 0.34, variant: 3, color: "#b8860b", animation: 3 },
  { left: "48%", size: 19, delay: 1, duration: 10, drift: 52, spin: 132, tilt: 80, opacity: 0.35, variant: 1, color: "#a0522d", animation: 1 },
  { left: "58%", size: 14, delay: 6.8, duration: 9.1, drift: -46, spin: 102, tilt: -64, opacity: 0.27, variant: 2, color: "#c49a6c", animation: 2 },
  { left: "68%", size: 22, delay: 4, duration: 8.3, drift: 56, spin: 142, tilt: 74, opacity: 0.38, variant: 3, color: "#5b1b1f", animation: 3 },
  { left: "76%", size: 16, delay: 2, duration: 11.2, drift: -58, spin: 98, tilt: -80, opacity: 0.3, variant: 1, color: "#8f4a2e", animation: 1 },
  { left: "14%", size: 18, delay: 5.4, duration: 9.6, drift: 44, spin: 122, tilt: 68, opacity: 0.33, variant: 2, color: "#b8860b", animation: 2 },
  { left: "28%", size: 21, delay: 0.2, duration: 8.7, drift: -50, spin: 136, tilt: -72, opacity: 0.37, variant: 3, color: "#a0522d", animation: 3 },
  { left: "42%", size: 13, delay: 7, duration: 10.4, drift: 38, spin: 96, tilt: 52, opacity: 0.25, variant: 1, color: "#c49a6c", animation: 1 },
  { left: "52%", size: 20, delay: 3.2, duration: 9.3, drift: -54, spin: 126, tilt: -78, opacity: 0.36, variant: 2, color: "#5b1b1f", animation: 2 },
  { left: "64%", size: 17, delay: 6.4, duration: 8.9, drift: 46, spin: 114, tilt: 76, opacity: 0.32, variant: 3, color: "#8f4a2e", animation: 3 },
  { left: "82%", size: 23, delay: 1.4, duration: 10.6, drift: -62, spin: 148, tilt: -84, opacity: 0.39, variant: 1, color: "#b8860b", animation: 1 },
  { left: "3%", size: 15, delay: 4.6, duration: 9.7, drift: 36, spin: 104, tilt: 62, opacity: 0.31, variant: 2, color: "#a0522d", animation: 2 },
  { left: "33%", size: 19, delay: 2.8, duration: 8.1, drift: -48, spin: 134, tilt: -66, opacity: 0.35, variant: 3, color: "#c49a6c", animation: 3 },
  { left: "46%", size: 24, delay: 5.8, duration: 11, drift: 60, spin: 152, tilt: 86, opacity: 0.4, variant: 1, color: "#5b1b1f", animation: 1 },
  { left: "59%", size: 14, delay: 0.9, duration: 9.9, drift: -40, spin: 108, tilt: -58, opacity: 0.28, variant: 2, color: "#8f4a2e", animation: 2 },
  { left: "71%", size: 18, delay: 3.6, duration: 8.5, drift: 50, spin: 124, tilt: 70, opacity: 0.34, variant: 3, color: "#b8860b", animation: 3 },
  { left: "88%", size: 16, delay: 6.6, duration: 10.3, drift: -56, spin: 116, tilt: -90, opacity: 0.29, variant: 1, color: "#a0522d", animation: 1 },
  { left: "16%", size: 21, delay: 2.1, duration: 9.4, drift: 54, spin: 138, tilt: 82, opacity: 0.36, variant: 2, color: "#c49a6c", animation: 2 },
  { left: "39%", size: 12, delay: 7.2, duration: 8.8, drift: -34, spin: 94, tilt: -54, opacity: 0.26, variant: 3, color: "#5b1b1f", animation: 3 },
  { left: "53%", size: 20, delay: 4.2, duration: 10.1, drift: 48, spin: 128, tilt: 64, opacity: 0.33, variant: 1, color: "#8f4a2e", animation: 1 },
  { left: "95%", size: 17, delay: 1.1, duration: 9.2, drift: -52, spin: 118, tilt: -76, opacity: 0.32, variant: 2, color: "#b8860b", animation: 2 },
];

function generateExtraLeaves(count: number, startId: number): Omit<LeafConfig, "id">[] {
  return Array.from({ length: count }, (_, index) => {
    const seed = startId + index;
    return {
      left: `${((seed * 13.7 + 4) % 94) + 2}%`,
      size: 11 + (seed % 14),
      delay: Number(((seed * 0.41) % 7.8).toFixed(2)),
      duration: Number((7.2 + (seed % 8) * 0.55).toFixed(2)),
      drift: -68 + ((seed * 19) % 136),
      spin: 88 + ((seed * 23) % 74),
      tilt: -92 + ((seed * 29) % 184),
      opacity: Number((0.24 + (seed % 9) * 0.025).toFixed(2)),
      variant: LEAF_VARIANTS[seed % LEAF_VARIANTS.length],
      color: LEAF_COLORS[seed % LEAF_COLORS.length],
      animation: LEAF_ANIMATIONS[seed % LEAF_ANIMATIONS.length],
    };
  });
}

const LEAVES: LeafConfig[] = [...BASE_LEAF_DATA, ...generateExtraLeaves(34, BASE_LEAF_DATA.length + 1)].map(
  (leaf, index) => ({
    ...leaf,
    id: index + 1,
  }),
);

const LEAF_PATHS: Record<1 | 2 | 3, string> = {
  1: "M12 2C8 6 4 10 4 16c0 6 4 10 8 10s8-4 8-10c0-6-4-10-8-14z",
  2: "M12 1c-2 5-6 8-6 14 0 4 2 8 6 8s6-4 6-8c0-6-4-9-6-14z M12 1v22",
  3: "M12 0C7 5 2 9 2 15c0 5 3 9 10 9s10-4 10-9c0-6-5-10-10-15z",
};

function LeafIcon({
  variant,
  color,
  size,
}: {
  variant: 1 | 2 | 3;
  color: string;
  size: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className="block"
    >
      <path d={LEAF_PATHS[variant]} fill={color} />
    </svg>
  );
}

export function AutumnLeavesBackground() {
  return (
    <div
      className="autumn-leaves pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="autumn-leaves__glow" />
      <div className="autumn-leaves__fade" />

      {LEAVES.map((leaf) => (
        <span
          key={leaf.id}
          className={`autumn-leaf autumn-leaf--anim-${leaf.animation}`}
          style={
            {
              left: leaf.left,
              "--leaf-delay": `${leaf.delay}s`,
              "--leaf-duration": `${leaf.duration}s`,
              "--leaf-drift": `${leaf.drift}px`,
              "--leaf-tilt": `${leaf.tilt}deg`,
              "--leaf-spin": `${leaf.spin}deg`,
              "--leaf-opacity": leaf.opacity,
            } as CSSProperties
          }
        >
          <LeafIcon variant={leaf.variant} color={leaf.color} size={leaf.size} />
        </span>
      ))}
    </div>
  );
}
