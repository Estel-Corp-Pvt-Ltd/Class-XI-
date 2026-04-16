"use client";

import { useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

type Row = { name: string; age: number | null; city: string | null; marks: number | null };

const RAW: Row[] = [
  { name: "Aarav", age: 16, city: "Mumbai", marks: 82 },
  { name: "Priya", age: null, city: "Delhi", marks: 91 },
  { name: "Karan", age: 17, city: null, marks: 74 },
  { name: "Diya", age: 16, city: "Pune", marks: null },
  { name: "Rohit", age: 999, city: "Chennai", marks: 65 },
  { name: "Sana", age: 16, city: "Delhi", marks: 88 },
];

type Action =
  | "raw"
  | "mean_age"
  | "mode_city"
  | "median_marks"
  | "drop_outlier";

function getCleaned(actions: Action[]): Row[] {
  let data = RAW.map((r) => ({ ...r }));

  if (actions.includes("drop_outlier")) {
    data = data.filter((r) => (r.age ?? 0) < 100);
  }
  if (actions.includes("mean_age")) {
    const ages = data.filter((r) => r.age !== null && (r.age ?? 0) < 100).map((r) => r.age as number);
    const avg = Math.round(ages.reduce((a, b) => a + b, 0) / ages.length);
    data = data.map((r) => (r.age === null ? { ...r, age: avg } : r));
  }
  if (actions.includes("mode_city")) {
    const counts: Record<string, number> = {};
    data.forEach((r) => {
      if (r.city) counts[r.city] = (counts[r.city] ?? 0) + 1;
    });
    const mode = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
    data = data.map((r) => (r.city === null && mode ? { ...r, city: mode } : r));
  }
  if (actions.includes("median_marks")) {
    const marks = [...data.filter((r) => r.marks !== null).map((r) => r.marks as number)].sort(
      (a, b) => a - b
    );
    const mid = marks[Math.floor(marks.length / 2)];
    data = data.map((r) => (r.marks === null ? { ...r, marks: mid } : r));
  }

  return data;
}

function DataLab() {
  const [actions, setActions] = useState<Action[]>([]);
  const cleaned = getCleaned(actions);

  function toggle(a: Action) {
    setActions((curr) => (curr.includes(a) ? curr.filter((x) => x !== a) : [...curr, a]));
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">🧹 Cleaning the data</h3>
      <p className="text-muted-foreground text-sm mb-4">
        Try each fix and watch the table update.
      </p>

      <div className="grid sm:grid-cols-2 gap-2 mb-4">
        <Toggle a="mean_age" actions={actions} toggle={toggle} label="Fill missing age with mean" />
        <Toggle a="mode_city" actions={actions} toggle={toggle} label="Fill missing city with most common" />
        <Toggle a="median_marks" actions={actions} toggle={toggle} label="Fill missing marks with median" />
        <Toggle a="drop_outlier" actions={actions} toggle={toggle} label="Drop outlier (age = 999)" />
      </div>

      <div className="overflow-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-muted)]">
              <th className="p-2 border-2 text-left">Name</th>
              <th className="p-2 border-2 text-left">Age</th>
              <th className="p-2 border-2 text-left">City</th>
              <th className="p-2 border-2 text-left">Marks</th>
            </tr>
          </thead>
          <tbody>
            {cleaned.map((r) => (
              <tr key={r.name}>
                <td className="p-2 border-2 font-semibold">{r.name}</td>
                <Cell v={r.age} flag={r.age === null || (r.age ?? 0) > 100} raw={RAW.find((x) => x.name === r.name)!.age} />
                <Cell v={r.city} flag={r.city === null} raw={RAW.find((x) => x.name === r.name)!.city} />
                <Cell v={r.marks} flag={r.marks === null} raw={RAW.find((x) => x.name === r.name)!.marks} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <InfoBox tone="amber" title="Trade-off">
        Every fix loses some information. Filling with the mean smooths data but can hide
        patterns. Dropping rows is simple but shrinks your dataset.
      </InfoBox>
    </div>
  );
}

function Toggle({
  a,
  actions,
  toggle,
  label,
}: {
  a: Action;
  actions: Action[];
  toggle: (a: Action) => void;
  label: string;
}) {
  const on = actions.includes(a);
  return (
    <button
      onClick={() => toggle(a)}
      className="card-soft p-3 text-left flex items-center gap-2 transition"
      style={{
        background: on ? "#e5f8ef" : undefined,
        borderColor: on ? "#6ed3b3" : undefined,
      }}
    >
      <div
        className="w-5 h-5 rounded-md border-2 flex items-center justify-center"
        style={{
          background: on ? "#6ed3b3" : "transparent",
          borderColor: on ? "#6ed3b3" : "var(--color-foreground)",
        }}
      >
        {on && <span className="text-white text-xs">✓</span>}
      </div>
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );
}

function Cell({
  v,
  flag,
  raw,
}: {
  v: number | string | null;
  flag: boolean;
  raw: number | string | null;
}) {
  const wasMissing = raw === null || (typeof raw === "number" && raw > 100);
  if (v === null) {
    return (
      <td className="p-2 border-2" style={{ background: "#ffe5e5", color: "#7a1a1a" }}>
        <span className="italic">missing</span>
      </td>
    );
  }
  if (flag && v === raw) {
    return (
      <td className="p-2 border-2" style={{ background: "#fff5d9", color: "#7a4e00" }}>
        {v} ⚠️
      </td>
    );
  }
  if (wasMissing) {
    return (
      <td className="p-2 border-2" style={{ background: "#e5f8ef", color: "#0b5340" }}>
        {v} ✓
      </td>
    );
  }
  return <td className="p-2 border-2">{v}</td>;
}

export default function DataCleaning() {
  return (
    <LessonShell
      lessonId="u5l2"
      unitNumber={5}
      lessonNumber={2}
      title="Cleaning Messy Data"
      subtitle="Real data is never perfect — here's how to fix it"
      emoji="🧹"
      unitColor="var(--accent-mint)"
      tabs={[
        {
          title: "Why clean?",
          icon: "❓",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-3">"Garbage in, garbage out"</h3>
              <p className="mb-3">
                An AI model is only as good as the data it learns from. If the data is messy, the
                model will learn the mess.
              </p>
              <h4 className="font-bold mt-4 mb-2">Typical problems:</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>
                  <span className="marker-highlight-coral">Missing values</span> — empty cells.
                </li>
                <li>
                  <span className="marker-highlight-yellow">Outliers</span> — weird values (like
                  age = 999).
                </li>
                <li>
                  <span className="marker-highlight-sky">Duplicates</span> — same row twice.
                </li>
                <li>
                  <span className="marker-highlight-mint">Inconsistent labels</span> — "mumbai" vs
                  "Mumbai" vs "MUMBAI".
                </li>
                <li>Wrong types — a number saved as text.</li>
              </ul>
              <InfoBox tone="coral" title="Rule of thumb">
                Data scientists spend <strong>60-80%</strong> of their time cleaning data. This
                isn't glamorous — it's the real job.
              </InfoBox>
            </div>
          ),
        },
        {
          title: "Clean it live",
          icon: "🧪",
          content: <DataLab />,
        },
      ]}
      quiz={[
        {
          q: "'Missing values' means:",
          options: ["Negative numbers", "Empty cells in the dataset", "Wrong answers", "Outliers"],
          correct: 1,
          explain: "Missing = empty / no data recorded.",
        },
        {
          q: "An age value of 999 is most likely a:",
          options: ["Real number", "Outlier / error", "Common case", "Feature"],
          correct: 1,
          explain: "999 is far outside any real age — treat as error/outlier.",
        },
        {
          q: "What does 'Garbage in, garbage out' mean?",
          options: [
            "Delete all garbage emails",
            "Bad input data gives bad model output",
            "Throw away your project",
            "Python is slow",
          ],
          correct: 1,
          explain: "The quality of your data directly limits the quality of your model.",
        },
      ]}
    />
  );
}
