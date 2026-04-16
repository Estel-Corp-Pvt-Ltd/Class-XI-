"use client";

import { useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

type Cat = "numeric" | "categorical" | "text" | "image" | "time";

const EXAMPLES: { label: string; cat: Cat }[] = [
  { label: "Height (175 cm)", cat: "numeric" },
  { label: "Favourite colour", cat: "categorical" },
  { label: "A tweet", cat: "text" },
  { label: "A chest X-ray", cat: "image" },
  { label: "When you logged in", cat: "time" },
  { label: "Class (9, 10, 11, 12)", cat: "categorical" },
  { label: "Price in rupees", cat: "numeric" },
  { label: "Product description", cat: "text" },
  { label: "A selfie", cat: "image" },
  { label: "Date of birth", cat: "time" },
];

const CAT_INFO: Record<Cat, { t: string; e: string; c: string; d: string }> = {
  numeric: {
    t: "Numeric",
    e: "🔢",
    c: "#6ab7ff",
    d: "Numbers you can add / average. Heights, prices, temperatures.",
  },
  categorical: {
    t: "Categorical",
    e: "🏷️",
    c: "#ffd36b",
    d: "Groups / labels. Colours, cities, class names.",
  },
  text: {
    t: "Text",
    e: "📝",
    c: "#ff8fa3",
    d: "Free-form writing. Reviews, messages, articles.",
  },
  image: {
    t: "Image",
    e: "🖼️",
    c: "#6ed3b3",
    d: "Pixels. Photos, scans, icons.",
  },
  time: {
    t: "Time / date",
    e: "🕐",
    c: "#b794f6",
    d: "Points on a timeline. Birthdays, timestamps.",
  },
};

function DataSorter() {
  const [placed, setPlaced] = useState<Record<string, Cat | null>>(
    Object.fromEntries(EXAMPLES.map((e) => [e.label, null]))
  );
  const [selected, setSelected] = useState<string | null>(null);

  function place(label: string, cat: Cat) {
    setPlaced((p) => ({ ...p, [label]: cat }));
    setSelected(null);
  }

  const correct = EXAMPLES.filter((e) => placed[e.label] === e.cat).length;

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Sort each into its bin</h3>
      <p className="text-muted-foreground text-sm mb-4">
        Tap an example, then tap the matching data type.
      </p>

      <div className="flex flex-wrap gap-2 mb-4 min-h-8">
        {EXAMPLES.filter((e) => placed[e.label] === null).map((e) => (
          <button
            key={e.label}
            onClick={() => setSelected(selected === e.label ? null : e.label)}
            className="chip"
            style={{
              background: selected === e.label ? "var(--accent-yellow)" : undefined,
              borderWidth: 2,
              borderStyle: "solid",
            }}
          >
            {e.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-2">
        {(Object.keys(CAT_INFO) as Cat[]).map((cat) => {
          const info = CAT_INFO[cat];
          return (
            <div
              key={cat}
              onClick={() => selected && place(selected, cat)}
              className="rounded-xl p-3 min-h-28 cursor-pointer transition"
              style={{
                background: `${info.c}22`,
                border: `2px dashed ${info.c}`,
              }}
            >
              <div className="font-bold text-sm mb-1 flex items-center gap-1">
                <span>{info.e}</span> {info.t}
              </div>
              {EXAMPLES.filter((e) => placed[e.label] === cat).map((e) => {
                const ok = e.cat === cat;
                return (
                  <div
                    key={e.label}
                    className="text-xs rounded px-2 py-1 mb-1"
                    style={{
                      background: ok ? "#e5f8ef" : "#ffe5e5",
                      border: `1.5px solid ${ok ? "#6ed3b3" : "#ff6b6b"}`,
                    }}
                  >
                    {e.label} {ok ? "✓" : "✗"}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="mt-4 text-center text-sm font-bold">
        {correct} / {EXAMPLES.length} correct
      </div>
    </div>
  );
}

export default function DataTypes() {
  return (
    <LessonShell
      lessonId="u5l1"
      unitNumber={5}
      lessonNumber={1}
      title="Types of Data"
      subtitle="Five flavours every AI engineer recognises"
      emoji="🔢"
      unitColor="var(--accent-mint)"
      tabs={[
        {
          title: "Learn",
          icon: "📘",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-3">Data comes in 5 main flavours</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {(Object.keys(CAT_INFO) as Cat[]).map((k) => (
                  <div
                    key={k}
                    className="card-soft p-4"
                    style={{ borderLeft: `4px solid ${CAT_INFO[k].c}` }}
                  >
                    <div className="flex items-center gap-2 font-bold">
                      <span className="text-2xl">{CAT_INFO[k].e}</span>
                      {CAT_INFO[k].t}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {CAT_INFO[k].d}
                    </div>
                  </div>
                ))}
              </div>
              <InfoBox tone="blue" title="Why this matters">
                Each type needs a different <em>pre-processing</em> trick: numbers get scaled,
                categories get encoded, text gets tokenised, images get normalised, time gets
                broken into features.
              </InfoBox>
            </div>
          ),
        },
        {
          title: "Sort it",
          icon: "🗂️",
          content: <DataSorter />,
        },
      ]}
      quiz={[
        {
          q: "A student's marks (out of 100) are:",
          options: ["Numeric", "Categorical", "Text", "Image"],
          correct: 0,
          explain: "Numbers you can average or compare → numeric.",
        },
        {
          q: "Pass / Fail is best treated as:",
          options: ["Numeric", "Categorical", "Text", "Time"],
          correct: 1,
          explain: "Two labels, no ordering — it's categorical (sometimes called binary).",
        },
        {
          q: "A handwritten digit photo is:",
          options: ["Text", "Image", "Categorical", "Time"],
          correct: 1,
          explain: "Pixels → image data.",
        },
      ]}
    />
  );
}
