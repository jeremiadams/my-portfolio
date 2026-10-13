import Marquee from "@/components/Marquee";
import { profile } from "@/lib/profile";

export default function Footer() {
  return (
    <footer id="contact" data-navtheme="dark" className="bg-jet text-cream">
      <div className="flex flex-col justify-between gap-16 px-5 pb-16 pt-24 sm:flex-row sm:items-end sm:px-10 sm:pt-32">
        <p className="max-w-md text-xl leading-snug text-khaki">
          Open to frontend and full-stack roles on AI-driven products, remote
          from Lagos.
        </p>
        <div className="text-right">
          <ul className="space-y-2 text-lg">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  className="underline underline-offset-4 hover:text-orange"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
            <li>
              <a
                className="underline underline-offset-4 hover:text-orange"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
              >
                Resume ↗
              </a>
            </li>
          </ul>
          <p className="mt-8 text-xl">JA — ©{new Date().getFullYear()}</p>
        </div>
      </div>

      <a href={`mailto:${profile.email}`} className="block">
        <Marquee baseVelocity={-6} scrollFactor={0} className="bg-orange py-4 text-ink">
          <span className="flex items-center gap-6 px-3 text-2xl sm:text-3xl">
            Get in touch
            <span className="rounded-full border-2 border-ink px-6 py-1.5">
              Email me
            </span>
            Open to work — frontend × full-stack AI
            <span aria-hidden>☺</span>
          </span>
        </Marquee>
      </a>
    </footer>
  );
}
