"use client";

import { useEffect, useMemo, useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

type Activation = "sigmoid" | "relu" | "tanh";

function act(x: number, a: Activation): number {
  if (a === "sigmoid") return 1 / (1 + Math.exp(-x));
  if (a === "relu") return Math.max(0, x);
  return Math.tanh(x);
}

function NetworkLab() {
  // Simple 2-input, 1-hidden-layer network
  const [hiddenSize, setHiddenSize] = useState(3);
  const [activation, setActivation] = useState<Activation>("relu");
  const [input, setInput] = useState({ x: 0.6, y: 0.4 });
  const [running, setRunning] = useState(false);
  const [tick, setTick] = useState(0);
  const [weightsKey, setWeightsKey] = useState(0);

  // Generate random weights (re-seed on hidden change)
  const { w1, b1, w2, b2 } = useMemo(() => {
    const rng = mulberry32(weightsKey * 31 + hiddenSize * 7);
    const w1: number[][] = [];
    for (let h = 0; h < hiddenSize; h++) {
      w1.push([rng() * 2 - 1, rng() * 2 - 1]);
    }
    const b1 = Array.from({ length: hiddenSize }, () => rng() * 2 - 1);
    const w2 = Array.from({ length: hiddenSize }, () => rng() * 2 - 1);
    const b2 = rng() * 2 - 1;
    return { w1, b1, w2, b2 };
  }, [hiddenSize, weightsKey]);

  // Compute hidden and output
  const hidden = w1.map((w, i) => act(w[0] * input.x + w[1] * input.y + b1[i], activation));
  const outRaw = hidden.reduce((s, h, i) => s + h * w2[i], b2);
  const output = 1 / (1 + Math.exp(-outRaw));

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setTick((t) => t + 1);
      setInput({
        x: +(0.5 + Math.sin(Date.now() / 1200) * 0.4).toFixed(2),
        y: +(0.5 + Math.cos(Date.now() / 900) * 0.4).toFixed(2),
      });
    }, 200);
    return () => clearInterval(id);
  }, [running]);

  // Layout
  const W = 560, H = 320;
  const inX = 60;
  const hdX = 280;
  const outX = 500;
  const inNodes = [
    { x: inX, y: 110 },
    { x: inX, y: 210 },
  ];
  const hdNodes = Array.from({ length: hiddenSize }, (_, i) => ({
    x: hdX,
    y: 50 + ((H - 100) / Math.max(1, hiddenSize - 1)) * i,
  }));
  const outNode = { x: outX, y: 160 };

  const colourFor = (v: number) => {
    const c = Math.max(-1, Math.min(1, v));
    if (c >= 0) return `rgba(110, 211, 179, ${0.3 + c * 0.7})`;
    return `rgba(255, 107, 107, ${0.3 + Math.abs(c) * 0.7})`;
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Watch the network think</h3>
      <p className="text-muted-foreground text-sm mb-3">
        Drag the input sliders, change the architecture, pick an activation.{" "}
        <strong>Green</strong> edges = positive weight, <strong>red</strong> = negative. The
        brighter the colour, the bigger the signal.
      </p>

      <div className="flex flex-wrap gap-4 items-center mb-3">
        <label className="text-sm font-semibold flex items-center gap-2">
          Hidden neurons:
          <input
            type="range"
            min={1}
            max={6}
            value={hiddenSize}
            onChange={(e) => setHiddenSize(parseInt(e.target.value))}
          />
          <span className="font-hand text-xl">{hiddenSize}</span>
        </label>
        <label className="text-sm font-semibold">
          Activation:{" "}
          <select
            value={activation}
            onChange={(e) => setActivation(e.target.value as Activation)}
            className="border-2 border-[var(--color-foreground)] rounded-md px-2 py-1 text-sm"
          >
            <option value="relu">ReLU</option>
            <option value="sigmoid">Sigmoid</option>
            <option value="tanh">Tanh</option>
          </select>
        </label>
        <button className="btn-sketchy-outline" onClick={() => setWeightsKey((k) => k + 1)}>
          🎲 Randomise weights
        </button>
        <button
          className={`btn-sketchy ${running ? "btn-lavender" : ""}`}
          onClick={() => setRunning((r) => !r)}
        >
          {running ? "⏸ Pause" : "▶ Animate inputs"}
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mb-3">
        <label className="text-sm font-semibold">
          Input x₁: {input.x.toFixed(2)}
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={input.x}
            disabled={running}
            onChange={(e) => setInput((v) => ({ ...v, x: parseFloat(e.target.value) }))}
            className="w-full"
          />
        </label>
        <label className="text-sm font-semibold">
          Input x₂: {input.y.toFixed(2)}
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={input.y}
            disabled={running}
            onChange={(e) => setInput((v) => ({ ...v, y: parseFloat(e.target.value) }))}
            className="w-full"
          />
        </label>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full border-2 border-[var(--color-foreground)] rounded-xl bg-white"
      >
        <defs>
          <linearGradient id="pulse" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffd36b" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffd36b" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffd36b" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Input → Hidden edges */}
        {inNodes.map((a, ai) =>
          hdNodes.map((b, bi) => {
            const w = w1[bi][ai];
            const strength = Math.abs(w);
            return (
              <line
                key={`ih-${ai}-${bi}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={colourFor(w * (ai === 0 ? input.x : input.y))}
                strokeWidth={1 + strength * 3}
              />
            );
          })
        )}

        {/* Hidden → Output edges */}
        {hdNodes.map((a, ai) => {
          const w = w2[ai] * hidden[ai];
          const strength = Math.abs(w);
          return (
            <line
              key={`ho-${ai}`}
              x1={a.x}
              y1={a.y}
              x2={outNode.x}
              y2={outNode.y}
              stroke={colourFor(w)}
              strokeWidth={1 + strength * 3}
            />
          );
        })}

        {/* Flowing particle on top */}
        {[0, 0.2, 0.4, 0.6, 0.8].map((offset, pi) => (
          <circle
            key={`flow-${pi}`}
            r={3}
            fill="#ffd36b"
            stroke="#1a1a1a"
            strokeWidth={0.8}
          >
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              begin={`${offset * 2}s`}
              path={`M ${inNodes[pi % 2].x} ${inNodes[pi % 2].y} L ${hdNodes[pi % hiddenSize].x} ${hdNodes[pi % hiddenSize].y} L ${outNode.x} ${outNode.y}`}
            />
          </circle>
        ))}

        {/* Input nodes */}
        {inNodes.map((n, i) => (
          <g key={`in-${i}`}>
            <circle cx={n.x} cy={n.y} r={22} fill="#ff6b6b" stroke="#1a1a1a" strokeWidth={2.5} />
            <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize={13} fontWeight="bold" fill="white">
              {i === 0 ? input.x.toFixed(2) : input.y.toFixed(2)}
            </text>
            <text x={n.x - 45} y={n.y + 5} fontSize={11} fontWeight="bold">
              x{i + 1}
            </text>
          </g>
        ))}

        {/* Hidden nodes */}
        {hdNodes.map((n, i) => (
          <g key={`hd-${i}`}>
            <circle
              cx={n.x}
              cy={n.y}
              r={20}
              fill="#6ab7ff"
              stroke="#1a1a1a"
              strokeWidth={2.5}
              opacity={0.2 + hidden[i] * 0.8}
            />
            <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize={11} fontWeight="bold" fill="white">
              {hidden[i].toFixed(2)}
            </text>
          </g>
        ))}

        {/* Output node */}
        <g>
          <circle
            cx={outNode.x}
            cy={outNode.y}
            r={28}
            fill="#6ed3b3"
            stroke="#1a1a1a"
            strokeWidth={3}
            opacity={0.3 + output * 0.7}
          />
          <text x={outNode.x} y={outNode.y + 6} textAnchor="middle" fontSize={15} fontWeight="bold" fill="white">
            {output.toFixed(2)}
          </text>
          <text x={outNode.x + 45} y={outNode.y + 5} fontSize={11} fontWeight="bold">
            ŷ
          </text>
        </g>

        {/* Layer labels */}
        <text x={inX} y={30} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#666">
          Input
        </text>
        <text x={hdX} y={30} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#666">
          Hidden
        </text>
        <text x={outX} y={30} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#666">
          Output
        </text>
      </svg>

      <div className="mt-4 grid sm:grid-cols-3 gap-3">
        <div className="card-soft p-3 text-center">
          <div className="text-xs font-bold uppercase text-muted-foreground">Raw sum</div>
          <div className="font-hand text-2xl">{outRaw.toFixed(2)}</div>
        </div>
        <div className="card-soft p-3 text-center">
          <div className="text-xs font-bold uppercase text-muted-foreground">Output (σ)</div>
          <div
            className="font-hand text-2xl"
            style={{ color: output > 0.5 ? "var(--accent-mint)" : "var(--accent-coral)" }}
          >
            {output.toFixed(3)}
          </div>
        </div>
        <div className="card-soft p-3 text-center">
          <div className="text-xs font-bold uppercase text-muted-foreground">Prediction</div>
          <div className="font-hand text-2xl">
            {output > 0.5 ? "🟢 Class 1" : "🔴 Class 0"}
          </div>
        </div>
      </div>
    </div>
  );
}

function mulberry32(seed: number) {
  let t = seed || 1;
  return () => {
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function ActivationExplainer() {
  const [kind, setKind] = useState<Activation>("relu");
  const W = 360, H = 200;
  const points = Array.from({ length: 80 }, (_, i) => {
    const x = -4 + (i / 79) * 8;
    return { x, y: act(x, kind) };
  });
  const scaleX = (v: number) => 20 + ((v + 4) / 8) * (W - 40);
  const scaleY = (v: number) => H - 20 - ((v + 1) / 2) * (H - 40);
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${scaleX(p.x)} ${scaleY(p.y)}`).join(" ");

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Activation functions</h3>
      <p className="text-muted-foreground text-sm mb-3">
        These are the mathematical "curves" that bend straight lines into anything interesting.
      </p>
      <div className="flex gap-2 mb-3">
        {(["relu", "sigmoid", "tanh"] as Activation[]).map((k) => (
          <button
            key={k}
            onClick={() => setKind(k)}
            className="tab-btn"
            style={{
              background: kind === k ? "var(--color-foreground)" : "transparent",
              color: kind === k ? "var(--color-background)" : undefined,
              border: "2px solid var(--color-foreground)",
            }}
          >
            {k.toUpperCase()}
          </button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md border-2 border-[var(--color-foreground)] rounded-lg bg-white">
        <line x1={20} y1={scaleY(0)} x2={W - 20} y2={scaleY(0)} stroke="#0002" strokeWidth={1} />
        <line x1={scaleX(0)} y1={20} x2={scaleX(0)} y2={H - 20} stroke="#0002" strokeWidth={1} />
        <path d={path} fill="none" stroke="var(--accent-coral)" strokeWidth={3}
              strokeDasharray={600} strokeDashoffset={600}>
          <animate attributeName="stroke-dashoffset" from={600} to={0} dur="0.8s" fill="freeze" />
        </path>
      </svg>
      <div className="mt-3 text-sm">
        <strong>
          {kind === "relu" && "ReLU: outputs 0 for negatives, x for positives. Fast, simple, the modern default."}
          {kind === "sigmoid" && "Sigmoid: squeezes anything into 0–1. Good for probabilities."}
          {kind === "tanh" && "Tanh: like sigmoid but outputs between −1 and +1."}
        </strong>
      </div>
    </div>
  );
}

export default function NeuralPlayground() {
  return (
    <LessonShell
      lessonId="u9l1"
      unitNumber={9}
      lessonNumber={1}
      title="Neural Network Playground"
      subtitle="Build a network, feed it numbers, watch it think"
      emoji="🧠"
      unitColor="var(--accent-lavender)"
      tabs={[
        {
          title: "Intuition",
          icon: "💡",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-3">What's a neural network?</h3>
              <p className="mb-3">
                A neural network is layers of "neurons" passing signals to each other. Each neuron:
              </p>
              <ol className="list-decimal pl-5 text-sm space-y-1 mb-3">
                <li>Takes several numbers as input.</li>
                <li>Multiplies each by a <strong>weight</strong> and adds them up.</li>
                <li>Adds a <strong>bias</strong> (an extra offset).</li>
                <li>Puts the result through an <strong>activation function</strong> (the squiggle).</li>
              </ol>
              <pre className="code-block mb-3 text-sm">
{`output = activation( w₁·x₁ + w₂·x₂ + ... + b )`}
              </pre>
              <InfoBox tone="blue" title="The big idea">
                A single neuron is just a weighted sum. But stack them in layers, and they can
                learn almost anything — faces, words, music, games.
              </InfoBox>
              <div className="grid sm:grid-cols-3 gap-3 mt-4">
                <div className="card-soft p-3">
                  <div className="text-2xl mb-1">🔴</div>
                  <div className="font-bold">Input layer</div>
                  <div className="text-xs text-muted-foreground">Your features (e.g. pixel values).</div>
                </div>
                <div className="card-soft p-3">
                  <div className="text-2xl mb-1">🔵</div>
                  <div className="font-bold">Hidden layers</div>
                  <div className="text-xs text-muted-foreground">Where patterns are discovered.</div>
                </div>
                <div className="card-soft p-3">
                  <div className="text-2xl mb-1">🟢</div>
                  <div className="font-bold">Output layer</div>
                  <div className="text-xs text-muted-foreground">The answer (e.g. "cat" or 0.87).</div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Activations",
          icon: "📈",
          content: <ActivationExplainer />,
        },
        {
          title: "Playground",
          icon: "🎮",
          content: <NetworkLab />,
        },
      ]}
      quiz={[
        {
          q: "What does a single neuron compute?",
          options: [
            "A random number",
            "A weighted sum of inputs + bias, passed through an activation",
            "The average of all inputs",
            "The maximum of inputs",
          ],
          correct: 1,
          explain: "Σ (wᵢ · xᵢ) + b → activation. That's the whole neuron.",
        },
        {
          q: "Why do we need activation functions?",
          options: [
            "To slow training down",
            "To add non-linearity so networks can learn complex patterns",
            "Because Python needs them",
            "To reduce memory use",
          ],
          correct: 1,
          explain: "Without non-linear activations, stacking layers is the same as one linear model.",
        },
        {
          q: "A 'hidden layer' is hidden because:",
          options: [
            "It's encrypted",
            "Only the input and output are visible to users; hidden layers do the learning",
            "It's optional",
            "It's the smallest layer",
          ],
          correct: 1,
          explain: "Hidden layers sit between input and output, doing internal feature-building.",
        },
        {
          q: "ReLU outputs 0 when the input is:",
          options: ["Positive", "Negative", "Exactly 1", "Any number"],
          correct: 1,
          explain: "ReLU(x) = max(0, x) — it zeroes out anything negative.",
        },
      ]}
    />
  );
}
