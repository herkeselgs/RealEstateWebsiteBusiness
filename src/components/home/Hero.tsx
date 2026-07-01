import Link from "next/link";
import { ArrowRight, QrCode, ShieldCheck, Smartphone } from "lucide-react";
import { site } from "@/data/site";
import { jordanEllison } from "@/data/agents/jordan-ellison";
import { ListingPhoto } from "@/components/agent/ListingPhoto";
import { formatPrice } from "@/lib/utils";

const badges = [
  { icon: Smartphone, label: "Works on any phone — no app to download" },
  { icon: QrCode, label: "One QR code for signs, cards & social" },
  { icon: ShieldCheck, label: "Listings updated as they change" },
];

export function Hero() {
  const previewListings = jordanEllison.listings.slice(0, 2);

  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(200,162,76,0.25) 0%, transparent 45%), radial-gradient(circle at 85% 30%, rgba(255,255,255,0.08) 0%, transparent 40%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="inline-flex items-center rounded-full border border-brass-400/30 bg-brass-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brass-300">
            For real estate agents
          </p>
          <h1 className="mt-5 font-display text-4xl font-medium leading-[1.1] text-white sm:text-5xl">
            A business card that&apos;s never out of date.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-stone-300">
            {site.name} turns your bio, credentials, and current listings into
            one link and one QR code — so a client can trust you before they
            ever trust a listing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={`/demo/${site.demoAgentSlug}`}
              className="inline-flex items-center gap-2 rounded-full bg-brass-400 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-brass-300"
            >
              See a Live Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              View Pricing
            </Link>
          </div>

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {badges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-stone-400">
                <Icon className="h-4 w-4 text-brass-300" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-brass-400/10 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-50 shadow-2xl">
            <div className="bg-ink-900 px-6 pb-8 pt-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-brass-300/60 bg-ink-800 font-display text-lg text-brass-300">
                {jordanEllison.headshotInitials}
              </div>
              <p className="mt-3 font-display text-lg text-white">{jordanEllison.name}</p>
              <p className="text-xs text-stone-400">
                {jordanEllison.title} · {jordanEllison.brokerage}
              </p>
            </div>
            <div className="space-y-3 p-4">
              <p className="px-1 text-xs font-semibold uppercase tracking-wide text-stone-400">
                Current Listings
              </p>
              {previewListings.map((listing) => (
                <div
                  key={listing.slug}
                  className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-2"
                >
                  <ListingPhoto theme={listing.photoTheme} className="h-14 w-14 shrink-0 rounded-lg" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink-950">
                      {formatPrice(listing.price)}
                    </p>
                    <p className="truncate text-xs text-stone-500">{listing.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-5 -right-5 flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-950">
              <QrCode className="h-5 w-5 text-brass-300" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-ink-950">Scan to view live</p>
              <p className="text-[11px] text-stone-500">Always current</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
