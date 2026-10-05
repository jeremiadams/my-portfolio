import Link from "next/link";

const links = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-5 py-5 sm:px-10 sm:py-7 text-white">
        <Link
          href="/"
          className="pointer-events-auto text-base font-semibold sm:text-lg"
        >
          jeremi.
        </Link>
        <div className="flex gap-8 sm:gap-14">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="pointer-events-auto text-base sm:text-lg hover:underline underline-offset-4"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
