"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CURRICULUM } from "@/data/curriculum";
import { useProgress } from "@/utils/progress";
import { XP_PER_LESSON, nextRank, rankFor } from "@/utils/rank";
import { isMuted, setMuted } from "@/utils/sounds";

export default function TopBar() {
  const pathname = usePathname() ?? "";
  const progress = useProgress();
  const [muted, setMutedState] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMutedState(isMuted());
    setMounted(true);
  }, []);

  const total = CURRICULUM.reduce((n, u) => n + u.lessons.length, 0);
  const done = progress.completedLessons.length;
  const xp = done * XP_PER_LESSON;
  const rank = rankFor(xp);
  const next = nextRank(xp);
  const nextTarget = next?.minXp ?? rank.minXp;
  const prevTarget = rank.minXp;
  const pctToNext = next
    ? ((xp - prevTarget) / (nextTarget - prevTarget)) * 100
    : 100;

  const currentUnit = CURRICULUM.find((u) =>
    u.lessons.some((l) => pathname.includes(`/unit${u.number}/${l.slug}`))
  );

  function toggleMute() {
    const n = !muted;
    setMutedState(n);
    setMuted(n);
  }

  return (
    <header className="sticky top-0 z-40 bg-[var(--color-card)]/92 backdrop-blur border-b-2 border-black/10">
      <div className="max-w-6xl mx-auto px-3 sm:px-5 py-2.5 flex items-center gap-3 flex-wrap">
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <div className="text-2xl sm:text-3xl animate-wiggle">✨</div>
          <div className="hidden sm:block">
            <div className="font-hand text-lg font-bold leading-none">AI Sparks</div>
            <div className="text-[10px] text-muted-foreground">Class 11 Battle Pass</div>
          </div>
        </Link>

        {currentUnit && (
          <div
            className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold"
            style={{ background: `${currentUnit.color}20`, border: `1.5px solid ${currentUnit.color}` }}
          >
            <span>{currentUnit.emoji}</span>
            <span>Unit {currentUnit.number} · {currentUnit.title}</span>
          </div>
        )}

        <div className="flex-1" />

        {/* XP + Rank */}
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{
            background: "linear-gradient(90deg, #1a1a1a, #2d2d3a)",
            color: "white",
          }}
        >
          <span className="text-lg">{rank.emoji}</span>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold" style={{ color: rank.color }}>
              {rank.name}
              {next && (
                <span className="opacity-70">→ {next.emoji}</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-24 sm:w-32 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all"
                  style={{
                    width: `${pctToNext}%`,
                    background: `linear-gradient(90deg, ${rank.color}, ${next?.color ?? rank.color})`,
                  }}
                />
              </div>
              <span className="font-hand text-sm whitespace-nowrap">{xp} XP</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border-2 border-black/10">
          <span className="text-sm">🏅</span>
          <span className="text-xs font-bold">
            {done}/{total}
          </span>
        </div>

        {mounted && (
          <button
            onClick={toggleMute}
            className="w-9 h-9 rounded-full border-2 border-black/10 flex items-center justify-center hover:bg-[var(--color-muted)] transition"
            title={muted ? "Unmute" : "Mute sounds"}
          >
            {muted ? "🔇" : "🔊"}
          </button>
        )}
      </div>
    </header>
  );
}
