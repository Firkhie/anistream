"use client";

import { MEDIA_SEASONS } from "@/constants/media";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function TrendingFilter() {
  const [selectedSeason, setSelectedSeason] = useState("Winter");
  const handleSeason = (season: string) => {
    setSelectedSeason(season);
  };

  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <h1 className="text-5xl font-extralight text-primary">2025</h1>
      <div className="flex gap-8 items-center">
        {MEDIA_SEASONS.map((season, index) => (
          <>
            <div
              className={cn(
                "text-2xl font-semibold px-5 py-2 rounded-sm",
                selectedSeason === season.label ? "bg-primary" : ""
              )}
              onClick={() => handleSeason(season.label)}
            >
              {season.label}
            </div>
            {index !== MEDIA_SEASONS.length - 1 && <div className="text-2xl">/</div>}
          </>
        ))}
      </div>
    </div>
  );
}
