"use client";

import { motion, useScroll, useTransform } from "motion/react";

const TEXT = "OPEN TO WORK · FRONTEND × FULL-STACK AI · ";

// Spiky sticker-seal outline (24 points, alternating radii)
const SEAL_POINTS = Array.from({ length: 48 }, (_, i) => {
  const r = i % 2 === 0 ? 50 : 45;
  const a = (i / 48) * Math.PI * 2 - Math.PI / 2;
  return `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`;
}).join(" ");

export default function StickerBadge() {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, (v) => v * 0.12);

  return (
    <div className="pointer-events-none fixed bottom-6 left-5 z-40 size-28 sm:bottom-10 sm:left-10 sm:size-36 drop-shadow-[2px_3px_0_rgba(10,9,8,0.9)]">
      <motion.div style={{ rotate }} className="size-full">
        <div className="size-full animate-[spin_45s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="size-full">
            <polygon points={SEAL_POINTS} className="fill-orange" />
            <defs>
              <path
                id="badge-circle"
                d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                fill="none"
              />
            </defs>
            <text className="fill-ink text-[7.5px] font-bold tracking-[0.13em]">
              <textPath href="#badge-circle">{TEXT}</textPath>
            </text>
            {/* asterisk */}
            <g stroke="#0a0908" strokeWidth="3.4" strokeLinecap="round">
              <path d="M50 38 v24" />
              <path d="M39.6 44 l20.8 12" />
              <path d="M39.6 56 l20.8 -12" />
            </g>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
