"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { ContactShadows, useScroll } from "@react-three/drei";
import type { MotionValue } from "framer-motion";
import { Card, type CardHandle } from "./Card";
import { Phone, type PhoneHandle } from "./Phone";

const clamp01 = (v: number) => THREE.MathUtils.clamp(v, 0, 1);
const lerp = THREE.MathUtils.lerp;
// shift the whole stage down so it clears the headline/caption text above it
const STAGE_Y = -0.42;

function setOpacity(materials: THREE.Material[], value: number) {
  for (const mat of materials) {
    if ("opacity" in mat) {
      (mat as THREE.Material & { opacity: number }).opacity = value;
    }
  }
}

export function Scene({ progress }: { progress: MotionValue<number> }) {
  const cardRef = useRef<CardHandle>(null);
  const phoneRef = useRef<PhoneHandle>(null);

  const scroll = useScroll();

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const offset = scroll.offset;
    progress.set(offset);

    // On narrow/portrait viewports the horizontal FOV shrinks (vertical FOV
    // is fixed), which would clip the composition off the sides. Dolly the
    // camera back just enough to keep the same world-space width in frame,
    // rather than rescaling positions (which would also drag the phone's
    // "off-screen" start position into view).
    const camera = state.camera as THREE.PerspectiveCamera;
    const aspect = state.size.width / state.size.height;
    const vFov = THREE.MathUtils.degToRad(camera.fov);
    const desiredWorldWidth = 2.7;
    const requiredDistance = desiredWorldWidth / (2 * Math.tan(vFov / 2) * aspect);
    camera.position.z = Math.max(4.4, requiredDistance);

    // ---- phase windows -------------------------------------------------
    const pRotate = scroll.range(0.04, 0.38); // card does its big 3D turn
    const pApproach = scroll.range(0.38, 0.18); // phone travels in
    const pLight = scroll.range(0.5, 0.14); // screen flashes on
    const pFace = scroll.range(0.58, 0.22); // phone squares up to viewer
    const pOpen = scroll.range(0.74, 0.26); // app UI takes over
    const pCardExit = scroll.range(0.46, 0.26);
    const pCardFade = scroll.range(0.58, 0.16);

    // ---- card ------------------------------------------------------------
    const card = cardRef.current;
    if (card?.group) {
      const idleY = Math.sin(t * 0.4) * 0.05;
      const idleX = Math.sin(t * 0.55) * 0.025;
      const idleFloat = Math.sin(t * 0.7) * 0.03;

      card.group.rotation.y = idleY + pRotate * Math.PI * 3;
      card.group.rotation.x = idleX * (1 - pCardExit);

      const exit = clamp01(pCardExit);
      card.group.position.x = lerp(0, -1.5, exit);
      card.group.position.z = lerp(0, -0.9, exit);
      card.group.position.y = STAGE_Y + idleFloat * (1 - exit) + lerp(0, 0.15, exit);
      const scale = lerp(1, 0.45, exit);
      card.group.scale.setScalar(scale);

      setOpacity(card.materials, 1 - clamp01(pCardFade));
    }

    // ---- phone -------------------------------------------------------
    const phone = phoneRef.current;
    if (phone?.group) {
      const startPos = new THREE.Vector3(1.9, -3.4 + STAGE_Y, 0.1);
      const scanPos = new THREE.Vector3(0.5, 0.05 + STAGE_Y, 0.95);
      const facePos = new THREE.Vector3(0, -0.02 + STAGE_Y, 1.35);
      const openPos = new THREE.Vector3(0, STAGE_Y * 0.4, 2.35);

      const startRot = new THREE.Euler(0.55, -0.65, 0.12);
      const scanRot = new THREE.Euler(0.12, -0.32, -0.04);
      const faceRot = new THREE.Euler(0, 0, 0);

      const approach = clamp01(pApproach);
      const face = clamp01(pFace);
      const open = clamp01(pOpen);

      // position: start -> scan -> face -> open (sequential blends)
      const pos = new THREE.Vector3().copy(startPos).lerp(scanPos, approach);
      pos.lerp(facePos, face);
      pos.lerp(openPos, open);
      phone.group.position.copy(pos);

      const rot = new THREE.Euler(
        lerp(lerp(startRot.x, scanRot.x, approach), faceRot.x, face),
        lerp(lerp(startRot.y, scanRot.y, approach), faceRot.y, face),
        lerp(lerp(startRot.z, scanRot.z, approach), faceRot.z, face)
      );
      phone.group.rotation.copy(rot);

      const scaleBase = lerp(lerp(0.5, 0.85, approach), 1.3, face);
      const scale = lerp(scaleBase, 2.5, open);
      phone.group.scale.setScalar(scale);

      const uiIn = clamp01(scroll.range(0.64, 0.14));
      const screenFade = clamp01(scroll.range(0.6, 0.12));

      if (phone.screenMaterial) {
        const light = clamp01(pLight);
        phone.screenMaterial.emissiveIntensity = lerp(0.05, 0.85, light) * (1 - screenFade);
        phone.screenMaterial.opacity = 1 - screenFade * 0.95;
      }

      if (phone.glowMaterial) {
        const light = clamp01(pLight);
        phone.glowMaterial.opacity = lerp(0, 0.85, light) * (1 - screenFade * 0.85);
      }

      if (phone.htmlWrapper) {
        phone.htmlWrapper.style.opacity = String(uiIn);
      }
    }

    void delta;
  });

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[2.2, 2.6, 3]}
        intensity={1.6}
        color="#fff3d6"
        castShadow
      />
      <directionalLight position={[-2.5, -1, -2]} intensity={0.4} color="#8fb4ff" />
      <pointLight position={[-1.2, 1.4, 1.6]} intensity={0.5} color="#c8a24c" />

      <Card ref={cardRef} />
      <Phone ref={phoneRef} />

      <ContactShadows
        position={[0, -0.85 + STAGE_Y, 0]}
        opacity={0.45}
        scale={6}
        blur={2.6}
        far={2}
        resolution={512}
        color="#0b0906"
      />
    </>
  );
}
