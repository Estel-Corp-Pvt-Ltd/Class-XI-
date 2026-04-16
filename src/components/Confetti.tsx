"use client";

import { useEffect, useRef } from "react";

type Piece = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vrot: number;
  size: number;
  color: string;
  shape: "rect" | "circle" | "triangle";
};

const COLORS = [
  "#ff6b6b",
  "#6ed3b3",
  "#6ab7ff",
  "#ffd36b",
  "#b794f6",
  "#ff8fa3",
];

export default function Confetti({ active, duration = 2800 }: { active: boolean; duration?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const piecesRef = useRef<Piece[]>([]);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = window.innerWidth;
    const H = window.innerHeight;
    const count = Math.min(180, Math.floor(W / 6));
    const shapes: Piece["shape"][] = ["rect", "circle", "triangle"];

    piecesRef.current = Array.from({ length: count }).map(() => ({
      x: W / 2 + (Math.random() - 0.5) * W * 0.4,
      y: H * 0.35 + (Math.random() - 0.5) * 40,
      vx: (Math.random() - 0.5) * 9,
      vy: -(Math.random() * 8 + 6),
      rot: Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 8 + 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));

    let start: number | null = null;

    const loop = (t: number) => {
      if (start === null) start = t;
      const elapsed = t - start;
      ctx.clearRect(0, 0, W, H);
      piecesRef.current.forEach((p) => {
        p.vy += 0.22;
        p.vx *= 0.995;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vrot;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.strokeStyle = "#1a1a1a";
        ctx.lineWidth = 1;
        if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, (p.size * 2) / 3);
          ctx.strokeRect(-p.size / 2, -p.size / 3, p.size, (p.size * 2) / 3);
        } else if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -p.size / 2);
          ctx.lineTo(p.size / 2, p.size / 2);
          ctx.lineTo(-p.size / 2, p.size / 2);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
        ctx.restore();
      });

      if (elapsed < duration) {
        rafRef.current = requestAnimationFrame(loop);
      } else {
        ctx.clearRect(0, 0, W, H);
      }
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [active, duration]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      aria-hidden
    />
  );
}
