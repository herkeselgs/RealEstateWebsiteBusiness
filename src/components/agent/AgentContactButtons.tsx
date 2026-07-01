import { Mail, MessageSquare, Phone } from "lucide-react";
import type { Agent } from "@/types/agent";

export function AgentContactButtons({ agent }: { agent: Agent }) {
  const digits = agent.phone.replace(/[^\d+]/g, "");

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
      <a
        href={`tel:${digits}`}
        className="inline-flex items-center gap-2 rounded-full bg-brass-400 px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-brass-300"
      >
        <Phone className="h-4 w-4" /> Call
      </a>
      <a
        href={`sms:${digits}`}
        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
      >
        <MessageSquare className="h-4 w-4" /> Text
      </a>
      <a
        href={`mailto:${agent.email}`}
        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
      >
        <Mail className="h-4 w-4" /> Email
      </a>
    </div>
  );
}
