import { Suspense } from "react";
import AnimeRankLoader from "../anime/AnimeRankLoader";
import AnimeRankSkeleton from "../anime/AnimeRankSkeleton";

export default async function SubSection() {
  return (
    <div className="flex shrink-0 flex-col gap-4 lg:w-96">
      <Suspense fallback={<AnimeRankSkeleton count={3} sectionType="airing" />}>
        <AnimeRankLoader sectionType="airing" preset="trending" />
      </Suspense>

      <Suspense fallback={<AnimeRankSkeleton count={3} sectionType="upcoming" />}>
        <AnimeRankLoader sectionType="upcoming" preset="upcoming" />
      </Suspense>
    </div>
  );
}
