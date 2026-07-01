import { Award, MapPin } from "lucide-react";
import type { Agent } from "@/types/agent";
import { AgentAvatar } from "@/components/agent/AgentAvatar";
import { AgentContactButtons } from "@/components/agent/AgentContactButtons";

export function AgentHero({ agent }: { agent: Agent }) {
  return (
    <section className="bg-ink-950">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
          <AgentAvatar initials={agent.headshotInitials} />
          <div className="flex-1">
            <h1 className="font-display text-3xl font-medium text-white sm:text-4xl">
              {agent.name}
            </h1>
            <p className="mt-1 text-brass-300">
              {agent.title} · {agent.brokerage}
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-stone-400 sm:justify-start">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> {agent.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5" /> {agent.license}
              </span>
              <span>{agent.yearsExperience} years experience</span>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
              {agent.designations.map((designation) => (
                <span
                  key={designation}
                  className="rounded-full border border-brass-400/30 bg-brass-400/10 px-3 py-1 text-xs font-semibold text-brass-300"
                >
                  {designation}
                </span>
              ))}
            </div>

            <p className="mt-5 max-w-2xl text-stone-300">{agent.bio}</p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
              {agent.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-stone-300"
                >
                  {specialty}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <AgentContactButtons agent={agent} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
