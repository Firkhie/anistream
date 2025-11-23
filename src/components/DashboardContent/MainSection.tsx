"use client";

import { SearchResponse } from "@/types";
import { useEffect, useState } from "react";
import getAnimeByPreset, { Preset } from "@/lib/getAnimeByPreset";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MainAnimeList from "./MainAnimeList";
import AnimeCardSkeletonList from "../anime/AnimeCardSkeleton";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

export default function MainSection({ initialData }: { initialData: SearchResponse }) {
  const [data, setData] = useState(initialData);
  const [preset, setPreset] = useState<Preset>("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // UseEffects
  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const data: SearchResponse = await getAnimeByPreset({ preset, page: currentPage });
      setData(data);

      setLoading(false);
    }
    fetchData();
  }, [preset, currentPage]);

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
        <div className="flex items-center gap-4 bg-amber-500 py-1 px-4 rounded-sm">
          {(["newest", "popular", "trending"] as Preset[]).map((item) => (
            <div
              key={item}
              className={cn("uppercase rounded-sm text-sm", preset === item ? "text-white" : "")}
              onClick={() => handlePreset(item)}
            >
              {item}
            </div>
          ))}
        </div>
        {/* Paging */}
        <div className="flex items-center gap-4 bg-amber-500  rounded-sm">
          <Button onClick={() => handlePrevious()} disabled={currentPage <= 1} variant={"ghost"}>
            <ChevronLeft />
          </Button>
          <div>{currentPage}</div>
          <Button onClick={() => handleNext()} disabled={!data.hasNextPage!} variant={"ghost"}>
            <ChevronRight />
          </Button>
        </div>
      </div>
      {/* Content */}
      {loading ? <AnimeCardSkeletonList count={5} /> : <MainAnimeList results={data.results} />}
    </div>
  );
}
