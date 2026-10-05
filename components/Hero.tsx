"use client";

import { motion } from "motion/react";
import { profile } from "@/lib/profile";

export default function Hero() {
  const letters = profile.mark.split("");

  return (
    <section className="flex h-svh flex-col justify-center overflow-hidden px-3">
      <h1 className="font-display text-center leading-none tracking-tight text-ink text-[12.5vw]">
        {letters.map((ch, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: "60%", opacity: 0, rotate: 6 }}
            animate={{ y: "0%", opacity: 1, rotate: 0 }}
            transition={{
              delay: 0.08 * i,
              duration: 0.7,
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
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-8 text-center text-lg sm:text-xl"
      >
        {profile.tagline}
      </motion.p>
    </section>
  );
}
