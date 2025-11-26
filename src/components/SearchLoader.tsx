"use client";

import useAnimeByParams from "@/hooks/useAnimeByParams";
import { useSearchParams } from "next/navigation";
import AnimeCardSkeletonList from "./anime/AnimeCardSkeleton";
import AnimeCardList from "./anime/AnimeCardList";

export default function SearchLoader() {
  const searchParams = useSearchParams();
  const filters = Object.fromEntries(searchParams.entries());

  const query = searchParams.get("query");
  const { data, loading } = useAnimeByParams({ filters });

  return (
    <>
      {loading ? (
        <AnimeCardSkeletonList count={7} />
      ) : (
        <div className="flex flex-col gap-4">
          {query && (
            <p className="text-sm text-muted-foreground font-semibold">
              Search result: <span className="text-foreground">{query}</span>
            </p>
          )}
          <AnimeCardList results={data.results} />
        </div>
      )}
    </>
  );
}
