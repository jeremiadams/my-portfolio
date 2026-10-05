"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return min + (((v - min) % range) + range) % range;
}

type Props = {
  children: ReactNode;
  /** px per second; negative moves left */
  baseVelocity?: number;
  /** multiply scroll velocity into the marquee (0 disables) */
  scrollFactor?: number;
  className?: string;
};

export default function Marquee({
  children,
  baseVelocity = -3,
  scrollFactor = 1,
  className,
}: Props) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // four copies of the content → wrap every 25%
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (scrollFactor !== 0) {
      const vf = velocityFactor.get();
      if (vf < 0) directionFactor.current = -1;
      else if (vf > 0) directionFactor.current = 1;
      moveBy += directionFactor.current * moveBy * vf * scrollFactor;
    }
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <motion.div className="flex w-max flex-nowrap" style={{ x }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="flex shrink-0 items-center">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
