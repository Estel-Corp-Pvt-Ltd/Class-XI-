"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "ai-sparks-progress-v1";

type ProgressState = {
  completedLessons: string[];
  completedTabs: Record<string, number[]>;
};

const defaultState: ProgressState = {
  completedLessons: [],
  completedTabs: {},
};

let cached: ProgressState | null = null;
const listeners = new Set<() => void>();

function read(): ProgressState {
  if (cached) return cached;
  if (typeof window === "undefined") {
    cached = defaultState;
    return cached;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      cached = defaultState;
    } else {
      const parsed = JSON.parse(raw) as ProgressState;
      cached = {
        completedLessons: parsed.completedLessons ?? [],
        completedTabs: parsed.completedTabs ?? {},
      };
    }
  } catch {
    cached = defaultState;
  }
  return cached;
}

function write(next: ProgressState) {
  cached = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }
  listeners.forEach((fn) => fn());
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      cached = null;
      fn();
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("storage", onStorage);
  }
  return () => {
    listeners.delete(fn);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage);
    }
  };
}

function getSnapshot() {
  return read();
}

function getServerSnapshot() {
  return defaultState;
}

export function useProgress() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function markLessonComplete(lessonId: string) {
  const state = read();
  if (state.completedLessons.includes(lessonId)) return;
  write({
    ...state,
    completedLessons: [...state.completedLessons, lessonId],
  });
}

export function markTabComplete(lessonId: string, tabIndex: number) {
  const state = read();
  const current = state.completedTabs[lessonId] ?? [];
  if (current.includes(tabIndex)) return;
  write({
    ...state,
    completedTabs: {
      ...state.completedTabs,
      [lessonId]: [...current, tabIndex].sort((a, b) => a - b),
    },
  });
}

export function isLessonComplete(state: ProgressState, lessonId: string) {
  return state.completedLessons.includes(lessonId);
}

export function isTabComplete(
  state: ProgressState,
  lessonId: string,
  tabIndex: number
) {
  return (state.completedTabs[lessonId] ?? []).includes(tabIndex);
}

export function resetProgress() {
  write(defaultState);
}
