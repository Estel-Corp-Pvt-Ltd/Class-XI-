"use client";

import { useMemo, useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

type Point = { x: number; y: number; label: "A" | "B" };

const INITIAL: Point[] = [
  { x: 2, y: 3, label: "A" },
  { x: 3, y: 4, label: "A" },
  { x: 2, y: 5, label: "A" },
  { x: 4, y: 3, label: "A" },
  { x: 3, y: 6, label: "A" },
  { x: 8, y: 7, label: "B" },
  { x: 9, y: 8, label: "B" },
  { x: 8, y: 9, label: "B" },
  { x: 7, y: 8, label: "B" },
  { x: 9, y: 6, label: "B" },
];

function dist(a: Point, b: { x: number; y: number }) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

function KNNLab() {
  const [k, setK] = useState(3);
  const [query, setQuery] = useState({ x: 5, y: 5 });

  const neighbours = useMemo(() => {
    return [...INITIAL]
      .map((p) => ({ ...p, d: dist(p, query) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, k);
  }, [k, query]);

  const votes = { A: 0, B: 0 };
  neighbours.forEach((n) => (votes[n.label]++));
  const prediction: "A" | "B" = votes.A > votes.B ? "A" : "B";

  const colorFor = (label: "A" | "B") =>
    label === "A" ? "var(--accent-coral)" : "var(--accent-sky)";

  const W = 400;
  const H = 400;
  const scale = (v: number) => 30 + (v / 10) * 340;

  function svgClick(e: React.MouseEvent<SVGSVGElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = ((e.clientX - rect.left) / rect.width) * W;
    const cy = ((e.clientY - rect.top) / rect.height) * H;
    const x = Math.max(0, Math.min(10, ((cx - 30) / 340) * 10));
    const y = Math.max(0, Math.min(10, ((cy - 30) / 340) * 10));
    setQuery({ x: +x.toFixed(1), y: +y.toFixed(1) });
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">KNN — tap anywhere on the grid</h3>
      <p className="text-muted-foreground text-sm mb-3">
        The <span style={{ color: "var(--accent-coral)", fontWeight: 700 }}>red</span> dots are
        class A, <span style={{ color: "var(--accent-sky)", fontWeight: 700 }}>blue</span> are class
        B. Tap to drop a mystery point ⭐ and watch KNN classify it.
      </p>

      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <label className="text-sm font-semibold">K =</label>
        <input
          type="range"
          min={1}
          max={9}
          step={2}
          value={k}
          onChange={(e) => setK(parseInt(e.target.value))}
        />
        <span className="font-hand text-2xl">{k}</span>
        <span className="text-xs text-muted-foreground">(odd K avoids ties)</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full max-w-md border-2 border-[var(--color-foreground)] rounded-lg bg-white"
          onClick={svgClick}
          style={{ cursor: "crosshair" }}
        >
          {/* Grid */}
          {Array.from({ length: 11 }).map((_, i) => (
            <g key={i}>
              <line
                x1={scale(i)}
                y1={30}
                x2={scale(i)}
                y2={370}
                stroke="#0001"
                strokeWidth={1}
              />
              <line
                x1={30}
                y1={scale(i)}
                x2={370}
                y2={scale(i)}
                stroke="#0001"
                strokeWidth={1}
              />
            </g>
          ))}
          <line x1={30} y1={370} x2={370} y2={370} stroke="#1a1a1a" strokeWidth={2} />
          <line x1={30} y1={30} x2={30} y2={370} stroke="#1a1a1a" strokeWidth={2} />

          {/* Neighbours get a ring */}
          {neighbours.map((n, i) => (
            <line
              key={`l${i}`}
              x1={scale(query.x)}
              y1={scale(query.y)}
              x2={scale(n.x)}
              y2={scale(n.y)}
              stroke={colorFor(n.label)}
              strokeWidth={2}
              strokeDasharray="4 3"
              opacity={0.6}
            />
          ))}

          {INITIAL.map((p, i) => {
            const near = neighbours.some((n) => n.x === p.x && n.y === p.y);
            return (
              <circle
                key={i}
                cx={scale(p.x)}
                cy={scale(p.y)}
                r={near ? 10 : 7}
                fill={colorFor(p.label)}
                stroke="#1a1a1a"
                strokeWidth={near ? 3 : 1.5}
              />
            );
          })}

          {/* Query */}
          <polygon
            points={(() => {
              const cx = scale(query.x);
              const cy = scale(query.y);
              const r = 12;
              const pts: string[] = [];
              for (let i = 0; i < 10; i++) {
                const a = (Math.PI / 5) * i - Math.PI / 2;
                const rr = i % 2 === 0 ? r : r / 2.3;
                pts.push(`${cx + rr * Math.cos(a)},${cy + rr * Math.sin(a)}`);
              }
              return pts.join(" ");
            })()}
            fill={colorFor(prediction)}
            stroke="#1a1a1a"
            strokeWidth={2}
          />
        </svg>

        <div className="flex-1">
          <div className="card-sketchy p-4" style={{ background: "#fff9ec" }}>
            <div className="text-sm font-bold uppercase text-muted-foreground">Mystery point</div>
            <div className="font-hand text-3xl">
              ({query.x}, {query.y})
            </div>
            <div className="mt-3 text-sm">
              <div className="font-bold">Nearest {k} neighbours:</div>
              <ul className="list-disc pl-4 mt-1">
                {neighbours.map((n, i) => (
                  <li key={i} style={{ color: colorFor(n.label) }}>
                    ({n.x}, {n.y}) class{" "}
                    <strong>{n.label}</strong> — dist {n.d.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3 text-sm">
              <div>
                Votes — A: <strong>{votes.A}</strong> · B: <strong>{votes.B}</strong>
              </div>
              <div
                className="mt-2 px-3 py-2 rounded-lg font-bold"
                style={{
                  background: prediction === "A" ? "#ffe5e5" : "#e8f2ff",
                  border: `2px solid ${colorFor(prediction)}`,
                }}
              >
                Prediction: Class {prediction} 🎯
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function KNN() {
  return (
    <LessonShell
      lessonId="u6l2"
      unitNumber={6}
      lessonNumber={2}
      title="K-Nearest Neighbours (KNN)"
      subtitle="Tell me your friends, I'll tell you your class"
      emoji="👥"
      unitColor="var(--accent-rose)"
      tabs={[
        {
          title: "Idea",
          icon: "💡",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-3">The simplest classifier</h3>
              <p className="mb-3">
                KNN's rule is deliciously simple:{" "}
                <span className="marker-highlight-yellow">
                  look at the K nearest labelled points; pick the majority class.
                </span>
              </p>
              <h4 className="font-bold mt-3 mb-2">Steps:</h4>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Put all training points on a chart (with labels).</li>
                <li>For a new point, measure distance to every training point.</li>
                <li>Pick the K closest.</li>
                <li>Count labels → majority wins.</li>
              </ol>
              <InfoBox tone="blue" title="Choosing K">
                Too small (K=1): noisy, sensitive to outliers. Too big (K=all): predicts the most
                common class always. A good K is usually odd (3, 5, 7) to avoid ties.
              </InfoBox>
              <h4 className="font-bold mt-3 mb-2">Distance formula</h4>
              <p className="text-sm mb-2">For 2D points, we use Euclidean distance:</p>
              <pre className="code-block text-sm">
{`d = √((x₁ - x₂)² + (y₁ - y₂)²)`}
              </pre>
            </div>
          ),
        },
        {
          title: "Live demo",
          icon: "🎯",
          content: <KNNLab />,
        },
        {
          title: "Pros & cons",
          icon: "⚖️",
          content: (
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="card-soft p-4" style={{ background: "#e5f8ef" }}>
                <div className="font-bold text-lg mb-2">✅ Pros</div>
                <ul className="text-sm list-disc pl-4 space-y-1">
                  <li>Super simple to understand.</li>
                  <li>No training phase — store data, done.</li>
                  <li>Works on many kinds of problems.</li>
                </ul>
              </div>
              <div className="card-soft p-4" style={{ background: "#ffe5e5" }}>
                <div className="font-bold text-lg mb-2">❌ Cons</div>
                <ul className="text-sm list-disc pl-4 space-y-1">
                  <li>Slow at prediction (checks every point).</li>
                  <li>Struggles with many features (curse of dimensionality).</li>
                  <li>
                    Features need to be <em>scaled</em> — else one big-range feature dominates.
                  </li>
                </ul>
              </div>
            </div>
          ),
        },
      ]}
      quiz={[
        {
          q: "If K = 5 and the 5 nearest are [A, A, B, A, B], KNN predicts:",
          options: ["A", "B", "Tie", "Neither"],
          correct: 0,
          explain: "A wins 3–2.",
        },
        {
          q: "Why is an odd K often chosen for 2-class problems?",
          options: [
            "Odd numbers look cooler",
            "To avoid tied votes",
            "It's required by Python",
            "Only odd K works",
          ],
          correct: 1,
          explain: "With 2 classes and an odd K, there's always a clear majority.",
        },
        {
          q: "Why should features be scaled before using KNN?",
          options: [
            "To make the code shorter",
            "So big-range features don't dominate distance",
            "It doesn't matter",
            "Only for very small datasets",
          ],
          correct: 1,
          explain:
            "Euclidean distance adds up feature differences. A feature ranging 0–10000 will swamp one ranging 0–10 unless both are scaled.",
        },
      ]}
    />
  );
}
