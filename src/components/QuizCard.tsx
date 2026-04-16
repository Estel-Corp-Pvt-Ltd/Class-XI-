"use client";

import { useEffect, useState } from "react";
import Confetti from "./Confetti";
import { playComplete, playCorrect, playWrong } from "@/utils/sounds";

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: number;
  explain?: string;
};

export default function QuizCard({
  questions,
  onComplete,
}: {
  questions: QuizQuestion[];
  onComplete?: (score: number) => void;
}) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  const q = questions[current];

  function pick(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    const isRight = idx === q.correct;
    if (isRight) {
      setScore((s) => s + 1);
      playCorrect();
    } else {
      playWrong();
    }
  }

  function next() {
    if (current === questions.length - 1) {
      const finalScore = score;
      const passed = finalScore / questions.length >= 0.6;
      setDone(true);
      if (passed) {
        setCelebrate(true);
        playComplete();
      }
      onComplete?.(finalScore);
      return;
    }
    setCurrent((c) => c + 1);
    setSelected(null);
  }

  function reset() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);
    setCelebrate(false);
  }

  useEffect(() => {
    if (!celebrate) return;
    const t = setTimeout(() => setCelebrate(false), 3000);
    return () => clearTimeout(t);
  }, [celebrate]);

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    const passed = pct >= 60;
    return (
      <>
        <Confetti active={celebrate} />
        <div className="card-sketchy p-6 text-center animate-bounce-in">
          <div className="text-6xl mb-2 animate-wiggle inline-block">
            {passed ? "🎉" : "💪"}
          </div>
          <h3 className="text-2xl font-bold mb-1">
            {passed ? "Great job!" : "Good try!"}
          </h3>
          <p className="text-lg mb-4">
            You scored{" "}
            <span className="font-hand text-3xl" style={{ color: "var(--accent-coral)" }}>
              {score}/{questions.length}
            </span>{" "}
            ({pct}%)
          </p>
          <div className="flex gap-3 justify-center">
            <button className="btn-sketchy-outline" onClick={reset}>
              Try again
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="card-sketchy p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="pill">
          Question {current + 1} / {questions.length}
        </span>
        <span className="chip">Score: {score}</span>
      </div>
      <h3 className="text-xl font-bold mb-4">{q.q}</h3>
      <div className="grid gap-2">
        {q.options.map((opt, i) => {
          const isChosen = selected === i;
          const isCorrect = i === q.correct;
          const show = selected !== null;
          let bg = "transparent";
          let bd = "var(--color-border)";
          if (show && isCorrect) {
            bg = "#e5f8ef";
            bd = "#6ed3b3";
          } else if (show && isChosen && !isCorrect) {
            bg = "#ffe5e5";
            bd = "#ff6b6b";
          }
          return (
            <button
              key={i}
              onClick={() => pick(i)}
              disabled={selected !== null}
              className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                show && isCorrect ? "animate-bounce-in" : ""
              }`}
              style={{
                background: bg,
                border: `2px solid ${bd}`,
                cursor: selected !== null ? "default" : "pointer",
              }}
            >
              <span className="mr-2">{String.fromCharCode(65 + i)}.</span>
              {opt}
              {show && isCorrect && <span className="ml-2">✓</span>}
              {show && isChosen && !isCorrect && <span className="ml-2">✗</span>}
            </button>
          );
        })}
      </div>
      {selected !== null && q.explain && (
        <div
          className="mt-4 rounded-lg px-4 py-3 text-sm animate-fade-up"
          style={{
            background: "#fff5d9",
            border: "2px solid #f0b429",
            color: "#7a4e00",
          }}
        >
          <strong>Why?</strong> {q.explain}
        </div>
      )}
      {selected !== null && (
        <div className="mt-4 flex justify-end">
          <button className="btn-sketchy" onClick={next}>
            {current === questions.length - 1 ? "Finish" : "Next →"}
          </button>
        </div>
      )}
    </div>
  );
}
