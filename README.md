# Keycard — Smart Business Cards for Real Estate Agents

Marketing site and product demo for **Keycard**: a digital business card + live
listings page for real estate agents. One link and one QR code that always
shows an agent's bio, credentials, and current listings.

This is the actual site used to pitch the product to agents — not a demo for
a client.

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- [`qrcode`](https://www.npmjs.com/package/qrcode) for generating live QR codes on demo card pages

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/
    (marketing)/        Home, /pricing, /contact — shared header/footer
    demo/                /demo (gallery) and /demo/[slug] (live agent card)
    api/contact/         POST endpoint the contact form submits to
  components/
    home/                Homepage sections (Hero, HowItWorks, DemoShowcase, ...)
    agent/                Agent card page building blocks (hero, listings, QR share card)
    shared/               Reusable pieces (ContactForm, PricingSection, Logo)
    layout/               Header / Footer for marketing pages
  data/
    agents/               One file per agent — see jordan-ellison.ts
    pricing.ts             Setup fee / monthly retainer + FAQ copy
    site.ts                 Brand name, contact info, social links
  types/agent.ts           Agent & Listing types
```

## Adding a real agent

Duplicate `src/data/agents/jordan-ellison.ts`, fill in real details, and
register the new file in `src/data/agents/index.ts`. That's it — no page
code to touch. The new card is live at `/demo/<slug>`.

In practice you'd likely rename the route from `/demo/[slug]` to something
like `/card/[slug]` once you're hosting real clients rather than only demos;
the data pattern stays the same either way.

## Editing pricing & branding

- Setup fee / monthly retainer and feature lists: `src/data/pricing.ts`
- Business name, tagline, contact email/phone, social links: `src/data/site.ts`

## Wiring up the contact form

The form posts to `src/app/api/contact/route.ts`, which currently logs the
submission and returns `{ ok: true }`. Replace the body of that handler with
a call to Formspree, Resend, or another email service — the client-side form
doesn't need to change.

## Deploying

Push to a Git provider and import the repo in [Vercel](https://vercel.com/new).
No environment variables are required for the current feature set.
