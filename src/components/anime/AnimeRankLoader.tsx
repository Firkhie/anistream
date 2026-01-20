import { AnimeBasic, AnimeDetail, SearchResponse } from "@/types";
import getAnimeByPreset, { Preset } from "@/lib/getAnimeByPreset";
import AnimeRankList from "./AnimeRankList";
import getAnimeDetailById from "@/lib/getAnimeDetailById";

export default async function AnimeRankLoader({
  preset,
  animeId,
  sectionType,
}: {
  preset?: Preset;
  animeId?: string;
  sectionType: "airing" | "upcoming" | "relations" | "recommendations";
}) {
  let results: AnimeBasic[] = [];

  if ((sectionType === "airing" || sectionType === "upcoming") && preset) {
    const data: SearchResponse = await getAnimeByPreset({ preset, perPage: 10 });
    results = data.results ?? [];
  } else if (sectionType === "relations" && animeId) {
    const data: AnimeDetail = await getAnimeDetailById({ id: animeId });
    results = data.relations ?? [];
  } else if (sectionType === "recommendations" && animeId) {
    const data: AnimeDetail = await getAnimeDetailById({ id: animeId });
    results = data.recommendations ?? [];
  }

  if (results.length < 1) return <div>Anime not found.</div>;

  return <AnimeRankList sectionType={sectionType} results={results} />;
}
