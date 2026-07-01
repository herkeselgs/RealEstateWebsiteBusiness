import { FileEdit, QrCode, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: FileEdit,
    title: "We build your card",
    description:
      "Send your bio, headshot, credentials, and branding. We design a polished card page that looks like you — not a template.",
  },
  {
    icon: QrCode,
    title: "You share one link",
    description:
      "Put your QR code and link on signs, physical cards, texts, and social bios. One place, everywhere you show up.",
  },
  {
    icon: RefreshCw,
    title: "We keep it current",
    description:
      "Text or email us your new listings and status changes. We publish the update — your card is never out of date.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-stone-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium text-ink-950 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Three steps, no dashboards to learn, no apps to maintain.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative rounded-2xl bg-white p-8 shadow-sm">
              <span className="font-display text-5xl font-medium text-stone-200">
                0{index + 1}
              </span>
              <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950">
                <step.icon className="h-5 w-5 text-brass-300" />
              </div>
              <h3 className="mt-5 font-display text-xl font-medium text-ink-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
