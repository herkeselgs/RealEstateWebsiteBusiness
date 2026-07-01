import {
  BadgeCheck,
  Inbox,
  ListChecks,
  QrCode,
  Smartphone,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ListChecks,
    title: "Live listings, always current",
    description:
      "Every active, pending, and coming-soon listing in one clean feed — updated as your business changes.",
  },
  {
    icon: BadgeCheck,
    title: "Credentials up front",
    description:
      "License, designations, years of experience, and specialties — the proof points that build trust fast.",
  },
  {
    icon: QrCode,
    title: "One QR code, everywhere",
    description:
      "Yard signs, open house flyers, physical cards, Instagram bio — all pointing to the same living page.",
  },
  {
    icon: Smartphone,
    title: "Built for a phone camera",
    description:
      "No app to download, no login required. Scan or tap, and the page loads instantly.",
  },
  {
    icon: Inbox,
    title: "Leads land in your inbox",
    description:
      "Every card includes a contact form so interested buyers can reach you directly, without a middleman.",
  },
  {
    icon: Sparkles,
    title: "Looks like you, not a template",
    description:
      "Custom branding, photography, and layout — a page that matches the caliber of the homes you sell.",
  },
];

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-medium text-ink-950 sm:text-4xl">
          Everything a modern real estate presence needs
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-brass-300 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brass-50">
              <feature.icon className="h-5 w-5 text-brass-600" />
            </div>
            <h3 className="mt-4 font-display text-lg font-medium text-ink-950">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
