export const dynamic = "force-dynamic";

import AnimeScheduleSkeleton from "@/components/anime/AnimeScheduleSkeleton";
import ScheduleHeader from "@/components/ScheduleHeader";
import ScheduleLoader from "@/components/ScheduleLoader";
import { Suspense } from "react";

export default function SchedulePage() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <ScheduleHeader />
      <Suspense fallback={<AnimeScheduleSkeleton count={3} />}>
        <ScheduleLoader />
      </Suspense>
    </div>
  );
}
