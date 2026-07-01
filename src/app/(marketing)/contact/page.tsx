import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Keycard",
  description: "Get in touch to build your real estate smart card.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-2 md:items-start">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-brass-600">
          Contact
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium text-ink-950">
          Let&apos;s get your card built
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-stone-600">
          Whether we&apos;ve already spoken or you found this site on your
          own, send over a few details and I&apos;ll follow up with a
          timeline and next steps.
        </p>

        <div className="mt-8 space-y-3">
          <a
            href={`mailto:${site.contactEmail}`}
            className="flex items-center gap-3 text-sm font-medium text-stone-700 transition hover:text-ink-950"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100">
              <Mail className="h-4 w-4" />
            </span>
            {site.contactEmail}
          </a>
          <a
            href={`tel:${site.contactPhone.replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-3 text-sm font-medium text-stone-700 transition hover:text-ink-950"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100">
              <Phone className="h-4 w-4" />
            </span>
            {site.contactPhone}
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <ContactForm />
      </div>
    </div>
  );
}
