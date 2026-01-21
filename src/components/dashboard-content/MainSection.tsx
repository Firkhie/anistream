"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimeCardSkeleton from "../anime/AnimeCardSkeleton";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import useAnimeByPreset from "@/hooks/useAnimeByPreset";
import { Preset } from "@/lib/getAnimeByPreset";
import AnimeCardList from "../anime/AnimeCardList";

export default function MainSection() {
  const [preset, setPreset] = useState<Preset>("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading } = useAnimeByPreset({ preset, page: currentPage });

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
        <div className="flex w-fit items-center divide-x rounded-sm border">
          {(["newest", "popular", "trending"] as Preset[]).map((item) => (
            <button
              key={item}
              className={cn(
                "hover:text-primary cursor-pointer px-4 py-2 text-sm uppercase transition",
                preset === item ? "text-primary" : "",
              )}
              onClick={() => handlePreset(item)}
            >
              {item}
            </button>
          ))}
        </div>
        {/* Paging Desktop */}
        <div className="hidden w-fit items-center gap-1 rounded-sm border sm:flex">
          <Button onClick={() => handlePrevious()} disabled={currentPage <= 1} variant={"none"}>
            <ChevronLeft />
          </Button>
          <div className="border-x px-4 text-sm">{currentPage}</div>
          <Button onClick={() => handleNext()} disabled={!data.hasNextPage} variant={"none"}>
            <ChevronRight />
          </Button>
        </div>
      </div>
      {/* Content */}
      {loading ? <AnimeCardSkeleton count={5} /> : <AnimeCardList results={data.results} />}
      {/* Paging Mobile */}
      <div className="mt-2 flex w-full justify-center">
        <div className="flex w-fit items-center gap-1 rounded-sm border sm:hidden">
          <Button onClick={() => handlePrevious()} disabled={currentPage <= 1} variant={"none"}>
            <ChevronLeft />
          </Button>
          <div className="border-x px-4 text-sm">{currentPage}</div>
          <Button onClick={() => handleNext()} disabled={!data.hasNextPage} variant={"none"}>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
