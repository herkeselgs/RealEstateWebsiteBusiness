import { DemoBanner } from "@/components/agent/DemoBanner";
import { DemoFooter } from "@/components/agent/DemoFooter";

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-stone-100">
      <DemoBanner />
      <div className="flex-1">{children}</div>
      <DemoFooter />
    </div>
  );
}
