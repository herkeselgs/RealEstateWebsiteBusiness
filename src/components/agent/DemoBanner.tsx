import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";

export function DemoBanner() {
  return (
    <div className="bg-brass-400 px-6 py-2.5 text-center text-sm font-medium text-ink-950">
      This is a demo card built to show what {site.name} looks like in the
      real world.{" "}
      <Link href="/contact" className="inline-flex items-center gap-1 underline underline-offset-2">
        Build mine <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
