"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  images: { src: string; alt: string }[];
  /** ms per frame */
  interval?: number;
  className?: string;
};

/** Auto-cycling crossfade — reads like an animated gif, weighs like four images. */
export default function Slideshow({ images, interval = 2000, className }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval,
    );
    return () => clearInterval(t);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          sizes="320px"
          className={`object-cover transition-opacity duration-500 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
