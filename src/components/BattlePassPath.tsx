"use client";

import Link from "next/link";
import { CURRICULUM, Unit, Lesson } from "@/data/curriculum";
import { useProgress } from "@/utils/progress";
import { XP_PER_LESSON } from "@/utils/rank";

type NodeState = "locked" | "available" | "current" | "complete";

export default function BattlePassPath() {
  const progress = useProgress();

  // Flat list of lessons, first incomplete = "current"
  const flat: { unit: Unit; lesson: Lesson }[] = [];
  CURRICULUM.forEach((u) => u.lessons.forEach((l) => flat.push({ unit: u, lesson: l })));
  const firstIncomplete = flat.findIndex(
    (x) => !progress.completedLessons.includes(x.lesson.id)
  );

  function stateFor(globalIdx: number): NodeState {
    if (progress.completedLessons.includes(flat[globalIdx].lesson.id)) return "complete";
    if (firstIncomplete === globalIdx) return "current";
    if (firstIncomplete === -1) return "available";
    if (globalIdx < firstIncomplete) return "available";
    return "locked";
  }

  let runningIdx = 0;

  return (
    <div className="relative">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="stars" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.2" fill="#ffd36b" opacity="0.5" />
              <circle cx="50" cy="30" r="0.8" fill="#b794f6" opacity="0.4" />
              <circle cx="30" cy="60" r="1" fill="#6ab7ff" opacity="0.4" />
              <circle cx="70" cy="70" r="0.8" fill="#ff8fa3" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stars)" />
        </svg>
      </div>

      <div className="relative space-y-14">
        {CURRICULUM.map((unit, unitIdx) => {
          const unitLessons = unit.lessons;
          const unitStart = runningIdx;
          const nodes = unitLessons.map((l, localIdx) => {
            const gi = unitStart + localIdx;
            return { lesson: l, state: stateFor(gi), gi, localIdx };
          });
          runningIdx += unitLessons.length;
          const unitDone = nodes.filter((n) => n.state === "complete").length;

          return (
            <ChapterSection
              key={unit.id}
              unit={unit}
              unitIdx={unitIdx}
              nodes={nodes}
              unitDone={unitDone}
            />
          );
        })}

        {/* Final boss card */}
        <FinalCard progress={progress.completedLessons.length} total={flat.length} />
      </div>
    </div>
  );
}

function ChapterSection({
  unit,
  unitIdx,
  nodes,
  unitDone,
}: {
  unit: Unit;
  unitIdx: number;
  nodes: { lesson: Lesson; state: NodeState; gi: number; localIdx: number }[];
  unitDone: number;
}) {
  const isEvenUnit = unitIdx % 2 === 0;

  return (
    <section className="relative">
      {/* Chapter banner */}
      <div
        className="relative mb-6 overflow-hidden rounded-2xl border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,0.2)]"
        style={{
          background: `linear-gradient(${isEvenUnit ? 100 : 260}deg, ${unit.color}, ${unit.color}aa)`,
        }}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full">
            <defs>
              <pattern id={`diag-${unit.id}`} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="16" stroke="white" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#diag-${unit.id})`} />
          </svg>
        </div>
        <div className="relative px-5 py-4 flex items-center gap-4">
          <div
            className="text-5xl sm:text-6xl font-black leading-none"
            style={{
              WebkitTextStroke: "2px #1a1a1a",
              color: "transparent",
              textShadow: "4px 4px 0 rgba(0,0,0,0.35)",
            }}
          >
            0{unit.number}
          </div>
          <div className="flex-1">
            <div className="text-[10px] tracking-[0.3em] font-bold text-white/80">
              CHAPTER {unit.number}
            </div>
            <div className="text-xl sm:text-2xl font-black text-white leading-tight">
              {unit.emoji} {unit.title.toUpperCase()}
            </div>
            <div className="text-xs text-white/90 mt-0.5">{unit.subtitle}</div>
          </div>
          <div className="hidden sm:flex flex-col items-end">
            <div className="text-[10px] tracking-widest font-bold text-white/80 uppercase">Tiers cleared</div>
            <div className="flex items-center gap-1 mt-0.5">
              {nodes.map((n, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full border-2 border-white/80"
                  style={{ background: n.state === "complete" ? "#ffd36b" : "transparent" }}
                />
              ))}
              <span className="text-white font-bold ml-2 text-sm">
                {unitDone}/{nodes.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Snaking path */}
      <div className="relative px-2 py-4">
        <SnakePath nodes={nodes} unit={unit} />
      </div>
    </section>
  );
}

function SnakePath({
  nodes,
  unit,
}: {
  nodes: { lesson: Lesson; state: NodeState; gi: number; localIdx: number }[];
  unit: Unit;
}) {
  // Arrange nodes in a wavy pattern on a grid
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-2 gap-x-2 sm:gap-x-6 items-start">
      {nodes.map((n, i) => {
        const isOddRow = Math.floor(i / 4) % 2 === 1;
        const order = isOddRow ? 3 - (i % 4) : i % 4;
        const offset = order % 2 === 0 ? 0 : 40;
        return (
          <div
            key={n.lesson.id}
            className="relative flex flex-col items-center"
            style={{
              marginTop: offset,
              gridColumnStart: (order % 4) + 1,
            }}
          >
            {/* Connecting line to next */}
            {i < nodes.length - 1 && (
              <svg
                className="absolute pointer-events-none"
                style={{
                  top: "50%",
                  left: "50%",
                  width: "140%",
                  height: "90px",
                  zIndex: 0,
                }}
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0 20 Q 50 0 100 20"
                  fill="none"
                  stroke={unit.color}
                  strokeWidth="3"
                  strokeDasharray="5 4"
                  opacity={n.state === "complete" ? 1 : 0.35}
                />
              </svg>
            )}
            <PathNode node={n} unit={unit} />
          </div>
        );
      })}
    </div>
  );
}

function PathNode({
  node,
  unit,
}: {
  node: { lesson: Lesson; state: NodeState; gi: number; localIdx: number };
  unit: Unit;
}) {
  const { lesson, state, localIdx } = node;
  const href = `/unit${unit.number}/${lesson.slug}`;
  const locked = state === "locked";
  const complete = state === "complete";
  const current = state === "current";

  const bg =
    complete
      ? "linear-gradient(145deg, #ffd36b, #ff8fa3)"
      : current
      ? `linear-gradient(145deg, ${unit.color}, ${unit.color}aa)`
      : locked
      ? "#d1d5db"
      : `linear-gradient(145deg, white, ${unit.color}20)`;

  const content = (
    <>
      {/* Outer pulsing ring for current */}
      {current && (
        <>
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-60"
            style={{ background: unit.color }}
          />
          <span
            className="absolute -inset-2 rounded-full border-4 border-dashed animate-spin"
            style={{ borderColor: unit.color, animationDuration: "14s" }}
          />
        </>
      )}
      <div
        className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[3px] border-black shadow-[0_6px_0_rgba(0,0,0,0.35)] flex flex-col items-center justify-center transition-transform group-hover:scale-105"
        style={{ background: bg, filter: locked ? "grayscale(0.6)" : undefined }}
      >
        {/* Tier badge */}
        <div
          className="absolute -top-2 -left-2 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-[10px] font-black text-white"
          style={{ background: "#1a1a1a" }}
        >
          T{localIdx + 1}
        </div>

        {/* Lock / Check / emoji */}
        {locked ? (
          <div className="text-3xl">🔒</div>
        ) : (
          <>
            <div className="text-4xl">{lesson.emoji}</div>
            {complete && (
              <div
                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-sm font-bold"
                style={{ background: "#6ed3b3", color: "#0b5340" }}
              >
                ✓
              </div>
            )}
            {current && (
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-full border-2 border-black text-[10px] font-black uppercase tracking-wider"
                style={{ background: "#ffd36b", color: "#1a1a1a" }}
              >
                ▶ Start
              </div>
            )}
          </>
        )}
      </div>
      <div
        className="mt-3 text-center text-xs sm:text-sm font-bold leading-tight max-w-[7rem]"
        style={{
          color: locked ? "var(--color-muted-foreground)" : "var(--color-foreground)",
        }}
      >
        {lesson.title}
      </div>
      <div className="mt-1 flex items-center gap-1">
        <span
          className="chip text-[10px]"
          style={{
            padding: "1px 6px",
            background: complete ? "#fff5d9" : "white",
          }}
        >
          {complete ? "+" + XP_PER_LESSON : XP_PER_LESSON} XP
        </span>
      </div>
    </>
  );

  if (locked) {
    return <div className="relative group flex flex-col items-center cursor-not-allowed opacity-70">{content}</div>;
  }
  return (
    <Link href={href} className="relative group flex flex-col items-center z-10">
      {content}
    </Link>
  );
}

function FinalCard({ progress, total }: { progress: number; total: number }) {
  const done = progress === total;
  return (
    <div
      className="relative rounded-3xl p-6 sm:p-10 border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,0.3)] overflow-hidden"
      style={{
        background: done
          ? "linear-gradient(135deg, #ffd36b, #ff8fa3, #b794f6)"
          : "linear-gradient(135deg, #1a1a1a, #2d2d3a)",
        color: "white",
      }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="finalstars" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <text x="10" y="30" fontSize="18" fill="white" opacity="0.5">★</text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#finalstars)" />
        </svg>
      </div>
      <div className="relative flex flex-col sm:flex-row items-center gap-6">
        <div className="text-7xl sm:text-8xl">{done ? "👑" : "💎"}</div>
        <div className="flex-1 text-center sm:text-left">
          <div className="text-[10px] tracking-[0.3em] font-bold opacity-80">FINAL TIER</div>
          <div className="text-2xl sm:text-3xl font-black uppercase">
            {done ? "AI Champion" : "Master all units"}
          </div>
          <div className="text-sm mt-1 opacity-85">
            {done
              ? "You cleared every chapter. Absolute legend."
              : `Clear all ${total} tiers to unlock the Diamond rank and the AI Champion crown.`}
          </div>
          <div className="mt-3 h-3 bg-white/15 rounded-full overflow-hidden border border-white/30">
            <div
              className="h-full transition-all"
              style={{
                width: `${(progress / total) * 100}%`,
                background: done
                  ? "white"
                  : "linear-gradient(90deg, #ffd36b, #ff8fa3)",
              }}
            />
          </div>
          <div className="text-xs mt-1 opacity-80">
            {progress} / {total} tiers cleared
          </div>
        </div>
      </div>
    </div>
  );
}
