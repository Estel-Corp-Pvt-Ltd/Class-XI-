"use client";

import { useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

const APPS = [
  { emoji: "📸", name: "Google Photos", job: "Groups photos by faces, places, and pets." },
  { emoji: "🎵", name: "Spotify", job: "Picks the next song you'll love." },
  { emoji: "🎥", name: "YouTube", job: "Suggests the next video to watch." },
  { emoji: "🛒", name: "Amazon", job: "Recommends products based on your history." },
  { emoji: "📧", name: "Gmail", job: "Filters spam and writes smart replies." },
  { emoji: "🗺️", name: "Google Maps", job: "Predicts traffic and best routes." },
  { emoji: "🏦", name: "Bank apps", job: "Detects fraud in real time." },
  { emoji: "🚗", name: "Ola / Uber", job: "Matches drivers and sets surge prices." },
  { emoji: "🎨", name: "Snapchat / Instagram", job: "Puts AR filters on your face." },
  { emoji: "🎮", name: "Video games", job: "Controls enemies and teammates (NPCs)." },
  { emoji: "🏥", name: "Hospitals", job: "Reads X-rays and scans for diseases." },
  { emoji: "📱", name: "Siri / Alexa", job: "Understands voice commands." },
];

function AppGrid() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">AI you use every day</h3>
      <p className="text-muted-foreground text-sm mb-4">
        Tap any app — see the AI behind it.
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {APPS.map((a, i) => (
          <button
            key={a.name}
            onClick={() => setSelected(i)}
            className="card-soft p-2 text-center transition hover:translate-y-[-2px]"
            style={{
              background: selected === i ? "var(--accent-yellow)" : undefined,
            }}
          >
            <div className="text-3xl">{a.emoji}</div>
            <div className="text-xs font-semibold mt-1">{a.name}</div>
          </button>
        ))}
      </div>
      {selected !== null && (
        <InfoBox tone="blue" title={`${APPS[selected].emoji} ${APPS[selected].name}`}>
          {APPS[selected].job}
        </InfoBox>
      )}
    </div>
  );
}

function DomainsGrid() {
  const domains = [
    { e: "🏥", t: "Healthcare", d: "Diagnose diseases from scans, suggest treatments, design new drugs." },
    { e: "🚗", t: "Transport", d: "Self-driving cars, traffic prediction, smart traffic lights." },
    { e: "🛍️", t: "Retail", d: "Personalised shopping, demand forecasting, checkout-free stores." },
    { e: "💰", t: "Finance", d: "Fraud detection, stock prediction, credit scoring." },
    { e: "🎓", t: "Education", d: "Personalised tutoring, auto-grading, learning analytics." },
    { e: "🎮", t: "Entertainment", d: "Recommender systems, game AI, deepfake effects." },
    { e: "🌾", t: "Agriculture", d: "Crop disease detection, yield prediction, precision farming." },
    { e: "🏭", t: "Manufacturing", d: "Predictive maintenance, quality inspection, robotics." },
  ];
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Where AI is used — the big picture</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {domains.map((d) => (
          <div key={d.t} className="card-soft p-4">
            <div className="flex items-start gap-3">
              <div className="text-3xl">{d.e}</div>
              <div>
                <div className="font-bold">{d.t}</div>
                <div className="text-sm text-muted-foreground">{d.d}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StoryBuilder() {
  const [name, setName] = useState("");
  const [time, setTime] = useState(0);

  const story = [
    {
      t: "7:30 AM",
      text: (n: string) => `${n || "You"} wake up — Siri reads out the weather. (AI: voice recognition + natural language)`,
    },
    {
      t: "8:15 AM",
      text: () => "Google Maps shows the fastest route to school. (AI: traffic prediction)",
    },
    {
      t: "10:00 AM",
      text: () => "A spam email is blocked in Gmail. (AI: classification)",
    },
    {
      t: "1:30 PM",
      text: () => "Instagram filter adds cat ears to your selfie. (AI: face detection)",
    },
    {
      t: "5:00 PM",
      text: () => "YouTube autoplays a song you'd love. (AI: recommender system)",
    },
    {
      t: "9:00 PM",
      text: () => "Netflix queues up the next episode. (AI: sequence modelling)",
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">A day in your life — powered by AI</h3>
      <div className="mb-3 flex items-center gap-2 flex-wrap">
        <label className="text-sm font-semibold">Enter your name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-[var(--color-foreground)] rounded-md px-2 py-1 text-sm"
          placeholder="Your name"
        />
      </div>
      <div className="flex gap-2 mb-4">
        <button
          className="btn-sketchy-outline"
          onClick={() => setTime((t) => Math.max(0, t - 1))}
          disabled={time === 0}
        >
          ← Earlier
        </button>
        <button
          className="btn-sketchy"
          onClick={() => setTime((t) => Math.min(story.length - 1, t + 1))}
          disabled={time === story.length - 1}
        >
          Later →
        </button>
        <button className="btn-sketchy-outline" onClick={() => setTime(0)}>
          Reset
        </button>
      </div>
      <div
        className="card-soft p-5 min-h-32"
        style={{ background: "#fff9ec" }}
      >
        <div className="text-sm font-bold text-muted-foreground mb-1">
          {story[time].t}
        </div>
        <div className="text-lg">{story[time].text(name)}</div>
      </div>
      <div className="flex gap-1 mt-3 justify-center">
        {story.map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full border border-black/30"
            style={{
              background: i === time ? "var(--accent-coral)" : i < time ? "var(--accent-mint)" : "transparent",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function AIInLife() {
  return (
    <LessonShell
      lessonId="u1l3"
      unitNumber={1}
      lessonNumber={3}
      title="AI Around You"
      subtitle="Spot the AI working silently in your day"
      emoji="📱"
      unitColor="var(--accent-coral)"
      tabs={[
        {
          title: "Apps",
          icon: "📱",
          content: <AppGrid />,
        },
        {
          title: "Your day",
          icon: "🕐",
          content: <StoryBuilder />,
        },
        {
          title: "Big picture",
          icon: "🌍",
          content: <DomainsGrid />,
        },
      ]}
      quiz={[
        {
          q: "When Netflix suggests a movie based on what you watched, that's:",
          options: ["Rule-based program", "A recommender (ML)", "Deep fake", "A database query"],
          correct: 1,
          explain:
            "Recommenders learn from your history and similar users — a classic ML use case.",
        },
        {
          q: "Gmail spotting spam in your inbox is an example of:",
          options: ["Classification", "Regression", "Clustering", "Search"],
          correct: 0,
          explain:
            "Classification = deciding which class an input belongs to (spam vs not-spam).",
        },
        {
          q: "Which of these is NOT typically AI?",
          options: [
            "Face unlock on a phone",
            "A calculator adding two numbers",
            "Google Maps traffic prediction",
            "Siri answering a question",
          ],
          correct: 1,
          explain:
            "A calculator just follows fixed rules — no learning, no intelligence.",
        },
        {
          q: "An AI that detects tumours in X-rays belongs to which domain?",
          options: ["Finance", "Agriculture", "Healthcare", "Retail"],
          correct: 2,
          explain: "Medical imaging is a healthcare application of AI.",
        },
      ]}
    />
  );
}
