import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAgent, getAllAgentSlugs } from "@/data/agents";
import { site } from "@/data/site";
import { AgentHero } from "@/components/agent/AgentHero";
import { ListingCard } from "@/components/agent/ListingCard";
import { AgentTestimonials } from "@/components/agent/AgentTestimonials";
import { ShareCard } from "@/components/agent/ShareCard";
import { ContactForm } from "@/components/shared/ContactForm";
import { Reveal } from "@/components/shared/Reveal";

type PageParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllAgentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgent(slug);
  if (!agent) return {};

  return {
    title: `${agent.name} — ${agent.brokerage}`,
    description: agent.bio,
  };
}

export default async function AgentDemoPage({ params }: PageParams) {
  const { slug } = await params;
  const agent = getAgent(slug);
  if (!agent) notFound();

  const cardUrl = `${site.url}/demo/${agent.slug}`;

  return (
    <div>
      <AgentHero agent={agent} />

      <section className="mx-auto max-w-4xl px-6 py-14">
        <Reveal>
          <h2 className="font-display text-2xl font-medium text-ink-950">
            Current Listings
          </h2>
          <p className="mt-1 text-sm text-stone-500">
            {agent.listings.length} listings · updated as they change
          </p>
        </Reveal>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {agent.listings.map((listing, index) => (
            <Reveal key={listing.slug} delay={(index % 2) * 0.08}>
              <ListingCard listing={listing} />
            </Reveal>
          ))}
        </div>
      </section>

      <AgentTestimonials testimonials={agent.testimonials} />

      <section className="mx-auto grid max-w-4xl gap-6 px-6 py-14 sm:grid-cols-2">
        <Reveal>
          <ShareCard url={cardUrl} />
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
          <p className="font-display text-xl font-medium text-ink-950">
            Get in touch with {agent.name.split(" ")[0]}
          </p>
          <p className="mt-2 text-sm text-stone-500">
            Interested in one of these homes, or want to talk about buying or
            selling? Send a message below.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
