export interface PricingPlan {
  name: string;
  setupFee: number;
  monthlyFee: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Agent Card",
    setupFee: 400,
    monthlyFee: 40,
    description:
      "Everything one agent needs to replace a paper business card with a living one.",
    features: [
      "Custom smart card page (bio, credentials, photo, contact)",
      "Live listings section, updated as your inventory changes",
      "Personal QR code + shareable link",
      "Optimized for mobile — works with any phone camera",
      "Lead capture form routed straight to your inbox",
      "Hosting, maintenance & uptime included",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Team / Brokerage",
    setupFee: 350,
    monthlyFee: 30,
    description:
      "Per-agent pricing for teams of 3+, with shared branding across every card.",
    features: [
      "Everything in Agent Card, per agent",
      "Shared team or brokerage branding",
      "Volume discount on setup and monthly fees",
      "Priority listing updates",
      "One point of contact for billing",
    ],
    cta: "Talk to Us",
  },
];

export const pricingFaqs = [
  {
    question: "What does the monthly fee cover?",
    answer:
      "Hosting, uptime, and listing updates. Send new listings, price changes, or status updates (active, pending, sold, open house) whenever they happen, and your card is updated — usually within one business day.",
  },
  {
    question: "How do I update my listings?",
    answer:
      "Just text, email, or send a quick form submission with the details and photos. No logins, no dashboards to learn — you keep selling houses, we keep your page current.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. The monthly retainer is month-to-month with no long-term contract. The one-time setup fee covers building your card.",
  },
  {
    question: "How is this different from a Linktree or a plain website?",
    answer:
      "Keycard is purpose-built for real estate: it's designed around what actually builds trust with a buyer or renter — your credentials front and center, and listings that are always current, not a static page from six months ago.",
  },
];
