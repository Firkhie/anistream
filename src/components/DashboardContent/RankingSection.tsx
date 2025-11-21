import animeDummy from "@/data/anime-dummy.json";
import { AnimeBasic } from "@/types";
import AnimeRankContainer from "../ui/AnimeRankContainer";

export default function RankingSection() {
  const airingData: AnimeBasic[] = animeDummy as AnimeBasic[];
  const upcomingData: AnimeBasic[] = animeDummy as AnimeBasic[];

  return (
    <div className="w-96 shrink-0">
      <AnimeRankContainer animes={airingData} sectionType="airing" />
      <AnimeRankContainer animes={upcomingData} sectionType="upcoming" />
    </div>
  );
}
