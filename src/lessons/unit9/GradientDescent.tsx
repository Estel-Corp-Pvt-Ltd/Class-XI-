"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

// Loss landscape — a wavy curve with a clear minimum.
// L(w) = 0.1 * (w - 2)^2 + 0.3 * sin(w*1.5) + 0.8
function loss(w: number) {
  return 0.1 * (w - 2) * (w - 2) + 0.3 * Math.sin(w * 1.5) + 0.8;
}

function dLoss(w: number) {
  return 0.2 * (w - 2) + 0.45 * Math.cos(w * 1.5);
}

function GradientLab() {
  const [w, setW] = useState(-3);
  const [lr, setLr] = useState(0.3);
  const [running, setRunning] = useState(false);
  const [history, setHistory] = useState<{ w: number; loss: number }[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    let lastStep = 0;
    const loop = (t: number) => {
      if (t - lastStep > 120) {
        lastStep = t;
        setW((cw) => {
          const g = dLoss(cw);
          const nw = cw - lr * g;
          setHistory((h) => [...h.slice(-200), { w: nw, loss: loss(nw) }]);
          if (Math.abs(g) < 0.005 || nw > 8 || nw < -8) {
            setRunning(false);
          }
          return nw;
        });
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [running, lr]);

  function step() {
    const g = dLoss(w);
    const nw = w - lr * g;
    setHistory((h) => [...h.slice(-200), { w: nw, loss: loss(nw) }]);
    setW(nw);
  }

  function reset(start = -3) {
    setRunning(false);
    setW(start);
    setHistory([]);
  }

  // Curve points
  const W = 560, H = 300;
  const minW = -5, maxW = 8;
  const minL = 0, maxL = 4;
  const scaleX = (v: number) => 40 + ((v - minW) / (maxW - minW)) * (W - 60);
  const scaleY = (v: number) => H - 30 - ((v - minL) / (maxL - minL)) * (H - 50);

  const curve = useMemo(() => {
    const pts: string[] = [];
    for (let x = minW; x <= maxW; x += 0.1) {
      pts.push(`${scaleX(x)},${scaleY(loss(x))}`);
    }
    return "M " + pts.join(" L ");
  }, []);

  const ballX = scaleX(w);
  const ballY = scaleY(loss(w));
  const g = dLoss(w);
  const tangentLen = 50;
  const dx = tangentLen / Math.sqrt(1 + g * g);
  const dy = g * dx;

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Roll the ball to the minimum</h3>
      <p className="text-muted-foreground text-sm mb-3">
        The curve is the <strong>loss</strong> — how wrong the model is. Gradient descent rolls
        the ball downhill, one small step at a time.
      </p>

      <div className="flex flex-wrap gap-3 items-center mb-3">
        <label className="text-sm font-semibold flex items-center gap-2">
          Learning rate:
          <input
            type="range"
            min={0.02}
            max={1.4}
            step={0.02}
            value={lr}
            onChange={(e) => setLr(parseFloat(e.target.value))}
          />
          <span className="font-hand text-lg w-12 text-right">{lr.toFixed(2)}</span>
        </label>
        <button className="btn-sketchy" onClick={step} disabled={running}>
          Step ⬇
        </button>
        <button
          className={`btn-sketchy ${running ? "btn-lavender" : "btn-mint"}`}
          onClick={() => setRunning((r) => !r)}
        >
          {running ? "⏸ Pause" : "▶ Auto-run"}
        </button>
        <button className="btn-sketchy-outline" onClick={() => reset(-3)}>
          ↺ Reset (left)
        </button>
        <button className="btn-sketchy-outline" onClick={() => reset(6)}>
          ↺ Reset (right)
        </button>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full border-2 border-[var(--color-foreground)] rounded-xl bg-white"
      >
        <defs>
          <linearGradient id="fillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#b794f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#b794f6" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Axes */}
        <line x1={40} y1={H - 30} x2={W - 20} y2={H - 30} stroke="#1a1a1a" strokeWidth={2} />
        <line x1={40} y1={20} x2={40} y2={H - 30} stroke="#1a1a1a" strokeWidth={2} />
        <text x={W / 2} y={H - 8} textAnchor="middle" fontSize={12} fontWeight="bold">
          weight (w)
        </text>
        <text x={12} y={H / 2} fontSize={12} fontWeight="bold" transform={`rotate(-90 12 ${H / 2})`}>
          loss
        </text>

        {/* Filled area under curve */}
        <path d={`${curve} L ${scaleX(maxW)} ${H - 30} L ${scaleX(minW)} ${H - 30} Z`} fill="url(#fillGrad)" />

        {/* The loss curve */}
        <path d={curve} fill="none" stroke="var(--accent-lavender)" strokeWidth={3} />

        {/* History trail */}
        {history.map((h, i) => (
          <circle
            key={i}
            cx={scaleX(h.w)}
            cy={scaleY(h.loss)}
            r={3}
            fill="var(--accent-coral)"
            opacity={0.25 + (i / history.length) * 0.5}
          />
        ))}

        {/* Tangent line (gradient direction) */}
        <line
          x1={ballX - dx}
          y1={ballY - dy}
          x2={ballX + dx}
          y2={ballY + dy}
          stroke="#ff6b6b"
          strokeWidth={2.5}
          strokeDasharray="4 3"
        />

        {/* Arrow showing step direction */}
        <line
          x1={ballX}
          y1={ballY}
          x2={ballX - g * 40}
          y2={ballY}
          stroke="#6ed3b3"
          strokeWidth={3}
          markerEnd="url(#arrow)"
        />
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#6ed3b3" />
          </marker>
        </defs>

        {/* Ball */}
        <g style={{ transition: "transform 0.2s" }}>
          <circle cx={ballX} cy={ballY} r={14} fill="#ffd36b" stroke="#1a1a1a" strokeWidth={3} />
          <circle cx={ballX - 3} cy={ballY - 3} r={3} fill="white" opacity={0.7} />
        </g>

        {/* Markers */}
        <g>
          <line x1={scaleX(2)} y1={H - 35} x2={scaleX(2)} y2={H - 25} stroke="#6ed3b3" strokeWidth={3} />
          <text x={scaleX(2)} y={H - 15} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#0b5340">
            target
          </text>
        </g>
      </svg>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="card-soft p-3 text-center">
          <div className="text-xs font-bold uppercase text-muted-foreground">Weight</div>
          <div className="font-hand text-2xl">{w.toFixed(2)}</div>
        </div>
        <div className="card-soft p-3 text-center">
          <div className="text-xs font-bold uppercase text-muted-foreground">Loss</div>
          <div className="font-hand text-2xl" style={{ color: "var(--accent-lavender)" }}>
            {loss(w).toFixed(3)}
          </div>
        </div>
        <div className="card-soft p-3 text-center">
          <div className="text-xs font-bold uppercase text-muted-foreground">Gradient</div>
          <div className="font-hand text-2xl" style={{ color: "var(--accent-coral)" }}>
            {g.toFixed(3)}
          </div>
        </div>
      </div>

      <InfoBox tone="amber" title="Try this">
        <ul className="list-disc pl-4 space-y-1">
          <li>Set learning rate to <strong>0.05</strong> → see how slowly it converges.</li>
          <li>Set learning rate to <strong>1.2</strong> → watch it <em>overshoot</em> and bounce around.</li>
          <li>Reset to the right side — see how it gets stuck in the wrong "valley" (local minimum).</li>
        </ul>
      </InfoBox>
    </div>
  );
}

export default function GradientDescent() {
  return (
    <LessonShell
      lessonId="u9l2"
      unitNumber={9}
      lessonNumber={2}
      title="Gradient Descent"
      subtitle="How every neural network actually learns — one tiny step at a time"
      emoji="⬇️"
      unitColor="var(--accent-lavender)"
      tabs={[
        {
          title: "Idea",
          icon: "💡",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-3">Rolling downhill, mathematically</h3>
              <p className="mb-3">
                Imagine you're blindfolded on a hill. How do you get to the bottom? Feel the slope
                with your feet, take a small step downhill, repeat.
              </p>
              <p className="mb-3">
                That's <span className="marker-highlight-mint">gradient descent</span>. The "hill"
                is the <strong>loss</strong> (how wrong the model is). The "step" is updating a
                weight in the direction that reduces loss.
              </p>
              <pre className="code-block mb-3">
{`# The rule that trains every neural network:
w = w - learning_rate * gradient`}
              </pre>
              <div className="grid sm:grid-cols-3 gap-3 my-4">
                <div className="card-soft p-3 text-center">
                  <div className="text-3xl mb-1">🏂</div>
                  <div className="font-bold">Learning rate too big</div>
                  <div className="text-xs text-muted-foreground">
                    Overshoots the minimum, bounces around, may never converge.
                  </div>
                </div>
                <div className="card-soft p-3 text-center">
                  <div className="text-3xl mb-1">🐢</div>
                  <div className="font-bold">Too small</div>
                  <div className="text-xs text-muted-foreground">
                    Makes progress, but painfully slowly.
                  </div>
                </div>
                <div className="card-soft p-3 text-center">
                  <div className="text-3xl mb-1">🎯</div>
                  <div className="font-bold">Just right</div>
                  <div className="text-xs text-muted-foreground">
                    Fast convergence, stable, lands near the minimum.
                  </div>
                </div>
              </div>
              <InfoBox tone="blue" title="Why it matters">
                Every deep learning system you use — ChatGPT, Google Translate, Face ID, Spotify
                recommendations — was trained by gradient descent.
              </InfoBox>
            </div>
          ),
        },
        {
          title: "Roll the ball",
          icon: "🎮",
          content: <GradientLab />,
        },
      ]}
      quiz={[
        {
          q: "Gradient descent minimises:",
          options: ["Accuracy", "Loss", "Number of neurons", "Weights"],
          correct: 1,
          explain: "We use gradient descent to push loss down.",
        },
        {
          q: "If the learning rate is too high:",
          options: [
            "Training is always faster",
            "The weights overshoot and may never converge",
            "The model becomes smarter",
            "Nothing changes",
          ],
          correct: 1,
          explain: "Large steps can jump over the minimum and bounce wildly.",
        },
        {
          q: "The 'gradient' tells us:",
          options: [
            "How accurate the model is",
            "The direction of steepest increase in loss",
            "How many layers to use",
            "The batch size",
          ],
          correct: 1,
          explain:
            "Gradient points uphill in loss — so we move in the opposite direction to decrease it.",
        },
        {
          q: "A 'local minimum' is:",
          options: [
            "The very best weights",
            "A low point that isn't the overall lowest",
            "Where training starts",
            "The first layer",
          ],
          correct: 1,
          explain:
            "Loss landscapes can have several valleys. Plain gradient descent can get stuck in a shallow one.",
        },
      ]}
    />
  );
}
