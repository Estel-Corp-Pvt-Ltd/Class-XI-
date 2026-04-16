"use client";

import { useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

function NestedCircles() {
  const [hover, setHover] = useState<"ai" | "ml" | "dl" | null>(null);
  const desc = {
    ai: {
      t: "Artificial Intelligence",
      d: "Any machine doing tasks that need intelligence — rules, search, or learning.",
    },
    ml: {
      t: "Machine Learning",
      d: "A sub-field of AI where the machine learns patterns from data.",
    },
    dl: {
      t: "Deep Learning",
      d: "A sub-field of ML using neural networks with many layers.",
    },
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">They're nested, not separate</h3>
      <p className="text-muted-foreground text-sm mb-4">
        Hover or tap each ring to see what it means.
      </p>
      <div className="relative w-full max-w-md mx-auto aspect-square">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle
            cx={200}
            cy={200}
            r={190}
            fill="#ffe3e3"
            stroke="var(--color-foreground)"
            strokeWidth={3}
            onMouseEnter={() => setHover("ai")}
            onMouseLeave={() => setHover(null)}
            onClick={() => setHover("ai")}
            style={{ cursor: "pointer" }}
          />
          <circle
            cx={200}
            cy={200}
            r={140}
            fill="#ffd6d6"
            stroke="var(--color-foreground)"
            strokeWidth={3}
            onMouseEnter={() => setHover("ml")}
            onMouseLeave={() => setHover(null)}
            onClick={() => setHover("ml")}
            style={{ cursor: "pointer" }}
          />
          <circle
            cx={200}
            cy={200}
            r={80}
            fill="#ff9e9e"
            stroke="var(--color-foreground)"
            strokeWidth={3}
            onMouseEnter={() => setHover("dl")}
            onMouseLeave={() => setHover(null)}
            onClick={() => setHover("dl")}
            style={{ cursor: "pointer" }}
          />
          <text x={200} y={60} textAnchor="middle" fontWeight="bold" fontSize={20}>
            AI
          </text>
          <text x={200} y={120} textAnchor="middle" fontWeight="bold" fontSize={18}>
            ML
          </text>
          <text
            x={200}
            y={205}
            textAnchor="middle"
            fontWeight="bold"
            fontSize={20}
            fill="white"
          >
            Deep
          </text>
          <text
            x={200}
            y={225}
            textAnchor="middle"
            fontWeight="bold"
            fontSize={14}
            fill="white"
          >
            Learning
          </text>
        </svg>
      </div>
      {hover && (
        <InfoBox tone="coral" title={desc[hover].t}>
          {desc[hover].d}
        </InfoBox>
      )}
      {!hover && (
        <p className="text-center text-sm text-muted-foreground mt-3">
          👆 Click a ring to see the definition.
        </p>
      )}
    </div>
  );
}

function ExampleSorter() {
  type Cat = "rule" | "ml" | "dl";
  const items: { label: string; cat: Cat; emoji: string }[] = [
    { label: "A chess engine using search trees", cat: "rule", emoji: "♟️" },
    { label: "Netflix recommending a movie", cat: "ml", emoji: "🎬" },
    { label: "Face unlock on your phone", cat: "dl", emoji: "📱" },
    { label: "Spam filter in Gmail", cat: "ml", emoji: "📧" },
    { label: "ChatGPT generating a poem", cat: "dl", emoji: "💬" },
    { label: "A rule-based thermostat", cat: "rule", emoji: "🌡️" },
    { label: "Self-driving car seeing pedestrians", cat: "dl", emoji: "🚗" },
    { label: "Amazon predicting demand from sales data", cat: "ml", emoji: "📦" },
  ];

  const [placed, setPlaced] = useState<Record<string, Cat | null>>(
    Object.fromEntries(items.map((i) => [i.label, null]))
  );
  const [selected, setSelected] = useState<string | null>(null);

  function place(label: string, cat: Cat) {
    setPlaced((p) => ({ ...p, [label]: cat }));
    setSelected(null);
  }

  const correct = items.filter((i) => placed[i.label] === i.cat).length;

  const catInfo: Record<Cat, { t: string; c: string; e: string }> = {
    rule: { t: "Rule-based AI", c: "#ffd36b", e: "📜" },
    ml: { t: "Machine Learning", c: "#6ab7ff", e: "📊" },
    dl: { t: "Deep Learning", c: "#b794f6", e: "🧠" },
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Sort each example</h3>
      <p className="text-muted-foreground text-sm mb-4">
        Tap an item, then tap the bin. Aim: all 8 correct.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {items.map((it) => {
          if (placed[it.label]) return null;
          const sel = selected === it.label;
          return (
            <button
              key={it.label}
              onClick={() => setSelected(sel ? null : it.label)}
              className="chip"
              style={{
                background: sel ? "var(--accent-yellow)" : undefined,
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: sel ? "var(--color-foreground)" : "var(--color-border)",
              }}
            >
              {it.emoji} {it.label}
            </button>
          );
        })}
      </div>

      <div className="grid md:grid-cols-3 gap-3 mt-4">
        {(["rule", "ml", "dl"] as Cat[]).map((cat) => (
          <div
            key={cat}
            onClick={() => selected && place(selected, cat)}
            className="rounded-xl p-3 min-h-32 transition cursor-pointer"
            style={{
              background: `${catInfo[cat].c}25`,
              border: `2px dashed ${catInfo[cat].c}`,
            }}
          >
            <div className="text-sm font-bold mb-2 flex items-center gap-1">
              {catInfo[cat].e} {catInfo[cat].t}
            </div>
            {items
              .filter((i) => placed[i.label] === cat)
              .map((i) => {
                const isRight = i.cat === cat;
                return (
                  <div
                    key={i.label}
                    className="text-xs rounded-md px-2 py-1 mb-1"
                    style={{
                      background: isRight ? "#e5f8ef" : "#ffe5e5",
                      border: `1.5px solid ${isRight ? "#6ed3b3" : "#ff6b6b"}`,
                    }}
                  >
                    {i.emoji} {i.label} {isRight ? "✓" : "✗"}
                  </div>
                );
              })}
          </div>
        ))}
      </div>

      <div className="mt-4 text-center text-sm font-bold">
        Score: {correct} / {items.length}
      </div>
    </div>
  );
}

export default function AIvsMLvsDL() {
  return (
    <LessonShell
      lessonId="u1l2"
      unitNumber={1}
      lessonNumber={2}
      title="AI vs ML vs Deep Learning"
      subtitle="Three words, one family — how they fit together"
      emoji="🎯"
      unitColor="var(--accent-coral)"
      tabs={[
        {
          title: "Explain",
          icon: "📘",
          content: (
            <div>
              <p className="mb-3">
                People use <strong>AI</strong>, <strong>ML</strong>, and{" "}
                <strong>Deep Learning</strong> as if they're the same. They're not — they fit inside
                each other like Russian dolls.
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm mb-4">
                <li>
                  <span className="marker-highlight-yellow">AI</span> — any machine solving
                  problems that usually need intelligence (including rule-based systems).
                </li>
                <li>
                  <span className="marker-highlight-coral">ML (Machine Learning)</span> — a part of
                  AI where the machine learns patterns from data.
                </li>
                <li>
                  <span className="marker-highlight-mint">Deep Learning</span> — a part of ML that
                  uses <em>neural networks</em> with many layers to learn very complex patterns
                  (images, speech, text).
                </li>
              </ul>
              <InfoBox tone="green" title="Rule of thumb">
                Every Deep Learning system is ML. Every ML system is AI. But not every AI system is
                ML — a rule-based chess engine is AI but not ML.
              </InfoBox>
            </div>
          ),
        },
        {
          title: "See it",
          icon: "🎨",
          content: <NestedCircles />,
        },
        {
          title: "Sort it",
          icon: "🗂️",
          content: <ExampleSorter />,
        },
      ]}
      quiz={[
        {
          q: "Which statement is TRUE?",
          options: [
            "ML is bigger than AI.",
            "Deep Learning is a type of ML.",
            "Deep Learning and ML mean the same thing.",
            "AI only means chatbots.",
          ],
          correct: 1,
          explain:
            "Deep Learning sits inside ML, which sits inside AI. Like Russian dolls.",
        },
        {
          q: "A chess engine that searches moves using hand-written rules is:",
          options: ["Deep Learning", "ML", "Rule-based AI", "Not AI at all"],
          correct: 2,
          explain:
            "It uses intelligence-like behaviour (AI) but doesn't learn from data (not ML).",
        },
        {
          q: "Face unlock using neural networks is best described as:",
          options: ["Rule-based AI", "Classical ML", "Deep Learning", "Just maths"],
          correct: 2,
          explain:
            "Face recognition uses deep neural nets — it's a Deep Learning application.",
        },
      ]}
    />
  );
}
