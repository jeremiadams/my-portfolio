"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

/**
 * The nav text flips between ink and cream depending on which section
 * (tagged with data-navtheme="light|dark") currently sits underneath it.
 */
export default function Nav() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const update = () => {
      const probe = 44; // vertical center of the nav bar
      let theme = "light";
      document.querySelectorAll<HTMLElement>("[data-navtheme]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) theme = el.dataset.navtheme!;
      });
      setDark(theme === "dark");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const mo = new MutationObserver(update);
    mo.observe(document.body, { childList: true, subtree: false });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      mo.disconnect();
    };
  }, []);

  const color = dark ? "text-cream" : "text-ink";

  const linkClass =
    "pointer-events-auto text-base font-medium underline-offset-4 hover:underline sm:text-lg";

  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div
        className={`flex items-center justify-between px-5 py-5 transition-colors duration-300 sm:px-10 sm:py-7 ${color}`}
      >
        {/* desktop: wordmark left */}
        <Link
          href="/"
          className="pointer-events-auto hidden text-lg font-bold sm:block"
        >
          jeremi.
        </Link>

        {/* mobile: About + Contact left */}
        <div className="flex gap-8 sm:hidden">
          <Link href="/#about" className={linkClass}>
            About
          </Link>
          <Link href="/#contact" className={linkClass}>
            Contact
          </Link>
        </div>

        {/* desktop: all three right */}
        <div className="hidden gap-14 sm:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className={linkClass}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* mobile: Work right */}
        <Link href="/#work" className={`${linkClass} sm:hidden`}>
          Work
        </Link>
      </div>
    </nav>
  );
}
