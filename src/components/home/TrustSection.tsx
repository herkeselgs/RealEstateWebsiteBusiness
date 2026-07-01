import { Check, X } from "lucide-react";

const oldWay = [
  "Sits in a drawer or gets thrown away",
  "Listings go stale the day they're printed",
  "No credentials, no reviews, no proof",
  "Dead ends at a phone number",
];

const newWay = [
  "One tap opens a full professional profile",
  "Listings update the moment they change",
  "Credentials, designations & reviews up front",
  "Direct path to call, text, or send a message",
];

export function TrustSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-medium text-ink-950 sm:text-4xl">
          Real estate runs on trust — before it runs on listings.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-stone-600">
          A buyer or renter decides whether to trust you before they decide to
          trust anything you&apos;re showing them. A paper card that goes
          stale the day it&apos;s printed doesn&apos;t help. A living page
          that&apos;s always current does.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-stone-200 bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-stone-400">
            The paper business card
          </p>
          <ul className="mt-5 space-y-4">
            {oldWay.map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-600">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-stone-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-brass-400/40 bg-ink-950 p-8 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-wide text-brass-300">
            The smart card
          </p>
          <ul className="mt-5 space-y-4">
            {newWay.map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-200">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brass-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
