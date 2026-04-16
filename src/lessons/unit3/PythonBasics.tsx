"use client";

import LessonShell from "@/components/LessonShell";
import CodePlayground from "@/components/CodePlayground";
import InfoBox from "@/components/InfoBox";

export default function PythonBasics() {
  return (
    <LessonShell
      lessonId="u3l1"
      unitNumber={3}
      lessonNumber={1}
      title="Variables & Types"
      subtitle="Store data in Python — numbers, text, true/false"
      emoji="🔤"
      unitColor="var(--accent-sky)"
      tabs={[
        {
          title: "Learn",
          icon: "📘",
          content: (
            <div>
              <h2 className="text-2xl font-bold mb-3">
                <span className="marker-highlight-sky">Variables</span> — boxes for data
              </h2>
              <p className="mb-3">
                A variable is a <strong>name</strong> that points to a <strong>value</strong>. You
                use <code className="px-1 bg-black/5 rounded">=</code> to assign.
              </p>
              <pre className="code-block mb-4">
{`age = 16
name = "Aarav"
is_student = True`}
              </pre>
              <p className="mb-3">Python figures out the type automatically:</p>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                <div className="card-soft p-3">
                  <div className="font-bold">int</div>
                  <div className="text-muted-foreground">Whole numbers · <code>age = 16</code></div>
                </div>
                <div className="card-soft p-3">
                  <div className="font-bold">float</div>
                  <div className="text-muted-foreground">Decimals · <code>pi = 3.14</code></div>
                </div>
                <div className="card-soft p-3">
                  <div className="font-bold">str</div>
                  <div className="text-muted-foreground">Text · <code>name = "Aarav"</code></div>
                </div>
                <div className="card-soft p-3">
                  <div className="font-bold">bool</div>
                  <div className="text-muted-foreground">True / False · <code>is_student = True</code></div>
                </div>
              </div>
              <InfoBox tone="blue" title="Rule">
                Variable names can contain letters, digits and <code>_</code>, but must start with
                a letter or <code>_</code>. No spaces. Use <code>snake_case</code> by convention.
              </InfoBox>
            </div>
          ),
        },
        {
          title: "Try it",
          icon: "⚡",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-2">Task 1 · Print your name</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Change <code>name</code> to your own and run.
              </p>
              <CodePlayground
                initialCode={`name = "Aarav"
age = 16
print("Hello,", name)
print("You are", age, "years old")`}
              />

              <h3 className="text-xl font-bold mt-6 mb-2">Task 2 · Simple maths</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Make <code>total</code> add up to <strong>30</strong>.
              </p>
              <CodePlayground
                initialCode={`a = 10
b = 15
total = a + b
print(total)`}
                expectedOutput="25"
                hint="25 is wrong on purpose — change a or b so the total becomes 30."
              />

              <h3 className="text-xl font-bold mt-6 mb-2">Task 3 · f-strings</h3>
              <p className="text-sm text-muted-foreground mb-2">
                f-strings let you mix variables inside text. The <code>f</code> before the quote
                matters.
              </p>
              <CodePlayground
                initialCode={`subject = "AI"
score = 92
print(f"I got {score}% in {subject}")`}
              />
            </div>
          ),
        },
        {
          title: "Operators",
          icon: "➕",
          content: (
            <div>
              <h3 className="text-xl font-bold mb-3">Maths in Python</h3>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[var(--color-muted)]">
                    <th className="p-2 text-left border-2">Symbol</th>
                    <th className="p-2 text-left border-2">Meaning</th>
                    <th className="p-2 text-left border-2">Example</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["+", "add", "3 + 2 → 5"],
                    ["-", "subtract", "10 - 4 → 6"],
                    ["*", "multiply", "6 * 7 → 42"],
                    ["/", "divide (float)", "9 / 2 → 4.5"],
                    ["//", "divide (int)", "9 // 2 → 4"],
                    ["%", "remainder", "9 % 2 → 1"],
                    ["**", "power", "2 ** 3 → 8"],
                  ].map((r) => (
                    <tr key={r[0]}>
                      <td className="p-2 border-2 font-mono font-bold">{r[0]}</td>
                      <td className="p-2 border-2">{r[1]}</td>
                      <td className="p-2 border-2 font-mono">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <CodePlayground
                title="Experiment with operators"
                initialCode={`x = 17
print("quotient:", x // 5)
print("remainder:", x % 5)
print("squared:", x ** 2)`}
              />
            </div>
          ),
        },
      ]}
      quiz={[
        {
          q: "Which line gives an error?",
          options: [
            "age = 16",
            "2age = 16",
            "age_2 = 16",
            "age = 16.5",
          ],
          correct: 1,
          explain: "Variable names cannot start with a digit.",
        },
        {
          q: "What is 9 // 2 in Python?",
          options: ["4.5", "4", "5", "0.5"],
          correct: 1,
          explain: "// is integer division — it drops the fractional part.",
        },
        {
          q: "What type is `True`?",
          options: ["str", "int", "bool", "float"],
          correct: 2,
          explain: "True and False are bool values.",
        },
        {
          q: "How do you print a formatted string with a variable `name`?",
          options: [
            "print(\"Hi {name}\")",
            "print(f\"Hi {name}\")",
            "print(\"Hi $name\")",
            "print(\"Hi \" + name + \"!\")  # no, f-strings are cleaner",
          ],
          correct: 1,
          explain: "The `f` prefix turns it into an f-string; {name} is replaced with the value.",
        },
      ]}
    />
  );
}
