"use client";

import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useScroll, useTransform, type MotionValue } from "motion/react";

/*
 * The diamond field from the old portfolio: wireframe gems scattered on a
 * sphere, with the camera orbiting slowly over time and swinging with scroll.
 */

const COLOR = "#c6ac8f";
const DEG = Math.PI / 180;
const mix = (a: number, b: number, t: number) => a + (b - a) * t;

function Diamond({ p }: { p: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useLayoutEffect(() => {
    const distance = mix(3.5, 14, Math.random());
    const yAngle = mix(65 * DEG, 130 * DEG, Math.random());
    const xAngle = 360 * DEG * p;
    ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
  }, [p]);

  return (
    <mesh ref={ref}>
      {/* degenerate sphere segments render as a little diamond */}
      <sphereGeometry args={[0.18, 0.5, 0.05]} />
      <meshBasicMaterial wireframe color={COLOR} transparent opacity={0.55} />
    </mesh>
  );
}

function Scene({
  numStars = 70,
  scrollYProgress,
}: {
  numStars?: number;
  scrollYProgress: MotionValue<number>;
}) {
  const gl = useThree((state) => state.gl);
  const yAngle = useTransform(scrollYProgress, [0, 1], [0.001, 140 * DEG]);
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);

  useFrame(({ camera, clock }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      clock.elapsedTime * 0.06,
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  }, [gl]);

  return (
    <>
      {Array.from({ length: numStars }, (_, i) => (
        <Diamond key={i} p={i / numStars} />
      ))}
    </>
  );
}

export default function Starfield() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <Canvas gl={{ antialias: false }}>
        <Scene scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
}
