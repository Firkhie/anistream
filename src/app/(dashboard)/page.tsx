export const dynamic = "force-dynamic";

import DashboardContent from "@/components/dashboard-content";
import Genres from "@/components/Genres";
import Hero from "@/components/Hero";
import HeroSkeleton from "@/components/HeroSkeleton";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <Genres />
      <DashboardContent />
    </div>
  );
}
