import TopBar from "@/components/TopBar";

export default function LessonsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <TopBar />
      <main>{children}</main>
    </div>
  );
}
