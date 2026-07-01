import { FileEdit, QrCode, RefreshCw } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const steps = [
  {
    icon: FileEdit,
    title: "We build your card",
    description:
      "Send your bio, headshot, credentials, and branding — the same information you'd hand a client anyway. We design a page built around your name, not a template with your name pasted on it.",
  },
  {
    icon: QrCode,
    title: "You share one link",
    description:
      "The QR code goes on your sign, your card, your open house flyer, your Instagram bio. Every one of them points to the same place, and that place is always right.",
  },
  {
    icon: RefreshCw,
    title: "We keep it current",
    description:
      "New listing, new price, went pending, sold — just tell us. We publish it same day. You spend that time with a client instead of updating a website.",
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
            Three steps. No dashboard to log into, no app to maintain — you
            already have a full-time job.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 0.1}
              className="group relative rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="font-display text-5xl font-medium text-stone-200">
                0{index + 1}
              </span>
              <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 transition group-hover:bg-brass-500">
                <step.icon className="h-5 w-5 text-brass-300 transition group-hover:text-ink-950" />
              </div>
              <h3 className="mt-5 font-display text-xl font-medium text-ink-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
