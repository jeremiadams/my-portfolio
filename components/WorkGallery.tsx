"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import { projects } from "@/lib/projects";

const reveal = {
  initial: { y: 32, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function WorkGallery() {
  const [active, setActive] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 250, damping: 25, mass: 0.6 });
  const y = useSpring(my, { stiffness: 250, damping: 25, mass: 0.6 });

  function trackMouse(e: React.MouseEvent) {
    const rect = gridRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  return (
    <section id="work" data-navtheme="light" className="bg-khaki px-5 py-24 sm:px-10 sm:py-36">
      <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "70%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display leading-none text-black text-[16vw] lg:text-[12vw]"
          >
            work.
          </motion.h2>
        </div>
        <p className="max-w-xs self-end pb-4 text-lg leading-snug text-ink/80">
          Four products I’ve helped ship, from an AI research platform to a
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

      <div
        ref={gridRef}
        onMouseMove={trackMouse}
        className="relative mt-16 grid gap-x-10 gap-y-20 sm:mt-24 md:grid-cols-2"
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            {...reveal}
            className={i % 2 === 1 ? "md:mt-24" : ""}
          >
            <Link
              href={`/works/${p.slug}`}
              className="group block"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div
                className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden ${p.tile.bg}`}
              >
                <span
                  className={`font-display text-[9vw] leading-none transition-transform duration-500 ease-out group-hover:scale-105 md:text-[4vw] ${p.tile.fg}`}
                >
                  {p.title.toLowerCase()}
                </span>
              </div>
              <h3 className="mt-5 text-xl text-black sm:text-2xl">{p.title}</h3>
              <p className="text-lg text-ink/70">{p.descriptor}</p>
            </Link>
          </motion.div>
        ))}

        {/* Floating cursor-following preview (desktop only) */}
        <motion.div
          aria-hidden
          style={{ x, y }}
          className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
        >
          <div className="-translate-x-1/2 -translate-y-[110%] w-[24rem] xl:w-[28rem]">
            {projects.map(
              (p, i) =>
                p.cover && (
                  <div
                    key={p.slug}
                    className={`absolute inset-x-0 bottom-0 -rotate-2 shadow-[8px_10px_0_rgba(10,9,8,0.3)] transition-all duration-300 ${
                      active === i
                        ? "visible scale-100 opacity-100"
                        : "invisible scale-90 opacity-0"
                    }`}
                  >
                    <Image
                      src={p.cover.src}
                      alt=""
                      width={1456}
                      height={825}
                      className="w-full"
                    />
                  </div>
                ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
