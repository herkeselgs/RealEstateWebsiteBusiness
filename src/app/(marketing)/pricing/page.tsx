import type { Metadata } from "next";
import { PricingSection } from "@/components/shared/PricingSection";

export const metadata: Metadata = {
  title: "Pricing — Keycard",
  description: "Simple setup fee and monthly retainer pricing for real estate smart cards.",
};

export default function PricingPage() {
  return (
    <div className="pt-10">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brass-600">
          Pricing
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium text-ink-950 sm:text-5xl">
          One fee to build it, one to keep it current
        </h1>
      </div>
      <PricingSection showFaqs />
    </div>
  );
}
