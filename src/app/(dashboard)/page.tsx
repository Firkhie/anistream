import DashboardContent from "@/components/dashboard-content";
import Genres from "@/components/Genres";
import Hero from "@/components/Hero";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={<>Loading...</>}>
        <Hero />
      </Suspense>
      <Genres />
      <DashboardContent />
    </div>
  );
}
