"use client";

import { useState } from "react";
import LessonShell from "@/components/LessonShell";
import CodePlayground from "@/components/CodePlayground";
import InfoBox from "@/components/InfoBox";

const SNIPPETS: Record<string, { title: string; code: string; desc: string }> = {
  fizzbuzz: {
    title: "FizzBuzz",
    desc: "Print numbers 1–15, but 'Fizz' for multiples of 3 and 'Buzz' for multiples of 5.",
    code: `for i in range(1, 16):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)`,
  },
  prime: {
    title: "Prime checker",
    desc: "Is 29 prime?",
    code: `def is_prime(n):
    if n < 2:
        return False
    i = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i = i + 1
    return True

print(is_prime(29))
print(is_prime(100))`,
  },
  fib: {
    title: "Fibonacci",
    desc: "The first 10 Fibonacci numbers.",
    code: `a = 0
b = 1
for i in range(10):
    print(a)
    c = a + b
    a = b
    b = c`,
  },
  stats: {
    title: "Mini statistics",
    desc: "Mean + max + min of a list.",
    code: `scores = [82, 91, 74, 65, 88, 100, 45, 72]
print("Mean:", sum(scores) / len(scores))
print("Max:", max(scores))
print("Min:", min(scores))
print("Range:", max(scores) - min(scores))`,
  },
  guessing: {
    title: "Counting game",
    desc: "Count down from 5.",
    code: `n = 5
while n > 0:
    print(n)
    n = n - 1
print("Blast off!")`,
  },
};

function SnippetPicker({ onPick }: { onPick: (code: string) => void }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-3">Load an example</h3>
      <div className="grid sm:grid-cols-2 gap-2">
        {Object.entries(SNIPPETS).map(([k, s]) => (
          <button
            key={k}
            onClick={() => onPick(s.code)}
            className="card-soft p-3 text-left hover:bg-[var(--color-muted)] transition"
          >
            <div className="font-bold">{s.title}</div>
            <div className="text-sm text-muted-foreground">{s.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function FreePlayground() {
  const [code, setCode] = useState(`# Write any Python code here and press Run.
# Supported: variables, arithmetic, if/elif/else,
# for/while, def, lists, strings, f-strings, range(),
# sum(), len(), min(), max(), print().

name = "you"
print(f"Welcome, {name}!")
print("2 + 2 =", 2 + 2)
`);

  return (
    <div>
      <SnippetPicker onPick={setCode} />
      <div className="mt-4">
        <CodePlayground initialCode={code} key={code} />
      </div>
    </div>
  );
}

export default function PythonPlayground() {
  return (
    <LessonShell
      lessonId="u3l4"
      unitNumber={3}
      lessonNumber={4}
      title="Live Python Playground"
      subtitle="Write + run real Python code in your browser"
      emoji="⚡"
      unitColor="var(--accent-sky)"
      tabs={[
        {
          title: "Free play",
          icon: "🎮",
          content: <FreePlayground />,
        },
        {
          title: "Challenges",
          icon: "🎯",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-2">Challenge 1 · Count vowels</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Count how many vowels are in a word.
              </p>
              <CodePlayground
                initialCode={`word = "artificial"
count = 0
for ch in word:
    if ch == "a" or ch == "e" or ch == "i" or ch == "o" or ch == "u":
        count = count + 1
print(count)`}
                expectedOutput="6"
                hint="artificial has: a, i, i, i, a → six vowels."
              />

              <h3 className="text-xl font-bold mt-6 mb-2">Challenge 2 · Reverse a number</h3>
              <CodePlayground
                initialCode={`n = 1234
reversed_n = 0
while n > 0:
    digit = n % 10
    reversed_n = reversed_n * 10 + digit
    n = n // 10
print(reversed_n)`}
                expectedOutput="4321"
              />

              <h3 className="text-xl font-bold mt-6 mb-2">Challenge 3 · Highest score</h3>
              <CodePlayground
                initialCode={`scores = [78, 92, 65, 88, 100, 45]
best = scores[0]
for s in scores:
    if s > best:
        best = s
print(best)`}
                expectedOutput="100"
              />
              <InfoBox tone="amber" title="Note">
                This is a lightweight Python interpreter built for learning. It supports the
                essentials (variables, if/else, loops, functions, lists, f-strings) but not
                libraries like <code>numpy</code> — we'll build those ideas from scratch in Unit 6.
              </InfoBox>
            </div>
          ),
        },
      ]}
      quiz={[
        {
          q: "What does this print?\n\n    x = 3\n    for i in range(x):\n        print(i)",
          options: ["1 2 3", "0 1 2", "0 1 2 3", "Error"],
          correct: 1,
          explain: "range(3) produces 0, 1, 2 — three values starting from 0.",
        },
        {
          q: "What is `len(\"python\")`?",
          options: ["5", "6", "7", "Error"],
          correct: 1,
          explain: "len counts characters. 'python' has 6.",
        },
      ]}
    />
  );
}
