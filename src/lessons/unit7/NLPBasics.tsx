"use client";

import { useMemo, useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

const STOPWORDS = new Set([
  "the", "a", "an", "and", "or", "but", "is", "are", "am", "be", "was", "were",
  "of", "to", "in", "on", "for", "with", "at", "by", "this", "that", "these", "those",
  "i", "you", "he", "she", "it", "we", "they", "my", "your", "his", "her", "its",
  "do", "does", "did", "have", "has", "had", "as", "so",
]);

function Tokenizer() {
  const [text, setText] = useState("Artificial Intelligence is changing the world!");

  const processed = useMemo(() => {
    const lower = text.toLowerCase();
    const cleaned = lower.replace(/[^a-z\s']/g, " ");
    const tokens = cleaned.split(/\s+/).filter(Boolean);
    const noStop = tokens.filter((t) => !STOPWORDS.has(t));
    return { lower, tokens, noStop };
  }, [text]);

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Step-by-step text processing</h3>
      <p className="text-muted-foreground text-sm mb-3">
        Type any sentence. Watch each step happen live.
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border-2 border-[var(--color-foreground)] rounded-lg p-3"
        rows={2}
      />

      <div className="space-y-3 mt-4">
        <Step
          num={1}
          title="Lowercasing"
          desc="ML treats 'AI' and 'ai' as different words — fix that."
        >
          <code className="block px-3 py-2 bg-black/5 rounded">{processed.lower}</code>
        </Step>

        <Step
          num={2}
          title="Remove punctuation"
          desc="Usually we drop . , ! ? — they don't change meaning much."
        >
          <code className="block px-3 py-2 bg-black/5 rounded">
            {text
              .toLowerCase()
              .replace(/[^a-z\s']/g, " ")
              .replace(/\s+/g, " ")
              .trim()}
          </code>
        </Step>

        <Step num={3} title="Tokenize" desc="Split into individual words (tokens).">
          <div className="flex flex-wrap gap-1">
            {processed.tokens.map((t, i) => (
              <span key={i} className="chip" style={{ background: "var(--accent-sky)", color: "white" }}>
                {t}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {processed.tokens.length} tokens
          </p>
        </Step>

        <Step
          num={4}
          title="Remove stop-words"
          desc='"the", "is", "a" appear everywhere and rarely help classification.'
        >
          <div className="flex flex-wrap gap-1">
            {processed.tokens.map((t, i) => (
              <span
                key={i}
                className="chip"
                style={{
                  background: STOPWORDS.has(t) ? "#ffe5e5" : "var(--accent-mint)",
                  color: STOPWORDS.has(t) ? "#7a1a1a" : "var(--color-foreground)",
                  textDecoration: STOPWORDS.has(t) ? "line-through" : undefined,
                  opacity: STOPWORDS.has(t) ? 0.7 : 1,
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Kept {processed.noStop.length} / {processed.tokens.length} tokens
          </p>
        </Step>
      </div>
    </div>
  );
}

function Step({
  num,
  title,
  desc,
  children,
}: {
  num: number;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-soft p-3">
      <div className="flex items-center gap-2 mb-1">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ background: "var(--accent-sky)" }}
        >
          {num}
        </div>
        <div className="font-bold">{title}</div>
      </div>
      <div className="text-xs text-muted-foreground mb-2">{desc}</div>
      {children}
    </div>
  );
}

function BagOfWords() {
  const docs = [
    "I love this movie",
    "This movie is great",
    "I hate this film",
    "Awful film, waste of time",
  ];

  const tokenSets = docs.map((d) =>
    d.toLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/).filter(Boolean)
  );
  const vocab = Array.from(new Set(tokenSets.flat())).sort();

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Bag-of-Words (BoW)</h3>
      <p className="text-muted-foreground text-sm mb-3">
        Turn sentences into <strong>numbers</strong> — because ML models can only crunch numbers.
      </p>
      <div className="overflow-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-[var(--color-muted)]">
              <th className="p-2 border-2 text-left">Sentence</th>
              {vocab.map((v) => (
                <th key={v} className="p-2 border-2 text-center">{v}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {docs.map((d, i) => (
              <tr key={i}>
                <td className="p-2 border-2 italic">{d}</td>
                {vocab.map((v) => {
                  const c = tokenSets[i].filter((t) => t === v).length;
                  return (
                    <td
                      key={v}
                      className="p-2 border-2 text-center"
                      style={{
                        background: c > 0 ? "#e5f8ef" : undefined,
                        fontWeight: c > 0 ? 700 : 400,
                      }}
                    >
                      {c}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <InfoBox tone="green" title="This is how NLP starts">
        Each sentence is now a vector of numbers — feed it straight into a classifier. The bag
        ignores word order but works surprisingly well for spam / sentiment / topic tasks.
      </InfoBox>
    </div>
  );
}

export default function NLPBasics() {
  return (
    <LessonShell
      lessonId="u7l1"
      unitNumber={7}
      lessonNumber={1}
      title="NLP Basics"
      subtitle="How AI turns human language into numbers"
      emoji="🗣️"
      unitColor="var(--accent-sky)"
      tabs={[
        {
          title: "Tokenizer",
          icon: "✂️",
          content: <Tokenizer />,
        },
        {
          title: "Bag of Words",
          icon: "🎒",
          content: <BagOfWords />,
        },
      ]}
      quiz={[
        {
          q: "What is a 'token' in NLP?",
          options: ["A letter", "A word (usually)", "A sentence", "A language"],
          correct: 1,
          explain: "Tokens are most often words, sometimes sub-words or characters.",
        },
        {
          q: "Why remove stop-words?",
          options: [
            "They're against the law",
            "They appear everywhere and add little meaning",
            "They use too much memory",
            "Python requires it",
          ],
          correct: 1,
          explain:
            "Words like 'the', 'is', 'a' appear in nearly every sentence — they don't help tell one class from another.",
        },
        {
          q: "Bag-of-Words ignores:",
          options: ["Word counts", "Word meanings", "Word order", "Letters"],
          correct: 2,
          explain:
            "BoW only counts how often each word appears — 'not good' and 'good not' look identical.",
        },
      ]}
    />
  );
}
