import type { Agent } from "@/types/agent";
import { jordanEllison } from "./jordan-ellison";

// Add a new agent by creating a data file (see jordan-ellison.ts) and
// registering it here — no page or route code needs to change.
export const agents: Agent[] = [jordanEllison];

export function getAgent(slug: string): Agent | undefined {
  return agents.find((agent) => agent.slug === slug);
}

export function getAllAgentSlugs(): string[] {
  return agents.map((agent) => agent.slug);
}
