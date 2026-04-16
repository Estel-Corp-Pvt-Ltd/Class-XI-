import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Sparks — Interactive AI Learning for Class 11",
  description:
    "Learn AI, Python, Data Science and Machine Learning with interactive visual lessons, built for Class 11 students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Nunito:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
