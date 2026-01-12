"use client";

import useAnimeEpisodesById from "@/hooks/useAnimeEpisodesById";
import { Grid3X3, List, Search, TableProperties } from "lucide-react";
import { useParams } from "next/navigation";
import { Button } from "../ui/Button";
import { useEffect, useState } from "react";
import { AnimeEpisode } from "@/types";
import {
  AnimeEpisodeCardV1,
  AnimeEpisodeCardV2,
  AnimeEpisodeCardV3,
} from "../anime/AnimeEpisodeCard";
import { cn } from "@/lib/utils";

export type WatchView = "detail" | "grid" | "list";

const layoutClass: Record<WatchView, string> = {
  detail: "grid-cols-3",
  list: "grid-cols-4",
  grid: "grid-cols-10",
};

export default function WatchContent() {
  const { slug } = useParams();
  const { data, loading } = useAnimeEpisodesById({ id: slug as string });

  const [query, setQuery] = useState("");
  const [episodes, setEpisodes] = useState<AnimeEpisode[]>([]);
  const [view, setView] = useState<WatchView>("detail");

  useEffect(() => {
    if (!data) return;

    const filtered = data.filter((eps) => {
      const titleMatch = eps.title?.toLowerCase().includes(query.toLowerCase());
      const numberMatch = String(eps.episode).includes(query);
      return titleMatch || numberMatch;
    });

    setEpisodes(filtered);
  }, [query, data]);

  const views: WatchView[] = ["detail", "grid", "list"];
  const handleToggleView = () => {
    setView((prev) => views[(views.indexOf(prev) + 1) % views.length]);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Header */}
      <div className="flex gap-2">
        <div className="flex w-full items-center justify-between gap-2 rounded-sm border px-4 py-2">
          <Search className="h-4 w-4 shrink-0" />
          <input
            name="query"
            className="flex-1 bg-transparent text-sm outline-none focus:ring-0"
            placeholder="Search episodes by title or number..."
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Button variant="secondary" size="icon" onClick={handleToggleView}>
          {view === "detail" ? <TableProperties /> : view === "grid" ? <Grid3X3 /> : <List />}
        </Button>
      </div>

      {/* Episodes */}
      {loading ? (
        <div>
          <span className="text-sm">Loading</span>
        </div>
      ) : episodes.length ? (
        <div className={cn("grid max-h-[752px] gap-2 overflow-y-auto text-sm", layoutClass[view])}>
          {episodes.map((eps) =>
            view === "detail" ? (
              <AnimeEpisodeCardV1 key={eps.episode} eps={eps} />
            ) : view === "grid" ? (
              <AnimeEpisodeCardV2 key={eps.episode} eps={eps} />
            ) : (
              <AnimeEpisodeCardV3 key={eps.episode} eps={eps} />
            ),
          )}
        </div>
      ) : (
        <div className="text-sm">Episodes not found.</div>
      )}
    </div>
  );
}
