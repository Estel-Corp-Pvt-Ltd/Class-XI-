"use client";

import Link from "next/link";
import { CURRICULUM } from "@/data/curriculum";
import { useProgress } from "@/utils/progress";
import AnimatedHero from "@/components/AnimatedHero";
import BattlePassPath from "@/components/BattlePassPath";
import TopBar from "@/components/TopBar";
import { XP_PER_LESSON, nextRank, rankFor } from "@/utils/rank";

export default function LandingPage() {
  const progress = useProgress();
  const totalLessons = CURRICULUM.reduce((n, u) => n + u.lessons.length, 0);
  const completed = progress.completedLessons.length;
  const xp = completed * XP_PER_LESSON;
  const rank = rankFor(xp);
  const next = nextRank(xp);

  const flat = CURRICULUM.flatMap((u) => u.lessons.map((l) => ({ unit: u, lesson: l })));
  const firstIncomplete = flat.find((x) => !progress.completedLessons.includes(x.lesson.id));
  const resumeHref = firstIncomplete
    ? `/unit${firstIncomplete.unit.number}/${firstIncomplete.lesson.slug}`
    : "/unit1/what-is-ai";

  return (
    <div className="min-h-screen">
      <TopBar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-80"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(183,148,246,0.25), transparent 50%), radial-gradient(circle at 85% 80%, rgba(255,211,107,0.25), transparent 50%), radial-gradient(circle at 50% 100%, rgba(110,211,179,0.2), transparent 55%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14 relative">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-black bg-white text-xs font-black uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Season 1 · Class 11 Battle Pass
              </div>
              <h1 className="text-5xl sm:text-7xl font-black leading-[0.95] mb-4">
                <span className="block">LEVEL UP</span>
                <span
                  className="block"
                  style={{
                    WebkitTextStroke: "2px #1a1a1a",
                    color: "transparent",
                  }}
                >
                  YOUR AI GAME
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-md">
                Clear <strong>24 tiers</strong> across <strong>9 chapters</strong>. Earn XP.
                Climb from <span className="font-bold">Rookie</span> to{" "}
                <span style={{ color: "#6ab7ff" }} className="font-bold">💎 Diamond</span>.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <Link href={resumeHref} className="btn-sketchy text-base px-6 py-3">
                  {completed === 0 ? "🚀 Start Season 1" : "▶ Resume"}
                </Link>
                <Link href="/unit3/python-playground" className="btn-sketchy-outline">
                  🐍 Python Playground
                </Link>
                <Link href="/unit9/neural-playground" className="btn-sketchy btn-lavender">
                  🧠 Neural Playground
                </Link>
              </div>

              {/* Rank card */}
              <div
                className="rounded-2xl p-4 border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,0.3)] inline-flex items-center gap-4"
                style={{
                  background: "linear-gradient(135deg, #1a1a1a, #2d2d3a)",
                  color: "white",
                }}
              >
                <div className="text-4xl">{rank.emoji}</div>
                <div>
                  <div className="text-[10px] tracking-[0.25em] font-bold opacity-70 uppercase">
                    Current rank
                  </div>
                  <div className="text-xl font-black" style={{ color: rank.color }}>
                    {rank.name}
                  </div>
                  <div className="text-xs opacity-80">
                    {xp} XP{" "}
                    {next && (
                      <span className="opacity-70">
                        · {next.minXp - xp} to {next.name} {next.emoji}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card-sketchy p-4 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #fff9ec, white)",
                transform: "rotate(1deg)",
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="chip text-[10px]">live · forward pass</span>
              </div>
              <AnimatedHero />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="max-w-6xl mx-auto px-4 pb-6 relative">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          <StatCard emoji="🏆" label="Tiers" value={`${completed}/${totalLessons}`} />
          <StatCard emoji="⚡" label="XP earned" value={String(xp)} />
          <StatCard emoji="🎯" label="Rank" value={rank.name} highlight={rank.color} />
          <div className="hidden sm:block">
            <StatCard
              emoji="🔥"
              label="Next unlock"
              value={next ? `${next.minXp - xp} XP` : "MAX"}
              highlight={next?.color}
            />
          </div>
        </div>
      </section>

      {/* THE BATTLE PASS */}
      <section className="max-w-6xl mx-auto px-4 py-6 relative">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-3xl sm:text-4xl font-black uppercase">Season Path</h2>
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            Scroll to explore
          </div>
        </div>
        <BattlePassPath />
      </section>

      {/* Ranks row */}
      <section className="max-w-6xl mx-auto px-4 py-10 relative">
        <h2 className="text-2xl font-black uppercase mb-4">Ranks</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {[
            { n: "Rookie", e: "🌱", c: "#9ca3af", x: 0 },
            { n: "Bronze", e: "🥉", c: "#c48a56", x: 300 },
            { n: "Silver", e: "🥈", c: "#a8b2bd", x: 700 },
            { n: "Gold", e: "🥇", c: "#ffc84a", x: 1200 },
            { n: "Platinum", e: "🏆", c: "#6ed3b3", x: 1800 },
            { n: "Diamond", e: "💎", c: "#6ab7ff", x: 2400 },
          ].map((r) => {
            const unlocked = xp >= r.x;
            return (
              <div
                key={r.n}
                className="rounded-xl p-3 text-center border-2"
                style={{
                  borderColor: unlocked ? r.c : "var(--color-border)",
                  background: unlocked ? `${r.c}18` : "var(--color-muted)",
                  opacity: unlocked ? 1 : 0.7,
                  filter: unlocked ? undefined : "grayscale(0.5)",
                }}
              >
                <div className="text-3xl mb-1">{r.e}</div>
                <div className="text-sm font-black uppercase tracking-wide" style={{ color: unlocked ? r.c : undefined }}>
                  {r.n}
                </div>
                <div className="text-[10px] text-muted-foreground">{r.x}+ XP</div>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-4 py-8 text-center text-xs text-muted-foreground border-t border-black/10">
        AI Sparks Season 1 · Built for Class 11 · 9 chapters, 24 tiers.
      </footer>
    </div>
  );
}

function StatCard({
  emoji,
  label,
  value,
  highlight,
}: {
  emoji: string;
  label: string;
  value: string;
  highlight?: string;
}) {
  return (
    <div
      className="rounded-xl border-2 border-black p-3 flex items-center gap-3 shadow-[3px_3px_0_rgba(0,0,0,0.15)]"
      style={{
        background: highlight ? `${highlight}15` : "white",
      }}
    >
      <div className="text-2xl">{emoji}</div>
      <div>
        <div className="text-[10px] uppercase tracking-wide font-bold text-muted-foreground">
          {label}
        </div>
        <div
          className="text-lg font-black leading-tight"
          style={{ color: highlight }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}
