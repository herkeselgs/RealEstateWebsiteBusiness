import { Building2, Home, Landmark, TreePine, Warehouse } from "lucide-react";
import type { Listing } from "@/types/agent";
import { cn } from "@/lib/utils";

const THEME_STYLES: Record<Listing["photoTheme"], { gradient: string; Icon: typeof Home }> = {
  modern: { gradient: "from-slate-700 via-slate-600 to-slate-500", Icon: Home },
  craftsman: { gradient: "from-amber-800 via-amber-700 to-amber-600", Icon: TreePine },
  condo: { gradient: "from-sky-800 via-sky-700 to-sky-500", Icon: Building2 },
  colonial: { gradient: "from-emerald-800 via-emerald-700 to-emerald-600", Icon: Landmark },
  ranch: { gradient: "from-stone-700 via-stone-600 to-stone-500", Icon: Warehouse },
};

export function ListingPhoto({
  theme,
  className,
  photoCount = 8,
}: {
  theme: Listing["photoTheme"];
  className?: string;
  photoCount?: number;
}) {
  const { gradient, Icon } = THEME_STYLES[theme];

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        gradient,
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 0%, transparent 35%), radial-gradient(circle at 80% 70%, white 0%, transparent 40%)",
        }}
      />
      <Icon className="h-10 w-10 text-white/70" strokeWidth={1.5} />
      <span className="absolute bottom-2 right-2 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
        1 / {photoCount} photos
      </span>
    </div>
  );
}
