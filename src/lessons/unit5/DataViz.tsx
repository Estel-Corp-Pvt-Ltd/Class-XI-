"use client";

import { useMemo, useState } from "react";
import LessonShell from "@/components/LessonShell";
import InfoBox from "@/components/InfoBox";

type Chart = "bar" | "scatter" | "line" | "pie";

const DATA = {
  cities: [
    { label: "Mumbai", value: 20 },
    { label: "Delhi", value: 18 },
    { label: "Bangalore", value: 14 },
    { label: "Chennai", value: 10 },
    { label: "Pune", value: 8 },
  ],
  scatter: [
    { x: 2, y: 55 },
    { x: 3, y: 62 },
    { x: 4, y: 68 },
    { x: 5, y: 75 },
    { x: 6, y: 80 },
    { x: 7, y: 82 },
    { x: 8, y: 88 },
    { x: 9, y: 92 },
  ],
  monthly: [
    { label: "Jan", value: 24 },
    { label: "Feb", value: 22 },
    { label: "Mar", value: 28 },
    { label: "Apr", value: 32 },
    { label: "May", value: 38 },
    { label: "Jun", value: 41 },
  ],
};

function BarChart() {
  const max = Math.max(...DATA.cities.map((d) => d.value));
  const colors = ["#ff6b6b", "#6ab7ff", "#6ed3b3", "#ffd36b", "#b794f6"];
  return (
    <svg viewBox="0 0 400 260" className="w-full max-w-md">
      <line x1={40} y1={220} x2={390} y2={220} stroke="#1a1a1a" strokeWidth={2} />
      <line x1={40} y1={20} x2={40} y2={220} stroke="#1a1a1a" strokeWidth={2} />
      {DATA.cities.map((d, i) => {
        const h = (d.value / max) * 180;
        const x = 60 + i * 65;
        return (
          <g key={d.label}>
            <rect
              x={x}
              y={220 - h}
              width={50}
              height={h}
              fill={colors[i % colors.length]}
              stroke="#1a1a1a"
              strokeWidth={2}
              rx={4}
              style={{ transformOrigin: `${x + 25}px 220px` }}
            >
              <animate
                attributeName="height"
                from={0}
                to={h}
                dur="0.8s"
                fill="freeze"
                begin={`${i * 0.1}s`}
              />
              <animate
                attributeName="y"
                from={220}
                to={220 - h}
                dur="0.8s"
                fill="freeze"
                begin={`${i * 0.1}s`}
              />
            </rect>
            <text x={x + 25} y={240} textAnchor="middle" fontSize={11} fontWeight="bold">
              {d.label}
            </text>
            <text
              x={x + 25}
              y={220 - h - 5}
              textAnchor="middle"
              fontSize={11}
              fontWeight="bold"
              fill="#1a1a1a"
              opacity={0}
            >
              {d.value}
              <animate attributeName="opacity" from={0} to={1} dur="0.3s" fill="freeze" begin={`${0.7 + i * 0.1}s`} />
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function Scatter() {
  const maxX = Math.max(...DATA.scatter.map((d) => d.x));
  const maxY = Math.max(...DATA.scatter.map((d) => d.y));
  return (
    <svg viewBox="0 0 400 260" className="w-full max-w-md">
      <line x1={40} y1={220} x2={390} y2={220} stroke="#1a1a1a" strokeWidth={2} />
      <line x1={40} y1={20} x2={40} y2={220} stroke="#1a1a1a" strokeWidth={2} />
      <text x={20} y={125} fontSize={10} transform="rotate(-90 20 125)" textAnchor="middle">
        Marks
      </text>
      <text x={215} y={255} fontSize={10} textAnchor="middle">
        Hours studied
      </text>
      {DATA.scatter.map((d, i) => {
        const cx = 50 + (d.x / maxX) * 330;
        const cy = 220 - (d.y / maxY) * 180;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={0}
            fill="var(--accent-coral)"
            stroke="#1a1a1a"
            strokeWidth={2}
          >
            <animate attributeName="r" from={0} to={7} dur="0.4s" fill="freeze" begin={`${i * 0.08}s`} />
          </circle>
        );
      })}
    </svg>
  );
}

function LineChart() {
  const maxV = Math.max(...DATA.monthly.map((d) => d.value));
  const n = DATA.monthly.length;
  const points = DATA.monthly.map((d, i) => {
    const x = 50 + (i / (n - 1)) * 330;
    const y = 220 - (d.value / maxV) * 180;
    return { x, y, label: d.label, value: d.value };
  });
  const path = points
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");
  return (
    <svg viewBox="0 0 400 260" className="w-full max-w-md">
      <line x1={40} y1={220} x2={390} y2={220} stroke="#1a1a1a" strokeWidth={2} />
      <line x1={40} y1={20} x2={40} y2={220} stroke="#1a1a1a" strokeWidth={2} />
      <path
        d={path}
        fill="none"
        stroke="var(--accent-mint)"
        strokeWidth={3}
        strokeDasharray={800}
        strokeDashoffset={800}
      >
        <animate attributeName="stroke-dashoffset" from={800} to={0} dur="1.4s" fill="freeze" />
      </path>
      {points.map((p, i) => (
        <g key={p.label}>
          <circle cx={p.x} cy={p.y} r={0} fill="var(--accent-coral)" stroke="#1a1a1a" strokeWidth={2}>
            <animate attributeName="r" from={0} to={5} dur="0.3s" fill="freeze" begin={`${0.3 + i * 0.15}s`} />
          </circle>
          <text x={p.x} y={240} textAnchor="middle" fontSize={11} fontWeight="bold">
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function PieChart() {
  const total = DATA.cities.reduce((s, d) => s + d.value, 0);
  const colors = ["#ff6b6b", "#6ab7ff", "#ffd36b", "#6ed3b3", "#b794f6"];
  let angle = -Math.PI / 2;
  const cx = 140;
  const cy = 140;
  const r = 100;
  return (
    <svg viewBox="0 0 400 280" className="w-full max-w-md">
      {DATA.cities.map((d, i) => {
        const frac = d.value / total;
        const a2 = angle + frac * 2 * Math.PI;
        const x1 = cx + r * Math.cos(angle);
        const y1 = cy + r * Math.sin(angle);
        const x2 = cx + r * Math.cos(a2);
        const y2 = cy + r * Math.sin(a2);
        const large = frac > 0.5 ? 1 : 0;
        const path = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
        const mid = (angle + a2) / 2;
        const lx = cx + r * 0.65 * Math.cos(mid);
        const ly = cy + r * 0.65 * Math.sin(mid);
        const el = (
          <g key={d.label} style={{ transformOrigin: `${cx}px ${cy}px` }}>
            <path d={path} fill={colors[i]} stroke="#1a1a1a" strokeWidth={2} opacity={0}>
              <animate attributeName="opacity" from={0} to={1} dur="0.4s" fill="freeze" begin={`${i * 0.15}s`} />
            </path>
            <text x={lx} y={ly} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#1a1a1a" opacity={0}>
              {Math.round(frac * 100)}%
              <animate attributeName="opacity" from={0} to={1} dur="0.3s" fill="freeze" begin={`${0.3 + i * 0.15}s`} />
            </text>
          </g>
        );
        angle = a2;
        return el;
      })}
      {DATA.cities.map((d, i) => (
        <g key={`leg-${d.label}`}>
          <rect x={260} y={40 + i * 24} width={14} height={14} fill={colors[i]} stroke="#1a1a1a" />
          <text x={280} y={52 + i * 24} fontSize={12} fontWeight="bold">
            {d.label} ({d.value})
          </text>
        </g>
      ))}
    </svg>
  );
}

function ChartPicker() {
  const [chart, setChart] = useState<Chart>("bar");
  const chartMap: Record<Chart, { el: React.ReactNode; t: string; when: string }> = {
    bar: {
      el: <BarChart />,
      t: "Bar chart",
      when: "Compare categories (cities, products, subjects).",
    },
    scatter: {
      el: <Scatter />,
      t: "Scatter plot",
      when: "See relationship between two numeric variables.",
    },
    line: {
      el: <LineChart />,
      t: "Line chart",
      when: "Track something over time.",
    },
    pie: {
      el: <PieChart />,
      t: "Pie chart",
      when: "Show parts of a whole (use sparingly!).",
    },
  };
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Try each chart type</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {(Object.keys(chartMap) as Chart[]).map((c) => (
          <button
            key={c}
            onClick={() => setChart(c)}
            className="tab-btn"
            style={{
              background: chart === c ? "var(--color-foreground)" : "transparent",
              color: chart === c ? "var(--color-background)" : undefined,
              border: "2px solid var(--color-foreground)",
            }}
          >
            {chartMap[c].t}
          </button>
        ))}
      </div>
      <div className="card-sketchy p-4 flex flex-col items-center">
        {chartMap[chart].el}
        <p className="mt-3 text-sm text-muted-foreground text-center">
          <strong>Use when:</strong> {chartMap[chart].when}
        </p>
      </div>
    </div>
  );
}

function StatsCalc() {
  const [nums, setNums] = useState("82, 91, 74, 65, 88, 72, 95, 60");
  const parsed = useMemo(() => {
    return nums
      .split(/[,\s]+/)
      .map((x) => parseFloat(x))
      .filter((x) => !isNaN(x));
  }, [nums]);

  const stats = useMemo(() => {
    if (parsed.length === 0) return null;
    const sorted = [...parsed].sort((a, b) => a - b);
    const mean = parsed.reduce((a, b) => a + b, 0) / parsed.length;
    const median =
      sorted.length % 2
        ? sorted[(sorted.length - 1) / 2]
        : (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
    const min = sorted[0];
    const max = sorted[sorted.length - 1];
    const variance =
      parsed.reduce((s, x) => s + (x - mean) ** 2, 0) / parsed.length;
    const std = Math.sqrt(variance);
    return {
      mean: +mean.toFixed(2),
      median: +median.toFixed(2),
      min,
      max,
      range: max - min,
      std: +std.toFixed(2),
    };
  }, [parsed]);

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Descriptive statistics</h3>
      <p className="text-muted-foreground text-sm mb-3">
        Type numbers separated by commas or spaces.
      </p>
      <input
        value={nums}
        onChange={(e) => setNums(e.target.value)}
        className="w-full border-2 border-[var(--color-foreground)] rounded-lg p-2 font-mono"
      />
      {stats && (
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-4">
          {Object.entries(stats).map(([k, v]) => (
            <div key={k} className="card-soft p-3 text-center">
              <div className="text-xs font-bold uppercase text-muted-foreground">{k}</div>
              <div className="font-hand text-2xl">{v}</div>
            </div>
          ))}
        </div>
      )}
      <InfoBox tone="blue" title="Why stats matter">
        Before any ML model, you should always compute these numbers. They tell you whether your
        data is skewed, has outliers, or is balanced.
      </InfoBox>
    </div>
  );
}

export default function DataViz() {
  return (
    <LessonShell
      lessonId="u5l3"
      unitNumber={5}
      lessonNumber={3}
      title="Visualising Data"
      subtitle="Pictures reveal what tables hide"
      emoji="📈"
      unitColor="var(--accent-mint)"
      tabs={[
        {
          title: "Chart types",
          icon: "📊",
          content: <ChartPicker />,
        },
        {
          title: "Stats lab",
          icon: "🧮",
          content: <StatsCalc />,
        },
      ]}
      quiz={[
        {
          q: "Best chart to show sales over 12 months:",
          options: ["Pie", "Bar", "Line", "Scatter"],
          correct: 2,
          explain: "Line charts are for time series.",
        },
        {
          q: "Scatter plot is useful when you want to:",
          options: [
            "Show parts of a whole",
            "See if two variables are related",
            "Show categories",
            "Show a single number",
          ],
          correct: 1,
          explain: "Scatter plots reveal relationships between two numeric variables.",
        },
        {
          q: "Median of [3, 5, 7, 9, 100] is:",
          options: ["5", "7", "24.8", "100"],
          correct: 1,
          explain:
            "Median is the middle value. Notice it's less affected by the outlier 100 than the mean (24.8).",
        },
      ]}
    />
  );
}
