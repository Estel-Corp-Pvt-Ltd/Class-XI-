"use client";

import { useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

const PROBLEMS: { q: string; answer: "sup" | "unsup"; why: string }[] = [
  {
    q: "You have 1000 emails labelled 'spam' or 'not spam'. Build a classifier.",
    answer: "sup",
    why: "Each example already has a label → supervised.",
  },
  {
    q: "You have 10,000 customers and no labels. Find similar groups.",
    answer: "unsup",
    why: "No labels — just find structure in the data → unsupervised (clustering).",
  },
  {
    q: "Predict house prices from size, rooms, and location using past sales.",
    answer: "sup",
    why: "Past sale prices are labels → supervised regression.",
  },
  {
    q: "Given songs with no genre tag, group similar songs together.",
    answer: "unsup",
    why: "No genre labels — group by audio features → unsupervised.",
  },
  {
    q: "Label unusual transactions as fraud, given labelled fraud history.",
    answer: "sup",
    why: "Labelled examples exist → supervised.",
  },
];

function ProblemQuiz() {
  const [picks, setPicks] = useState<Record<number, "sup" | "unsup">>({});

  return (
    <div>
      <h3 className="text-xl font-bold mb-3">Supervised or Unsupervised?</h3>
      <div className="space-y-3">
        {PROBLEMS.map((p, i) => {
          const pick = picks[i];
          const right = pick === p.answer;
          return (
            <div key={i} className="card-soft p-3">
              <div className="font-semibold mb-2">{p.q}</div>
              <div className="flex gap-2">
                <button
                  onClick={() => setPicks((x) => ({ ...x, [i]: "sup" }))}
                  className="tab-btn"
                  style={{
                    background: pick === "sup" ? "var(--accent-coral)" : "transparent",
                    color: pick === "sup" ? "white" : undefined,
                    border: "2px solid var(--color-foreground)",
                  }}
                >
                  🎓 Supervised
                </button>
                <button
                  onClick={() => setPicks((x) => ({ ...x, [i]: "unsup" }))}
                  className="tab-btn"
                  style={{
                    background: pick === "unsup" ? "var(--accent-sky)" : "transparent",
                    color: pick === "unsup" ? "white" : undefined,
                    border: "2px solid var(--color-foreground)",
                  }}
                >
                  🔍 Unsupervised
                </button>
              </div>
              {pick && (
                <div
                  className="mt-2 text-sm px-2 py-1 rounded"
                  style={{
                    background: right ? "#e5f8ef" : "#ffe5e5",
                    border: `1.5px solid ${right ? "#6ed3b3" : "#ff6b6b"}`,
                  }}
                >
                  {right ? "✓ Correct! " : "✗ Try again — "}
                  {p.why}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function SupervisedVsUnsupervised() {
  return (
    <LessonShell
      lessonId="u6l1"
      unitNumber={6}
      lessonNumber={1}
      title="Supervised vs Unsupervised"
      subtitle="Two fundamentally different ways to teach a machine"
      emoji="🎓"
      unitColor="var(--accent-rose)"
      tabs={[
        {
          title: "Explain",
          icon: "📘",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-3">Two flavours of learning</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="card-sketchy p-4" style={{ background: "#ffe5e5" }}>
                  <div className="text-3xl mb-2">🎓</div>
                  <h4 className="font-bold text-lg">Supervised Learning</h4>
                  <p className="text-sm mt-1">
                    You show the machine input + the correct answer. It learns to predict the
                    answer for new inputs.
                  </p>
                  <p className="text-xs mt-2 italic">
                    Example: 1000 emails labelled spam/not-spam → predict new emails.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    <span className="chip">Classification</span>
                    <span className="chip">Regression</span>
                  </div>
                </div>
                <div className="card-sketchy p-4" style={{ background: "#e8f2ff" }}>
                  <div className="text-3xl mb-2">🔍</div>
                  <h4 className="font-bold text-lg">Unsupervised Learning</h4>
                  <p className="text-sm mt-1">
                    No labels. The machine finds patterns, groups or structure by itself.
                  </p>
                  <p className="text-xs mt-2 italic">
                    Example: 10,000 customers → automatically find 5 groups.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    <span className="chip">Clustering</span>
                    <span className="chip">Dim. reduction</span>
                  </div>
                </div>
              </div>
              <InfoBox tone="amber" title="Key difference">
                Labels = teacher. <strong>Supervised</strong> has a teacher marking answers.{" "}
                <strong>Unsupervised</strong> has no teacher — the machine explores on its own.
              </InfoBox>
            </div>
          ),
        },
        {
          title: "Practice",
          icon: "🎯",
          content: <ProblemQuiz />,
        },
      ]}
      quiz={[
        {
          q: "Which of these is supervised learning?",
          options: [
            "Grouping similar songs",
            "Predicting rainfall from past weather",
            "Finding outlier transactions with no labels",
            "Dimensionality reduction",
          ],
          correct: 1,
          explain: "Past weather with known rainfall → supervised regression.",
        },
        {
          q: "Classification and Regression are both types of:",
          options: ["Unsupervised", "Supervised", "Reinforcement", "Neural networks"],
          correct: 1,
          explain: "Both predict a labelled output → supervised.",
        },
        {
          q: "You cluster students into groups based on study habits — which type?",
          options: ["Supervised", "Unsupervised", "Neither", "Deep learning"],
          correct: 1,
          explain: "No labels, just grouping → unsupervised (clustering).",
        },
      ]}
    />
  );
}
