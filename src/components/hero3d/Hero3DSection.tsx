"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { Scene } from "./Scene";
import { HeroStaticFallback } from "./HeroStaticFallback";

// This component is always loaded client-only (see Hero3DLoader's
// dynamic(..., { ssr: false })), so it's safe to touch the DOM in these
// lazy initializers instead of deferring the first read to an effect.
function useSupportsWebGL() {
  const [supported] = useState(() => {
    try {
      const canvas = document.createElement("canvas");
      return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
    } catch {
      return false;
    }
  });
  return supported;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function Hero3DSection() {
  const progress = useMotionValue(0);
  const webgl = useSupportsWebGL();
  const reducedMotion = usePrefersReducedMotion();

  const introOpacity = useTransform(progress, [0, 0.03, 0.09], [1, 1, 0]);
  const introY = useTransform(progress, [0, 0.09], [0, -18]);

  const rotateOpacity = useTransform(progress, [0.07, 0.13, 0.33, 0.39], [0, 1, 1, 0]);
  const rotateY = useTransform(progress, [0.07, 0.39], [18, -18]);

  const scanOpacity = useTransform(progress, [0.4, 0.47, 0.64, 0.71], [0, 1, 1, 0]);
  const scanY = useTransform(progress, [0.4, 0.71], [18, -18]);

  const handoffOpacity = useTransform(progress, [0.9, 1], [0, 1]);
  const scrollCueOpacity = useTransform(progress, [0, 0.04], [1, 0]);

  const showFallback = !webgl || reducedMotion;

  if (showFallback) {
    return <HeroStaticFallback />;
  }

  return (
    <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden bg-ink-950 bg-grain">
      <Canvas
        shadows="basic"
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 4.4], fov: 30 }}
        style={{ position: "absolute", inset: 0 }}
      >
        <Suspense fallback={null}>
          <ScrollControls pages={4.2} damping={0.28}>
            <Scene progress={progress} />
          </ScrollControls>
        </Suspense>
      </Canvas>

      {/* ambient vignette so the scene reads as a considered stage, not a floating asset */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_35%,rgba(20,17,13,0.75)_100%)]" />

      <motion.div
        style={{ opacity: introOpacity, y: introY }}
        className="pointer-events-none absolute inset-x-0 top-[6%] z-10 flex flex-col items-center px-6 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-300">
          For agents who&apos;ve earned the introduction
        </p>
        <h1 className="mt-4 max-w-xl font-display text-3xl font-medium leading-[1.1] text-white text-balance sm:text-5xl">
          The last business card you&apos;ll ever reprint.
        </h1>
        <p className="mt-4 max-w-sm text-base leading-relaxed text-stone-300">
          Scroll to watch one card become a living, always-current listings
          page.
        </p>
      </motion.div>

      <motion.div
        style={{ opacity: rotateOpacity, y: rotateY }}
        className="pointer-events-none absolute inset-x-0 top-[6%] z-10 flex flex-col items-center px-6 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-300">
          Front and back, built to be seen
        </p>
        <h2 className="mt-3 max-w-lg font-display text-2xl font-medium text-white text-balance sm:text-3xl">
          Credentials on one side. Proof of business on the other.
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: scanOpacity, y: scanY }}
        className="pointer-events-none absolute inset-x-0 top-[6%] z-10 flex flex-col items-center px-6 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-300">
          No app. No login. Just a scan.
        </p>
        <h2 className="mt-3 max-w-lg font-display text-2xl font-medium text-white text-balance sm:text-3xl">
          Every listing, current the second they open it.
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: handoffOpacity }}
        className="pointer-events-none absolute bottom-8 inset-x-0 z-10 flex justify-center"
      >
        <Link
          href={`/demo/${site.demoAgentSlug}`}
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-brass-400 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-brass-300"
        >
          Open the Full Live Card <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>

      <motion.div
        style={{ opacity: scrollCueOpacity }}
        className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-1.5 text-stone-400"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-stone-400 to-transparent" />
      </motion.div>
    </section>
  );
}
