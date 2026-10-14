"use client";

import { motion } from "motion/react";
import { profile } from "@/lib/profile";
import { loaderState, LOADER_REVEAL } from "@/lib/loader-state";

export default function Hero() {
  const letters = profile.mark.split("");
  // On a hard load the preloader runs first; on SPA navs start almost at once.
  const base = loaderState.done ? 0.15 : LOADER_REVEAL;

  return (
    <section
      data-navtheme="light"
      className="flex h-svh flex-col justify-center overflow-hidden px-3"
    >
      <h1
        className="font-display text-center leading-none tracking-tight text-ink text-[17vw] sm:text-[12.5vw]"
        style={{ transform: "scaleY(1.5)" }}
      >
        {letters.map((ch, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: "70%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              delay: base + 0.06 * i,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {ch}
          </motion.span>
        ))}
      </h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: base + 0.9, duration: 0.8 }}
        className="mt-16 text-center text-lg sm:text-xl"
      >
        {profile.tagline}
      </motion.p>
    </section>
  );
}
