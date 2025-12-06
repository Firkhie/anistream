"use client";

import AnimeInfoCardList from "./anime/AnimeInfoCardList";
import useAnimeBySeason from "@/hooks/useAnimeBySeason";

export default function TrendingLoader({
  season,
}: {
  season: "winter" | "spring" | "summer" | "fall";
}) {
  const { data, loading } = useAnimeBySeason({ season });
  return <>{loading ? <>Loading...</> : <AnimeInfoCardList results={data.results} />}</>;
}
