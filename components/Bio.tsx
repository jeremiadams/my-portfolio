"use client";

import { motion } from "motion/react";
import { bio, profile, indexColumns } from "@/lib/profile";

const reveal = {
  initial: { y: 24, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function Bio() {
  return (
    <section id="about" data-navtheme="dark" className="px-5 py-24 sm:px-10 sm:py-36">
      <div className="grid gap-16 lg:grid-cols-2">
        <div />
        <div className="max-w-2xl space-y-8 text-[clamp(1.35rem,2.2vw,1.9rem)] leading-snug">
          <motion.p {...reveal} className="font-medium">
            {bio.intro}
          </motion.p>
          {bio.paragraphs.map((p, i) => (
            <motion.p key={i} {...reveal}>
              {p}
            </motion.p>
          ))}
          <motion.p {...reveal}>
            You can find me on{" "}
            {profile.socials.map((s, i) => (
              <span key={s.label}>
                <a
                  className="underline underline-offset-4 hover:text-orange"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                </a>
                {i < profile.socials.length - 1 ? " or " : "."}
              </span>
            ))}
          </motion.p>
          <motion.a
            {...reveal}
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 rounded-full border-2 border-cream px-8 py-4 text-xl font-medium transition-colors hover:border-orange hover:bg-orange hover:text-ink"
          >
            ¡Get in touch!
            <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </motion.a>
        </div>
      </div>

      <div className="mt-28 grid grid-cols-2 gap-x-6 gap-y-14 sm:mt-40 lg:grid-cols-3">
        {indexColumns.map((col) => (
          <motion.div key={col.heading} {...reveal}>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-khaki">
              {col.heading}
            </h3>
            <ul className="space-y-2 text-lg sm:text-xl">
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
