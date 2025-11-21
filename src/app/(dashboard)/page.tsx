import DashboardContent from "@/components/DashboardContent";
import Genres from "@/components/Genres";
import Hero from "@/components/Hero";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <Genres />
      <DashboardContent />
    </div>
  );
}
