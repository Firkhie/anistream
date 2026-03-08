import { SearchResponse } from "@/types";
import AnimeCard from "./AnimeCard";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/Carousel";
import { AlarmClock, GitBranch, Star, Tv } from "lucide-react";

export default function AnimeCardCarousel({
  results,
  sectionType,
}: {
  results: SearchResponse["results"];
  sectionType: "airing" | "upcoming" | "relations" | "recommendations";
}) {
  if (results?.length < 1) return;

  const titles = {
    airing: { name: "Top Airing", icon: Tv },
    upcoming: { name: "Upcoming", icon: AlarmClock },
    relations: { name: "Relations", icon: GitBranch },
    recommendations: { name: "Recommendations", icon: Star },
  };
  const { name, icon: Icon } = titles[sectionType];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5" />
        <span className="text-base font-semibold uppercase md:text-lg">{name}</span>
      </div>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {results?.map((anime) => (
            <CarouselItem
              key={anime.id}
              className="basis-[50%] pl-2 min-[375]:basis-[40%] min-[450px]:basis-[35%] sm:basis-[28%] md:basis-[22%] lg:basis-[18%] xl:basis-[13%]"
            >
              <AnimeCard {...anime} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
