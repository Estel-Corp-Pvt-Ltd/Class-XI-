"use client";

import { useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

const CASES = [
  {
    title: "The hiring algorithm that hated women",
    e: "💼",
    story:
      "A big tech firm trained a CV-screening model on 10 years of hiring data. Problem: past hires were mostly men. The model learned to penalise CVs containing the word 'women's' (as in 'women's chess club'). The team had to scrap it.",
    lesson: "Historical data = historical bias. If the past was unfair, your model will be too.",
  },
  {
    title: "The camera that couldn't see dark skin",
    e: "📷",
    story:
      "A face-detection system worked well on light-skinned faces but failed on darker skin tones. The training photos were 80% light-skinned.",
    lesson: "Under-represented groups get worse accuracy. Always audit performance per subgroup.",
  },
  {
    title: "The translator that stereotyped jobs",
    e: "🌍",
    story:
      "A gender-neutral language was translated to English. 'They are a doctor' became 'He is a doctor'. 'They are a nurse' became 'She is a nurse'. The model absorbed gender stereotypes from training text.",
    lesson: "Language models reflect society's biases — good and bad.",
  },
  {
    title: "The loan model that redlined",
    e: "🏦",
    story:
      "A credit-scoring model used ZIP code as a feature. But ZIP code correlates with race. Effect: people from certain neighbourhoods were silently denied loans.",
    lesson: "Even 'neutral' features can sneak in protected attributes. Fairness needs auditing.",
  },
];

function CaseStudies() {
  const [idx, setIdx] = useState(0);
  const c = CASES[idx];
  return (
    <div>
      <h3 className="text-xl font-bold mb-3">Real cases where AI went wrong</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {CASES.map((cc, i) => (
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
            {cc.e} Case {i + 1}
          </button>
        ))}
      </div>
      <div className="card-sketchy p-5" style={{ background: "#fff4f4" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="text-4xl">{c.e}</div>
          <h4 className="text-lg font-bold">{c.title}</h4>
        </div>
        <p className="mb-3">{c.story}</p>
        <InfoBox tone="amber" title="Lesson">
          {c.lesson}
        </InfoBox>
      </div>
    </div>
  );
}

function BiasTypes() {
  const types = [
    {
      t: "Sampling bias",
      d: "Training data doesn't represent the real world. Example: medical AI trained only on photos from one country.",
      e: "🎯",
      c: "var(--accent-coral)",
    },
    {
      t: "Historical bias",
      d: "Past data reflects unfair past decisions. Example: hiring model learns from biased past hiring.",
      e: "⏳",
      c: "var(--accent-lavender)",
    },
    {
      t: "Labelling bias",
      d: "Humans labelling data may themselves be biased. Two labellers can disagree on the same image.",
      e: "🏷️",
      c: "var(--accent-yellow)",
    },
    {
      t: "Measurement bias",
      d: "The feature you measure is a stand-in for the real thing, and it's wrong. Example: arrests ≠ crime (policing isn't uniform).",
      e: "📏",
      c: "var(--accent-sky)",
    },
    {
      t: "Deployment bias",
      d: "Model was built for one purpose, used for another. A face-matching model used for surveillance it wasn't tested for.",
      e: "🚀",
      c: "var(--accent-mint)",
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-3">5 common types of bias</h3>
      <div className="space-y-2">
        {types.map((t) => (
          <div
            key={t.t}
            className="rounded-xl p-3 flex gap-3 items-start"
            style={{ background: `${t.c}15`, border: `2px solid ${t.c}` }}
          >
            <div className="text-3xl shrink-0">{t.e}</div>
            <div>
              <div className="font-bold">{t.t}</div>
              <div className="text-sm text-muted-foreground">{t.d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BiasInAI() {
  return (
    <LessonShell
      lessonId="u8l1"
      unitNumber={8}
      lessonNumber={1}
      title="Bias in AI"
      subtitle="When machines learn human mistakes — and how to spot them"
      emoji="🪞"
      unitColor="var(--accent-lavender)"
      tabs={[
        {
          title: "Case studies",
          icon: "📰",
          content: <CaseStudies />,
        },
        {
          title: "Types of bias",
          icon: "📚",
          content: <BiasTypes />,
        },
      ]}
      quiz={[
        {
          q: "An AI trained only on photos from one city will likely:",
          options: [
            "Work equally well everywhere",
            "Fail on photos from other places — sampling bias",
            "Learn faster",
            "Not matter, AI is objective",
          ],
          correct: 1,
          explain:
            "Training data that doesn't cover the real deployment world causes sampling bias.",
        },
        {
          q: "Why can 'ZIP code' be a risky feature?",
          options: [
            "ZIP codes are random",
            "It can silently encode protected attributes like race",
            "Python doesn't support ZIP codes",
            "It always overfits",
          ],
          correct: 1,
          explain:
            "ZIP code often correlates with race / income — a classic source of hidden bias.",
        },
        {
          q: "Best way to catch bias before deployment?",
          options: [
            "Hope for the best",
            "Evaluate accuracy per subgroup (gender, race, age)",
            "Make the model bigger",
            "Skip testing",
          ],
          correct: 1,
          explain:
            "Disaggregated evaluation — per subgroup — reveals whether the model is fair across groups.",
        },
      ]}
    />
  );
}
