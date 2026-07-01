import type { Listing } from "@/types/agent";
import { cn } from "@/lib/utils";

const THEME_ACCENT: Record<Listing["photoTheme"], string> = {
  modern: "rgba(143,180,255,0.22)",
  craftsman: "rgba(193,122,88,0.28)",
  condo: "rgba(200,162,76,0.24)",
  colonial: "rgba(120,170,140,0.22)",
  ranch: "rgba(200,162,76,0.16)",
};

function HouseIllustration({ theme, className }: { theme: Listing["photoTheme"]; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

  switch (theme) {
    case "craftsman":
      return (
        <svg viewBox="0 0 160 100" className={className} {...common}>
          <path d="M20 92V52L80 20l60 32v40" />
          <path d="M30 92V60h100v32" />
          <path d="M64 92V66h32v26" />
          <path d="M20 52 80 20l60 32" />
          <path d="M46 60V44h14v16" />
          <path d="M100 60V44h14v16" />
        </svg>
      );
    case "condo":
      return (
        <svg viewBox="0 0 160 100" className={className} {...common}>
          <path d="M36 92V16h88v76" />
          <path d="M36 92h88" />
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2].map((col) => (
              <rect key={`${row}-${col}`} x={50 + col * 24} y={28 + row * 16} width="12" height="10" />
            ))
          )}
        </svg>
      );
    case "colonial":
      return (
        <svg viewBox="0 0 160 100" className={className} {...common}>
          <path d="M24 92V34l56-20 56 20v58" />
          <path d="M24 34h112" />
          <path d="M72 92V60h16v32" />
          <rect x="38" y="46" width="14" height="14" />
          <rect x="108" y="46" width="14" height="14" />
          <path d="M64 24h32" />
        </svg>
      );
    case "ranch":
      return (
        <svg viewBox="0 0 160 100" className={className} {...common}>
          <path d="M14 92V58l30-18h80l22 18v34" />
          <path d="M14 58h130" />
          <rect x="34" y="66" width="20" height="14" />
          <path d="M74 92V70h18v22" />
          <rect x="112" y="66" width="20" height="14" />
        </svg>
      );
    case "modern":
    default:
      return (
        <svg viewBox="0 0 160 100" className={className} {...common}>
          <path d="M18 92V50h60V26h64v66" />
          <path d="M18 50h60" />
          <rect x="30" y="60" width="34" height="24" />
          <path d="M98 40h48" />
          <rect x="106" y="50" width="16" height="14" />
          <rect x="128" y="50" width="16" height="14" />
        </svg>
      );
  }
}

export function ListingPhoto({
  theme,
  className,
  photoCount = 8,
}: {
  theme: Listing["photoTheme"];
  className?: string;
  photoCount?: number;
}) {
  return (
    <div
      className={cn(
        "bg-grain relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-ink-900 via-ink-950 to-ink-950",
        className
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 25%, ${THEME_ACCENT[theme]} 0%, transparent 55%)`,
        }}
      />
      <HouseIllustration theme={theme} className="relative h-12 w-auto text-brass-200/80" />
      <span className="absolute bottom-2 right-2 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-medium text-white/90 backdrop-blur-sm">
        1 / {photoCount} photos
      </span>
    </div>
  );
}
