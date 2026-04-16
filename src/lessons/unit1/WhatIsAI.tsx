"use client";

import { useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

const DEFINITIONS = [
  "A machine that can solve maths problems.",
  "A computer that learns from data and makes decisions.",
  "A robot that looks like a human.",
  "A set of rules that never change.",
];

function ConceptSorter() {
  const [picked, setPicked] = useState<number | null>(null);
  const correct = 1;

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Which one is AI?</h3>
      <p className="text-muted-foreground mb-4 text-sm">
        Tap the best definition of Artificial Intelligence.
      </p>
      <div className="grid gap-2">
        {DEFINITIONS.map((d, i) => {
          const chosen = picked === i;
          const show = picked !== null;
          return (
            <button
              key={i}
              onClick={() => setPicked(i)}
              className="text-left px-4 py-3 rounded-lg border-2 font-semibold transition"
              style={{
                background: show
                  ? i === correct
                    ? "#e5f8ef"
                    : chosen
                    ? "#ffe5e5"
                    : "transparent"
                  : "transparent",
                borderColor: show
                  ? i === correct
                    ? "#6ed3b3"
                    : chosen
                    ? "#ff6b6b"
                    : "var(--color-border)"
                  : "var(--color-border)",
              }}
            >
              {d}
              {show && i === correct && <span className="ml-2">✓</span>}
              {show && chosen && i !== correct && <span className="ml-2">✗</span>}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <InfoBox tone="amber" title="Why?">
          AI is about <strong>learning from data</strong> — not following fixed rules, not just
          doing maths, and not just looking like a human. A calculator follows fixed rules;
          an AI improves with experience.
        </InfoBox>
      )}
    </div>
  );
}

function TuringTest() {
  const [typing, setTyping] = useState("");
  const [history, setHistory] = useState<{ who: "you" | "ai"; text: string }[]>([
    { who: "ai", text: "Hi! Ask me anything. I'm either a human or an AI — you decide." },
  ]);
  const [guess, setGuess] = useState<"ai" | "human" | null>(null);

  const responses: Record<string, string> = {
    hello: "Hello! How's your day going?",
    hi: "Hi there! What would you like to talk about?",
    "how are you": "Pretty good — running smoothly today. You?",
    "what is 2+2": "2 + 2 = 4.",
    "what is your name": "People call me Spark. What's yours?",
    "do you feel": "I process, therefore I... reply. 🙂",
  };

  function send() {
    if (!typing.trim()) return;
    const q = typing.toLowerCase().trim().replace(/[?.!]/g, "");
    const found = Object.keys(responses).find((k) => q.includes(k));
    const reply = found ? responses[found] : "Hmm, I'm not sure. Ask me something else?";
    setHistory((h) => [
      ...h,
      { who: "you", text: typing },
      { who: "ai", text: reply },
    ]);
    setTyping("");
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">The Turing Test</h3>
      <p className="text-muted-foreground text-sm mb-4">
        In 1950, Alan Turing asked: <em>if a machine can chat so well you can't tell
        it's a machine, is it "thinking"?</em> Try chatting below and guess.
      </p>

      <div
        className="rounded-xl p-3 mb-3"
        style={{ background: "#f7f5ee", border: "2px solid var(--color-border)", minHeight: "180px" }}
      >
        {history.map((m, i) => (
          <div
            key={i}
            className={`mb-2 flex ${m.who === "you" ? "justify-end" : "justify-start"}`}
          >
            <div
              className="max-w-xs px-3 py-2 rounded-xl text-sm"
              style={{
                background: m.who === "you" ? "var(--accent-sky)" : "white",
                color: m.who === "you" ? "white" : "var(--color-foreground)",
                border: "1.5px solid var(--color-foreground)",
              }}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={typing}
          onChange={(e) => setTyping(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Type a message..."
          className="flex-1 border-2 border-[var(--color-foreground)] rounded-lg px-3 py-2"
        />
        <button className="btn-sketchy" onClick={send}>
          Send
        </button>
      </div>

      <div className="mt-5">
        <p className="text-sm font-semibold mb-2">Human or AI?</p>
        <div className="flex gap-2">
          <button
            className="btn-sketchy-outline"
            onClick={() => setGuess("human")}
            style={guess === "human" ? { background: "var(--accent-mint)" } : undefined}
          >
            👤 Human
          </button>
          <button
            className="btn-sketchy-outline"
            onClick={() => setGuess("ai")}
            style={guess === "ai" ? { background: "var(--accent-lavender)", color: "white" } : undefined}
          >
            🤖 AI
          </button>
        </div>
        {guess && (
          <InfoBox tone="lavender" title="Reveal">
            It's an <strong>AI</strong> — a very tiny one, based on fixed rules
            (no learning). A real modern AI like ChatGPT is far more flexible because
            it <em>learned</em> from billions of words. That's the whole point of this course.
          </InfoBox>
        )}
      </div>
    </div>
  );
}

function HistoryTimeline() {
  const events = [
    { year: "1950", label: "Turing Test", e: "🧑‍🔬", text: "Alan Turing asks if machines can think." },
    { year: "1956", label: "AI is born", e: "🎓", text: "Dartmouth workshop coins the term \"Artificial Intelligence\"." },
    { year: "1997", label: "Chess", e: "♟️", text: "IBM's Deep Blue beats world champion Kasparov." },
    { year: "2012", label: "Deep Learning", e: "🖼️", text: "ImageNet — neural nets start winning vision contests." },
    { year: "2016", label: "Go", e: "🎯", text: "AlphaGo beats the world Go champion." },
    { year: "2022", label: "ChatGPT", e: "💬", text: "Large language models go mainstream." },
    { year: "Today", label: "Your turn", e: "✨", text: "You start building AI." },
  ];
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">A quick history</h3>
      <p className="text-muted-foreground text-sm mb-4">
        AI isn't new — it has been growing for 70+ years.
      </p>
      <div className="relative pl-6">
        <div
          className="absolute left-2 top-0 bottom-0 border-l-2 border-dashed"
          style={{ borderColor: "var(--accent-coral)" }}
        />
        {events.map((ev) => (
          <div key={ev.year} className="mb-4 relative">
            <div
              className="absolute -left-4 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs"
              style={{ background: "white", borderColor: "var(--accent-coral)" }}
            >
              {ev.e}
            </div>
            <div className="pl-4">
              <div className="text-sm font-bold font-hand">
                {ev.year} — {ev.label}
              </div>
              <div className="text-sm text-muted-foreground">{ev.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhatIsAI() {
  return (
    <LessonShell
      lessonId="u1l1"
      unitNumber={1}
      lessonNumber={1}
      title="What is AI?"
      subtitle="The idea that machines can learn, decide, and improve"
      emoji="🧠"
      unitColor="var(--accent-coral)"
      tabs={[
        {
          title: "The Idea",
          icon: "💡",
          content: (
            <div>
              <h2 className="text-2xl font-bold mb-3">
                <span className="marker-highlight-yellow">Artificial Intelligence</span>
              </h2>
              <p className="mb-3">
                <strong>AI</strong> is when a computer does a task that usually needs human
                intelligence — like recognising a face, translating a sentence, driving a car,
                or suggesting the next song you'll like.
              </p>
              <p className="mb-3">
                What makes AI different from a normal program is that it{" "}
                <span className="marker-highlight-coral">learns from examples</span> instead of
                being told exactly what to do.
              </p>
              <InfoBox tone="blue" title="Think of it like this">
                A calculator follows fixed rules. A spam filter, on the other hand, <em>learns</em>{" "}
                from thousands of emails which ones are spam — and improves over time. That second
                thing is AI.
              </InfoBox>
              <h3 className="text-lg font-bold mt-5 mb-2">What makes a program "intelligent"?</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>It can <strong>perceive</strong> — read pixels, sound, or text.</li>
                <li>It can <strong>reason</strong> — combine facts to reach a decision.</li>
                <li>It can <strong>learn</strong> — get better with more data.</li>
                <li>It can <strong>act</strong> — reply, classify, move a motor, etc.</li>
              </ul>
            </div>
          ),
        },
        {
          title: "Spot the AI",
          icon: "🎯",
          content: <ConceptSorter />,
        },
        {
          title: "Turing Test",
          icon: "💬",
          content: <TuringTest />,
        },
        {
          title: "History",
          icon: "📜",
          content: <HistoryTimeline />,
        },
      ]}
      quiz={[
        {
          q: "What makes AI different from a normal program?",
          options: [
            "It uses a fancier computer chip.",
            "It learns from data instead of only following fixed rules.",
            "It is written in Python.",
            "It always connects to the internet.",
          ],
          correct: 1,
          explain:
            "The defining feature of AI is learning from examples — not the language, hardware, or network.",
        },
        {
          q: "Alan Turing is famous in AI for which idea?",
          options: [
            "Inventing the CPU",
            "Proposing the Turing Test in 1950",
            "Building the first robot",
            "Starting Google",
          ],
          correct: 1,
          explain:
            "In 1950, Turing asked: if a machine chats so well we can't tell, is it thinking? That question still shapes AI research.",
        },
        {
          q: "Which of these is NOT one of the four abilities of AI?",
          options: ["Perceive", "Reason", "Remember every password", "Learn"],
          correct: 2,
          explain:
            "AI typically perceives, reasons, learns and acts. Storing passwords is just a normal computer task — no intelligence needed.",
        },
        {
          q: "A calculator that only follows fixed rules is...",
          options: ["AI", "Not AI", "Deep learning", "A neural network"],
          correct: 1,
          explain:
            "Fixed-rule programs aren't AI because they don't learn or improve from data.",
        },
      ]}
    />
  );
}
