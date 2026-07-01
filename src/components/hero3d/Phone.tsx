"use client";

import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import * as THREE from "three";
import { RoundedBox, Html, useScroll } from "@react-three/drei";
import { PhoneScreenContent } from "./PhoneScreenContent";
import { canvasToTexture, createGlowSpriteCanvas, createPhoneLockCanvas } from "./textures";

export const PHONE_WIDTH = 0.52;
export const PHONE_HEIGHT = 1.08;
const PHONE_DEPTH = 0.05;

export interface PhoneHandle {
  group: THREE.Group | null;
  screenMaterial: THREE.MeshStandardMaterial | null;
  glowMaterial: THREE.MeshBasicMaterial | null;
  htmlWrapper: HTMLDivElement | null;
}

export const Phone = forwardRef<PhoneHandle>(function Phone(_props, ref) {
  const groupRef = useRef<THREE.Group>(null);
  const screenMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const glowMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const htmlWrapperRef = useRef<HTMLDivElement>(null);

  // drei's ScrollControls connects its own scrollable container as the
  // default Html portal target, which scrolls the Html node out of view.
  // Portal into the sticky (non-scrolling) container instead.
  const scroll = useScroll();
  const portalRef = useMemo(() => ({ current: scroll.fixed as HTMLElement }), [scroll.fixed]);

  const lockTexture = useMemo(() => canvasToTexture(createPhoneLockCanvas()), []);
  const glowTexture = useMemo(() => canvasToTexture(createGlowSpriteCanvas()), []);

  useImperativeHandle(ref, () => ({
    get group() {
      return groupRef.current;
    },
    get screenMaterial() {
      return screenMatRef.current;
    },
    get glowMaterial() {
      return glowMatRef.current;
    },
    get htmlWrapper() {
      return htmlWrapperRef.current;
    },
  }));

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, -0.15]}>
        <planeGeometry args={[1.6, 1.6]} />
        <meshBasicMaterial
          ref={glowMatRef}
          map={glowTexture}
          transparent
          opacity={0}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* brass edge trim, a hair larger than the body, reads as a rim highlight */}
      <RoundedBox
        args={[PHONE_WIDTH + 0.018, PHONE_HEIGHT + 0.018, PHONE_DEPTH * 0.7]}
        radius={0.1}
        smoothness={8}
      >
        <meshStandardMaterial color="#c8a24c" roughness={0.3} metalness={0.85} />
      </RoundedBox>

      <RoundedBox
        args={[PHONE_WIDTH, PHONE_HEIGHT, PHONE_DEPTH]}
        radius={0.09}
        smoothness={8}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#181410"
          roughness={0.25}
          metalness={0.55}
          clearcoat={1}
          clearcoatRoughness={0.15}
        />
      </RoundedBox>

      {/* Screen */}
      <mesh position={[0, 0, PHONE_DEPTH / 2 + 0.001]}>
        <planeGeometry args={[PHONE_WIDTH * 0.9, PHONE_HEIGHT * 0.94]} />
        <meshStandardMaterial
          ref={screenMatRef}
          map={lockTexture}
          emissive="#e8ca8e"
          emissiveIntensity={0}
          emissiveMap={lockTexture}
          roughness={0.35}
          metalness={0.1}
          transparent
        />
      </mesh>

      {/* Live "app" content, faded in once the screen has lit up */}
      <Html
        transform
        occlude={false}
        portal={portalRef}
        distanceFactor={1}
        position={[0, 0, PHONE_DEPTH / 2 + 0.002]}
        style={{ pointerEvents: "none" }}
      >
        <div
          ref={htmlWrapperRef}
          style={{
            width: `${PHONE_WIDTH * 0.9 * 340}px`,
            height: `${PHONE_HEIGHT * 0.94 * 340}px`,
            opacity: 0,
          }}
        >
          <PhoneScreenContent />
        </div>
      </Html>
    </group>
  );
});
