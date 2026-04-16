"use client";

import { useMemo, useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

const POSITIVE = new Set([
  "love", "great", "amazing", "awesome", "excellent", "wonderful", "fantastic",
  "brilliant", "good", "fun", "enjoy", "enjoyed", "happy", "best", "beautiful",
  "perfect", "delightful", "hilarious", "masterpiece", "superb", "fabulous",
]);

const NEGATIVE = new Set([
  "hate", "awful", "terrible", "bad", "worst", "boring", "waste", "horrible",
  "disappointing", "dreadful", "ugly", "poor", "pathetic", "garbage", "trash",
  "stupid", "dumb", "disaster", "regret", "confusing", "annoying",
]);

const NEGATORS = new Set(["not", "no", "never", "nothing", "nobody", "neither"]);

function analyse(text: string) {
  const tokens = text.toLowerCase().replace(/[^a-z\s']/g, " ").split(/\s+/).filter(Boolean);
  let pos = 0;
  let neg = 0;
  const hits: { word: string; type: "pos" | "neg" | "neut"; flipped: boolean }[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    const prev = tokens[i - 1];
    const flipped = prev && NEGATORS.has(prev);
    if (POSITIVE.has(t)) {
      if (flipped) {
        neg++;
        hits.push({ word: t, type: "pos", flipped: true });
      } else {
        pos++;
        hits.push({ word: t, type: "pos", flipped: false });
      }
    } else if (NEGATIVE.has(t)) {
      if (flipped) {
        pos++;
        hits.push({ word: t, type: "neg", flipped: true });
      } else {
        neg++;
        hits.push({ word: t, type: "neg", flipped: false });
      }
    } else {
      hits.push({ word: t, type: "neut", flipped: false });
    }
  }
  const score = pos - neg;
  const verdict = score > 0 ? "positive" : score < 0 ? "negative" : "neutral";
  return { tokens, pos, neg, score, verdict, hits };
}

function SentimentLab() {
  const [text, setText] = useState("This movie was absolutely fantastic and the ending was beautiful!");
  const result = useMemo(() => analyse(text), [text]);

  const colour = result.verdict === "positive" ? "#6ed3b3" : result.verdict === "negative" ? "#ff6b6b" : "#ffd36b";
  const emoji = result.verdict === "positive" ? "😊" : result.verdict === "negative" ? "😠" : "😐";

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Try it — a mini sentiment classifier</h3>
      <p className="text-muted-foreground text-sm mb-3">
        Type a movie / product review. The classifier scores it using a word dictionary.
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border-2 border-[var(--color-foreground)] rounded-lg p-3"
        rows={3}
      />
      <div className="flex gap-2 flex-wrap mt-3">
        {[
          "This is the worst movie ever",
          "Loved every minute of it",
          "Not bad, actually fun",
          "Boring and confusing",
        ].map((s) => (
          <button
            key={s}
            onClick={() => setText(s)}
            className="chip"
            style={{ borderStyle: "solid", borderWidth: 1 }}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <div
          className="flex items-center gap-4 card-sketchy p-4"
          style={{ background: `${colour}25` }}
        >
          <div className="text-5xl">{emoji}</div>
          <div>
            <div className="text-2xl font-bold capitalize">{result.verdict}</div>
            <div className="text-sm text-muted-foreground">
              Score: {result.score > 0 ? "+" : ""}
              {result.score}  ·  +{result.pos} / −{result.neg}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-xs font-bold uppercase mb-2">Annotated</div>
        <div className="leading-loose">
          {result.hits.map((h, i) => {
            const style: React.CSSProperties =
              h.type === "pos"
                ? {
                    background: h.flipped ? "#ffe5e5" : "#e5f8ef",
                    color: h.flipped ? "#7a1a1a" : "#0b5340",
                  }
                : h.type === "neg"
                ? {
                    background: h.flipped ? "#e5f8ef" : "#ffe5e5",
                    color: h.flipped ? "#0b5340" : "#7a1a1a",
                  }
                : {};
            return (
              <span
                key={i}
                className="px-1.5 py-0.5 rounded mr-1"
                style={style}
                title={
                  h.flipped
                    ? `flipped by 'not' → counted as ${h.type === "pos" ? "neg" : "pos"}`
                    : undefined
                }
              >
                {h.word}
                {h.flipped && <sup>↺</sup>}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Sentiment() {
  return (
    <LessonShell
      lessonId="u7l2"
      unitNumber={7}
      lessonNumber={2}
      title="Sentiment Analysis"
      subtitle="Teach an AI to tell positive from negative"
      emoji="😊"
      unitColor="var(--accent-sky)"
      tabs={[
        {
          title: "Idea",
          icon: "💡",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-3">What is sentiment analysis?</h3>
              <p className="mb-3">
                Sentiment analysis = a classifier that labels text as{" "}
                <span className="marker-highlight-mint">positive</span>,{" "}
                <span className="marker-highlight-coral">negative</span>, or neutral.
              </p>
              <h4 className="font-bold mt-3 mb-2">Used by</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Companies tracking brand mentions on Twitter/X.</li>
                <li>E-commerce sites summarising product reviews.</li>
                <li>Politicians analysing voter opinions.</li>
                <li>Banks flagging angry customer support calls.</li>
              </ul>
              <InfoBox tone="amber" title="Why it's hard">
                Sarcasm ("Oh, great — another bug"), negation ("not bad"), and context all trip up
                simple classifiers. Modern models learn context, but even they sometimes miss.
              </InfoBox>
            </div>
          ),
        },
        {
          title: "Classifier",
          icon: "🔍",
          content: <SentimentLab />,
        },
      ]}
      quiz={[
        {
          q: "Sentiment analysis is which ML task?",
          options: ["Regression", "Classification", "Clustering", "Reinforcement"],
          correct: 1,
          explain: "We assign a label (pos/neg/neutral) — that's classification.",
        },
        {
          q: "Which review is hardest for a dictionary-based classifier?",
          options: [
            "This film is terrible.",
            "I love this film.",
            "Oh great, another superhero movie. 🙄",
            "The acting was excellent.",
          ],
          correct: 2,
          explain: "Sarcasm! 'Great' sounds positive, but the meaning is negative.",
        },
        {
          q: "What does 'not good' demonstrate?",
          options: ["Tokenization", "Negation", "Lowercasing", "Stemming"],
          correct: 1,
          explain: "'Not' flips the meaning — negation handling is a classic NLP challenge.",
        },
      ]}
    />
  );
}
