import WatchSection from "../detail-content/WatchSection";
import AnimeRankLoader from "../anime/AnimeRankLoader";
import InfoSection from "./InfoSection";
import CommentSection from "./CommentSection";
import { Suspense } from "react";
import AnimeRankSkeleton from "../anime/AnimeRankSkeleton";
import VideoPlayerSection from "./VideoPlayerSection";
import getAnimeServersByEpsId from "@/lib/getAnimeServersByEpsId";
import getAnimeStreamByEpsId from "@/lib/getAnimeStreamByEpsId";

export type DetailPreset = "overview" | "watch" | "characters";

export default async function WatchContent({ slug, epsId }: { slug: string; epsId: string }) {
  const servers = await getAnimeServersByEpsId({ epsId });

  if (!servers || servers.length === 0) {
    return <div>No servers available</div>;
  }

  const firstServer = servers[0];

  const streamData = await getAnimeStreamByEpsId({
    epsId,
    server: firstServer.serverName.toLowerCase(),
    type: firstServer.type,
  });

  return (
    <div className="flex flex-col gap-5">
      <VideoPlayerSection streamData={streamData} />
      <WatchSection className="max-h-52" currentEps={epsId} />

      <div className="flex w-full items-start gap-4">
        {/* Left */}
        <div className="flex flex-1 flex-col gap-3">
          <Suspense fallback={<>Loading...</>}>
            <InfoSection animeId={slug} />
          </Suspense>
          <CommentSection />
        </div>

        {/* Right */}
        <div className="flex shrink-0 flex-col gap-4 lg:w-96">
          <Suspense fallback={<AnimeRankSkeleton count={3} sectionType="relations" />}>
            <AnimeRankLoader sectionType="relations" animeId={slug} />
          </Suspense>
          <Suspense fallback={<AnimeRankSkeleton count={3} sectionType="recommendations" />}>
            <AnimeRankLoader sectionType="recommendations" animeId={slug} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
