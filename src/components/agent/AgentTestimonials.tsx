import { Quote } from "lucide-react";
import type { Testimonial } from "@/types/agent";
import { Reveal } from "@/components/shared/Reveal";

export function AgentTestimonials({ testimonials }: { testimonials: Testimonial[] }) {
  if (testimonials.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-6 py-4">
      <Reveal>
        <h2 className="font-display text-2xl font-medium text-ink-950">What clients say</h2>
      </Reveal>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.author} delay={index * 0.08}>
            <blockquote className="h-full rounded-2xl border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
              <Quote className="h-5 w-5 text-brass-400" />
              <p className="mt-3 text-sm leading-relaxed text-stone-700">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm">
                <span className="font-semibold text-ink-950">{testimonial.author}</span>
                <span className="text-stone-500"> — {testimonial.context}</span>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
