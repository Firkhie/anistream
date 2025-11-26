import { Suspense } from "react";
import AnimeRankLoader from "../anime/AnimeRankLoader";

export default async function SubSection() {
  return (
    <div className="lg:w-96 shrink-0 flex flex-col gap-4">
      <Suspense fallback={<>Loading...</>}>
        <AnimeRankLoader sectionType="airing" preset="trending" />
      </Suspense>

      <Suspense fallback={<>Loading...</>}>
        <AnimeRankLoader sectionType="upcoming" preset="upcoming" />
      </Suspense>
    </div>
  );
}
