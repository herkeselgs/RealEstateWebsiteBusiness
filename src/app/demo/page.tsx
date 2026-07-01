import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { agents } from "@/data/agents";
import { AgentAvatar } from "@/components/agent/AgentAvatar";

export const metadata: Metadata = {
  title: "Live Demo Cards — Keycard",
  description: "Browse example smart business cards built with Keycard.",
};

export default function DemoIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-brass-600">
        Demo gallery
      </p>
      <h1 className="mt-3 font-display text-3xl font-medium text-ink-950 sm:text-4xl">
        Live demo cards
      </h1>
      <p className="mt-3 max-w-lg text-stone-600">
        Each card below is a fully working example page, built the same way a
        real agent&apos;s card would be.
      </p>

      <div className="mt-10 space-y-4">
        {agents.map((agent) => (
          <Link
            key={agent.slug}
            href={`/demo/${agent.slug}`}
            className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-brass-300 hover:shadow-md"
          >
            <AgentAvatar initials={agent.headshotInitials} size="md" />
            <div className="min-w-0 flex-1">
              <p className="font-display text-lg font-medium text-ink-950">{agent.name}</p>
              <p className="text-sm text-stone-500">
                {agent.title} · {agent.brokerage}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-stone-400" />
          </Link>
        ))}
      </div>
    </div>
  );
}
