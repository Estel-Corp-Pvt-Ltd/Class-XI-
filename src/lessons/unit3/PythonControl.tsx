"use client";

import LessonShell from "@/components/LessonShell";
import CodePlayground from "@/components/CodePlayground";
import InfoBox from "@/components/InfoBox";

export default function PythonControl() {
  return (
    <LessonShell
      lessonId="u3l2"
      unitNumber={3}
      lessonNumber={2}
      title="If, Else & Loops"
      subtitle="Decisions and repetition — the two things every program does"
      emoji="🔁"
      unitColor="var(--accent-sky)"
      tabs={[
        {
          title: "If / Else",
          icon: "🔀",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-3">Decisions in code</h3>
              <p className="mb-3">
                The <code>if</code> statement lets your program choose between paths.
              </p>
              <pre className="code-block mb-4">
{`marks = 72
if marks >= 90:
    print("A+")
elif marks >= 75:
    print("A")
elif marks >= 60:
    print("B")
else:
    print("Keep practising")`}
              </pre>
              <InfoBox tone="amber" title="Indentation matters in Python!">
                The <strong>4 spaces</strong> before <code>print(...)</code> are what tells Python
                "this line belongs inside the if". No <code>&#123; &#125;</code> like other
                languages.
              </InfoBox>
              <h4 className="font-bold mt-4 mb-2">Comparison operators</h4>
              <div className="flex flex-wrap gap-2">
                {["==", "!=", "<", ">", "<=", ">="].map((op) => (
                  <span key={op} className="chip font-mono">
                    {op}
                  </span>
                ))}
              </div>
              <h4 className="font-bold mt-4 mb-2">Logical operators</h4>
              <div className="flex flex-wrap gap-2">
                {["and", "or", "not"].map((op) => (
                  <span key={op} className="chip font-mono">
                    {op}
                  </span>
                ))}
              </div>
            </div>
          ),
        },
        {
          title: "Try if/else",
          icon: "⚡",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-2">Task · Grading machine</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Make the program print <code>B</code> when marks = 72.
              </p>
              <CodePlayground
                initialCode={`marks = 72
if marks >= 90:
    print("A+")
elif marks >= 75:
    print("A")
elif marks >= 60:
    print("B")
else:
    print("Keep practising")`}
                expectedOutput="B"
              />
              <h3 className="text-xl font-bold mt-6 mb-2">Task · Even or odd</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Hint: use <code>%</code> — remainder.
              </p>
              <CodePlayground
                initialCode={`n = 7
if n % 2 == 0:
    print("even")
else:
    print("odd")`}
                expectedOutput="odd"
                hint="Change n to see what happens. Even numbers have 0 remainder when divided by 2."
              />
            </div>
          ),
        },
        {
          title: "Loops",
          icon: "🔁",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-3">Doing the same thing many times</h3>
              <p className="mb-3">
                Use <code>for</code> when you know how many times. Use <code>while</code> when you
                don't.
              </p>
              <pre className="code-block mb-4">
{`# for loop — 5 times
for i in range(5):
    print("Hello", i)

# while loop — until condition breaks
count = 0
while count < 3:
    print("count is", count)
    count += 1`}
              </pre>
              <CodePlayground
                title="Try · Sum of 1 to 100"
                initialCode={`total = 0
for i in range(1, 101):
    total += i
print(total)`}
                expectedOutput="5050"
              />
              <CodePlayground
                title="Try · Multiplication table"
                initialCode={`n = 7
for i in range(1, 11):
    print(f"{n} x {i} = {n * i}")`}
              />
              <InfoBox tone="green" title="Why loops matter for AI">
                Training a model means running the same update step many thousands of times. Loops
                are the heartbeat of AI.
              </InfoBox>
            </div>
          ),
        },
      ]}
      quiz={[
        {
          q: "What does Python use to group code inside an if-block?",
          options: ["Curly braces { }", "Parentheses ( )", "Indentation (spaces)", "Square brackets [ ]"],
          correct: 2,
          explain: "Python uses indentation — usually 4 spaces — instead of { }.",
        },
        {
          q: "How many times does `for i in range(3):` run?",
          options: ["2", "3", "4", "It runs forever"],
          correct: 1,
          explain: "range(3) gives 0, 1, 2 — three iterations.",
        },
        {
          q: "Which operator checks equality?",
          options: ["=", "==", "!=", ":="],
          correct: 1,
          explain: "= assigns a value; == compares values for equality.",
        },
        {
          q: "What prints?\n\n    x = 5\n    if x > 3 and x < 10:\n        print(\"yes\")\n    else:\n        print(\"no\")",
          options: ["yes", "no", "Error", "nothing"],
          correct: 0,
          explain: "Both conditions are true, so it prints 'yes'.",
        },
      ]}
    />
  );
}
