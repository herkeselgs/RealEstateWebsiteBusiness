import Link from "next/link";
import { KeyRound } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({ dark = false, href = "/" }: { dark?: boolean; href?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 font-display text-lg font-medium tracking-tight",
        dark ? "text-white" : "text-ink-950"
      )}
    >
      <span
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full",
          dark ? "bg-brass-400 text-ink-950" : "bg-ink-950 text-brass-300"
        )}
      >
        <KeyRound className="h-4 w-4" strokeWidth={2.25} />
      </span>
      {site.name}
    </Link>
  );
}
