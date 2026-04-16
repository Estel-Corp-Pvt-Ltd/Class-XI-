"use client";

import { useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

const STEPS = [
  {
    num: 1,
    title: "Define the problem",
    emoji: "🎯",
    desc: "Write one sentence: what are we trying to solve, for whom?",
    example: "Predict if a student will pass Class 11 finals based on attendance + marks so far.",
  },
  {
    num: 2,
    title: "Collect data",
    emoji: "🗂️",
    desc: "Find (or gather) real examples related to the problem.",
    example: "100 rows of student data: attendance %, mid-term marks, final result.",
  },
  {
    num: 3,
    title: "Clean + explore",
    emoji: "🧹",
    desc: "Fix missing/wrong values. Look at the data — spot patterns.",
    example: "Fill missing attendance with the class average; plot a scatter of marks vs result.",
  },
  {
    num: 4,
    title: "Choose a model",
    emoji: "🧠",
    desc: "Pick an algorithm that fits the problem type.",
    example: "This is a classification task → try Logistic Regression or KNN.",
  },
  {
    num: 5,
    title: "Train",
    emoji: "⚙️",
    desc: "Let the model learn patterns from the training data.",
    example: "Split 80/20. Train on 80%, keep 20% secret for testing.",
  },
  {
    num: 6,
    title: "Evaluate",
    emoji: "📊",
    desc: "Measure how well it works on new data.",
    example: "Accuracy = 84%. Good! But is 84% enough for your use-case?",
  },
  {
    num: 7,
    title: "Deploy + iterate",
    emoji: "🚀",
    desc: "Put it in front of users. Collect feedback. Improve.",
    example: "Teachers use the predictions to flag at-risk students — and give feedback.",
  },
];

function Lifecycle() {
  const [step, setStep] = useState(0);
  return (
    <div>
      <h3 className="text-xl font-bold mb-3">The 7 steps of every AI project</h3>
      <div className="grid grid-cols-7 gap-1 mb-4">
        {STEPS.map((s, i) => (
          <button
            key={s.num}
            onClick={() => setStep(i)}
            className="rounded-lg p-2 text-center transition"
            style={{
              background:
                step === i
                  ? "var(--accent-yellow)"
                  : step > i
                  ? "var(--accent-mint)"
                  : "var(--color-muted)",
              borderColor: "var(--color-foreground)",
              borderWidth: 2,
              borderStyle: "solid",
            }}
          >
            <div className="text-lg">{s.emoji}</div>
            <div className="text-xs font-bold">{s.num}</div>
          </button>
        ))}
      </div>
      <div className="card-sketchy p-5" style={{ background: "#fff9ec" }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="text-3xl">{STEPS[step].emoji}</div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              Step {STEPS[step].num} / 7
            </div>
            <div className="text-xl font-bold">{STEPS[step].title}</div>
          </div>
        </div>
        <p className="mb-3">{STEPS[step].desc}</p>
        <InfoBox tone="blue" title="Example">
          {STEPS[step].example}
        </InfoBox>
        <div className="flex gap-2 mt-3">
          <button
            className="btn-sketchy-outline"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            ← Back
          </button>
          <button
            className="btn-sketchy"
            onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
            disabled={step === STEPS.length - 1}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

function StepSorter() {
  const SHUFFLED = [3, 0, 5, 1, 6, 2, 4];
  const [order, setOrder] = useState<number[]>(SHUFFLED);
  const [selected, setSelected] = useState<number | null>(null);

  function swap(a: number, b: number) {
    setOrder((o) => {
      const next = [...o];
      [next[a], next[b]] = [next[b], next[a]];
      return next;
    });
  }

  const correct = order.every((v, i) => v === i);

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Put the steps in order</h3>
      <p className="text-muted-foreground text-sm mb-4">
        Tap two cards to swap them. Aim: 1 → 7 in order.
      </p>
      <div className="grid gap-2">
        {order.map((idx, pos) => {
          const s = STEPS[idx];
          const sel = selected === pos;
          return (
            <button
              key={pos}
              onClick={() => {
                if (selected === null) setSelected(pos);
                else if (selected === pos) setSelected(null);
                else {
                  swap(selected, pos);
                  setSelected(null);
                }
              }}
              className="text-left px-3 py-2 rounded-lg border-2 flex items-center gap-3 transition"
              style={{
                background: sel ? "var(--accent-yellow)" : "white",
                borderColor: "var(--color-foreground)",
              }}
            >
              <span className="text-2xl">{s.emoji}</span>
              <span className="flex-1 font-semibold">{s.title}</span>
              <span className="chip">pos {pos + 1}</span>
            </button>
          );
        })}
      </div>
      {correct && (
        <div
          className="mt-4 card-sketchy p-4 text-center animate-bounce-in"
          style={{ background: "#e5f8ef" }}
        >
          🎉 Perfect order! This is the AI project lifecycle.
        </div>
      )}
    </div>
  );
}

export default function ProjectLifecycle() {
  return (
    <LessonShell
      lessonId="u4l1"
      unitNumber={4}
      lessonNumber={1}
      title="The AI Project Lifecycle"
      subtitle="From a blank sheet to a working model"
      emoji="♻️"
      unitColor="var(--accent-yellow)"
      tabs={[
        {
          title: "The 7 steps",
          icon: "🗺️",
          content: <Lifecycle />,
        },
        {
          title: "Put in order",
          icon: "🧩",
          content: <StepSorter />,
        },
      ]}
      quiz={[
        {
          q: "What is the FIRST step of an AI project?",
          options: [
            "Train a model",
            "Collect data",
            "Define the problem",
            "Deploy it",
          ],
          correct: 2,
          explain: "Always start with a clear problem statement. No problem = no useful AI.",
        },
        {
          q: "Why split data into training and test sets?",
          options: [
            "To save memory",
            "To honestly measure how the model does on unseen data",
            "Because Python requires it",
            "To confuse the model",
          ],
          correct: 1,
          explain:
            "If you test on the same data you trained on, the model could be cheating by memorising. A separate test set gives an honest score.",
        },
        {
          q: "What does 'iterate' mean in the lifecycle?",
          options: [
            "Run a for loop",
            "Improve the model after learning from real-world use",
            "Delete everything and start over",
            "Wait 6 months",
          ],
          correct: 1,
          explain: "Real AI projects improve in cycles — deploy, learn, fix, deploy again.",
        },
      ]}
    />
  );
}
