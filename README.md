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
- [`react-three-fiber` / `drei`](https://docs.pmnd.rs/react-three-fiber) for the scroll-driven 3D hero
- [`framer-motion`](https://www.framer.com/motion/) for scroll-linked captions and scroll-reveal polish

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
    hero3d/                Scroll-driven 3D hero (Canvas, Scene, Card, Phone, static fallback)
    home/                  Homepage sections (HowItWorks, DemoShowcase, ...)
    agent/                Agent card page building blocks (hero, listings, QR share card)
    shared/               Reusable pieces (ContactForm, PricingSection, Reveal, Logo)
    layout/               Header / Footer for marketing pages
  data/
    agents/               One file per agent — see jordan-ellison.ts
    pricing.ts             Setup fee / monthly retainer + FAQ copy
    site.ts                 Brand name, contact info, social links
  types/agent.ts           Agent & Listing types
```

## The 3D hero

`src/components/hero3d/Hero3DSection.tsx` drives the scroll sequence using
`@react-three/drei`'s `ScrollControls` — the card and phone are plain
Three.js primitives with canvas-generated textures (including a real,
scannable QR code), not imported 3D models. It's loaded via
`next/dynamic({ ssr: false })` so the ~900KB three.js/R3F bundle never
ships to `/pricing`, `/contact`, or the demo page. Users with
`prefers-reduced-motion` or no WebGL support get `HeroStaticFallback.tsx`
instead — a static, non-3D version of the same pitch.

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
