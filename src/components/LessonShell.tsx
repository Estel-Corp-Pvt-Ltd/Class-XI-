"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import QuizCard, { QuizQuestion } from "./QuizCard";
import { markLessonComplete, markTabComplete, useProgress } from "@/utils/progress";
import { getNextLesson, getPrevLesson } from "@/data/curriculum";

export type Tab = {
  title: string;
  icon?: string;
  content: ReactNode;
};

type Props = {
  lessonId: string;
  unitNumber: number;
  lessonNumber: number;
  title: string;
  subtitle: string;
  emoji: string;
  tabs: Tab[];
  quiz: QuizQuestion[];
  unitColor: string;
};

export default function LessonShell({
  lessonId,
  unitNumber,
  lessonNumber,
  title,
  subtitle,
  emoji,
  tabs,
  quiz,
  unitColor,
}: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const progress = useProgress();
  const completedTabs = progress.completedTabs[lessonId] ?? [];

  const allTabs = [...tabs, { title: "Challenge", icon: "🏆", content: null }];
  const totalTabs = allTabs.length;

  function markAndAdvance() {
    markTabComplete(lessonId, activeTab);
    if (activeTab < totalTabs - 1) {
      setActiveTab(activeTab + 1);
    }
  }

  function onQuizComplete() {
    markTabComplete(lessonId, totalTabs - 1);
    markLessonComplete(lessonId);
  }

  const prev = getPrevLesson(lessonId);
  const next = getNextLesson(lessonId);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div
        className="card-sketchy p-6 mb-6"
        style={{ background: `${unitColor}15` }}
      >
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <span className="pill" style={{ background: unitColor, color: "white", borderColor: "var(--color-foreground)" }}>
            Unit {unitNumber} · Lesson {lessonNumber}
          </span>
        </div>
        <div className="flex items-center gap-4 mb-2">
          <div className="text-5xl">{emoji}</div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">
              <span className="marker-highlight-yellow">{title}</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base mt-1">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {allTabs.map((t, i) => {
          const unlocked = i === 0 || completedTabs.includes(i - 1);
          const complete = completedTabs.includes(i);
          return (
            <button
              key={i}
              className={`tab-btn ${activeTab === i ? "active" : ""} whitespace-nowrap`}
              disabled={!unlocked}
              onClick={() => unlocked && setActiveTab(i)}
              title={!unlocked ? "Complete previous tab to unlock" : ""}
            >
              {!unlocked && <span className="mr-1">🔒</span>}
              {complete && <span className="mr-1">✅</span>}
              {t.icon && <span className="mr-1">{t.icon}</span>}
              {t.title}
            </button>
          );
        })}
      </div>

      <div className="animate-fade-up">
        {activeTab < tabs.length ? (
          <>
            <div className="card-sketchy p-6 mb-4">
              {tabs[activeTab].content}
            </div>
            <div className="flex justify-end">
              <button className="btn-sketchy" onClick={markAndAdvance}>
                {completedTabs.includes(activeTab)
                  ? "Next tab →"
                  : "Mark done & continue →"}
              </button>
            </div>
          </>
        ) : (
          <QuizCard questions={quiz} onComplete={onQuizComplete} />
        )}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3">
        {prev ? (
          <Link
            href={`/unit${prev.unit.number}/${prev.lesson.slug}`}
            className="btn-sketchy-outline justify-start"
          >
            ← {prev.lesson.emoji} {prev.lesson.title}
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/unit${next.unit.number}/${next.lesson.slug}`}
            className="btn-sketchy btn-mint justify-end ml-auto"
          >
            {next.lesson.emoji} {next.lesson.title} →
          </Link>
        ) : (
          <Link href="/" className="btn-sketchy btn-mint justify-end ml-auto">
            🏁 Back to Home
          </Link>
        )}
      </div>
    </div>
  );
}
