"use client";

import { SearchResponse } from "@/types";
import AnimeRankCard from "./AnimeRankCard";
import { AlarmClock, ChevronDown, ChevronUp, GitBranch, Star, Tv } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

export default function AnimeRankList({
  sectionType,
  results,
}: {
  sectionType: "airing" | "upcoming" | "relations" | "recommendations";
  results: SearchResponse["results"];
}) {
  const [showMore, setShowMore] = useState(false);
  const [count, setCount] = useState(5);

  const handleShowMore = () => {
    setShowMore((prev) => {
      setCount(prev ? 5 : results.length);
      return !prev;
    });
  };

  const titles = {
    airing: { name: "Top Airing", icon: Tv },
    upcoming: { name: "Upcoming", icon: AlarmClock },
    relations: { name: "Relations", icon: GitBranch },
    recommendations: { name: "Recommendations", icon: Star },
  };
  const { name, icon: Icon } = titles[sectionType];
  const IconButton = showMore ? ChevronUp : ChevronDown;
  return (
    <div className="bg-secondary/50 flex h-fit flex-col gap-3 rounded-sm p-3">
      {/* Title */}
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5" />
        <span className="text-lg font-semibold uppercase">{name}</span>
      </div>
      {/* Content */}
      <div className={cn("flex flex-col gap-1", showMore ? "h-[598px] overflow-y-auto" : "h-fit")}>
        {results.slice(0, count).map((anime) => (
          <AnimeRankCard key={anime.id} {...anime} />
        ))}
      </div>
      {/* Button */}
      {results.length > 5 && (
        <Button onClick={() => handleShowMore()}>
          <IconButton className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
