import Marquee from "@/components/Marquee";
import { marqueeLines } from "@/lib/profile";

export default function Disciplines() {
  return (
    <section data-navtheme="light" className="py-16 sm:py-24" aria-label="What I do">
      <Marquee baseVelocity={-4} className="border-y border-ink/60">
        <span className="px-6 text-[11vw] leading-[1.15] sm:text-[7vw]">
          {marqueeLines[0]} —&nbsp;
        </span>
      </Marquee>
      <Marquee baseVelocity={4} className="mt-6 sm:mt-10">
        <span className="px-6 text-[11vw] leading-[1.15] sm:text-[7vw] text-khaki">
          {marqueeLines[1]} —&nbsp;
        </span>
      </Marquee>
    </section>
  );
}
