"use client";

import { useState } from "react";
import { runPython } from "@/utils/pythonRunner";

type Props = {
  initialCode: string;
  expectedOutput?: string;
  hint?: string;
  title?: string;
};

export default function CodePlayground({
  initialCode,
  expectedOutput,
  hint,
  title,
}: Props) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "ok" | "err" | "mismatch">("idle");
  const [showHint, setShowHint] = useState(false);

  function run() {
    const result = runPython(code);
    setOutput(result.output);
    if (result.error) {
      setStatus("err");
      return;
    }
    if (expectedOutput && result.output.trim() !== expectedOutput.trim()) {
      setStatus("mismatch");
      return;
    }
    setStatus("ok");
  }

  function reset() {
    setCode(initialCode);
    setOutput("");
    setStatus("idle");
  }

  return (
    <div className="card-sketchy p-4 my-4">
      {title && (
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">⚡</span>
          <h4 className="font-bold">{title}</h4>
        </div>
      )}
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        className="w-full font-mono text-sm p-3 rounded-lg border-2 border-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-coral)] resize-y"
        rows={Math.max(4, code.split("\n").length)}
        style={{ background: "#1e1e2e", color: "#eaeaea", minHeight: "120px" }}
      />
      <div className="flex gap-2 mt-3 flex-wrap">
        <button className="btn-sketchy btn-mint" onClick={run}>
          ▶ Run
        </button>
        <button className="btn-sketchy-outline" onClick={reset}>
          ↺ Reset
        </button>
        {hint && (
          <button
            className="btn-sketchy-outline"
            onClick={() => setShowHint((h) => !h)}
          >
            💡 {showHint ? "Hide hint" : "Show hint"}
          </button>
        )}
      </div>
      {showHint && hint && (
        <div
          className="mt-3 px-3 py-2 rounded-lg text-sm"
          style={{ background: "#fff5d9", border: "2px solid #f0b429", color: "#7a4e00" }}
        >
          <strong>Hint:</strong> {hint}
        </div>
      )}
      {output !== "" && (
        <div className="mt-3">
          <div className="text-xs uppercase tracking-wide font-bold text-muted-foreground mb-1">
            Output
          </div>
          <pre
            className="rounded-lg p-3 text-sm whitespace-pre-wrap break-words"
            style={{
              background:
                status === "ok"
                  ? "#e5f8ef"
                  : status === "err"
                  ? "#ffe5e5"
                  : status === "mismatch"
                  ? "#fff5d9"
                  : "#f2ede3",
              border: `2px solid ${
                status === "ok"
                  ? "#6ed3b3"
                  : status === "err"
                  ? "#ff6b6b"
                  : status === "mismatch"
                  ? "#f0b429"
                  : "#e8dec8"
              }`,
              color: "#1a1a1a",
            }}
          >
            {output || "(no output)"}
          </pre>
          {status === "ok" && expectedOutput && (
            <p className="text-sm mt-2 font-semibold" style={{ color: "#0b5340" }}>
              ✅ Perfect! Output matches.
            </p>
          )}
          {status === "mismatch" && (
            <p className="text-sm mt-2 font-semibold" style={{ color: "#7a4e00" }}>
              ⚠️ Expected: <code className="text-xs">{expectedOutput}</code>
            </p>
          )}
          {status === "err" && (
            <p className="text-sm mt-2 font-semibold" style={{ color: "#7a1a1a" }}>
              ❌ Error — check your code and try again.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
