"use client";

import useAnimeEpisodesById from "@/hooks/useAnimeEpisodesById";
import { Search, TableProperties } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "../ui/Button";
import { useEffect, useState } from "react";
import { AnimeEpisode } from "@/types";

export default function WatchContent() {
  const { slug } = useParams();
  const { data, loading } = useAnimeEpisodesById({ id: slug as string });

  const [query, setQuery] = useState("");
  const [episodes, setEpisodes] = useState<AnimeEpisode[]>([]);

  useEffect(() => {
    if (data) {
      const filtered = data.filter((eps) => {
        const titleMatch = eps.title?.toLowerCase().includes(query.toLowerCase());
        const numberMatch = String(eps.episode).includes(query);
        return titleMatch || numberMatch;
      });
      setEpisodes(filtered);
    }
  }, [query, data]);

  if (loading) return <div>Loading...</div>;

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
        <Button variant="secondary" size="icon" onClick={() => {}}>
          <TableProperties />
        </Button>
      </div>

      {/* Episodes */}
      <div className="grid h-fit max-h-[752px] grid-cols-3 gap-2 overflow-y-auto text-sm">
        {loading ? (
          <div className="col-span-3 flex items-center justify-center py-10">
            <span className="text-muted-foreground text-sm">Loading episodes...</span>
          </div>
        ) : episodes.length ? (
          episodes.map((eps) => (
            <Link
              href="/"
              key={eps.episode}
              className="bg-secondary/50 flex h-[100px] rounded-sm hover:opacity-50"
            >
              <div className="relative w-[148px] shrink-0">
                <Image
                  src={eps.image ?? "/assets/not-found.png"}
                  alt={eps.title ?? "Untitled"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-l-sm object-cover object-center"
                  unoptimized
                />
                <div className="bg-primary/80 absolute bottom-1 left-1 rounded-sm px-2 py-1 text-xs">
                  EP {eps.episode || "N/A"}
                </div>
              </div>

              <div className="relative flex w-full flex-col gap-y-2 p-2">
                <h3 className="line-clamp-1 text-sm font-light">{eps.title || "Untitled"}</h3>
                <p className="line-clamp-3 text-xs font-extralight text-[hsl(var(--muted-foreground))]">
                  {eps.description || "No description found."}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-muted-foreground col-span-3 text-center text-sm">
            Episodes not found.
          </div>
        )}
      </div>
    </div>
  );
}
