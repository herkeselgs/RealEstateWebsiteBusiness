import Link from "next/link";
import { Check } from "lucide-react";
import { pricingFaqs, pricingPlans } from "@/data/pricing";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function PricingSection({ showFaqs = false }: { showFaqs?: boolean }) {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-medium text-ink-950 sm:text-4xl">
          Simple, honest pricing
        </h2>
        <p className="mt-4 text-lg text-stone-600">
          One setup fee to build your card, one monthly retainer to keep it
          live. No surprise add-ons.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "flex flex-col rounded-3xl border p-8",
              plan.highlighted
                ? "border-ink-950 bg-ink-950 text-white shadow-xl"
                : "border-stone-200 bg-white"
            )}
          >
            {plan.highlighted ? (
              <span className="mb-4 w-fit rounded-full bg-brass-400 px-3 py-1 text-xs font-semibold text-ink-950">
                Most Popular
              </span>
            ) : null}
            <h3 className="font-display text-2xl font-medium">{plan.name}</h3>
            <p className={cn("mt-2 text-sm", plan.highlighted ? "text-stone-300" : "text-stone-600")}>
              {plan.description}
            </p>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-4xl font-medium">
                {formatPrice(plan.setupFee)}
              </span>
              <span className={cn("text-sm", plan.highlighted ? "text-stone-400" : "text-stone-500")}>
                one-time setup
              </span>
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-display text-2xl font-medium">
                + {formatPrice(plan.monthlyFee)}
              </span>
              <span className={cn("text-sm", plan.highlighted ? "text-stone-400" : "text-stone-500")}>
                / month
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <Check
                    className={cn(
                      "mt-0.5 h-4 w-4 shrink-0",
                      plan.highlighted ? "text-brass-300" : "text-brass-600"
                    )}
                  />
                  <span className={plan.highlighted ? "text-stone-200" : "text-stone-600"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={cn(
                "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition",
                plan.highlighted
                  ? "bg-brass-400 text-ink-950 hover:bg-brass-300"
                  : "bg-ink-950 text-white hover:bg-ink-800"
              )}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      {showFaqs ? (
        <div className="mx-auto mt-20 max-w-3xl">
          <h3 className="text-center font-display text-2xl font-medium text-ink-950">
            Common questions
          </h3>
          <dl className="mt-8 space-y-6">
            {pricingFaqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-stone-200 bg-white p-6">
                <dt className="font-semibold text-ink-950">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-stone-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}
    </section>
  );
}
