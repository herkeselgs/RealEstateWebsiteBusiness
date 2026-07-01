import QRCode from "qrcode";
import * as THREE from "three";
import type { Agent } from "@/types/agent";

const CANVAS_W = 1024;
const CANVAS_H = 640;

function baseCard(ctx: CanvasRenderingContext2D) {
  const grad = ctx.createLinearGradient(0, 0, CANVAS_W, CANVAS_H);
  grad.addColorStop(0, "#1c1712");
  grad.addColorStop(0.55, "#14110d");
  grad.addColorStop(1, "#0c0a08");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

  // faint diagonal sheen
  const sheen = ctx.createLinearGradient(0, 0, CANVAS_W, CANVAS_H * 0.6);
  sheen.addColorStop(0, "rgba(255,255,255,0.05)");
  sheen.addColorStop(0.5, "rgba(255,255,255,0)");
  sheen.addColorStop(1, "rgba(255,255,255,0.03)");
  ctx.fillStyle = sheen;
  ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

  // brass inset border
  ctx.strokeStyle = "rgba(200,162,76,0.55)";
  ctx.lineWidth = 3;
  const inset = 22;
  roundRect(ctx, inset, inset, CANVAS_W - inset * 2, CANVAS_H - inset * 2, 28);
  ctx.stroke();
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export function createCardFrontCanvas(agent: Agent): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = CANVAS_W;
  canvas.height = CANVAS_H;
  const ctx = canvas.getContext("2d")!;
  baseCard(ctx);

  // monogram roundel
  const cx = 110;
  const cy = 120;
  ctx.beginPath();
  ctx.arc(cx, cy, 56, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(217,185,106,0.8)";
  ctx.lineWidth = 2.5;
  ctx.stroke();
  ctx.fillStyle = "#e8ca8e";
  ctx.font = "600 44px Georgia, serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(agent.headshotInitials, cx, cy + 2);

  // name
  ctx.textAlign = "left";
  ctx.fillStyle = "#f7f4ee";
  ctx.font = "500 56px Georgia, 'Times New Roman', serif";
  ctx.fillText(agent.name, 60, 300);

  // title / brokerage
  ctx.font = "400 24px Arial, sans-serif";
  ctx.fillStyle = "rgba(232,202,142,0.9)";
  ctx.fillText(`${agent.title.toUpperCase()} · ${agent.brokerage.toUpperCase()}`, 60, 340);

  // rule
  ctx.strokeStyle = "rgba(217,185,106,0.4)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(60, 372);
  ctx.lineTo(420, 372);
  ctx.stroke();

  // license / footer
  ctx.font = "400 19px Arial, sans-serif";
  ctx.fillStyle = "rgba(247,244,238,0.55)";
  ctx.fillText(agent.license, 60, 410);
  ctx.fillText(agent.location, 60, 438);

  // brand wordmark bottom-right
  ctx.textAlign = "right";
  ctx.font = "600 22px Arial, sans-serif";
  ctx.fillStyle = "rgba(217,185,106,0.85)";
  ctx.fillText("KEYCARD", CANVAS_W - 60, CANVAS_H - 56);

  return canvas;
}

export function createCardBackCanvas(url: string): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = CANVAS_W;
  canvas.height = CANVAS_H;
  const ctx = canvas.getContext("2d")!;
  baseCard(ctx);

  const qr = QRCode.create(url, { errorCorrectionLevel: "M" });
  const size = qr.modules.size;
  const quiet = 4;
  const boxSize = 340;
  const moduleSize = boxSize / (size + quiet * 2);
  const originX = (CANVAS_W - boxSize) / 2;
  const originY = 96;

  // quiet-zone panel
  ctx.fillStyle = "#f7f4ee";
  roundRect(ctx, originX - 6, originY - 6, boxSize + 12, boxSize + 12, 16);
  ctx.fill();

  ctx.fillStyle = "#14110d";
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (!qr.modules.get(row, col)) continue;
      const x = originX + (col + quiet) * moduleSize;
      const y = originY + (row + quiet) * moduleSize;
      const r = moduleSize * 0.28;
      roundRect(ctx, x, y, moduleSize * 0.94, moduleSize * 0.94, r);
      ctx.fill();
    }
  }

  ctx.textAlign = "center";
  ctx.fillStyle = "#e8ca8e";
  ctx.font = "600 26px Arial, sans-serif";
  ctx.fillText("SCAN TO VIEW LIVE CARD", CANVAS_W / 2, originY + boxSize + 56);
  ctx.font = "400 18px Arial, sans-serif";
  ctx.fillStyle = "rgba(247,244,238,0.5)";
  ctx.fillText("Always current — updated in real time", CANVAS_W / 2, originY + boxSize + 86);

  return canvas;
}

export function createPhoneLockCanvas(): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d")!;

  const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  grad.addColorStop(0, "#1a1512");
  grad.addColorStop(1, "#070504");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const glow = ctx.createRadialGradient(
    canvas.width / 2,
    canvas.height / 2,
    10,
    canvas.width / 2,
    canvas.height / 2,
    canvas.width * 0.6
  );
  glow.addColorStop(0, "rgba(232,202,142,0.35)");
  glow.addColorStop(1, "rgba(232,202,142,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(232,202,142,0.55)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 46, 0, Math.PI * 2);
  ctx.stroke();

  return canvas;
}

export function createGlowSpriteCanvas(): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d")!;
  const glow = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
  glow.addColorStop(0, "rgba(255,244,214,0.9)");
  glow.addColorStop(0.4, "rgba(232,202,142,0.35)");
  glow.addColorStop(1, "rgba(232,202,142,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  return canvas;
}

export function canvasToTexture(canvas: HTMLCanvasElement): THREE.CanvasTexture {
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  return texture;
}
