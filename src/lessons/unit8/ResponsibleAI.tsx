"use client";

import { useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

const PLEDGES = [
  {
    id: "transparent",
    title: "I will be transparent",
    desc: "I'll explain what my model does, what data it used, and when it might be wrong.",
    emoji: "🔎",
  },
  {
    id: "fair",
    title: "I will check for fairness",
    desc: "I'll test how my model performs across different groups, not just overall.",
    emoji: "⚖️",
  },
  {
    id: "private",
    title: "I will respect privacy",
    desc: "I won't use personal data without consent. I'll anonymise where possible.",
    emoji: "🔒",
  },
  {
    id: "human",
    title: "I will keep humans in the loop",
    desc: "For decisions that affect lives (health, justice, hiring), humans review — not just the AI.",
    emoji: "🤝",
  },
  {
    id: "harm",
    title: "I will avoid harmful use",
    desc: "I won't build AI to deceive, stalk, or manipulate — even if asked.",
    emoji: "🚫",
  },
  {
    id: "env",
    title: "I will think about the planet",
    desc: "Training models uses power. I'll use smaller models where possible.",
    emoji: "🌱",
  },
  {
    id: "grow",
    title: "I will keep learning",
    desc: "Ethics isn't a checklist — it's a habit. I'll read, discuss, and update my views.",
    emoji: "📚",
  },
];

function Pledge() {
  const [signed, setSigned] = useState<Record<string, boolean>>({});
  const [name, setName] = useState("");
  const done = Object.values(signed).filter(Boolean).length;

  function toggle(id: string) {
    setSigned((s) => ({ ...s, [id]: !s[id] }));
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Sign your ethics pledge</h3>
      <p className="text-muted-foreground text-sm mb-3">
        Tap each promise you want to make. You can change your mind anytime — that's the whole
        point of ethics.
      </p>
      <div className="space-y-2">
        {PLEDGES.map((p) => {
          const on = !!signed[p.id];
          return (
            <button
              key={p.id}
              onClick={() => toggle(p.id)}
              className="w-full text-left rounded-xl p-3 flex gap-3 items-start transition border-2"
              style={{
                background: on ? "#e5f8ef" : "white",
                borderColor: on ? "#6ed3b3" : "var(--color-border)",
              }}
            >
              <div className="text-2xl shrink-0">{p.emoji}</div>
              <div className="flex-1">
                <div className="font-bold">
                  {on ? "✓ " : ""}
                  {p.title}
                </div>
                <div className="text-sm text-muted-foreground">{p.desc}</div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 card-sketchy p-4" style={{ background: "#fff9ec" }}>
        <div className="flex items-center gap-3 flex-wrap">
          <label className="text-sm font-semibold">Signed by:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="border-2 border-[var(--color-foreground)] rounded-md px-3 py-1 flex-1 min-w-32"
          />
        </div>
        <div className="mt-2 text-sm">
          You've signed <strong>{done}</strong> of {PLEDGES.length} pledges.
        </div>
        {done === PLEDGES.length && name && (
          <div
            className="mt-3 card-sketchy p-4 text-center animate-bounce-in"
            style={{ background: "var(--accent-mint)" }}
          >
            <div className="font-hand text-2xl">
              🏅 {name} — Responsible AI Signer
            </div>
            <div className="text-sm mt-1">Signed on {new Date().toLocaleDateString()}</div>
          </div>
        )}
      </div>
    </div>
  );
}

function EthicsScenarios() {
  const scenarios = [
    {
      title: "Building a face-recognition app for your school",
      think: [
        "Who will have their face stored? Did they agree?",
        "Who has access to the database?",
        "What happens if the system falsely matches someone?",
        "Is the training data representative of all students?",
      ],
    },
    {
      title: "An AI that recommends study resources",
      think: [
        "Does it know each student's struggles privately?",
        "Could it harm confidence by recommending 'easy' material?",
        "Is it recommending from a biased source list?",
      ],
    },
    {
      title: "A chatbot that answers medical questions",
      think: [
        "What if the AI gives wrong info and someone acts on it?",
        "Does it encourage users to consult a real doctor?",
        "Is there a clear disclaimer?",
      ],
    },
  ];
  const [idx, setIdx] = useState(0);
  const s = scenarios[idx];

  return (
    <div>
      <h3 className="text-xl font-bold mb-3">Think before you build</h3>
      <div className="flex gap-2 flex-wrap mb-3">
        {scenarios.map((sc, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="tab-btn"
            style={{
              background: idx === i ? "var(--color-foreground)" : "transparent",
              color: idx === i ? "var(--color-background)" : undefined,
              border: "2px solid var(--color-foreground)",
            }}
          >
            Scenario {i + 1}
          </button>
        ))}
      </div>

      <div className="card-sketchy p-5">
        <h4 className="font-bold text-lg mb-2">{s.title}</h4>
        <div className="text-sm mb-2">Questions to ask before building:</div>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          {s.think.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
      </div>
      <InfoBox tone="blue" title="The pause">
        The single most powerful ethics tool: <strong>stop and ask these questions before you
        write code</strong>. Once a model is built, changing course is expensive.
      </InfoBox>
    </div>
  );
}

export default function ResponsibleAI() {
  return (
    <LessonShell
      lessonId="u8l2"
      unitNumber={8}
      lessonNumber={2}
      title="Responsible AI Pledge"
      subtitle="Your personal ethics checklist for building AI"
      emoji="🤝"
      unitColor="var(--accent-lavender)"
      tabs={[
        {
          title: "The pledge",
          icon: "📝",
          content: <Pledge />,
        },
        {
          title: "Think before you build",
          icon: "🧠",
          content: <EthicsScenarios />,
        },
      ]}
      quiz={[
        {
          q: "'Transparency' in AI means:",
          options: [
            "The model is see-through",
            "You explain what your model does, its data, and its limits",
            "The code is public",
            "You use glass computers",
          ],
          correct: 1,
          explain:
            "Transparency = letting users understand the model — its purpose, data, and failure modes.",
        },
        {
          q: "Why keep a human 'in the loop' for high-stakes decisions?",
          options: [
            "To slow things down",
            "To catch mistakes and take responsibility",
            "Because AI is always wrong",
            "To save electricity",
          ],
          correct: 1,
          explain:
            "Humans provide judgement, context, and accountability that models can't.",
        },
        {
          q: "When should you ask ethics questions?",
          options: [
            "Only after launch",
            "Only when something breaks",
            "Before you write the first line of code",
            "Never — AI is neutral",
          ],
          correct: 2,
          explain:
            "Ethics questions asked early shape the whole project. Asking late is damage control.",
        },
      ]}
    />
  );
}
