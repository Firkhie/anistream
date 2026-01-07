"use client";

import AnimeInfoCardList from "./anime/AnimeInfoCardList";
import useAnimeBySeason from "@/hooks/useAnimeBySeason";
import AnimeInfoCardSkeleton from "./anime/AnimeInfoCardSkeleton";

export default function TrendingLoader({
  season,
}: {
  season: "winter" | "spring" | "summer" | "fall";
}) {
  const { data, loading } = useAnimeBySeason({ season });
  return (
    <>
      {loading ? <AnimeInfoCardSkeleton count={4} /> : <AnimeInfoCardList results={data.results} />}
    </>
  );
}
