"use client";

import { useMemo, useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

type Pt = { x: number; y: number };

const DATA: Pt[] = [
  { x: 1, y: 2.3 }, { x: 2, y: 3.1 }, { x: 3, y: 4.9 }, { x: 4, y: 5.2 },
  { x: 5, y: 6.8 }, { x: 6, y: 7.3 }, { x: 7, y: 9.1 }, { x: 8, y: 9.8 },
];

function bestFit(data: Pt[]): { m: number; b: number } {
  const n = data.length;
  const sx = data.reduce((s, p) => s + p.x, 0);
  const sy = data.reduce((s, p) => s + p.y, 0);
  const sxy = data.reduce((s, p) => s + p.x * p.y, 0);
  const sxx = data.reduce((s, p) => s + p.x * p.x, 0);
  const m = (n * sxy - sx * sy) / (n * sxx - sx * sx);
  const b = (sy - m * sx) / n;
  return { m, b };
}

function RegressionLab() {
  const [slope, setSlope] = useState(1);
  const [intercept, setIntercept] = useState(0);
  const [showBest, setShowBest] = useState(false);

  const best = useMemo(() => bestFit(DATA), []);

  const totalError = useMemo(() => {
    return DATA.reduce((s, p) => {
      const yHat = slope * p.x + intercept;
      return s + (p.y - yHat) ** 2;
    }, 0);
  }, [slope, intercept]);

  const bestError = useMemo(() => {
    return DATA.reduce((s, p) => {
      const yHat = best.m * p.x + best.b;
      return s + (p.y - yHat) ** 2;
    }, 0);
  }, [best]);

  const W = 400, H = 320;
  const scaleX = (v: number) => 40 + (v / 10) * 340;
  const scaleY = (v: number) => 290 - (v / 12) * 260;
  const line = (m: number, b: number, dash = false) => {
    const y1 = m * 0 + b;
    const y2 = m * 10 + b;
    return (
      <line
        x1={scaleX(0)}
        y1={scaleY(y1)}
        x2={scaleX(10)}
        y2={scaleY(y2)}
        stroke={dash ? "#6ed3b3" : "var(--accent-coral)"}
        strokeWidth={dash ? 2 : 3}
        strokeDasharray={dash ? "6 4" : ""}
      />
    );
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Fit a line by hand</h3>
      <p className="text-muted-foreground text-sm mb-3">
        Drag the sliders to find the line that best fits. Watch the error drop.
      </p>

      <div className="flex flex-wrap gap-4 items-center mb-3">
        <label className="text-sm font-semibold flex items-center gap-2">
          slope (m) =
          <input
            type="range"
            min={-2}
            max={3}
            step={0.05}
            value={slope}
            onChange={(e) => setSlope(parseFloat(e.target.value))}
          />
          <span className="font-hand text-xl">{slope.toFixed(2)}</span>
        </label>
        <label className="text-sm font-semibold flex items-center gap-2">
          intercept (b) =
          <input
            type="range"
            min={-5}
            max={8}
            step={0.1}
            value={intercept}
            onChange={(e) => setIntercept(parseFloat(e.target.value))}
          />
          <span className="font-hand text-xl">{intercept.toFixed(2)}</span>
        </label>
        <button
          className="btn-sketchy-outline"
          onClick={() => setShowBest((s) => !s)}
        >
          {showBest ? "Hide" : "Show"} best-fit
        </button>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full max-w-md border-2 border-[var(--color-foreground)] rounded-lg bg-white"
      >
        <line x1={40} y1={290} x2={380} y2={290} stroke="#1a1a1a" strokeWidth={2} />
        <line x1={40} y1={30} x2={40} y2={290} stroke="#1a1a1a" strokeWidth={2} />

        {/* error lines */}
        {DATA.map((p, i) => {
          const yHat = slope * p.x + intercept;
          return (
            <line
              key={i}
              x1={scaleX(p.x)}
              y1={scaleY(p.y)}
              x2={scaleX(p.x)}
              y2={scaleY(yHat)}
              stroke="#ffd36b"
              strokeWidth={1.5}
            />
          );
        })}

        {line(slope, intercept)}
        {showBest && line(best.m, best.b, true)}

        {DATA.map((p, i) => (
          <circle
            key={i}
            cx={scaleX(p.x)}
            cy={scaleY(p.y)}
            r={5}
            fill="var(--accent-sky)"
            stroke="#1a1a1a"
            strokeWidth={2}
          />
        ))}

        <text x={200} y={315} textAnchor="middle" fontSize={11}>
          X (input)
        </text>
        <text x={15} y={160} fontSize={11} transform="rotate(-90 15 160)" textAnchor="middle">
          Y (output)
        </text>
      </svg>

      <div className="mt-4 grid sm:grid-cols-3 gap-3">
        <div className="card-soft p-3 text-center">
          <div className="text-xs font-bold uppercase text-muted-foreground">Your error (SSE)</div>
          <div className="font-hand text-3xl" style={{ color: "var(--accent-coral)" }}>
            {totalError.toFixed(2)}
          </div>
        </div>
        <div className="card-soft p-3 text-center">
          <div className="text-xs font-bold uppercase text-muted-foreground">Best possible</div>
          <div className="font-hand text-3xl" style={{ color: "var(--accent-mint)" }}>
            {bestError.toFixed(2)}
          </div>
        </div>
        <div className="card-soft p-3 text-center">
          <div className="text-xs font-bold uppercase text-muted-foreground">Best equation</div>
          <div className="font-hand text-lg">
            y = {best.m.toFixed(2)}x + {best.b.toFixed(2)}
          </div>
        </div>
      </div>

      <InfoBox tone="blue" title="SSE — sum of squared errors">
        For each data point, compute (actual − predicted)², then sum. The line that minimises SSE
        is the "best fit". That's what scikit-learn's LinearRegression finds for you automatically.
      </InfoBox>
    </div>
  );
}

export default function LinearRegression() {
  return (
    <LessonShell
      lessonId="u6l4"
      unitNumber={6}
      lessonNumber={4}
      title="Linear Regression"
      subtitle="Draw a line through the dots — and predict the future"
      emoji="📐"
      unitColor="var(--accent-rose)"
      tabs={[
        {
          title: "Idea",
          icon: "💡",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-3">The line of best fit</h3>
              <p className="mb-3">
                Linear regression predicts a <strong>number</strong> (like height, price, marks)
                from one or more inputs.
              </p>
              <pre className="code-block mb-3">
{`y = m × x + b

where:
  x = input (e.g. hours studied)
  y = output (e.g. marks)
  m = slope  (how steep)
  b = intercept (where line crosses y-axis)`}
              </pre>
              <InfoBox tone="green" title="What does 'fit' mean?">
                The best line is the one that makes the total distance from the dots to the line
                as small as possible — usually measured as <em>sum of squared errors</em>.
              </InfoBox>
              <h4 className="font-bold mt-4 mb-2">Where it's used</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Predict house prices from size.</li>
                <li>Predict marks from study hours.</li>
                <li>Predict sales from advertising spend.</li>
                <li>Predict temperature from altitude.</li>
              </ul>
            </div>
          ),
        },
        {
          title: "Try it",
          icon: "🎯",
          content: <RegressionLab />,
        },
      ]}
      quiz={[
        {
          q: "Linear regression predicts:",
          options: [
            "A category (spam / not spam)",
            "A continuous number",
            "A cluster",
            "Nothing",
          ],
          correct: 1,
          explain: "Regression predicts numbers; classification predicts categories.",
        },
        {
          q: "In y = mx + b, 'm' is the:",
          options: ["mean", "slope", "intercept", "midpoint"],
          correct: 1,
          explain: "m = slope (rise / run). b = intercept.",
        },
        {
          q: "The 'best-fit line' minimises:",
          options: [
            "The number of points",
            "The sum of squared errors",
            "The number of features",
            "The time taken",
          ],
          correct: 1,
          explain: "Best fit = smallest total squared distance from dots to line.",
        },
      ]}
    />
  );
}
