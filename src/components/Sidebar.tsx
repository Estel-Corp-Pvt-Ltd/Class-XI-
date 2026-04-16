"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CURRICULUM } from "@/data/curriculum";
import { useProgress } from "@/utils/progress";

export default function Sidebar() {
  const pathname = usePathname() ?? "";
  const progress = useProgress();
  const [openUnit, setOpenUnit] = useState<number | null>(() => {
    for (const u of CURRICULUM) {
      for (const l of u.lessons) {
        if (pathname.includes(`/unit${u.number}/${l.slug}`)) return u.number;
      }
    }
    return 1;
  });

  const total = CURRICULUM.reduce((n, u) => n + u.lessons.length, 0);
  const done = progress.completedLessons.length;
  const pct = Math.round((done / total) * 100);

  return (
    <aside className="w-72 shrink-0 border-r-2 border-black/10 bg-[var(--color-card)] h-screen sticky top-0 overflow-y-auto">
      <div className="p-4 border-b-2 border-black/10">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-3xl">✨</div>
          <div>
            <div className="font-hand text-xl font-bold leading-none">
              AI Sparks
            </div>
            <div className="text-xs text-muted-foreground">Class 11 · Interactive</div>
          </div>
        </Link>
        <div className="mt-3">
          <div className="flex justify-between text-xs mb-1 font-semibold">
            <span>Progress</span>
            <span>{done} / {total}</span>
          </div>
          <div className="h-2 bg-[var(--color-muted)] rounded-full overflow-hidden border border-black/10">
            <div
              className="h-full transition-all"
              style={{
                width: `${pct}%`,
                background: "linear-gradient(90deg, var(--accent-coral), var(--accent-yellow))",
              }}
            />
          </div>
        </div>
      </div>

      <nav className="p-2">
        {CURRICULUM.map((unit) => {
          const isOpen = openUnit === unit.number;
          const unitDone = unit.lessons.filter((l) =>
            progress.completedLessons.includes(l.id)
          ).length;
          return (
            <div key={unit.id} className="mb-1">
              <button
                onClick={() => setOpenUnit(isOpen ? null : unit.number)}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[var(--color-muted)] transition font-semibold text-left"
              >
                <span className="text-lg">{unit.emoji}</span>
                <span className="flex-1 text-sm">
                  <span className="block leading-tight">Unit {unit.number}: {unit.title}</span>
                  <span className="text-xs text-muted-foreground">
                    {unitDone}/{unit.lessons.length} done
                  </span>
                </span>
                <span className="text-xs">{isOpen ? "▾" : "▸"}</span>
              </button>
              {isOpen && (
                <div className="ml-4 mt-1 mb-2 border-l-2 border-dashed border-black/10 pl-2">
                  {unit.lessons.map((l, idx) => {
                    const href = `/unit${unit.number}/${l.slug}`;
                    const active = pathname === href;
                    const complete = progress.completedLessons.includes(l.id);
                    return (
                      <Link
                        key={l.id}
                        href={href}
                        className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition ${
                          active
                            ? "bg-[var(--color-foreground)] text-[var(--color-background)] font-bold"
                            : "hover:bg-[var(--color-muted)]"
                        }`}
                      >
                        <span className="w-5 text-center">
                          {complete ? "✅" : l.emoji}
                        </span>
                        <span className="flex-1 leading-tight">
                          <span className="block">{l.title}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="p-3 text-xs text-muted-foreground border-t-2 border-black/10">
        Built for Class 11 AI curriculum.
      </div>
    </aside>
  );
}
