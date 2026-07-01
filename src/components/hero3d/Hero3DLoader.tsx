"use client";

import dynamic from "next/dynamic";
import { HeroStaticFallback } from "./HeroStaticFallback";

const Hero3DSection = dynamic(
  () => import("./Hero3DSection").then((mod) => mod.Hero3DSection),
  { ssr: false, loading: () => <HeroStaticFallback /> }
);

export function Hero3DLoader() {
  return <Hero3DSection />;
}
