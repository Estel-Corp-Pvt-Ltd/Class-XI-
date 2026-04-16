"use client";

import Link from "next/link";
import { CURRICULUM } from "@/data/curriculum";
import { useProgress } from "@/utils/progress";

export default function LandingPage() {
  const progress = useProgress();
  const totalLessons = CURRICULUM.reduce((n, u) => n + u.lessons.length, 0);
  const completed = progress.completedLessons.length;

  return (
    <div className="min-h-screen notebook-grid">
      <header className="max-w-6xl mx-auto px-4 pt-10 pb-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="text-4xl animate-wiggle">✨</div>
          <div>
            <div className="font-hand text-3xl font-bold leading-none">AI Sparks</div>
            <div className="text-sm text-muted-foreground">Interactive AI course · Class 11</div>
          </div>
        </div>
        <div className="flex gap-2">
          <Link href="/unit1/what-is-ai" className="btn-sketchy">
            Start learning →
          </Link>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="pill mb-3">8 Units · 22 Lessons · 100% Interactive</div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Learn <span className="marker-highlight-yellow">AI</span> by{" "}
              <span className="marker-highlight-coral">building</span>, not just watching.
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              From "What is AI?" to training real ML algorithms — a hands-on course mapped to the
              Class 11 AI syllabus. Live code, interactive visualisations, and a real Python
              playground in your browser.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/unit1/what-is-ai" className="btn-sketchy">
                🚀 Begin Unit 1
              </Link>
              <Link href="/unit3/python-playground" className="btn-sketchy-outline">
                🐍 Try the Python Playground
              </Link>
            </div>
            {completed > 0 && (
              <div className="mt-6 card-soft p-4 inline-block">
                <div className="text-sm font-semibold">Your progress</div>
                <div className="text-2xl font-hand">
                  {completed} / {totalLessons} lessons done
                </div>
              </div>
            )}
          </div>

          <div className="card-sketchy p-6 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-muted-foreground">ai_demo.py</span>
            </div>
            <pre className="code-block text-xs">
{`# Your first AI model — 4 lines
from ai import classify
photo = load("cat.jpg")
prediction = classify(photo)
print(f"This is a {prediction}!")
# → This is a cat!`}
            </pre>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="chip">🧠 ML basics</span>
              <span className="chip">📊 Data literacy</span>
              <span className="chip">🐍 Real Python</span>
              <span className="chip">⚖️ AI ethics</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">
          <span className="marker-highlight-mint">Explore the 8 units</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {CURRICULUM.map((u) => {
            const first = u.lessons[0];
            const unitDone = u.lessons.filter((l) =>
              progress.completedLessons.includes(l.id)
            ).length;
            return (
              <Link
                key={u.id}
                href={`/unit${u.number}/${first.slug}`}
                className="card-sketchy p-5 flex gap-4 items-start"
                style={{ background: `${u.color}10` }}
              >
                <div
                  className="text-3xl w-14 h-14 flex items-center justify-center rounded-xl shrink-0 border-2 border-black/20"
                  style={{ background: u.color }}
                >
                  {u.emoji}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    Unit {u.number}
                  </div>
                  <div className="text-xl font-bold mb-1">{u.title}</div>
                  <div className="text-sm text-muted-foreground mb-3">{u.subtitle}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {u.lessons.map((l) => (
                      <span
                        key={l.id}
                        className="chip"
                        style={{
                          background: progress.completedLessons.includes(l.id)
                            ? "#e5f8ef"
                            : undefined,
                        }}
                      >
                        {l.emoji} {l.title}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs mt-3 font-semibold">
                    {unitDone}/{u.lessons.length} complete →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">
          <span className="marker-highlight-sky">Why it works</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              e: "🎮",
              t: "Play, don't read",
              d: "Every concept has something to click, drag, or tweak.",
            },
            {
              e: "⚡",
              t: "Real code, in your tab",
              d: "Write Python and see it run — no install, no setup.",
            },
            {
              e: "🏆",
              t: "Built for Class 11",
              d: "Mapped to the CBSE AI syllabus with quizzes after every lesson.",
            },
          ].map((f) => (
            <div key={f.t} className="card-soft p-5">
              <div className="text-3xl mb-2">{f.e}</div>
              <div className="font-bold text-lg">{f.t}</div>
              <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-4 py-8 text-center text-xs text-muted-foreground border-t border-black/10">
        AI Sparks · Built for Class 11 · Open any unit to start.
      </footer>
    </div>
  );
}
