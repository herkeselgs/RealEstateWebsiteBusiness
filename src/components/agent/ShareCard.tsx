import QRCode from "qrcode";
import { CopyLinkButton } from "@/components/agent/CopyLinkButton";

export async function ShareCard({ url }: { url: string }) {
  const qrDataUrl = await QRCode.toDataURL(url, {
    margin: 1,
    width: 240,
    color: { dark: "#0b0f14", light: "#ffffff" },
  });

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-sm">
      <p className="font-display text-xl font-medium text-ink-950">Share this card</p>
      <p className="mx-auto mt-2 max-w-xs text-sm text-stone-500">
        Put this QR code on a yard sign, an open house flyer, or a physical
        card. It always points to the current version of this page.
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={qrDataUrl}
        alt="QR code linking to this card"
        className="mx-auto mt-6 h-40 w-40 rounded-xl border border-stone-100"
      />
      <p className="mt-4 truncate rounded-lg bg-stone-100 px-3 py-2 text-xs text-stone-500">
        {url}
      </p>
      <div className="mt-4">
        <CopyLinkButton url={url} />
      </div>
    </div>
  );
}
