"use client";

import { ReactNode } from "react";

type Tone = "blue" | "amber" | "green" | "coral" | "lavender";

const toneStyle: Record<Tone, { bg: string; border: string; text: string }> = {
  blue: { bg: "#e8f2ff", border: "#6ab7ff", text: "#0b3e74" },
  amber: { bg: "#fff5d9", border: "#f0b429", text: "#7a4e00" },
  green: { bg: "#e5f8ef", border: "#6ed3b3", text: "#0b5340" },
  coral: { bg: "#ffe5e5", border: "#ff6b6b", text: "#7a1a1a" },
  lavender: { bg: "#f1eaff", border: "#b794f6", text: "#3e1f7a" },
};

export default function InfoBox({
  tone = "blue",
  title,
  icon,
  children,
}: {
  tone?: Tone;
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  const s = toneStyle[tone];
  return (
    <div
      className="rounded-xl px-4 py-3 my-4"
      style={{
        background: s.bg,
        border: `2px solid ${s.border}`,
        color: s.text,
      }}
    >
      {title && (
        <div className="font-bold mb-1 flex items-center gap-2">
          {icon && <span>{icon}</span>}
          <span>{title}</span>
        </div>
      )}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
