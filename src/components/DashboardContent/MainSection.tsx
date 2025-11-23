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
        <div className="flex items-center gap-1">
          {(["newest", "popular", "trending"] as Preset[]).map((item) => (
            <div
              key={item}
              className={cn(
                "uppercase py-1 px-4 bg-amber-500 rounded-sm text-sm",
                preset === item ? "bg-amber-100" : ""
              )}
              onClick={() => handlePreset(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex gap-1">
          <Button
            className="py-1 px-2 rounded-sm bg-amber-500 flex items-center"
            onClick={() => handlePrevious()}
            disabled={currentPage <= 1}
          >
            <ChevronLeft className="h-4.5 w-4.5" />
          </Button>
          <div className="py-1 px-2 rounded-sm bg-amber-500 flex items-center">{currentPage}</div>
          <Button
            className="py-1 px-2 rounded-sm bg-amber-500 flex items-center"
            onClick={() => handleNext()}
            disabled={!data.hasNextPage!}
          >
            <ChevronRight className="h-4.5 w-4.5" />
          </Button>
        </div>
      </div>
      {/* Content */}
      {loading ? (
        <AnimeCardSkeletonList count={5} className="grid-cols-5" />
      ) : (
        <MainAnimeList results={data.results} />
      )}
    </div>
  );
}
