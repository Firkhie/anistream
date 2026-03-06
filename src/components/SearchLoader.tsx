"use client";

import useAnimeByParams from "@/hooks/useAnimeByParams";
import { useSearchParams } from "next/navigation";
import AnimeCardSkeleton from "./anime/AnimeCardSkeleton";
import AnimeCardList from "./anime/AnimeCardList";

export default function SearchLoader() {
  const searchParams = useSearchParams();
  const filters = Object.fromEntries(searchParams.entries());

  const query = searchParams.get("query");
  const { data, loading } = useAnimeByParams({ filters });

  return (
    <>
      {loading ? (
        <AnimeCardSkeleton count={7} />
      ) : (
        <div className="flex h-full flex-col gap-4">
          {query && (
            <p className="text-muted-foreground text-sm font-semibold">
              Search result: <span className="text-foreground">{query}</span>
            </p>
          )}
          {data.results.length > 0 ? (
            <AnimeCardList results={data.results} />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-y-2">
              <video
                autoPlay
                loop
                muted
                playsInline
                src="/assets/bocchi.mp4"
                className="w-full max-w-72 rounded-md"
              />
              <div className="text-center text-sm">
                <span className="font-semibold">U-uh… no results found…</span>
                <p className="font-light text-[hsl(var(--muted-foreground))]">
                  Bocchi&apos;s panicking!! Maybe try a different keyword?
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
