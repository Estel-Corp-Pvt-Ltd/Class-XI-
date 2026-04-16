"use client";

import { useMemo, useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

type Pt = { x: number; y: number };

const POINTS: Pt[] = [
  { x: 2, y: 3 }, { x: 2.5, y: 4 }, { x: 3, y: 3 }, { x: 2, y: 2.5 }, { x: 3.2, y: 3.5 },
  { x: 8, y: 8 }, { x: 8.5, y: 7 }, { x: 7, y: 8 }, { x: 8, y: 9 }, { x: 7.5, y: 7.5 },
  { x: 2, y: 8 }, { x: 3, y: 9 }, { x: 2.5, y: 7.5 }, { x: 3, y: 8 }, { x: 2, y: 9 },
  { x: 8, y: 2 }, { x: 9, y: 3 }, { x: 8, y: 3.5 }, { x: 7.5, y: 2 }, { x: 9, y: 2.5 },
];

const COLORS = ["#ff6b6b", "#6ab7ff", "#6ed3b3", "#ffd36b", "#b794f6"];

function dist(a: Pt, b: Pt) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

type Step = { centroids: Pt[]; assignments: number[] };

function kmeansSteps(k: number, seed: number): Step[] {
  const rng = mulberry32(seed);
  const centroids: Pt[] = [];
  for (let i = 0; i < k; i++) {
    centroids.push({ x: rng() * 10, y: rng() * 10 });
  }

  const steps: Step[] = [];
  let assignments = POINTS.map(() => 0);

  for (let iter = 0; iter < 10; iter++) {
    // Assign step
    assignments = POINTS.map((p) => {
      let best = 0;
      let bestD = Infinity;
      centroids.forEach((c, i) => {
        const d = dist(p, c);
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      });
      return best;
    });
    steps.push({ centroids: centroids.map((c) => ({ ...c })), assignments: [...assignments] });

    // Update step
    let moved = false;
    for (let i = 0; i < k; i++) {
      const members = POINTS.filter((_, j) => assignments[j] === i);
      if (members.length === 0) continue;
      const nx = members.reduce((s, p) => s + p.x, 0) / members.length;
      const ny = members.reduce((s, p) => s + p.y, 0) / members.length;
      if (Math.abs(nx - centroids[i].x) > 0.001 || Math.abs(ny - centroids[i].y) > 0.001) {
        moved = true;
      }
      centroids[i] = { x: nx, y: ny };
    }
    if (!moved && iter > 0) break;
  }
  return steps;
}

function mulberry32(seed: number) {
  let t = seed;
  return function () {
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function KMeansLab() {
  const [k, setK] = useState(4);
  const [seed, setSeed] = useState(42);
  const [step, setStep] = useState(0);

  const steps = useMemo(() => kmeansSteps(k, seed), [k, seed]);
  const currentStep = steps[Math.min(step, steps.length - 1)];

  function reset(newK: number, newSeed: number) {
    setK(newK);
    setSeed(newSeed);
    setStep(0);
  }

  const scale = (v: number) => 30 + (v / 10) * 340;
  const W = 400, H = 400;

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">K-Means in action</h3>
      <p className="text-muted-foreground text-sm mb-3">
        Press <strong>Step</strong> to watch centroids move as they find clusters.
      </p>

      <div className="flex flex-wrap gap-4 items-center mb-3">
        <label className="text-sm font-semibold flex items-center gap-2">
          K =
          <input
            type="range"
            min={2}
            max={5}
            value={k}
            onChange={(e) => reset(parseInt(e.target.value), seed)}
          />
          <span className="font-hand text-xl">{k}</span>
        </label>
        <button className="btn-sketchy-outline" onClick={() => reset(k, seed + 1)}>
          🎲 New start
        </button>
        <button
          className="btn-sketchy btn-mint"
          onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
          disabled={step === steps.length - 1}
        >
          Step →
        </button>
        <button className="btn-sketchy-outline" onClick={() => setStep(0)}>
          ↺ Reset
        </button>
        <span className="chip">Iteration {step + 1} / {steps.length}</span>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full max-w-md border-2 border-[var(--color-foreground)] rounded-lg bg-white"
      >
        <line x1={30} y1={370} x2={370} y2={370} stroke="#1a1a1a" strokeWidth={2} />
        <line x1={30} y1={30} x2={30} y2={370} stroke="#1a1a1a" strokeWidth={2} />

        {POINTS.map((p, i) => (
          <circle
            key={i}
            cx={scale(p.x)}
            cy={scale(p.y)}
            r={6}
            fill={COLORS[currentStep.assignments[i]]}
            stroke="#1a1a1a"
            strokeWidth={1.5}
          />
        ))}
        {currentStep.centroids.map((c, i) => (
          <g key={i}>
            <circle
              cx={scale(c.x)}
              cy={scale(c.y)}
              r={14}
              fill={COLORS[i]}
              stroke="#1a1a1a"
              strokeWidth={3}
              opacity={0.9}
            />
            <text
              x={scale(c.x)}
              y={scale(c.y) + 4}
              textAnchor="middle"
              fontSize={14}
              fontWeight="bold"
              fill="white"
            >
              {i + 1}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function KMeans() {
  return (
    <LessonShell
      lessonId="u6l3"
      unitNumber={6}
      lessonNumber={3}
      title="K-Means Clustering"
      subtitle="Group data automatically — no labels needed"
      emoji="🌀"
      unitColor="var(--accent-rose)"
      tabs={[
        {
          title: "Idea",
          icon: "💡",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-3">How K-Means works</h3>
              <p className="mb-3">
                K-Means is the most popular unsupervised clustering algorithm. The recipe:
              </p>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Decide how many groups you want → <strong>K</strong>.</li>
                <li>Drop K centroids randomly.</li>
                <li>Assign each point to the <em>nearest</em> centroid.</li>
                <li>Move each centroid to the <em>mean</em> of its points.</li>
                <li>Repeat 3–4 until nothing moves.</li>
              </ol>
              <InfoBox tone="blue" title="Why it works">
                Each iteration reduces the total distance from points to their centroid. Eventually
                centroids settle at the 'centres of mass' of natural groups.
              </InfoBox>
              <h4 className="font-bold mt-4 mb-1">Choosing K</h4>
              <p className="text-sm">
                There's no magic answer. Two tricks:
              </p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Domain knowledge — "we need 3 customer segments"</li>
                <li>Elbow method — plot error vs K, pick the bend.</li>
              </ul>
            </div>
          ),
        },
        {
          title: "Live clustering",
          icon: "🎯",
          content: <KMeansLab />,
        },
      ]}
      quiz={[
        {
          q: "K-Means is:",
          options: ["Supervised", "Unsupervised", "Deep learning", "Reinforcement"],
          correct: 1,
          explain: "No labels required — it finds groups on its own.",
        },
        {
          q: "In each iteration, K-Means:",
          options: [
            "Adds a new centroid",
            "Moves each centroid to the mean of its assigned points",
            "Doubles K",
            "Renames classes",
          ],
          correct: 1,
          explain: "Assign points → move centroid to mean → repeat.",
        },
        {
          q: "If you run K-Means twice, do you always get the same result?",
          options: [
            "Yes",
            "No — depends on starting centroids",
            "Only if K = 1",
            "Only if you set K=10",
          ],
          correct: 1,
          explain:
            "K-Means is sensitive to initialisation. That's why scikit-learn runs it multiple times and keeps the best.",
        },
      ]}
    />
  );
}
