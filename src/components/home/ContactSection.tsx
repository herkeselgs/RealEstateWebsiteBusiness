import { ContactForm } from "@/components/shared/ContactForm";
import { Reveal } from "@/components/shared/Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="bg-stone-100 py-20">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-ink-950 sm:text-4xl">
            Let&apos;s build your card
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-stone-600">
            Tell me a bit about your business and your listings, and
            I&apos;ll follow up with next steps and a timeline.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
