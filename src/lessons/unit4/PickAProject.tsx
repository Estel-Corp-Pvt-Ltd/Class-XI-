"use client";

import { useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

type Project = {
  id: string;
  title: string;
  emoji: string;
  difficulty: 1 | 2 | 3;
  data: string;
  model: string;
  result: string;
  description: string;
};

const PROJECTS: Project[] = [
  {
    id: "grade",
    title: "Student grade predictor",
    emoji: "🎓",
    difficulty: 1,
    data: "A CSV with attendance, study hours, past marks.",
    model: "Linear Regression",
    result: "Predicts final score from the inputs.",
    description:
      "Perfect first project. All data is easy to collect from classmates (with permission!).",
  },
  {
    id: "spam",
    title: "SMS spam detector",
    emoji: "📨",
    difficulty: 2,
    data: "A labelled dataset of 5,000 real SMS (spam vs ham).",
    model: "Naive Bayes or Logistic Regression",
    result: "Tells if a new SMS is spam.",
    description:
      "A classic NLP project. You learn how words get turned into numbers.",
  },
  {
    id: "leaf",
    title: "Leaf disease classifier",
    emoji: "🌿",
    difficulty: 3,
    data: "Photos of healthy vs diseased leaves (PlantVillage dataset).",
    model: "Small CNN",
    result: "Classifies a leaf photo.",
    description: "Computer vision project — farmers can use it to check crops.",
  },
  {
    id: "mood",
    title: "Mood from music",
    emoji: "🎵",
    difficulty: 2,
    data: "Spotify audio features: tempo, energy, danceability + mood labels.",
    model: "K-Nearest Neighbours",
    result: "Recommends songs matching a mood.",
    description: "Fun, musical, and shows classification with real features.",
  },
  {
    id: "handwriting",
    title: "Handwritten digit recogniser",
    emoji: "✍️",
    difficulty: 2,
    data: "MNIST — 70,000 images of handwritten 0-9.",
    model: "Tiny neural network",
    result: "Reads a digit you draw.",
    description: "The 'hello world' of deep learning. Impressive demo!",
  },
  {
    id: "sentiment",
    title: "Movie review sentiment",
    emoji: "🎬",
    difficulty: 2,
    data: "IMDB reviews labelled positive/negative.",
    model: "Logistic Regression on TF-IDF features",
    result: "Rates a review from 0 to 10 stars.",
    description: "NLP project teaching text vectorisation.",
  },
];

function Recommender() {
  const [time, setTime] = useState<"low" | "med" | "high">("med");
  const [topic, setTopic] = useState<"numbers" | "words" | "images">("numbers");
  const [tried, setTried] = useState<"none" | "some">("none");

  const score = (p: Project) => {
    let s = 0;
    if (time === "low" && p.difficulty === 1) s += 3;
    if (time === "med" && p.difficulty === 2) s += 3;
    if (time === "high" && p.difficulty === 3) s += 3;
    if (time === "med" && p.difficulty === 1) s += 1;

    if (topic === "numbers" && ["grade", "mood"].includes(p.id)) s += 3;
    if (topic === "words" && ["spam", "sentiment"].includes(p.id)) s += 3;
    if (topic === "images" && ["leaf", "handwriting"].includes(p.id)) s += 3;

    if (tried === "none" && p.difficulty === 1) s += 1;
    return s;
  };

  const ranked = [...PROJECTS].sort((a, b) => score(b) - score(a));
  const top = ranked[0];

  return (
    <div>
      <h3 className="text-xl font-bold mb-3">Find your capstone</h3>
      <div className="grid sm:grid-cols-3 gap-4 mb-4">
        <div>
          <div className="font-semibold text-sm mb-1">⏳ Time available</div>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value as typeof time)}
            className="w-full border-2 border-[var(--color-foreground)] rounded-md p-2"
          >
            <option value="low">A weekend</option>
            <option value="med">A few weekends</option>
            <option value="high">A full month</option>
          </select>
        </div>
        <div>
          <div className="font-semibold text-sm mb-1">🎨 What excites you?</div>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value as typeof topic)}
            className="w-full border-2 border-[var(--color-foreground)] rounded-md p-2"
          >
            <option value="numbers">Numbers / predictions</option>
            <option value="words">Words / chat</option>
            <option value="images">Images / vision</option>
          </select>
        </div>
        <div>
          <div className="font-semibold text-sm mb-1">🛠️ Prior ML experience</div>
          <select
            value={tried}
            onChange={(e) => setTried(e.target.value as typeof tried)}
            className="w-full border-2 border-[var(--color-foreground)] rounded-md p-2"
          >
            <option value="none">None</option>
            <option value="some">Some</option>
          </select>
        </div>
      </div>

      <div
        className="card-sketchy p-5"
        style={{ background: "#fff9ec" }}
      >
        <div className="text-xs font-bold uppercase text-muted-foreground">
          Recommended for you
        </div>
        <div className="flex items-center gap-3 my-2">
          <div className="text-4xl">{top.emoji}</div>
          <div className="text-xl font-bold">{top.title}</div>
          <span className="chip" style={{ background: "var(--accent-yellow)" }}>
            {"⭐".repeat(top.difficulty)}
          </span>
        </div>
        <p className="text-sm mb-3">{top.description}</p>
        <div className="grid sm:grid-cols-3 gap-3 text-sm">
          <div>
            <div className="font-bold">📊 Data</div>
            <div className="text-muted-foreground">{top.data}</div>
          </div>
          <div>
            <div className="font-bold">🧠 Model</div>
            <div className="text-muted-foreground">{top.model}</div>
          </div>
          <div>
            <div className="font-bold">🎯 Outcome</div>
            <div className="text-muted-foreground">{top.result}</div>
          </div>
        </div>
      </div>

      <h4 className="font-bold mt-5 mb-2">All options</h4>
      <div className="grid sm:grid-cols-2 gap-2">
        {ranked.slice(1).map((p) => (
          <div key={p.id} className="card-soft p-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{p.emoji}</span>
              <span className="font-bold">{p.title}</span>
              <span className="ml-auto text-xs">{"⭐".repeat(p.difficulty)}</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">{p.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProposalForm() {
  const [problem, setProblem] = useState("");
  const [data, setData] = useState("");
  const [success, setSuccess] = useState("");
  const [risk, setRisk] = useState("");

  const filled = [problem, data, success, risk].filter(Boolean).length;

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Write your capstone proposal</h3>
      <p className="text-muted-foreground text-sm mb-4">
        Fill 4 short answers — that's your whole plan. (Saved locally as you type.)
      </p>
      <div className="space-y-4">
        <Field
          label="1. Problem statement"
          hint="Who has a problem? What are you solving?"
          value={problem}
          onChange={setProblem}
        />
        <Field
          label="2. Data source"
          hint="Where will your data come from?"
          value={data}
          onChange={setData}
        />
        <Field
          label="3. Success metric"
          hint='How will you know it works? e.g. "Accuracy above 75%"'
          value={success}
          onChange={setSuccess}
        />
        <Field
          label="4. Biggest risk"
          hint="What could go wrong? (too little data, bias, ethics...)"
          value={risk}
          onChange={setRisk}
        />
      </div>
      <div className="mt-4 h-2 bg-[var(--color-muted)] rounded-full overflow-hidden border border-black/10">
        <div
          className="h-full transition-all"
          style={{
            width: `${(filled / 4) * 100}%`,
            background: "linear-gradient(90deg, var(--accent-mint), var(--accent-sky))",
          }}
        />
      </div>
      <div className="text-center text-sm mt-1 font-semibold">
        {filled} / 4 fields done
      </div>
      {filled === 4 && (
        <InfoBox tone="green" title="🎉 Proposal ready!">
          Save this somewhere (Google Doc / Notes). You now have a real plan — most teams never
          get this far.
        </InfoBox>
      )}
    </div>
  );
}

function Field({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="font-bold text-sm">{label}</label>
      <div className="text-xs text-muted-foreground mb-1">{hint}</div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-2 border-[var(--color-foreground)] rounded-lg p-2 text-sm resize-y"
        rows={2}
      />
    </div>
  );
}

export default function PickAProject() {
  return (
    <LessonShell
      lessonId="u4l2"
      unitNumber={4}
      lessonNumber={2}
      title="Choose Your Capstone"
      subtitle="Project ideas that fit Class 11 — pick one and plan it"
      emoji="🎯"
      unitColor="var(--accent-yellow)"
      tabs={[
        {
          title: "Project finder",
          icon: "🔎",
          content: <Recommender />,
        },
        {
          title: "Your proposal",
          icon: "📝",
          content: <ProposalForm />,
        },
      ]}
      quiz={[
        {
          q: "Which project is the EASIEST starting point?",
          options: [
            "Leaf disease classifier",
            "Student grade predictor",
            "Movie review sentiment",
            "Handwritten digit recogniser",
          ],
          correct: 1,
          explain:
            "Grade predictor uses numeric data that's easy to collect — no deep learning needed.",
        },
        {
          q: "A good 'success metric' is:",
          options: [
            "'Make it cool'",
            "'Accuracy above 75% on the test set'",
            "'Impress the teacher'",
            "'Finish by Friday'",
          ],
          correct: 1,
          explain:
            "Success metrics must be measurable. 'Accuracy > 75%' is a number you can check.",
        },
      ]}
    />
  );
}
