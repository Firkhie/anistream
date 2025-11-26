"use client";

import { SearchResponse } from "@/types";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimeCardSkeletonList from "../anime/AnimeCardSkeleton";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import useAnimeByPreset from "@/hooks/useAnimeByPreset";
import { Preset } from "@/lib/getAnimeByPreset";
import AnimeCardList from "../anime/AnimeCardList";

export default function MainSection({ initialData }: { initialData: SearchResponse }) {
  const [preset, setPreset] = useState<Preset>("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading } = useAnimeByPreset({ preset, page: currentPage, initialData });

  // Handlers
  const handlePreset = (preset: Preset) => {
    setPreset(preset);
    setCurrentPage(1);
  };

  const handleNext = () => {
    setCurrentPage((page) => page + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((page) => page - 1);
  };

  return (
    <div className="flex flex-1 flex-col gap-4">
      {/* Buttons */}
      <div className="flex justify-between">
        {/* Filter */}
        <div className="flex items-center gap-6 border py-1 px-4 rounded-sm">
          {(["newest", "popular", "trending"] as Preset[]).map((item) => (
            <div
              key={item}
              className={cn(
                "uppercase rounded-sm text-sm hover:text-primary",
                preset === item ? "text-primary" : ""
              )}
              onClick={() => handlePreset(item)}
            >
              {item}
            </div>
          ))}
        </div>
        {/* Paging */}
        <div className="flex items-center gap-4 border rounded-sm">
          <Button onClick={() => handlePrevious()} disabled={currentPage <= 1} variant={"none"}>
            <ChevronLeft />
          </Button>
          <div className="text-sm">{currentPage}</div>
          <Button onClick={() => handleNext()} disabled={!data.hasNextPage} variant={"none"}>
            <ChevronRight />
          </Button>
        </div>
      </div>
      {/* Content */}
      {loading ? <AnimeCardSkeletonList count={5} /> : <AnimeCardList results={data.results} />}
    </div>
  );
}
