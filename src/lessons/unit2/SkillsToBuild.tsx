"use client";

import { useMemo, useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

type Skill = { id: string; label: string; icon: string; need: number };

const SKILLS: Skill[] = [
  { id: "python", label: "Python basics", icon: "🐍", need: 5 },
  { id: "math", label: "Maths (algebra, stats)", icon: "➕", need: 5 },
  { id: "data", label: "Data literacy", icon: "📊", need: 4 },
  { id: "ml", label: "ML fundamentals", icon: "🧠", need: 4 },
  { id: "tools", label: "Tools (Pandas, NumPy)", icon: "🧰", need: 3 },
  { id: "comms", label: "Communication", icon: "💬", need: 4 },
  { id: "curious", label: "Curiosity", icon: "🔎", need: 5 },
  { id: "ethics", label: "Ethics mindset", icon: "⚖️", need: 3 },
];

function SkillSelfCheck() {
  const [vals, setVals] = useState<Record<string, number>>(
    Object.fromEntries(SKILLS.map((s) => [s.id, 0]))
  );
  const score = useMemo(() => {
    return SKILLS.reduce((sum, s) => {
      const v = Math.min(vals[s.id], s.need);
      return sum + (v / s.need) * (100 / SKILLS.length);
    }, 0);
  }, [vals]);

  const rounded = Math.round(score);

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Self-check: Where are you today?</h3>
      <p className="text-muted-foreground text-sm mb-4">
        Rate yourself 0 → 5 on each skill. Your AI-readiness score updates live.
      </p>

      <div className="space-y-3">
        {SKILLS.map((s) => (
          <div key={s.id} className="flex items-center gap-3">
            <div className="w-44 text-sm font-semibold flex items-center gap-2">
              <span className="text-xl">{s.icon}</span>
              {s.label}
            </div>
            <input
              type="range"
              min={0}
              max={5}
              value={vals[s.id]}
              onChange={(e) =>
                setVals((v) => ({ ...v, [s.id]: parseInt(e.target.value) }))
              }
              className="flex-1"
            />
            <div className="w-8 text-right font-hand text-xl">{vals[s.id]}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 card-sketchy p-5 text-center" style={{ background: "#f6f0ff" }}>
        <div className="text-sm font-semibold">Your AI-readiness score</div>
        <div className="font-hand text-6xl" style={{ color: "var(--accent-lavender)" }}>
          {rounded}%
        </div>
        <div className="text-sm mt-1 text-muted-foreground">
          {rounded < 30 && "Great starting point! You're just getting going — perfect for Class 11."}
          {rounded >= 30 && rounded < 70 && "Nice! You have solid foundations. Focus on gaps."}
          {rounded >= 70 && "Wow! You're well ahead. Push into a portfolio project."}
        </div>
      </div>
    </div>
  );
}

function Roadmap() {
  const stages = [
    {
      t: "Month 1–2 · Foundations",
      items: ["Python basics (variables, loops, functions)", "Plot charts in matplotlib", "Read 1 data-set"],
      c: "var(--accent-coral)",
    },
    {
      t: "Month 3–4 · Data",
      items: ["Pandas: read CSV, filter rows", "Statistics: mean, median, variance", "Build 1 dashboard"],
      c: "var(--accent-yellow)",
    },
    {
      t: "Month 5–6 · ML",
      items: ["Scikit-learn: KNN, Regression", "Train/Test split", "Evaluate with accuracy"],
      c: "var(--accent-mint)",
    },
    {
      t: "Month 7–8 · Deep Learning",
      items: ["Neural nets intuition", "Tiny CNN on images", "Hugging Face tutorials"],
      c: "var(--accent-sky)",
    },
    {
      t: "Month 9–12 · Portfolio",
      items: ["1 capstone project", "Host on GitHub", "Write a blog post about it"],
      c: "var(--accent-lavender)",
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-3">A 12-month plan</h3>
      <p className="text-muted-foreground text-sm mb-4">
        You don't need to rush — but if you want a map, here's one.
      </p>
      <div className="space-y-3">
        {stages.map((s, i) => (
          <div
            key={s.t}
            className="rounded-xl p-4 flex gap-4 items-start"
            style={{ background: `${s.c}22`, border: `2px solid ${s.c}` }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0"
              style={{ background: s.c }}
            >
              {i + 1}
            </div>
            <div>
              <div className="font-bold">{s.t}</div>
              <ul className="list-disc pl-4 text-sm mt-1 space-y-0.5">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <InfoBox tone="green" title="This course covers up to Month 6">
        Units 3–6 of AI Sparks map directly to the first 6 months of this roadmap.
      </InfoBox>
    </div>
  );
}

export default function SkillsToBuild() {
  return (
    <LessonShell
      lessonId="u2l2"
      unitNumber={2}
      lessonNumber={2}
      title="Skills You Need"
      subtitle="Your AI toolkit — what to learn and in what order"
      emoji="🛠️"
      unitColor="var(--accent-lavender)"
      tabs={[
        {
          title: "Self-check",
          icon: "📊",
          content: <SkillSelfCheck />,
        },
        {
          title: "Roadmap",
          icon: "🗺️",
          content: <Roadmap />,
        },
      ]}
      quiz={[
        {
          q: "Which two skills are the most universal across ALL AI careers?",
          options: [
            "C++ and assembly",
            "Python + Data literacy",
            "Java + HTML",
            "Photoshop + Video editing",
          ],
          correct: 1,
          explain:
            "Python is the lingua franca of AI, and you can't do AI without reading data.",
        },
        {
          q: "Why does communication matter in AI?",
          options: [
            "It doesn't — only code matters.",
            "To explain your model's results to non-technical people.",
            "Only for product managers.",
            "Only for selling courses.",
          ],
          correct: 1,
          explain:
            "A model nobody understands won't be used. Good AI people explain their work clearly.",
        },
        {
          q: "First skill to build in your very first month?",
          options: ["Transformers", "Python basics", "Kubernetes", "Quantum computing"],
          correct: 1,
          explain: "Everything else sits on top of Python basics.",
        },
      ]}
    />
  );
}
