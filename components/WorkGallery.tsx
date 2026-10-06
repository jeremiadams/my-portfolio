"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function WorkGallery() {
  const [active, setActive] = useState<number | null>(null);

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

      <div className="relative mt-14 sm:mt-24">
        <ul className="border-t border-ink/40">
          {projects.map((p, i) => (
            <li key={p.slug} className="border-b border-ink/40">
              <Link
                href={`/works/${p.slug}`}
                className="group flex items-center justify-between gap-6 py-7 sm:py-9"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <span>
                  <span className="block text-3xl text-black transition-transform duration-300 ease-out group-hover:-translate-x-2.5 sm:text-5xl">
                    {p.title}
                  </span>
                  <span className="mt-1.5 block text-base text-ink/70 sm:text-lg">
                    {p.descriptor}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="text-3xl text-black transition-transform duration-300 ease-out group-hover:translate-x-2.5 sm:text-5xl"
                >
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hover preview — floats over the list on desktop, like the old site */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[8%] top-1/2 z-10 hidden w-[26rem] -translate-y-1/2 xl:w-[32rem] lg:block"
        >
          {projects.map((p, i) => (
            <div
              key={p.slug}
              className={`absolute inset-x-0 top-1/2 -translate-y-1/2 -rotate-2 shadow-[8px_10px_0_rgba(10,9,8,0.25)] transition-all duration-300 ${
                active === i
                  ? "visible scale-100 opacity-100"
                  : "invisible scale-95 opacity-0"
              }`}
            >
              {p.cover ? (
                <Image
                  src={p.cover.src}
                  alt=""
                  width={1456}
                  height={825}
                  className="w-full"
                />
              ) : (
                <div
                  className={`flex aspect-video items-center justify-center ${p.tile.bg}`}
                >
                  <span className={`font-display text-5xl ${p.tile.fg}`}>
                    {p.title.toLowerCase()}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
