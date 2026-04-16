"use client";

import LessonShell from "@/components/LessonShell";
import CodePlayground from "@/components/CodePlayground";
import InfoBox from "@/components/InfoBox";

export default function PythonFunctions() {
  return (
    <LessonShell
      lessonId="u3l3"
      unitNumber={3}
      lessonNumber={3}
      title="Functions & Lists"
      subtitle="Reusable blocks and ways to hold many things"
      emoji="🧩"
      unitColor="var(--accent-sky)"
      tabs={[
        {
          title: "Functions",
          icon: "🧩",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-3">Why functions?</h3>
              <p className="mb-3">
                A function is a named block of code you can reuse. Write once, call many times.
              </p>
              <pre className="code-block mb-4">
{`def greet(name):
    return f"Hello, {name}!"

print(greet("Aarav"))
print(greet("Priya"))`}
              </pre>
              <CodePlayground
                title="Try · Area of a circle"
                initialCode={`def area(radius):
    return 3.14 * radius * radius

print(area(5))
print(area(10))`}
                expectedOutput={`78.5\n314.0`}
              />
              <CodePlayground
                title="Challenge · Celsius → Fahrenheit"
                initialCode={`def c_to_f(c):
    return c * 9 / 5 + 32

print(c_to_f(0))
print(c_to_f(100))`}
                hint="0°C → 32°F, 100°C → 212°F. The formula is c * 9/5 + 32."
              />
              <InfoBox tone="blue" title="Why this matters for AI">
                AI pipelines are dozens of small functions: load data, clean data, train, predict.
                Writing clean functions = writing AI code that doesn't break.
              </InfoBox>
            </div>
          ),
        },
        {
          title: "Lists",
          icon: "📦",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-3">Lists — hold many values</h3>
              <pre className="code-block mb-4">
{`scores = [82, 91, 74, 65, 88]
print(scores[0])       # first
print(scores[-1])      # last
print(len(scores))     # how many
print(sum(scores))     # total
print(max(scores))     # highest`}
              </pre>
              <CodePlayground
                title="Try it"
                initialCode={`scores = [82, 91, 74, 65, 88]
print(scores[0])
print(len(scores))
print(sum(scores))
print(max(scores))`}
              />
              <h4 className="font-bold mt-5 mb-2">Looping through a list</h4>
              <CodePlayground
                title="Task · Average score"
                initialCode={`scores = [82, 91, 74, 65, 88]
total = 0
for s in scores:
    total = total + s
average = total / len(scores)
print(average)`}
                expectedOutput="80.0"
              />
            </div>
          ),
        },
        {
          title: "Mini-project",
          icon: "🏆",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-2">Mini-project · Student report</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Combine everything: list + function + if/else + loop.
              </p>
              <CodePlayground
                initialCode={`def grade(mark):
    if mark >= 90:
        return "A+"
    elif mark >= 75:
        return "A"
    elif mark >= 60:
        return "B"
    else:
        return "Keep trying"

marks = [92, 77, 58, 85, 40]
for m in marks:
    print(m, "→", grade(m))
print("Class average:", sum(marks) / len(marks))`}
              />
              <InfoBox tone="green" title="You just wrote real Python">
                This exact pattern — list of data, function applied to each, summary stats — is
                how nearly every data-science script starts.
              </InfoBox>
            </div>
          ),
        },
      ]}
      quiz={[
        {
          q: "How do you define a function called `square` that takes `x`?",
          options: [
            "function square(x):",
            "def square(x):",
            "square(x) =",
            "fn square(x):",
          ],
          correct: 1,
          explain: "Python uses `def` followed by the name and parameters.",
        },
        {
          q: "In `scores = [5, 10, 15]`, what is `scores[-1]`?",
          options: ["5", "10", "15", "Error"],
          correct: 2,
          explain: "Negative indexing counts from the end; -1 is the last element.",
        },
        {
          q: "Why use a function?",
          options: [
            "To make code longer",
            "To reuse code without copying it",
            "To confuse readers",
            "It's required by Python",
          ],
          correct: 1,
          explain: "Functions let you write code once and reuse it.",
        },
      ]}
    />
  );
}
