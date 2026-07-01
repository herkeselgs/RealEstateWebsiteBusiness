import { Bath, BedDouble, Ruler } from "lucide-react";
import type { Listing } from "@/types/agent";
import { ListingPhoto } from "@/components/agent/ListingPhoto";
import { cn, formatCompactNumber, formatPrice } from "@/lib/utils";

const STATUS_STYLES: Record<Listing["status"], { label: string; className: string }> = {
  active: { label: "Active", className: "bg-emerald-700 text-white" },
  pending: { label: "Pending", className: "bg-clay-500 text-white" },
  "coming-soon": { label: "Coming Soon", className: "bg-ink-800 text-white" },
  "open-house": { label: "Open House", className: "bg-brass-500 text-ink-950" },
};

export function ListingCard({ listing }: { listing: Listing }) {
  const status = STATUS_STYLES[listing.status];

  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <ListingPhoto
          theme={listing.photoTheme}
          className="h-48 w-full transition duration-500 group-hover:scale-105"
        />
        <span
          className={cn(
            "absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm",
            status.className
          )}
        >
          {status.label}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-2">
          <p className="font-display text-xl font-medium text-ink-950">
            {formatPrice(listing.price)}
          </p>
        </div>
        <p className="mt-1 text-sm font-medium text-stone-700">
          {listing.address}
        </p>
        <p className="text-sm text-stone-500">
          {listing.city}, {listing.state} {listing.zip}
        </p>

        <div className="mt-3 flex items-center gap-4 text-sm text-stone-600">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-stone-400" /> {listing.beds} bd
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-stone-400" /> {listing.baths} ba
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler className="h-4 w-4 text-stone-400" /> {formatCompactNumber(listing.sqft)} sqft
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          {listing.description}
        </p>

        {listing.openHouseNote ? (
          <p className="mt-3 rounded-lg bg-brass-50 px-3 py-2 text-xs font-semibold text-brass-600">
            {listing.openHouseNote}
          </p>
        ) : null}
      </div>
    </article>
  );
}
