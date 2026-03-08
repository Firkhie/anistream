"use client";

import { MEDIA_SEASONS } from "@/constants/media";
import { currentYear } from "@/constants/years";
import { cn } from "@/lib/utils";
import { Fragment } from "react";

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
      <h1 className="text-primary text-3xl font-extralight sm:text-4xl lg:text-5xl">
        {currentYear}
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:gap-x-4">
        {MEDIA_SEASONS.map((item, index) => (
          <Fragment key={item.label}>
            <div
              className={cn(
                "cursor-pointer rounded-full px-4 py-1 text-sm font-medium transition-all duration-100 ease-in-out sm:px-6 sm:py-1.5 sm:text-base md:text-lg",
                season === item.value.toLowerCase()
                  ? "bg-primary"
                  : "bg-secondary/50 text-secondary-foreground hover:bg-primary",
              )}
              onClick={() => handleSeason(item.value.toLowerCase())}
            >
              {item.label}
            </div>
            {index !== MEDIA_SEASONS.length - 1 && (
              <span className="mx-1 text-base text-white sm:mx-2 sm:text-lg">•</span>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
