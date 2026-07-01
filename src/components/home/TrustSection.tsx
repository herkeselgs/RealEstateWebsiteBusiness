import { Check, X } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const oldWay = [
  "Sits in a stack of a dozen other agents' cards, then the trash",
  "Shows the listing you sold last spring, not the one you have now",
  "Says nothing about your license, your track record, or who you are",
  "Dead ends at a phone number a stranger has to work up the nerve to dial",
];

const newWay = [
  "One tap opens a page that's unmistakably, professionally yours",
  "Every listing current the day they look — not the day you printed",
  "License, designations, and track record, right up front",
  "A direct line to call, text, or message you — no gatekeeping",
];

export function TrustSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-medium text-ink-950 sm:text-4xl">
          They decide to trust you before they decide to trust the listing.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-stone-600">
          Every agent at the open house hands over a card. The one that gets
          remembered is the one that still means something a week later —
          when the listing&apos;s changed, the price has moved, and yours is the
          only card still telling the truth.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Reveal delay={0.05} className="rounded-2xl border border-stone-200 bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-stone-400">
            The card in the drawer
          </p>
          <ul className="mt-5 space-y-4">
            {oldWay.map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-600">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-stone-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal
          delay={0.15}
          className="rounded-2xl border border-brass-400/40 bg-ink-950 p-8 shadow-lg"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-brass-300">
            The card that&apos;s still working next week
          </p>
          <ul className="mt-5 space-y-4">
            {newWay.map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-200">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brass-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
