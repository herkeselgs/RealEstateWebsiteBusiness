import Link from "next/link";
import { KeyRound } from "lucide-react";
import { site } from "@/data/site";

export function DemoFooter() {
  return (
    <footer className="border-t border-stone-200 bg-white py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 px-6 text-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-ink-950"
        >
          <KeyRound className="h-4 w-4" />
          Powered by {site.name}
        </Link>
        <p className="text-xs text-stone-400">
          Smart cards for real estate agents — every listing, always current.
        </p>
      </div>
    </footer>
  );
}
