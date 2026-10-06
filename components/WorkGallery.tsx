"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { projects } from "@/lib/projects";

const reveal = {
  initial: { y: 32, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function WorkGallery() {
  return (
    <section id="work" className="bg-khaki px-5 py-24 sm:px-10 sm:py-36">
      <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
        <h2 className="font-display leading-none text-black text-[16vw] lg:text-[12vw]">
          work.
        </h2>
        <p className="max-w-xs self-end pb-4 text-lg leading-snug text-ink/80">
          Four products I’ve helped ship — from an AI research platform to a
          Chrome extension. For deeper dives,{" "}
          <a
            className="underline underline-offset-4"
            href="mailto:jeremiadamss@gmail.com"
          >
            send me an email
          </a>
          .
        </p>
      </div>

      <div className="mt-16 grid gap-x-10 gap-y-20 sm:mt-24 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            {...reveal}
            className={i % 2 === 1 ? "md:mt-24" : ""}
          >
            <Link href={`/works/${p.slug}`} className="group block">
              <div
                className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden ${p.tile.bg}`}
              >
                <span
                  className={`font-display text-[9vw] leading-none transition-opacity duration-300 md:text-[4vw] ${p.tile.fg} ${
                    p.cover ? "group-hover:opacity-0" : ""
                  }`}
                >
                  {p.title.toLowerCase()}
                </span>
                {p.cover && (
                  <Image
                    src={p.cover.src}
                    alt={p.cover.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top opacity-0 transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:opacity-100"
                  />
                )}
              </div>
              <h3 className="mt-5 text-xl text-black sm:text-2xl">{p.title}</h3>
              <p className="text-lg text-ink/70">{p.descriptor}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
