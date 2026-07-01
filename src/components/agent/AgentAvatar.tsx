import { cn } from "@/lib/utils";

export function AgentAvatar({
  initials,
  size = "lg",
  className,
}: {
  initials: string;
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-ink-800 to-ink-950 font-display font-medium text-brass-300 shadow-lg",
        size === "lg" ? "h-32 w-32 text-4xl" : "h-16 w-16 text-xl",
        className
      )}
    >
      {initials}
    </div>
  );
}
