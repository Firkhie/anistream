"use client";

import { MEDIA_SEASONS } from "@/constants/media";
import { currentYear } from "@/constants/years";
import { cn } from "@/lib/utils";
import { Fragment, useState } from "react";

export default function TrendingFilter({
  season,
  onChangeSeason,
}: {
  season: "winter" | "spring" | "summer" | "fall";
  onChangeSeason: (value: any) => void;
}) {
  const handleSeason = (season: string) => {
    onChangeSeason(season);
  };

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <h1 className="text-primary text-4xl font-extralight lg:text-5xl">{currentYear}</h1>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {MEDIA_SEASONS.map((item, index) => (
          <Fragment key={item.label}>
            <div
              className={cn(
                "rounded-sm px-7 py-1 text-xl font-semibold lg:py-2 lg:text-2xl",
                season === item.label ? "bg-primary" : "",
              )}
              onClick={() => handleSeason(item.label)}
            >
              {item.label}
            </div>
            {index !== MEDIA_SEASONS.length - 1 && <div className="text-xl lg:text-2xl">/</div>}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
