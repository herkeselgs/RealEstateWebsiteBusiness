import { jordanEllison } from "@/data/agents/jordan-ellison";
import { formatPrice } from "@/lib/utils";

const THEME_GRADIENTS: Record<string, string> = {
  modern: "linear-gradient(135deg,#334155,#64748b)",
  craftsman: "linear-gradient(135deg,#78350f,#b45309)",
  condo: "linear-gradient(135deg,#075985,#0284c7)",
  colonial: "linear-gradient(135deg,#065f46,#059669)",
  ranch: "linear-gradient(135deg,#44403c,#78716c)",
};

export function PhoneScreenContent() {
  const listings = jordanEllison.listings.slice(0, 2);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0f0c09",
        borderRadius: 22,
        overflow: "hidden",
        fontFamily: "Georgia, serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          background: "linear-gradient(160deg,#1c1712,#0f0c09)",
          padding: "22px 18px 16px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            margin: "0 auto 10px",
            borderRadius: "9999px",
            border: "2px solid rgba(217,185,106,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#e8ca8e",
            fontSize: 18,
          }}
        >
          {jordanEllison.headshotInitials}
        </div>
        <div style={{ color: "#f7f4ee", fontSize: 17 }}>{jordanEllison.name}</div>
        <div style={{ color: "rgba(232,202,142,0.85)", fontSize: 11, fontFamily: "Arial, sans-serif", marginTop: 2 }}>
          {jordanEllison.title} · {jordanEllison.brokerage}
        </div>
      </div>

      <div style={{ padding: "14px 14px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        <div style={{ color: "rgba(247,244,238,0.5)", fontSize: 10, fontFamily: "Arial, sans-serif", letterSpacing: 1 }}>
          CURRENT LISTINGS
        </div>
        {listings.map((listing) => (
          <div
            key={listing.slug}
            style={{
              display: "flex",
              gap: 10,
              background: "#161210",
              borderRadius: 12,
              padding: 8,
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 9,
                flexShrink: 0,
                background: THEME_GRADIENTS[listing.photoTheme],
              }}
            />
            <div style={{ minWidth: 0 }}>
              <div style={{ color: "#f7f4ee", fontSize: 13 }}>{formatPrice(listing.price)}</div>
              <div
                style={{
                  color: "rgba(247,244,238,0.55)",
                  fontSize: 10,
                  fontFamily: "Arial, sans-serif",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {listing.address}
              </div>
            </div>
          </div>
        ))}

        <div style={{ marginTop: "auto" }}>
          <div
            style={{
              background: "linear-gradient(100deg,#ab7f36,#ead29b,#c8a24c)",
              color: "#14110d",
              borderRadius: 9999,
              textAlign: "center",
              padding: "10px 0",
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
              fontSize: 11,
            }}
          >
            View Full Card
          </div>
        </div>
      </div>
    </div>
  );
}
