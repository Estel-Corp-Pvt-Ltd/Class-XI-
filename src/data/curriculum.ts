export type Lesson = {
  id: string;
  slug: string;
  title: string;
  emoji: string;
  blurb: string;
};

export type Unit = {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  color: string;
  emoji: string;
  lessons: Lesson[];
};

export const CURRICULUM: Unit[] = [
  {
    id: "unit1",
    number: 1,
    title: "AI for Everyone",
    subtitle: "What AI actually is — and isn't",
    color: "var(--accent-coral)",
    emoji: "🤖",
    lessons: [
      {
        id: "u1l1",
        slug: "what-is-ai",
        title: "What is AI?",
        emoji: "🧠",
        blurb: "Meet the machine that learns.",
      },
      {
        id: "u1l2",
        slug: "ai-ml-dl",
        title: "AI vs ML vs Deep Learning",
        emoji: "🎯",
        blurb: "Three words, one family.",
      },
      {
        id: "u1l3",
        slug: "ai-in-life",
        title: "AI Around You",
        emoji: "📱",
        blurb: "Spot AI in your daily life.",
      },
    ],
  },
  {
    id: "unit2",
    number: 2,
    title: "Unlocking Your Future in AI",
    subtitle: "Careers, skills and the road ahead",
    color: "var(--accent-lavender)",
    emoji: "🚀",
    lessons: [
      {
        id: "u2l1",
        slug: "ai-careers",
        title: "AI Career Map",
        emoji: "🗺️",
        blurb: "Explore 8 real AI jobs.",
      },
      {
        id: "u2l2",
        slug: "skills-to-build",
        title: "Skills You Need",
        emoji: "🛠️",
        blurb: "Build your AI toolkit.",
      },
    ],
  },
  {
    id: "unit3",
    number: 3,
    title: "Python Programming",
    subtitle: "The language of AI — hands on",
    color: "var(--accent-sky)",
    emoji: "🐍",
    lessons: [
      {
        id: "u3l1",
        slug: "python-basics",
        title: "Variables & Types",
        emoji: "🔤",
        blurb: "Store data in Python.",
      },
      {
        id: "u3l2",
        slug: "python-control",
        title: "If, Else & Loops",
        emoji: "🔁",
        blurb: "Make decisions in code.",
      },
      {
        id: "u3l3",
        slug: "python-functions",
        title: "Functions & Lists",
        emoji: "🧩",
        blurb: "Reusable building blocks.",
      },
      {
        id: "u3l4",
        slug: "python-playground",
        title: "Live Python Playground",
        emoji: "⚡",
        blurb: "Write + run real Python in-browser.",
      },
    ],
  },
  {
    id: "unit4",
    number: 4,
    title: "Introduction to Capstone",
    subtitle: "Build your first AI project",
    color: "var(--accent-yellow)",
    emoji: "🏗️",
    lessons: [
      {
        id: "u4l1",
        slug: "project-lifecycle",
        title: "The AI Project Lifecycle",
        emoji: "♻️",
        blurb: "From problem to prototype.",
      },
      {
        id: "u4l2",
        slug: "pick-a-project",
        title: "Choose Your Capstone",
        emoji: "🎯",
        blurb: "Ideas that fit Class 11 scope.",
      },
    ],
  },
  {
    id: "unit5",
    number: 5,
    title: "Data Literacy",
    subtitle: "Collect, clean, analyse data",
    color: "var(--accent-mint)",
    emoji: "📊",
    lessons: [
      {
        id: "u5l1",
        slug: "data-types",
        title: "Types of Data",
        emoji: "🔢",
        blurb: "Numbers, text, pictures.",
      },
      {
        id: "u5l2",
        slug: "data-cleaning",
        title: "Cleaning Messy Data",
        emoji: "🧹",
        blurb: "Fix missing values live.",
      },
      {
        id: "u5l3",
        slug: "data-viz",
        title: "Visualising Data",
        emoji: "📈",
        blurb: "Bar charts, scatter, line.",
      },
    ],
  },
  {
    id: "unit6",
    number: 6,
    title: "Machine Learning Algorithms",
    subtitle: "How machines actually learn",
    color: "var(--accent-rose)",
    emoji: "🧮",
    lessons: [
      {
        id: "u6l1",
        slug: "supervised-vs-unsupervised",
        title: "Supervised vs Unsupervised",
        emoji: "🎓",
        blurb: "Two ways to teach a machine.",
      },
      {
        id: "u6l2",
        slug: "knn",
        title: "K-Nearest Neighbours",
        emoji: "👥",
        blurb: "Classify by closest friends.",
      },
      {
        id: "u6l3",
        slug: "kmeans",
        title: "K-Means Clustering",
        emoji: "🌀",
        blurb: "Group without labels.",
      },
      {
        id: "u6l4",
        slug: "linear-regression",
        title: "Linear Regression",
        emoji: "📐",
        blurb: "Fit a line to predict.",
      },
    ],
  },
  {
    id: "unit7",
    number: 7,
    title: "Linguistics & CS",
    subtitle: "How AI understands language",
    color: "var(--accent-sky)",
    emoji: "💬",
    lessons: [
      {
        id: "u7l1",
        slug: "nlp-basics",
        title: "NLP Basics",
        emoji: "🗣️",
        blurb: "Tokens, sentences, meaning.",
      },
      {
        id: "u7l2",
        slug: "sentiment",
        title: "Sentiment Analysis",
        emoji: "😊",
        blurb: "Positive, negative, neutral.",
      },
    ],
  },
  {
    id: "unit8",
    number: 8,
    title: "AI Ethics & Values",
    subtitle: "Build AI responsibly",
    color: "var(--accent-lavender)",
    emoji: "⚖️",
    lessons: [
      {
        id: "u8l1",
        slug: "bias-in-ai",
        title: "Bias in AI",
        emoji: "🪞",
        blurb: "When algorithms go wrong.",
      },
      {
        id: "u8l2",
        slug: "responsible-ai",
        title: "Responsible AI Pledge",
        emoji: "🤝",
        blurb: "Your ethics checklist.",
      },
    ],
  },
];

export function findLesson(unitNumber: number, slug: string) {
  const unit = CURRICULUM.find((u) => u.number === unitNumber);
  if (!unit) return null;
  const lesson = unit.lessons.find((l) => l.slug === slug);
  if (!lesson) return null;
  return { unit, lesson };
}

export function getAllLessonIds(): string[] {
  return CURRICULUM.flatMap((u) => u.lessons.map((l) => l.id));
}

export function getNextLesson(lessonId: string) {
  const ids = getAllLessonIds();
  const idx = ids.indexOf(lessonId);
  if (idx < 0 || idx === ids.length - 1) return null;
  const nextId = ids[idx + 1];
  for (const unit of CURRICULUM) {
    const lesson = unit.lessons.find((l) => l.id === nextId);
    if (lesson) return { unit, lesson };
  }
  return null;
}

export function getPrevLesson(lessonId: string) {
  const ids = getAllLessonIds();
  const idx = ids.indexOf(lessonId);
  if (idx <= 0) return null;
  const prevId = ids[idx - 1];
  for (const unit of CURRICULUM) {
    const lesson = unit.lessons.find((l) => l.id === prevId);
    if (lesson) return { unit, lesson };
  }
  return null;
}
