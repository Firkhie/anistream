"use client";

import useAnimeByPreset from "@/hooks/useAnimeByPreset";
import { SearchResponse } from "@/types";
import AnimeInfoCardList from "./anime/AnimeInfoCardList";

export default function TrendingLoader({ initialData }: { initialData: SearchResponse }) {
  const { data, loading } = useAnimeByPreset({ preset: "newest", page: 1, initialData });
  return <>{loading ? <>Loading...</> : <AnimeInfoCardList results={data.results} />}</>;
}
