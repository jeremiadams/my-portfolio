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

  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div
        className={`flex items-center justify-between px-5 py-5 font-bold transition-colors duration-300 sm:px-10 sm:py-7 ${color}`}
      >
        <Link href="/" className="pointer-events-auto text-base sm:text-lg">
          jeremi.
        </Link>
        <div className="flex gap-8 sm:gap-14">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="pointer-events-auto text-base underline-offset-4 hover:underline sm:text-lg"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
