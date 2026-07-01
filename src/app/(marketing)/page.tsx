import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { DemoShowcase } from "@/components/home/DemoShowcase";
import { PricingSection } from "@/components/shared/PricingSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <HowItWorks />
      <DemoShowcase />
      <FeatureGrid />
      <PricingSection />
      <ContactSection />
    </>
  );
}
