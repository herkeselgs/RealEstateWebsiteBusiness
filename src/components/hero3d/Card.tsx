"use client";

import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import * as THREE from "three";
import { RoundedBox } from "@react-three/drei";
import { jordanEllison } from "@/data/agents/jordan-ellison";
import { site } from "@/data/site";
import { canvasToTexture, createCardBackCanvas, createCardFrontCanvas } from "./textures";

export const CARD_WIDTH = 1.6;
export const CARD_HEIGHT = 1;
const CARD_DEPTH = 0.045;

export interface CardHandle {
  group: THREE.Group | null;
  materials: THREE.Material[];
}

export const Card = forwardRef<CardHandle>(function Card(_props, ref) {
  const groupRef = useRef<THREE.Group>(null);
  const bodyMatRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const frontMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const backMatRef = useRef<THREE.MeshStandardMaterial>(null);

  useImperativeHandle(ref, () => ({
    get group() {
      return groupRef.current;
    },
    get materials() {
      const mats: THREE.Material[] = [];
      if (bodyMatRef.current) mats.push(bodyMatRef.current);
      if (frontMatRef.current) mats.push(frontMatRef.current);
      if (backMatRef.current) mats.push(backMatRef.current);
      return mats;
    },
  }));

  const { frontTexture, backTexture } = useMemo(() => {
    const url = `${site.url}/demo/${jordanEllison.slug}`;
    return {
      frontTexture: canvasToTexture(createCardFrontCanvas(jordanEllison)),
      backTexture: canvasToTexture(createCardBackCanvas(url)),
    };
  }, []);

  return (
    <group ref={groupRef}>
      <RoundedBox
        args={[CARD_WIDTH, CARD_HEIGHT, CARD_DEPTH]}
        radius={0.045}
        smoothness={6}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          ref={bodyMatRef}
          color="#171310"
          roughness={0.32}
          metalness={0.25}
          clearcoat={1}
          clearcoatRoughness={0.18}
          reflectivity={0.5}
          transparent
        />
      </RoundedBox>

      <mesh position={[0, 0, CARD_DEPTH / 2 + 0.001]}>
        <planeGeometry args={[CARD_WIDTH * 0.985, CARD_HEIGHT * 0.985]} />
        <meshStandardMaterial
          ref={frontMatRef}
          map={frontTexture}
          roughness={0.45}
          metalness={0.08}
          transparent
        />
      </mesh>

      <mesh position={[0, 0, -CARD_DEPTH / 2 - 0.001]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[CARD_WIDTH * 0.985, CARD_HEIGHT * 0.985]} />
        <meshStandardMaterial
          ref={backMatRef}
          map={backTexture}
          roughness={0.45}
          metalness={0.08}
          transparent
        />
      </mesh>
    </group>
  );
});
