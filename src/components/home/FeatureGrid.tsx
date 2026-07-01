import {
  BadgeCheck,
  Inbox,
  ListChecks,
  QrCode,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const features = [
  {
    icon: ListChecks,
    title: "Every listing, actually current",
    description:
      "Active, pending, coming soon — one clean feed that matches your MLS, not a page you built in April and forgot about.",
  },
  {
    icon: BadgeCheck,
    title: "Your credentials, not buried",
    description:
      "License, designations, years in the business — the things a stranger looks for before they decide you're worth a phone call.",
  },
  {
    icon: QrCode,
    title: "One QR code, everywhere",
    description:
      "Yard sign, open house flyer, physical card, Instagram bio — every one of them points to the same living page.",
  },
  {
    icon: Smartphone,
    title: "No app, no friction",
    description:
      "Nothing to download, nothing to log into. A camera and a tap is the entire user manual.",
  },
  {
    icon: Inbox,
    title: "Leads come straight to you",
    description:
      "Every card has a contact form that lands in your inbox — no portal, no lead-buying middleman taking a cut.",
  },
  {
    icon: Sparkles,
    title: "Looks like you paid for it",
    description:
      "Because you did. Custom branding and layout — a page that reads like the caliber of home you actually sell.",
  },
];

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-medium text-ink-950 sm:text-4xl">
          Everything a serious agent&apos;s presence needs
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Reveal
            key={feature.title}
            delay={(index % 3) * 0.08}
            className="group rounded-2xl border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brass-300 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brass-50 transition group-hover:bg-brass-400">
              <feature.icon className="h-5 w-5 text-brass-600 transition group-hover:text-ink-950" />
            </div>
            <h3 className="mt-4 font-display text-lg font-medium text-ink-950">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              {feature.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
