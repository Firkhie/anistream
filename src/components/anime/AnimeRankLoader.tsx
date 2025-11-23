import { AnimeBasic, SearchResponse } from "@/types";
import getAnimeByPreset, { Preset } from "@/lib/getAnimeByPreset";
import AnimeRankList from "./AnimeRankList";

export default async function AnimeRankLoader({
  preset,
  animes,
  sectionType,
}: {
  preset?: Preset;
  animes?: AnimeBasic[];
  sectionType: "airing" | "upcoming" | "relations" | "recommendations";
}) {
  const data: SearchResponse = animes
    ? animes
    : preset
    ? await getAnimeByPreset({ preset, perPage: 10 })
    : { results: [] };

  if (data.results.length < 1) return <div>Anime not found.</div>;

  return <AnimeRankList sectionType={sectionType} results={data.results} />;
}
