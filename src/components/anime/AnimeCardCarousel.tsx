import { SearchResponse } from "@/types";
import AnimeCard from "./AnimeCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { AlarmClock, GitBranch, Star, Tv } from "lucide-react";

export default function AnimeCardCarousel({
  results,
  sectionType,
}: {
  results: SearchResponse["results"];
  sectionType: "airing" | "upcoming" | "relations" | "recommendations";
}) {
  if (results?.length < 1) return <div>Anime not found.</div>;

  const titles = {
    airing: { name: "Top Airing", icon: Tv },
    upcoming: { name: "Upcoming", icon: AlarmClock },
    relations: { name: "Relations", icon: GitBranch },
    recommendations: { name: "Recommendations", icon: Star },
  };
  const { name, icon: Icon } = titles[sectionType];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5" />
        <span className="text-xl font-semibold uppercase">{name}</span>
      </div>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {results?.map((anime) => (
            <CarouselItem key={anime.id} className="basis-1/7 pl-1">
              <AnimeCard {...anime} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
