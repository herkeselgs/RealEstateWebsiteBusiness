import { Hero3DLoader } from "@/components/hero3d/Hero3DLoader";
import { TrustSection } from "@/components/home/TrustSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { DemoShowcase } from "@/components/home/DemoShowcase";
import { PricingSection } from "@/components/shared/PricingSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero3DLoader />
      <TrustSection />
      <HowItWorks />
      <DemoShowcase />
      <FeatureGrid />
      <PricingSection />
      <ContactSection />
    </>
  );
}
