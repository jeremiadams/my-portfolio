"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "motion/react";
import { loaderState } from "@/lib/loader-state";

const COLUMNS = 5;
const COUNT_MS = 1400;

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"count" | "exit" | "gone">("count");

  // Skip entirely on client-side navigations (loader already ran this visit).
  useLayoutEffect(() => {
    if (loaderState.done) setPhase("gone");
  }, []);

  useEffect(() => {
    if (phase !== "count" || loaderState.done) return;
    document.body.style.overflow = "hidden";
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(100, Math.round(((t - start) / COUNT_MS) * 100));
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        loaderState.done = true;
        setPhase("exit");
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, [phase]);

  useEffect(() => {
    if (phase === "exit" || phase === "gone") {
      document.body.style.overflow = "";
    }
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]">
      <div className="absolute inset-0 flex">
        {Array.from({ length: COLUMNS }).map((_, i) => (
          <motion.div
            key={i}
            className="h-full flex-1 bg-ink"
            initial={{ y: "0%" }}
            animate={{ y: phase === "exit" ? "-101%" : "0%" }}
            transition={{
              delay: i * 0.07,
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1],
            }}
            onAnimationComplete={() => {
              if (phase === "exit" && i === COLUMNS - 1) setPhase("gone");
            }}
          />
        ))}
      </div>
      <motion.p
        className="font-display absolute bottom-6 right-6 leading-none text-cream text-[14vw] sm:bottom-10 sm:right-10 sm:text-[9vw]"
        animate={{ opacity: phase === "exit" ? 0 : 1 }}
        transition={{ duration: 0.25 }}
      >
        {progress}
      </motion.p>
    </div>
  );
}
