"use client";

import { HistoryEpisode } from "@/types";
import { Play, Search, TvMinimalPlay, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Select from "react-select";

type SortOrderOption = {
  value: "asc" | "desc";
  label: string;
};

const sortOrderOptions: SortOrderOption[] = [
  { value: "desc", label: "Recently Watched" },
  { value: "asc", label: "Oldest Watched" },
];

export default function HistoryPage() {
  const [rawData, setRawData] = useState<HistoryEpisode[]>([]);
  const [episodes, setEpisodes] = useState<HistoryEpisode[]>([]);
  const [selectedSort, setSelectedSort] = useState<SortOrderOption>(sortOrderOptions[0]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const existHistory: HistoryEpisode[] = JSON.parse(
      localStorage.getItem("history_watch") || "[]",
    );
    setRawData(existHistory);
  }, []);

  useEffect(() => {
    const sorted = selectedSort.value === "desc" ? [...rawData] : [...rawData].reverse();
    setEpisodes(sorted);
  }, [selectedSort, rawData]);

  useEffect(() => {
    if (!rawData) return;

    const filtered = rawData.filter((eps) => {
      const titleMatch = eps.animeTitle?.toLowerCase().includes(query.toLowerCase());
      const numberMatch = String(eps.episode).includes(query);
      return titleMatch || numberMatch;
    });

    setEpisodes(filtered);
  }, [query, rawData]);

  const handleDeleteHistory = (eps: HistoryEpisode) => {
    setRawData((prev) => {
      const filtered = prev.filter((item) => item.id !== eps.id);
      localStorage.setItem("history_watch", JSON.stringify(filtered));
      return filtered;
    });
  };

  return (
    <div className="flex h-full flex-col gap-4">
      {/* Header */}
      <div className="z-30 flex flex-col-reverse gap-3 md:flex-row md:items-center md:gap-4">
        <TvMinimalPlay className="hidden h-6 w-6 shrink-0 md:block" />
        <Select
          placeholder="Select language"
          options={sortOrderOptions}
          value={selectedSort}
          onChange={(option) => option && setSelectedSort(option)}
          className="my-react-select-container w-fit"
          classNamePrefix="my-react-select"
        />
        <div className="flex flex-1 items-center justify-between gap-2 rounded-sm border px-4 py-2">
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
      </div>
      {/* Content */}
      {episodes.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-y-2">
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/assets/miyabi.mp4"
            className="w-full max-w-72 rounded-md"
          />
          <div className="text-center text-sm">
            <span className="font-semibold">No no no... what is this empty list?</span>
            <p className="font-light text-[hsl(var(--muted-foreground))]">
              Go watch something before I get *seriously* disappointed.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(254px,1fr))] gap-2 md:gap-4">
          {episodes.map((eps) => (
            <div key={eps.id} className="relative flex flex-col gap-2">
              {/* Image */}
              <Link
                href={`/watch/${eps.animeId}?epsId=${eps.id}`}
                className="group relative aspect-video"
              >
                <Image
                  src={eps.image ?? "/assets/not-found.png"}
                  alt={eps.title ?? ""}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-sm object-cover object-center transition-all duration-100 group-hover:blur-xs"
                />
                {/* Play icon */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-100 group-hover:opacity-100">
                  <Play className="h-10 w-10 text-white" />
                </div>
              </Link>
              {/* Delete */}
              <div
                className="bg-secondary/75 hover:bg-secondary absolute top-1.5 right-1.5 z-20 cursor-pointer rounded-sm p-1"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteHistory(eps);
                }}
              >
                <X className="h-4 w-4 text-white" />
              </div>
              {/* Title */}
              <div className="flex flex-col gap-0.5">
                <span className="line-clamp-1 text-sm font-bold uppercase">{eps.animeTitle}</span>
                <p className="text-muted-foreground text-xs">Episode {eps.episode}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
