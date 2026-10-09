"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useScroll, useTransform, type MotionValue } from "motion/react";

/*
 * The diamond field from the old portfolio, with a scroll narrative:
 * at rest the diamonds sit as a dense swarm far from the camera; as you
 * scroll they drift apart and toward the viewer, while the camera keeps
 * its slow time orbit and scroll swing.
 */

const COLOR = "#c6ac8f";
const COUNT = 45;
const DEG = Math.PI / 180;
const mix = (a: number, b: number, t: number) => a + (b - a) * t;

function Scene({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const gl = useThree((state) => state.gl);
  const group = useRef<THREE.Group>(null);
  const smoothT = useRef(0);

  const yAngle = useTransform(scrollYProgress, [0, 1], [0.001, 140 * DEG]);
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);

  // Each diamond travels from a tight, far-off cluster to a scattered shell.
  const { starts, ends } = useMemo(() => {
    const starts: THREE.Vector3[] = [];
    const ends: THREE.Vector3[] = [];
    for (let i = 0; i < COUNT; i++) {
      starts.push(
        new THREE.Vector3().setFromSphericalCoords(
          mix(0.8, 3, Math.random()),
          mix(60 * DEG, 120 * DEG, Math.random()),
          360 * DEG * Math.random(),
        ),
      );
      ends.push(
        new THREE.Vector3().setFromSphericalCoords(
          mix(3.5, 14, Math.random()),
          mix(65 * DEG, 130 * DEG, Math.random()),
          360 * DEG * (i / COUNT),
        ),
      );
    }
    return { starts, ends };
  }, []);

  useFrame(({ camera, clock }) => {
    // scatter finishes around two-thirds of the page, softly damped
    const target = Math.min(1, scrollYProgress.get() * 1.5);
    smoothT.current += (target - smoothT.current) * 0.06;

    group.current?.children.forEach((child, i) => {
      child.position.lerpVectors(starts[i], ends[i], smoothT.current);
    });

    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      clock.elapsedTime * 0.06,
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);

    gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  });

  return (
    <group ref={group}>
      {Array.from({ length: COUNT }, (_, i) => (
        <mesh key={i}>
          {/* degenerate sphere segments render as a little diamond */}
          <sphereGeometry args={[0.13, 0.5, 0.05]} />
          <meshBasicMaterial
            wireframe
            color={COLOR}
            transparent
            opacity={0.55}
          />
        </mesh>
      ))}
    </group>
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
