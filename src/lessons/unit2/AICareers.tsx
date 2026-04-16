"use client";

import { useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

type Career = {
  title: string;
  emoji: string;
  tagline: string;
  tasks: string[];
  skills: string[];
  salary: string;
};

const CAREERS: Career[] = [
  {
    title: "Data Scientist",
    emoji: "🔬",
    tagline: "Find stories inside data.",
    tasks: [
      "Cleans messy data",
      "Builds predictive models",
      "Tells a story with charts",
    ],
    skills: ["Python", "Statistics", "Pandas", "Communication"],
    salary: "₹8–30 LPA",
  },
  {
    title: "Machine Learning Engineer",
    emoji: "⚙️",
    tagline: "Ship models that serve millions.",
    tasks: [
      "Trains models at scale",
      "Deploys to production",
      "Monitors live systems",
    ],
    skills: ["Python", "PyTorch / TF", "APIs", "Cloud"],
    salary: "₹10–40 LPA",
  },
  {
    title: "AI Research Scientist",
    emoji: "🧪",
    tagline: "Invent new algorithms.",
    tasks: [
      "Reads research papers",
      "Prototypes new methods",
      "Publishes findings",
    ],
    skills: ["Deep Maths", "Research writing", "PhD often"],
    salary: "₹15–60 LPA",
  },
  {
    title: "Data Analyst",
    emoji: "📈",
    tagline: "Turn numbers into decisions.",
    tasks: [
      "Writes SQL queries",
      "Builds dashboards",
      "Answers business questions",
    ],
    skills: ["SQL", "Excel", "Tableau / PowerBI"],
    salary: "₹4–15 LPA",
  },
  {
    title: "Computer Vision Engineer",
    emoji: "👁️",
    tagline: "Make machines see.",
    tasks: [
      "Builds image classifiers",
      "Trains object detectors",
      "Works on self-driving, medical imaging",
    ],
    skills: ["OpenCV", "CNNs", "C++ / Python"],
    salary: "₹10–35 LPA",
  },
  {
    title: "NLP Engineer",
    emoji: "💬",
    tagline: "Teach machines to understand language.",
    tasks: [
      "Builds chatbots",
      "Fine-tunes language models",
      "Handles translation, summaries",
    ],
    skills: ["Transformers", "Hugging Face", "Linguistics"],
    salary: "₹10–35 LPA",
  },
  {
    title: "AI Product Manager",
    emoji: "🎯",
    tagline: "Decide what AI to build.",
    tasks: [
      "Talks to users",
      "Prioritises features",
      "Bridges tech + business",
    ],
    skills: ["ML literacy", "Communication", "Strategy"],
    salary: "₹15–50 LPA",
  },
  {
    title: "AI Ethics Specialist",
    emoji: "⚖️",
    tagline: "Keep AI fair and safe.",
    tasks: [
      "Audits models for bias",
      "Writes ethics policies",
      "Advises on responsible deployment",
    ],
    skills: ["Policy", "Statistics", "Critical thinking"],
    salary: "₹8–25 LPA",
  },
];

function CareerExplorer() {
  const [idx, setIdx] = useState(0);
  const c = CAREERS[idx];
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">8 real AI careers</h3>
      <p className="text-muted-foreground text-sm mb-4">
        Click a card to explore what each role actually does day-to-day.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {CAREERS.map((cc, i) => (
          <button
            key={cc.title}
            onClick={() => setIdx(i)}
            className="card-soft p-2 text-center text-xs transition"
            style={{
              background: idx === i ? "var(--accent-lavender)" : undefined,
              color: idx === i ? "white" : undefined,
              borderColor: idx === i ? "var(--color-foreground)" : undefined,
            }}
          >
            <div className="text-2xl">{cc.emoji}</div>
            <div className="font-semibold mt-1 leading-tight">{cc.title}</div>
          </button>
        ))}
      </div>

      <div className="card-sketchy p-5" style={{ background: "#f6f0ff" }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="text-4xl">{c.emoji}</div>
          <div>
            <div className="text-xl font-bold">{c.title}</div>
            <div className="text-sm italic text-muted-foreground">"{c.tagline}"</div>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-3 mt-3 text-sm">
          <div>
            <div className="font-bold mb-1">📋 Day job</div>
            <ul className="list-disc pl-4 space-y-0.5">
              {c.tasks.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-bold mb-1">🛠️ Skills</div>
            <div className="flex flex-wrap gap-1">
              {c.skills.map((s) => (
                <span key={s} className="chip text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="font-bold mb-1">💰 Pay (India)</div>
            <div className="font-hand text-2xl">{c.salary}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuizMatch() {
  const qs = [
    { task: "Reads X-ray images to find tumours", career: "Computer Vision Engineer" },
    { task: "Writes SQL to find best-selling products", career: "Data Analyst" },
    { task: "Builds a chatbot for customer support", career: "NLP Engineer" },
    { task: "Invents a new training algorithm", career: "AI Research Scientist" },
  ];
  const [picks, setPicks] = useState<Record<number, string>>({});
  const careers = CAREERS.map((c) => c.title);
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Match task → career</h3>
      <div className="space-y-3">
        {qs.map((q, i) => {
          const p = picks[i];
          const right = p === q.career;
          return (
            <div key={i} className="card-soft p-3">
              <div className="font-semibold mb-2">{q.task}</div>
              <select
                value={p ?? ""}
                onChange={(e) => setPicks((x) => ({ ...x, [i]: e.target.value }))}
                className="border-2 border-[var(--color-foreground)] rounded-md px-2 py-1 w-full text-sm"
              >
                <option value="">Choose a career…</option>
                {careers.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {p && (
                <div
                  className="mt-2 text-sm px-2 py-1 rounded-md"
                  style={{
                    background: right ? "#e5f8ef" : "#ffe5e5",
                    border: `1.5px solid ${right ? "#6ed3b3" : "#ff6b6b"}`,
                  }}
                >
                  {right ? "✓ Correct!" : `✗ Try again — answer: ${q.career}`}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function AICareers() {
  return (
    <LessonShell
      lessonId="u2l1"
      unitNumber={2}
      lessonNumber={1}
      title="AI Career Map"
      subtitle="Eight real jobs in AI and what they actually do"
      emoji="🗺️"
      unitColor="var(--accent-lavender)"
      tabs={[
        {
          title: "Explorer",
          icon: "🧭",
          content: <CareerExplorer />,
        },
        {
          title: "Match-up",
          icon: "🔗",
          content: <QuizMatch />,
        },
        {
          title: "Advice",
          icon: "💡",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-3">You don't need to pick now</h3>
              <p className="mb-3">
                In Class 11, you're still <span className="marker-highlight-mint">exploring</span>.
                Most of these jobs didn't exist 15 years ago — so the one you'll do in 2035 may not
                exist yet either.
              </p>
              <InfoBox tone="green" title="What matters most right now">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Learn to code in Python.</li>
                  <li>Get comfortable with data — spreadsheets, charts, probability.</li>
                  <li>Build one small project end-to-end (even a class project).</li>
                  <li>Read + think about <em>ethics</em> — these jobs need judgement.</li>
                </ul>
              </InfoBox>
              <p className="text-sm text-muted-foreground mt-4">
                Every unit after this builds one of those four muscles.
              </p>
            </div>
          ),
        },
      ]}
      quiz={[
        {
          q: "Which role is MOST about deploying ML models to production?",
          options: [
            "Data Analyst",
            "Machine Learning Engineer",
            "AI Ethics Specialist",
            "AI Product Manager",
          ],
          correct: 1,
          explain:
            "ML Engineers take trained models and ship them as real services users can call.",
        },
        {
          q: "If you love maths + research papers, which career fits best?",
          options: ["Data Analyst", "AI Research Scientist", "AI PM", "Data Engineer"],
          correct: 1,
          explain:
            "Research Scientists invent new algorithms — deep maths, papers, experiments.",
        },
        {
          q: "An AI Ethics Specialist usually:",
          options: [
            "Writes faster algorithms",
            "Audits models for fairness and safety",
            "Builds the UI",
            "Manages servers",
          ],
          correct: 1,
          explain: "Ethics specialists check models for bias, harm, and misuse.",
        },
      ]}
    />
  );
}
