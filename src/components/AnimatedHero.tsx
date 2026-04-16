"use client";

import { useEffect, useRef, useState } from "react";

type Node = { x: number; y: number; layer: number };
type Edge = { a: number; b: number };

const LAYERS = [3, 4, 4, 2];

function buildNet() {
  const nodes: Node[] = [];
  const W = 480;
  const H = 320;
  const xs = LAYERS.map((_, i) => 60 + (i / (LAYERS.length - 1)) * (W - 120));
  LAYERS.forEach((count, li) => {
    const spacing = H / (count + 1);
    for (let i = 0; i < count; i++) {
      nodes.push({ x: xs[li], y: spacing * (i + 1), layer: li });
    }
  });
  const edges: Edge[] = [];
  for (let li = 0; li < LAYERS.length - 1; li++) {
    const left = nodes.filter((n) => n.layer === li);
    const right = nodes.filter((n) => n.layer === li + 1);
    left.forEach((a) => {
      right.forEach((b) => {
        const ai = nodes.indexOf(a);
        const bi = nodes.indexOf(b);
        edges.push({ a: ai, b: bi });
      });
    });
  }
  return { nodes, edges, W, H };
}

export default function AnimatedHero() {
  const [{ nodes, edges, W, H }] = useState(buildNet);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const loop = (t: number) => {
      const dt = t - last;
      last = t;
      setTick((x) => x + dt * 0.001);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const cycle = tick % (LAYERS.length - 1);
  const activeLayer = Math.floor(cycle);
  const layerT = cycle - activeLayer;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      role="img"
      aria-label="Animated neural network"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd36b" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffd36b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6ab7ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#b794f6" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* Floating background dots */}
      {Array.from({ length: 18 }).map((_, i) => {
        const seed = i * 137.5;
        const x = ((seed * 13) % W);
        const y = (Math.sin(tick * 0.6 + i) * 20) + ((seed * 7) % H);
        const r = 1 + ((i * 31) % 3);
        return (
          <circle
            key={`bg${i}`}
            cx={x}
            cy={y}
            r={r}
            fill="#1a1a1a"
            opacity={0.07 + (Math.sin(tick + i) + 1) * 0.03}
          />
        );
      })}

      {/* Edges */}
      {edges.map((e, i) => {
        const a = nodes[e.a];
        const b = nodes[e.b];
        return (
          <line
            key={`e${i}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="url(#edgeGrad)"
            strokeWidth={1.5}
          />
        );
      })}

      {/* Flowing signals on active layer edges */}
      {edges
        .filter((e) => nodes[e.a].layer === activeLayer)
        .map((e, i) => {
          const a = nodes[e.a];
          const b = nodes[e.b];
          const px = a.x + (b.x - a.x) * layerT;
          const py = a.y + (b.y - a.y) * layerT;
          return (
            <g key={`p${i}`}>
              <circle cx={px} cy={py} r={5} fill="url(#nodeGlow)" />
              <circle cx={px} cy={py} r={2.5} fill="#ffd36b" stroke="#1a1a1a" strokeWidth={1} />
            </g>
          );
        })}

      {/* Nodes */}
      {nodes.map((n, i) => {
        const isActive = n.layer === activeLayer || n.layer === activeLayer + 1;
        const pulse = isActive ? 1 + Math.sin(tick * 4 + i) * 0.08 : 1;
        const r = 14 * pulse;
        const fill =
          n.layer === 0
            ? "#ff6b6b"
            : n.layer === LAYERS.length - 1
            ? "#6ed3b3"
            : "#6ab7ff";
        return (
          <g key={`n${i}`}>
            {isActive && <circle cx={n.x} cy={n.y} r={r + 6} fill="url(#nodeGlow)" />}
            <circle
              cx={n.x}
              cy={n.y}
              r={r}
              fill={fill}
              stroke="#1a1a1a"
              strokeWidth={2}
            />
          </g>
        );
      })}

      {/* Input labels */}
      <text x={20} y={H / 2} fontSize={11} fontWeight="bold" fill="#1a1a1a">
        input
      </text>
      <text x={W - 50} y={H / 2} fontSize={11} fontWeight="bold" fill="#1a1a1a">
        output
      </text>
    </svg>
  );
}
