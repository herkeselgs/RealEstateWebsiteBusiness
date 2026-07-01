import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { jordanEllison } from "@/data/agents/jordan-ellison";
import { ListingCard } from "@/components/agent/ListingCard";
import { AgentAvatar } from "@/components/agent/AgentAvatar";

export function DemoShowcase() {
  const listings = jordanEllison.listings.slice(0, 3);

  return (
    <section className="bg-ink-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brass-300">
            See it in action
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium text-white sm:text-4xl">
            Click around. It&apos;s a real, working page.
          </h2>
          <p className="mt-4 text-lg text-stone-300">
            {jordanEllison.name} isn&apos;t a real agent, but this page is
            built exactly the way yours would be — same listings feed, same
            contact form, same QR code on the back. Open it on your phone.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-ink-900 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:text-left">
            <AgentAvatar initials={jordanEllison.headshotInitials} size="md" />
            <div>
              <p className="font-display text-xl font-medium text-white">
                {jordanEllison.name}
              </p>
              <p className="text-sm text-stone-400">
                {jordanEllison.title} · {jordanEllison.brokerage}
              </p>
            </div>
            <Link
              href={`/demo/${jordanEllison.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-brass-400 px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-brass-300 sm:ml-auto"
            >
              Explore the Live Card <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <ListingCard key={listing.slug} listing={listing} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
