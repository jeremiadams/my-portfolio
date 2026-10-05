"use client";

import { motion, useScroll, useTransform } from "motion/react";

const TEXT = "OPEN TO WORK · FRONTEND × FULL-STACK AI · ";

export default function StickerBadge() {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, (v) => v * 0.12);

  return (
    <div className="pointer-events-none fixed bottom-6 left-5 z-40 size-28 sm:bottom-10 sm:left-10 sm:size-36">
      <motion.div style={{ rotate }} className="size-full">
        <div className="size-full animate-[spin_40s_linear_infinite] rounded-full bg-neon text-ink">
          <svg viewBox="0 0 100 100" className="size-full">
            <defs>
              <path
                id="badge-circle"
                d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                fill="none"
              />
            </defs>
            <text className="fill-ink text-[9.2px] font-semibold tracking-[0.12em]">
              <textPath href="#badge-circle">{TEXT}</textPath>
            </text>
            {/* smiley */}
            <circle
              cx="50"
              cy="50"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <path
              d="M42 44 l5 5 m0 -5 l-5 5 M53 44 l5 5 m0 -5 l-5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M43 56 q7 6 14 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
