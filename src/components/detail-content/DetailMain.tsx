"use client";

import { AnimeDetail } from "@/types";
import { DetailPreset } from ".";
import { LucideIcon, Monitor, Star } from "lucide-react";
import { Badge } from "../ui/Badge";
import parse from "html-react-parser";
import { cn } from "@/lib/utils";
import OverviewSection from "./OverviewSection";
import WatchSection from "./WatchSection";
import CharactersSection from "./CharactersSection";
import { useState } from "react";

export const containerBadges: {
  key: "status" | "year" | "format" | "rating";
  icon?: LucideIcon;
}[] = [
  { key: "status" },
  { key: "year" },
  { key: "format", icon: Monitor },
  { key: "rating", icon: Star },
];

export function DetailMain({ data }: { data: AnimeDetail }) {
  const [preset, setPreset] = useState<DetailPreset>("overview");
  const title =
    data?.title?.userPreferred ||
    data?.title?.romaji ||
    data?.title?.english ||
    data?.title?.native ||
    "Untitled";

  const description = data?.description || "No description found.";

  const handlePreset = (preset: DetailPreset) => {
    setPreset(preset);
  };
  return (
    <div className="flex h-fit flex-1 flex-col gap-3 overflow-hidden">
      {/* Meta Basic Desktop */}
      <div className="hidden flex-col gap-3 lg:flex">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="flex gap-1">
          {data &&
            containerBadges.map(({ icon: Icon, key }) => {
              const value = data[key];
              if (!value) return;

              return (
                <Badge key={key} icon={Icon} className="rounded-sm">
                  {value}
                </Badge>
              );
            })}
        </div>
        <div className="h-[140px] overflow-y-auto text-sm">{parse(description)}</div>
      </div>
      {/* Tabs */}
      <div className="flex w-fit items-center divide-x rounded-sm border">
        {(["overview", "watch", "characters"] as DetailPreset[]).map((item) => (
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

      <div className="bg-secondary/50 flex flex-col gap-2 rounded-sm p-3">
        {preset === "overview" && <OverviewSection data={data} />}
        {preset === "watch" && <WatchSection />}
        {preset === "characters" && <CharactersSection />}
      </div>
    </div>
  );
}
